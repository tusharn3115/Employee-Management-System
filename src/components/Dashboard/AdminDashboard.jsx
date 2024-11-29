import React from 'react'
import AdminHeader from '../Layout/AdminHeader'
import CreateTask from '../Layout/CreateTask';
import AllTasks from '../Layout/AllTasks';

const AdminDashboard = () => {
  return (
    <div className='p-16 w-full'>
      <AdminHeader />
      <CreateTask />
      <AllTasks /> 
    </div>
  )
}

export default AdminDashboard