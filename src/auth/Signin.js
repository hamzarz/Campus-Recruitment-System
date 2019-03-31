import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/index'

class SignIn extends Component {
  state={
    email:'',
    password:''
  }
  handleChange = (e) => {
      this.setState({
        [e.target.id] : e.target.value
      })
  }
  // componentDidUpdate = () => {
  //   this.props.history.replace('/dashboard')
  // }
  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
      this.props.signIn(this.state);
  }
  
    render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Log In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <p>Don't have account click here <a href="./signup">Signup</a></p>
            <div className="input-field">
                <button className="btn pink light-1 z-depth-0">Login</button>
            </div>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    signIn : (signinData) => dispatch(signIn(signinData))
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
