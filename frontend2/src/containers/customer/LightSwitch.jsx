import React, {Component} from 'react'

class LightSwitch extends Component{
    constructor(){
        super()
        this.state = {
            power : false
        }
    }
    render(){
        return(
            <div>
                SWITCH {this.state.power? 'ON':'OFF'}
            </div>
        );

    }
}
export default LightSwitch