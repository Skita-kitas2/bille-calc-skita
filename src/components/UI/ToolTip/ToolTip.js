import React from 'react';
import classes from './ToolTip.module.css'

function ToolTip(props) {
    return (
        <div className={classes.tooltip}>
        <span className={`${classes.tooltiptext} ${props.showTooltip?classes.tooltipVisible:""}`}>{props.toolTipCaption}</span>
    </div>
    );
}

export default ToolTip;