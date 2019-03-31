import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompData } from '../store/actions/index'
import store from '../store/store'

class AllCompany extends Component {
    state={
        companyName:"",
        contact:"",
        email:"",
        establishedDate:"",
        userName:"",
        password:""
    } 
    
    render() {
        console.log("Value of props")
        console.log( this.props)
        console.log(store.getState())
        return(
            <div>
                <ul>   
                    {/* {this.props.company ? this.props.company.map(item => <li key={item.id}>{item.companyName}<button>x</button></li>) : 'loading'} */}
                     
                    
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
                        return(
                            
                            <tr>
                                <td>{item.companyData.companyName}</td>
                                <td>{item.companyData.contact}</td>
                                <td>{item.companyData.email}</td>
                                <td>{item.companyData.establishedDate}</td>
                            </tr>
                        )}) : 'loading'}
                        </tbody>
                    </table>
                    </div>
                    </div>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    company: state.company.companyDataArray
})
const mapDispatchToProps = (dispatch) => {
    dispatch(fetchCompData())
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllCompany);