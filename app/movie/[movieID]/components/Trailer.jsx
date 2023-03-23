"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { BsGooglePlay } from "react-icons/bs"

const Trailer = ({ trailer, bg }) => {

    const [play, setPlay] = useState(false);

    return (
        <div>
            {play === false ?
                <div onClick={() => setPlay(true)} className='flex justify-center items-center relative cursor-pointer group'>
                    <div className='relative'>
                        <Image className='rounded-lg' src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${bg}`} width={850} height={478} alt="trailer" />
                        <div className='absolute top-0 left-0 rounded-lg bg-black bg-opacity-50 w-full h-full' />
                    </div>
                    <BsGooglePlay className=' text-7xl text-customRed absolute  group-hover:animate-bounce transition-all duration-500' />
                </div>
                :
                <div className='flex items-center justify-center'>
                    <iframe width={850} height={478} className="rounded-lg"  src={`https://www.youtube.com/embed/${trailer}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            }
        </div>
    )
}

export default Trailer
