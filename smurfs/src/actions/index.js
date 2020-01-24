import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const SEND_DATA_START = "SEND_DATA_START";

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.message});
            console.log(err);
        });

}

export const sendData = smurf => dispatch => {
    dispatch({ type: SEND_DATA_START });
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        //res.data is the new array of smurfs
        console.log(res.data)
    })
    .catch(err => console.log(err));
}