import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";

export const initialState = {
    data: null,
    isDataFailed: false,
    isDataLoading: false,
};

// export const getPosts = createAsyncThunk('data/getData', async (thunkAPI) => {
//     try {
//         const res = await getDocs(firestore)
//         return res.data
//     } catch (err) {
//         return thunkAPI.rejectWithValue({ error: err.message })
//     }
// })


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