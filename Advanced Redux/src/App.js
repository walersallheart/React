import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  //useSelector causes this component to re-evaluate, and useEffect will run if the cart has changed
  useEffect(() => {
    fetch('https://react-http-65535-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      { cartIsVisible && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
