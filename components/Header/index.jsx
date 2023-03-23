import Link from 'next/link'
import React from 'react'
import Nav from './components/Nav'
import SearchBox from './components/SearchBox'
import UserButtons from './components/UserButtons'



const Header = () => {



    return (
        <header className=' bg-veryDark lg:rounded-t-md'>
            <div className='flex items-center justify-between p-[20px]'>
                <Link href="/" className="text-3xl text-customRed font-bold">Movies</Link>
                <SearchBox />
                <UserButtons />
                
            </div>
            <Nav />
        </header>
    )
}

export default Header