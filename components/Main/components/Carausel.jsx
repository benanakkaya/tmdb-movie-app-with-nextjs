"use client"
import React, { useEffect, useState } from 'react'
import CarauselCard from './CarauselCard';
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr"
import { fetchPopularMovies } from '@/utils/api';
import Link from 'next/link';


const Carausel = () => {

    const [popularMovies, setPopularMovies] = useState([]);


    const getPopularMovies = async () => {
        const pMovies = await fetchPopularMovies();
        setPopularMovies(pMovies.results);
    }

    useEffect(() => {
        getPopularMovies();
    }, []);


    const handlePrev = async () => {
        const oldList = popularMovies;
        const firstItem = await oldList.shift();
        setPopularMovies([...oldList, firstItem]);
    }

    const handleNext = async () => {
        const oldList = popularMovies;
        const lastItem = await oldList.pop();
        setPopularMovies([lastItem, ...oldList]);
    }



    return (
        <Link href="/" className='flex items-center relative'>

            <GrCaretPrevious onClick={handlePrev} className='absolute text-2xl p-1 z-20 left-4 cursor-pointer hover:scale-150 rounded-full bg-customRed' />
            <GrCaretNext onClick={handleNext} className='absolute text-2xl p-1 z-20 right-4 cursor-pointer hover:scale-150 rounded-full bg-customRed' />

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-[20px] pt-[20px] '>
                {popularMovies?.map((movie, index) => (
                    <CarauselCard key={movie.id} index={index} movie={movie} width={158} height={238} />
                ))}

            </div>
        </Link>
    )
}

export default Carausel