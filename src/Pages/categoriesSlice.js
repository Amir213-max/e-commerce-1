import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk to fetch categories
export const getCategories = createAsyncThunk(
    'ecommerce/getCategories',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('https://dummyjson.com/products/categories');
            if (!res.ok) {
                throw new Error('Failed to fetch categories');
            }
            return await res.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const categoriesSlice = createSlice({
    name: 'ecommerce',
    initialState: {
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Reducer example (not used in this case)
        fetchCatigories: (state, action) => {
            state.categories.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong';
            });
    },
});

// Export actions if needed
export const  fetchCatigories  = categoriesSlice.actions;

// Export the reducer
export default categoriesSlice.reducer;
