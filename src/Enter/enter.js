import React, { Component } from 'react'
import fire from '../Firebase/config';
import Signin from '../auth/Signin';
import { CircularProgress } from '@material-ui/core';
// import Dashboard from '../Dashboard/dashboard';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import Dashboard from '../Dashboard/dashboard';


class Enter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader:true,
        }
        // this.authListener();
    }
    componentDidMount = () => {
        this.setState({loader:false})
    }
    componentWillMount = () => {
        this.authListener()
    }
    authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            debugger
            if(user) {
                this.setState({user});
                console.log('user id')
                console.log(user.uid)
            }
            else {
                console.log('User not Found')
            }
        })
    }
    

    render() {
        return (
            <div>
                {this.state.loader ? (<CircularProgress/>) : (this.state.user ? this.props.history.replace('/dashboard') : (<Signin />)) }
            </div>

      )
    }
}
export default Enter