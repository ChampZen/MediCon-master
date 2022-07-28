import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import TableModal from "../components/ModalTable/ModalTable"
import Card from "../components/Card/Card";
import { userDataHead, userDataDetails } from "../variables/Variables";

var x = <TableModal />

class TableList extends Component {
  
  
  fetchRowDetail = (prop) => {
    console.log(prop[0]+" "+x);
  }
  

  render() {
    
    return (
      <div className="content">
        <Grid fluid>
          <Row>

            <Col md={12}>
              <Card
                plain
                title="User History"
                category="Here are details of users hospital visits"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        {userDataHead.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                        <th> View </th>
                      </tr>
                    </thead>
                    <tbody >
                      {userDataDetails.map((prop, key) => {
                        return (
                          <tr key={key} onClick={() => { this.fetchRowDetail(prop); }} >
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            <td> <TableModal data={prop}  /> </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const App = () => (
  
  <TableList> 
  </TableList>
);


export default App;
