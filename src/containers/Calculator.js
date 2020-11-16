import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionTitle from '../components/Calcultor_Form/SectionTitle/SectionTitle'
import Slider from '../components/Calcultor_Form/Slider/Slider'
import classes from './Containers.module.css'
import RadioButton from './../components/Calcultor_Form/RadioButtonsSection/RadioButton/RadioButton';
import RadioButtonsSection from './../components/Calcultor_Form/RadioButtonsSection/RadioButtonsSection';
import InfoText from '../components/Calcultor_Form/InfoText/InfoText';
import CalculationSection from '../components/Calcultor_Form/CalculationSection/CalculationSection';
import CalculateButton from '../components/Calcultor_Form/CalculationSection/CalculateButton/CalculateButton';
import CalculationOutput from '../components/Calcultor_Form/CalculationSection/CalculationOutput/CalculationOutput';
import * as AppConfiguration from '../App_config'
import * as actionTypes from '../store/actions';
import ToolTip from '../components/UI/ToolTip/ToolTip';


class Calculator extends Component {

    state={
        showRatesTooltip:false,
    }

    componentDidMount(){
        const policyNo='POL-'+parseInt(Math.random()*10000000000) 
        const policyDate=new Date()
        if(this.props.polNo===''){
        this.props.savePolicyDetails(policyNo,policyDate.toLocaleDateString("pl-PL"))}
    }

    hover = (bool) =>{
        if(this.props.selectedRate===""){
        this.setState({showRatesTooltip:bool})}
    }

    render() {

        let RateButtons=AppConfiguration.rateButtons.map(
            button=>{
                return <RadioButton 
                key={button.name} 
                name={button.name} 
                active={this.props.selectedRate===button.name} 
                clicked={()=>this.props.rate_damageButtonClickHandler(button.name,"SelectedRate")}/>
            }
        )

        let DamageButtons=AppConfiguration.damageButtons.map(
            button=>{
                return <RadioButton 
                key={button.name} 
                name={button.name} 
                active={this.props.damages===button.name} 
                clicked={()=>this.props.rate_damageButtonClickHandler(button.name,"CausedDamages")}/>
            }
        )

        return (
            <div>
                <div className={classes.CalcContainer}>
                    <SectionTitle value='Suma ubezpieczenia'/>
                        <Slider minAmount={AppConfiguration.minInsuranceAmount} maxAmount={AppConfiguration.maxInsuranceAmount} value={this.props.insAmount} changed={this.props.sliderOnChangeHandler}/>
                    <SectionTitle value='Ilość rat'/>
                        <RadioButtonsSection showTooltip={this.state.showRatesTooltip} toolTipCaption="Wybierz ilość rat">
                            {RateButtons}
                        </RadioButtonsSection>                
                    <SectionTitle value='Stan'/>
                        <RadioButtonsSection>
                            {DamageButtons} 
                            <InfoText text={AppConfiguration.damageInfo}/>
                        </RadioButtonsSection> 
                </div>
                <CalculationSection showTooltip={this.props.showSummaryTooltip}>
                    <CalculateButton clicked={this.props.calculateRate} onMouseEnter={()=>{this.hover(true)}} onMouseLeave={()=>{this.hover(false)}} isDisabled={this.props.selectedRate===''}/>
                    <CalculationOutput value={this.props.finalValue} currency={AppConfiguration.currency}/>                    
                </CalculationSection>
                <ToolTip showTooltip={this.props.showSummaryTooltip} toolTipCaption="Oblicz ratę"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        insAmount:state.InsuranceAmount,
        selectedRate:state.SelectedRate,
        damages:state.CausedDamages,
        finalValue:state.CalculatedValue,
        polNo:state.policyNo,
        polDate:state.policyDate,
        showSummaryTooltip:state.showSummaryTooltip,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sliderOnChangeHandler: (event) => dispatch({type: actionTypes.SLIDER_CHANGE, value:event.target.value}),
        rate_damageButtonClickHandler: (name,stateProp) => dispatch({type: actionTypes.RATE_DAMAGE_SELECT, buttonName:name, stateProp:stateProp}),
        calculateRate: () => dispatch({type: actionTypes.CALCULATE_RATE}),
        savePolicyDetails: (polNo,polDate) => dispatch({type: actionTypes.SAVE_POLICY_DETAILS, polNo:polNo, polDate:polDate}),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Calculator);