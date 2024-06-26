"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { AiFillCalendar, AiFillStar } from "react-icons/ai";
import Tilt from 'react-parallax-tilt';
import DetailBox from './DetailBox';



const MovieCard = ({ movie, index }) => {


    return (
        <Link href={`/movie/${movie.id}`} className={`relative flex group w-full justify-center`}>

            <Tilt className={`w-full relative flex flex-col items-center`} glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="all" glareBorderRadius="8px">
                <Image className='rounded-lg w-full' width={220} height={330} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="poster" />
                <div className='absolute font-bold bottom-0 left-0 w-full bg-black bg-opacity-40 rounded-b-lg flex items-center justify-between p-2'>
                    <span className='z-10 flex items-center gap-2  text-white '>
                        <AiFillCalendar className='text-green-500 ' />
                        {movie.release_date.slice(0, 4)}
                    </span>
                    <span className='z-10 flex items-center gap-2  text-white '>
                        <AiFillStar className='text-yellow-500 ' />
                        {movie.vote_average.toFixed(1)}
                    </span>
                </div>
            </Tilt>

            <DetailBox movie={movie} index={index} />

        </Link>

    )
}

export default MovieCard











