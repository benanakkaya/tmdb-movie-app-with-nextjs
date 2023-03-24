import { fetchAllMovies } from '@/utils/api'
import React from 'react'
import MovieCard from './MovieCard';
import Paginition from './Paginition';


const MovieList = async ({paramsPage}) => {
  
    
    let movieList = [];

    if(paramsPage){
        movieList = await fetchAllMovies(paramsPage);
    }else{
        movieList = await fetchAllMovies(1);
    }


  return (
    <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
        {movieList.results.map((movie,index) => (
        <MovieCard key={movie.id} index={index} movie={movie} />
        ))}
        <Paginition paramsPage={paramsPage} />
    </div>
  )
}

export default MovieList