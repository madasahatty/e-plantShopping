import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalQuantity } from './CartSlice.jsx';

function Header() {
  const cartQuantity = useSelector(selectCartTotalQuantity);

  return (
    <header className="site-header">
      <Link className="logo-link" to="/">
        <span className="logo-icon">🌿</span>
        <span className="logo-text">Paradise Nursery</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/cart" className="cart-link" aria-label={`Cart with ${cartQuantity} items`}>
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartQuantity}</span>
          <span>Cart</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
