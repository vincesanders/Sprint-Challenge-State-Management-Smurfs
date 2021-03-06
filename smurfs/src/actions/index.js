import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const SEND_DATA_START = "SEND_DATA_START";
export const SEND_DATA_SUCCESS = "SEND_DATA_SUCCESS";
export const SEND_DATA_FAILURE = "SEND_DATA_FAILURE";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

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
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        //res.data is the new array of smurfs
        console.log(res.data)
        dispatch({ type: SEND_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: SEND_DATA_FAILURE, payload: err.message});
    });
}

export const deleteSmurf = id => dispatch => {
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            //res.data is the new array of smurfs
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log(err.message);
            dispatch({ type: DELETE_SMURF_FAILURE, payload: err.message});
        })
}

export const editSmurf = newSmurfInfo=> dispatch => {
    axios
    .put(`http://localhost:3333/smurfs/${newSmurfInfo.id}`, newSmurfInfo)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}