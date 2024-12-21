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
import { filter } from './filterCategories';






export const filterSlice = createSlice({
    name: 'fil',
    initialState: [],
    reducers: {
    
        fil: (state, action) => {

            swal("Good Job!", "You are deleted the product from the cart!", "success")
 state.filter((pro) =>{
    console.log(pro)
     pro.category === action.payload
    
    state.push(pro)})
    

            
        
        }

    },
})

// Action creators are generated for each case reducer function
export const { fil } = filterSlice.actions

export default filterSlice.reducer






