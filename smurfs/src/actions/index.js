import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const SEND_DATA_START = "SEND_DATA_START";
export const SEND_DATA_SUCCESS = "SEND_DATA_SUCCESS";
export const SEND_DATA_FAILURE = "SEND_DATA_FAILURE";

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.message});
        });

}

export const sendData = smurf => dispatch => {
    dispatch({ type: SEND_DATA_START });
    axios
    .post('http://localhost:3333/smurfs', {name: 'yo'})
    .then(res => {
        //res.data is the new array of smurfs
        console.log(res.data)
        dispatch({ type: SEND_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: SEND_DATA_FAILURE, payload: err.message});
    });
}