import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Overview = ({ movie }) => {

    return (
        <div className='bg-veryDark rounded-lg p-[20px] flex flex-col  md:flex-row gap-4'>
            <Image className='rounded-lg' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} width={300} height={450} alt={movie.title} />
            <div className='flex flex-col gap-4 text-white w-full'>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col justify-center gap-2'>
                        <div className='flex flex-col md:flex-row md:items-center gap-2'>
                            <div className='font-bold text-lg'>{movie.title} </div>
                            {movie.title !== movie.original_title && <div className='text-sm text-white text-opacity-75'>({movie.original_title})</div>}
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='text-xs text-white text-opacity-50'>Süre: <span className='text-white text-opacity-75'>{movie.runtime} dk.</span> </div>
                            <div className='text-xs text-white text-opacity-50'>Yapım Yılı: <span className='text-white text-opacity-75'>{movie.release_date.slice(0, 4)}</span> </div>
                            <div className='text-xs text-white text-opacity-50'>Ortalam Puan: <span className='text-white text-opacity-75'>{movie.vote_average.toFixed(2)}</span> </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-white bg-opacity-50' />
                <div className='text-sm font-bold items-center flex gap-2'>
                    Tür:
                    <span className='flex gap-2 items-center'>
                        {movie.genres.map((genre) => <Link key={genre.id} href={`/category/${genre.id}`} className='rounded-xl border border-customRed border-opacity-50 p-1 font-normal text-customRed '>{genre.name}</Link>)}
                    </span>
                </div>
                <p className='text-white text-opacity-75'>
                    {movie.overview}
                </p>

            </div>
        </div>
    )
}

export default Overview
