import React, { Component } from 'react'
// import fire from '../Firebase/config';
import { connect } from 'react-redux'
import { gettingUserId } from '../store/actions/index'
import StudentDashboard from '../student/studentDashboard'
import AdminPage from '../Admin/admin'
import CompanyDashboard from '../company/companyDashboard';
import MDSpinner from 'react-md-spinner'

class Dashboard extends Component {
    state = {
        loader: false
    }
    componentDidMount = (props, state) => {
        if (props !== this.props) {
            this.setState({ loader: false })
        }
    }

    //    componentDidUpdate = (prevProps, prevState) => {
    //     if (prevProps !== this.props) {
    //         this.setState({ loader: false })
    //     }
    // }

    gettingData = () => {
        const userCatagory = this.props.currentUserCatagory;
        switch (userCatagory) {
            case 'company':
                return <CompanyDashboard />
            case 'student':
                return <StudentDashboard />
            case 'admin':
                return <AdminPage />
            default:
                return 'nothing to show'
        }
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.loader ? <div className="center-align"><MDSpinner size={150} /></div> : this.gettingData()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUserCatagory: state.company.currentUserCatagory
})

const mapDispatchToProps = (dispatch) => {
    // dispatch(fetchData())
    dispatch(gettingUserId())
    return {
        // fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 