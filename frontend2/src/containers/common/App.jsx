import React, {Component} from 'react';
import '../../assets/css/App.css';
import MyNavbar from '../../components/MyNavbar'


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
