import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  // used the custom hook to call get the movies through api
  useNowPlayingMovies();

  return (
    <div>
      <Header /> 
      {showGptSearch ? (<GptSearch />) : (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
      )}


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