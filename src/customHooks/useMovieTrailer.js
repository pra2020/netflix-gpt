import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDJiYzk3YTIyY2NmZGUxZWJmNTY4ZGU5NjZhZTA3ZSIsInN1YiI6IjY1ZGFjZWQwYTI0YzUwMDE2MjBmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYGAA2IkHHvRfOIXU0kYB6lgifmL_AD0Zw99DJUc0iE'
    }
};

// custom hook to fetch the video and update it to store
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?', API_OPTIONS)
        const json = await data.json();

        // const filterData = json.results.filter(video => video.type === "Teaser")
        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));

    };

    useEffect(() => {
        getMovieVideos();
    })
}

export default useMovieTrailer;