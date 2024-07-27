import { TProduct } from "./product.type"

export type TCart={
    product:TProduct,
    quantity:number,
    totalPrice:number
}