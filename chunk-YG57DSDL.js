import{b as z}from"./chunk-KOIR5LAD.js";import{b as R,c as E,d as V,e as W,f as G,g as P,h as U,j as q,k as L,l as k,m as O}from"./chunk-AQGOD4VY.js";import{a as Q,c as T}from"./chunk-Y54HNU3H.js";import"./chunk-FFGJMO62.js";import"./chunk-XRBZUWDJ.js";import{o as j,q as B,t as A}from"./chunk-LJRBPGSW.js";import"./chunk-JYBRZQRP.js";import{Da as i,Ea as n,Fa as d,I as a,La as _,Ma as C,Na as h,Pa as F,Qb as x,Ra as y,Sa as N,Ua as m,Wa as D,ca as l,la as s,ma as p,ra as v,sb as S,va as u,wa as M,xa as I,zb as w}from"./chunk-UJIEDWPF.js";var ee=["*"];function te(e,$){if(e&1&&(i(0,"label",4),m(1),n()),e&2){let o=_();M("width",o.labelWidth),l(),D(" ",o.label," ")}}function oe(e,$){e&1&&(i(0,"div",5),m(1,"Please input correct email address"),n())}var b=(()=>{class e{constructor(){this.isError=!1}ngOnDestroy(){this.statusSub&&this.statusSub.unsubscribe()}ngAfterContentInit(){this.defaultValidateControl&&(this.statusSub=this.defaultValidateControl.statusChanges?.subscribe(o=>{this.isError=o==="INVALID"}))}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["nel-form-item"]],contentQueries:function(t,r,g){if(t&1&&F(g,V,5),t&2){let c;y(c=N())&&(r.defaultValidateControl=c.first)}},inputs:{label:"label"},standalone:!1,ngContentSelectors:ee,decls:5,vars:6,consts:[[1,"el-form-item","asterisk-left"],["id","el-id-1383-38","for","el-id-1383-97","class","el-form-item__label",3,"width",4,"ngIf"],[1,"el-form-item__content"],["class","el-form-item__error",4,"ngIf"],["id","el-id-1383-38","for","el-id-1383-97",1,"el-form-item__label"],[1,"el-form-item__error"]],template:function(t,r){t&1&&(C(),i(0,"div",0),v(1,te,2,3,"label",1),i(2,"div",2),h(3),v(4,oe,2,0,"div",3),n()()),t&2&&(I("is-error",r.isError),l(),u("ngIf",r.label),l(),M("margin-left",r.label?"inherit":r.labelWidth),l(2),u("ngIf",r.isError))},dependencies:[S],encapsulation:2})}}return e})();var ne=["*"],H=(()=>{class e{ngAfterContentInit(){this.items&&this.items.toArray().forEach(o=>{o.labelWidth=this.labelWidth})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["nel-form"]],contentQueries:function(t,r,g){if(t&1&&F(g,b,4),t&2){let c;y(c=N())&&(r.items=c)}},inputs:{labelWidth:[0,"label-width","labelWidth"]},standalone:!1,ngContentSelectors:ne,decls:2,vars:0,consts:[[1,"el-form","el-form--default","el-form--label-right"]],template:function(t,r){t&1&&(C(),i(0,"form",0),h(1),n())},encapsulation:2})}}return e})();var J=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=a({imports:[w]})}}return e})();var K=(()=>{class e{constructor(){this.activityForm=new P({name:new U("",[E.required,E.maxLength(6)])})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["nel-demo-form-basic"]],standalone:!1,decls:10,vars:3,consts:[[3,"formGroup","label-width"],["label","Activity name"],[1,"el-input"],[1,"el-input__wrapper"],["type","text","autocomplete","off","tabindex","0","formControlName","name",1,"el-input__inner"],["nel-button","",3,"nelType"],["nel-button",""]],template:function(t,r){t&1&&(i(0,"nel-form",0)(1,"nel-form-item",1)(2,"div",2)(3,"div",3),d(4,"input",4),n()()(),i(5,"nel-form-item")(6,"button",5),m(7,"Create"),n(),i(8,"button",6),m(9,"Cancel"),n()()()),t&2&&(u("formGroup",r.activityForm)("label-width","120px"),l(6),u("nelType","primary"))},dependencies:[R,W,G,q,L,H,b,Q],encapsulation:2})}}return e})();var X=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=a({imports:[k,O,J,z,T]})}}return e})();var Y=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-form"]],standalone:!1,decls:9,vars:1,consts:[["code","import { NelFormModule } from 'ng-element-ui/form';"],[3,"codeUrl"],["demo",""]],template:function(t,r){t&1&&(i(0,"h2"),m(1,"Form \u8868\u5355"),n(),i(2,"p"),m(3,"\u8868\u5355\u5305\u542B \u8F93\u5165\u6846, \u5355\u9009\u6846, \u4E0B\u62C9\u9009\u62E9, \u591A\u9009\u6846 \u7B49\u7528\u6237\u8F93\u5165\u7684\u7EC4\u4EF6\u3002 \u4F7F\u7528\u8868\u5355\uFF0C\u60A8\u53EF\u4EE5\u6536\u96C6\u3001\u9A8C\u8BC1\u548C\u63D0\u4EA4\u6570\u636E\u3002"),n(),d(4,"app-code",0),i(5,"h3"),m(6,"\u5178\u578B\u8868\u5355"),n(),i(7,"app-demo",1),d(8,"nel-demo-form-basic",2),n()),t&2&&(l(7),u("codeUrl","components-form-demo-basic.component"))},dependencies:[K,j,B],encapsulation:2})}}return e})();var le=[{path:"",component:Y}],Z=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=a({imports:[x.forChild(le),x]})}}return e})();var ke=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=a({imports:[X,A,Z]})}}return e})();export{ke as FormModule};