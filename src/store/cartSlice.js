import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const find = state.cart.findIndex(item => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {
                const tempvar = { ...action.payload, quantity: 1 }
                state.cart.push(tempvar);
            }
        },
        remove: (state, action) => {
            let allItems = current(state.cart);
            state.cart = allItems.filter((item) => {
                return item.id !== action.payload
            });
        },
        addQty: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload)
            if (find >= 0) {
                state.cart[find].quantity += 1
            }
        },
        subQty: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload)
            if (find >= 0) {
                state.cart[find].quantity -= 1
            }
        },
    },
});

export const { add, remove, addQty, subQty } = cartSlice.actions;
export default cartSlice.reducer;