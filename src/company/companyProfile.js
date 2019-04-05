import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compUpdateReq, getCompProfile } from '../store/actions/index'
import '../student/studentForm.css'

class CompanyProfile extends Component {
    state = {
        formClass: 'col s10 hidden',
        companyName: "",
        contact: "",
        email: "",
        establishedDate: "",
        userName: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.compUpdateReq(this.state)
    }

    update = () => {
        let { companyProfile } = this.props
        this.setState({
            companyName:companyProfile.companyName,contact:companyProfile.contact,email:companyProfile.email,
            establishedDate:companyProfile.establishedDate,userName:companyProfile.userName,password:companyProfile.password
        })
        return (
            this.setState({ formClass: 'col s10' })
        )
    }


    render() {
        let { companyProfile } = this.props
        return (
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
                                    <th>Owner Name</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{companyProfile ? companyProfile.companyName : 'loading'}</td>
                                    <td>{companyProfile ? companyProfile.contact : 'loading'}</td>
                                    <td>{companyProfile ? companyProfile.email : 'loading'}</td>
                                    <td>{companyProfile ? companyProfile.establishedDate : 'loading'}</td>
                                    <td>{companyProfile ? companyProfile.userName :'loading'}</td>
                                    <td><button onClick={() => { this.update() }}>Update</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <div className='row'>
                                <div className="col s1"></div>
                                <form className={this.state.formClass} onSubmit={this.handleSubmit}>

                                    <div className="row">
                                        <div className="col s12">
                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input onChange={this.handleChange} value={this.state.companyName} autoComplete='' name="companyName" id="companyName" type="text" className="validate" />
                                                <label htmlFor="companyName">Company Name</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input onChange={this.handleChange} value={this.state.contact} autoComplete='' name="contact" id="contact" type="number" className="validate" />
                                                <label htmlFor="contact">Contact</label>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col s12">
                                            <div className="input-field">
                                                <i className="material-icons prefix">person</i>
                                                <input onChange={this.handleChange} value={this.state.userName} autoComplete='' id="userName" type="text" className="validate" />
                                                <label htmlFor="userName">Owner Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                        <i className="material-icons right">send</i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state')
    console.log(state)
    return {
        companyProfile: state.company.companyProfileData
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getCompProfile())
    return {
        compUpdateReq: (updatedData) => dispatch(compUpdateReq(updatedData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile)