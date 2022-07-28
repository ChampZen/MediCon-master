import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";


class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Notifications</h4>
              <p className="category">
                User schedules, appointments and notification are displayed here.
              </p>
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Notifications</h5>
                  <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is informtion notification for user.
                    </span>
                  </Alert>
                  <Alert bsStyle="success" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      Lab tests are completed and result are prepared.
                    </span>
                  </Alert>
                  <Alert bsStyle="warning" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      Warning regular checkup date is near
                    </span>
                  </Alert>
                  <Alert bsStyle="danger" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      Regular Checkup date has passed
                    </span>
                  </Alert>
                </Col>
                
              </Row>
              <br />
              <br />
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Notifications;
