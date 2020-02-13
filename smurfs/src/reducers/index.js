import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SEND_DATA_START,
    SEND_DATA_SUCCESS,
    SEND_DATA_FAILURE,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE
  } from "../actions";

const initialState = {
    smurfs: [],
    lastAddedSmurfID: 0,
    isLoading: false,
    isSending: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SEND_DATA_START:
            return {
                ...state,
                isSending: true
            }
        case SEND_DATA_SUCCESS:
            return {
                ...state,
                isSending: false,
                smurfs: action.payload,
                error: ''
            }
        case SEND_DATA_FAILURE:
            return {
                ...state,
                isSending: false,
                error: action.payload
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: ''
            }
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}