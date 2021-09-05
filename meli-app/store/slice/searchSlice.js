import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'url',
  initialState: {
    id: '',
    keyword: '',
    value: ''
  },
  reducers: {
    setUrl: (state, action) => {
      state.keyword = `${action.payload}`
      state.id = ''
      state.value = `/items?q=${action.payload}`
    },
    setKeyword: (state, action) => {
      state.keyword = `${action.payload}`
    },
    setUrlDetails: (state, action) => {
      state.id = `${action.payload}`
      state.value = `/items/${action.payload}`
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUrl, setOffset, setLimit, setUrlDetails } = searchSlice.actions

export default searchSlice.reducer
