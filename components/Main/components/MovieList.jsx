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
    <div className='col-span-5 grid-cols-2 lg:col-span-4 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 h-auto'>
        {movieList.results.map((movie,index) => (
        <MovieCard key={movie.id} index={index} movie={movie} />
        ))}
        <Paginition paramsPage={paramsPage} />
    </div>
  )
}

export default MovieList