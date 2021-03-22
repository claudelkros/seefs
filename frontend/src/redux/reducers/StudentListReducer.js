import {
	DATE_STUDENT_SELECT_FILTERING,
	GET_SINGLE_STUDENT,
	NUMBER_SELECTED,
} from "../actions/types";

const initialState = {
	date: "2020",
	number: 0,
	selectedStudent: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case DATE_STUDENT_SELECT_FILTERING:
			const newDate = action.payload ? action.payload : "2020";
			return {
				...state,
				date: newDate,
			};

		case NUMBER_SELECTED: {
			return {
				...state,
				number: action.payload,
			};
		}

		case GET_SINGLE_STUDENT: {
			return {
				...state,
				selectedStudent: action.payload,
			};
		}

		default:
			return state;
	}
}
