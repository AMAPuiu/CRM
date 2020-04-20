import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Exams.module.css';
import ExamsTable from './ExamsTable';

import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const examStyles = classNames.bind(styles);
  return (
    <Container className={styles.examBox}>
      <div>
        <Nav tabs>
          <NavItem
            className={examStyles('tab', {
              active: activeTab === '1',
              inactive: activeTab !== '1',
            })}
          >
            <NavLink
              onClick={() => {
                toggle('1');
              }}
            >
              <p className={styles.tabText}>Neprogramate</p>
            </NavLink>
          </NavItem>
          <NavItem
            className={examStyles('tab', {
              active: activeTab === '2',
              inactive: activeTab !== '2',
            })}
          >
            <NavLink
              onClick={() => {
                toggle('2');
              }}
            >
              <p className={styles.tabText}>In asteptare</p>
            </NavLink>
          </NavItem>
          <NavItem
            className={examStyles('tab', {
              active: activeTab === '3',
              inactive: activeTab !== '3',
            })}
          >
            <NavLink
              onClick={() => {
                toggle('3');
              }}
            >
              <p className={styles.tabText}>Programate</p>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Container className={styles.courseInformation}>
              <p className={styles.title}>Cereri neprogramate</p>
              <ExamsTable />
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Container className={styles.courseInformation}>
              <p className={styles.title}>Cereri in asteptare</p>
            </Container>
          </TabPane>
          <TabPane tabId="3">
            <Container className={styles.courseInformation}>
              <p className={styles.title}>Cereri programate</p>
            </Container>
          </TabPane>
        </TabContent>
      </div>
    </Container>
  );
};

export default Example;
