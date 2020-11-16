import React from 'react';

function InfoText(props) {
const style={
    margin: 'auto 0',
    color: '#889ca2',
    width: '30%',
    textAlign: 'center',
}

    return (
        <label style={style}>{props.text}</label>
    );
}

export default InfoText;