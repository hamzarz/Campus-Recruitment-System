import React, { Component } from 'react'
import StudentDetails from '../company/studentDetails'
import CompanyProfile from './companyProfile'
import fire from '../Firebase/config'
import PostVacancy from './vacancy'
import JobPosted from './jobsPosted'
import MDSpinner from 'react-md-spinner'

class CompanyDashboard extends Component {
    state = {
        profile: '',
        isStatus: true,
        loader: true
    }

    // componentDidMount = () => {
    //         this.setState({ loader: false })
    // }
    componentDidUpdate = (prevPros, prevState) =>{
        if(prevPros !== this.props) {
            this.setState({ loader : false})
        }
    }

    componentWillMount = () => {
        this.setState({loader:true})
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
                    this.setState({ profile: 'OwnProfile' })
                )
            case 'studentDetails':
                return (
                    this.setState({ profile: 'studentDetails' })
                )
            case 'postVacancy':
                return (
                    this.setState({ profile: 'postVacancy' })
                )
            case 'jobPosted':
                return (
                    this.setState({ profile: 'jobPosted' })
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
                    <CompanyProfile />
                </div>
            )
        }
        else if (profile === 'studentDetails') {
            return (
                <div>
                    <StudentDetails />
                </div>
            )
        }
        else if (profile === 'postVacancy') {
            return (
                <div>
                    <PostVacancy />
                </div>
            )
        }
        else if (profile === 'jobPosted') {
            return (
                <div>
                    <JobPosted />
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                {this.state.loader ? (<div className="center-align"><MDSpinner size={150} /></div>) : (
                    this.state.isStatus ? (
                        <div className="center-align">
                            <button className='waves-effect waves-light btn' onClick={() => { this.redirect('ownProfile') }}>Own Profile</button>
                            <button className='waves-effect waves-light btn' onClick={() => { this.redirect('studentDetails') }}>Student Details</button>
                            <button className='waves-effect waves-light btn' onClick={() => { this.redirect('postVacancy') }}>Post Job</button>
                            <button className='waves-effect waves-light btn' onClick={() => { this.redirect('jobPosted') }}>Jobs Posted</button>
                            {this.getData()}
                        </div>
                    ) : (<h3>You are Blocked by Admin</h3>)

                )}
            </div>

        )
    }
}
export default CompanyDashboard