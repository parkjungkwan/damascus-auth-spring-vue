import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId : '',
            password : ''
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    dismissError() {
        this.setState({ error: '' });
      }
    
    handleSubmit(e) {
        e.preventDefault();
        alert('login ...')
        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        return this.setState({ error: '' });
    }
    
    handleUserChange(e) {
        this.setState({
            username: e.target.value,
        });
    };
    
    handlePassChange(e) {
        this.setState({
            password: e.target.value,
        });
    }
    handleClick(e){
        e.preventDefault();
        alert('>>>');
    };
    render(){
        return (
            <div>
                <form onSubmit="{this.handleSubmit}">
                    <MuiThemeProvider>
                        <div>
                        
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                            />
                        <br/>
                            <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </div>
                    </MuiThemeProvider>
                </form>
                <Link to="/" className="FormField__Link">Create an account</Link>
            </div>
        );
    }
    
}
const style = {
    margin: 15,
   };
export default Login;