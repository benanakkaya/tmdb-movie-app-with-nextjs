import React from 'react'
import Carausel from './components/Carausel'
import MovieList from './components/MovieList';
import SideBar from './components/SideBar';
import TrendMovies from './components/TrendMovies';
import UpcomingMovies from './components/UpcomingMovies';

const MainHome = ({ paramsPage }) => {
    return (
        <div className='flex flex-col gap-[20px]'>
            <Carausel />
            <UpcomingMovies />
            <div className='grid grid-cols-5 px-[20px] gap-[20px]'>
                <div className='col-span-5 lg:col-span-4'>
                    <MovieList paramsPage={paramsPage} />
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
