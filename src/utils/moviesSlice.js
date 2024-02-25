import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",    // name of a slice
    initialState: {    // initial state
        nowPlayingMovies: null,
        trailerVideo: null
    }, 
    reducers: {
        // action
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});


// export actions
export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

//export reducers
export default moviesSlice.reducer;