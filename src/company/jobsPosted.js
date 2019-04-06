import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchJobPosted } from '../store/actions/index'
import MDSpinner from 'react-md-spinner'

class JobPosted extends Component {
    state = {
        loader: true,
    }

    // componentDidMount = () => {
    //     this.setState({ loader: false })
    // }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps !== this.props) {
            this.setState({ loader: false })
        }
    }

    render() {
        return (
            <div>
                {this.state.loader ? (<div className="center-align"><MDSpinner size={150} /></div>) : (
                    <div>
                        {this.props.isJobExist ? (
                            <div className='row'>
                                <div className="col s1"></div>
                                <div className="col s10">
                                    <table className="centered highlight">
                                        <thead>
                                            <tr>
                                                <th>Job Discription</th>
                                                <th>Job Profile</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.jobPosted !== [] ? this.props.jobPosted.map(item => {
                                                return (
                                                    <tr>
                                                        <td>{item.jobDiscription}</td>
                                                        <td>{item.jobProfile}</td>
                                                        <td>{item.salary}</td>
                                                    </tr>
                                                )
                                            }) : "You have not Posted any Job Yet!"}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                                <h3>You don't have any Posted Job yet</h3>
                            )}
                    </div>
                )}
            </div>




        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobPosted: state.company.jobPostedArray.companyjobPosted,
        isJobExist: state.company.jobPostedArray.isJobExist,
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(fetchJobPosted())
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPosted)