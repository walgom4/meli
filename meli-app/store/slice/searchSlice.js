import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'url',
  initialState: {
    keyword: '',
    value: ''
  },
  reducers: {
    setUrl: (state, action) => {
      state.keyword = `${action.payload}`
      state.value = `/items?q=${action.payload}`
    },
    setKeyword: (state, action) => {
      state.keyword = `${action.payload}`
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUrl, setOffset, setLimit } = searchSlice.actions

export default searchSlice.reducer
