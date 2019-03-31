// export const fetchCompData = () => async dispatch => {
//     fire.database().ref('CompanyRegister/').on('value', function(snapshot) {
//         console.log(snapshot.val());
//     }, function (error) {
//         console.log('Error' + error.code);
//     })
// }



// allCompanyData = (e) => {
//     // e.preventDefault();
//     var ref= fire.database().ref('CompanyRegister');
// ref.on('value', function(snapshot) {
//     console.log(snapshot.val());
// }, function (error) {
//     console.log('Error' + error.code);
// })
// }



// export function getTasksThunk() {
//  return dispatch => {
//  const tasks = [];
//  database.ref(`/`).once('value', snap => {
//   snap.forEach(data => {
//   let task = data.val();
//   tasks.push(task)
//   })
//  })
//  .then(() => dispatch(getTasks(tasks)))
//  }
// }



// export const fetchCompData = compData => async dispatch => {
//     fire.database().ref("campus-recruitment-syste-767f3/").child('CompanyRegister').on('value', snapshot => {
//         snapshot.forEach(data => {
//             let Cdata = data.val();
//             compData.push(Cdata)
//         })
//     }).then(() => dispatch(getCompData(compData)))
// }



// export const getCompData = (compData) => async dispatch => {
//     fire.database().ref('CompanyRegister/').on('value', snapshot => {
//         snapshot.forEach(data => {
//             let Cdata = data.val();
//             compData.push(Cdata)
//         })
//     }).then(() => {
//         console.log('company data')
//         dispatch({type:'FETCH_COMPANY_DATA'})
//     })
// }


























// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchCompData } from '../store/actions/index'
// import store from '../store/store'

// class AllCompany extends Component {
//     state={
//         companyName:"",
//         contact:"",
//         email:"",
//         establishedDate:"",
//         userName:"",
//         password:""
//     } 
    
//     render() {
//         console.log("Value of props")
//         console.log( this.props)
//         console.log(store.getState())
//         return(
//             <div>
//                 <ul>   
//                     {/* {this.props.company ? this.props.company.map(item => <li key={item.id}>{item.companyName}<button>x</button></li>) : 'loading'} */}
//                     {this.props.company ? this.props.company.map(item => 
//                     <div className="row">
//                     <div className="col s1"></div>
//                     <div className="col s10">
//                     <table className="centered highlight">
//                         <thead>
//                             <tr>
//                                 <th>Company Name</th>
//                                 <th>Contact No</th>
//                                 <th>Email</th>
//                                 <th>Established Date</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>{item.companyName}</td>
//                                 <td>{item.contact}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.establishedDate}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     </div>
//                     </div>
//                     ) : 'loading'}
//                 </ul>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => ({
//     company: state.company.companyDataArray
// })
// const mapDispatchToProps = (dispatch) => {
//     dispatch(fetchCompData())
//     return {
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(AllCompany);











// export const fetchToDos = () => async dispatch => {
//     todosRef.on("value", snapshot => {
//       dispatch({
//         type: FETCH_TODOS,
//         payload: snapshot.val()
//       });
//     });
//   };











// export const compRegister = companyData => async dispatch => {
//     if(companyData.companyName&&companyData.contact&&companyData.email&&companyData.establishedDate&&companyData.userName&&companyData.password) {
//         fire.auth.createUserWithEmailAndPassword(companyData.email, companyData.password)
//         .then(succcess => {
//             const uid = succcess.user.id
//             database().ref('CompanyRegister/').set(companyData,uid).then(() => {
//                 console.log('Company Added');
//                 console.log('uid')
//                 console.log(uid)
//                 dispatch({type: 'COMPANY_REGISTER', companyData})
//         }

//         )
//     }
// }
// }
















// authListener = () => {
    //     const user = fire.auth().onAuthStateChanged;
    //     if (user) {
    //             this.setState({ user });
    //             console.log('user')
    //             console.log(user)
    //     }
    //     else {
    //         console.log('user not found')
    //     }
    // }
//     authListener = () => {
//     const user = fire.auth().currentUser;

//     if (user != null) {
//     user.providerData.forEach(function (profile) {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }
//     }

    // authListener = () => {
    //     fire.auth().onAuthStateChanged((user)=> {
    //         console.log(user);
    //         if(user) {
    //             this.setState({ user });
    //             console.log('user.uid')
    //             console.log(user.uid)
    //         } else {
    //             this.setState({ user:null })
    //         }
    //     })
    // }







//     import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import fire from '../Firebase/config';

// class Dashboard extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         user:{}
//     //     }
//     // }
//     componentDidMount = () => {
//         // this.fetchData();
//         this.authListener()
//     }

//     // authListener = () => {
//     //     var user = fire.auth().currentUser;
//     //     if(user) {
//     //         console.log('user')
//     //         console.log(user);
//     //     }else {
//     //         console.log('user not found')
//     //     }
//     // }
//     authListener = () => {
//         const user = fire.auth().currentUser
//             if(user){
//                 console.log('user is in')
//                 console.log(user)
//             }
//             else {
//                 console.log('user not found')
//             }
//         }

//     render() {
//         return(
//             <div>

//             </div>
//         )
//     }


// const mapStateToProps = (state) => {
//     return {
//         user:state
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return{
//         // fetchData: () => dispatch({type:'FETCH_COMPANY_DATA'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)








    // export const signUp = signupData => async dispatch => {
    //     fire.auth().createUserWithEmailAndPassword(signupData.email, signupData.password).then(() => {
    //         console.log('user Signed in');
    //         alert('Welcome to our site');
    //         dispatch({type:'CREATE_USER', signupData})
    //     }).catch((error) => {
    //         // handle errors here
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //     })
    // }