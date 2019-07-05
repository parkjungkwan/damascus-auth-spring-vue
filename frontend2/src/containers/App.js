import React, {Component} from 'react';
import '../assets/css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../components/Hello'
import MyNavbar from '../components/MyNavbar'
import Login from './Login';


class App extends Component{

  constructor(props){
    super()
  }
  render(){
    return (
      <div className='wrapper'>
        <MyNavbar/>
        <Login/>
      </div>
    )
  }
}

export default App;
