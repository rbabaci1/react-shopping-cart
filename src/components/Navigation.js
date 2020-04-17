import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductContext from '../contexts/ProductContext';

const Navigation = (props) => {
  return (
    <div className='navigation'>
      <ProductContext.Consumer>
        {(value) => (
          <>
            <NavLink to='/'>Products</NavLink>
            {console.log(value)}
          </>
        )}
      </ProductContext.Consumer>
      {/* 
      <NavLink to='/cart'>
        Cart <span>{cart.length}</span>
      </NavLink> */}
    </div>
  );
};

export default Navigation;
