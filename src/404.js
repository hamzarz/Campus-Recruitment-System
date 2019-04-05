import React from 'react'
// import { CircularProgress } from '@material-ui/core';
import MDSpinner from 'react-md-spinner'

const Error = () => {
    return(
        <div className='center-align'>
        {/* <CircularProgress/> */}
        <MDSpinner size={150}/>
        {/* <h2>404 Page not Found</h2> */}
        </div>
    );
};

export default Error