import { ON_SUBMIT_FILE, GET_FILES, SELECT_FILE, SELECT_FILE_TYPE, SELECT_DATE, UPLOAD_SUCCESS, UPLOAD_FAIL } from '../actions/types'

const initialState = {

    academicYear: "2020",
    typeOfFile: "Décision de selection",
    file: null,
    uploadSuccess: false,
    files: []

}



export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_DATE:

            const date = action.payload ? action.payload : '2020'
            return {
                ...state,
                academicYear: date
            }

        case SELECT_FILE_TYPE:
            const fileType = action.payload ? action.payload : "Décision de selection"
            return {
                ...state,
                typeOfFile: fileType
            }
        case SELECT_FILE:
            const file = action.payload ? action.payload : null
            return {
                ...state,
                file: file

            }



        case UPLOAD_SUCCESS:

            return {
                ...state,
                uploadSuccess: true
            }
        case GET_FILES:

            return {
                ...state,
                files: [action.payload]
            }

        case UPLOAD_FAIL:
            return {
                ...state,
                uploadSuccess: false
            }

        default: return state
    }

}


