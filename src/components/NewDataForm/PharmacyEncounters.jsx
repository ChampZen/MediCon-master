import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    TextArea,
    Select,
    Container
  } from 'semantic-ui-react'


class PharmacyEncounters extends Component {

    render() {
        
        return (
            <Container style={{border: "2px solid pink" }}>
            <h4> Pharmacy Encounters</h4>
            <Form> 
            <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Clinic ID'
            placeholder='Clinic ID'
          />
          <Form.Field
            control={Input}
            label='Date and Time'
            placeholder='Date and Time'
          />
          
          <Form.Field
            control={Input}
            label='Description'
            placeholder='Description'
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Provider ID'
            placeholder='Provider ID'
          />
          <Form.Field
            control={Input}
            label='Provider Name'
            placeholder='Provider Name'
          />
          
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Pharmacy Name'
            placeholder='Pharmacy Name'
          />
          <Form.Field
            control={Input}
            label='Drug Name'
            placeholder='Drug Name'
          />
          
          <Form.Field
            control={Input}
            label='Units'
            placeholder='Units'
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Days Of Supply'
            placeholder='Days Of Supply'
          />
          <Form.Field
            control={Input}
            label='Dispense Date'
            placeholder='Dispense Date'
          />
          
          <Form.Field
            control={Input}
            label='Dose'
            placeholder='Dose'
          />
        </Form.Group>

    <Form.Group widths="equal">
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Remark'
      placeholder='Pharmacy Remark'
    />
    </Form.Group> 

    <Form.Group widths="equal">
    <Form.Button >Submit</Form.Button>
    </Form.Group> 
        </Form>
        </Container>        
        );
    }

}

export default PharmacyEncounters