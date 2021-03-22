import { SELECT_DATE_FILTER } from "./types"


export const filterDate = (date) => {
    return {
        type: SELECT_DATE_FILTER,
        payload: date
    }
}