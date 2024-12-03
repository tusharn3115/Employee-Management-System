import React from 'react'
import Header from '../Layout/Header'
import TaskListData from '../Layout/TaskListData'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
    return (
        <div className='px-20 py-10 bg-[#1c1c1c] h-screen'>
            <Header data={data} />
            <TaskListData data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard