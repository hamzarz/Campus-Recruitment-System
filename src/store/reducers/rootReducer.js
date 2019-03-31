import { combineReducers } from 'redux'
import companyReducer from './companyReducer';
import studentReducer from './studentReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    company: companyReducer,
    student: studentReducer,
    auth: authReducer,
})
export default rootReducer;