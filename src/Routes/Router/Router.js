import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layouts/Dashboard/Dashboard";
import Main from "../../layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryPhones from "../../Pages/CategoryPhones/CategoryPhones";
import AddPhones from "../../Pages/DashboardPages/AddPhones";
import AllBuyers from "../../Pages/DashboardPages/AllBuyers";
import AllSellers from "../../Pages/DashboardPages/AllSellers";
import MyBookings from "../../Pages/DashboardPages/MyBookings";
import MyPhones from "../../Pages/DashboardPages/MyPhones";
import Payment from "../../Pages/DashboardPages/Payment";
import Profile from "../../Pages/DashboardPages/Profile";
import ReportedItems from "../../Pages/DashboardPages/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryPhones></CategoryPhones></PrivateRoute>,
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/dashboard/addphone',
                element: <SellerRoute><AddPhones></AddPhones></SellerRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/myphones',
                element: <SellerRoute><MyPhones></MyPhones></SellerRoute>
            },
            {
                path: '/dashboard/bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: `/dashboard/payment/:id`,
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            }
        ]
    }
]);

export default router;