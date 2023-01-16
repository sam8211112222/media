import {configureStore} from "@reduxjs/toolkit";
import { userReducer} from "./slices/usersSlices";

export const store = configureStore({
    reducer:{
        users:userReducer,
    }
})

