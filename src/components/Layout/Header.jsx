import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-3xl font-medium'>Hey Welcome <br /> <span className='text-5xl font-bold'>Tushar👋</span></h1>
        <button className='bg-red-600 text-xl text-white rounded px-5 py-2 font-semibold active:scale-90 duration-150'>Log Out</button>
    </div>
  )
}

export default Header