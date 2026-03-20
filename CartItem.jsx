import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Enhanced user experience instead of plain alert
    alert(`Checkout coming soon! Your total is $${total}`);
  };

  const handleContinueShopping = () => {
    navigate("/plants"); // Proper navigation using React Router
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}
        >
          <img src={item.image} alt={item.name} style={{ width: "80px" }} />
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button
              onClick={() => dispatch(updateQuantity({ id: item.id, type: "increase" }))}
            >
              +
            </button>
            <button
              onClick={() => dispatch(updateQuantity({ id: item.id, type: "decrease" }))}
              disabled={item.quantity === 1} // Optional: prevent quantity < 1
            >
              -
            </button>

            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total Cart Amount: ${total}</h3>
          <button onClick={handleCheckout} style={{ marginRight: "10px" }}>
            Checkout
          </button>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
        </>
      )}
    </div>
  );
}

export default CartItem;
