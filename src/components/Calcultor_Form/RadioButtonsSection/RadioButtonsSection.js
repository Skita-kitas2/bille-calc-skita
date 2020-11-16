import React from 'react';
import ToolTip from '../../UI/ToolTip/ToolTip';
import classes from './RadioButtonsSection.module.css'

function RadioButtonsSection(props) {

    return (
        <div>
            <div className={`${classes.RBsection} ${props.showTooltip?classes.border:""}`}>
                {props.children}                
            </div>
        <ToolTip showTooltip={props.showTooltip} toolTipCaption={props.toolTipCaption}/>
        </div>
    );
}

export default RadioButtonsSection;