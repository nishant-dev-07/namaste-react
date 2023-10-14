import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispach = useDispatch()
    const hadleClearCart = () => {
        dispach(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-lg">Cart</h1>
            <div className="m-auto w-6/12">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={hadleClearCart}
                >Clear Cart</button>

                {cartItems.length == 0 && <h1>Cart is empty add items to the cart</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;