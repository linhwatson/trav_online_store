import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const cartList = useSelector((store) => store.cartListReducer);

  // useEffect(() => {
  //   console.log('cartList', cartList);
  //   //run script for Predictive Model
  // }, []);

  return (
    <div>
      {!cartList.length ? (
        <h1>No Food Items Found!</h1>
      ) : (
        cartList.map((item) => (
          <Item
            key={item.unit_id}
            id={item.unit_id}
            product_name={item.product_name}
            price={item.price}
            popularity={item.popularity}
          />
        ))
      )}
      <button onClick={() => navigate("/payment")}>Checkout</button>
    </div>
  );
};

export default Cart;
