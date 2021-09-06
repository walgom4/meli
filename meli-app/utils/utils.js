// format json
const formatItems = (data) => {
  const items = data.results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      state_name: item.address.state_name// new
    }
  })
  const filterCategories = data.available_filters.filter(function (item) {
    return item.id === 'category'
  })
  const categories =
    filterCategories[0] && filterCategories[0].values
      ? filterCategories[0].values.map((item) => {
        return item.name
      })
      : []
  const response = {
    author: {
      name: 'Walter',
      lastname: 'Gomez'
    },
    categories,
    items
  }
  return response
}
// format json
const formatItemDetail = (data) => {
  const response = {
    author: {
      name: 'Walter',
      lastname: 'Gomez'
    },
    item: {
      id: data[0].id,
      title: data[0].title,
      price: {
        currency: data[0].currency_id,
        amount: data[0].price,
        decimals: 0
      },
      picture: data[0].pictures[0].url,
      condition: data[0].condition,
      free_shipping: data[0].shipping.free_shipping,
      sold_quantity: data[0].sold_quantity,
      description: data[1].plain_text
    }
  }

  return response
}
// filter pictures according with the size
const filterPictures = (data, size) => {
  return data.variations.filter(function (item) {
    return item.size === size
  })
}
// format currency
const currencyFormat = (data) => {
  const value = Math.trunc(data)
  return data ? `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}` : ''
}

// send message to whatsapp
const sendMessage = (message) => {
  // eslint-disable-next-line no-undef
  window.open(`https://wa.me/+573173763714?text=${encodeURI(message)}`, 'blank')
}

module.exports = { formatItems, formatItemDetail, currencyFormat, filterPictures, sendMessage }
