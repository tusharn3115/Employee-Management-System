import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTasks = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="mt-7 text-center bg-gray-900 rounded-lg p-6 shadow-md">
      {/* Header Section */}
      <div className="bg-gray-800 capitalize py-3 px-4 flex justify-between rounded-lg mb-4 text-white">
        <h2 className="w-1/5 font-semibold">Employee Name</h2>
        <h3 className="w-1/5 font-semibold">New Task</h3>
        <h5 className="w-1/5 font-semibold">Active</h5>
        <h5 className="w-1/5 font-semibold">Completed</h5>
        <h5 className="w-1/5 font-semibold">Failed</h5>
      </div>

      {/* Employee Data Section */}
      <div>
        {authData.employees.map((elem, index) => (
          <div
            key={index}
            className="flex text-center justify-between items-center bg-gray-800 py-3 px-4 rounded-lg text-white mb-3"
          >
            <h2 className="w-1/5 text-lg font-medium">{elem.name}</h2>
            <h3 className="w-1/5 text-lg font-medium text-blue-400">{elem.taskCount.newTask}</h3>
            <h5 className="w-1/5 text-lg font-medium text-yellow-400">{elem.taskCount.active}</h5>
            <h5 className="w-1/5 text-lg font-medium text-green-400">{elem.taskCount.completed}</h5>
            <h5 className="w-1/5 text-lg font-medium text-red-400">{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
