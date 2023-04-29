import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import saveSlice from "./saveSlice";

const store= configureStore({
    reducer:{
        cart: cartSlice,
        save: saveSlice,
    }
})

export default store