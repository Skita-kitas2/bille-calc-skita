import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'

const NavigationItems=(props)=> {
    return (
        <ul className={classes.menu}>
            <NavLink 
            to="/" 
            style={{textDecoration:'none'}} 
            exact 
            className={classes.NavigationItem} 
            activeClassName={classes.Active}>
                <NavigationItem icon={faCalculator} disabled={false}>Kalkulator</NavigationItem>
            </NavLink>

            <NavLink 
            to="/podsumowanie" 
            className={`${classes.NavigationItem} ${props.summaryDisabled? classes.Disabled:""}`} 
            activeClassName={classes.Active} 
            onMouseEnter={()=>{props.summaryHoverOn(true)}} 
            onMouseLeave={()=>{props.summaryHoverOn(false)}}>
                <NavigationItem icon={faFileAlt}>Podsumowanie</NavigationItem>
            </NavLink>
        </ul>
    );
}
export default NavigationItems;