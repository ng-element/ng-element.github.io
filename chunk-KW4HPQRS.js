import{a as K,e as w,i as C,l as Q}from"./chunk-AQGOD4VY.js";import{b as F}from"./chunk-FFGJMO62.js";import{m as V,n as G,o as q,q as z,r as H,t as J}from"./chunk-JOIXMEFZ.js";import"./chunk-JYBRZQRP.js";import{$a as k,Da as o,Ea as l,Fa as f,G as P,I as _,Ka as j,La as W,Qb as A,Ua as g,Va as L,Ya as d,Za as p,_a as h,ca as r,da as N,g as M,gb as O,l as E,la as m,ma as y,ra as b,s as I,sb as U,va as s,wa as x,xa as B,zb as R}from"./chunk-UJIEDWPF.js";function le(e,c){if(e&1&&(o(0,"span",7)(1,"span",8),g(2),l()()),e&2){let a=W();B("is-active",!a.data),r(2),L(a.nelInactiveText)}}function ae(e,c){e&1&&f(0,"i",9)}function re(e,c){if(e&1&&(o(0,"span",10)(1,"span",11),g(2),l()()),e&2){let a=W();B("is-active",a.data),r(2),L(a.nelActiveText)}}var u=class e{constructor(c){this.cdf=c,this.nelWidth=40,this.nelDisabled=!1,this.nelLoading=!1,this.change=a=>{}}changeSwitch(){if(!this.nelLoading&&!this.nelDisabled)if(this.nelBeforeChange){let c=this.nelBeforeChange();c instanceof M?c.subscribe(a=>{a&&(this.data=!this.data,this.change(this.data))}):c!==!1&&(this.data=!this.data,this.change(this.data))}else this.data=!this.data,this.change(this.data)}writeValue(c){c!==void 0&&(this.data=c,this.cdf.markForCheck())}registerOnChange(c){this.change=c}registerOnTouched(c){}static{this.\u0275fac=function(a){return new(a||e)(N(O))}}static{this.\u0275cmp=m({type:e,selectors:[["nel-switch"]],inputs:{nelWidth:"nelWidth",nelActiveColor:"nelActiveColor",nelInactiveColor:"nelInactiveColor",nelActiveText:"nelActiveText",nelInactiveText:"nelInactiveText",nelDisabled:"nelDisabled",nelLoading:"nelLoading",nelBeforeChange:"nelBeforeChange"},standalone:!1,features:[k([{provide:K,useExisting:P(()=>e),multi:!0}])],decls:7,vars:15,consts:[["role","switch","aria-checked","true",1,"el-switch",3,"click"],["type","checkbox","name","",1,"el-switch__input"],["class","el-switch__label el-switch__label--left",3,"is-active",4,"ngIf"],[1,"el-switch__core"],[1,"el-switch__action"],["class","el-icon-loading",4,"ngIf"],["class","el-switch__label el-switch__label--right",3,"is-active",4,"ngIf"],[1,"el-switch__label","el-switch__label--left"],["aria-hidden","true"],[1,"el-icon-loading"],[1,"el-switch__label","el-switch__label--right"],["aria-hidden","false"]],template:function(a,t){a&1&&(o(0,"div",0),j("click",function(){return t.changeSwitch()}),f(1,"input",1),b(2,le,3,3,"span",2),o(3,"span",3)(4,"div",4),b(5,ae,1,0,"i",5),l()(),b(6,re,3,3,"span",6),l()),a&2&&(B("is-disabled",t.nelLoading||t.nelDisabled)("is-checked",t.data),r(2),s("ngIf",t.nelInactiveText),r(),x("width",t.nelWidth+"px")("border-color",t.data?t.nelActiveColor:t.nelInactiveColor)("background-color",t.data?t.nelActiveColor:t.nelInactiveColor),r(),x("color",t.data?t.nelActiveColor:t.nelInactiveColor),r(),s("ngIf",t.nelLoading),r(),s("ngIf",t.nelActiveText))},dependencies:[U],encapsulation:2,changeDetection:0})}};E([F()],u.prototype,"nelDisabled",void 0);E([F()],u.prototype,"nelLoading",void 0);var X=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=_({imports:[R]})}}return e})();var Y=(()=>{class e{constructor(){this.value=!0}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["nel-demo-switch-basic"]],standalone:!1,decls:1,vars:3,consts:[[3,"ngModelChange","ngModel","nelActiveColor","nelInactiveColor"]],template:function(t,i){t&1&&(o(0,"nel-switch",0),h("ngModelChange",function(n){return p(i.value,n)||(i.value=n),n}),l()),t&2&&(d("ngModel",i.value),s("nelActiveColor","#13ce66")("nelInactiveColor","#ff4949"))},dependencies:[w,C,u],encapsulation:2})}}return e})();var Z=(()=>{class e{constructor(){this.value1=!0,this.value2=!0}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["nel-demo-switch-text"]],standalone:!1,decls:2,vars:8,consts:[[3,"ngModelChange","ngModel","nelActiveText","nelInactiveText"],[2,"display","block",3,"ngModelChange","ngModel","nelActiveColor","nelInactiveColor","nelActiveText","nelInactiveText"]],template:function(t,i){t&1&&(o(0,"nel-switch",0),h("ngModelChange",function(n){return p(i.value1,n)||(i.value1=n),n}),l(),o(1,"nel-switch",1),h("ngModelChange",function(n){return p(i.value2,n)||(i.value2=n),n}),l()),t&2&&(d("ngModel",i.value1),s("nelActiveText","\u6309\u6708\u4ED8\u8D39")("nelInactiveText","\u6309\u5E74\u4ED8\u8D39"),r(),d("ngModel",i.value2),s("nelActiveColor","#13ce66")("nelInactiveColor","#ff4949")("nelActiveText","\u6309\u6708\u4ED8\u8D39")("nelInactiveText","\u6309\u5E74\u4ED8\u8D39"))},dependencies:[w,C,u],styles:["[_nghost-%COMP%]     .el-switch{margin:20px 20px 20px 0}"]})}}return e})();var $=(()=>{class e{constructor(){this.value1=!0,this.value2=!1}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["nel-demo-switch-disabled"]],standalone:!1,decls:2,vars:2,consts:[["nelDisabled","",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(o(0,"nel-switch",0),h("ngModelChange",function(n){return p(i.value1,n)||(i.value1=n),n}),l(),o(1,"nel-switch",0),h("ngModelChange",function(n){return p(i.value2,n)||(i.value2=n),n}),l()),t&2&&(d("ngModel",i.value1),r(),d("ngModel",i.value2))},dependencies:[w,C,u],styles:["[_nghost-%COMP%]     .el-switch{margin:20px 20px 20px 0}"]})}}return e})();var ee=(()=>{class e{constructor(){this.value1=!0,this.value2=!1}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["nel-demo-switch-loading"]],standalone:!1,decls:2,vars:2,consts:[["nelLoading","",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(o(0,"nel-switch",0),h("ngModelChange",function(n){return p(i.value1,n)||(i.value1=n),n}),l(),o(1,"nel-switch",0),h("ngModelChange",function(n){return p(i.value2,n)||(i.value2=n),n}),l()),t&2&&(d("ngModel",i.value1),r(),d("ngModel",i.value2))},dependencies:[w,C,u],styles:["[_nghost-%COMP%]     .el-switch{margin:20px 20px 20px 0}"]})}}return e})();var te=(()=>{class e{constructor(a){this.message=a,this.value1=!0,this.value2=!1,this.loading1=!1,this.loading2=!1,this.beforeChange1=()=>new M(t=>(this.loading1=!0,this.switchBeforeSub1=I(1e3).subscribe(()=>{this.loading1=!1,this.message.success("\u5207\u6362\u6210\u529F"),t.next(!0),t.complete()}),this.switchBeforeSub1)),this.beforeChange2=()=>new M(t=>(this.loading2=!0,this.switchBeforeSub2=I(1e3).subscribe(()=>{this.loading2=!1,this.message.error("\u5207\u6362\u5931\u8D25"),t.next(!1),t.complete()}),this.switchBeforeSub2))}ngOnDestroy(){this.switchBeforeSub1&&this.switchBeforeSub1.unsubscribe(),this.switchBeforeSub2&&this.switchBeforeSub2.unsubscribe()}static{this.\u0275fac=function(t){return new(t||e)(N(V))}}static{this.\u0275cmp=m({type:e,selectors:[["nel-demo-switch-before"]],standalone:!1,decls:2,vars:6,consts:[[3,"ngModelChange","ngModel","nelLoading","nelBeforeChange"]],template:function(t,i){t&1&&(o(0,"nel-switch",0),h("ngModelChange",function(n){return p(i.value1,n)||(i.value1=n),n}),l(),o(1,"nel-switch",0),h("ngModelChange",function(n){return p(i.value2,n)||(i.value2=n),n}),l()),t&2&&(d("ngModel",i.value1),s("nelLoading",i.loading1)("nelBeforeChange",i.beforeChange1),r(),d("ngModel",i.value2),s("nelLoading",i.loading2)("nelBeforeChange",i.beforeChange2))},dependencies:[w,C,u],styles:["[_nghost-%COMP%]     .el-switch{margin:20px 20px 20px 0}"]})}}return e})();var ie=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=_({imports:[Q,X,G]})}}return e})();var ne=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["app-switch"]],standalone:!1,decls:26,vars:6,consts:[["code","import { NelSwitchModule } from 'ng-element-ui/switch';"],[3,"codeUrl"],["demo",""],[3,"docUrl"]],template:function(t,i){t&1&&(o(0,"h2"),g(1,"Switch \u5F00\u5173"),l(),o(2,"p"),g(3,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002"),l(),f(4,"app-code",0),o(5,"h3"),g(6,"\u57FA\u7840\u7528\u6CD5"),l(),o(7,"app-demo",1),f(8,"nel-demo-switch-basic",2),l(),o(9,"h3"),g(10,"\u6587\u5B57\u63CF\u8FF0"),l(),o(11,"app-demo",1),f(12,"nel-demo-switch-text",2),l(),o(13,"h3"),g(14,"\u7981\u7528\u72B6\u6001"),l(),o(15,"app-demo",1),f(16,"nel-demo-switch-disabled",2),l(),o(17,"h3"),g(18,"\u52A0\u8F7D\u4E2D"),l(),o(19,"app-demo",1),f(20,"nel-demo-switch-loading",2),l(),o(21,"h3"),g(22,"\u963B\u6B62\u5207\u6362"),l(),o(23,"app-demo",1),f(24,"nel-demo-switch-before",2),l(),f(25,"app-doc",3)),t&2&&(r(7),s("codeUrl","components-switch-demo-basic.component"),r(4),s("codeUrl","components-switch-demo-text.component"),r(4),s("codeUrl","components-switch-demo-disabled.component"),r(4),s("codeUrl","components-switch-demo-loading.component"),r(4),s("codeUrl","components-switch-demo-before.component"),r(2),s("docUrl","components-switch"))},dependencies:[Y,Z,$,ee,te,q,z,H],encapsulation:2})}}return e})();var he=[{path:"",component:ne}],oe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=_({imports:[A.forChild(he),A]})}}return e})();var nt=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=y({type:e})}static{this.\u0275inj=_({imports:[ie,J,oe]})}}return e})();export{nt as SwitchModule};
