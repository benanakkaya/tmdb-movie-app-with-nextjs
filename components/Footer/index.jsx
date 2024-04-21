import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='container bg-veryDark p-[20px] flex flex-col gap-1'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-1 p-[20px]'>
                <Link href="/" className="text-3xl text-customRed font-bold">Movies</Link>
                <div className='grid grid-cols-3 gap-10 sm:gap-18 md:gap-24 text-sm '>
                    <div className='text-white flex flex-col gap-2'>
                        <strong className='font-bold text-white text-opacity-50'>Title</strong>
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit</li>
                            <li>Amet</li>
                            <li>Consectetur</li>
                        </ul>
                    </div>
                    <div className='text-white flex flex-col gap-2'>
                        <strong className='font-bold text-white text-opacity-50'>Title</strong>
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit</li>
                            <li>Amet</li>
                            <li>Consectetur</li>
                        </ul>
                    </div>
                    <div className='text-white flex flex-col gap-2'>
                        <strong className='font-bold text-white text-opacity-50'>Title</strong>
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                            <li>Sit</li>
                            <li>Amet</li>
                            <li>Consectetur</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-[20px] border-t border-t-white text-white text-sm text-opacity-75'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium eius ad, perspiciatis voluptates quis maiores consectetur nemo hic. Debitis consequuntur ipsam quos obcaecati animi nam tenetur sint dolor ab? Error qui eum eaque? Quidem fugiat natus eius? Reiciendis est recusandae blanditiis, libero tenetur neque repellat facere dicta maiores minima ad quia eum quisquam debitis fugit commodi nesciunt ut nostrum odit accusantium eius optio cupiditate voluptates! Odio est vero veniam. Expedita deleniti corrupti doloribus illum molestiae laborum aperiam nostrum! </p>
                <p className='w-full text-right'>made by <Link target='_blank' href="http://github.com/benanakkaya" className='text-customRed'>Benan</Link></p>
            </div>
        </footer>
    )
}

export default Footer
