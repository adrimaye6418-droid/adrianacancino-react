import { FaCartArrowDown } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cart, totalQty } = useContext(CartContext);
    console.log(cart, 'contexto del carrito');
    return (
        <div className="cart-widget">
            <FaCartArrowDown fontSize="24px"  color="white"/>
            {cart.length > 0 && <Badge bg="danger">{totalQty}</Badge>}
        </div>
    )
}
export default CartWidget
