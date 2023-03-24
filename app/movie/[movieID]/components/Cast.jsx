import Link from 'next/link'
import React from 'react'

const Cast = ({ movie }) => {
    return (
        <div className='bg-veryDark text-white rounded-lg p-[20px] w-full flex flex-col gap-4'>
            <div className='text-bold'>Öne Çıkan Oyuncular:</div>
            <div className='overflow-auto grid grid-cols-2  md:grid-cols-3  lg:grid-cols-6 items-center  gap-3'>
                {movie.credits.cast.slice(0,6).map((cast) => (
                    <Link href="/" className='flex flex-col gap-1 text-xs items-center group'>
                        <div className='rounded-full group-hover:border-customRed border-customGray border-2 w-24 h-24 flex items-center justify-center'>
                        <img className='w-20 h-20 rounded-full' src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${cast.profile_path}`} height={175} width={138} alt={cast.name} />
                        </div>
                        <div title={cast.name}>{cast.name.slice(0,20)}{cast.name.length > 20 ? '...' : null}</div>
                        <div title={cast.character} className='text-white text-opacity-75 text-[10px]'>({cast.character.slice(0,20)}{cast.character.length > 20 ? '...' : null})</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Cast
