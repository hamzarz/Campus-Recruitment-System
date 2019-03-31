import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../store/actions/index'

const SignedInLinks = (props) => {
    
    return(
        <ul className="right">
            <li><a href="/" onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);