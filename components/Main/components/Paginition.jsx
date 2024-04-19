"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Paginition = ({ page,paginationColor,paginationBG}) => {

    const path = usePathname();
    
    const activePage = Number(page) || 1;



    return (
        <div className='flex items-center justify-center col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5'>
            {activePage !== 1 &&
                <>
                    <Link href={`${path}?page=1`} className={`border-[1px] hidden md:block ${paginationColor} text-white text-opacity-75 px-3 py-1`}>İlk</Link>
                    <Link href={`${path}?page=${activePage - 1}`} className={`border-[1px] ${paginationColor} text-white text-opacity-75 px-3 py-1`}>Geri</Link>
                    {activePage > 2 &&
                        <Link href={`${path}?page=${activePage - 2}`} className={`border-[1px] ${paginationColor} text-white text-opacity-75 px-3 py-1`}>{activePage - 2}</Link>
                    }
                    <Link href={`${path}?page=${activePage - 1}`} className={`border-[1px] ${paginationColor} text-white text-opacity-75 px-3 py-1`}>{activePage - 1}</Link>
                </>
            }
            <Link href={`${path}?page=${activePage}`} disabled className={`border-[1px] ${paginationColor} ${paginationBG} text-white  px-3 py-1`}>{activePage}</Link>
            {activePage + 1 <= 150 &&
                <>
                    <Link href={`${path}?page=${activePage + 1}`} className={`border-[1px] ${paginationColor} text-white text-opacity-75 px-3 py-1`}>{activePage + 1}</Link>
                    <Link href={`${path}?page=${activePage + 2}`} className={`border-[1px] ${paginationColor} text-white text-opacity-75 px-3 py-1`}>{activePage + 2}</Link>
                    <Link href={`${path}?page=${activePage + 3}`} className={`border-[1px] ${paginationColor} text-white text-opacity-75 px-3 py-1`}>{activePage + 3}</Link>
                    <Link href={`${path}?page=${activePage + 4}`} className={`border-[1px] ${paginationColor} text-white text-opacity-75 px-3 py-1`}>{activePage + 4}</Link>
                    <Link href={`${path}?page=${activePage + 5}`} className={`border-[1px] ${paginationColor} text-white text-opacity-75 px-3 py-1`}>İleri</Link>
                    <Link href={`${path}?page=${150}`}  className={`border-[1px] hidden md:block ${paginationColor} text-white text-opacity-75 px-3 py-1`}>Son</Link>
                </>
            }
        </div>
    )
}

export default Paginition