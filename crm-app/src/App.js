import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Col, Row, Button, Badge, Card } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Components/Profile";
import Feed from "./Components/Feed";
import Header from "./Components/Header";

import "./Components/Profile.css";

const App = () => (
  <React.Fragment>
    <Container fluid>
      <Header />
      <Row>
        <Col xs={3}>
          <Profile />
        </Col>
        <Col>
          <Feed />
        </Col>
      </Row>

      <Card className="card">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Button variant="primary">
        Messages <Badge variant="light">3</Badge>
        <span className="sr-only">unread messages</span>
      </Button>
    </Container>
  </React.Fragment>

  //   <React.Fragment>
  //       <Router>
  //           <Switch>
  //               <Route exact path="/home" component={Home} />
  //               <Route component={NoMatch}/>
  //           </Switch>
  //       </Router>
  //   </React.Fragment>
);

export default App;
