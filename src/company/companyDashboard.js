import React, { Component } from 'react'
import StudentDetails from '../company/studentDetails'
import CompanyProfile from './companyProfile'
import fire from '../Firebase/config'

class CompanyDashboard extends Component {
    state={
        profile:'',
        isStatus:true
    }
    componentWillMount = () => {
        this.checkStatus()
    }
    checkStatus = () => {
        const user = fire.auth().currentUser;
        const uid = user.uid
        fire.database().ref("CompanyRegister/" + uid).on('value', snapshot => {
            let currentStatus = snapshot.val().isStatus;
            this.setState({ isStatus: currentStatus })
        })
    }

    redirect = (catagory) => {
        switch (catagory) {
            case 'ownProfile':
                return (
                    this.setState({profile:'OwnProfile'})
                )
            case 'studentDetails':
                return (
                    this.setState({profile:'studentDetails'})
                )
            default :
            return console.log('nothing')
        }
    }

    getData = () => {
        var profile = this.state.profile
        if(profile === 'OwnProfile') {
            return(
                <div>
                <CompanyProfile/>
                </div>
            )
        }
        else if(profile === 'studentDetails') {
            return(
                <div>
                    <StudentDetails/>
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                <button className='waves-effect waves-light btn' onClick={() => { this.redirect('ownProfile') }}>Own Profile</button>
                <button className='waves-effect waves-light btn' onClick={() => { this.redirect('studentDetails') }}>Student Details</button>
                {this.state.isStatus ? this.getData() : alert('You are blocked by Admin')}
            </div>
        )
    }
}
export default CompanyDashboard