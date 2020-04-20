import React from 'react';
import avatar from '../../imgs/avatar.jpg';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const Profile = () => (
  <div>
    <Row className={styles.profilePhoto}>
      <Col xs="5" className="text-center">
        <img src={avatar} className={`img-responsive ${styles.fitImage}`} />
      </Col>
      <Col xs="7" className={styles.generalInfo}>
        <p style={{ fontWeight: 'bold' }} className="text-center">
          Andronic Alexandra
        </p>
        <p className={`${styles.uni} ${styles.marginTop}`}>
          Facultatea de Matematica si Informatica
        </p>
        {/* <p className = "text-center marginTop">si Informatica</p> */}
        <p className={`text-center ${styles.marginTop}`}>Anul 2</p>
      </Col>
    </Row>
    <div
      className="text-center"
      style={{ color: '#002147', fontSize: '1.10em' }}
    >
      <p className={styles.studentProfile}>PROFIL STUDENT</p>
      <p>
        <strong>Studii universitare: </strong>licenta
      </p>
      <p>
        <strong>Specializare: </strong>Informatica
      </p>
      <p>
        <strong>Grupa: </strong>231
      </p>

      <Link to="/History">
        <button className={styles.istoric}>Istoric Scolar</button>
      </Link>
    </div>
  </div>
);

export default Profile;
