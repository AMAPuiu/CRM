import React from 'react';
import styled from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap';

const Styles = styled.div`
  .navbar {
    // background-color: #002147;
    background-color: red;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #ffffff;
    font-size: 1.5em;
    &: hover {
      color: #f0eff4;
    }
  }

  #logo {
      height: 8vh;
      width: calc(4.31 * 8vh);
  }
  #header {
      height: 8vh;
  }

  .navbar-toggle  {
    background-color: white;
    border-color: rgb(255,102,203);
    color: blue;
}

`;

export const Header = () => {
    return (
        <Styles>
            <div id="header">
                <Navbar expand="lg">
                    <Navbar.Brand className="ml-5" ><img id="logo" src={require("../assets/logo.png")}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav navbar-light" className="fas fa-bars fa-1x" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" style={{ backgroundColor: "blue" }}>
                            <Nav.Item className="font-weight-bold"><Nav.Link href="/">Log Out</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Styles>
    );

}


