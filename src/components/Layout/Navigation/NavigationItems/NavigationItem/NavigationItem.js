import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationItem=(props)=> {

    return (
        <li>            
            <FontAwesomeIcon icon={props.icon}/>
            <i>{props.children}</i>
        </li>

    );
}

export default NavigationItem;