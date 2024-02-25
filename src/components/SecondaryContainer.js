import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  console.log(movies);

  if(!movies) return;

  return (
    <div className='bg-black'>
      <div className='-mt-48 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      </div>
      {/*
    MovieList - Popular , Now Playing, Trending, Horror    
  */}
    </div>
  )
}

export default SecondaryContainer