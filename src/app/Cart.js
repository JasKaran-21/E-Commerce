import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { productId, price, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, price, quantity });
            };
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.productId !== action.payload);
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                if (quantity > 0) {
                    state.items[indexProductId].quantity = quantity;
                } else {
                    // delete state.items[indexProductId];
                    state.items = (state.items).filter(item => item.productId !== productId);
                }
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount === 0;
            localStorage.setItem("carts", JSON.stringify(state.items))
        },
        // toggleStatusTab: (state) => {
        //     state.statusTab = !state.statusTab;
        // },
    },
})

export const { addToCart, removeFromCart, changeQuantity, toggleStatusTab, clearCart } = cartSlice.actions;
export default cartSlice.reducer;