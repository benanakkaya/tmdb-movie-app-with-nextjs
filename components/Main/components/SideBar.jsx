import { fethCategories } from '@/utils/api'
import React from 'react'
import SideBarList from './SideBarList'

const SideBar = async () => {

    const movieCategories = await fethCategories();

    const years = [
        {
            id:1,
            name:"2023",
        },
        {
            id:2,
            name:"2022",
        },
        {
            id:3,
            name:"2021",
        },
        {
            id:4,
            name:"2020",
        },
        {
            id:5,
            name:"2019",
        },
    ]


  return (
    <aside className=' flex flex-col gap-[20px] h-full  '>
        <SideBarList items={movieCategories.genres} title={"Türler"} />
        <SideBarList items={years} title={"Yıllar"} />


        
    </aside>
  )
}

export default SideBar