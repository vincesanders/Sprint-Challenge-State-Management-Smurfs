import React from 'react';

export default ({ smurf }) => {
    return (
        <div>
            <h3>{smurf.name}</h3>
            <p>age: {smurf.age}</p>
            <p>height: {smurf.height}</p>
        </div>
    );
}