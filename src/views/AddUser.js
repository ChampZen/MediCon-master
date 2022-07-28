import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  Select,
  Container
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class AddUser extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <Container> 
            <br/> <br/> 
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <Form.Field
            control={Select}
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>

        
        <Form.Group widths='equal'>
        <Form.Field
            control={Input}
            label='Address'
            placeholder='Address'
          />
        </Form.Group>
        <Form.Group widths='equal'>
           <Form.Field
            control={Input}
            label='UserID'
            placeholder='User ID'
          />
          
          <Form.Field
            control={Input}
            label='Password'
            placeholder='Password'
          />
        </Form.Group>

        <Form.Field
          control={Input}
          label='Email'
          placeholder='Email Address'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </Container>
    )
  }
}

export default AddUser
