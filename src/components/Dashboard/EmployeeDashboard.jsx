import React from 'react'
import Header from '../Layout/Header'
import TaskListData from '../Layout/TaskListData'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <div className='p-20 bg-[#1c1c1c] h-screen'>
            <Header />
            <TaskListData />
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard