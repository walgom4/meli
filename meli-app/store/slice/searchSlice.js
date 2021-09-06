import { createSlice } from '@reduxjs/toolkit'
// handles ids and keywords to search data
export const searchSlice = createSlice({
  name: 'url',
  initialState: {
    id: '',
    keyword: '',
    categories: []
  },
  reducers: {
    setUrl: (state, action) => {
      state.keyword = `${action.payload}`
      state.id = ''
    },
    setKeyword: (state, action) => {
      state.keyword = `${action.payload}`
    },
    setUrlDetails: (state, action) => {
      state.id = `${action.payload}`
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUrl, setOffset, setLimit, setUrlDetails } = searchSlice.actions

export default searchSlice.reducer
