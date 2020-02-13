import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSmurf } from '../actions';


export default ({ smurf }) => {
    const remove = useDispatch();
    const usedID = useSelector(state => state.lastAddedSmurfID);
    let [isEditting, setIsEditting] = useState(false);
    const [name, setName] = useState(smurf.name);
    const [age, setAge] = useState(smurf.age);
    const [height, setHeight] = useState(0);

    const toggleEditing = () => {
        setIsEditting(!isEditting);
    }

    const handleChanges = e => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'age') {
            setAge(e.target.value);
        } else {
            setHeight(e.target.value);
        }
    }

    const displayButton = () => {
        if (isEditting) {
            return <><button onClick={toggleEditing}>Change</button></>;
        } else {
            return <><button onClick={toggleEditing}>Edit</button></>;
        }
    }

    const displayName = () => {
        if (isEditting) {
            return (
                <h3>
                    <input type='text' name='name' onChange={handleChanges} value={name} />
                </h3>
            );
        } else {
            return <h3>{smurf.name}</h3>;
        }
    }

    const displayAge = () => {
        if (isEditting) {
            return (
                <p>
                    <input type='number' name='age' onChange={handleChanges} value={age} />
                </p>
            );
        } else {
            return <p>age: {smurf.age}</p>;
        }
    }

    const displayHeight = () => {
        if (isEditting) {
            return (
                <p>
                    <input type='number' name='height' onChange={handleChanges} value={height} />
                </p>
            );
        } else {
            return <p>height: {smurf.height}</p>;
        }
    }

    return (
        <div>
            <button onClick={() => remove(deleteSmurf(smurf.id))}>Delete</button>
            {displayButton()}
            {displayName()}
            {displayAge()}
            {displayHeight()}
        </div>
    );
}