import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,   // add slice to store
        movies: moviesReducer, // add slice to store  
    },
});

export default appStore;