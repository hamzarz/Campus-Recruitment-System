import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compRegister } from '../store/actions/index'

class CompanyRegister extends Component {
    state = {
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
        this.props.compRegister(this.state)
        this.props.history.replace('/')
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col s1"></div>
                    <form className="col s10" onSubmit={this.handleSubmit}>
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
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input onChange={this.handleChange} value={this.state.email} autoComplete='' name="email" id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input onChange={this.handleChange} value={this.state.establishedDate} autoComplete='' name="establishedDate" id="establishedDate" type="date" className="validate" />
                                    <label htmlFor="establishedDate">Established Date</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">person</i>
                                    <input onChange={this.handleChange} value={this.state.userName} autoComplete='' id="userName" type="text" className="validate" />
                                    <label htmlFor="userName">User Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">lock</i>
                                    <input onChange={this.handleChange} value={this.state.password} autoComplete='' name="password" id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <div>

                            <button className="btn waves-effect waves-light" onClick={this.submitCompanyForm} type="submit" name="action">Submit
                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        cmpData:state.company.companyDataArray
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        compRegister: (companyData) => dispatch(compRegister(companyData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyRegister);