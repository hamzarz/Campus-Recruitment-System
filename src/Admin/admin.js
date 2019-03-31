import React, { Component } from 'react'

class AdminPage extends Component {

    redirect = (catagory) => {
        const userCatagory = catagory;
        switch(userCatagory) {
            case 'company':
            return this.props.history.replace('/all-company')
            case 'student':
            return this.props.history.replace('/student-details')
            default:
            return'nothing to show'
        }
    }

    render() {
        return(
            <div>
                <button onClick={() => {this.redirect('student')}}>Student</button>
                <button onClick={() => {this.redirect('company')}}>Company</button>
            </div>
        )
    }
}

export default AdminPage