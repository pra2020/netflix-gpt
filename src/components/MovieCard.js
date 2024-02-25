import React from 'react'
export const IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({poster_path}) => {

    console.log(poster_path);

  return (
    <div className='w-48 pr-4'>
        <img alt="Movie Card" src={IMG_URL + poster_path}/>
    </div>
  )
}

export default MovieCard