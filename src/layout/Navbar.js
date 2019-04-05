import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SigninLinks'
import SignedOutLinks from './SignedOutLinks'
// import { connect } from 'react-redux'
import fire from 'firebase'
import { CircularProgress } from '@material-ui/core';
import MDSpinner from 'react-md-spinner';

class Navbar extends Component {
    state = {
        loader:true,
    }
    componentDidMount = () => {
        this.setState({loader:false})
    }

    componentWillMount = () => {
        this.authListener()
    }

    authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user })
                console.log('user')
                console.log(user)
            }
            else {
                console.log('No User Found')
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.loder ? (<div className="center-align"><MDSpinner size={150}/></div>) : (
                    <nav className="nav-wrapper grey darken-3">
                        <div className="container">
                            <Link to="/" className="left brand-logo">Campus Recruitment System</Link>
                            {this.state.user ? <SignedInLinks /> : <SignedOutLinks />}
                        </div>
                    </nav>
                )}

            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         auth: state.firebase.auth
//     }
// }


export default Navbar;