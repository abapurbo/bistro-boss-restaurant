import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import Home from "../Page/Home/Home";
import OurMenu from "../Page/OurMenu/OurMenu";
import Order from "../Page/Order/Order/Order";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<OurMenu></OurMenu>
            },{
                path:'/order/:category',
                element:<Order></Order>
            }
        ])
    }
])
