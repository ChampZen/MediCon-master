import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import {Table} from 'react-bootstrap'
import { medical_ecounter_head, medical_ecounter_details } from "../../variables/Variables";
import { emergency_encounter_head, emergency_encounter_details } from "../../variables/Variables";
import { lab_encounter_head, lab_encounter_details } from "../../variables/Variables";
import { pharma_encounters_head, pharma_encounters_details } from "../../variables/Variables";



const ModalModalExample = ({data}) => (
  <Modal trigger={<Button>View</Button>} style={{"overflow-y": "initial !important"}}>
    <Modal.Header>Detailed Data</Modal.Header>
    <Modal.Content image style={{"height": "650px", "overflow-y": "auto"}}>
      <Modal.Description>
        <div style={{"overflow-x":"auto"}}> 
        <h3> Medical Encounter </h3>
      <Table striped bordered hover >
                    <thead>
                      <tr>
                        {medical_ecounter_head.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody >
                      {medical_ecounter_details.map((prop, key) => {
                        return (
                          <tr key={key} >
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>

                  <h3> Emergency Encounter </h3>
      <Table striped bordered hover >
                    <thead>
                      <tr>
                        {emergency_encounter_head.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody >
                      {emergency_encounter_details.map((prop, key) => {
                        return (
                          <tr key={key} >
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>

                  <h3> Pharma Encounter </h3>
      <Table striped bordered hover >
                    <thead>
                      <tr>
                        {pharma_encounters_head.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody >
                      {pharma_encounters_details.map((prop, key) => {
                        return (
                          <tr key={key} >
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>

                  <h3> Lab Encounter </h3>
      <Table striped bordered hover >
                    <thead>
                      <tr>
                        {lab_encounter_head.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody >
                      {lab_encounter_details.map((prop, key) => {
                        return (
                          <tr key={key} >
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
