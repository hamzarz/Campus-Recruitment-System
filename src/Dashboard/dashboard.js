import React, { Component } from 'react'
// import fire from '../Firebase/config';
import { connect } from 'react-redux'
import { gettingUserId } from '../store/actions/index'
import AllCompany from '../student/allCompany'
import StudentDetails from '../company/studentDetails';
// import AdminPage from '../Admin/admin'

class Dashboard extends Component {
   

    gettingData = () => {
        const userCatagory = this.props.currentUserCatagory;
        switch(userCatagory) {
            case'company':
            return <StudentDetails/>
            case'student':
            return <AllCompany />
            case 'admin':
            return this.props.history.replace('/admin')
            default:
            return 'nothing to show'
        }
    }


    render() {
        // const userCatagory = this.props.currentUserCatagory
        return(
            <div>
                {/* {this.state.userCatagory==='company'?"show student data": 'show company data'} */}
                <ul>
                    {/* {this.props.currentUserCatagory?<li>{this.props.currentUserCatagory}</li>:'loading data for you'} */}
                    {this.gettingData()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        currentUserCatagory:state.company.currentUserCatagory
})

const mapDispatchToProps = (dispatch) => {
    // dispatch(fetchData())
    dispatch(gettingUserId())
    return{
        // fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) 