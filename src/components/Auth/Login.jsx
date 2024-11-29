import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex w-screen h-screen items-center justify-center' style={{ backgroundColor: '#1c1c1c' }}>
            <div className='bg-gray-800 shadow-xl rounded-2xl border-2 border-emerald-600 p-10 sm:p-20 w-11/12 max-w-md'>

                {/* Heading */}
                <h2 className='text-center text-2xl font-extrabold text-emerald-500 mb-8'>
                    Login to Employee Management System
                </h2>

                {/* Form */}
                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete='off'
                        className='border-2 placeholder:text-gray-400 bg-gray-700 text-white outline-none border-gray-600 rounded-lg py-3 px-6 w-full text-lg focus:ring-2 focus:ring-emerald-500 focus:bg-gray-600 transition duration-150 ease-in-out'
                        type="email"
                        placeholder='Enter your email' />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete='off'
                        type="password"
                        className='border-2 mt-4 placeholder:text-gray-400 bg-gray-700 text-white outline-none border-gray-600 rounded-lg py-3 px-6 w-full text-lg focus:ring-2 focus:ring-emerald-500 focus:bg-gray-600 transition duration-150 ease-in-out'
                        placeholder='Enter your password' />

                    <button className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg py-3 px-6 text-lg mt-6 shadow-md active:scale-95 transition duration-150 ease-in-out'>
                        Log In
                    </button>
                </form>

                {/* Footer */}
                <p className='text-center text-gray-400 mt-6'>
                    © 2024 Employee Management System. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Login
