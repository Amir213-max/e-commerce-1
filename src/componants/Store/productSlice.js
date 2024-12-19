/* eslint-disable array-callback-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import swal from 'sweetalert';

// جلب البيانات من API
export const getData = createAsyncThunk('ecommerce/getData', async (_, thunkAPI) => {
    try {
        const res = await fetch('https://dummyjson.com/products?skip=0&limit=200');
        const data = await res.json();
        console.log(data);
        return data.products;
    } catch (error) {
        console.error("Error fetching data:", error);
        return thunkAPI.rejectWithValue("Failed to fetch products");
    }
});

export const productSlice = createSlice({
    name: 'ecommerce',
    initialState: { 
        product: [],          // المنتجات المعروضة حاليًا
        allProducts: [],      // جميع المنتجات الأصلية
        loading: false,       // حالة التحميل
        searchTerm: ""        // قيمة البحث
    },
    reducers: {
        // فلترة المنتجات حسب الفئة
        filter: (state, action) => {
            const filtered = state.allProducts.filter(
                (product) => product.category === action.payload
            );
            if (filtered.length > 0) {
                state.product = filtered;
                swal("Good Job!", `You are filtered only ${action.payload} product(s)!`, "success");
            } else {
                swal("Oops!", `No products found in category: ${action.payload}`, "warning");
            }
        },
        // إعادة ضبط الفلترة
        resetFilter: (state) => {
            state.product = state.allProducts;
            state.searchTerm = "";
        },
        // تصفية المنتجات بناءً على البحث
        searchProducts: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.searchTerm = searchTerm;
            state.product = state.allProducts.filter((product) =>
                product.title.toLowerCase().includes(searchTerm)
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.product = action.payload;     // المنتجات المعروضة حاليًا
                state.allProducts = action.payload; // حفظ نسخة من جميع المنتجات
                state.loading = false;
            })
            .addCase(getData.rejected, (state, action) => {
                state.loading = false;
                console.error("Fetch error:", action.payload);
            });
    },
});

// تصدير الـ actions
export const { filter, resetFilter,loading, searchProducts } = productSlice.actions;

// تصدير الـ reducer
export default productSlice.reducer;
