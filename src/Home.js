import homeLogo from './homeLogo.jpg';
import React from 'react';
import Button from 'react-bootstrap/Button';


export default class HomeUI extends React.Component {
    constructor(props) {
        super(props);
    
}

render(){
    return(
        <div className="homescreen"><img src={homeLogo} alt="homeLogo" fluid width={1150} height={500}/>
        </div>
        
    )
}
}