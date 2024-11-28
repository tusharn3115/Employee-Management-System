import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='flex w-screen h-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete='off'
                        className='border-2 placeholder:text-gray-400 bg-transparent outline-none border-emerald-600 rounded-full py-2 px-8 text-xl'
                        type="email"
                        placeholder='Enter your email...' />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete='off'
                        type="password"
                        className='border-2 mt-4 placeholder:text-gray-400 bg-transparent outline-none border-emerald-600 rounded-full py-2 px-8 text-xl'
                        placeholder='Enter your password...' />
                    <button className='w-full bg-emerald-600 font-semibold rounded-full active:scale-90 py-2 px-4 text-xl mt-7'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login