import React from 'react';
import classes from './OutputField.module.css'

function OutputField(props) {

    return (
        <div className={`${classes.outputContainer} ${props.narrow?classes.w25:""}`}>
            <p className={classes.val}>{props.val}</p>
            <label>{props.label}</label>
        </div>
    );
}

export default OutputField;