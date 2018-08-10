import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllProducts from "./components/AllProducts";
import ProductScroll from "./components/ProductScroll";
import CustomerInfo from "./components/CustomerInfo";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Nav from "./components/Nav";
import ProductDescription from './components/ProductDescription'

class App extends React.Component {
  render() {
    // console.log(Login.state.customer)
    return (

      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/Products" component={AllProducts} />
            <Route exact path="/ProductScroll" component={ProductScroll} />
            <Route exact path="/CustomerInfo" component={CustomerInfo} />
            <Route exact path="/ProductDescription" component={ProductDescription} />
            <Route exact path="/Products/:id" component={ProductDescription} />
            <Route path="/login" exact component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
 );
}
}

    export default App;
