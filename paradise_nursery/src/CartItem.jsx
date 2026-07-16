import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header.jsx';
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  selectCartItems,
  selectCartTotalCost,
  selectCartTotalQuantity
} from './CartSlice.jsx';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalCost = useSelector(selectCartTotalCost);

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  return (
    <>
      <Header />
      <main className="page-container cart-page">
        <section className="page-title-section cart-summary">
          <p className="eyebrow">Your shopping cart</p>
          <h1>Shopping Cart</h1>

          <div className="cart-totals">
            <div>
              <span>Total Plants</span>
              <strong>{totalQuantity}</strong>
            </div>
            <div>
              <span>Total Cost</span>
              <strong>${totalCost.toFixed(2)}</strong>
            </div>
          </div>
        </section>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty.</h2>
            <p>Add houseplants from the product listing page to see them here.</p>
            <Link className="primary-link-button" to="/products">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <>
            <section className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item-card" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <p>
                      Item Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </p>
                  </div>

                  <div className="quantity-controls" aria-label={`Quantity controls for ${item.name}`}>
                    <button
                      type="button"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-button"
                    type="button"
                    onClick={() => dispatch(deleteItem(item.id))}
                  >
                    Delete
                  </button>
                </article>
              ))}
            </section>

            <div className="cart-actions">
              <Link className="secondary-link-button" to="/products">
                Continue Shopping
              </Link>
              <button className="checkout-button" type="button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default CartItem;
