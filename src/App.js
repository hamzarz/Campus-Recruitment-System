import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import SignUp from './auth/Signup';
import Enter from './Enter/enter';
import Dashboard from './Dashboard/dashboard';
import StudentRegister from './student/studentRegister'
import companyRegister from './company/companyRegister'
import fire from './Firebase/config'
import Error from './404'

class App extends Component {

  state = {}

  componentWillMount = () => {
    this.authListener()
  }
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      }
      else {
        console.log('user not found')
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Router>
            <Fragment>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Enter} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={Enter} />
                <Route path='/dashboard' component={Dashboard} />
                <Route component={Error} />
              </Switch>
            </Fragment>
          </Router>
        ) : (
            <Router>
              <Fragment>
                <Navbar />
                <Switch>
                  <Route exact path='/' component={Enter} />
                  <Route path='/signup' component={SignUp} />
                  <Route path='/signin' component={Enter} />
                  <Route path='/company/company-register' component={companyRegister} />
                  <Route path='/student/student-register' component={StudentRegister} />
                  <Route component={Error} />
                </Switch>
              </Fragment>
            </Router>
          )}
      </div>
    );
  }
}

export default App;
