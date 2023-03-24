import { fetchMovieDetails } from '@/utils/api'
import React from 'react'
import Cast from './components/Cast';
import Overview from './components/Overview';
import SimilarMovies from './components/SimilarMovies';
import Trailer from './components/Trailer';

const MoviePage = async ({ params }) => {

    const movie = await fetchMovieDetails(params.movieID);

    return (
        <div className='bg-dark p-[20px] flex flex-col gap-[20px]'>
            {movie.videos.results[0]?.key &&
                <Trailer bg={movie.backdrop_path} trailer={movie.videos.results[0].key} />
            }
            <Overview movie={movie} />
            <Cast movie={movie} />
            <SimilarMovies movie={movie} />
        </div>
    )
}

export default MoviePage
