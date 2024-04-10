import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Login from '../pages/providers/auth/Login'
import Dashboard from '../pages/providers/main/Dashboard'
import Login from '../pages/providers/auth/Login'
import AllServices from '../pages/providers/AllServices'
import AddService from '../pages/providers/AddService'
import Orders from '../pages/providers/Orders'
import Chat from '../pages/providers/Chat'
import MyRating from '../pages/providers/MyRating'
import InvoicePage from '../pages/users/Invoice'
import CreateInvoice from '../pages/providers/CreateInvoice'

const ProvidersRoutes = () => {
    return (
        <Routes>
            <Route path="/providers/login" element={<Login />} />
            <Route path="/providers/dashboard" element={<Dashboard />} />
            <Route path="/providers/my-service" element={<AllServices />} />
            <Route path="/providers/add-service" element={<AddService />} />
            <Route path="/providers/orders" element={<Orders />} />
            <Route path="/providers/chat" element={<Chat />} />
            {/* <Route path="/providers/customers" element={<Customers />} /> */}
            <Route path="/providers/my-rating" element={<MyRating />} />
            <Route path="/providers/my-invoices" element={<InvoicePage />} />
            <Route path="/providers/create-invoice" element={<CreateInvoice />} />
            <Route path="/providers/accounting" element={<Dashboard />} />
            <Route path="/providers/settings" element={<Dashboard />} />

        </Routes>
    )
}

export default ProvidersRoutes