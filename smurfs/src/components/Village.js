import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions';
import SmurfCard from './SmurfCard';

export default () => {
    const getSmurfs = useDispatch();
    const smurfs = useSelector(state => state.smurfs);

    //get smurfs on load
    useEffect(() => {
        getSmurfs(fetchData());
    }, [])
    return(
        <div>
            {smurfs && smurfs.map(smurf => {
                return <SmurfCard smurf={smurf} />
            })}
        </div>
    );
}