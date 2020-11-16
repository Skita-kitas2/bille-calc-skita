    export const maxInsuranceAmount=10000;
    export const minInsuranceAmount=100;
    export const damageInfo= 'Brak wyboru oznacza nowego klienta bez przeszłości';
    export const damageInfoSummary= 'Nowy Klient - brak';
    export const currency= 'zł';
    export const rateButtons= [
        {name:'1 rata', factor:0.98, numOfRates:1},
        {name:'2 raty', factor:1, numOfRates:2},
        {name:'4 raty', factor:1.04, numOfRates:4},
    ];

    export const damageButtons= [
        {name:'brak szkód', factor:0.95},
        {name:'wyrządzona szkoda', factor:1.08},
    ]

    export const rateRanges=[
        {min:100,max:1000,value:20},
        {min:1001,max:3000,value:70},
        {min:3001,max:6000,value:130},
        {min:6001,max:9000,value:180},
        {min:9001,max:10000,value:200},
    ]
