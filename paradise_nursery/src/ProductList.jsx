import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header.jsx';
import { addItem, selectCartItems } from './CartSlice.jsx';

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    description: 'Freshen your rooms with classic plants known for clean, green style.',
    plants: [
      { id: 1, name: 'Snake Plant', price: 24.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b3b?auto=format&fit=crop&w=600&q=80' },
      { id: 2, name: 'Peace Lily', price: 28.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80' },
      { id: 3, name: 'Spider Plant', price: 18.99, image: 'https://images.unsplash.com/photo-1620319040751-74b7f1f44d4d?auto=format&fit=crop&w=600&q=80' },
      { id: 4, name: 'Boston Fern', price: 22.99, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80' },
      { id: 5, name: 'Rubber Plant', price: 32.99, image: 'https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=600&q=80' },
      { id: 6, name: 'Areca Palm', price: 39.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    category: 'Low Maintenance Plants',
    description: 'Great choices for busy owners, students, and first-time plant parents.',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 26.99, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80' },
      { id: 8, name: 'Pothos', price: 16.99, image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=600&q=80' },
      { id: 9, name: 'Aloe Vera', price: 14.99, image: 'https://images.unsplash.com/photo-1596547619652-9cf5d8f40c69?auto=format&fit=crop&w=600&q=80' },
      { id: 10, name: 'Jade Plant', price: 19.99, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80' },
      { id: 11, name: 'Cast Iron Plant', price: 29.99, image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80' },
      { id: 12, name: 'Chinese Evergreen', price: 23.99, image: 'https://images.unsplash.com/photo-1620127682229-33388276e540?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    category: 'Decorative Statement Plants',
    description: 'Eye-catching plants that create a centerpiece in any indoor space.',
    plants: [
      { id: 13, name: 'Monstera Deliciosa', price: 44.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80' },
      { id: 14, name: 'Fiddle Leaf Fig', price: 49.99, image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80' },
      { id: 15, name: 'Calathea Orbifolia', price: 34.99, image: 'https://images.unsplash.com/photo-1614594879159-74d4bb18c30e?auto=format&fit=crop&w=600&q=80' },
      { id: 16, name: 'Bird of Paradise', price: 54.99, image: 'https://images.unsplash.com/photo-1597055181449-28c2e4e8e80f?auto=format&fit=crop&w=600&q=80' },
      { id: 17, name: 'String of Pearls', price: 21.99, image: 'https://images.unsplash.com/photo-1616500162516-4e097973f4f5?auto=format&fit=crop&w=600&q=80' },
      { id: 18, name: 'Anthurium', price: 31.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isPlantInCart = (plantId) => cartItems.some((item) => item.id === plantId);

  return (
    <>
      <Header />
      <main className="page-container">
        <section className="page-title-section">
          <p className="eyebrow">Shop our greenhouse</p>
          <h1>Houseplants for Every Home</h1>
          <p>
            Browse our curated plant collection. Each plant includes a thumbnail,
            name, price, and Add to Cart button.
          </p>
        </section>

        {plantCategories.map((group) => (
          <section className="plant-category" key={group.category}>
            <div className="category-heading">
              <h2>{group.category}</h2>
              <p>{group.description}</p>
            </div>

            <div className="plant-grid">
              {group.plants.map((plant) => {
                const inCart = isPlantInCart(plant.id);

                return (
                  <article className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="plant-card-content">
                      <h3>{plant.name}</h3>
                      <p className="plant-price">${plant.price.toFixed(2)}</p>
                      <button
                        className={inCart ? 'added-button' : 'add-button'}
                        type="button"
                        onClick={() => dispatch(addItem(plant))}
                        disabled={inCart}
                      >
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;
