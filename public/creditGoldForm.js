(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{49:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n(0),c={mixins:[i.lang],components:{creditWrapInputs:function(){return n.e(4).then(n.bind(null,53))},creditWrapScrapInputs:function(){return n.e(5).then(n.bind(null,54))}},data:function(){return{visible:!1}},props:["categoryId"],methods:{getUnits:function(){},doSomething:function(e){console.log(e)}},beforeMount:function(){this.getUnits()},computed:{messages:function(){return s.a}},mounted:function(){this.setLang()}},a=n(1),r=Object(a.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"calc-form",attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.handleCalc(t)}}},[n("div",{staticClass:"wrap-select-option"},[n("div",{staticClass:"check-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.visible,expression:"visible"}],attrs:{id:"check",type:"checkbox"},domProps:{checked:Array.isArray(e.visible)?e._i(e.visible,null)>-1:e.visible},on:{change:function(t){var n=e.visible,i=t.target,s=!!i.checked;if(Array.isArray(n)){var c=e._i(n,null);i.checked?c<0&&(e.visible=n.concat([null])):c>-1&&(e.visible=n.slice(0,c).concat(n.slice(c+1)))}else e.visible=s}}}),e._v(" "),n("label",{staticClass:"checkbox-label",attrs:{for:"check"}}),e._v(" "),n("span",[e._v(e._s(e.messages[e.lang].scrap_check))])]),e._v(" "),e.visible?e._e():n("creditWrapInputs",{on:{"reset-form":e.doSomething}}),e._v(" "),e.visible?n("creditWrapScrapInputs"):e._e()],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);