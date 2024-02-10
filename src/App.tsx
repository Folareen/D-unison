import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";
// import Login from "./pages/users/auth/Login";
// import Dashboard from "./pages/providers/main/Dashboard";
// import Signup from "./pages/users/auth/Signup";
// import UserDashboard from "./pages/users/Dashboard";
// import InvoicePage from "./pages/users/Invoice";
// import OrdersPage from "./pages/users/Orders";
// import OrderDetailsPage from "./pages/users/OrderDetails";
// import Customer from "./pages/providers/Customer";
// import SettingsPage from "./pages/users/Settings";
// import ServicePage from "./pages/users/Service";
// import ChatPage from "./pages/users/ChatPage";

// import RatingsPage from "./pages/users/Ratings";
// import AllServices from "./pages/providers/AllServices";
// import Expenses from "./pages/providers/Expenses";
// import Orders from "./pages/providers/Orders";
// import AddExpenses from "./pages/providers/AddExpenses";
// import CreateInvoice from "./pages/providers/CreateInvoice";
// import AddService from "./pages/providers/AddService";
// import AccountSetting from "./pages/providers/AccountSetting";
// import MyRating from "./pages/providers/MyRating";
// import Accounting from "./pages/providers/Accounting";
// import Income from "./pages/providers/Income";
// import Report from "./pages/providers/Report";
// import Chat from "./pages/providers/Chat";

// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// import { AuthProvider } from "./Context/AuthContext";
// import PrivateRoute from "./utils/PrivateRoute";
// import LoginService from "./pages/providers/auth/Login";
// import Forgot from "./pages/providers/auth/forgot";
// import NewPass from "./pages/providers/NewPass";

// import Register from "./pages/providers/auth/Register";
// import UsersRoutes from "./routes/UsersRoutes";
import ProvidersRoutes from "./routes/ProvidersRoutes";


function App() {
  return (
    <BrowserRouter>
      {/* <UsersRoutes /> */}
      <ProvidersRoutes />
      {/* <Routes>
        <Route path="/users" element={<UsersRoutes />} />
        <Route path="/" element={<Login />}></Route>
        <Route path="/service-dash" element={<Dashboard />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>

        <Route path="/dashboard" element={<UserDashboard />} />

        <Route path="/user/invoice" element={<InvoicePage />}></Route>
        <Route path="/user/orders" element={<OrdersPage />}></Route>
        <Route path="/user/chats" element={<ChatPage />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/expenses" element={<Expenses />}></Route>
        <Route path="/add-expenses" element={<AddExpenses />}></Route>
        <Route
          path="/user/order/details/1"
          element={<OrderDetailsPage />}
        ></Route>

        <Route path="/user/ratings" element={<RatingsPage />}></Route>

        <Route path="/create-invoice" element={<CreateInvoice />}></Route>
        <Route path="/add-service" element={<AddService />}></Route>
        <Route path="/acc-setting" element={<AccountSetting />}></Route>
        <Route path="/accounting" element={<Accounting />}></Route>
        <Route path="/income" element={<Income />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/login" element={<LoginService />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/newpass" element={<NewPass />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/myrating" element={<MyRating />}></Route>
        <Route path="/all-services" element={<AllServices />}></Route>
        <Route path="/order-services" element={<Orders />}></Route>
        <Route path="/user/settings" element={<SettingsPage />}></Route>
        <Route path="/user/upload-service" element={<ServicePage />}></Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
