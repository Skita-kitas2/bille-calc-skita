(this["webpackJsonpbille-calc-skita"]=this["webpackJsonpbille-calc-skita"]||[]).push([[0],{12:function(e,t,a){e.exports={menu:"NavigationItems_menu__yepcg",NavigationItem:"NavigationItems_NavigationItem__3cY5u",Active:"NavigationItems_Active__2zY9X",Disabled:"NavigationItems_Disabled__VmSyR"}},26:function(e,t,a){e.exports={ValuesContainer:"Slider_ValuesContainer__GdSnP",OutputValue:"Slider_OutputValue__EE3Mu",Slider:"Slider_Slider__33BR6"}},27:function(e,t,a){e.exports={Button:"RadioButton_Button__1PI9v",Active:"RadioButton_Active__3f6r7"}},28:function(e,t,a){e.exports={tooltip:"ToolTip_tooltip__ylNIA",tooltiptext:"ToolTip_tooltiptext__3jdT5",tooltipVisible:"ToolTip_tooltipVisible__33h0m"}},29:function(e,t,a){e.exports={val:"OutputField_val__2J_Wj",outputContainer:"OutputField_outputContainer__2Ak-4",w25:"OutputField_w25__1hHIf"}},36:function(e,t,a){e.exports={RBsection:"RadioButtonsSection_RBsection__1nxRW",border:"RadioButtonsSection_border__34RiS"}},39:function(e,t,a){e.exports={buttonDisabled:"CalculateButton_buttonDisabled__3QvOv"}},40:function(e,t,a){e.exports={OutputContainer:"CalculationOutput_OutputContainer__2lIQn"}},41:function(e,t,a){e.exports={RateDetailsContainer:"RateDetails_RateDetailsContainer__1jwzr"}},52:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(0),c=a.n(o),r=a(23),i=a.n(r),s=a(11),l=a(21),u=(a(52),a(53),a(13)),d=a(14),m=a(17),b=a(16),j=a(12),p=a.n(j),h=a(38),v=function(e){return Object(n.jsxs)("li",{children:[Object(n.jsx)(h.a,{icon:e.icon}),Object(n.jsx)("i",{children:e.children})]})},O=a(25),C=a(15),f=function(e){return Object(n.jsxs)("ul",{className:p.a.menu,children:[Object(n.jsx)(C.b,{to:"/",style:{textDecoration:"none"},exact:!0,className:p.a.NavigationItem,activeClassName:p.a.Active,children:Object(n.jsx)(v,{icon:O.a,disabled:!1,children:"Kalkulator"})}),Object(n.jsx)(C.b,{to:"/podsumowanie",className:"".concat(p.a.NavigationItem," ").concat(e.summaryDisabled?p.a.Disabled:""),activeClassName:p.a.Active,onMouseEnter:function(){e.summaryHoverOn(!0)},onMouseLeave:function(){e.summaryHoverOn(!1)},children:Object(n.jsx)(v,{icon:O.b,children:"Podsumowanie"})})]})},x="SLIDER_CHANGE",A="RATE_DAMAGE_SELECT",y="CALCULATE_RATE",g="SAVE_POLICY_DETAILS",I="SUMMARY_HOVER",z=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{width:"50%",margin:"auto"},children:[Object(n.jsx)(f,{summaryDisabled:this.props.summaryDisabled,summaryHoverOn:this.props.onSummaryHoverHandler}),this.props.children]})}}]),a}(o.Component),E=Object(s.b)((function(e){return{summaryDisabled:e.summaryDisabled,showSummaryTooltip:e.showSummaryTooltip}}),(function(e){return{onSummaryHoverHandler:function(t){return e({type:I,bool:t})}}}))(z);var Q=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("title",{style:{display:"block",fontSize:"1.2rem",fontWeight:"500",padding:"1rem 0"},children:e.value})})},B=a(26),N=a.n(B);var T=function(e){var t={width:"calc(".concat(e.value/e.maxAmount*100,"% - 8px)"),height:"5px",background:"#ff3d2e",transform:"translateY(18px)"};return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:N.a.ValuesContainer,children:[Object(n.jsx)("p",{children:e.minAmount}),Object(n.jsx)("p",{className:N.a.OutputValue,children:parseFloat(e.value).toLocaleString("en").replace(/,/g," ")}),Object(n.jsx)("p",{children:e.maxAmount})]}),Object(n.jsx)("div",{style:t}),Object(n.jsx)("input",{type:"range",step:"50",min:e.minAmount,max:e.maxAmount,className:N.a.Slider,onChange:e.changed,value:e.value})]})},k=a(9),R=a.n(k),w=a(27),D=a.n(w);var G=function(e){return Object(n.jsx)("div",{className:e.active?"".concat(D.a.Button," ").concat(D.a.Active):D.a.Button,onClick:e.clicked,children:Object(n.jsx)("label",{children:e.name})})},S=a(28),P=a.n(S);var Y=function(e){return Object(n.jsx)("div",{className:P.a.tooltip,children:Object(n.jsx)("span",{className:"".concat(P.a.tooltiptext," ").concat(e.showTooltip?P.a.tooltipVisible:""),children:e.toolTipCaption})})},H=a(36),Z=a.n(H);var F=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"".concat(Z.a.RBsection," ").concat(e.showTooltip?Z.a.border:""),children:e.children}),Object(n.jsx)(Y,{showTooltip:e.showTooltip,toolTipCaption:e.toolTipCaption})]})};var J=function(e){return Object(n.jsx)("label",{style:{margin:"auto 0",color:"#889ca2",width:"25%",textAlign:"center"},children:e.text})};var V=function(e){var t={background:"#e8f3f7",padding:"2rem",border:"3px solid transparent",borderRadius:"0 0 0.5rem 0.5rem",display:"flex",justifyContent:"space-between",borderColor:e.showTooltip?"red":"transparent"};return Object(n.jsx)("div",{style:t,children:e.children})},_=a(39),L=a.n(_);var W=function(e){return Object(n.jsx)("button",{onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onClick:e.clicked,className:e.isDisabled?L.a.buttonDisabled:"",children:"OBLICZ RAT\u0118"})},U=a(40),K=a.n(U);var M=function(e){return Object(n.jsxs)("div",{className:K.a.OutputContainer,children:[Object(n.jsx)("h1",{children:e.value}),Object(n.jsx)("p",{children:e.currency})]})},q="z\u0142",X=[{name:"1 rata",factor:.98,numOfRates:1},{name:"2 raty",factor:1,numOfRates:2},{name:"4 raty",factor:1.04,numOfRates:4}],$=[{name:"brak szk\xf3d",factor:.95},{name:"wyrz\u0105dzona szkoda",factor:1.08}],ee=[{min:100,max:1e3,value:20},{min:1001,max:3e3,value:70},{min:3001,max:6e3,value:130},{min:6001,max:9e3,value:180},{min:9001,max:1e4,value:200}],te=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={showRatesTooltip:!1},e.hover=function(t){""===e.props.selectedRate&&e.setState({showRatesTooltip:t})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e="POL-"+parseInt(1e10*Math.random()),t=new Date;""===this.props.polNo&&this.props.savePolicyDetails(e,t.toLocaleDateString("pl-PL"))}},{key:"render",value:function(){var e=this,t=X.map((function(t){return Object(n.jsx)(G,{name:t.name,active:e.props.selectedRate===t.name,clicked:function(){return e.props.rate_damageButtonClickHandler(t.name,"SelectedRate")}},t.name)})),a=$.map((function(t){return Object(n.jsx)(G,{name:t.name,active:e.props.damages===t.name,clicked:function(){return e.props.rate_damageButtonClickHandler(t.name,"CausedDamages")}},t.name)}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:R.a.CalcContainer,children:[Object(n.jsx)(Q,{value:"Suma ubezpieczenia"}),Object(n.jsx)(T,{minAmount:100,maxAmount:1e4,value:this.props.insAmount,changed:this.props.sliderOnChangeHandler}),Object(n.jsx)(Q,{value:"Ilo\u015b\u0107 rat"}),Object(n.jsx)(F,{showTooltip:this.state.showRatesTooltip,toolTipCaption:"Wybierz ilo\u015b\u0107 rat",children:t}),Object(n.jsx)(Q,{value:"Stan"}),Object(n.jsxs)(F,{children:[a,Object(n.jsx)(J,{text:"Brak wyboru oznacza nowego klienta bez przesz\u0142o\u015bci"})]})]}),Object(n.jsxs)(V,{showTooltip:this.props.showSummaryTooltip,children:[Object(n.jsx)(W,{clicked:this.props.calculateRate,onMouseEnter:function(){e.hover(!0)},onMouseLeave:function(){e.hover(!1)},isDisabled:""===this.props.selectedRate}),Object(n.jsx)(M,{value:this.props.finalValue,currency:q})]}),Object(n.jsx)(Y,{showTooltip:this.props.showSummaryTooltip,toolTipCaption:"Oblicz rat\u0119"})]})}}]),a}(o.Component),ae=Object(s.b)((function(e){return{insAmount:e.InsuranceAmount,selectedRate:e.SelectedRate,damages:e.CausedDamages,finalValue:e.CalculatedValue,polNo:e.policyNo,polDate:e.policyDate,showSummaryTooltip:e.showSummaryTooltip}}),(function(e){return{sliderOnChangeHandler:function(t){return e({type:x,value:t.target.value})},rate_damageButtonClickHandler:function(t,a){return e({type:A,buttonName:t,stateProp:a})},calculateRate:function(){return e({type:y})},savePolicyDetails:function(t,a){return e({type:g,polNo:t,polDate:a})}}}))(te),ne=a(19),oe=a(29),ce=a.n(oe);var re=function(e){return e.wdth,Object(n.jsxs)("div",{className:"".concat(ce.a.outputContainer," ").concat(e.narrow?ce.a.w25:""),children:[Object(n.jsx)("p",{className:ce.a.val,children:e.val}),Object(n.jsx)("label",{children:e.label})]})},ie=a(41),se=a.n(ie);var le=function(e){return Object(n.jsxs)("div",{className:se.a.RateDetailsContainer,children:[Object(n.jsxs)("label",{children:["Rata nr ",e.iterator]}),Object(n.jsx)("p",{children:e.rateValue})]})},ue=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){""===this.props.selectedRate&&this.props.history.push("/")}},{key:"render",value:function(){var e,t=1,a=Object(ne.a)(X);try{for(a.s();!(e=a.n()).done;){var o=e.value;if(this.props.selectedRate===o.name){t=o.numOfRates;break}}}catch(s){a.e(s)}finally{a.f()}for(var c=[],r=(this.props.finalValue*t).toFixed(0),i=1;i<=t;i++)c.push(Object(n.jsx)(le,{iterator:i,rateValue:"".concat(this.props.finalValue," ").concat(q)},i));return Object(n.jsxs)("div",{className:R.a.SummaryContainer,children:[Object(n.jsxs)("div",{className:R.a.RowContainer,children:[Object(n.jsxs)("div",{className:R.a.c1,children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo"}),Object(n.jsx)("p",{children:"KITA Insurance Inc"}),Object(n.jsx)("p",{children:"ul. Krakowskie Przedmie\u015bcie 10, 20-800 Lublin"})]}),Object(n.jsx)("h1",{children:"Kalkulacja Raty Ubezpieczenia"})]}),Object(n.jsxs)("div",{className:R.a.RowContainer,children:[Object(n.jsx)(re,{label:"Numer polisy",val:this.props.polNo}),Object(n.jsx)(re,{label:"Data, miejscowo\u015b\u0107",val:"".concat(this.props.polDate,", Lublin"),narrow:!0})]}),Object(n.jsx)("h2",{className:R.a.SummarySectionTitle,children:"Szczeg\xf3\u0142y kalkulacji"}),Object(n.jsxs)("div",{className:R.a.ColumnContainer,children:[Object(n.jsx)(re,{label:"Suma ubezpieczenia",val:"".concat(this.props.insAmount," ").concat(q)}),Object(n.jsx)(re,{label:"Szkody",val:""===this.props.damages?"brak przesz\u0142o\u015bci":this.props.damages})]}),Object(n.jsx)("h2",{className:R.a.SummarySectionTitle,children:"Raty"}),Object(n.jsx)(re,{label:"Ilo\u015b\u0107 rat",val:t}),c,Object(n.jsxs)("h2",{className:R.a.RatesSum,children:["SUMA: ",r," ",q]})]})}}]),a}(o.Component),de=Object(s.b)((function(e){return{insAmount:e.InsuranceAmount,selectedRate:e.SelectedRate,damages:e.CausedDamages,finalValue:e.CalculatedValue,polNo:e.policyNo,polDate:e.policyDate}}))(ue),me=a(4);var be=function(){return Object(n.jsx)(C.a,{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(E,{children:[Object(n.jsx)(me.b,{path:"/",exact:!0,component:ae}),Object(n.jsx)(me.b,{render:function(){return Object(n.jsx)(me.a,{to:{pathname:"/"}})}}),Object(n.jsx)(me.b,{path:"/podsumowanie",component:de})]})})})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))},pe=a(18),he=a(10),ve={InsuranceAmount:100,SelectedRate:"",CausedDamages:"",CalculatedValue:0,summaryDisabled:!0,showSummaryTooltip:!1,policyNo:"",policyDate:""},Oe=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case x:return Object(he.a)(Object(he.a)({},t),{},{InsuranceAmount:a.value,CalculatedValue:0,summaryDisabled:!0});case I:var n=a.bool&&t.summaryDisabled;return Object(he.a)(Object(he.a)({},t),{},{showSummaryTooltip:n});case g:return Object(he.a)(Object(he.a)({},t),{},{policyNo:a.polNo,policyDate:a.polDate});case A:var o=a.buttonName!==t[a.stateProp]?a.buttonName:"";return Object(he.a)(Object(he.a)({},t),{},(e={},Object(pe.a)(e,a.stateProp,o),Object(pe.a)(e,"CalculatedValue",0),Object(pe.a)(e,"summaryDisabled",!0),e));case y:var c,r=0,i=1,s=1,l=Object(ne.a)(ee);try{for(l.s();!(c=l.n()).done;){var u=c.value;if(t.InsuranceAmount>=u.min&&t.InsuranceAmount<=u.max){r=u.value;break}}}catch(O){l.e(O)}finally{l.f()}var d,m=Object(ne.a)(X);try{for(m.s();!(d=m.n()).done;){var b=d.value;if(t.SelectedRate===b.name){i=b.factor/b.numOfRates;break}}}catch(O){m.e(O)}finally{m.f()}var j,p=Object(ne.a)($);try{for(p.s();!(j=p.n()).done;){var h=j.value;if(t.CausedDamages===h.name){s=h.factor;break}}}catch(O){p.e(O)}finally{p.f()}var v=r*i*s;return Object(he.a)(Object(he.a)({},t),{},{CalculatedValue:v.toFixed(0),summaryDisabled:!1})}return t},Ce=a(42),fe=Object(l.createStore)(Oe,Object(Ce.composeWithDevTools)());i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(s.a,{store:fe,children:Object(n.jsx)(be,{})})}),document.getElementById("root")),je()},9:function(e,t,a){e.exports={CalcContainer:"Containers_CalcContainer__2PrBC",SummaryContainer:"Containers_SummaryContainer__35wrB",RowContainer:"Containers_RowContainer__20o-m",ColumnContainer:"Containers_ColumnContainer__2xzrw",c1:"Containers_c1__Lw06_",SummarySectionTitle:"Containers_SummarySectionTitle__34nLt",RatesSum:"Containers_RatesSum__DTrpB"}}},[[58,1,2]]]);
//# sourceMappingURL=main.95a3fd63.chunk.js.map