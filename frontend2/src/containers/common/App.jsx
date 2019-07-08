import React, {Component} from 'react';
import '../../assets/css/App.css';
<<<<<<< HEAD:frontend2/src/containers/common/App.jsx
import MyNavbar from '../../components/MyNavbar'
=======

import MyNavbar from '../../components/MyNavbar.jsx'
>>>>>>> 346cc37881c2eb817dc1081985e96be97969b697:frontend2/src/containers/common/App.jsx


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
