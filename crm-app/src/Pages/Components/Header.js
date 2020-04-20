import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../imgs/logo.png";
import notification from "../../imgs/not.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar dark expand="md" className={styles.navbar}>
        <NavbarBrand href="/">
          <img src={logo} id={styles.logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className={styles.navbar_toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          className="mx-auto d-md-block"
          id={styles.navbar_collapse}
        >
          <Nav className="ml-auto" navbar>
            <NavItem className={styles.nav_item}>
              <NavLink href="/">
                <img src={notification} id={styles.notification} />{" "}
                <Badge
                  className="badge badge-pill badge-warning"
                  id={styles.badge}
                >
                  !
                </Badge>
              </NavLink>
            </NavItem>
            <NavItem className={styles.nav_item}>
              <NavLink href="/" id={styles.profile}>
                Profile
              </NavLink>
            </NavItem>
            <NavItem id={styles.logout} className={styles.nav_item}>
              <NavLink href="/">Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
