import { createSlice } from '@reduxjs/toolkit'






export const postsSlice = createSlice({
    name: 'posts',
    initialState:[],
    reducers: {
        addPost: (state , action) => {
         
            const findCart = state.find((product) => product.id === action.payload.id)

            if (findCart) {
                findCart.quantity += 1;
            } else {
                const cloneCart = { ...action.payload, quantity: 1 }
                state.push(cloneCart)
            }
        
        }
       
    },
})

// Action creators are generated for each case reducer function
export const { addPost  } = postsSlice.actions

export default postsSlice.reducer