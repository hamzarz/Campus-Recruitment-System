const initState={
    studentDataArray:[],
    studentProfileData:{}
}

const studentReducer = (state=initState, action) => {
    switch(action.type) {
        case 'STUDENT_PROFILE' :
        return{
            ...state,
            studentProfileData:action.payload
        }
        case 'FETCH_STUDENT_DATA':
        
        return{
            ...state,
            studentDataArray:action.studData
        }
        default:
        return state;
    }
}
export default studentReducer;