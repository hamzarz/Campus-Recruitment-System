import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStudData } from '../store/actions/index'

class StudentDetails extends Component {

    render() {
        return(
            <div>
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
                        return(
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
                        )}) : 'loading'}
                        </tbody>
                    </table>
                    </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        studDetails: state.student.fetchStudDataArray
    }
}
const mapDispatchToProps = (dispatch) => {
    dispatch(fetchStudData())
}


export default connect(mapStateToProps,mapDispatchToProps)(StudentDetails);