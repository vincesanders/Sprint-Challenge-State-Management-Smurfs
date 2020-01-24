import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSmurf } from '../actions';


export default ({ smurf }) => {
    const remove = useDispatch();
    return (
        <div>
            <button onClick={() => remove(deleteSmurf(smurf.id))}>Delete</button>
            <button>Edit</button>
            <h3>{smurf.name}</h3>
            <p>age: {smurf.age}</p>
            <p>height: {smurf.height}</p>
        </div>
    );
}