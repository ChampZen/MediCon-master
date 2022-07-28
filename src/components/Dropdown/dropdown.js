import React, {Component}  from 'react'
import { Dropdown } from 'semantic-ui-react'
import Varb from "../../variables/Variables"
import App from "../../App"

var dropValues = [ ]


class DropdownExampleSelection extends Component {

    roleType = (e, {value}) => {
        console.log(value);
        
        if(value == "Admin") {
            console.log("true")
            this.props.setAdmin()
        }
        if(value == "Hospital") {
            console.log("true hos")
            this.props.setHos()
        }
        if(value == "Patient") {
            console.log("true")
            this.props.setUser()
        }
        if(value == "Pharma") {
            console.log("true")
            this.props.setPharma()
        }
    };
    
    constructor(props) {
        super(props);
        const myArray = props.lst;
        dropValues = [];
        for (var index = 0; index < myArray.length; index++) {
            var x = {
                key: myArray[index],
                text: myArray[index],
                value: myArray[index],
                image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
              };
              dropValues.push(x);    
          }
    }

    render() {
        return (
            <Dropdown
            placeholder='Login As'
            fluid
            selection
            options={dropValues}
            onChange={ this.roleType }
            />
        );
    }
}

export default DropdownExampleSelection

