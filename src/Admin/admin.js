import React, { Component } from 'react'
import { connect } from 'react-redux'
import fire from '../Firebase/config'
import { fetchCompData, fetchStudData, gettingUserId } from '../store/actions/index'
import MDSpinner from 'react-md-spinner';

class AdminPage extends Component {

    state = {
        catagory: '',
        loader: true
    }

    componentDidMount = () => {
        this.setState({ loader: false })
    }
    // componentDidUpdate = (prevProps,prevState) => {
    //     if(prevProps !== this.props) {
    //         this.setState({loader:false})
    //     }
    // }

    blockUser = (uid, isStatus) => {
        let personCatagory = ''
        fire.database().ref('AllUsersData/' + uid).on("value", snapshot => {
            let catagory = snapshot.val().catagory;
            personCatagory = catagory
            {
                personCatagory === 'company' ?
                    fire.database().ref('CompanyRegister/' + uid).update({
                        isStatus: !isStatus
                    }).then(() => {
                        this.getCompanyData()
                    }) :
                    fire.database().ref('StudentRegister/' + uid).update({
                        isStatus: !isStatus
                    }).then(() => {
                        this.getStudentData()
                    })
            }
        })

    }

    fetchRequestedData = () => {
        const catagory = this.state.catagory;
        if (catagory === 'student') {
            return (
                <div className="row">
                    <div className="col s1"></div>
                    <div className="col s10">
                        <table className="centered highlight">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Age</th>
                                    <th>University</th>
                                    <th>Year Of Passing</th>
                                    <th>Aggregate</th>
                                    <th>Department</th>
                                    <th>Block</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.student ? this.props.student.map(items => {
                                    return (
                                        <tr>
                                            <td>{items.studentData.fName}</td>
                                            <td>{items.studentData.lName}</td>
                                            <td>{items.studentData.address}</td>
                                            <td>{items.studentData.age}</td>
                                            <td>{items.studentData.university}</td>
                                            <td>{items.studentData.yearOfPassingUni}</td>
                                            <td>{items.studentData.aggregateUni}</td>
                                            <td>{items.studentData.department}</td>
                                            <td onClick={() => this.blockUser(items.uid, items.isStatus)}><button className="waves-effect waves-light btn">{items.isStatus ? 'BLOCK' : 'UNBLOCK'}</button></td>
                                        </tr>
                                    )
                                }) : 'loading'}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        else if (catagory === 'company') {
            return (
                <div className="row">
                    <div className="col s1"></div>
                    <div className="col s10">
                        <table className="centered highlight">
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Contact No</th>
                                    <th>Email</th>
                                    <th>Established Date</th>
                                    <th>Block</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.company ? this.props.company.map(item => {
                                    return (

                                        <tr>
                                            <td>{item.companyData.companyName}</td>
                                            <td>{item.companyData.contact}</td>
                                            <td>{item.companyData.email}</td>
                                            <td>{item.companyData.establishedDate}</td>
                                            <td onClick={() => this.blockUser(item.uid, item.isStatus)}><button className="waves-effect waves-light btn">{item.isStatus ? 'BLOCK' : 'UNBLOCK'}</button></td>
                                        </tr>
                                    )
                                }) : 'loading'}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    getStudentData = () => {
        this.setState({ catagory: 'student' })
        this.props.fetchStudData();
    }
    getCompanyData = () => {
        this.setState({ catagory: 'company' })
        this.props.fetchCompData();
    }

    render() {
        return (
            <div>
                {
                    this.state.loader ? (<div className="center-align"><MDSpinner size={150} /></div>) : (
                        <div className="center-align">
                            <button className='waves-effect waves-light btn' onClick={this.getStudentData}>Student</button>
                            <button className='waves-effect waves-light btn' onClick={this.getCompanyData}>Company</button>
                            {this.fetchRequestedData()}
                        </div>
                    )
                }
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        // Data:state.admin.allUsersData
        student: state.student.studentDataArray,
        company: state.company.companyDataArray,
        catagory: state.company.currentUserCatagory
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(gettingUserId())
    return {
        fetchCompData: () => dispatch(fetchCompData()),
        fetchStudData: () => dispatch(fetchStudData())
        // gettingUserId : () => dispatch(gettingUserId())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)