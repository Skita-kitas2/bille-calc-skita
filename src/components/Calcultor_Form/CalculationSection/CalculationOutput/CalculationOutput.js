import React from 'react';
import classes from './CalculationOutput.module.css'

function CalculationOutput(props) {
    return (
        <div className={classes.OutputContainer}>
            <h1>{props.value}</h1>
            <p>{props.currency}</p>
        </div>
    );
}

export default CalculationOutput;