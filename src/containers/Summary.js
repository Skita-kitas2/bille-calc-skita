import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Containers.module.css'
import * as AppConfiguration from '../App_config'
import KitasInsuranceLogo from '../images/Logo.png'
import OutputField from '../components/Summary/OutputField/OutputField';
import RateDetails from '../components/Summary/RateDetails/RateDetails';



class Summary extends Component {  

    componentDidMount(){
        if(this.props.selectedRate===""){
            this.props.history.push('/')
        }       
    }
    
    render() {        

        let numOfRates=1
        for(let rate of AppConfiguration.rateButtons){
            if(this.props.selectedRate===rate.name)
            {numOfRates=rate.numOfRates
                break;}}

        let Rates=[]
        const RatesSum=(this.props.finalValue*numOfRates).toFixed(0)
        for(let i=1; i<=numOfRates;i++){
            Rates.push(<RateDetails key={i} iterator={i} rateValue={`${this.props.finalValue} ${AppConfiguration.currency}`}/>)
        }

        return (
                <div className={classes.SummaryContainer}>
                    <div className={classes.RowContainer}>
                        <div className={classes.c1}>
                            <img src={KitasInsuranceLogo} alt="Logo"/>
                            <p>KITA Insurance Inc</p>
                            <p>ul. Krakowskie Przedmieście 10, 20-800 Lublin</p>
                        </div>
                        <h1>Kalkulacja Raty Ubezpieczenia</h1>
                    </div>
                        <div className={classes.RowContainer}>
                            <OutputField label="Numer polisy" val={this.props.polNo} />
                            <OutputField label="Data, miejscowość" val={`${this.props.polDate}, Lublin`} narrow/>
                        </div>
                    <h2 className={classes.SummarySectionTitle}>Szczegóły kalkulacji</h2>
                        <div className={classes.ColumnContainer}>
                        <OutputField label="Suma ubezpieczenia" val={`${this.props.insAmount} ${AppConfiguration.currency}`} />
                        <OutputField label="Szkody" val={this.props.damages===''?"brak przeszłości":this.props.damages} />
                        </div>
                    <h2 className={classes.SummarySectionTitle}>Raty</h2>  
                        <OutputField label="Ilość rat" val={numOfRates} />  
                        {Rates}
                    <h2 className={classes.RatesSum}>SUMA: {RatesSum} {AppConfiguration.currency}</h2> 
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
    }
};

export default connect(mapStateToProps)(Summary);