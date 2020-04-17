import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className='App'>
      <Navigation cart={cart} />

      <ProductContext.Provider value={{ products, addItem }}>
        <Route exact path='/'>
          <Products />
        </Route>

        <Route path='/cart'>
          <ShoppingCart />
        </Route>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
