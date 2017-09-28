import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class Toolbar extends React.Component {

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Table Dashboard</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

