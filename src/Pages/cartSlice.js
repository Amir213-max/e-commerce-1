/* eslint-disable no-cond-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'
import productSlice from '../componants/Store/productSlice'
import swal from 'sweetalert';






export const cartSlice = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        addCart: (state, action) => {

            const findCart = state.find((product) => product.id === action.payload.id)

            if (findCart) {
                findCart.quantity += 1;
                swal("Good job!", "Now You updated the quantity of product in the cart!", "success")
            } else {
                const cloneCart = { ...action.payload, quantity: 1 }
                state.push(cloneCart)
                swal("Excellent Work!", "You add the product in the cart!", "success")
            }
        },
        deleteCart: (state, action) => {

            swal("Good Job!", "You are deleted the product from the cart!", "success")
return state.filter((cart) => cart.id !== action.payload.id)
            
        
        },
        clearCart: (state, action) => {
            swal("Good Job!", "You are cleared the cart!", "success")
            return [];


        },
        increase: (state, action) => {

            const findCart = state.find((product) => product.id === action.payload.id)

            if (findCart) {
                findCart.quantity += 1;
            } else {
                const cloneCart = { ...action.payload, quantity: 1 }
                state.push(cloneCart)
            }
        
        },
        decrease: (state, action) => {

            const findCart = state.find((product) => product.id === action.payload.id)

            if (findCart.quantity > 1) {
                findCart.quantity--;
            }
             else if(findCart.quantity = 1) {
                // const cloneCart = { ...action.payload, quantity: 1 }
                // state.push(cloneCart)
                return state.filter((cart) => cart.id !== action.payload.id)
            }
        
        }

    },
})

// Action creators are generated for each case reducer function
export const { addCart, deleteCart, clearCart, increase , decrease } = cartSlice.actions

export default cartSlice.reducer