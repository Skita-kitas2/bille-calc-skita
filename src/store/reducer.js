import * as actionTypes from './actions';
import * as AppConfiguration from '../App_config'

const initialState = {    
        InsuranceAmount: 100,
        SelectedRate: '',
        CausedDamages: '',
        CalculatedValue: 0,
        summaryDisabled: true,
        showSummaryTooltip: false,
        policyNo:'',
        policyDate:'' 
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SLIDER_CHANGE:
            return{
                ...state,
                InsuranceAmount:action.value,
                CalculatedValue:0,
                summaryDisabled: true
            }
        case actionTypes.SUMMARY_HOVER:
            const show=action.bool&&state.summaryDisabled
            return{
                ...state,
                showSummaryTooltip:show
            }
        case actionTypes.SAVE_POLICY_DETAILS:
            return{
                ...state,
                policyNo:action.polNo,
                policyDate:action.polDate,
            }
        case actionTypes.RATE_DAMAGE_SELECT:
            const selectedRateName=action.buttonName!==state[action.stateProp]?action.buttonName:""
            return{
                ...state,
                [action.stateProp]:selectedRateName,
                CalculatedValue:0,
                summaryDisabled: true
            }
        case actionTypes.CALCULATE_RATE:
            let baseRate=0
            let rateFactor=1
            let damageFactor=1
            for(let range of AppConfiguration.rateRanges){
                if(state.InsuranceAmount>=range.min&&state.InsuranceAmount<=range.max)
                {baseRate=range.value
                    break;}}
    
            for(let rate of AppConfiguration.rateButtons){
                if(state.SelectedRate===rate.name)
                {rateFactor=rate.factor/rate.numOfRates
                    break;}}
    
            for(let damage of AppConfiguration.damageButtons){
                if(state.CausedDamages===damage.name)
                {damageFactor=damage.factor
                    break;}}

                    const calculatedRate=baseRate*rateFactor*damageFactor
    
            return{
                ...state,
                CalculatedValue:calculatedRate.toFixed(0),
                summaryDisabled: false
            }
    }


    return state;
};

export default reducer;