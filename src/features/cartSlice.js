import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart:[],
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart : (state,action)=>{
            const item = state.cart.find((i)=> i.id === action.payload.id);
            if(item){
                state.cart = state.cart.map((i)=>{
                    if(i.id === item.id){
                        return {...i,quantity:i.quantity + 1}
                    }
                    return i;
                })
            }else{
                state.cart.push(action.payload);
            }
        },
        incrementQuantity :(state,action)=>{
           state.cart = state.cart.map((i)=>{
            if(i.id === action.payload){
                return {...i,quantity:i.quantity + 1}
            }
            return i;
           })
        }
    }
})

export const {addToCart , incrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;