import React from 'react';
import classes from './RadioButton.module.css';

function RadioButton(props) {
    return (
        <div className={props.active? `${classes.Button} ${classes.Active}`:classes.Button} onClick={props.clicked}>
           <label>{props.name}</label>
        </div>
    );
}

export default RadioButton;