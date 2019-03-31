const initState = {
    user:{}
}

const authReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
        return state;
        case 'SIGNIN_USER' :
        return {
            ...state,
            user:action.signinData
        };
        case 'SIGNOUT_USER' :
        return state;
        default:
            return state;
    }
}

export default authReducer;
