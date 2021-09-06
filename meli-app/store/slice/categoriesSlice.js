import { createSlice } from '@reduxjs/toolkit'

// this is used by BreadCrumb
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: []
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
