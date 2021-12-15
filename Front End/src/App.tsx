import React from 'react';
import Navbar from "./components/estaticos/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import './App.css';

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


function App() {
  return (
    <>
      <Router>
        <Navbar />
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

            <Route path="/produtos">
              <ListaProduto />
            </Route>

            <Route path="/lojas">
              <Lojas />
            </Route>

            <Route path="/produtos">
              <CadastroProduto />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
//Os componentes estaticos devem ser postos dentro do Router, já o restante devem ser colocados dentro de switch, div e route path

export default App;