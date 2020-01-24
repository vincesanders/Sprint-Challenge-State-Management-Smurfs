import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    SEND_DATA_START
  } from "../actions";

const initialState = {
    smurfs: [],
    lastAddedSmurfID: 0,
    isLoading: false,
    isSending: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case SEND_DATA_START:
            return {
                ...state,
                isSending: true
            }
        default:
            return state;
    }
}