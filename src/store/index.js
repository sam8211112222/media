import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/usersSlices";
import {setupListeners} from "@reduxjs/toolkit/query";
import {albumsApi} from "./apis/albumsApi";
import {photoApi} from "./apis/photoApi";


export const store = configureStore({
    reducer: {
        users: userReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photoApi.reducerPath]: photoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware)
            .concat(photoApi.middleware)
    }
})

setupListeners(store.dispatch)

export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser'
export {useFetchAlbumsQuery, useAddAlbumsMutation, useRemoveAlbumMutation} from './apis/albumsApi'
export {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from './apis/photoApi';
