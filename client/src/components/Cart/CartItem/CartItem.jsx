import "./CartItem.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { Context } from "../../../utils/context";
import { useContext } from "react";

const CartItem = () => {
    const {cartItems, handleCartProductQuantity, handleRemoveFromCart} = useContext(Context);
    return(
        <>
        <div className="cart-products">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-product">
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{item.attributes.title}</span>
                    <AiOutlineDelete className="close-btn" onClick={() => handleRemoveFromCart(item)}/>
                    <div className="quantity-buttons">
                        <span onClick={() => handleCartProductQuantity('dec', item)}>-</span>
                        <span>{item.attributes.quantity}</span>
                        <span onClick={() => handleCartProductQuantity('inc', item)}>+</span>
                    </div>
                    <div className="text">
                        <span>Quantity: {item.attributes.quantity}</span>
                        <span className="highlight">PKR/- {item.attributes.price * item.attributes.quantity}</span>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
        </>
    );
};

export default CartItem;
