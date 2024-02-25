import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  // used the custom hook to call get the movies through api
  useNowPlayingMovies();

  return (
    <div>
      <Header/>

    <MainContainer/>
    <SecondaryContainer/>

      {/*
   MainContainer
    - VideBackground
    - VideoTile
   SecondaryContainer
    - MovieList * n
    - cards * n   

      */}
    </div>
  )
}

export default Browse