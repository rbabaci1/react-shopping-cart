import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { wasAdded } from './helpers';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';
import { useLocalStorage } from 'react-use';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage('cart-list', []);

  const addItem = (item) =>
    !wasAdded(cart, item.id) && setCart([...cart, item]);

  const removeItem = (itemId) =>
    setCart(cart.filter((item) => item.id !== itemId));

  return (
    <div className='App'>
      <CartContext.Provider value={cart}>
        <Navigation />
      </CartContext.Provider>

      <CartContext.Provider value={{ cart, removeItem }}>
        <Route path='/cart'>
          <ShoppingCart />
        </Route>
      </CartContext.Provider>

      <ProductContext.Provider value={{ products, addItem }}>
        <Route exact path='/'>
          <Products />
        </Route>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
