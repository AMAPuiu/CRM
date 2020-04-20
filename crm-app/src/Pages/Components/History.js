import React from 'react';
import styles from './History.module.css';
import Header from './Header';
import Profile from './Grades/Profile';
import Grades from './Grades/Grades';
import { Row, Col } from 'reactstrap';

const History = () => {
  return (
    <React.Fragment>
      <Header />
      <Row className={styles.linie}>
        <Col xs="3" className={styles.profile}>
          <Profile />
        </Col>
        <Col xs="8">
          <Grades />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default History;
