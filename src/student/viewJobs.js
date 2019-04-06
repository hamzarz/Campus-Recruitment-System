import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVacancyData } from '../store/actions/index'
import fire from '../Firebase/config'
import MDSpinner from 'react-md-spinner'

class AllJobs extends Component {
    state = {
        jobProfile: "",
        email: "",
        salary: "",
        jobDiscription: "",
        isApplied: false,
        loader: true,
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props) {
            this.setState({ loader: false })
        }
    }

    apply = () => {
        const uid = fire.auth().currentUser.uid;
        fire.database().ref('Applied/' + uid).set({ uid, isApplied: true })
        this.setState({ isApplied: true })
    }

    render() {
        console.log("Value of props")
        console.log(this.props)
        return (
            <div>
                {this.state.loader ? (
                    <div className="center-align"><MDSpinner size={150} /></div>
                ) : (
                        <div>
                            <ul>
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
                                                    <th>Apply</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.allVacancies ? this.props.allVacancies.map(item => {
                                                    return (
                                                        <tr>
                                                            <td>{item ? item.jobProfile : 'loading'}</td>
                                                            <td>{item ? item.email : 'loading'}</td>
                                                            <td>{item ? item.salary : 'loading'}</td>
                                                            <td>{item ? item.jobDiscription : 'loading'}</td>
                                                            <td><button onClick={this.apply}>{this.state.isApplied ? 'Applied' : 'Apply'}</button></td>
                                                        </tr>
                                                    )
                                                }) : 'loading'}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    )}
            </div>


        )
    }
}
const mapStateToProps = (state) => ({
    allVacancies: state.company.vacancyDataArray
})
const mapDispatchToProps = (dispatch) => {
    dispatch(fetchVacancyData())
}


export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);