import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {

    console.log(movies);

    return (
        <div className='px-6 bg-black'>
            <h1 className='text-3xl text-white font-bold py-4'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies.map((movie) => <MovieCard key={movie.id} poster_path={movie.poster_path} />)}
                </div>
            </div>

        </div>
    )
}

export default MovieList