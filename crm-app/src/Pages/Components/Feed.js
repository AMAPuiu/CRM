import React from 'react';
import styles from './Feed.module.css';
import Profile from './Feed/Profile';
import Exams from './Feed/Exams';
import { Row, Col } from 'reactstrap';

const Feed = () => {
  return (
    <Row>
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
