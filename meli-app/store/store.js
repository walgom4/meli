import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slice/searchSlice'
import categoriesSlice from './slice/categoriesSlice'
import metasSlice from './slice/metasSlice'

export default configureStore({
  // available reducers
  reducer: {
    url: searchSlice,
    categories: categoriesSlice,
    metas: metasSlice
  }
})
