import { fetchUpcomingMovies } from '@/utils/api'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const UpcomingMovies = async () => {

    const upcomingMovies = await fetchUpcomingMovies();
    

  return (
    <div >
        <div className='bg-dark rounded-lg p-3 text-white flex flex-col gap-4'>
            <div className='flex items-center w-full justify-between'>
                <strong className='text-[14px] leading-[21px] font-bold'>Gündemdeki Son Eklenen Filmler</strong>
                
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
                {upcomingMovies.results.slice(0,8).map((movie,index) => (
                <Link key={movie.id} href={`/movie/${movie.id}`} className={`relative flex items-center justify-center group ${index > 5 ? 'hidden lg:flex' : index > 3 ? 'hidden md:flex' : index > 2 ? 'hidden sm:flex' : null} `}>
                    <div className='sm:w-[100px] sm:h-[100px] p-[5px] rounded-full border-[3px] border-customGray group-hover:border-customRed flex items-center justify-center'>
                        <Image className='rounded-full h-[75px] w-[75px] sm:h-[85px] sm:w-[85px]' src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} height={95} width={95} />
                    </div>
                    <div className='absolute bottom-0 bg-customRed  rounded-t-lg text-xs p-1'>
                        {movie.release_date.slice(8,10)}-{movie.release_date.slice(5,7)}-{movie.release_date.slice(0,4)}
                    </div>
                </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default UpcomingMovies
