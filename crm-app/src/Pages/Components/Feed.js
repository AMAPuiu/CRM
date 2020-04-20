import React from "react";
import styles from "./Feed.module.css";
import Profile from "./Profile";
import Exams from "./Exams";

import { Container, Jumbotron, Row, Col } from "reactstrap";

const Feed = () => {
  return (
    <Row className={styles.linie}>
      <Col xs="3" className={styles.profile}>
        <Profile />
      </Col>
      <Col xs="8">
        <Exams />
      </Col>
    </Row>
  );
};

export default Feed;
