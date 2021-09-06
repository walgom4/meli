import { createSlice } from '@reduxjs/toolkit'

export const metasSlice = createSlice({
  name: 'metas',
  initialState: {
    domain: 'mercadolibre.com.co',
    title: 'Mercado Libre',
    description: 'Mercado Libre',
    image: '',
    site: 'Mercado Libre',
    card: 'product'
  },
  reducers: {
    setDomain: (state, action) => {
      state.domain = action.payload
    },
    setTitle: (state, action) => {
      state.title = `Mercado Libre - ${action.payload}`
    },
    setDescription: (state, action) => {
      state.description = action.payload
    },
    setImage: (state, action) => {
      state.image = action.payload
    },
    setSite: (state, action) => {
      state.site = action.payload
    },
    setCard: (state, action) => {
      state.card = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setDomain, setTitle, setDescription, setImage, setSite, setCard } = metasSlice.actions

export default metasSlice.reducer
