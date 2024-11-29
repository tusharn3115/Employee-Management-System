import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from 'react-icons/io';

const CreateTask = () => {
    return (
        <div className='mx-8 mt-8 bg-[#1c1c1c] rounded p-5'>
            <h1
                className='flex pl-9 text-white flex-wrap items-center gap-3 font-semibold text-3xl'>
                <FaCircleArrowRight className='text-xl' />
                Create Task
            </h1>
            <form className='flex w-full items-start justify-between p-6'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-lg font-medium text-gray-300 mb-1'>Task Title</h3>
                        <input type="text" className='text-sm mb-4 text-white py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400' placeholder='Make a website...' />
                    </div>
                    <div>
                        <h3 className='text-lg font-medium text-gray-300 mb-1'>Due Date</h3>
                        <input type="date" className='text-sm mb-4 text-white py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400' name="date" id="date" />
                    </div>
                    <div>
                        <h3 className='text-lg font-medium text-gray-300 mb-1'>Asign To</h3>
                        <input type="text" className='text-sm mb-4 text-white py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400' placeholder='Employee name...' />
                    </div>
                    <div>
                        <h3 className='text-lg font-medium text-gray-300 mb-1'>Category</h3>
                        <input type="text" className='text-sm mb-4 text-white py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400' placeholder='Website, Ui/Ux design, etc...' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-lg text-gray-300 mb-1'>Description</h3>
                    <textarea name="desc" id="desc" className='w-full rounded resize-none h-60 text-white text-sm py-2 px-4 bg-transparent border border-gray-400' placeholder='Detailed description of the task (Max 500 words)' />
                    <button className='flex items-center justify-center text-white py-2 px-4 bg-emerald-600 hover:bg-emerald-800 rounded text-lg font-medium mt-4 w-full active:scale-90 duration-150 gap-2'>Create Task <IoIosCheckmarkCircle className='text-2xl' /></button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask