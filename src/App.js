import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import SignUp from './auth/Signup';
import Enter from './Enter/enter';
import Dashboard from './Dashboard/dashboard';
// import Signin from './auth/Signin';
import AdminPage from './Admin/admin';
import AllCompany from './student/allCompany'
import StudentDetails from './company/studentDetails'
import StudentRegister from './student/studentRegister'
import companyRegister from './company/companyRegister'
import fire from './Firebase/config'

class App extends Component {
  // state = {
  //   userCatagory:''
  // }

  // componentWillMount = () => {
  //   this.authListener()
  // }

  // authListener = () => {
  //   const user = fire.auth().currentUser;
  //   if(user === null) {

  //   }
  //   const userId = user.uid;
  //   fire.database.ref('AllUsersData'+ userId).on('value', snapshot => {
  //     const currentUser = snapshot.val().catagory;
  //     this.setState({userCatagory:currentUser})
  //   })
  // }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Enter} />
          <Route path='/dashboard' component={Dashboard} />
          {/* <Route path='/company/company-dashboard' component={CompanyDashboard} /> */}
          <Route path='/company/company-register' component={companyRegister} />
          <Route path='/signup' component={SignUp} />
          {/* <Route path='/post-vacancy' component={Vacancy} /> */}
          <Route path='/student-details' component={StudentDetails} />
          <Route path='/student/student-register' component={StudentRegister} />
          <Route path='/all-company' component={AllCompany} />
          {/* <Route path='/find-jobs' component={AllJobs} /> */}
          <Route path='/admin' component={AdminPage} />
          <Route path='/signin' component={Enter} />
        </Switch>
      </div>
      </BrowserRouter> 
    );
  }
}

export default App;
