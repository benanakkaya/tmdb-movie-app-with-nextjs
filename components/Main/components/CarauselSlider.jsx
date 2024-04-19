"use client"
import React from 'react'
import Slider from 'react-slick';
import CarauselCard from './CarauselCard';

const CarauselSlider = ({ popularMovies }) => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                centerPadding: "50px", // Add this line to reduce centerPadding for smaller screens
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                centerPadding: "0px", // Add this line to reduce centerPadding for smaller screens
              }
            },
          ]
    };

    return (
        <Slider {...settings}>
            {popularMovies?.results?.map((movie, index) => (
                <CarauselCard key={movie.id} index={index} movie={movie} />
            ))}

        </Slider>
    )
}

export default CarauselSlider