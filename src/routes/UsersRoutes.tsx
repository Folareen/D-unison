import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/users/auth/Login'
// import Signup from '../pages/users/Signup'
import Signup from '../pages/users/auth/Signup'
// import Login from '../pages/users/Login'

const UsersRoutes = () => {
    return (
        <Routes>
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Signup />} />
        </Routes>
    )
}

export default UsersRoutes