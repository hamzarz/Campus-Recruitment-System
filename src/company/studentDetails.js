import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStudData } from '../store/actions/index'
import fire from '../Firebase/config'
import MDSpinner from 'react-md-spinner'

class StudentDetails extends Component {
    state = {
        isStatus: true,
        loader: true,
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props) {
            this.setState({ loader: false })
        }
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

    render() {
        return (
            <div>
                {this.state.loader ? (<div className="center-align"><MDSpinner size={150} /></div>) : (
                    <div>
                        {this.state.isStatus ?
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.studDetails ? this.props.studDetails.map(student => {
                                                return (
                                                    <tr>
                                                        <td>{student.studentData.fName}</td>
                                                        <td>{student.studentData.lName}</td>
                                                        <td>{student.studentData.address}</td>
                                                        <td>{student.studentData.age}</td>
                                                        <td>{student.studentData.university}</td>
                                                        <td>{student.studentData.yearOfPassingUni}</td>
                                                        <td>{student.studentData.aggregateUni}</td>
                                                        <td>{student.studentData.department}</td>
                                                    </tr>
                                                )
                                            }) : 'loading'}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            :
                            alert('You are Blocked by Admin')}

                    </div>
                )}
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        studDetails: state.student.studentDataArray
    }
}
const mapDispatchToProps = (dispatch) => {
    dispatch(fetchStudData())
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);