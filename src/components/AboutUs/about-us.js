import React, {Component} from "react";
import { Container, Header, Message, Segment } from "semantic-ui-react";

import "pure-react-carousel/dist/react-carousel.es.css";

import CardCarousel from "./CardCarousel";
import ImageCarousel from "./ImageCarousel";

export class AboutUs extends Component {
    render() {
      return (
    <Container style={{ margin: 20 }}>
      <Header as="h1" dividing>
        About MediConn
      </Header>
      <Message info>
        Medicons is application built upon blockchain and IPFS to enable secure and efficent medical records sharing.
        .
      </Message>

      <Segment attached="top">
        <Header as="h2" content="Our Stakeholders" />
        <p>
          Varoius stakeholders of this application.
        </p>
      </Segment>
      <Segment attached="bottom">
        <center>  <CardCarousel /> </center>
      </Segment>

      <Segment attached="top">
        <Header as="h2" content="Sneak Peek into application" />
      </Segment>
      <Segment attached="bottom">
        <ImageCarousel />
      </Segment>
    </Container>
  );
}
}

export default AboutUs;