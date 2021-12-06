import { Route, Switch } from "react-router-dom";

//Switch makes it so only the Route that is matched first will load
//the default is for ALL Routes that match the path to load

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome />
          </Route>

          <Route path='/products' exact>
            <Products />
          </Route>

          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
