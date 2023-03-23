import MainHome from '@/components/Main';
import React from 'react'



const MoviePage = ({params}) => {


  return (
    <main className="bg-lightDark flex flex-col">
     <MainHome paramsPage={params.page} />
    </main>
  )
}

export default MoviePage
