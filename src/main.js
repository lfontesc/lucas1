// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Contact from "./components/contact/contact";
// Importantando o NotFound Pages
import NotFound from "./components/notfound/notfound";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/lucas1' component={Home}/>
        <Route path='/lucas1/contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;