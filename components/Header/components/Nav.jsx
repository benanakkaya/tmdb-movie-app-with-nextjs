import { fethCategories } from '@/utils/api';
import Link from 'next/link'
import React from 'react';
import {AiFillCaretDown} from "react-icons/ai"





const Nav = async () => {

    const movieCategories = await fethCategories();

    const navItems = [
        {
            id: 1,
            name: "Ana Sayfa"
        },
        {
            id: 2,
            name: "2023 Filmleri"
        },
        {
            id: 3,
            name: <span className='flex items-center gap-2'>Film Kategorileri <AiFillCaretDown className='text-xs'/></span>,
            subList: movieCategories.genres
        },
        {
            id: 4,
            name: "Top 250"
        }
    ]



    return (
        <nav className='flex w-full items-center p-2 md:p-0 justify-center bg-dark md:bg-veryDark md:h-[60px] px-[20px] border-t border-customRed'>
            <ul className='flex w-full flex-col md:flex-row items-center h-full text-white text-opacity-75 gap-3 md:gap-0'>
                {navItems.map((category,) => (
                    <li key={category.id} className='w-full h-full flex flex-col gap-2 items-center relative group p-2 md:p-0'>
                        <Link href="/" className='h-full flex items-center px-2 md:group-hover:border-b-2 md:group-hover:border-customRed relative'>
                            {category.name}
                        </Link>
                        {category.subList &&
                            <div className='md:absolute w-full z-30 md:w-80 bg-lightDark p-4 hidden rounded-lg rounded-tl-none md:group-hover:grid grid-cols-3 left-0 top-[100%] gap-1 ' >
                                {category.subList?.slice(0, 18).map((cat, ind) => (
                                    <Link className='hover:text-customRed' key={ind} href="/">{cat.name}</Link>
                                ))}
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;