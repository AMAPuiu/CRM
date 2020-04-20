import React from 'react';
import styles from './GradesTable.module.css';
import { Table } from 'reactstrap';

const GradesTable = () => {
  return (
    <Table>
      <tbody className="text-center">
        <tr className={styles.line}>
          <td className={styles.nameCourse}>Limbaje Formale si Automate</td>
          <td>
            <button className={styles.statusButton}>5.00</button>
          </td>
        </tr>
        <tr>
          <td className={styles.nameCourse}>Calculabilitate si Complexitate</td>
          <td>
            <button className={styles.statusButton}>4.33</button>
          </td>
        </tr>
        <tr>
          <td className={styles.nameCourse}>Geometrie Compuationala</td>
          <td>
            <button className={styles.statusButton}>9.70</button>
          </td>
        </tr>
        <tr>
          <td className={styles.nameCourse}>Programare Logica</td>
          <td>
            <button className={styles.statusButton}>8.27</button>
          </td>
        </tr>
        <tr>
          <td className={styles.nameCourse}>Algebra</td>
          <td>
            <button className={styles.statusButton}>10</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default GradesTable;
