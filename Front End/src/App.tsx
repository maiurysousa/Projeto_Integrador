import React from 'react';
import Navbar from "./components/estaticos/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CarrosselComponent from "./components/carousel/CarouselComponent";
import './App.css';
import {Provider} from 'react-redux';
/*import Lojas from "./components/paginas/lojas/Lojas";
import Produtos from "./components/paginas/produtos/Produtos";
import ContactUs from './components/paginas/contactUs/ContactUs';
import PequenoNegocio from './components/paginas/pequenoNegocio/PequenoNegocio';
import Brecho from './components/paginas/brecho/Brecho';*/
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import Lojas from './paginas/lojas/Lojas';

import CadastroProduto from './components/produtos/cadastroproduto/CadastroProduto';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import Sobre from './paginas/sobre/Sobre';
import DeletarProduto from './components/produtos/deletarproduto/DeletarProduto';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';
import { ToastContainer } from 'react-toastify';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import Navbar2 from './components/estaticos/navbar/Navbar2';


function App() {
  return (
    <>
      <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Navbar2 />
        <Switch>
          <div style={{ minHeight: "100vh" }}>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/cadastrousuario">
              <CadastroUsuario />
            </Route>

            <Route path="/brecho">

            </Route>

            <Route path="/pequenoNegocio">

            </Route>

            <Route path="/sobre">
              <Sobre />
            </Route>

            <Route exact path="/produtos">
              <ListaProduto />
            </Route>

            <Route path="/lojas">
              <Lojas />
            </Route>

            <Route exact path="/form-produtos">
              <CadastroProduto />
            </Route>

            <Route exact path="/form-produtos/:id">
              <CadastroProduto />
            </Route>
            <Route exact path="/deletarprodutos/:id">
              <DeletarProduto />
            </Route>
            <Route exact path="/deletarcategoria/:id">
              <DeletarCategoria />
            </Route>

            <Route exact path="/categorias">
              <ListaCategoria />
            </Route>

            <Route exact path="/form-categorias">
              <CadastroCategoria />
            </Route>
            <Route exact path="/form-categorias/:id">
              <CadastroCategoria />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
      </Provider>
    </>
  );
}
//Os componentes estaticos devem ser postos dentro do Router, já o restante devem ser colocados dentro de switch, div e route path

export default App;