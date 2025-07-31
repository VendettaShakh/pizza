import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    cartItems: []
};

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems (state, action) {
            state.cartItems.push(action.payload);
        },
        setClearCart (state) {
            state.cartItems = [];
        }
    }
})

export const { setCartItems, setClearCart } = cartSlice.actions;
export default cartSlice.reducer;