import fire from '../../Firebase/config'

//Getting User's catagory
export const gettingUserId = () => async dispatch => {
    let currentUserCatagory = ''
    const user = fire.auth().currentUser
    if(user) {
        const userId = user.uid
        fire.database().ref('AllUsersData/'+ userId).on('value', snapshot => {
            const currentUser = snapshot.val().catagory
            currentUserCatagory = currentUser
            console.log('currentUserCatagory')
            console.log(currentUserCatagory)
            dispatch({type:'CURRENT_USER_DATA', currentUserCatagory})
        })
    }
    else {
        console.log('No User Found')
    }
}

//Company Register
export const compRegister = companyData => async => {
    if(companyData.companyName&&companyData.contact&&companyData.email&&companyData.establishedDate&&companyData.userName&&companyData.password){
        fire.auth().createUserWithEmailAndPassword(companyData.email,companyData.password)
        .then(success => {
            console.log('signup success')
            const uid = success.user.uid;
            fire.database().ref('AllUsersData/' + uid).set({ uid, catagory:'company' }).then(() => {
                fire.database().ref('CompanyRegister/' + uid).set({companyData, uid, catagory:'company', isStatus:true, isloading:true})
            }).catch((error) => {
                alert(error.message)
            })
            }  
        ).catch(error => {
            console.log(error.message)
            alert(error.message)
        })
    }
    else {
        alert('All Fields are Required')
    }
}


//Getting Company Data
export const fetchCompData = () => async dispatch => {
    let compData = [];
    fire.database().ref('CompanyRegister/').on("value", snapshot => {
        snapshot.forEach(compDetail => {
            let Cdata = compDetail.val();
            compData.push(Cdata)
        })
        dispatch({type:'FETCH_COMPANY_DATA', payload:compData})
    });
};

//Getting All Users Data
export const fetchData = () => async dispatch => {
    let allData = []
    fire.database().ref('AllUsersData/').on('value', snapshot => {
        snapshot.forEach(users => {
            let data = users.val();
            allData.push( data )
        })
        dispatch({type:'FETCH_DATA', payload:allData})
    })
} 

//Getting Vacancies
export const fetchVacancyData = () => async dispatch => {
    let vacancyData = [];
    fire.database().ref('PostVacancy/').on("value", snapshot => {
        snapshot.forEach(vacancyDetail => {
            let Vdata = vacancyDetail.val();
            vacancyData.push(Vdata)
        })
        dispatch({type:'FETCH_VACANCY_DATA', payload:vacancyData})
    });
};


//Posting Vacancies
export const postVacancies = vacancy => async dispatch => {
    if(vacancy.jobProfile&&vacancy.email&&vacancy.salary&&vacancy.jobDiscription){
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                console.log(user)
                const uid = user.uid
                fire.database().ref('Vacancy/' + uid).push().set({vacancy, catagory:'company', uid})
            }
        });
    }
}




//FETCHING ALL JOBS POSTED
export const fetchJobPosted = () => async dispatch => {
    let companyjobPosted = []
    let isJobExist = false
    const uid = fire.auth().currentUser.uid;
    fire.database().ref('Vacancy').on('value', snapshot => {
        snapshot.forEach(job => {
            job.forEach(jobs => {
                let data = jobs.val();
                if(uid === data.uid) {
                    return(
                        isJobExist = true
                    )
                }
                else{
                    return(
                        isJobExist = false
                    )
                }
            })
        })
        
    })

    {isJobExist ? (
        
        fire.database().ref('Vacancy/' + uid).on('value', snapshot => {
            // companyjobPosted.push(snapshot.val())
            snapshot.forEach(data => {
                let Jdata = data.val().vacancy
                companyjobPosted.push(Jdata)
            })
            dispatch({type:'FETCH_ALL_JOBS_POSTED', payload:{companyjobPosted:companyjobPosted,isJobExist:isJobExist}})
        }) 
    ) : (
        console.log('user do not have any posted job yet')
    )}
      
}


//Student Register
export const studRegister = studentData => async dispatch => {
    if(studentData.fName&&studentData.lName&&studentData.email&&studentData.gender&&studentData.contact&&studentData.address&&studentData.age&&studentData.university&&studentData.yearOfPassingUni&&studentData.aggregateUni&&studentData.department&&studentData.userName&&studentData.password){
        fire.auth().createUserWithEmailAndPassword(studentData.email,studentData.password)
        .then(success => {
            const uid = success.user.uid;
            fire.database().ref('AllUsersData/'+ uid).set({ uid, catagory:'student' }).then(() => {
                fire.database().ref('StudentRegister/' + uid).set({studentData,uid,catagory:'student', isStatus:true})
                console.log('Student Register');
            }).catch((error) => {
                alert(error.message)
                console.log(error.message)
            })
        }).catch(error => {
            console.log(error.message)
            alert(error.message)
        })
    }
}

// Getting Student Data
export const fetchStudData = () =>async dispatch => {
    let studData = [];
    fire.database().ref('StudentRegister').on('value', snapshot => {
        snapshot.forEach(studDetail => {
            let Sdata = studDetail.val();
            studData.push( Sdata )
        })
        dispatch({type:'FETCH_STUDENT_DATA', studData})
    })
}


//Fetching Student Profile
export const getStudProfile = () => async dispatch => {
    let studentProfile = {}
    const user = fire.auth().currentUser
    const uid = user.uid
    fire.database().ref('StudentRegister/' + uid).on('value', snapshot => {
        let data = snapshot.val().studentData;
        studentProfile = data
        dispatch({type:'STUDENT_PROFILE', payload:studentProfile})
    })
}

//Fetching Company Profile
export const getCompProfile = () => async dispatch => {
    let companyProfile = {}
    const uid = fire.auth().currentUser.uid;
    fire.database().ref('CompanyRegister/' + uid).on('value', snapshot => {
        let data = snapshot.val().companyData;
        companyProfile = data
        dispatch({type:'COMPANY_PROFILE', payload:companyProfile})
    })
}

//Student Update Request
export const updateRequest = (studentData) => async dispatch => {
    const user = fire.auth().currentUser
    const uid = user.uid
    fire.database().ref('StudentRegister/' + uid).set({uid,studentData,isStatus:true, catagory:'student'}).then(() => 
    console.log('User is updated'),
    alert('Your Data is Updated')
    ).catch(error => {
        console.log(error.message)
        alert(error.message)
    })
    
}

//Company Update Request
export const compUpdateReq = (companyData) => async dispatch => {
    const uid = fire.auth().currentUser.uid;
    fire.database().ref('CompanyRegister/' + uid).set({uid,companyData,isStatus:true,catagory:'company'}).then(() => {
        console.log('User is updated')
        alert('Your Data is Updated')
    }).catch(error => {
        console.log(error.message)
        alert(error.message)
    })
}


//SIGNING IN USER
export const signIn = signinData => async dispatch => {
    fire.auth().signInWithEmailAndPassword(signinData.email, signinData.password).then(() => {
        console.log('user Loged in')
        alert('User logged in')
        // this.props.history.replace('/dashboard')
        dispatch({type:'SIGNIN_USER', signinData})
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
      });
}


//SIGNING OUT USER
export const signOut = () => async dispatch => {
    fire.auth().signOut().then(() => {
        console.log('User Signed Out Success')
        alert('Signout Success')
        dispatch({type:'SIGNOUT_USER'})
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })
}
