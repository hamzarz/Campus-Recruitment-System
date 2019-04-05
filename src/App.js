import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import SignUp from './auth/Signup';
import Enter from './Enter/enter';
import Dashboard from './Dashboard/dashboard';
import StudentRegister from './student/studentRegister'
import companyRegister from './company/companyRegister'
import Vacancy from './company/vacancy'
import AllJobs from './student/viewJobs'
import Error from './404'
import SigninLinks from './layout/SigninLinks';
import { connect } from 'react-redux'
import { gettingUserId } from './store/actions/index'

class App extends Component {


  render() {
    return (

      <div className="App">
        {this.props.user ? (
          this.props.user === 'company' ?
            <Router>
              <Fragment>
                <Navbar />
                <Switch>
                  <Route exact path='/' component={Enter} />
                  <Route path='/dashboard' component={Dashboard} />
                  <Route path='/post-vacancy' component={Vacancy} />
                  <Route component={Error} />
                </Switch>
              </Fragment>
            </Router>
            : this.props.user === 'student' ?
              <Router>
                <Fragment>
                  <Navbar />
                  <Switch>
                    <Route exact path='/' component={Enter} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/view-jobs' component={AllJobs} />
                    <Route component={Error} />
                  </Switch>
                </Fragment>
              </Router>
              : this.props.user === 'admin' ?
                <Router>
                  <Fragment>
                    <Navbar />
                    <Switch>
                      <Route exact path='/' component={Enter} />
                      <Route path='/dashboard' component={Dashboard} />
                      <Route component={Error} />
                    </Switch>
                  </Fragment>
                </Router> : 'loading'
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
                  <Route path="/signinlinks" component={SigninLinks} />
                  <Route component={Error} />
                </Switch>
              </Fragment>
            </Router>
          )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.company.currentUserCatagory
    // user:'company'
  }
}
const mapDispatchToProps = (dispatch) => {
  dispatch(gettingUserId())
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
