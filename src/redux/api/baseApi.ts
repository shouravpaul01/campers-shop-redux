import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl="https://campers-shop-api.vercel.app/api/v1" //"http://localhost:3000/api/v1" 
export const baseApi=createApi({
    reducerPath:"baseApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://campers-shop-api.vercel.app/api/v1"}),
    tagTypes:["categories","products"],
    endpoints:()=>({})   
})