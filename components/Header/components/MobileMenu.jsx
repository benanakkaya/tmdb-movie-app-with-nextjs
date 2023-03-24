"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import { AiOutlineMenu } from 'react-icons/ai'

const MobileMenu = ({children}) => {

    const [visibility, setVisibility] = useState(false);


    return (
        <>
            <AiOutlineMenu onClick={() => setVisibility((prev) => !prev)} className="md:hidden cursor-pointer text-white text-opacity-75 text-xl" />
           {visibility && 
            <div className='absolute top-full left-0 w-full z-40  flex md:hidden'>
                {children}
            </div>
            }
        </>
    )
}

export default MobileMenu