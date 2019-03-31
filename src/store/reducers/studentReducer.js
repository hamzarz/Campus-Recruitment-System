const initState={
    studentDataArray:[],
    fetchStudDataArray:[]
}

const studentReducer = (state=initState, action) => {
    switch(action.type) {
        case 'FETCH_STUDENT_DATA':
        const fetchSData = {
            studentData:action.studData
        }
        return{
            ...state,
            fetchStudDataArray:state.fetchStudDataArray.concat( fetchSData.studentData )
        }
        default:
        return state;
    }
}
export default studentReducer;