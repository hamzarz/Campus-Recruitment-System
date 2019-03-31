import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SigninLinks'
import SignedOutLinks from './SignedOutLinks'
// import { connect } from 'react-redux'
import fire from 'firebase'

class Navbar extends Component {
    state = {}
    
    componentWillMount = () => {
        this.authListener()
    }

    authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState({user})
                console.log('user')
                console.log(user)
            }
            else{
                console.log('No User Found')
            }
        })
    }

    render() {
    return(
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to="/" className="left brand-logo">Campus Recruitment System</Link>
            {this.state.user?<SignedInLinks />:<SignedOutLinks />}
            
            
        </div>
        </nav>
    )
}
}

// const mapStateToProps = (state) => {
//     return{
//         auth: state.firebase.auth
//     }
// }


export default Navbar;