import {
	DATE_STUDENT_SELECT_FILTERING,
	NUMBER_SELECTED,
	GET_SINGLE_STUDENT,
} from "./types";

export const dateSelectStudentFiltering = (date) => {
	return {
		type: DATE_STUDENT_SELECT_FILTERING,
		payload: date,
	};
};

// Getting the number of selected items

export const selectedElements = (number) => {
	return {
		type: NUMBER_SELECTED,
		payload: number,
	};
};

export const getSingleStudent = (values) => {
	return {
		type: GET_SINGLE_STUDENT,
		payload: values,
	};
};
