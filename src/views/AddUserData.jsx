import React, { Component } from 'react'
import {Container,Button,
    Form,
    Input,
    Select} from 'semantic-ui-react'

import EmergencyEncounters from '../components/NewDataForm/EmergencyEncounters'
import LabEncounters from '../components/NewDataForm/LabEncounters'
import MedicalEncounters from '../components/NewDataForm/MedicalEncounters'
import PharmacyEncounters from '../components/NewDataForm/PharmacyEncounters'

    const options = [
        { key: 'A', text: 'Medical Encounters', value: 'medical_encounters' },
        { key: 'B', text: 'Lab Encounters', value: 'lab_encounters' },
        { key: 'C', text: 'Emergency Encounters', value: 'emergency_encounters' },
        { key: 'D', text: 'Pharmacy Encounters', value: 'pharmacy_encounters' }
      ]

class AddUserData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            medical_encounters : false,
            emergency_encounters : false,
            lab_encounters : false,
            pharmacy_encounters : false
        };
      }


      visitType = (e, {value}) => {
        console.log(value);
        this.setState({ medical_encounters : false,
            emergency_encounters : false,
            lab_encounters : false,
            pharmacy_encounters : false});
            value=value+"";

            if(value=="medical_encounters") { this.setState({medical_encounters:true}) }
            if(value=="lab_encounters") { this.setState({lab_encounters:true}) }
            if(value=="pharmacy_encounters") { this.setState({pharmacy_encounters:true}) }
            if(value=="emergency_encounters") { this.setState({emergency_encounters:true}) }
        
            console.log(value=="medical_encounters")    
            console.log(this.state);
            
    };

    render() {
        
        return (
            
            <Container> 
                <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='UserID'
            placeholder='User-ID'
          />
          <Form.Field
            control={Input}
            label='Episode-ID'
            placeholder='Episode-ID'
          />
          <Form.Field
            control={Input}
            label='Encounter-ID'
            placeholder='Encounter ID'
          />
        </Form.Group>

        <Form.Group widths='equal'> 
            
          <Form.Field
            control={Select}
            label='Visit Type'
            options={options}
            placeholder='Visit Type'
            onChange={ this.visitType }
          />
        </Form.Group>
        </Form>

        <hr />

        { this.state.medical_encounters && <MedicalEncounters />}
        { this.state.emergency_encounters && <EmergencyEncounters />}
        { this.state.pharmacy_encounters && <PharmacyEncounters />}
        { this.state.lab_encounters && <LabEncounters />}

            </Container>
        );

            

    }
}

export default AddUserData