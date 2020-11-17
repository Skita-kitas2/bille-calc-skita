import React, { Component } from 'react';
import NavigationItems from '../Layout/Navigation/NavigationItems/NavigationItems'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import classes from './Layout.module.css'

class Layout extends Component {

    handleClick = (e) => {
        if(this.props.summaryDisabled){
            e.preventDefault()
            window.scroll(0,1000)
        } 
    }

    render() {
        return (   
        <div className={classes.LayoutContainer}>      
            <NavigationItems summaryDisabled={this.props.summaryDisabled} summaryHoverOn={this.props.onSummaryHoverHandler} clicked={this.handleClick}/>
                {this.props.children}
        </div>  
        );
    }
}

const mapStateToProps = state => {
    return {
        summaryDisabled: state.summaryDisabled,
        showSummaryTooltip:state.showSummaryTooltip,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSummaryHoverHandler: (bool) => dispatch({type: actionTypes.SUMMARY_HOVER, bool:bool}),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Layout);