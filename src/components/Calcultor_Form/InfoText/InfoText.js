import React from 'react';
import classes from './InfoText.module.css'

function InfoText(props) {
    return (
        <label className={classes.InfoText}>{props.text}</label>
    );
}

export default InfoText;