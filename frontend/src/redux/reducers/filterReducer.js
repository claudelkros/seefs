import { SELECT_DATE_FILTER } from "../actions/types";


const initialState = {
    date: "2020"
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_DATE_FILTER:
            const date = action.payload ? action.payload : "2020"
            return {
                ...state,
                date: date
            }

        default:
            return state
    }
}