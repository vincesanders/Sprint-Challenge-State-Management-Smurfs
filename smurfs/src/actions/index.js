import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const SEND_DATA_START = "SEND_DATA_START";

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    
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