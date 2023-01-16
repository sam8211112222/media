import {createSlice} from "@reduxjs/toolkit";

const usersSlices =createSlice({
    name:'users',
    initialState:{
        data:[]
    },
    reducers:{}
})

export const userRedicer = usersSlices.reducer
