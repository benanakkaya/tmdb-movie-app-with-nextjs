import React from 'react'
import Carausel from './components/Carausel'
import MovieList from './components/MovieList';
import SideBar from './components/SideBar';
import TrendMovies from './components/TrendMovies';
import UpcomingMovies from './components/UpcomingMovies';

const MainHome = ({ page }) => {


    return (
        <div className='flex flex-col px-[20px] py-[20px] gap-[20px]'>
            <Carausel />
            <UpcomingMovies />
            <div className='grid grid-cols-5 gap-[20px]'>
                <div className='col-span-5 lg:col-span-4'>
                    <MovieList paginationColor={"border-veryDark"} paginationBG={"bg-veryDark"} page={page} />
                </div>
                <div className='hidden lg:col-span-1 lg:block '>
                    <SideBar />
                </div>
            </div>
            <TrendMovies />
        </div>
    )
}

export default MainHome;
