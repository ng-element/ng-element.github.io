(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"6qls":function(e,n,t){"use strict";t.d(n,"a",function(){return l});var c=t("fXoL"),i=t("F5nt"),o=t("dran");let l=(()=>{class e{constructor(e){this.appService=e,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(e=>{this.doc=e})}}return e.\u0275fac=function(n){return new(n||e)(c.Nb(i.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(e,n){1&e&&(c.Ob(0,"div",0),c.fc(1,"marked")),2&e&&c.jc("innerHTML",c.gc(1,1,n.doc),c.rc)},pipes:[o.a],styles:[".marked{font-size:14px;line-height:2}.marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked ul{margin:0;padding:0}.marked ul>li{margin-left:20px;padding-left:4px;list-style-type:circle}.marked code{margin:0 1px;padding:.2em .4em;background:#f2f4f5;border:1px solid #f0f0f0;border-radius:3px}"],encapsulation:2}),e})()},DzGr:function(e,n,t){"use strict";t.r(n),t.d(n,"SpaceModule",function(){return Se});var c=t("ofXK"),i=t("3Pt+"),o=t("B6x6"),l=t("PZSR"),a=t("ackU"),s=t("sW8o"),r=t("gPEx"),b=t("fXoL");let d=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({imports:[[c.b,i.b,o.a,l.a,a.b,s.a,r.a]]}),e})();var p=t("PCNd"),u=t("tyNb"),f=t("QJGT"),m=t("rvuC"),S=t("r7cJ"),g=t("O+BV"),y=t("Jsda"),T=t("X2/8");function h(e,n){1&e&&(b.Tb(0,"div",6),b.Tb(1,"span"),b.yc(2,"Card name"),b.Sb(),b.Tb(3,"button",7),b.yc(4,"Operation button"),b.Sb(),b.Sb()),2&e&&(b.zb(3),b.jc("nelType","text"))}function z(e,n){if(1&e&&(b.Tb(0,"div",8),b.yc(1),b.Sb()),2&e){const e=n.$implicit;b.zb(1),b.Ac(" ","List item "+e," ")}}function w(e,n){if(1&e&&(b.Tb(0,"nel-card",3),b.wc(1,h,5,1,"ng-template",null,4,b.xc),b.wc(3,z,2,1,"div",5),b.Sb()),2&e){const e=b.pc(2),n=b.ec(2);b.jc("nelHeader",e),b.zb(3),b.jc("ngForOf",n.list)}}function v(e,n){1&e&&(b.Rb(0),b.wc(1,w,4,2,"nel-card",2),b.Qb())}let x=(()=>{class e{constructor(){this.list=[1,2,3]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Hb({type:e,selectors:[["nel-demo-space-basic"]],decls:2,vars:1,consts:[["nelWrap",""],[4,"ngFor","ngForOf"],["class","box-card","style","width: 250px",3,"nelHeader",4,"nelSpaceItem"],[1,"box-card",2,"width","250px",3,"nelHeader"],["header",""],["class","text item",4,"ngFor","ngForOf"],[1,"card-header"],["nel-button","",1,"button",3,"nelType"],[1,"text","item"]],template:function(e,n){1&e&&(b.Tb(0,"nel-space",0),b.wc(1,v,2,0,"ng-container",1),b.Sb()),2&e&&(b.zb(1),b.jc("ngForOf",n.list))},directives:[S.a,c.h,g.a,y.a,T.a],styles:[".card-header[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }"]}),e})();function j(e,n){1&e&&(b.Tb(0,"div",6),b.Tb(1,"span"),b.yc(2,"Card name"),b.Sb(),b.Tb(3,"button",7),b.yc(4,"Operation button"),b.Sb(),b.Sb()),2&e&&(b.zb(3),b.jc("nelType","text"))}function O(e,n){if(1&e&&(b.Tb(0,"div",8),b.yc(1),b.Sb()),2&e){const e=n.$implicit;b.zb(1),b.Ac(" ","List item "+e," ")}}function F(e,n){if(1&e&&(b.Tb(0,"nel-card",3),b.wc(1,j,5,1,"ng-template",null,4,b.xc),b.wc(3,O,2,1,"div",5),b.Sb()),2&e){const e=b.pc(2),n=b.ec(2);b.jc("nelHeader",e),b.zb(3),b.jc("ngForOf",n.list)}}function H(e,n){1&e&&(b.Rb(0),b.wc(1,F,4,2,"nel-card",2),b.Qb())}let C=(()=>{class e{constructor(){this.list=[1,2]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Hb({type:e,selectors:[["nel-demo-space-direction"]],decls:2,vars:2,consts:[[3,"nelDirection"],[4,"ngFor","ngForOf"],["class","box-card","style","width: 250px",3,"nelHeader",4,"nelSpaceItem"],[1,"box-card",2,"width","250px",3,"nelHeader"],["header",""],["class","text item",4,"ngFor","ngForOf"],[1,"card-header"],["nel-button","",1,"button",3,"nelType"],[1,"text","item"]],template:function(e,n){1&e&&(b.Tb(0,"nel-space",0),b.wc(1,H,2,0,"ng-container",1),b.Sb()),2&e&&(b.jc("nelDirection","vertical"),b.zb(1),b.jc("ngForOf",n.list))},directives:[S.a,c.h,g.a,y.a,T.a],styles:[".card-header[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }"]}),e})();var I=t("ASz/"),L=t("oT1V");function k(e,n){if(1&e){const e=b.Ub();b.Tb(0,"div"),b.Tb(1,"nel-radio-group",3),b.ac("ngModelChange",function(n){return b.qc(e),b.ec().size=n}),b.Tb(2,"label",4),b.yc(3,"\u8ff7\u4f60"),b.Sb(),b.Tb(4,"label",4),b.yc(5,"\u5c0f"),b.Sb(),b.Tb(6,"label",4),b.yc(7,"\u4e2d\u7b49"),b.Sb(),b.Tb(8,"label",4),b.yc(9,"\u5927\u53f7"),b.Sb(),b.Sb(),b.Sb()}if(2&e){const e=b.ec();b.zb(1),b.jc("ngModel",e.size),b.zb(1),b.jc("nelValue","mini"),b.zb(2),b.jc("nelValue","small"),b.zb(2),b.jc("nelValue","medium"),b.zb(2),b.jc("nelValue","large")}}function U(e,n){1&e&&(b.Tb(0,"div",11),b.Tb(1,"span"),b.yc(2,"Card name"),b.Sb(),b.Tb(3,"button",12),b.yc(4,"Operation button"),b.Sb(),b.Sb()),2&e&&(b.zb(3),b.jc("nelType","text"))}function A(e,n){if(1&e&&(b.Tb(0,"div",13),b.yc(1),b.Sb()),2&e){const e=n.$implicit;b.zb(1),b.Ac(" ","List item "+e," ")}}function R(e,n){if(1&e&&(b.Tb(0,"nel-card",8),b.wc(1,U,5,1,"ng-template",null,9,b.xc),b.wc(3,A,2,1,"div",10),b.Sb()),2&e){const e=b.pc(2),n=b.ec(3);b.jc("nelHeader",e),b.zb(3),b.jc("ngForOf",n.list)}}function D(e,n){1&e&&(b.Rb(0),b.wc(1,R,4,2,"nel-card",7),b.Qb())}function P(e,n){if(1&e&&(b.Tb(0,"nel-space",5),b.wc(1,D,2,0,"ng-container",6),b.Sb()),2&e){const e=b.ec();b.jc("nelSize",e.size),b.zb(1),b.jc("ngForOf",e.list)}}let M=(()=>{class e{constructor(){this.list=[1,2,3],this.size="small"}changeSize(e){this.size=e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Hb({type:e,selectors:[["nel-demo-space-size"]],decls:3,vars:3,consts:[[3,"nelDirection","nelAlignment","nelSize"],[4,"nelSpaceItem"],["nelWrap","",3,"nelSize",4,"nelSpaceItem"],[3,"ngModel","ngModelChange"],["nel-radio","",3,"nelValue"],["nelWrap","",3,"nelSize"],[4,"ngFor","ngForOf"],["class","box-card","style","width: 250px",3,"nelHeader",4,"nelSpaceItem"],[1,"box-card",2,"width","250px",3,"nelHeader"],["header",""],["class","text item",4,"ngFor","ngForOf"],[1,"card-header"],["nel-button","",1,"button",3,"nelType"],[1,"text","item"]],template:function(e,n){1&e&&(b.Tb(0,"nel-space",0),b.wc(1,k,10,5,"div",1),b.wc(2,P,2,2,"nel-space",2),b.Sb()),2&e&&b.jc("nelDirection","vertical")("nelAlignment","start")("nelSize",30)},directives:[S.a,g.a,I.a,i.d,i.e,L.a,c.h,y.a,T.a],styles:[".card-header[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }"]}),e})();function X(e,n){1&e&&(b.Tb(0,"div",7),b.Tb(1,"span"),b.yc(2,"Card name"),b.Sb(),b.Tb(3,"button",8),b.yc(4,"Operation button"),b.Sb(),b.Sb()),2&e&&(b.zb(3),b.jc("nelType","text"))}function N(e,n){if(1&e&&(b.Tb(0,"div",9),b.yc(1),b.Sb()),2&e){const e=n.$implicit;b.zb(1),b.Ac(" ","List item "+e," ")}}function V(e,n){if(1&e&&(b.Tb(0,"nel-card",4),b.wc(1,X,5,1,"ng-template",null,5,b.xc),b.wc(3,N,2,1,"div",6),b.Sb()),2&e){const e=b.pc(2),n=b.ec(2);b.jc("nelHeader",e),b.zb(3),b.jc("ngForOf",n.list)}}function Q(e,n){1&e&&(b.Rb(0),b.wc(1,V,4,2,"nel-card",3),b.Qb())}let K=(()=>{class e{constructor(){this.list=[1,2,3],this.size=20}reduce(){const e=this.size-10;this.size=e<0?0:e}increase(){const e=this.size+10;this.size=e>100?100:e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Hb({type:e,selectors:[["nel-demo-space-size-number"]],decls:8,vars:3,consts:[["nel-button","",3,"click"],["nelWrap","",3,"nelSize"],[4,"ngFor","ngForOf"],["class","box-card","style","width: 250px",3,"nelHeader",4,"nelSpaceItem"],[1,"box-card",2,"width","250px",3,"nelHeader"],["header",""],["class","text item",4,"ngFor","ngForOf"],[1,"card-header"],["nel-button","",1,"button",3,"nelType"],[1,"text","item"]],template:function(e,n){1&e&&(b.Tb(0,"div"),b.Tb(1,"button",0),b.ac("click",function(){return n.reduce()}),b.yc(2,"\u9012\u51cf"),b.Sb(),b.yc(3),b.Tb(4,"button",0),b.ac("click",function(){return n.increase()}),b.yc(5,"\u9012\u589e"),b.Sb(),b.Sb(),b.Tb(6,"nel-space",1),b.wc(7,Q,2,0,"ng-container",2),b.Sb()),2&e&&(b.zb(3),b.Ac(" ",n.size," "),b.zb(3),b.jc("nelSize",n.size),b.zb(1),b.jc("ngForOf",n.list))},directives:[T.a,S.a,c.h,g.a,y.a],styles:[".card-header[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }"]}),e})();function B(e,n){1&e&&(b.Tb(0,"div"),b.Tb(1,"button",3),b.yc(2," \u6587\u5b57\u6309\u94ae "),b.Sb(),b.Sb()),2&e&&(b.zb(1),b.jc("nelType","text"))}function W(e,n){1&e&&(b.Rb(0),b.wc(1,B,3,1,"div",2),b.Qb())}let $=(()=>{class e{constructor(){this.list=[]}ngOnInit(){for(let e=0;e<20;e++)this.list.push(e)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Hb({type:e,selectors:[["nel-demo-space-wrap"]],decls:2,vars:1,consts:[["nelWrap",""],[4,"ngFor","ngForOf"],[4,"nelSpaceItem"],["nel-button","",3,"nelType"]],template:function(e,n){1&e&&(b.Tb(0,"nel-space",0),b.wc(1,W,2,0,"ng-container",1),b.Sb()),2&e&&(b.zb(1),b.jc("ngForOf",n.list))},directives:[S.a,c.h,g.a,T.a],encapsulation:2}),e})();var E=t("7b1L");function J(e,n){if(1&e&&(b.Tb(0,"div"),b.Tb(1,"button",5),b.yc(2),b.Sb(),b.Sb()),2&e){const e=b.ec().$implicit;b.zb(2),b.Ac(" button ",e," ")}}function _(e,n){1&e&&(b.Rb(0),b.wc(1,J,3,1,"div",4),b.Qb())}function q(e,n){if(1&e&&(b.Tb(0,"div"),b.Tb(1,"button",5),b.yc(2),b.Sb(),b.Sb()),2&e){const e=b.ec().$implicit;b.zb(2),b.Ac(" button ",e," ")}}function G(e,n){1&e&&(b.Rb(0),b.wc(1,q,3,1,"div",4),b.Qb())}function Z(e,n){1&e&&b.Ob(0,"nel-divider",6),2&e&&b.jc("nelDirection","vertical")}let Y=(()=>{class e{constructor(){this.size=10,this.list=[1,2]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Hb({type:e,selectors:[["nel-demo-space-spacer"]],decls:8,vars:6,consts:[[3,"nelSize","nelSpacer"],[4,"ngFor","ngForOf"],[2,"margin-top","10px"],["spacer",""],[4,"nelSpaceItem"],["nel-button",""],[3,"nelDirection"]],template:function(e,n){if(1&e&&(b.Tb(0,"div"),b.Tb(1,"nel-space",0),b.wc(2,_,2,0,"ng-container",1),b.Sb(),b.Sb(),b.Tb(3,"div",2),b.Tb(4,"nel-space",0),b.wc(5,G,2,0,"ng-container",1),b.Sb(),b.wc(6,Z,1,1,"ng-template",null,3,b.xc),b.Sb()),2&e){const e=b.pc(7);b.zb(1),b.jc("nelSize",n.size)("nelSpacer","|"),b.zb(1),b.jc("ngForOf",n.list),b.zb(2),b.jc("nelSize",n.size)("nelSpacer",e),b.zb(1),b.jc("ngForOf",n.list)}},directives:[S.a,c.h,g.a,T.a,E.a],encapsulation:2}),e})();function ee(e,n){1&e&&(b.Tb(0,"div"),b.yc(1,"string"),b.Sb())}function ne(e,n){1&e&&(b.Tb(0,"button",5),b.yc(1," button "),b.Sb())}function te(e,n){1&e&&b.yc(0," header ")}function ce(e,n){if(1&e&&(b.Tb(0,"nel-card",6),b.wc(1,te,1,0,"ng-template",null,7,b.xc),b.yc(3," body "),b.Sb()),2&e){const e=b.pc(2);b.jc("nelHeader",e)}}function ie(e,n){1&e&&(b.Tb(0,"div"),b.yc(1,"string"),b.Sb())}function oe(e,n){1&e&&(b.Tb(0,"button",5),b.yc(1," button "),b.Sb())}function le(e,n){1&e&&b.yc(0," header ")}function ae(e,n){if(1&e&&(b.Tb(0,"nel-card",6),b.wc(1,le,1,0,"ng-template",null,7,b.xc),b.yc(3," body "),b.Sb()),2&e){const e=b.pc(2);b.jc("nelHeader",e)}}function se(e,n){1&e&&(b.Tb(0,"div"),b.yc(1,"string"),b.Sb())}function re(e,n){1&e&&(b.Tb(0,"button",5),b.yc(1," button "),b.Sb())}function be(e,n){1&e&&b.yc(0," header ")}function de(e,n){if(1&e&&(b.Tb(0,"nel-card",6),b.wc(1,be,1,0,"ng-template",null,7,b.xc),b.yc(3," body "),b.Sb()),2&e){const e=b.pc(2);b.jc("nelHeader",e)}}let pe=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Hb({type:e,selectors:[["nel-demo-space-alignment"]],decls:15,vars:2,consts:[[2,"width","240px","margin-bottom","20px","padding","8px","border","1px solid #ccc"],[4,"nelSpaceItem"],["nel-button","",4,"nelSpaceItem"],[3,"nelHeader",4,"nelSpaceItem"],[3,"nelAlignment"],["nel-button",""],[3,"nelHeader"],["header",""]],template:function(e,n){1&e&&(b.Tb(0,"div",0),b.Tb(1,"nel-space"),b.wc(2,ee,2,0,"div",1),b.wc(3,ne,2,0,"button",2),b.wc(4,ce,4,1,"nel-card",3),b.Sb(),b.Sb(),b.Tb(5,"div",0),b.Tb(6,"nel-space",4),b.wc(7,ie,2,0,"div",1),b.wc(8,oe,2,0,"button",2),b.wc(9,ae,4,1,"nel-card",3),b.Sb(),b.Sb(),b.Tb(10,"div",0),b.Tb(11,"nel-space",4),b.wc(12,se,2,0,"div",1),b.wc(13,re,2,0,"button",2),b.wc(14,de,4,1,"nel-card",3),b.Sb(),b.Sb()),2&e&&(b.zb(6),b.jc("nelAlignment","flex-start"),b.zb(5),b.jc("nelAlignment","flex-end"))},directives:[S.a,g.a,T.a,y.a],encapsulation:2}),e})();var ue=t("6qls");const fe=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=b.Hb({type:e,selectors:[["app-space"]],decls:52,vars:8,consts:[["code","import { NelSpaceModule } from 'ng-element-ui/space';"],[3,"codeUrl"],["demo",""],[3,"docUrl"]],template:function(e,n){1&e&&(b.Tb(0,"h2"),b.yc(1,"Space \u95f4\u8ddd"),b.Sb(),b.Tb(2,"p"),b.yc(3,"\u867d\u7136\u6211\u4eec\u62e5\u6709 Divider \u7ec4\u4ef6, \u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u9700\u8981\u4e0d\u662f\u4e00\u4e2a\u88ab Divider \u7ec4\u4ef6 \u5206\u5272\u5f00\u7684\u9875\u9762\u7ed3\u6784, \u56e0\u6b64\u6211\u4eec\u4f1a\u91cd\u590d\u7684\u4f7f\u7528\u5f88\u591a\u7684 Divider \u7ec4\u4ef6, \u8fd9\u5728\u6211\u4eec\u7684\u5f00\u53d1\u6548\u7387\u4e0a\u9020\u6210\u4e86\u4e00\u5b9a\u7684\u56f0\u6270, \u95f4\u8ddd\u7ec4\u4ef6\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u79cd\u56f0\u6270\u5e94\u8fd0\u800c\u751f\u7684."),b.Sb(),b.Ob(4,"app-code",0),b.Tb(5,"h3"),b.yc(6,"\u57fa\u7840\u7528\u6cd5"),b.Sb(),b.Tb(7,"p"),b.yc(8,"\u6700\u57fa\u7840\u7684\u7528\u6cd5, \u901a\u8fc7\u8fd9\u4e2a\u7ec4\u4ef6\u6765\u7ed9\u7ec4\u4ef6\u4e4b\u95f4\u63d0\u4f9b\u7edf\u4e00\u7684\u95f4\u8ddd"),b.Sb(),b.Tb(9,"app-demo",1),b.Ob(10,"nel-demo-space-basic",2),b.Sb(),b.Tb(11,"h3"),b.yc(12,"\u5782\u76f4\u5e03\u5c40"),b.Sb(),b.Tb(13,"p"),b.yc(14,"\u4f7f\u7528 direction \u6765\u63a7\u5236\u5e03\u5c40\u7684\u65b9\u5f0f, \u80cc\u540e\u5b9e\u9645\u4e0a\u662f\u5229\u7528\u4e86 flex-direction \u6765\u63a7\u5236."),b.Sb(),b.Tb(15,"app-demo",1),b.Ob(16,"nel-demo-space-direction",2),b.Sb(),b.Tb(17,"h3"),b.yc(18,"\u63a7\u5236\u95f4\u8ddd\u7684\u5927\u5c0f"),b.Sb(),b.Tb(19,"p"),b.yc(20,"\u901a\u8fc7\u8c03\u6574 size \u7684\u503c\u6765\u63a7\u5236\u95f4\u8ddd\u7684\u5927\u5c0f"),b.Sb(),b.Tb(21,"p"),b.yc(22,"\u53ef\u4f9b\u9009\u62e9\u7684\u5185\u5efa\u7684\u503c\u6709 mini, small, medium, large, \u5206\u522b\u5bf9\u5e94 4px, 8px, 12px, 16px. \u9ed8\u8ba4\u7684\u95f4\u8ddd\u5927\u5c0f\u4e3a small \u4e5f\u5c31\u662f 8px"),b.Sb(),b.Tb(23,"p"),b.yc(24,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u7684 size \u6765\u63a7\u5236\u5927\u5c0f\uff0c\u8be6\u89c1\u4e0b\u4e00\u90e8\u5206"),b.Sb(),b.Tb(25,"app-demo",1),b.Ob(26,"nel-demo-space-size",2),b.Sb(),b.Tb(27,"h3"),b.yc(28,"\u81ea\u5b9a\u4e49 Size"),b.Sb(),b.Tb(29,"p"),b.yc(30,"\u5f88\u591a\u65f6\u5019, \u5185\u5efa\u7684\u5927\u5c0f\u4e0d\u6ee1\u8db3\u8bbe\u8ba1\u5e08\u7684\u8981\u6c42, \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u81ea\u5df1\u5b9a\u4e49\u7684\u5927\u5c0f (\u6570\u5b57\u7c7b\u578b) \u6765\u8bbe\u7f6e"),b.Sb(),b.Tb(31,"app-demo",1),b.Ob(32,"nel-demo-space-size-number",2),b.Sb(),b.Tb(33,"h3"),b.yc(34,"\u81ea\u52a8\u6362\u884c"),b.Sb(),b.Tb(35,"p"),b.yc(36,"\u5728\u6c34\u5e73 (horizontal) \u6a21\u5f0f\u4e0b,\u901a\u8fc7\u63a7\u5236 wrap (\u5e03\u5c14\u7c7b\u578b) \u6765\u63a7\u5236\u662f\u5426\u81ea\u52a8\u6362\u884c"),b.Sb(),b.Tb(37,"app-demo",1),b.Ob(38,"nel-demo-space-wrap",2),b.Sb(),b.Tb(39,"h3"),b.yc(40,"\u884c\u95f4\u5206\u9694\u7b26"),b.Sb(),b.Tb(41,"p"),b.yc(42,"\u6709\u65f6\u5019, \u4ec5\u4ec5\u5728\u884c\u95f4\u52a0\u7a7a\u767d, \u5e76\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u65e5\u5e38\u9700\u6c42, \u6b64\u65f6\u5206\u9694\u7b26 (spacer) \u5c31\u53ef\u4ee5\u53d1\u6325\u975e\u5e38\u597d\u7684\u4f5c\u7528\u4e86."),b.Sb(),b.Tb(43,"app-demo",1),b.Ob(44,"nel-demo-space-spacer",2),b.Sb(),b.Tb(45,"h3"),b.yc(46,"\u5bf9\u9f50\u65b9\u5f0f"),b.Sb(),b.Tb(47,"p"),b.yc(48,"\u8bbe\u7f6e\u8be5\u503c\u53ef\u4ee5\u8c03\u6574\u6240\u6709\u5b50\u8282\u70b9\u5728\u5bb9\u5668\u5185\u7684\u5bf9\u9f50\u65b9\u5f0f, \u53ef\u8bbe\u7f6e\u7684\u503c\u4e0e align-items \u4e00\u81f4"),b.Sb(),b.Tb(49,"app-demo",1),b.Ob(50,"nel-demo-space-alignment",2),b.Sb(),b.Ob(51,"app-doc",3)),2&e&&(b.zb(9),b.jc("codeUrl","components-space-demo-basic.component"),b.zb(6),b.jc("codeUrl","components-space-demo-direction.component"),b.zb(10),b.jc("codeUrl","components-space-demo-size.component"),b.zb(6),b.jc("codeUrl","components-space-demo-size-number.component"),b.zb(6),b.jc("codeUrl","components-space-demo-wrap.component"),b.zb(6),b.jc("codeUrl","components-space-demo-spacer.component"),b.zb(6),b.jc("codeUrl","components-space-demo-alignment.component"),b.zb(2),b.jc("docUrl","components-space"))},directives:[f.a,m.a,x,C,M,K,$,Y,pe,ue.a],encapsulation:2}),e})()}];let me=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({imports:[[u.f.forChild(fe)],u.f]}),e})(),Se=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({imports:[[d,p.a,me]]}),e})()},FCkB:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var c=t("fXoL");const i=["*"];let o=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["nel-button-group"]],hostAttrs:[1,"el-button-group"],ngContentSelectors:i,decls:1,vars:0,template:function(e,n){1&e&&(c.ic(),c.hc(0))},encapsulation:2}),e})()},"X2/8":function(e,n,t){"use strict";t.d(n,"a",function(){return d});var c=t("mrSG"),i=t("O7xw"),o=t("fXoL"),l=t("ofXK");const a=["nel-button",""];function s(e,n){if(1&e&&o.Ob(0,"i"),2&e){const e=o.ec();o.Cb("el-icon-",e.nelIcon,"")}}function r(e,n){1&e&&o.Ob(0,"i",2)}const b=["*"];let d=(()=>{class e{constructor(e,n){this.elementRef=e,this.renderer=n,this.nelType="",this.nelPlain=!1,this.nelRound=!1,this.nelIcon="",this.nelCircle=!1,this.nelDisabled=!1,this.nelLoading=!1,this.nelSize=""}set disabled(e){(""===e||e)&&(this.nelDisabled=!0)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}insertSpan(e,n){e.forEach(e=>{if("#text"===e.nodeName){const t=n.createElement("span"),c=n.parentNode(e);n.insertBefore(c,t,e),n.appendChild(t,e)}})}}return e.\u0275fac=function(n){return new(n||e)(o.Nb(o.l),o.Nb(o.E))},e.\u0275cmp=o.Hb({type:e,selectors:[["button","nel-button",""]],hostVars:30,hostBindings:function(e,n){2&e&&o.Fb("el-button",!0)("el-button--primary","primary"===n.nelType)("el-button--success","success"===n.nelType)("el-button--info","info"===n.nelType)("el-button--warning","warning"===n.nelType)("el-button--danger","danger"===n.nelType)("is-plain",n.nelPlain)("is-round",n.nelRound)("is-circle",n.nelCircle)("is-disabled",n.nelDisabled)("el-button--text","text"===n.nelType)("is-loading",n.nelLoading)("el-button--medium","medium"===n.nelSize)("el-button--small","small"===n.nelSize)("el-button--mini","mini"===n.nelSize)},inputs:{nelType:"nelType",nelPlain:"nelPlain",nelRound:"nelRound",nelIcon:"nelIcon",nelCircle:"nelCircle",disabled:"disabled",nelLoading:"nelLoading",nelSize:"nelSize"},attrs:a,ngContentSelectors:b,decls:3,vars:2,consts:[[3,"class",4,"ngIf"],["class","el-icon-loading",4,"ngIf"],[1,"el-icon-loading"]],template:function(e,n){1&e&&(o.ic(),o.wc(0,s,1,3,"i",0),o.wc(1,r,1,0,"i",1),o.hc(2)),2&e&&(o.jc("ngIf",n.nelIcon),o.zb(1),o.jc("ngIf",n.nelLoading))},directives:[l.i],encapsulation:2}),Object(c.a)([Object(i.a)()],e.prototype,"nelPlain",void 0),Object(c.a)([Object(i.a)()],e.prototype,"nelRound",void 0),Object(c.a)([Object(i.a)()],e.prototype,"nelCircle",void 0),Object(c.a)([Object(i.a)()],e.prototype,"nelLoading",void 0),e})()},ackU:function(e,n,t){"use strict";t.d(n,"a",function(){return c.a}),t.d(n,"b",function(){return a}),t("X2/8");var c=t("FCkB"),i=t("ofXK"),o=t("aA8y"),l=t("fXoL");let a=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({imports:[[i.b,o.a]]}),e})()}}]);