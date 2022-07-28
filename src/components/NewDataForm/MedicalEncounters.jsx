import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    TextArea,
    Select,
    Container
  } from 'semantic-ui-react'

class MedicalEncounters extends Component {

    render() {
        
        return (
            <Container style={{border: "2px solid pink" }}>
            <h4> Medical Encounters </h4>
            <Form> 
            <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Cheif complaint'
            placeholder='CC'
          />
          <Form.Field
            control={Input}
            label='Clinic ID'
            placeholder='Clinic ID'
          />
          
          <Form.Field
            control={Input}
            label='Encounter Date and Time'
            placeholder='Encounter Date and Time'
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Encounter Description'
            placeholder='Encounter Description'
          />
          <Form.Field
            control={Input}
            label='Specialty'
            placeholder='Specialty'
          />
          
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Provider Name'
            placeholder='Provider Name'
          />
          <Form.Field
            control={Input}
            label='Disposition'
            placeholder='Disposition'
          />
          
          <Form.Field
            control={Input}
            label='Provider NPI'
            placeholder='Provider NPI'
          />
        </Form.Group>

    <Form.Group widths="equal">
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='SOAP'
      placeholder='SOAP Remark'
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

export default MedicalEncounters