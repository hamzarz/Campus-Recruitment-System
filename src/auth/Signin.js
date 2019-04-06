import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/index'
import MDSpinner from 'react-md-spinner'

class SignIn extends Component {
  state = {
    email: 'admin@gmail.com',
    password: 'admin123',
    loader: false,
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.setState({ loader: true })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loader: true })
    console.log(this.state)
    this.props.signIn(this.state);
    // this.setState({loader:false})
  }

  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="center-align"><MDSpinner size={150} /></div>
        ) : (
            <div className="container">
              <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Log In</h5>
                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <p>Don't have account click here <a href="./signup">Signup</a></p>
                <div className="input-field">
                  <button className="btn pink light-1 z-depth-0">Login</button>
                </div>
              </form>
            </div>
          )}
      </div>




    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (signinData) => dispatch(signIn(signinData))
  }
}

export default connect(null, mapDispatchToProps)(SignIn)
