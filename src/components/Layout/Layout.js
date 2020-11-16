import React, { Component } from 'react';
import NavigationItems from '../Layout/Navigation/NavigationItems/NavigationItems'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class Layout extends Component {

    render() {
        return (   
        <div style={{width:'50%',margin: 'auto'}}>      
            <NavigationItems summaryDisabled={this.props.summaryDisabled} summaryHoverOn={this.props.onSummaryHoverHandler}/>
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