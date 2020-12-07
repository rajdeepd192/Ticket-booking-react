import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './PassengerForm';
import FormEq from './EnquiryForm';
import FormCan from './CancelForm';
import FormTic from './TicketForm';
import FormUp from './UpdateForm';
import homeLogo from './homeLogo.jpg';
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
    <h2 className="ticket">Ticket</h2>
  )
}

function Enquiry(){
  return(
    <h2 className="enquiry">Enquiry</h2>
  )
}

function Cancellation(){
  return(
    <h2 className="cancellation">Cancellation</h2>
  )
}

function Default() {
  return (<Router>
    <div>
      <h1>WELCOME TO TICKET BOOKING SERVICE</h1>
  <ul>
 < marquee behavior="scroll" scrollamount="3" direction="left" onmouseover="this.stop();" onmouseout="this.start();">    
            <Link to="/passenger">|   Passenger    </Link>
          {/* </li>
          <li> */}
           <Link to="/train">|    Train   </Link> 
          {/* </li>
          <li> */}
            <Link to="/ticket">|    Ticket    |</Link>
            <Link to="/enquiry">   Enquiry   |</Link>
            <Link to="/cancellation">   Cancellation    |</Link>
            </ marquee>
        </ul>
        <img src={homeLogo} alt="homeLogo" width={1150} height={500}/>
        
        
        {/* <pre> 
             ACTIVE ROUTES<br/><br/>
            KOL - HYD (MON-SUN) <br/><br/>
            KOL - PUNE (MON-SUN) <br/><br/>
            HYD - BANG (MON-SUN) <br/><br/>
        </pre>
         */}

      <Switch>
        <Route path="/train">
          <FormUp/>
        </Route>
        <Route path="/ticket">
          <FormTic/>
        </Route>
        <Route path="/passenger">
          <Form/>
        </Route>
        <Route path="/enquiry">
          <FormEq/>
          </Route>
        <Route path="/cancellation">
          <FormCan/>
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

// ReactDOM.render(
//   <React.StrictMode>
//     <App />,
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
