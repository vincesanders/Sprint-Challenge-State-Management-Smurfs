import React, { useState } from 'react';

export default () => {
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
        console.log('I was clicked!');
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