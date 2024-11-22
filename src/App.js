import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

import './App.css';

const App = () => {
  const firstName = "";

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
        <div className="mt-3 text-center">
          {firstName ? (
               <>
            <h1>Hello, {firstName}!</h1>
             
            </>
             
          ) : (
            <h1>hello, Anonymous</h1>
          )}
        </div>
          <Card className="p-3">
            <Card.Body>
              <Image />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;


