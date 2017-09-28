import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Layout extends React.Component {

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8} lg={6} lgOffset={3} mdOffset={2}>
            { this.props.children || null }
          </Col>
        </Row>
      </Grid>
    )
  }
}