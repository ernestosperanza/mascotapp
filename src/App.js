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

  const items = [
    {
      id: 0,
      title: "Galletas para perro",
      price: 130,
      description: 'NA',
      pictureUrl: "https://www.vitamixespana.com/recetas/wp-content/uploads/2019/01/galletas-para-perros-caseras.jpg",
      stock: 50,
      categoryId: "1"
    },
    {
      id: 1,
      title: "Galletas para gato",
      price: 100,
      description: 'NA',
      pictureUrl: "https://t1.ea.ltmcdn.com/es/images/6/8/9/img_como_hacer_galletas_para_gatos_22986_600_square.jpg",
      stock: 50,
      categoryId: "2"
    },
    {
      id: 2,
      title: "Piedras Sanitarias",
      price: 90,
      description: 'NA',
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_962476-MLU27426281624_052018-O.jpg",
      stock: 25,
      categoryId: "2"
    },
    {
      id: 3,
      title: "Pipeta Antipulgas",
      price: 80,
      description: 'NA',
      pictureUrl: "https://misanimales.com/wp-content/uploads/2019/06/pipeta-antipulgas-perro.jpg",
      stock: 10,
      categoryId: "1"
    },
    {
      id: 4,
      title: "Suplemento",
      price: 2000,
      description: 'NA',
      pictureUrl: "https://cdn.shopify.com/s/files/1/0185/9786/products/750-large_default_e59027ab-c37f-4a3c-b4f9-7e27ceec4e77_363x363.jpg?v=1569122070",
      stock: 3,
      categoryId: "4"
    }
  ]

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
                <ItemListContainer greeting={"Bienvenido a la Home"} items={items} />
              </Route>

              <Route exact path='/category/:categoryId'>
                <ItemListContainer greeting={"Bienvenido Categoria"} items={items} />
              </Route>

              <Route exact path='/item/:id' >
                <ItemDetailContainer items={items} />
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
