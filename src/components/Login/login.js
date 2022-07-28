import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import DropdownExampleSelection from '../Dropdown/dropdown';

import {
  Link
} from "react-router-dom";
const list = ["Admin", "Hospital","Patient","Pharma"  ];
var fwd = ""
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : false,
      admin : false,
      pharma : false,
      hos : false
    }
  }

  setAdmin = ()=>{
    this.setState({admin:true, user:false, hos : false, pharma: false});
  }
  setUser = ()=>{
    this.setState({admin:false, user:true, hos : false, pharma: false});
  }
  setHos = ()=>{
    this.setState({admin:false, user:false, hos : true, pharma: false});
  }
  setPharma = ()=>{
    console.log("setting pharma");
    
    this.setState({admin:false, user:false, hos : false, pharma: true});
  }

  render() {
return (


  <div> 
  <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src="https://img.icons8.com/plasticine/100/000000/login-rounded-right.png" /> Log-in
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            
          />

          <DropdownExampleSelection lst={list} setAdmin={this.setAdmin} setPharma={this.setPharma} setUser={this.setUser} setHos={this.setHos} />  <br />

        </Segment>
      </Form>
      {
      this.state.admin &&
      <Link to="/user-admin"> 
          <Button color='teal' fluid size='large'>
            Login as Admin
          </Button>
          </Link>}
          {
      this.state.user &&
      <Link to="/user-patient"> 
          <Button color='teal' fluid size='large'>
            Login as Patient
          </Button>
          </Link>}

          {
      this.state.hos &&
      <Link to="/user-hos"> 
          <Button color='teal' fluid size='large'>
            Login as Hospital
          </Button>
          </Link>}

          {
      this.state.pharma &&
      <Link to="/user-pharma"> 
          <Button color='teal' fluid size='large'>
            Login as Pharma
          </Button>
          </Link>}
    </Grid.Column>
  </Grid>
  

  </div>
  );
  }
}

export default LoginForm
