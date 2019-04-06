import React, { Component } from 'react'
import MDSpinner from 'react-md-spinner'

class Error extends Component {
constructor(){
    super();
    this.state={
        isload:true
    }
}
    componentDidMount = () => {
        // before settimeout logic
        setTimeout (() => {
           this.setState({isload:false})
        }, 3000)
    }
    render() {
        return (
            <div className='center-align'>
                {this.state.isload ?
                    <div className="center-align"><MDSpinner size={150} /></div> :  <h2>Page not Found</h2>
                }
            </div>
        );
    }
};

export default Error