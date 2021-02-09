import './App.css'
import React from 'react'

import NavBar from './components/NavBar/NavBar'
import Layout from './components/Layout/Layout'
import NoMatch from './components/NoMatch/NoMatch'
import Cart from './components/Cart/Cart'

import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'

import { Context } from './contexts/CartContext'

import { BrowserRouter as Router, Switch, 
         Route, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      <Router>
      <Context>
          <Layout>
            <NavBar />
            <Switch>
              <Route exact path='/' component={withRouter(ItemListContainer)} />
              <Route exact path='/cart' component={withRouter(Cart)} />
              <Route exact path='/category/:category' component={withRouter(ItemListContainer)} />
              <Route exact path='/item/:id' component={withRouter(ItemDetailContainer)} />
              <Route path='*' component={withRouter(NoMatch)} />
            </Switch>
          </Layout>
      </Context>
      </Router>
    </div>
  );
}

export default App;
