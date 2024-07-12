

  export type TProduct= {
    _id?:string;
    name: string;
    slug?:string;
    category: string;
    price: number;
    stockQuantity: number;
    image: string;
    description: string;
    rating: number;
    status?:boolean
  }