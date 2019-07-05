import React, {Component} from 'react';
import '../assets/css/App.css';

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
      </div>
    )
  }
}

export default App;
