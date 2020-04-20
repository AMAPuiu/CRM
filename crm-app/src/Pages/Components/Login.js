import React from "react";
import styles from "./Login.module.css";
import {
  Button,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Form,
} from "reactstrap";
import { MicrosoftLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";
import image from "../../imgs/logo.png";

function MyDate() {
  var tempDate = new Date();
  var months = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septemrbrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie",
  ];
  var date = months[tempDate.getMonth()] + " " + tempDate.getFullYear();
  return (
    <p className={`rounded mx-auto d-block text-center ${styles.uniDate}`}>
      {date}
    </p>
  );
}
const Login = () => {
  return (
    <div className={styles.container}>
      <Container className={styles.introduction}>
        <Row>
          <Col xs="8" className={styles.logoCard}>
            <img
              src={image}
              alt="nu"
              className={`rounded mx-auto d-block text-center ${styles.uniLogo}`}
            />
            <p className={`text-center ${styles.appInformation}`}>
              {" "}
              Aplicație realizată în cadrul Centrului de Dezvoltare Software
            </p>
            <MyDate />
          </Col>
          <Col xs="4" className={styles.formCard}>
            <Form className={styles.loginForm}>
              <p className="text-center">Autentificare</p>
              <FormGroup>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user fa-2x"></i>
                    </span>
                  </div>
                  <Input
                    type="text"
                    className="form-control py-4"
                    placeholder="Email"
                  />
                </div>
              </FormGroup>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock fa-2x"></i>
                  </span>
                </div>
                <Input
                  type="text"
                  className="form-control py-4"
                  placeholder="Password"
                />
              </div>

              <Link to="/MainPage">
                <Button className={`btn-lg btn-block ${styles.logButton}`}>
                  Sign in
                </Button>
              </Link>

              <MicrosoftLoginButton
                className={`mt-3 mb-3 ${styles.logButton}`}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
