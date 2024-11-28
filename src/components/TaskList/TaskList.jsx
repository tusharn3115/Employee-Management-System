import React from 'react'

const TaskList = () => {
  return (
    <div className='w-full h-[55%] overflow-x-auto flex flex-nowrap items-center justify-start gap-5 py-5 mt-10'>
        <div className='h-full w-[327px] p-5 flex-shrink-0 bg-slate-800 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 text-sm font-medium rounded bg-slate-500'>Task 1</h3>
                <h4 className='text-sm font-medium'>28 Nov 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete the react topics</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit enim ducimus, accusamus possimus voluptatibus.</p>
        </div>
    </div>
  )
}

export default TaskList