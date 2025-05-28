import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import Home from "../Page/Home/Home";
import OurMenu from "../Page/OurMenu/OurMenu";
import Order from "../Page/Order/Order/Order";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import PrivateRoute from "../Private/PrivateRoute";
import Secret from "../Page/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Page/Dashboard/Cart";
import AllUsers from "../Page/Dashboard/AllUsers";
import AddItems from "../Page/Dashboard/AddItems";
import AdminRoute from './../Private/AdminRoute';
import MangeItem from "../Page/Dashboard/MangeItem";
import ItemUpdate from "../Page/Dashboard/ItemUpdate";
import Payment from "../Page/Dashboard/Payment";
import PaymentHistory from "../Page/Dashboard/PaymentHistory";
import AdminHome from "../Page/Dashboard/AdminHome";
import UserHome from "../Page/Dashboard/UserHome"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <OurMenu></OurMenu>
            }, {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }, {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            }, {
            
            },
            // only admin access
            {
                path:'userHome',
                element:<UserHome></UserHome>
            },
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            }
            ,
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'mangeItem',
                element: <AdminRoute><MangeItem></MangeItem></AdminRoute>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            }
            ,
            {
                path: 'updateItem/:id',
                element: <AdminRoute><ItemUpdate></ItemUpdate></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menus/${params.id}`)
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            }
        ]
    }
])
