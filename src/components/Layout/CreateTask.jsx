import React, { useState } from 'react';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [task, setTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setTask({taskTitle, taskDate, category, taskDescription, active: false, newTask: true, failed: false, completed: false})
  };

  return (
    <div className="mt-8 bg-[#1c1c1c] rounded-lg shadow-lg p-6">
      <h1 className="flex pl-9 text-white items-center gap-3 font-semibold text-3xl">
        <FaCircleArrowRight className="text-xl" />
        Create Task
      </h1>
      <form onSubmit={submitHandler} className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 mt-6">
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <label htmlFor="taskTitle" className="text-sm font-medium text-gray-300 mb-1 block">
              Task Title
            </label>
            <input
              autoComplete='off'
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              id="taskTitle"
              className="w-full py-3 px-4 text-white bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Make a website..."
            />
          </div>
          <div>
            <label htmlFor="dueDate" className="text-sm font-medium text-gray-300 mb-1 block">
              Due Date
            </label>
            <input
              autoComplete='off'
              required
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              id="dueDate"
              className="w-full py-3 px-4 text-black  border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-auto"
            />
          </div>
          <div>
            <label htmlFor="assignTo" className="text-sm font-medium text-gray-300 mb-1 block">
              Assign To
            </label>
            <input
              autoComplete='off'
              required
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              id="assignTo"
              className="w-full py-3 px-4 text-white bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Employee name..."
            />
          </div>
          <div>
            <label htmlFor="category" className="text-sm font-medium text-gray-300 mb-1 block">
              Category
            </label>
            <input
              autoComplete='off'
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              id="category"
              className="w-full py-3 px-4 text-white bg-transparent border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Website, UI/UX design, etc..."
            />
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col space-y-4">
          <div>
            <label htmlFor="desc" className="text-sm font-medium text-gray-300 mb-1 block">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              name="desc"
              id="desc"
              className="w-full h-60 py-3 px-4 text-white bg-transparent border border-gray-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Detailed description of the task (Max 500 words)"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full py-3 px-6 bg-emerald-600 text-white text-lg font-medium rounded-lg hover:bg-emerald-800 transition duration-200 ease-in-out gap-2"
          >
            Create Task <IoIosCheckmarkCircle className="text-2xl" />
          </button>
        </div>
      </form>

    </div>
  );
};

export default CreateTask;
