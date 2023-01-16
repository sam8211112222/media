import {createSlice} from "@reduxjs/toolkit";

const usersSlices =createSlice({
    name:'users',
    initialState:{
        data:[],
        isLoading:false,
        error:null,
    },
    reducers:{}
})

export const userReducer = usersSlices.reducer
