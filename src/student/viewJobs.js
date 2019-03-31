import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVacancyData } from '../store/actions/index'

class AllJobs extends Component {
    state = {
        jobProfile:"",
        email:"",
        salary:"",
        jobDiscription:""
      } 
    
    render() {
        console.log("Value of props")
        console.log( this.props)
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
                    {this.props.allVacancies ? this.props.allVacancies.map(item =>{
                        return (
                            <tr>
                                <td>{item.jobProfile}</td>
                                <td>{item.email}</td>
                                <td>{item.salary}</td>
                                <td>{item.jobDiscription}</td>
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
    allVacancies: state.company.vacancyDataArray
})
const mapDispatchToProps = (dispatch) => {
    dispatch(fetchVacancyData())
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllJobs);