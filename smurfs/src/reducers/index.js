import {
    FETCH_DATA_START,
    SEND_DATA_START
  } from "../actions";

const initialState = {
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
        case SEND_DATA_START:
            return {
                ...state,
                isSending: true
            }
        default:
            return state;
    }
}