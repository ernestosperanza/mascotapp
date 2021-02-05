import './App.css';
import React from 'react';

import NavBar from './components/NavBar/NavBar';
import Layout from './components/Layout/Layout';
import NoMatch from './components/NoMatch/NoMatch';
import Cart from './components/Cart/Cart';

import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

import { Context } from './contexts/CartContext';

import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

{/* trabajar en el title dinamico despues */ }
const title = 'Mascotapp - App'

function App() {

  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Layout>
            <NavBar></NavBar>
            <Switch>

              <Route exact path='/' >
                <ItemListContainer greeting={"Bienvenido a la Home"} />
              </Route>

              <Route exact path='/:category'>
                <ItemListContainer greeting={"Bienvenido Categoria"} />
              </Route>

              <Route exact path='/item/:id' >
                <ItemDetailContainer />
              </Route>

              <Route exact path='/cart' >
                <Cart />
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
