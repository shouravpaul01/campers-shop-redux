import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/main/home/Home";
import AdminDasboard from "../pages/admin/dashbord/AdminDasboard";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/admin-dasboard",
                element:<AdminDasboard/>
            }
        ]
    }
])