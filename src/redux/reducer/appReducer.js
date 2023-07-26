import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    data: null,
    isDataFailed: false,
    isDataLoading: false,
};


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setDataFailed(state) {
            state.isDataFailed = true;
            state.isDataLoading = false;
        },
        setDataLoading(state) {
            state.isDataFailed = false;
            state.isDataLoading = true;
        },
        setData(state, action) {
            state.data = action.payload;
            state.isDataFailed = false;
            state.isDataLoading = false;
        }
    }
})

export const {
    setDataFailed,
    setData,
    setDataLoading
} = appSlice.actions;

export default appSlice.reducer;