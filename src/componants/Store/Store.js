import { configureStore } from '@reduxjs/toolkit'

import productSlice from './productSlice'
import postsSlice from '../../Pages/postsSlice'
import cartSlice from '../../Pages/cartSlice'
import categoriesSlice from '../../Pages/categoriesSlice'

import filterSlice from '../../Pages/filterSlice'

export const store = configureStore({
    reducer: {
        data : productSlice,
        posts : postsSlice,
        carts :cartSlice,
        categoriesData : categoriesSlice,
        fil : filterSlice
        
    
    },
})

