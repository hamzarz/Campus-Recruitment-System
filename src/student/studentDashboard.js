import React, { Component } from 'react'
import AllCompany from '../student/allCompany'
import StudentProfile from './studentProfile'
import fire from '../Firebase/config'
import AllJobs from './viewJobs'
import { CircularProgress } from '@material-ui/core';

class CompanyDashboard extends Component {
    state = {
        profile: '',
        isStatus: false,
        loader: true,
    }
    componentWillMount = () => {
        this.checkStatus()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.data !== this.props.data) {
            this.setState({ loader: false })
        }
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
                    this.setState({ profile: 'OwnProfile' })
                )
            case 'allCompany':
                return (
                    this.setState({ profile: 'allCompany' })
                )
            case 'viewJobs':
                return (
                    this.setState({ profile: 'viewJobs' })
                )
            default:
                return console.log('nothing')
        }
    }

    getData = () => {
        var profile = this.state.profile
        if (profile === 'OwnProfile') {
            return (
                <div>
                    <StudentProfile />
                </div>
            )
        }
        else if (profile === 'allCompany') {
            return (
                <div>
                    <AllCompany />
                </div>
            )
        }
        else if (profile === 'viewJobs') {
            return (
                <div>
                    <AllJobs />
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                {this.state.loader ? (<CircularProgress />) : (
                    this.state.isStatus ? (
                        <div className="center-align">
                            <button className='waves-effect waves-light btn' onClick={() => { this.redirect('ownProfile') }}>Own Profile</button>
                            <button className='waves-effect waves-light btn' onClick={() => { this.redirect('allCompany') }}>Companies</button>
                            <button className='waves-effect waves-light btn' onClick={() => { this.redirect('viewJobs') }}>View Jobs</button>
                            {this.getData()}
                        </div>
                    ) : (<h3>You are Blocked by Admin</h3>)

                )}
            </div>

        )
    }
}
export default CompanyDashboard