import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  if (cart.length === 0) {
    return <div className="container mt-5"  style={{ minHeight: '50vh' }} ><h3>Your cart is empty 🛒</h3></div>;
  }

  return (
     <div className="min-vh-100 d-flex flex-column">
      <div className="container my-5 flex-grow-1">
        <h3 className="mb-5">🛒 Your Cart</h3>

        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted">Your cart is empty</h4>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              style={{ width: '151px', marginTop: '20px' }}
            />
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cart.map((item) => (
              <div key={item.id} className="col">
                <div className="card h-100 w-150 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top p-2"
                    style={{ height: '150px', objectFit: 'contain' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text mb-1">
                      <strong>Price:</strong> ₹{item.price.toFixed(2)}
                    </p>
                    <p className="card-text mb-3">
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-outline-danger mt-auto"
                    >
                      Remove
                    </button>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-end mt-4">
      <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>
      </div>
       <button className="btn btn-success">Proceed to Checkout</button>
    </div>
    </div>
  );
};

export default CartPage;
