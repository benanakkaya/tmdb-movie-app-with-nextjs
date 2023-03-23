import { fetchTrendMovies } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const TrendMovies = async () => {

    const trendMovies = await fetchTrendMovies();


    return (
        <div className='px-[20px] grid grid-cols-1 md:grid-cols-4 gap-3 pb-[20px]'>
            {trendMovies.results.slice(4,8).map((movie) => (
            <Link className='relative group flex justify-center' href={`/movie/${movie.id}`}>
                <Image className='rounded-xl' src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${movie.backdrop_path}`} width={264} height={468} alt={movie.title} />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 group-hover:bg-opacity-0 rounded-xl' />
                <strong className='text-white font-bold absolute bottom-6'>{movie.title}</strong>
                <strong className='text-white font-bold absolute bottom-2'>({movie.original_title})</strong>
           </Link>
            ))}
        </div>
    )
}

export default TrendMovies
