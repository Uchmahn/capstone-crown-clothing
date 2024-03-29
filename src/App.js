import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
//   getCurrentUser,
// } from './utils/firebase/firebase.util';

import { Routes, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';
import { checkUserSession } from './store/user/user.action';
import { GlobalStyle } from './global.styles';

// We convert our imports to Dynamic Imports
// import Home from './routes/home/home.component';
// import Authentication from './routes/authentication/authentication';
// import Navigation from './routes/navigation/navigation.component';
// import Shop from './routes/shop/shop.component';
// import Checkout from './routes/checkout/checkout.component';
// import { setCurrentUser } from './store/user/user.action';

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() =>
  import('./routes/authentication/authentication')
);
const Navigation = lazy(() =>
  import('./routes/navigation/navigation.component')
);
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Previous Method
    // const unsubscribe = onAuthStateChangedListener(user => {
    //   if (user) createUserDocumentFromAuth(user);
    //   dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
    // Next method
    // getCurrentUser().then(user => console.log(user));
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
