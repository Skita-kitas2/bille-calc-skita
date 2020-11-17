import React from 'react';

function SectionTitle(props) {
    const style={
        display: 'block',
        fontSize: '1.1rem',
        fontWeight: '500',
        padding: '1rem 0'
    }

    return (
            <title style={style}>{props.value}</title>
    );
}

export default SectionTitle;