import React from 'react'

const NewTask = () => {
  return (
    <div className='h-full w-[327px] p-5 flex-shrink-0 bg-slate-800 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 text-base font-medium rounded bg-slate-500'>Task 1</h3>
                <h4 className='text-sm font-medium'>28 Nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-medium'>Complete the react topics</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit enim ducimus, accusamus possimus voluptatibus.</p>
            <div className='flex justify-between mt-9 text-white'>
                <button className='bg-blue-500 py-1 px-2 text-sm rounded-md active:scale-95 duration-200'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask