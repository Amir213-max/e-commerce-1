/* eslint-disable array-callback-return */
/* eslint-disable no-cond-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'
import productSlice from '../componants/Store/productSlice'
import swal from 'sweetalert';






export const filterCategoriesSlice = createSlice({
    name: 'filterCategoriesSlice',
    initialState: [],
    reducers: {
        all: (state, action) => {
state.push(action.payload)
        },
        filter: (state, action) => {

            swal("Good Job!", "You are deleted the product from the cart!", "success")
return state.filter((cart) =>{
    console.log(cart)
    return cart.category === action.payload})

            
        
        }

    },
})

// Action creators are generated for each case reducer function
export const { all, filter } = filterCategoriesSlice.actions

export default filterCategoriesSlice.reducer






