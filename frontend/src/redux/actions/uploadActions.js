
// Submit the form with files

import axios from "axios"
import { returnErrors } from "./authErrorsActions"
import { GET_FILES, GET_FILES_ERRORS, SELECT_DATE, SELECT_FILE, SELECT_FILE_TYPE, UPLOAD_FAIL, UPLOAD_SUCCESS } from "./types"


export const onUploadFile = ({ academicYear, typeOfFile, file }) => dispatch => {


    // Headers

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let data = new FormData()

    data.append('file', file)

    data.append('academicYear', academicYear)
    data.append('typeOfFile', typeOfFile)

    axios.post('/api/uploads', data, config)
        .then(res => dispatch({
            type: UPLOAD_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'UPLOAD_FAIL'))
            dispatch({
                type: UPLOAD_FAIL
            })
        })
}


export const getFiles = () => dispatch => {
    // Headers

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    axios.get('/api/uploads', config)
        .then(res => dispatch({
            type: GET_FILES,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'GET_FILES_ERRORS'))
            dispatch({
                type: GET_FILES_ERRORS
            })
        })
}




// Actions update for every field

export const selectDate = (date) => {

    return {
        type: SELECT_DATE,
        payload: date
    }
}

export const selectFileType = (fileType) => {
    return {
        type: SELECT_FILE_TYPE,
        payload: fileType
    }
}

export const selectFile = (file) => {
    return {
        type: SELECT_FILE,
        payload: file
    }
}