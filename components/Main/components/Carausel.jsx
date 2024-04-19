import React from 'react'
import { fetchPopularMovies } from '@/utils/api';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarauselSlider from './CarauselSlider';



const Carausel = async () => {

    const popularMovies = await fetchPopularMovies();





    return (
        <div className='w-full'>
            <CarauselSlider popularMovies={popularMovies} />
        </div>
    )
}

export default Carausel