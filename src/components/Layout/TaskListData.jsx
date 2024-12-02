import React from 'react'

const TaskListData = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between gap-5 text-white'>
        <div className="w-[45%] py-6 px-9 rounded-xl bg-blue-500">
            <h2 className='text-3xl font-bold'>10</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className="w-[45%] py-6 px-9 rounded-xl bg-emerald-500">
            <h2 className='text-3xl font-bold'>5</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3>
        </div>
        <div className="w-[45%] py-6 px-9 rounded-xl bg-yellow-500">
            <h2 className='text-3xl font-bold'>3</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
        </div>
        <div className="w-[45%] py-6 px-9 rounded-xl bg-red-500">
            <h2 className='text-3xl font-bold'>2</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListData