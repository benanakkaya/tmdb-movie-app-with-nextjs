import MovieList from '@/components/Main/components/MovieList'
import SideBar from '@/components/Main/components/SideBar'
import { fethCategories } from '@/utils/api';
import React from 'react'

const CategoryPage = async ({ params, searchParams }) => {

    const movieCategories = await fethCategories();

    const category = movieCategories.genres.find(cat => cat.id == params.category)


    return (
        <main className="bg-lightDark py-[20px]">
            <div className='grid grid-cols-5 px-[20px] gap-[20px]'>
                <div className='col-span-5 lg:col-span-4'>
                    <div className='bg-dark rounded-t-lg font-bold p-2 text-white'>{category.name} Kategorisine Ait Filmler</div>
                    <div className='py-[20px] px-2 bg-veryDark'>
                        <MovieList paginationColor={"border-dark"} paginationBG={"bg-dark"} category={params.category} year={""} page={searchParams.page} />
                    </div>
                </div>
                <div className='hidden lg:col-span-1 lg:block'>
                    <SideBar />
                </div>
            </div>
        </main>
    )
}

export default CategoryPage