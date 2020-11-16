import React from 'react';
import classes from './CalculateButton.module.css';

function CalculateButton(props) {
    return (
        <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.clicked} className={props.isDisabled?classes.buttonDisabled:""}>OBLICZ RATĘ</button>
    );
}

export default CalculateButton;