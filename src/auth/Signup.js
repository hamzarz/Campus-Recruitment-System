import React, { Component } from 'react'
// import CompanyRegister from '../company/companyRegister'
// import StudentRegister from '../student/studentRegister'

class SignUp extends Component {
    

    redirecting = (catagory) => {
        const userCatagory = catagory
        switch(userCatagory){
            case'student':
            // return <StudentRegister/>
            return this.props.history.replace('/student/student-register')
            case 'company':
            // return <CompanyRegister />
            this.props.history.replace('/company/company-register')
            break;
            default:
            return "please chose on button"
        }
    }

    render() {
        return(
            <div className="center-align">
                <button className='waves-effect waves-light btn' onClick={() => {this.redirecting('student')}}>Student</button>
                <button className='waves-effect waves-light btn' onClick={() => {this.redirecting('company')}}>Company</button>
            </div>
        )
    }
}
export default SignUp