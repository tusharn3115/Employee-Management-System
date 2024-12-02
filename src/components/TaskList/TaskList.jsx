import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div className='w-full h-[55%] overflow-x-auto flex text-white flex-nowrap items-center justify-start gap-5 py-5 mt-10'>
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask />
        }
        if (elem.newTask) {
          return <NewTask />
        }
        if (elem.completed) {
          return <CompleteTask />
        }
        if (elem.failed) {
          return <FailedTask />
        }
      })}
    </div>
  )
}

export default TaskList