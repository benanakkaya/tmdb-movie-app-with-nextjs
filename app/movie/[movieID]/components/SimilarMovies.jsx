import MovieCard from '@/components/Main/components/MovieCard';
import React from 'react'

const SimilarMovies = ({ movie }) => {


    return (
        <div className='bg-veryDark grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 text-white rounded-lg p-[20px] w-full gap-4'>
            <div className='text-bold col-span-2 md:col-span-3 lg:col-span-6'>Benzer Yapımlar:</div>
            {movie.similar.results.slice(0, 6).map((mov, index) => (
                <MovieCard movie={mov} index={index === 5 ? index - 1 : index} />
            ))}
        </div>
    )
}

export default SimilarMovies
