(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"z/Gc":function(e,n,t){"use strict";t.r(n),t.d(n,"SliderModule",function(){return C});var o=t("ofXK"),s=t("3Pt+"),l=t("fXoL"),i=t("xgIS"),c=t("aPcf");const r=["runway"];function a(e,n){1&e&&l.Ob(0,"div",8),2&e&&l.vc("left",n.$implicit)}function d(e,n){if(1&e&&(l.Tb(0,"div"),l.wc(1,a,1,2,"div",7),l.Sb()),2&e){const e=l.ec();l.zb(1),l.jc("ngForOf",e.stops)}}let b=(()=>{class e{constructor(e,n){this.cdr=n,this.min=0,this.max=100,this.disabled=!1,this.step=1,this.showTooltip=!0,this.placement="top",this.showStops=!1,this.runway={width:0,left:0},this.progress="0%",this.value=0,this.change=e=>{},this.stops=[],this.dc=e}writeValue(e){e!==this.value&&(this.value=e,this.progress=e+"%"),this.changeStops(),this.cdr.markForCheck()}registerOnChange(e){this.change=e}registerOnTouched(e){}ngOnDestroy(){this.moveOb&&this.moveOb.unsubscribe(),this.upOb&&this.upOb.unsubscribe()}ngAfterViewInit(){const e=this.runwayRef.nativeElement.getBoundingClientRect();this.runway={width:e.width,left:e.left}}triggerDown(){this.moveOb=Object(i.a)(this.dc,"mousemove").subscribe(e=>{const n=e.clientX-this.runway.left;let t=0;t=n<=0?0:n>=this.runway.width?100:Math.round(n*((this.max-this.min)/this.step)/this.runway.width)*this.step,this.changeVal(t)}),this.upOb=Object(i.a)(this.dc,"mouseup").subscribe(e=>{var n,t;null===(n=this.moveOb)||void 0===n||n.unsubscribe(),null===(t=this.upOb)||void 0===t||t.unsubscribe()})}runwayClick(e){const n=Math.round((this.max-this.min)/this.step*(e.clientX-this.runway.left)/this.runway.width)*this.step;this.changeVal(n)}changeVal(e){this.value=e,this.progress=e+"%",this.change(e),this.changeStops(),this.cdr.markForCheck()}formatVal(){return this.format?this.format(this.value)+"":this.value+""}changeStops(){const e=(this.max-this.min)/this.step,n=[];for(let t=this.value/this.step+1;t<e;t++)n.push(t*this.step+"%");this.stops=n}}return e.\u0275fac=function(n){return new(n||e)(l.Nb(o.d,8),l.Nb(l.h))},e.\u0275cmp=l.Hb({type:e,selectors:[["nel-slider"]],viewQuery:function(e,n){if(1&e&&l.Cc(r,1),2&e){let e;l.oc(e=l.bc())&&(n.runwayRef=e.first)}},inputs:{min:"min",max:"max",disabled:"disabled",step:"step",format:"format",showTooltip:"showTooltip",placement:"placement",showStops:"showStops"},features:[l.yb([{provide:s.c,useExisting:Object(l.T)(()=>e),multi:!0}])],decls:7,vars:8,consts:[[1,"el-slider"],[1,"el-slider__runway",3,"click"],["runway",""],[1,"el-slider__bar",2,"left","0%"],["role","slider",1,"el-slider__button-wrapper"],["nel-tooltip","",1,"el-slider__button","el-tooltip__trigger","el-tooltip__trigger",3,"nelContent","nelPlacement","nelDisabled","mousedown"],[4,"ngIf"],["class","el-slider__stop",3,"left",4,"ngFor","ngForOf"],[1,"el-slider__stop"]],template:function(e,n){1&e&&(l.Tb(0,"div",0),l.Tb(1,"div",1,2),l.ac("click",function(e){return n.runwayClick(e)}),l.Ob(3,"div",3),l.Tb(4,"div",4),l.Tb(5,"div",5),l.ac("mousedown",function(){return n.triggerDown()}),l.Sb(),l.Sb(),l.wc(6,d,2,1,"div",6),l.Sb(),l.Sb()),2&e&&(l.zb(3),l.vc("width",n.progress),l.zb(1),l.vc("left",n.progress),l.zb(1),l.jc("nelContent",n.formatVal())("nelPlacement",n.placement)("nelDisabled",!n.showTooltip),l.zb(1),l.jc("ngIf",n.showStops))},directives:[c.a,o.j,o.i],encapsulation:2,changeDetection:0}),e})();var p=t("dCyz");let u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({imports:[[o.c,p.a]]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({imports:[[o.c,s.b,u]]}),e})();var m=t("PCNd"),g=t("tyNb"),v=t("QJGT"),f=t("rvuC");let S=(()=>{class e{constructor(){this.value1=0,this.value2=0,this.value3=0,this.value4=0,this.value5=0,this.format=e=>e/100}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["nel-demo-slider-basic"]],decls:16,vars:6,consts:[[1,"slider-demo-block"],[1,"demonstration"],[3,"ngModel","ngModelChange"],[3,"ngModel","showTooltip","ngModelChange"],[3,"ngModel","format","ngModelChange"]],template:function(e,n){1&e&&(l.Tb(0,"div",0),l.Tb(1,"span",1),l.yc(2,"Default value"),l.Sb(),l.Tb(3,"nel-slider",2),l.ac("ngModelChange",function(e){return n.value1=e}),l.Sb(),l.Sb(),l.Tb(4,"div",0),l.Tb(5,"span",1),l.yc(6,"Customized initial value"),l.Sb(),l.Tb(7,"nel-slider",2),l.ac("ngModelChange",function(e){return n.value2=e}),l.Sb(),l.Sb(),l.Tb(8,"div",0),l.Tb(9,"span",1),l.yc(10,"Hide Tooltip"),l.Sb(),l.Tb(11,"nel-slider",3),l.ac("ngModelChange",function(e){return n.value3=e}),l.Sb(),l.Sb(),l.Tb(12,"div",0),l.Tb(13,"span",1),l.yc(14,"Format Tooltip"),l.Sb(),l.Tb(15,"nel-slider",4),l.ac("ngModelChange",function(e){return n.value4=e}),l.Sb(),l.Sb()),2&e&&(l.zb(3),l.jc("ngModel",n.value1),l.zb(4),l.jc("ngModel",n.value2),l.zb(4),l.jc("ngModel",n.value3)("showTooltip",!1),l.zb(4),l.jc("ngModel",n.value4)("format",n.format))},directives:[b,s.d,s.e],styles:[".slider-demo-block[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    .slider-demo-block[_ngcontent-%COMP%]   .demonstration[_ngcontent-%COMP%] {\n      font-size: 14px;\n      color: var(--el-text-color-secondary);\n      line-height: 44px;\n      flex: 1;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      margin-bottom: 0;\n    }\n    .slider-demo-block[_ngcontent-%COMP%]   .demonstration[_ngcontent-%COMP%] + nel-slider[_ngcontent-%COMP%] {\n      flex: 0 0 70%;\n    }"]}),e})(),T=(()=>{class e{constructor(){this.value1=0,this.value2=0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["nel-demo-slider-show-stops"]],decls:8,vars:5,consts:[[1,"slider-demo-block"],[1,"demonstration"],[3,"ngModel","step","ngModelChange"],[3,"ngModel","step","showStops","ngModelChange"]],template:function(e,n){1&e&&(l.Tb(0,"div",0),l.Tb(1,"span",1),l.yc(2,"Breakpoints not displayed"),l.Sb(),l.Tb(3,"nel-slider",2),l.ac("ngModelChange",function(e){return n.value1=e}),l.Sb(),l.Sb(),l.Tb(4,"div",0),l.Tb(5,"span",1),l.yc(6,"Breakpoints displayed"),l.Sb(),l.Tb(7,"nel-slider",3),l.ac("ngModelChange",function(e){return n.value2=e}),l.Sb(),l.Sb()),2&e&&(l.zb(3),l.jc("ngModel",n.value1)("step",10),l.zb(4),l.jc("ngModel",n.value2)("step",10)("showStops",!0))},directives:[b,s.d,s.e],styles:[".slider-demo-block[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    .slider-demo-block[_ngcontent-%COMP%]   .demonstration[_ngcontent-%COMP%] {\n      font-size: 14px;\n      color: var(--el-text-color-secondary);\n      line-height: 44px;\n      flex: 1;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      margin-bottom: 0;\n    }\n    .slider-demo-block[_ngcontent-%COMP%]   .demonstration[_ngcontent-%COMP%] + nel-slider[_ngcontent-%COMP%] {\n      flex: 0 0 70%;\n    }"]}),e})(),w=(()=>{class e{constructor(){this.value1=0,this.value2=0,this.value3=0,this.value4=0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["nel-demo-slider-placement"]],decls:8,vars:4,consts:[[1,"slider-demo-block"],[3,"ngModel","ngModelChange"],["placement","bottom",3,"ngModel","ngModelChange"],["placement","right",3,"ngModel","ngModelChange"],["placement","left",3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(l.Tb(0,"div",0),l.Tb(1,"nel-slider",1),l.ac("ngModelChange",function(e){return n.value1=e}),l.Sb(),l.Sb(),l.Tb(2,"div",0),l.Tb(3,"nel-slider",2),l.ac("ngModelChange",function(e){return n.value2=e}),l.Sb(),l.Sb(),l.Tb(4,"div",0),l.Tb(5,"nel-slider",3),l.ac("ngModelChange",function(e){return n.value2=e}),l.Sb(),l.Sb(),l.Tb(6,"div",0),l.Tb(7,"nel-slider",4),l.ac("ngModelChange",function(e){return n.value3=e}),l.Sb(),l.Sb()),2&e&&(l.zb(1),l.jc("ngModel",n.value1),l.zb(2),l.jc("ngModel",n.value2),l.zb(2),l.jc("ngModel",n.value2),l.zb(2),l.jc("ngModel",n.value3))},directives:[b,s.d,s.e],styles:[".slider-demo-block[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    .slider-demo-block[_ngcontent-%COMP%]   nel-slider[_ngcontent-%COMP%] {\n      flex: 1;\n    }"]}),e})();const y=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Hb({type:e,selectors:[["app-slider"]],decls:59,vars:3,consts:[["code","import { NelSliderModule } from 'ng-element-ui/slider';"],[3,"codeUrl"],["demo",""]],template:function(e,n){1&e&&(l.Tb(0,"h1"),l.yc(1,"Slider \u6ed1\u5757"),l.Sb(),l.Tb(2,"p"),l.yc(3,"\u901a\u8fc7\u62d6\u52a8\u6ed1\u5757\u5728\u4e00\u4e2a\u56fa\u5b9a\u533a\u95f4\u5185\u8fdb\u884c\u9009\u62e9"),l.Sb(),l.Ob(4,"app-code",0),l.Tb(5,"h2"),l.yc(6,"\u57fa\u7840\u7528\u6cd5"),l.Sb(),l.Tb(7,"p"),l.yc(8,"\u5728\u62d6\u52a8\u6ed1\u5757\u65f6\uff0c\u663e\u793a\u5f53\u524d\u503c"),l.Sb(),l.Tb(9,"p"),l.yc(10,"\u901a\u8fc7\u8bbe\u7f6e\u7ed1\u5b9a\u503c\u81ea\u5b9a\u4e49\u6ed1\u5757\u7684\u521d\u59cb\u503c"),l.Sb(),l.Tb(11,"app-demo",1),l.Ob(12,"nel-demo-slider-basic",2),l.Sb(),l.Tb(13,"h2"),l.yc(14,"\u79bb\u6563\u503c"),l.Sb(),l.Tb(15,"p"),l.yc(16,"\u9009\u9879\u53ef\u4ee5\u662f\u79bb\u6563\u7684"),l.Sb(),l.Tb(17,"p"),l.yc(18,"\u6539\u53d8step\u7684\u503c\u53ef\u4ee5\u6539\u53d8\u6b65\u957f\uff0c \u901a\u8fc7\u8bbe\u7f6e show-stops \u5c5e\u6027\u53ef\u4ee5\u663e\u793a\u95f4\u65ad\u70b9"),l.Sb(),l.Tb(19,"app-demo",1),l.Ob(20,"nel-demo-slider-show-stops",2),l.Sb(),l.Tb(21,"h2"),l.yc(22,"\u5e26\u6709\u8f93\u5165\u6846\u7684\u6ed1\u5757"),l.Sb(),l.Tb(23,"p"),l.yc(24,"\u901a\u8fc7\u8f93\u5165\u6846\u8bbe\u7f6e\u7cbe\u786e\u6570\u503c"),l.Sb(),l.Tb(25,"p"),l.yc(26,"\u8bbe\u7f6e show-input \u5c5e\u6027\u4f1a\u5728\u53f3\u4fa7\u663e\u793a\u4e00\u4e2a\u8f93\u5165\u6846"),l.Sb(),l.Tb(27,"p"),l.yc(28,"development..."),l.Sb(),l.Tb(29,"h2"),l.yc(30,"\u4e0d\u540c\u5c3a\u5bf8"),l.Sb(),l.Tb(31,"p"),l.yc(32,"development..."),l.Sb(),l.Tb(33,"h2"),l.yc(34,"\u4f4d\u7f6e"),l.Sb(),l.Tb(35,"p"),l.yc(36,"\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49 Tooltip \u63d0\u793a\u7684\u4f4d\u7f6e\u3002"),l.Sb(),l.Tb(37,"app-demo",1),l.Ob(38,"nel-demo-slider-placement",2),l.Sb(),l.Tb(39,"h2"),l.yc(40,"\u8303\u56f4\u9009\u62e9"),l.Sb(),l.Tb(41,"p"),l.yc(42,"\u652f\u6301\u9009\u62e9\u67d0\u4e00\u6570\u503c\u8303\u56f4"),l.Sb(),l.Tb(43,"p"),l.yc(44,"\u914d\u7f6e range \u5c5e\u6027\u4ee5\u6fc0\u6d3b\u8303\u56f4\u9009\u62e9\u6a21\u5f0f\uff0c\u8be5\u5c5e\u6027\u7684\u7ed1\u5b9a\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u7531\u6700\u5c0f\u8fb9\u754c\u503c\u548c\u6700\u5927\u8fb9\u754c\u503c\u7ec4\u6210\u3002"),l.Sb(),l.Tb(45,"p"),l.yc(46,"development..."),l.Sb(),l.Tb(47,"h2"),l.yc(48,"\u5782\u76f4\u6a21\u5f0f"),l.Sb(),l.Tb(49,"p"),l.yc(50,"\u914d\u7f6e vertical \u5c5e\u6027\u4e3a true \u542f\u7528\u5782\u76f4\u6a21\u5f0f\u3002 \u5728\u5782\u76f4\u6a21\u5f0f\u4e0b\uff0c\u5fc5\u987b\u8bbe\u7f6e height \u5c5e\u6027\u3002"),l.Sb(),l.Tb(51,"p"),l.yc(52,"development..."),l.Sb(),l.Tb(53,"h2"),l.yc(54,"\u663e\u793a\u6807\u8bb0"),l.Sb(),l.Tb(55,"p"),l.yc(56,"\u8bbe\u7f6e marks \u5c5e\u6027\u53ef\u4ee5\u5c55\u793a\u6807\u8bb0"),l.Sb(),l.Tb(57,"p"),l.yc(58,"development..."),l.Sb()),2&e&&(l.zb(11),l.jc("codeUrl","components-slider-demo-basic.component"),l.zb(8),l.jc("codeUrl","components-slider-demo-show-stops.component"),l.zb(18),l.jc("codeUrl","components-slider-demo-placement.component"))},directives:[v.a,f.a,S,T,w],encapsulation:2}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({imports:[[g.i.forChild(y)],g.i]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({imports:[[o.c,h,m.a,M]]}),e})()}}]);