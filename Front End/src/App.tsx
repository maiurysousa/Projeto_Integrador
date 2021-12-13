  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import Login from './paginas/login/Login.';
  import Sobre from './paginas/sobre/Sobre';
  import './App.css';
  
  
  function App(): JSX.Element {
    return (
      <Router>
          <Switch>
            <div style={{minHeight: '100vh'}}>

              <Route path='/sobre'>
                <Sobre />
              </Route>
  
              <Route exact path='/'>
                <Login />
              </Route>
  
              <Route path='/login'>
                <Login />
              </Route>

            </div>
          </Switch>
      </Router>
    );
  }
  
  export default App;