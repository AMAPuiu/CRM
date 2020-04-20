import React from 'react';
import styles from './ExamsTable.module.css';
import { Table } from 'reactstrap';

const ExamsTable = () => {
  return (
    <Table className={styles.gradesTable}>
      <tbody className="text-center">
        <tr className={styles.line}>
          <td className={styles.nameCourse}>Limbaje Formale si Automate</td>
          <td>
            <button className={styles.yearCourse}>Anul 1</button>
          </td>
          <td>
            <button className={styles.statusButton}>Status</button>
          </td>
        </tr>
        <tr>
          <td className={styles.nameCourse}>Calculabilitate si Complexitate</td>
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
  );
};

export default ExamsTable;
