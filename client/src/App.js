import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllProducts from "./components/AllProducts";
import NoMatch from "./components/NoMatch";
import Login from "./components/Login";
import Nav from "./components/Nav";
import ProductDescription from './components/ProductDescription';

const CLIENT = {
  sandbox: 'AdOGtOUu6PM3rYwSPn9R-Q9Fjb2DTKhIOOIlL3pKi-QLT2KmpTa8xPriasyBqeyWdmSia8swrODxDxc9',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';


class App extends React.Component {
  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);
    return (

      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/Products" component={AllProducts} />
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
