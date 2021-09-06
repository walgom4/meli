const axios = require('axios')
const express = require('express')
const next = require('next')
const utils = require('./utils/utils')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const BASE_URL = 'https://api.mercadolibre.com'

// get items by keyword, limit and offset are optional
const getItems = async (query, limit = 4, offset = 0) => {
  return await axios.get(
    `${BASE_URL}/sites/MLA/search?q=${query}&limit=${limit}&offset=${offset}`
  )
}
// get data by id
const getItemDetail = async (id) => {
  // get general information
  const dataDetail = await axios.get(`${BASE_URL}/items/${id}`)
  // get specific information
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
            // formating data
            const formatData = utils.formatItems(response.data)
            const arrayRequestDetails = []
            const arrayRequestDetailsPictures = []
            // getting data by id to get a better quelity picture than 'thumbnail'
            formatData.items.forEach(element => {
              arrayRequestDetails.push(axios.get(`${BASE_URL}/items/${element.id}`))
            })
            axios.all(arrayRequestDetails).then(axios.spread((...responses) => {
              responses.forEach((value, i) => {
                arrayRequestDetailsPictures.push(axios.get(`${BASE_URL}/pictures/${value.data.pictures[0].id}`))
              })
              axios.all(arrayRequestDetailsPictures).then(axios.spread((...responsesDetail) => {
                responsesDetail.forEach((value, i) => {
                  // replacing thumbnail with better quality picture
                  formatData.items[i].picture = utils.filterPictures(value.data, '200x200')[0].url
                })
                // sending data
                res.json(formatData)
              })).catch(() => { res.status(500).send('Ha ocurrido un error') })
            })).catch(() => { res.status(500).send('Ha ocurrido un error') })
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
      // send not found if 'q' is not received
      res.status(400).json({ error: 'Query not found' })
    }
  })
  // get data by id
  server.get('/api/items/:id', function (req, res) {
    if (req.params.id) {
      getItemDetail(req.params.id)
        .then((response) => {
          try {
            // sending formated data
            res.json(utils.formatItemDetail(response))
          } catch (error) {
            res.status(500).send('Ha ocurrido un error')
          }
        })
        .catch((error) => { // handling errors
          console.log(error)
          if (error.response) {
            res.status(error.response.status).send(error.response.data)
          } else {
            res.status(500).send('Ha ocurrido un error')
          }
        })
    } else {
      // send not found if id is not received
      res.status(400).json({ error: 'Id not found' })
    }
  })
  // serving web page
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
