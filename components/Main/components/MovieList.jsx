import { fetchMovies, fetchPopularMovies } from '@/utils/api'
import React from 'react'
import MovieCard from './MovieCard';
import Paginition from './Paginition';


const MovieList = async ({ page, category, year,paginationColor,paginationBG }) => {

  let movieList = [];

  if(category || year ){
    movieList = await fetchMovies(category,year,page);
  }else{
    movieList = await fetchPopularMovies(page);
  }

 
  return (
    <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[20px]'>
      {movieList.results.map((movie, index) => (
        <MovieCard key={movie.id} index={index} movie={movie} />
      ))}
      <Paginition paginationColor={paginationColor} paginationBG={paginationBG} category={category} page={page} />
    </div>
  )
}

export default MovieList