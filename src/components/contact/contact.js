// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button, Icon } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact</h5>
        <Card>
          <Row>
              <Input defaultValue="lfonteesc@gmail.com" type="email" label="Email" s={12} disabled />
              <Input defaultValue="(88)99742-7767" label="Phone" s={12} disabled><Icon>phone</Icon></Input>
              <Input defaultValue="https://github.com/lfontesc" label="Github" s={12} disabled />     
            <Col s={12} m={12}>
              <Button waves='light' className="right grey darken-2">SEND</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;