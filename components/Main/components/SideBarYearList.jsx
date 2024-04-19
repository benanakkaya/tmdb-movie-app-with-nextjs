import Link from 'next/link';
import React from 'react'

const SideBarYearList = ({ title, items }) => {


  return (
    <div className='rounded-lg w-full text-white text-[14px] leading-[21px]'>
      <div className='bg-dark rounded-t-lg font-bold p-2'>{title}</div>
      <div className='bg-veryDark rounded-b-lg w-full p-2 gap-[8px] flex flex-col '>
        {items.map((item) => (
          <Link key={item.id} className='w-full hover:text-customRed flex gap-2' href={`/year/${item.name}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBarYearList;