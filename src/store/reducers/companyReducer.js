const initState = {
    companyDataArray:[],
    // vacancyDataArray:[],
    allDataArray:[],
    currentUserCatagory:'',
    companyProfileData:{},
    dataArray:[],
    jobPostedArray:[]
}

const companyReducer = (state=initState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_JOBS_POSTED':
        return{
            ...state,
            jobPostedArray:action.payload
        }
        case 'COMPANY_PROFILE': 
        return{
            ...state,
            companyProfileData:action.payload
        }
        case 'FETCH_DATA' :
        return {
            ...state,
            dataArray:action.payload
        }
        case 'FETCH_COMPANY_DATA' :
        return {
            ...state,
            companyDataArray:action.payload
        }
        case 'FETCH_VACANCY_DATA' :
        return {
            ...state,
            vacancyDataArray:action.payload
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