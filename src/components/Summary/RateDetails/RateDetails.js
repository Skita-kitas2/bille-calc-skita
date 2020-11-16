import React from 'react';
import classes from './RateDetails.module.css'

function RateDetails(props) {
    return (
        <div className={classes.RateDetailsContainer}>
            <label>Rata nr {props.iterator}</label>
            <p>{props.rateValue}</p>
        </div>
    );
}

export default RateDetails;