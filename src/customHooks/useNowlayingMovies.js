// custom hook is nothing but a custom function

import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux'; 
import { useEffect } from 'react'; 

const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDJiYzk3YTIyY2NmZGUxZWJmNTY4ZGU5NjZhZTA3ZSIsInN1YiI6IjY1ZGFjZWQwYTI0YzUwMDE2MjBmNzU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYGAA2IkHHvRfOIXU0kYB6lgifmL_AD0Zw99DJUc0iE'
    }
  };

const useNowPlayingMovies = () => {
  // fetch data from TMDB Api and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
    API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  // make the api csll only once: while the page is loaded
  useEffect(() => {
    getNowPlayingMovies();
  }, [])
};

export default useNowPlayingMovies;