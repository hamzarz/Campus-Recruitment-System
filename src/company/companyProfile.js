import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCompProfile } from '../store/actions/index'

class CompanyProfile extends Component {

    render() {
        return(
            <div> 
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
                                {this.props.companyProfile ? this.props.companyProfile.map(item => {
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
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        companyProfile : state.company.companyProfileData
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getCompProfile())
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile)