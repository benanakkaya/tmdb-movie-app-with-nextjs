import React from 'react'
import SideBarYearList from './SideBarYearList';
import SideBarCategoryList from './SideBarCategoryList';
import { fethCategories } from '@/utils/api';

const SideBar = async () => {

    const movieCategories = await fethCategories();

    const years = [
        {
            id:1,
            name:"2024",
        },
        {
            id:2,
            name:"2023",
        },
        {
            id:3,
            name:"2022",
        },
        {
            id:4,
            name:"2021",
        },
        {
            id:5,
            name:"2020",
        },
    ]


  return (
    <aside className=' flex flex-col gap-[20px] h-full w-full '>
        <SideBarCategoryList items={movieCategories.genres} title={"Türler"} />
        <SideBarYearList items={years} title={"Yıllar"} />

    </aside>
  )
}

export default SideBar