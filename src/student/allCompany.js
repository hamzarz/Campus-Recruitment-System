import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompData } from '../store/actions/index'
import fire from '../Firebase/config'
import MDSpinner from 'react-md-spinner';

class AllCompany extends Component {
    state = {
        isStatus: true
    }
    componentWillMount = () => {
        this.checkStatus()
    }
    checkStatus = () => {
        const user = fire.auth().currentUser;
        const uid = user.uid
        fire.database().ref("StudentRegister/" + uid).on('value', snapshot => {
            let data = snapshot.val()
            let currentStatus = data.isStatus;
            this.setState({ isStatus: currentStatus })
        })
    }

    render() {
        let { isloading } = this.props.companyDataArray
        // console.log("Value of props")
        // console.log(this.props)
        return (
            <div>
                {isloading ? <MDSpinner /> : (
                    <div>
                        {this.state.isStatus ?
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
                                                    </tr>
                                                )
                                            }) : 'loading'}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            :
                            alert('You are Blocked by admin you can not see any data')
                        }
                    </div>
                )}


            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    company: state.company.companyDataArray,
})
const mapDispatchToProps = (dispatch) => {
    dispatch(fetchCompData())
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllCompany);