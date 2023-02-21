import Header  from  "./commen/header/Header";
import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from './components/bestDeals/Data'
import { useState } from "react";
import Mata from './components/classified/Mata'
import Rata from './components/recommended/Rata'
import Hata from "./components/hotSale/Hata";

function App() {
  const { hotProducts } = Hata
  const { recommendedProducts } = Rata
  const { classifiedItems } = Mata
  const { productItems } = Data
  const [cartItem, setCartItem] = useState([])
  return (
    <>
    <Router>
     <Header />
     
     <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} classifiedItems={classifiedItems}  recommendedProducts={recommendedProducts} hotProducts={hotProducts}/>
          </Route>
          {/* <Route path="/" exact>
            <Products classifiedItems={classifiedItems}/>
          </Route> */}
        </Switch>
    </Router>
    </>
  );
}

export default App;
