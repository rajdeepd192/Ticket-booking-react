import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passenger_name: null,
            age: null,
            start_city: null,
            end_city: null,
            contact_no: null,
            passenger_id: null
            
        }
    }

    passenger_nameChangeHandler = (event) => {
        this.setState({passenger_name: event.target.value});
      }

    ageChangeHandler = (event) => {
        this.setState({age: event.target.value});
      }

    start_cityChangeHandler = (event) => {
        this.setState({start_city: event.target.value});
      }

    end_cityChangeHandler = (event) =>{
        this.setState({end_city: event.target.value});
    }

    contact_noChangeHandler = (event) =>{
        this.setState({contact_no: event.target.value})
    }

    passenger_idChangeHandler = (event) =>{
        this.setState({passenger_id: event.target.value})
    }

      submitHandler = (event) => {
        event.preventDefault();
        alert("Form submitted ");
        axios.post('http://localhost:8080/booking/passengers', {
            passenger_name: this.state.passenger_name,
            age: this.state.age,
            start_city: this.state.start_city,
            end_city:  this.state.end_city,
            contact_no: this.state.contact_no,
            passenger_id: this.state.passenger_id
        })
        .then(response => alert(response.body));
      }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
              <h1>Passenger Details</h1>
              <p>Enter your Name:</p>
              <input
                type="text"
                onChange={this.passenger_nameChangeHandler}
              />
              <p>Enter your Age:</p>
              <input
                type="text"
                onChange={this.ageChangeHandler}
              />
              <p>Enter starting city:</p>
              <input
                type="text"
                onChange={this.start_cityChangeHandler}
              />
              <p> Enter destination city: </p>
              <input
                type="text"
                onChange={this.end_cityChangeHandler}
                />
              <p> Enter contact number: </p>
              <input
                type="text"
                onChange={this.contact_noChangeHandler}
               />
               <p> Enter Passenger Id </p>
               <input
                type="text"
                onChange={this.passenger_idChangeHandler}
                />
              <p>
              <input type='submit'/>
              </p>
            </form>
          );
    }

}