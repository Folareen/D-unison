import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/providers/auth/Login'
import Dashboard from '../pages/providers/main/Dashboard'

const ProvidersRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/providers/login" element={<Login />} /> */}
            <Route path="/providers/dashboard" element={<Dashboard />} />

        </Routes>
    )
}

export default ProvidersRoutes