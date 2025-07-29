import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sortType: {
        name: 'популярности', prop: 'rating',
    }
};

const filerSlice = createSlice ({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId (state, action) {
            state.categoryId = action.payload;
        },
        setSortType (state, action) {
            state.sortType = action.payload;
        }
    }
})

export const { setCategoryId, setSortType } = filerSlice.actions;
export default filerSlice.reducer;