import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Grades.module.css';
import GradesTable from './GradesTable';

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

  const gradesStyles = classNames.bind(styles);
  return (
    <Container className={styles.examBox}>
      <div>
        <Nav tabs>
          <NavItem
            className={gradesStyles('tab', {
              active: activeTab === '1',
              inactive: activeTab !== '1',
            })}
          >
            <NavLink
              onClick={() => {
                toggle('1');
              }}
            >
              <p className={styles.tabText}>Anul 1</p>
              <p className={styles.tabYear}>2017-2018</p>
            </NavLink>
          </NavItem>
          <NavItem
            className={gradesStyles('tab', {
              active: activeTab === '2',
              inactive: activeTab !== '2',
            })}
          >
            <NavLink
              onClick={() => {
                toggle('2');
              }}
            >
              <p className={styles.tabText}>Anul 2</p>
              <p className={styles.tabYear}>2018-2019</p>
            </NavLink>
          </NavItem>
          <NavItem
            className={gradesStyles('tab', {
              active: activeTab === '3',
              inactive: activeTab !== '3',
            })}
          >
            <NavLink
              onClick={() => {
                toggle('3');
              }}
            >
              <p className={styles.tabText}>Anul 3</p>
              <p className={styles.tabYear}>2019-2020</p>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Container className={styles.courseInformation}>
              {/* <p className={styles.title}>an universitar: 2019-2020</p> */}

              <GradesTable />
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Container className={styles.courseInformation}></Container>
          </TabPane>
          <TabPane tabId="3">
            <Container className={styles.courseInformation}></Container>
          </TabPane>
        </TabContent>
      </div>
    </Container>
  );
};

export default Example;
