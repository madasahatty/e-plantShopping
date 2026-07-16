import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import AboutUs from './AboutUs.jsx';

function LandingPage() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <Navigate to="/products" replace />;
  }

  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="landing-card">
          <p className="eyebrow">Indoor plants delivered with care</p>

          <h1>Welcome to Paradise Nursery</h1>

          <p className="landing-description">
            Bring nature indoors with beautiful, easy-care houseplants selected
            for every room and every experience level. Paradise Nursery helps
            plant lovers find fresh greenery, decorative favorites, and
            air-purifying plants that make any space feel alive.
          </p>

          <AboutUs />

          <button
            className="get-started-button"
            type="button"
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
