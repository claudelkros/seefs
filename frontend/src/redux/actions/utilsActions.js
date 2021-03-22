import {
	GET_URL_PATH,
	TOGGLE_CLOSE_ADD_FILE,
	TOGGLE_CLOSE_ADD_FILE_BULK,
	TOGGLE_CLOSE_ADD_FILE_SINGLE,
	TOGGLE_CLOSE_PROFILE,
	TOGGLE_OPEN_ADD_FILE_BULK,
	TOGGLE_OPEN_ADD_FILE_SINGLE,
	TOGGLE_OPEN_PROFILE,
} from "./types";

// Profile actions

export const toggleCloseProfile = () => {
	return {
		type: TOGGLE_CLOSE_PROFILE,
	};
};

export const toggleOpenProfile = () => {
	return {
		type: TOGGLE_OPEN_PROFILE,
	};
};

// Add file actions

export const toggleOpenAddFileSingle = () => {
	return {
		type: TOGGLE_OPEN_ADD_FILE_SINGLE,
	};
};

export const toggleOpenAddFileBulk = () => {
	return {
		type: TOGGLE_OPEN_ADD_FILE_BULK,
	};
};

export const toggleCloseAddFileSingle = () => {
	return {
		type: TOGGLE_CLOSE_ADD_FILE_SINGLE,
	};
};
export const toggleCloseAddFileBulk = () => {
	return {
		type: TOGGLE_CLOSE_ADD_FILE_BULK,
	};
};

// Getting the url location

export const getUrlPath = (urlPath) => {
	return {
		type: GET_URL_PATH,
		payload: urlPath,
	};
};
