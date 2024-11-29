import React from 'react'

const AdminHeader = () => {
  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-3xl font-medium'>Welcome Back <br /> <span className='text-5xl font-bold'>Admin🫡</span></h1>
        <button className='bg-red-600 text-xl text-white rounded px-5 py-2 font-semibold active:scale-90 duration-150'>Log Out</button>
    </div>
  )
}

export default AdminHeader