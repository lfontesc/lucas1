// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const NotFound = () => (
 <Card>
 <Row>
     <center> <p><h1><b>Erro Encontrado</b></h1></p>
          <b> <h2>  <p><font color="red">Pagina não encontrada!</font></p></h2> </b>
          <p><h3><b>OBS:</b></h3> <h5>Utilize o Menu Home para voltar a Pagina Inicial.</h5> </p>
    </center>
            <br/>
  </Row>
  </Card>
);

export default NotFound;