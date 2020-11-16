import React from 'react';
import classes from './Slider.module.css'

function Slider(props) {
const sliderBar_style={
    width:`calc(${props.value/props.maxAmount*100}% - 8px)`,
    height: '5px',
    background: '#ff3d2e',
    transform: 'translateY(18px)',
}

    return (
        <div>
            <div className={classes.ValuesContainer}>
                <p>{props.minAmount}</p>
                <p className={classes.OutputValue}>{parseFloat(props.value).toLocaleString('en').replace(/,/g,' ')}</p>
                <p>{props.maxAmount}</p>
            </div> 
            <div style={sliderBar_style}></div>          
            <input type="range" step='50' min={props.minAmount} max={props.maxAmount} className={classes.Slider} onChange={props.changed} value={props.value}></input>
        </div>
    );
}

export default Slider;