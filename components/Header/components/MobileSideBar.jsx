"use client"
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';


const MobileSideBar = ({children}) => {

    const [menuVisibility, setMenuVisibility] = useState(false);


    return (
        <>
            <FaFilter onClick={() => setMenuVisibility((prev) => !prev)} className="md:hidden cursor-pointer text-white text-opacity-75 text-xl" />
            {menuVisibility &&
                <div className='absolute md:hidden rounded-bl-lg top-full z-[80] w-72 bg-customGray border-customRed border-opacity-75 border-2 border-t-0 border-r-0 p-2 right-0'>
                    {children}
                </div>
            }
        </>
    )
}

export default MobileSideBar
