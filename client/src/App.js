import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllProducts from "./components/AllProducts";
import ProductScrollAndrew from "./components/ProductScrollAndrew";
import ProductScrollDon from "./components/ProductScrollDon";
import ProductScrollChuck from "./components/ProductScrollChuck";
import CustomerInfo from "./components/CustomerInfo";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Nav from "./components/Nav";
import ProductDescription from './components/ProductDescription'

class App extends React.Component {
  render() {
    return (

      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/product/scroll/don" component={ProductScrollDon} />
            <Route exact path="/product/scroll/chuck" component={ProductScrollChuck} />
            <Route exact path="/product/scroll/andrew" component={ProductScrollAndrew} />
            <Route exact path="/customer/:id" component={CustomerInfo} />
            <Route exact path="/product/description" component={ProductDescription} />
            <Route exact path="/products/:id" component={ProductDescription} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
 );
}
}

    export default App;
