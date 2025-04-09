import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart'
import searchReducer from './SearchSlice'
import OrderReducer from './orderPlaceSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer,
        order: OrderReducer,
        // user: ... 
    }
})

export default store;