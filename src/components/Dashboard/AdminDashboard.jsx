import React from 'react'
import AdminHeader from '../Layout/AdminHeader'
import CreateTask from '../Layout/CreateTask';
import AllTasks from '../Layout/AllTasks';

const AdminDashboard = (props) => {
  return (
    <div className='p-16 w-full'>
      <AdminHeader userLogout={props.userLogout} />
      <CreateTask />
      <AllTasks /> 
    </div>
  )
}

export default AdminDashboard