import React from 'react'
import Header from '../Layout/Header'
import TaskListData from '../Layout/TaskListData'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
    return (
        <div className='px-20 py-10 bg-[#1c1c1c] h-screen'>
            <Header userLogout={props.userLogout} data={props.data} />
            <TaskListData data={props.data} />
            <TaskList data={props.data} />
        </div>
    )
}

export default EmployeeDashboard