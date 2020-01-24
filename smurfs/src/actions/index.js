import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const SEND_DATA_START = "SEND_DATA_START";

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
}

export const sendData = smurf => dispatch => {
    dispatch({ type: SEND_DATA_START });
}