import { TCategory } from "./category.type";


  export type TProduct= {
    _id?:string;
    name: string;
    slug?:string;
    category: TCategory ;
    price: number;
    stockQuantity: number;
    image: string;
    description: string;
    rating: number;
    status?:boolean;
    createdAt?:string;
    updatedAt?:string;
  }