import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/main/home/Home";
import AdminDasboard from "../pages/admin/dashbord/AdminDasboard";
import ProductShop from "../pages/main/product-shop/ProductShop";
import ProductDetails from "../pages/main/product-details/ProductDetails";
import Cart from "../pages/main/cart/Cart";
import Checkout from "../pages/main/checkout/Checkout";
import AboutUs from "../pages/main/about-us/AboutUs";



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
                path:"/products",
                element:<ProductShop/>
            },
            {
                path:"/products/product-details/:slug",
                element:<ProductDetails/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/checkout",
                element:<Checkout/>
            },
            {
                path:"/about",
                element:<AboutUs/>

            },
            {
                path:"/admin-dashboard",
                element:<AdminDasboard/>
            }
        ]
    }
])