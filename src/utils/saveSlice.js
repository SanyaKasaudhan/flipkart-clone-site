
import {createSlice} from "@reduxjs/toolkit"
const saveSlice= createSlice({
    name: "save",
    initialState:{
        savedItems:[]
    },
    reducers:{
        addToWishList: (state, action) => {
            const itemExists = state.savedItems.some(item => item.id === action.payload.id);
            if (!itemExists) {
              return {
                ...state,
                savedItems: [...state.savedItems, action.payload],
              };
            }
            return state;
          }
    }
})

export const {addToWishList} =saveSlice.actions;
export default saveSlice.reducer;