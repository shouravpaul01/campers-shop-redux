import CartTable from "../../../components/table/CartTable"
import { useAppSelector } from "../../../redux/hook"



const Cart = () => {
    const {cart}= useAppSelector((state)=>state.cart)
    console.log(cart,'cart')
  return (
    <div>
      <CartTable products={cart}/>
    </div>
  )
}

export default Cart
