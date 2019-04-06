import React, { Component } from 'react';
import { connect } from 'react-redux';
import { studRegister } from '../store/actions/index';
import MDSpinner from 'react-md-spinner'


class StudentRegister extends Component {
    state = {
        fName:"",
        lName:"",
        email:"",
        gender:"",
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
        userName:"",
        password:"",
        loader:true,
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    componentDidUpdate = (prevProps,prevState) => {
        if(prevProps !== this.props) {
            this.setState({loader:false})
        }
    }

    submitRegisterForm = (e) => {
        e.preventDefault();
       // const data = new FormData(e.target);
       this.props.studRegister(this.state)
       this.props.history.replace('/')
    }

    render() {
        return(
            <div>
                {this.state.loader ? (
                    <div className="center-align"><MDSpinner size={150} /></div>
                ) : (
                    <div>
                <div className='row'>
                <div className="col s1"></div>
          <form className="col s10" onSubmit={this.submitRegisterForm}>

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
                        <i className="material-icons prefix">email</i>
                        <input onChange={this.handleChange} value={this.state.email} id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">perm_contact_calendar</i>
                        <input onChange={this.handleChange} value={this.state.gender} id="gender" type="text" className="validate" />
                        <label htmlFor="gender">Gender</label>
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
                        <i className="material-icons prefix">location_city</i>
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

            {/* <div className="row">
                <div className="col s12">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">text_fields</i>
                        <textarea onChange={this.handleChange} value={this.state.otherQualification} id="otherQualification" className="materialize-textarea"></textarea>
                        <label htmlFor="otherQualification">Other Qualifications</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">directions_bike</i>
                        <input onChange={this.handleChange} value={this.state.extracirricular} id="extracurricular" type="text" className="validate" />
                        <label htmlFor="extracurricular">Extracurricular Activities</label>
                    </div>
                </div>
            </div> */}

            <div className="row">
                <div className="col s12">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input onChange={this.handleChange} value={this.state.userName} type="text" id="userName" className="validate"></input>
                        <label htmlFor="userName">User Name</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">lock</i>
                        <input onChange={this.handleChange} value={this.state.password} id="password" type="password" className="validate" />
                        <label htmlFor="password">Password</label>
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
                )}
            </div>


            
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    studRegister: (studentData) => dispatch(studRegister(studentData))
    }
}

export default connect(null, mapDispatchToProps)(StudentRegister);