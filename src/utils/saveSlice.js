
import {createSlice} from "@reduxjs/toolkit"
const saveSlice= createSlice({
    name: "save",
    initialState:{
        savedItems:[]
    },
    reducers:{
        addToWishList: (state, action) =>{
            if (state.savedItems.indexOf(action.payload) == -1)
             state.savedItems.push(action.payload);
            // state.savedItems.push(action.payload)
        }
       
    }
})

export const {addToWishList} =saveSlice.actions;
export default saveSlice.reducer;