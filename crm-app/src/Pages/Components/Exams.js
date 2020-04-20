import React from "react";
import styles from "./Exams.module.css";

import {
  Container,
  Jumbotron,
  Row,
  Col,
  Table,
  Button,
  ButtonGroup,
} from "reactstrap";

const Request = () => {
  return (
    <Container className={styles.courseInformation}>
      <p className={styles.titluCard}>Cereri in asteptare</p>
      <Table className={styles.gradesTable}>
        <tbody className="text-center">
          <tr>
            <td className={styles.nameCourse}>Limbaje Formale si Automate</td>
            <td>
              <button className={styles.yearCourse}>Anul 1</button>
            </td>
            <td>
              <button className={styles.statusButton}>Status</button>
            </td>
          </tr>
          <tr>
            <td className={styles.nameCourse}>
              Calculabilitate si Complexitate
            </td>
            <td>
              <button className={styles.yearCourse}>Anul 2</button>
            </td>
            <td>
              <button className={styles.statusButton}>Status</button>
            </td>
          </tr>
          <tr>
            <td className={styles.nameCourse}>Geometrie Compuationala</td>
            <td>
              <button className={styles.yearCourse}>Anul 2</button>
            </td>
            <td>
              <button className={styles.statusButton}>Status</button>
            </td>
          </tr>
          <tr>
            <td className={styles.nameCourse}>Programare Logica</td>
            <td>
              <button className={styles.yearCourse}>Anul 2</button>
            </td>
            <td>
              <button className={styles.statusButton}>Status</button>
            </td>
          </tr>
          <tr>
            <td className={styles.nameCourse}>Algebra</td>
            <td>
              <button className={styles.yearCourse}>Anul 1</button>
            </td>
            <td>
              <button className={styles.statusButton}>Status</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Request;
