import { combineReducers } from "redux";
import AuthErrorReducer from "./AuthErrorReducer";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
import StudentListReducer from "./StudentListReducer";
import studentRegistrationReducer from "./studentRegistrationReducer";
import uploadReducer from "./uploadReducer";
import utilsReducer from "./utilsReducer";

export default combineReducers({
	auth: authReducer,
	errorAuth: AuthErrorReducer,
	utils: utilsReducer,
	upload: uploadReducer,
	filter: filterReducer,
	studentRegistration: studentRegistrationReducer,
	studentList: StudentListReducer,
});
