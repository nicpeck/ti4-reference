(this["webpackJsonpti4-reference"]=this["webpackJsonpti4-reference"]||[]).push([[0],{238:function(t,e,n){t.exports=n(379)},375:function(t,e,n){},376:function(t,e,n){},379:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),l=n(182),u=n.n(l),c=n(40),i=n.n(c),o=n(88),s=n(197),m=n(13),h=(n(199),n(198)),f=n(196),p=(n(183),n(20)),v=n(16),b=function(){function t(){Object(p.a)(this,t);for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];this.dice=n.map((function(t){var e=parseFloat(t,10);return 0===e&&(e=10),e}))}return Object(v.a)(t,[{key:"format",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.textOutput=t,this}},{key:"calculate",value:function(){var t=this;this._results={},this._cumulative={};this.dice.map((function(t){return(11-t)/10}));for(var e=function(e){var n=e.toString(2).padStart(t.dice.length,"0"),a=n.replace(/0/g,"").length,r=t.dice.reduce((function(t,e,a){return t*("1"===n[a]?(11-e)/10:1-(11-e)/10)}),1);t._results[a.toString(10)]||(t._results[a.toString(10)]=0),t._results[a.toString(10)]+=r},n=0;n<Math.pow(2,this.dice.length);n+=1)e(n);for(var a=this.dice.length;a>=0;a-=1)this._cumulative[a.toString(10)]=this._results[a.toString(10)],this._cumulative[(a+1).toString(10)]?this._cumulative[a.toString(10)]+=this._cumulative[(a+1).toString(10)]:this._cumulative[a.toString(10)]=this._results[a.toString(10)];return this}},{key:"results",get:function(){if(this._results||this.calculate(),this.textOutput){var t=[];for(var e in this._results)t.push("".concat(e,": ").concat(Math.round(100*this._results[e]),"%"));return t.join("\n")}return this._results}},{key:"cumulative",get:function(){if(this._cumulative||this.calculate(),this.textOutput){var t=[];for(var e in this._cumulative)t.push(">= ".concat(e,": ").concat(Math.round(100*this._cumulative[e]),"%"));return t.join("\n")}return this._cumulative}},{key:"average",get:function(){var t=0;for(var e in this._results)t+=parseInt(e,10)*this._results[e];return t}}]),t}(),d=(n(375),"AT_LEAST"),g="EXACT",E={};function y(t){return E[t]||(E[t]=Object(h.a)(b,Object(f.a)(t.split(""))).calculate()),E[t]}function x(t,e,n){var a=t.map((function(t,a){return t+(e[a]-t)*n}));return"rgba(".concat(a.join(","),")")}var _=function(t){return t.split("").sort().join("").replace(/([0-9])(?!\1+)/g,"$& ").replace(/[^\d]+$/,"")},S=function(){var t=Object(a.useState)(d),e=Object(m.a)(t,2),n=e[0],l=e[1],u=Object(a.useState)([]),c=Object(m.a)(u,2),o=c[0],s=c[1],h=Object(a.useState)(null),f=Object(m.a)(h,2),p=f[0],v=f[1];Object(a.useEffect)((function(){s([])}),[]);var b=n===g?"exactly":"at least",E=i.a.chain(o).map("length").max().value(),S={min:1/0,max:-1/0},k=[],j=i.a.chain(o).filter().uniqBy(_).map((function(t,e){for(var a=y(t)[n===g?"results":"cumulative"],r=[],l=n===g?0:1;l<=E;l+=1){var u=a[l.toString(10)];u>S.max&&(S.max=u),u<S.min&&(S.min=u),r.push(u),0===e&&k.push(l)}return{key:e,dice:t,cols:r,average:y(t).average}})).value();return r.a.createElement("div",{className:"container dice-table my-2"},r.a.createElement("h1",null,"Hit probabilities"),r.a.createElement("p",null,"Enter combat values below to see the probability of producing different numbers of hits."),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e=t.target.querySelector("input:focus");e&&e.blur(),s(o.filter((function(t){return!!t.replace(/[^\d]/g,"")})))},className:"d-flex flex-wrap mt-2 mb-2"},o.map((function(t,e){return r.a.createElement("div",{key:e,className:"dice-input input-group input-group-sm flex-nowrap flex-grow-0 flex-shrink-1 mb-0-5 mr-0-5 w-auto"},r.a.createElement("input",{type:"text",inputMode:"numeric",className:"form-control flex-grow-0 flex-shrink-0",value:t,placeholder:"...",style:{width:"".concat(.6*Math.max(3,t.length)+1.35,"em")},autoFocus:e===p,onChange:function(t){var n=i.a.clone(o);n[e]=t.target.value.replace(/[^\d]/g,""),s(n)},onBlur:function(){v(null)},onFocus:function(){v(e)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-sm btn-outline-dark",type:"button",tabIndex:"-1",onClick:function(){var t=i.a.clone(o);t.splice(e,1),s(t)}},"\xd7")))})),r.a.createElement("button",{className:"btn btn-sm btn-secondary mb-0-5",type:"button",onClick:function(){var t=i.a.clone(o);t.push(""),s(t),v(t.length-1)}},"+ Add values"),r.a.createElement("input",{type:"submit",style:{position:"fixed",left:"100%",top:"-100%"}})),null!==p&&0===o.filter((function(t){return t})).length&&r.a.createElement("p",{className:"mt-n2 text-muted"},r.a.createElement("small",null,'Combat values, eg "',r.a.createElement("u",null,"688"),'". Enter ',r.a.createElement("u",null,"0")," for 10.")),j.length>0?r.a.createElement("div",{className:"results-table"},r.a.createElement("p",null,r.a.createElement("strong",null,"Probability of ",r.a.createElement("a",{href:"#",onClick:function(t){t.preventDefault(),l(n===d?g:d)}},b)," X hits")),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),k.map((function(t){return r.a.createElement("th",{scope:"col",className:"text-center",key:t},t)})),r.a.createElement("th",null,"Avg. hits"))),r.a.createElement("tbody",null,j.map((function(t,e){var n=t.dice,a=t.cols,l=t.average;return r.a.createElement("tr",{key:_(n)},r.a.createElement("th",{scope:"col"},_(n)),a.map((function(t,e){return r.a.createElement("td",{key:e,className:"text-center",style:{backgroundColor:"number"===typeof t?x([20,20,50],[255,40,220],(t-S.min)/(S.max-S.min)):"transparent"}},function(t){if(void 0===t)return"-";var e=Math.round(100*t);return 100===e&&(t<1&&(e=">99"),t>1&&(e="100")),"".concat(e,"%")}(t))})),r.a.createElement("td",{className:"text-right"},(Math.round(10*l)/10).toFixed(1)))})))))):null)},k=(n(376),Object(s.a)()),j=function(){return r.a.createElement(o.b,{history:k},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:S})))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.3b87eaee.chunk.js.map