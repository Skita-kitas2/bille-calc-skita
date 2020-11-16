import React from 'react';

function CalculationSection(props) {
const style={
    background: '#e8f3f7',
    padding: '1rem',
    border: '3px solid transparent',
    borderRadius: '0 0 0.5rem 0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: props.showTooltip?'red':'transparent'
}

    return (
    <div style={style}>
        {props.children}
    </div>
    );
}

export default CalculationSection;