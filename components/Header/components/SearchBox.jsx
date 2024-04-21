"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { TiDelete } from "react-icons/ti";
import { fetchSearchedMovie } from '@/utils/api';
import { redirect } from 'next/navigation';

const SearchBox = () => {

    const [movieList, setMovieList] = useState([]);
    const [searchIndex, setSearchIndex] = useState("");



    const handleChange = async (e) => {
        setSearchIndex(e.target.value);
        const newList = await fetchSearchedMovie(e.target.value);
        setMovieList(newList.results)
    }

    const handleCancel = () => {
        setSearchIndex("");
        setMovieList([]);
    }



    return (
        <div className='relative hidden md:flex items-center bg-customGray  rounded-xl' >
            <input value={searchIndex} onChange={(e) => handleChange(e)} className=' px-3 pr-8 py-2 w-[300px] bg-customGray rounded-xl outline-none text-white' placeholder='Film ara...' type="text" />
            {searchIndex.length > 0 &&
                <TiDelete onClick={handleCancel} className='absolute right-2 text-lg text-customRed cursor-pointer' />
            }
            {movieList.length > 0 &&
                <ul className='p-2 text-white w-full absolute z-40 rounded-md top-full bg-lightDark mt-1 border border-veryDark '>
                    {movieList.filter((mov) => mov.poster_path).slice(0, 4).map((movie) => (
                        <li>
                            <Link onClick={handleCancel} href={`/movie/${movie.id}`} className='p-1 flex  gap-2 text-[10px]'>
                                <Image className='w-[50px] h-[75px]' src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} width={220} height={330} />
                                <div className='flex flex-col gap-1'>
                                    <small className='text-sm'>{movie.title.length > 30 ? movie.title.slice(0,30)+"..." : movie.title}</small>
                                    <small className='text-xs text-gray-300'>({movie.original_title.length > 30 ? movie.original_title.slice(0,30)+"..." : movie.original_title})</small>
                                    <p className='text-gray-400'>{movie.overview.slice(0, 90)}...</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default SearchBox