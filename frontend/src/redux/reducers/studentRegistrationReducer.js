import {
	SELECT_CYCLE,
	STUDENTS_LOADED,
	STUDENT_REGISTER_FAIL,
	STUDENT_REGISTER_SUCCESS,
} from "../actions/types";

const initialState = {
	student: {},
	cycle: "null",
	registrationClicked: false,
	successMessage: "",
	errorMessage: "",
	students: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SELECT_CYCLE:
			const cycle = action.payload === "null" ? "null" : action.payload;
			console.log(cycle);
			return {
				...state,
				cycle: cycle,
			};

		case STUDENT_REGISTER_SUCCESS: {
			return {
				...state,
				student: { ...action.payload },
				successMessage: "Enregistrement réussi !",
			};
		}
		case STUDENT_REGISTER_FAIL: {
			return {
				...state,
				errorMessage: "Matricule déjà utilisé",
			};
		}

		case STUDENTS_LOADED: {
			return {
				students: [...action.payload],
			};
		}

		default:
			return state;
	}
}
