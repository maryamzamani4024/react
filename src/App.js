import React, { Component } from 'react';
// import ReactDOM from 'react-dom/client';
import './Style.css';
import Timer from './Timer';
import Hello from './Hello';
// eslint-disable-next-line no-unused-vars
var interval;



class App extends Component{

  constructor (){
    super();
    this.state= { title:"سلام دوستان من" }
  }

  handelsettitle = ()=>{
    this.setState({ title:"به کدیاد خوش آمدید!" })
  }


 
  render(){
    return(
      <div className='main'> 
      <Hello title={this.state.title}/>
      <Timer handelsettitle={this.handelsettitle}/>
      </div>
    )
  }
}



export default App;
