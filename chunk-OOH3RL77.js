import{c as B,i as P,j as T,o as k,q as I,t as O}from"./chunk-JOIXMEFZ.js";import"./chunk-JYBRZQRP.js";import{Da as i,Ea as l,Fa as n,I as r,Ja as M,Ka as C,La as _,O as w,P as N,Q as v,Qb as y,Ua as p,Va as S,W as E,ca as d,da as b,la as s,ma as c,ra as h,rb as D,sb as F,va as u,zb as g}from"./chunk-UJIEDWPF.js";function U(e,f){e&1&&(i(0,"i",14),v(),i(1,"svg",15),n(2,"path",16),l()())}function X(e,f){if(e&1){let a=M();i(0,"li",11),C("click",function(){let o=w(a).$implicit,x=_().index,H=_();return N(H.selectedOption(o,x))}),i(1,"span",12),p(2),l(),h(3,U,3,0,"i",13),l()}if(e&2){let a=f.$implicit;d(2),S(a.label),d(),u("ngIf",(a.children==null?null:a.children.length)>0)}}function Y(e,f){if(e&1&&(i(0,"div",3)(1,"div",4)(2,"ul",5),h(3,X,4,2,"li",6),l()(),i(4,"div",7),n(5,"div",8),l(),i(6,"div",9),n(7,"div",10),l()()),e&2){let a=f.$implicit;d(3),u("ngForOf",a)}}var R=(()=>{class e{constructor(){this.menuList=[]}selectedOption(a,t){a.children?.length>0&&(t<this.menuList.length-1&&this.menuList.splice(t+1),this.menuList.push(a.children))}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["nel-cascader-panel"]],hostAttrs:["tabindex","-1","aria-hidden","false","role","tooltip",1,"el-popper","is-pure","is-light","el-cascader__dropdown"],standalone:!1,decls:3,vars:1,consts:[[1,"el-cascader-panel"],["class","el-scrollbar el-cascader-menu","role","menu",4,"ngFor","ngForOf"],["data-popper-arrow","",1,"el-popper__arrow",2,"position","absolute","left","35px"],["role","menu",1,"el-scrollbar","el-cascader-menu"],[1,"el-cascader-menu__wrap","el-scrollbar__wrap","el-scrollbar__wrap--hidden-default"],[1,"el-scrollbar__view","el-cascader-menu__list"],["role","menuitem","aria-haspopup","true","aria-owns","cascader-menu-1577-0","aria-expanded","false","tabindex","-1","class","el-cascader-node",3,"click",4,"ngFor","ngForOf"],[1,"el-scrollbar__bar","is-horizontal",2,"display","none"],[1,"el-scrollbar__thumb",2,"transform","translateX(0%)"],[1,"el-scrollbar__bar","is-vertical",2,"display","none"],[1,"el-scrollbar__thumb",2,"transform","translateY(0%)"],["role","menuitem","aria-haspopup","true","aria-owns","cascader-menu-1577-0","aria-expanded","false","tabindex","-1",1,"el-cascader-node",3,"click"],[1,"el-cascader-node__label"],["class","el-icon arrow-right el-cascader-node__postfix",4,"ngIf"],[1,"el-icon","arrow-right","el-cascader-node__postfix"],["viewBox","0 0 1024 1024","xmlns","http://www.w3.org/2000/svg"],["fill","currentColor","d","M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"]],template:function(t,o){t&1&&(i(0,"div",0),h(1,Y,8,1,"div",1),l(),n(2,"span",2)),t&2&&(d(),u("ngForOf",o.menuList))},dependencies:[D,F],encapsulation:2})}}return e})();var L=(()=>{class e{constructor(a,t,o){this.elementRef=a,this.overlayPositionBuilder=t,this.overlay=o,this.options=[],this.isOpened=!1}ngOnDestroy(){this.outsideSub&&this.outsideSub.unsubscribe()}open(){if(this.isOpened)return;this.isOpened=!0;let a={originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},t=this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withPositions([a]);if(this.overlayRef=this.overlay.create({positionStrategy:t}),this.overlayRef){let o=this.overlayRef.attach(new B(R));o.instance.menuList=[this.options],this.outsideSub=this.overlayRef.outsidePointerEvents().subscribe(()=>{this.close()})}}close(){this.overlayRef?.detach(),this.isOpened=!1}static{this.\u0275fac=function(t){return new(t||e)(b(E),b(P),b(T))}}static{this.\u0275cmp=s({type:e,selectors:[["nel-cascader"]],hostAttrs:[1,"el-cascader","el-tooltip__trigger","el-tooltip__trigger"],hostBindings:function(t,o){t&1&&C("click",function(){return o.open()})},inputs:{options:"options"},standalone:!1,decls:8,vars:0,consts:[[1,"el-input","el-input--suffix"],[1,"el-input__wrapper"],["type","text","readonly","","autocomplete","off","tabindex","0","placeholder","Select","aria-expanded","false",1,"el-input__inner"],[1,"el-input__suffix"],[1,"el-input__suffix-inner"],[1,"el-icon","el-input__icon","icon-arrow-down"],["viewBox","0 0 1024 1024","xmlns","http://www.w3.org/2000/svg"],["fill","currentColor","d","M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"div",1),n(2,"input",2),i(3,"span",3)(4,"span",4)(5,"i",5),v(),i(6,"svg",6),n(7,"path",7),l()()()()()())},encapsulation:2})}}return e})();var j=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=r({imports:[g]})}}return e})();var A=(()=>{class e{constructor(){this.options=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]},{value:"resource",label:"Resource",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"docs",label:"Design Documentation"}]}]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["nel-demo-cascader-basic"]],standalone:!1,decls:1,vars:1,consts:[[3,"options"]],template:function(t,o){t&1&&n(0,"nel-cascader",0),t&2&&u("options",o.options)},dependencies:[L],encapsulation:2})}}return e})();var V=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=r({imports:[g,j]})}}return e})();var z=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-cascader"]],standalone:!1,decls:11,vars:1,consts:[["code","import { NelCascaderModule } from 'ng-element-ui/cascader';"],[3,"codeUrl"],["demo",""]],template:function(t,o){t&1&&(i(0,"h2"),p(1,"Cascader \u7EA7\u8054\u9009\u62E9\u5668"),l(),i(2,"p"),p(3,"\u5F53\u4E00\u4E2A\u6570\u636E\u96C6\u5408\u6709\u6E05\u6670\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF0C\u53EF\u901A\u8FC7\u7EA7\u8054\u9009\u62E9\u5668\u9010\u7EA7\u67E5\u770B\u5E76\u9009\u62E9\u3002"),l(),n(4,"app-code",0),i(5,"h3"),p(6,"\u57FA\u7840\u7528\u6CD5"),l(),i(7,"p"),p(8,"\u6709\u4E24\u79CD\u89E6\u53D1\u5B50\u83DC\u5355\u7684\u65B9\u5F0F"),l(),i(9,"app-demo",1),n(10,"nel-demo-cascader-basic",2),l()),t&2&&(d(9),u("codeUrl","components-cascader-demo-basic.component"))},dependencies:[A,k,I],encapsulation:2})}}return e})();var J=[{path:"",component:z}],G=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=r({imports:[y.forChild(J),y]})}}return e})();var Fe=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=c({type:e})}static{this.\u0275inj=r({imports:[V,O,G]})}}return e})();export{Fe as CascaderModule};
