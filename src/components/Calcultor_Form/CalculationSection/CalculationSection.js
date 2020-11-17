import React from 'react';
import classes from './CalculationSection.module.css'

function CalculationSection(props) {

    return (
    <div className={`${classes.CalcSection} ${props.showTooltip?classes.RedBorder:""}`}>
        {props.children}
    </div>
    );
}

export default CalculationSection;