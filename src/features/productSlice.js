import {createAsyncThunk  , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
export const fetchProducts = createAsyncThunk("product/fetchProducts",async()=>{
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data;
    return data.products;
})

export const fetchSingleProduct = createAsyncThunk("product/fetchSingleProduct",async (id)=>{
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const data = response.data;
  return data;
})

export const fetchSearchedProducts = createAsyncThunk("product/fetchSearchedProducts",async(query)=>{
    const response = await axios.get(`https://dummyjson.com/products/search`,{
      params:{
        q:query,
      }
    });
    const data = response.data;
    return data?.products;
})


export const fetchProductsCategory = createAsyncThunk("product/fetchProductsCategory",async(category)=>{
  const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
  const data = response.data;
  return data.products;
});
const initialState = {
  // all products //
    products :[],
    status:"idle",
    error:null,
  // single Product //
   singleProduct:{},
   singleProductStatus:"idle",
   singleProductError:null,
  //products by category // 
    productsCategory:[],
    productsCategoryStatus:"idle",
    productsCategoryError:null,
  // searched Products // 
    searchedProducts:[],
    searechedProductsStatus:"idle",
    searchedProductsError:null
}
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
       .addCase(fetchProducts.pending , (state)=>{
         state.status = "loading";
       })
       .addCase(fetchProducts.fulfilled , (state,action)=>{
         state.status = "succeded";
         state.products = action.payload;
       })
       .addCase(fetchProducts.rejected , (state,action)=>{
         state.status = "failed";
         state.error = action.error.message;
       })
       .addCase(fetchSingleProduct.pending , (state)=>{
         state.singleProductStatus = "loading";
       })
       .addCase(fetchSingleProduct.fulfilled , (state,action)=>{
         state.singleProductStatus = "succeded";
         state.singleProduct = action.payload;
       })
       .addCase(fetchSingleProduct.rejected , (state,action)=>{
         state.singleProductStatus = "failed";
         state.singleProduct = action.error.message;
       })
       .addCase(fetchProductsCategory.pending , (state)=>{
         state.productsCategoryStatus = "loading";
       })
       .addCase(fetchProductsCategory.fulfilled , (state,action)=>{
         state.productsCategoryStatus = "succeded";
         state.productsCategory = action.payload;
       })
       .addCase(fetchProductsCategory.rejected , (state,action)=>{
         state.productsCategoryStatus = "failed";
         state.productsCategoryError = action.error.message;
       })
       .addCase(fetchSearchedProducts.pending , (state)=>{
         state.searechedProductsStatus = "loading";
       })
       .addCase(fetchSearchedProducts.fulfilled , (state,action)=>{
         state.searechedProductsStatus = "succeded";
         state.searchedProducts = action.payload;
       })
       .addCase(fetchSearchedProducts.rejected , (state,action)=>{
         state.searechedProductsStatus = "failed";
         state.searchedProductsError = action.error.message;
       })
    }
})

export const products = state=>state.product.products
export const status = state=>state.product.status;
export const error = state=>state.product.error;

export const singleProduct = state=>state.product.singleProduct
export const singleProductStatus = state=>state.product.singleProductStatus;
export const singleProductError = state=>state.product.singleProductError;


export const productsCategory = state=>state.product.productsCategory
export const productsCategoryStatus = state=>state.product.productsCategoryStatus;
export const productsCategoryError = state=>state.product.productsCategoryError;


export const searchedProducts = state=>state.product.searchedProducts;
export const searechedProductsStatus = state=>state.product.searechedProductsStatus;
export const searchedProductsError = state=>state.product.searchedProductsError;

export default productSlice.reducer;