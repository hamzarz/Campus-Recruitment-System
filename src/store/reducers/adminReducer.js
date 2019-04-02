const initState = {
    profileData:[]
}

const ProfileReducer = (state=initState, action) => {

    switch(action.type) {
        case'FETCH_CURRENT_PROFILE' :
        return{
            ...state,
            profileData:action.payload
        }
        default :
        return state
    }
}
export default ProfileReducer