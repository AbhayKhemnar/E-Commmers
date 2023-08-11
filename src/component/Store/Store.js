import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlices";

const Store=configureStore({
    reducer:{
        cart:cartSlice
    }
})
export default Store