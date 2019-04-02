import { combineReducers } from 'redux'
import companyReducer from './companyReducer';
import studentReducer from './studentReducer';
import authReducer from './authReducer'
import ProfileReducer from './adminReducer'

const rootReducer = combineReducers({
    company: companyReducer,
    student: studentReducer,
    auth   : authReducer,
    profile: ProfileReducer
})
export default rootReducer;