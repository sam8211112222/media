import {configureStore} from "@reduxjs/toolkit";
import {userRedicer} from "./slices/usersSlices";

export const store = configureStore({
    reducer:{
        users:userRedicer,
    }
})

