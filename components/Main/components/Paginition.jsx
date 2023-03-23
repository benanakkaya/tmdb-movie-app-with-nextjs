import Link from 'next/link';
import React from 'react'

const Paginition = ({ paramsPage }) => {

    const activePage = Number(paramsPage) || 1;



    return (
        <div className='flex items-center justify-center col-span-5'>
            {activePage !== 1 &&
                <>
                    <Link href={`/`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>İlk</Link>
                    <Link href={`/page/${activePage - 1}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>Geri</Link>
                    {activePage > 2 &&
                        <Link href={`/page/${activePage - 2}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>{activePage - 2}</Link>
                    }
                    <Link href={`/page/${activePage - 1}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>{activePage - 1}</Link>
                </>
            }
            <Link href={`/page/${activePage}`} disabled className='border-[1px] border-veryDark bg-veryDark text-white  px-3 py-1'>{activePage}</Link>
            {activePage+1 <= 150 &&
                <>
                    <Link href={`/page/${activePage + 1}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>{activePage + 1}</Link>
                    <Link href={`/page/${activePage + 2}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>{activePage + 2}</Link>
                    <Link href={`/page/${activePage + 2}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>{activePage + 3}</Link>
                    <Link href={`/page/${activePage + 3}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>{activePage + 4}</Link>
                    <Link href={`/page/${activePage + 1}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>İleri</Link>
                    <Link href={`/page/${150}`} className='border-[1px] border-veryDark text-white text-opacity-75 px-3 py-1'>Son</Link>
                </>
            }
        </div>
    )
}

export default Paginition