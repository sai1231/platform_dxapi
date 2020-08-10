import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Segment,
  Icon,
  Grid,
  Button
} from "semantic-ui-react";
import { Workarea } from "../Workarea/Workarea";
import background from "../assets/img/homeLoan.jpg";
import { DashboardWidget } from "../DashboardWidget/DashboardWidget";
import { caseActions } from "../_actions";

import { store } from "../_helpers";

class Dashboard extends Component {
  render() {
    const createCase = () => {
      store.dispatch(
        caseActions.createCase("Demo-DigitalX-Work-LoanOrigination")
      );
    };

    return (
      <div
        style={{
          backgroundImage: "url(" + background + ")",
          height: "100vh",
          margin: "-25px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <Container>
          <div style={{}}>
            <Header
              as="h1"
              content="Looking for home?"
              style={{
                fontSize: "4em",
                fontWeight: "normal",
                marginBottom: 0,
                paddingTop: "3em"
              }}
            />
            <Header
              as="h2"
              content="Prequalify for a mortgage today."
              style={{
                fontSize: "1.7em",
                fontWeight: "normal",
                marginTop: "1.5em"
              }}
            />
            <Header
              as="h2"
              content="Apply online with our competitive rates and get support from our experts."
              style={{
                fontSize: "1.7em",
                fontWeight: "normal",
                marginTop: "1.2em"
              }}
            />
            <Button className="dxapi" size="huge" onClick={createCase}>
              Prequalify now
              <Icon name="right arrow" />
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };
