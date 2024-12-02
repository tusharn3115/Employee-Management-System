import React from 'react'

const Header = ({ data }) => {
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-3xl font-medium'>Hey Welcome <br /> <span className='text-5xl font-bold'>{data.name}👋</span></h1>
        <button className='bg-red-600 text-xl rounded px-5 py-2 font-medium active:scale-90 duration-150'>Log Out</button>
    </div>
  )
}

export default Header