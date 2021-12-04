import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  Fragment,
  useEffect
} from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'

import { fetchCardData, sendCartData } from './store/cart-actions'

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

  //useSelector causes this component to re-evaluate, and useEffect will run if the cart has changed
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment> {
      notification &&
      <Notification
        status={
          notification.status
        }
        title={
          notification.title
        }
        message={
          notification.message
        }
      />}
      <Layout>
        { cartIsVisible && <Cart/> }
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;