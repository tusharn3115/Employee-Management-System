import React from 'react'

const AuthContext = ({ children }) => {
  return (
    <div className='text-white'>
        { children }
    </div>
  )
}

export default AuthContext