const axios = require('axios')
const express = require('express')
const next = require('next')
const utils = require('./utils/utils')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const BASE_URL = 'https://api.mercadolibre.com'

const getItems = async (query, limit = 4, offset = 0) => {
  return await axios.get(
    `${BASE_URL}/sites/MLA/search?q=${query}&limit=${limit}&offset=${offset}`
  )
}

const getItemDetail = async (id) => {
  const dataDetail = await axios.get(`${BASE_URL}/items/${id}`)
  const dataDesc = await axios.get(`${BASE_URL}/items/${id}/description`)
  return [dataDetail.data, dataDesc.data]
}

app.prepare().then(() => {
  const server = express()

  server.get('/api/items', function (req, res) {
    if (req.query.q) {
      getItems(
        req.query.q,
        req.query.limit ? req.query.limit : null,
        req.query.offset ? req.query.offset : null
      )
        .then((response) => {
          try {
            const formatData = utils.formatItems(response.data)
            const arrayRequestDetails = []
            const arrayRequestDetailsPictures = []
            formatData.items.forEach(element => {
              arrayRequestDetails.push(axios.get(`${BASE_URL}/items/${element.id}`))
            })
            axios.all(arrayRequestDetails).then(axios.spread((...responses) => {
              responses.forEach((value, i) => {
                arrayRequestDetailsPictures.push(axios.get(`${BASE_URL}/pictures/${value.data.pictures[0].id}`))
              })
              axios.all(arrayRequestDetailsPictures).then(axios.spread((...responsesDetail) => {
                responsesDetail.forEach((value, i) => {
                  formatData.items[i].picture = utils.filterPictures(value.data, '200x200')[0].url
                })
                res.json(formatData)
              }))
            }))
          } catch (error) {
            console.log(error)
            res.status(500).send('Ha ocurrido un error')
          }
        })
        .catch((error) => {
          console.log(error)
          if (error.response) {
            res.status(error.response.status).send(error.response.data)
          } else {
            res.status(500).send('Ha ocurrido un error')
          }
        })
    } else {
      res.status(400).json({ error: 'Query not found' })
    }
  })
  server.get('/api/items/:id', function (req, res) {
    if (req.params.id) {
      getItemDetail(req.params.id)
        .then((response) => {
          try {
            res.json(utils.formatItemDetail(response))
          } catch (error) {
            res.status(500).send('Ha ocurrido un error')
          }
        })
        .catch((error) => {
          console.log(error)
          if (error.response) {
            res.status(error.response.status).send(error.response.data)
          } else {
            res.status(500).send('Ha ocurrido un error')
          }
        })
    } else {
      res.status(400).json({ error: 'Id not found' })
    }
  })
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
