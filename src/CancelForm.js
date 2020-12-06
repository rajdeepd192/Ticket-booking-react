import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class FormCan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passenger_id: null,
            
        }
    }
    idChangeHandler = (event) => {
        this.setState({passenger_id: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.delete('http://localhost:8080/Cancel/deletepassenger/'+this.state.passenger_id)
        .then(response => {
          alert("Ticket Cancelled");
        });
      }
      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1>|| Welcome to Cancellation service ||</h1>
              <p>Enter Passenger ID:</p>
              <input
                type="text"
                onChange={this.idChangeHandler}
              />
               <p>
              <input type='submit' value="Delete"/>
              </p>
            </form>
            
            </div>
          );
    }
}

