import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStudProfile, updateRequest } from '../store/actions/index'
import './studentForm.css'

class CompanyProfile extends Component {
    debugger
    state = {
        formClass:'col s10 hidden',
        fName:"",
        lName:"",
        // email:"",
        // gender:"",
        contact:"",
        // city:"",
        address:"",
        // dateOfBirth:"",
        age:"",
        university:"",
        yearOfPassingUni:"",
        aggregateUni:"",
        department:"",
        // otherQualification:"",
        // extracurricular:"",
        // userName:"",
        // password:""
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
        console.log(this.state.fName)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateRequest(this.state)
    }
    
    update = () => {
        let {studentProfile} = this.props
        this.setState({fName:studentProfile.fName,lName:studentProfile.lName,email:studentProfile.email,gender:studentProfile.gender,
        contact:studentProfile.contact,address:studentProfile.address,age:studentProfile.age,university:studentProfile.university,
        yearOfPassingUni:studentProfile.yearOfPassingUni,aggregateUni:studentProfile.aggregateUni,department:studentProfile.department,
        userName:studentProfile.userName,password:studentProfile.password
        })
        return(
            this.setState({formClass:'col s10'})
        )
    }
    

    render() {
        let {studentProfile} = this.props
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
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{studentProfile ? studentProfile.fName: 'loading'}</td>
                                <td>{studentProfile ? studentProfile.lName: 'loading'}</td>
                                <td>{studentProfile ? studentProfile.address: 'loading'}</td>
                                <td>{studentProfile ? studentProfile.age: 'loading'}</td>
                                <td>{studentProfile ? studentProfile.university: 'loading'}</td>
                                <td>{studentProfile ? studentProfile.yearOfPassingUni: 'loading'}</td>
                                <td>{studentProfile ? studentProfile.aggregateUni: 'loading'}</td>
                                <td>{studentProfile ? studentProfile.department : 'loading'}</td>
                                <td><button onClick={() => {this.update()}}>Update</button></td>
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
                        <input onChange={this.handleChange} value={this.state.fName} id="fName" type="text" className="validate" />
                        <label htmlFor="fName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">location_city</i>
                        <input onChange={this.handleChange} value={this.state.lName} id="lName" type="text" className="validate" />
                        <label htmlFor="lName">Last Name</label>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col s12">
                <div className="input-field col s6">
                        <i className="material-icons prefix">phone</i>
                        <input onChange={this.handleChange} value={this.state.contact}  id="contact" type="number" className="validate" />
                        <label htmlFor="contact">Contact</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">location_city</i>
                        <input onChange={this.handleChange} value={this.state.address}  id="address" type="text" className="validate" />
                        <label htmlFor="address">Address</label>
                    </div>
                </div>
                </div>
            <div>

            <div className="row">
                <div className="col s12">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">cake</i>
                        <input onChange={this.handleChange} value={this.state.age} id="age" type="number" className="validate" />
                        <label htmlFor="age">Age</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">school</i>
                        <input onChange={this.handleChange} value={this.state.department} id="department" type="text" className="validate" />
                        <label htmlFor="department">Department</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">school</i>
                        <input onChange={this.handleChange} value={this.state.university} id="university" type="text" className="validate" />
                        <label htmlFor="university ">University</label>
                    </div>
                    <div className="input-field col s3">
                        <i className="material-icons prefix">school</i>
                        <input onChange={this.handleChange} value={this.state.yearOfPassingUni} id="yearOfPassingUni" type="number" className="validate" />
                        <label htmlFor="yearOfPassingUni">Year of Passing</label>
                    </div>
                    <div className="input-field col s3">
                        <i className="material-icons prefix">school</i>
                        <input onChange={this.handleChange} value={this.state.aggregateUni} id="aggregateUni" type="number" className="validate" />
                        <label htmlFor="aggregateUni">Aggregate</label>
                    </div>
                </div>
            </div>

            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
            </button>
            </div>
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
    return{
        studentProfile : state.student.studentProfileData
    }
}

const mapDispatchToProps = (dispatch) => {
    dispatch(getStudProfile())
    return{
        updateRequest: (updatedData) => dispatch(updateRequest(updatedData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile)