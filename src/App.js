import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBilder from './containers/BurgerBilder/BurgerBilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  
  render() {
    return (
      <div>

        <Layout>

          <Switch>
            <Route path = "/checkout" component ={Checkout}></Route>
            <Route path = "/orders" component ={Orders}></Route>
            <Route path = "/" exact component ={BurgerBilder}></Route>
          </Switch>

        </Layout>
        
      </div>
    );
  }
}

export default App;
