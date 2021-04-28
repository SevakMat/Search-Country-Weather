const SET_LIST_FROM_API = "SET_LIST_FROM_API"
const SET_SELECTED_DAY_DATA = "SET_SELECTED_DAY_DATA"

const defaultState = {
    listFromApi: [],
    selectidDayData:null
}


export default function reposReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LIST_FROM_API:
      return {
        ...state,
        listFromApi: action.payload
      }
    case SET_SELECTED_DAY_DATA:
      return {
        ...state,
        selectidDayData: action.payload
      }
    default:
      return state
  }
}

export const setListFromApi = (list) => ({ type: SET_LIST_FROM_API, payload: list })
export const selectedDayData = (list) => ({type:SET_SELECTED_DAY_DATA, payload:list})