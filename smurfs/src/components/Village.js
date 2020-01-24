import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions';
import SmurfCard from './SmurfCard';

export default () => {
    const getSmurfs = useDispatch();
    const [smurfs, error] = useSelector(state => [state.smurfs, state.error]);

    //get smurfs on load
    useEffect(() => {
        getSmurfs(fetchData());
    }, [])
    return(
        <div>
            <h4 className='error-message'>{error}</h4>
            {smurfs && smurfs.map(smurf => {
                return <SmurfCard smurf={smurf} />
            })}
        </div>
    );
}