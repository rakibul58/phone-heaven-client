import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layouts/Dashboard/Dashboard";
import Main from "../../layouts/Main/Main";
import AddPhones from "../../Pages/DashboardPages/AddPhones";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/dashboard/addphone',
                element: <SellerRoute><AddPhones></AddPhones></SellerRoute>
            }
        ]
    }
]);

export default router;