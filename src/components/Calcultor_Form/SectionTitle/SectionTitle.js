import React from 'react';

function SectionTitle(props) {
    const style={
        display: 'block',
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '1rem 0'
    }

    return (
        <div>
            <title style={style}>{props.value}</title>
        </div>
    );
}

export default SectionTitle;