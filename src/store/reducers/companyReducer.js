const initState = {
    companyDataArray:[],
    vacancyDataArray:[],
    allDataArray:[],
    currentUserCatagory:''
}

const companyReducer = (state=initState, action) => {
    switch (action.type) {
        case 'FETCH_COMPANY_DATA' :
        return {
            ...state,
            // companyDataArray:state.companyDataArray.concat( companyData.compData ),
            companyDataArray:action.compData
        }
        case 'FETCH_VACANCY_DATA' :
        const vacancyDetail={
            vacancy:action.vacancyData
        }
        return {
            ...state,
            vacancyDataArray:state.vacancyDataArray.concat( vacancyDetail.vacancy ),
        }
        case 'FETCH_ALL_DATA':
        return{
            ...state,
            allDataArray:action.data
        }
        case 'CURRENT_USER_DATA':
        const currentData = {
            currentUser:action.currentUserCatagory
        }
        return{
            ...state,
            currentUserCatagory:currentData.currentUser
        }
        
        default:
        return state
    }
}
export default companyReducer;

// https://blog.bitsrc.io/building-a-todo-app-in-react-with-firebase-and-redux-ba3ab53a671b