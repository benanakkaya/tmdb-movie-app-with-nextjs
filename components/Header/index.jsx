import Link from 'next/link'
import React from 'react'
import SideBar from '../Main/components/SideBar'
import MobileMenu from './components/MobileMenu'
import MobileSideBar from './components/MobileSideBar'
import Nav from './components/Nav'
import SearchBox from './components/SearchBox'
import UserButtons from './components/UserButtons'



const Header = () => {



    return (
        <header className=' bg-veryDark lg:rounded-t-md relative'>
            <div className='flex items-center justify-between p-[20px]'>
                <MobileMenu >
                    <Nav />
                </MobileMenu>
                <Link href="/" className="text-3xl text-customRed font-bold">Movies</Link>
                <SearchBox />
                <UserButtons />
                <MobileSideBar>
                    <SideBar />
                </MobileSideBar>
            </div>
            <div className='w-full hidden md:flex '>
                <Nav />
            </div>

        </header>
    )
}

export default Header