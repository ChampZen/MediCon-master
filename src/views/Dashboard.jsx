import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "../components/Card/Card";
import { StatsCard } from "../components/StatsCard/StatsCard";
import { Tasks } from "../components/Tasks/Tasks";
import {Container} from "semantic-ui-react"
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "../variables/Variables";
import Iframe from "../components/IFrame/Iframe"

class Dashboard extends Component {

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <Container>
        <iframe src="http://192.168.116.42:5601/app/kibana#/dashboard/447d1290-fb00-11e9-9cf2-05719544801d?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15y%2Cto%3Anow))" height="700px" width="100%"></iframe>
      </Container>
    );
  }
}

export default Dashboard;
