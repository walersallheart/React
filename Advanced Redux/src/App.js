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

import {
  uiActions
} from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  //useSelector causes this component to re-evaluate, and useEffect will run if the cart has changed
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));

      const response = await fetch('https://react-http-65535-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      const responseData = await response.json();

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed'
      }));
    });
  }, [cart, dispatch]);

  return ( <
    Fragment > {
      notification &&
      <
      Notification
      status = {
        notification.status
      }
      title = {
        notification.title
      }
      message = {
        notification.message
      }
      /> } <
      Layout > {
        cartIsVisible && < Cart / >
      } <
      Products / >
      <
      /Layout> <
      /Fragment>
    );
  }

  export default App;