import React, { Component}  from 'react';
// import ReactDOM from 'react-dom/client';
import './Style.css';

class Hello extends Component{
    render(){
        return(
          <div>
             <h2>{this.props.title}</h2>
          </div>
      
        )
      }
    }

export default Hello;    