import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut, gettingUserId } from '../store/actions/index'
import { CircularProgress } from '@material-ui/core';
import fire from '../Firebase/config'

class SignedInLinks extends Component {
    state = {
        loader: true,
        isStatus: false,
        catagory:''
    }
    componentDidMount = () => {
        this.setState({ loader: false })
    }

    componentWillMount = () => {
        this.gettingIsStatus()
    }

    gettingIsStatus = () => {
        const catagory = this.state.catagory
        const uid = fire.auth().currentUser.uid
        fire.database().ref('AllUsersData/' + uid).on('value', snapshot => {
            const data = snapshot.val()
            // this.setState({catagory:data.catagory})
            // userCatagory = data.catagory
            if (data.catagory === 'company') {
                fire.database().ref('CompanyRegister/' + uid).on('value', snapshot => {
                    let status = snapshot.val().isStatus
                    this.setState({ isStatus: status })
                })
            }
            else if (data.catagory === 'student') {
                fire.database().ref('StudentRegister/' + uid).on('value', snapshot => {
                    let status = snapshot.val().isStatus
                    this.setState({ isStatus: status })
                })
            }
            else {
                return (
                    this.setState({ isStatus: true })
                )
            }
        })

    }

    conditionalLink = () => {
        const catagory = this.props.userCatagory;
        if (catagory === 'company') {
            return (
                <div>
                    {this.state.isStatus ? (<li><NavLink to="/post-vacancy">Post Vacancy</NavLink></li>) : (console.log('nothing will show'))}
                </div>
            )
        }
        else if (catagory === 'student') {
            return (
                <div>
                    {this.state.isStatus ? (<li><NavLink to="/view-jobs">View Jobs</NavLink></li>) : (console.log('nothing will show'))}
                </div>
            )
        }
        else {
            return (
                console.log('admin')
            )
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.loader ? (<CircularProgress />) : (
                        <div>
                            <ul className="right">
                                <li>{this.conditionalLink()}</li>
                                <li><a href="/" onClick={this.props.signOut}>Log Out</a></li>
                                <li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
                            </ul>
                        </div>
                    )
                }
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userCatagory: state.company.currentUserCatagory
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(gettingUserId())
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
