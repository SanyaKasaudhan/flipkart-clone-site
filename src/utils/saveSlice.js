
import {createSlice} from "@reduxjs/toolkit"
const saveSlice= createSlice({
    name: "save",
    initialState:{
        savedItems:[]
    },
    reducers:{
        addToWishList: (state, action) =>{
            state.savedItems.push(action.payload)
        }
       
    }
})

export const {addToWishList} =saveSlice.actions;
export default saveSlice.reducer;