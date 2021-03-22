import axios from "axios";
import { returnErrors } from "./authErrorsActions";
import {
	SELECT_CYCLE,
	STUDENTS_LOADED,
	STUDENTS_LOADING,
	STUDENT_REGISTER_FAIL,
	STUDENT_REGISTER_SUCCESS,
} from "./types";

import { tokenConfig } from "./tokenConfig";

export const cycleSelect = (cycle) => {
	return {
		type: SELECT_CYCLE,
		payload: cycle,
	};
};

// Submitting form and download

export const onSubmitRegistrationForm = (student) => (dispatch) => {
	// Headers

	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// Request body

	axios
		.post("/api/student/signup/", student, config)
		.then((res) =>
			dispatch({
				type: STUDENT_REGISTER_SUCCESS,
				payload: res.data,
			})
		)
		.catch((error) => {
			dispatch(
				returnErrors(
					error.response.data,
					error.response.status,
					"REGISTER_STUDENT_FAIL"
				)
			);
			dispatch({ type: STUDENT_REGISTER_FAIL });
		});
};

// Fetching students from database

export const getStudents = () => (dispatch, getState) => {
	// Students loading

	dispatch({ type: STUDENTS_LOADING });

	axios
		.get("/api/student/", tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: STUDENTS_LOADED,
				payload: res.data,
			});
		})
		.catch((error) => console.log(error));
};
