import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div className='w-full h-[55%] overflow-x-auto flex text-white flex-nowrap items-center justify-start gap-5 py-5 mt-10'>
      {data.tasks.map((elem, id) => {
        if (elem.active) {
          return <AcceptTask key={id} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask key={id} data={elem} />
        }
        if (elem.completed) {
          return <CompleteTask key={id} data={elem} />
        }
        if (elem.failed) {
          return <FailedTask key={id} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList