import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendData } from '../actions';

export default () => {
    const sendNewSmurf = useDispatch();
    const usedID = useSelector(state => state.lastAddedSmurfID);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);

    const handleChanges = e => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'age') {
            setAge(e.target.value);
        } else {
            setHeight(e.target.value);
        }
    }

    const addNewSmurf = e => {
        e.preventDefault();
        let smurtObject = {
            name: name,
            age: age,
            height: height + 'cm',
            id: usedID + 1
        }
        return sendNewSmurf(sendData(smurtObject));
    }

    return (
        <div>
            <input type='text' name='name' onChange={handleChanges} value={name} />
            <input type='number' name='age' onChange={handleChanges} value={age} />
            <input type='number' name='height' onChange={handleChanges} value={height} />
            <button onClick={addNewSmurf} >Add Smurf</button>
        </div>
    );
}