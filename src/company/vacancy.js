import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postVacancies } from '../store/actions/index'

class Vacancy extends Component {
  state = {
    jobProfile: "",
    email: "",
    salary: "",
    jobDiscription: "",
    isApplied: false,
  }



  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  postVacancy = (e) => {
    e.preventDefault();
    this.props.postVacancies(this.state)
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className="col s1"></div>
          <form className="col s10" onSubmit={this.postVacancy}>
            <div className="row">
              <div className="col s12">
                <div className="input-field col s6">
                  <input onChange={this.handleChange} value={this.state.jobProfile}
                    id="jobProfile" type="text" className="validate" />
                  <label htmlFor="jobProfile">Job Profile</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.handleChange} value={this.state.email} id="email"
                    type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="input-field col s6">
                  <input onChange={this.handleChange} value={this.state.salary} id="salary"
                    type="number" className="validate" />
                  <label htmlFor="salary">Salary</label>
                </div>
                <div className="input-field col s6">
                  <textarea onChange={this.handleChange} value={this.state.jobDiscription}
                    id="jobDiscription" className="materialize-textarea"></textarea>
                  <label htmlFor="jobDiscription">Job Discription</label>
                </div>
              </div>
            </div>

            <div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>



    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postVacancies: (vacancy) => dispatch(postVacancies(vacancy))
  }
}


export default connect(null, mapDispatchToProps)(Vacancy);