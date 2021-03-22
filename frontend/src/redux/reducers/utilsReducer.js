import {
	GET_URL_PATH,
	TOGGLE_CLOSE_ADD_FILE_BULK,
	TOGGLE_CLOSE_ADD_FILE_SINGLE,
	TOGGLE_CLOSE_PROFILE,
	TOGGLE_OPEN_ADD_FILE_BULK,
	TOGGLE_OPEN_ADD_FILE_SINGLE,
	TOGGLE_OPEN_PROFILE,
} from "../actions/types";

const initialState = {
	toggleProfile: false,
	toggleAddFileSingle: false,
	toggleAddFileBulk: false,
	urlPath: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case TOGGLE_OPEN_PROFILE:
			return {
				...state,
				toggleProfile: !state.toggleProfile,
			};
		case TOGGLE_CLOSE_PROFILE:
			return {
				...state,
				toggleProfile: false,
			};
		// Opening single upload
		case TOGGLE_OPEN_ADD_FILE_SINGLE:
			return {
				...state,
				toggleAddFileSingle: true,
			};
		// Opening bulk uploads
		case TOGGLE_OPEN_ADD_FILE_BULK:
			return {
				...state,
				toggleAddFileBulk: true,
			};
		// Closing single upload
		case TOGGLE_CLOSE_ADD_FILE_SINGLE:
			return {
				...state,
				toggleAddFileSingle: false,
			};
		// Closing bulk uploads
		case TOGGLE_CLOSE_ADD_FILE_BULK:
			return {
				...state,
				toggleAddFileBulk: false,
			};

		case GET_URL_PATH:
			return {
				...state,
				urlPath: action.payload,
			};

		default:
			return state;
	}
}
