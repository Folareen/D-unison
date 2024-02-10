import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Login from '../pages/providers/auth/Login'
import Dashboard from '../pages/providers/main/Dashboard'

const ProvidersRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/providers/login" element={<Login />} /> */}
            <Route path="/providers/dashboard" element={<Dashboard />} />
            <Route path="/providers/my-service" element={<Dashboard />} />
            <Route path="/providers/add-service" element={<Dashboard />} />
            <Route path="/providers/orders" element={<Dashboard />} />
            <Route path="/providers/chat" element={<Dashboard />} />
            <Route path="/providers/customers" element={<Dashboard />} />
            <Route path="/providers/my-rating" element={<Dashboard />} />
            <Route path="/providers/my-invoices" element={<Dashboard />} />
            <Route path="/providers/create-invoice" element={<Dashboard />} />
            <Route path="/providers/accounting" element={<Dashboard />} />
            <Route path="/providers/settings" element={<Dashboard />} />

        </Routes>
    )
}

export default ProvidersRoutes