import React from 'react'

const UserButtons = () => {
  return (
    <div className='hidden md:flex items-center gap-4'>
        <button className='px-2 py-1 flex items-center gap-3 bg-customRed text-white rounded-lg'>Kayıt Ol</button>
        <button className='px-2 py-1 flex items-center gap-3 bg-blue-500 text-white rounded-lg'>Giriş Yap</button>
    </div>
  )
}

export default UserButtons