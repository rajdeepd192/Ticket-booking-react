import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './PassengerForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Train() {
  return (
    <h2 className="train">Train</h2>
  )
}


function Passenger() {
  return (
    <h2 className="paseenger">Passenger</h2>
  )
}

function Ticket() {
  return (
    <h2>Ticket</h2>
  )
}

function Default() {
  return (<Router>
    <div>
      
        <ul>
          <li>
            <Link to="/passenger">Passenger</Link>
          </li>
          <li>
            <Link to="/train">Train</Link>
          </li>
          <li>
            <Link to="/ticket">Ticket</Link>
          </li>
        </ul>
      

      <Switch>
        <Route path="/train">
          <Train />
        </Route>
        <Route path="/ticket">
          <Ticket />
        </Route>
        <Route path="/passenger">
          <Form/>
        </Route>
      </Switch>
    </div>
  </Router>
);
}

ReactDOM.render(
  <Default />,
  document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
