import fire from '../../Firebase/config'

//Getting User's catagory
export const gettingUserId = () => async dispatch => {
    let currentUserCatagory = ''
    const user = fire.auth().currentUser
    const userId = user.uid
    fire.database().ref('AllUsersData/'+ userId).on('value', snapshot => {
        const currentUser = snapshot.val().catagory
        currentUserCatagory = currentUser
        console.log('currentUserCatagory')
        console.log(currentUserCatagory)
        dispatch({type:'CURRENT_USER_DATA', currentUserCatagory})
    })
}

//Company Register
export const compRegister = companyData => async => {
    if(companyData.companyName&&companyData.contact&&companyData.email&&companyData.establishedDate&&companyData.userName&&companyData.password){
        fire.auth().createUserWithEmailAndPassword(companyData.email,companyData.password)
        .then(success => {
            console.log('signup success')
            const uid = success.user.uid;
            fire.database().ref('AllUsersData/' + uid).set({ uid, catagory:'company' }).then(() => {
                fire.database().ref('CompanyRegister/' + uid).set({companyData, uid, catagory:'company', isStatus:true})
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

//Getting Vacancies
export const fetchVacancyData = () => async dispatch => {
    let vacancyData = [];
    fire.database().ref('PostVacancy/').on("value", snapshot => {
        snapshot.forEach(vacancyDetail => {
            let Vdata = vacancyDetail.val();
            vacancyData.push(Vdata)
        })
        dispatch({type:'FETCH_VACANCY_DATA', vacancyData})
    });
};


//Posting Vacancies
export const postVacancies = vacancy => async dispatch => {
    if(vacancy.jobProfile&&vacancy.email&&vacancy.salary&&vacancy.jobDiscription){
        fire.auth().onAuthStateChanged((user) => {
            if(user) {
                console.log(user)
                fire.database().ref('Vacancy/').push().set({vacancy, catagory:'company'})
            }
        });
    }
    fire.database().ref('PostVacancy/').push().set(vacancy).then(() => {
        console.log('Vacancy Posted');
        dispatch({type:'POST_VACANCY', vacancy})
    })
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


//Fetching Company Profile
export const getCompProfile = () => async dispatch => {
    let companyProfile = []
    const user = fire.auth().currentUser
    const uid = user.uid
    fire.database().ref('CompanyRegister/' + uid).on('value', snapshot => {
        let data = snapshot.val();
        companyProfile.push( data )
        dispatch({type:'COMPANY_PROFILE', payload:companyProfile})
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

//Update Request
export const updateRequest = (studentData) => async dispatch => {
    const user = fire.auth().currentUser
    const uid = user.uid
    fire.database().ref('StudentRegister/' + uid).set({uid,studentData,isStatus:true, catagory:'student'}).then(() => 
    console.log('User is updated'),
    alert('your data is updated')
    ).catch(error => {
        console.log(error.message)
        alert(error.message)
    })
    
}

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
