
import React, { Component}  from 'react';
// import ReactDOM from 'react-dom/client';
import './Style.css';

// eslint-disable-next-line no-unused-vars
var interval;



class Timer extends Component{

  
    constructor(){
      super();
      this.state ={
        // time:new Date().toLocaleTimeString()
        // time:10
        hour:0,
        minute:0,
        second:0,
        isStart:false
      }
    }

    startInterval= ()=>{
     // eslint-disable-next-line eqeqeq
     if(this.state.isStart == false){
      this.setState({
       isStart:true
      })
      interval = setInterval(()=>{
        this.setState({
          // time:new Date().toLocaleTimeString()
          // time: this.state.time -1
          second: this.state.second +1
        })
        // eslint-disable-next-line eqeqeq
        if(this.state.second == 60){
          this.setState({
            second:0,
            minute: this.state.minute +1
          })
        }
        // eslint-disable-next-line eqeqeq
        if(this.state.minute == 60){
          this.setState({
            minute:0,
            hour: this.state.hour +1
          })
        }
      },1000)
    } 
  }

    stoptInterval= ()=>{
      this.setState({
        isStart:false
       })
      clearInterval(interval);
    } 

    resetInterval= ()=>{
      this.stoptInterval();
      this.setState({
        hour:0,
        minute:0,
        second:0,
      })
    }

    // componentDidMount(){
    // this.startInterval();
    // }

    // componentDidUpdate(){
      
    //   // eslint-disable-next-line eqeqeq
    //   if(this.state.time == "0"){
    //     this.stoptInterval(interval);
    //   }
    // }
    
    render(){
      let s = this.state.second;
      let m = this.state.minute;
      let h = this.state.hour;
      return(
        <>
        
        <h2 className='timer'> {`${h>9 ? h : "0"+h}:${m>9 ? m : "0"+m}:${s>9 ? s : "0"+s}`}</h2>
        {/* <button onClick={this.props.handelsettitle}>chenge</button>  */}
        <div className='container'>
        <button className='button1'onClick={this.startInterval}>Start</button>
        <button className='button2'onClick={this.stoptInterval}>Stop</button>
        <button className='button3'onClick={this.resetInterval}>Reset</button>
        </div>
        </>
      )
    }
    }

    export default Timer;