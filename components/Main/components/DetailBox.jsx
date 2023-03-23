"use client"
import React from 'react'
import { AiFillCaretLeft, AiFillCaretRight, AiFillCalendar, AiFillStar } from 'react-icons/ai';


const DetailBox = ({ movie, index }) => {

    return (
        <div className={`absolute z-30 ${((index - 3) % 5 === 0 || (index - 4) % 5 === 0) ? 'right-[105%]' : 'left-[105%]'} top-2 hidden lg:group-hover:flex rounded-md `}>
            <div className='bg-dark w-56 rounded-md'>
                <div className='bg-customRed p-1 text-white  flex items-center relative text-xs rounded-t-md'>
                    {movie.title}
                    {((index - 3) % 5 === 0 || (index - 4) % 5 === 0) ?
                        <AiFillCaretRight className='text-customRed z-30 absolute left-full p-0' />
                        :
                        <AiFillCaretLeft className='text-customRed z-30 absolute right-full p-0' />
                    }
                </div>
                <div className='text-white  text-opacity-75 text-[10px] p-1'>
                    {movie.overview.slice(0, 200)}...
                </div>
                <div className='p-2 text-[10px] leading-[10px]  text-customRed border-t border-white border-opacity-75 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <AiFillStar  />
                        <span className='text-white  text-opacity-75'>{movie.vote_average}</span>

                    </div>
                    <div className='flex items-center gap-2'>

                        <span className='text-white  text-opacity-75'>{movie.release_date}</span>
                        <AiFillCalendar  />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailBox