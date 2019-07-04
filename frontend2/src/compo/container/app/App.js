import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../../present/Hello.js'
import Navbar from '../../present/nav/Navbar.js'


class App extends Component{

  constructor(props){
    super()
  }
  render(){
    return (
      <div className='wrapper'>
        <Navbar></Navbar>
        <Hello name='홍길동'></Hello>
      </div>
    )
  }
}

export default App;
