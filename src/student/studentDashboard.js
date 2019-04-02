import React, { Component } from 'react'
import AllCompany from '../student/allCompany'
import StudentProfile from './studentProfile'
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
        fire.database().ref("StudentRegister/" + uid).on('value', snapshot => {
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
            case 'allCompany':
                return (
                    this.setState({profile:'allCompany'})
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
                <StudentProfile/>
                </div>
            )
        }
        else if(profile === 'allCompany') {
            return(
                <div>
                    <AllCompany/>
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                <button className='waves-effect waves-light btn' onClick={() => { this.redirect('ownProfile') }}>Own Profile</button>
                <button className='waves-effect waves-light btn' onClick={() => { this.redirect('allCompany') }}>Companies</button>
                {this.state.isStatus ? this.getData() : alert('You are blocked by Admin')}
            </div>
        )
    }
}
export default CompanyDashboard