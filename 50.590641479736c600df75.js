(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"6qls":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var c=n("fXoL"),i=n("F5nt"),a=n("dran");let l=(()=>{class e{constructor(e){this.appService=e,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(e=>{this.doc=e})}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(i.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(e,t){1&e&&(c.Nb(0,"div",0),c.ec(1,"marked")),2&e&&c.ic("innerHTML",c.fc(1,1,t.doc),c.pc)},pipes:[a.a],styles:[".marked{font-size:14px;line-height:2}.marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked ul{margin:0;padding:0}.marked ul>li{margin-left:20px;padding-left:4px;list-style-type:circle}.marked code{margin:0 1px;padding:.2em .4em;background:#f2f4f5;border:1px solid #f0f0f0;border-radius:3px}"],encapsulation:2}),e})()},hO9l:function(e,t,n){"use strict";n.r(t),n.d(t,"TabsModule",function(){return K});var c=n("ofXK"),i=n("3Pt+"),a=n("mrSG"),l=n("fXoL"),b=n("O7xw");function o(e,t){1&e&&l.gc(0)}function s(e,t){1&e&&l.Ob(0)}const r=["*"];let d=(()=>{class e{constructor(){this.active=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["nel-tab-pane"]],viewQuery:function(e,t){if(1&e&&l.Ac(l.L,3),2&e){let e;l.mc(e=l.ac())&&(t.content=e.first)}},inputs:{nelLabel:"nelLabel"},ngContentSelectors:r,decls:3,vars:3,consts:[[1,"el-tab-pane"],[4,"ngTemplateOutlet"]],template:function(e,t){1&e&&(l.hc(),l.uc(0,o,1,0,"ng-template"),l.Sb(1,"div",0),l.uc(2,s,1,0,"ng-container",1),l.Rb()),2&e&&(l.zb(1),l.tc("display",t.active?"":"none"),l.zb(1),l.ic("ngTemplateOutlet",t.content))},directives:[c.n],encapsulation:2}),e})();var p=n("72Au");const h=["navScroll"],u=["navScrollPosition"],f=["tabItem"];function m(e,t){1&e&&l.Ob(0)}function g(e,t){if(1&e&&(l.Qb(0),l.uc(1,m,1,0,"ng-container",3),l.Pb()),2&e){l.dc();const e=l.nc(6);l.zb(1),l.ic("ngTemplateOutlet",e)}}function S(e,t){1&e&&l.Ob(0)}function w(e,t){if(1&e&&(l.Qb(0),l.uc(1,S,1,0,"ng-container",3),l.Pb()),2&e){l.dc();const e=l.nc(6);l.zb(1),l.ic("ngTemplateOutlet",e)}}function v(e,t){if(1&e){const e=l.Tb();l.Sb(0,"span",10),l.Zb("click",function(){return l.oc(e),l.dc(2).edit()}),l.Nb(1,"i",11),l.Rb()}}function T(e,t){1&e&&(l.Qb(0),l.Sb(1,"span",12),l.Nb(2,"i",13),l.Rb(),l.Sb(3,"span",14),l.Nb(4,"i",15),l.Rb(),l.Pb())}function R(e,t){if(1&e&&l.Nb(0,"div"),2&e){const e=l.dc(2);l.Cb("el-tabs__active-bar is-",e.nelTabPosition,""),l.tc("width",e.activeBar.width)("height",e.activeBar.height)("transform",e.activeBar.transform)}}function z(e,t){if(1&e&&(l.Qb(0),l.wc(1),l.Pb()),2&e){const e=l.dc(2).$implicit;l.zb(1),l.xc(e.nelLabel)}}function x(e,t){if(1&e&&(l.Qb(0),l.uc(1,z,2,1,"ng-container",19),l.Pb()),2&e){const e=l.dc().$implicit;l.zb(1),l.ic("stringTemplate",e.nelLabel)}}function I(e,t){if(1&e){const e=l.Tb();l.Sb(0,"span",20),l.Zb("click",function(t){l.oc(e);const n=l.dc().index;return l.dc(2).remove(t,n)}),l.Rb()}}function y(e,t){if(1&e){const e=l.Tb();l.Qb(0),l.Sb(1,"div",16,17),l.Zb("click",function(){l.oc(e);const n=t.index;return l.dc(2).selecteTab(n)}),l.uc(3,x,2,1,"ng-container",0),l.uc(4,I,1,0,"span",18),l.Rb(),l.Pb()}if(2&e){const e=t.$implicit,n=t.index,c=l.dc(2);l.zb(1),l.Cb("el-tabs__item is-",c.nelTabPosition,""),l.Eb("is-active",n==c.nelSelectedIndex)("is-closable","card"==c.nelType&&c.nelEditable),l.zb(2),l.ic("ngIf",e.nelLabel),l.zb(1),l.ic("ngIf","card"==c.nelType&&c.nelEditable)}}function L(e,t){if(1&e&&(l.Sb(0,"div"),l.uc(1,v,2,0,"span",4),l.Sb(2,"div"),l.uc(3,T,5,0,"ng-container",0),l.Sb(4,"div",5,6),l.Sb(6,"div",null,7),l.uc(8,R,1,9,"div",8),l.uc(9,y,5,9,"ng-container",9),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e){const e=l.dc();l.Cb("el-tabs__header is-",e.nelTabPosition,""),l.zb(1),l.ic("ngIf","card"==e.nelType&&e.nelEditable),l.zb(1),l.Cb("el-tabs__nav-wrap is-",e.nelTabPosition,""),l.Eb("is-scrollable",e.scrollable),l.zb(1),l.ic("ngIf",e.scrollable),l.zb(3),l.Cb("el-tabs__nav is-",e.nelTabPosition,""),l.tc("transform",e.scrollTransform),l.zb(2),l.ic("ngIf",!e.nelType),l.zb(1),l.ic("ngForOf",e.items)}}const P=["*"];let k=(()=>{class e{constructor(e){this.cdr=e,this._tabLabelCount=0,this._tabItems=[],this.activeBar={width:"",height:"",transform:""},this.scrollable=!1,this.scrollTransform="",this.nelSelectedIndex=0,this.nelTabPosition="top",this.nelEditable=!1,this.nelSelectedIndexChange=new l.n,this.nelOnEdit=new l.n}ngAfterContentInit(){this._tabLabelCount=this.items.length,setTimeout(()=>{this.changeTabPane()},0)}ngAfterContentChecked(){this._tabLabelCount!==this.items.length&&(this.ngAfterViewInit(),this.ngAfterContentInit())}ngAfterViewInit(){this.nelType||(this._tabItems=[],this.tabItems.forEach(e=>{this._tabItems.push({width:e.nativeElement.offsetWidth,height:e.nativeElement.offsetHeight})})),this.changeScroll(),this.changeTab(!0)}ngOnChanges(e){const{nelTabPosition:t}=e;t&&!t.firstChange&&setTimeout(()=>{this.ngAfterViewInit()},0)}changeTabPane(){this.items.forEach(e=>{e.active=!1});const e=this.items.get(this.nelSelectedIndex);e&&(e.active=!0)}selecteTab(e){this.nelSelectedIndex=e,this.nelSelectedIndexChange.emit(e),this.changeTab(!1),this.changeTabPane()}changeTab(e){if(!this.nelType){let t="width";"right"!==this.nelTabPosition&&"left"!==this.nelTabPosition||(t="height");let n=0,c=0,i=0;"width"===t?(this._tabItems.forEach((e,c)=>{c<this.nelSelectedIndex?i+=e[t]:c===this.nelSelectedIndex&&(n=e[t])}),this.nelSelectedIndex===this.tabItems.length-1?(i+=20,n-=20):this.nelSelectedIndex>0?(i+=20,n-=40):n-=20):this._tabItems.forEach((e,n)=>{n<this.nelSelectedIndex?i+=e[t]:n===this.nelSelectedIndex&&(c=e[t])}),e?setTimeout(()=>{this.activeBar={width:"width"===t?n+"px":"",height:"height"===t?c+"px":"",transform:"width"===t?`translateX(${i}px)`:`translateY(${i}px)`}},0):this.activeBar={width:"width"===t?n+"px":"",height:"height"===t?c+"px":"",transform:"width"===t?`translateX(${i}px)`:`translateY(${i}px)`}}}changeScroll(){setTimeout(()=>{this.navScroll.nativeElement.offsetWidth<this.navScrollPosition.nativeElement.offsetWidth?(this.scrollable=!0,this.scrollTransform=`translateX(${this.navScroll.nativeElement.offsetWidth-this.navScrollPosition.nativeElement.offsetWidth}px)`,this.cdr.markForCheck()):(this.scrollable=!1,this.scrollTransform="translateX(0px)",this.cdr.markForCheck())},0)}edit(){this.nelOnEdit.emit({index:-1,action:"add"})}remove(e,t){e.stopPropagation(),this.nelOnEdit.emit({index:t,action:"remove"})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(l.h))},e.\u0275cmp=l.Gb({type:e,selectors:[["nel-tabs"]],contentQueries:function(e,t,n){if(1&e&&l.Fb(n,d,0),2&e){let e;l.mc(e=l.ac())&&(t.items=e)}},viewQuery:function(e,t){if(1&e&&(l.Ac(h,1),l.Ac(u,1),l.Ac(f,1)),2&e){let e;l.mc(e=l.ac())&&(t.navScroll=e.first),l.mc(e=l.ac())&&(t.navScrollPosition=e.first),l.mc(e=l.ac())&&(t.tabItems=e)}},inputs:{nelSelectedIndex:"nelSelectedIndex",nelType:"nelType",nelTabPosition:"nelTabPosition",nelEditable:"nelEditable"},outputs:{nelSelectedIndexChange:"nelSelectedIndexChange",nelOnEdit:"nelOnEdit"},features:[l.xb],ngContentSelectors:P,decls:7,vars:9,consts:[[4,"ngIf"],[1,"el-tabs__content"],["tabsTpl",""],[4,"ngTemplateOutlet"],["class","el-tabs__new-tab","tabindex","0",3,"click",4,"ngIf"],[1,"el-tabs__nav-scroll"],["navScroll",""],["navScrollPosition",""],[3,"class","width","height","transform",4,"ngIf"],[4,"ngFor","ngForOf"],["tabindex","0",1,"el-tabs__new-tab",3,"click"],[1,"el-icon-plus"],[1,"el-tabs__nav-prev"],[1,"el-icon-arrow-left"],[1,"el-tabs__nav-next","is-disabled"],[1,"el-icon-arrow-right"],[3,"click"],["tabItem",""],["class","el-icon-close",3,"click",4,"ngIf"],[4,"stringTemplate"],[1,"el-icon-close",3,"click"]],template:function(e,t){1&e&&(l.hc(),l.Sb(0,"div"),l.uc(1,g,2,1,"ng-container",0),l.Sb(2,"div",1),l.gc(3),l.Rb(),l.uc(4,w,2,1,"ng-container",0),l.Rb(),l.uc(5,L,10,17,"ng-template",null,2,l.vc)),2&e&&(l.Cb("el-tabs el-tabs--",t.nelTabPosition,""),l.Eb("el-tabs--card","card"==t.nelType)("el-tabs--border-card","border-card"==t.nelType),l.zb(1),l.ic("ngIf","bottom"!=t.nelTabPosition),l.zb(3),l.ic("ngIf","bottom"==t.nelTabPosition))},directives:[c.i,c.n,c.h,p.a],encapsulation:2,changeDetection:0}),Object(a.a)([Object(b.a)()],e.prototype,"nelEditable",void 0),e})();var C=n("j9Rq");let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[c.b,C.a]]}),e})();var E=n("sW8o");let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[c.b,i.a,_,E.a]]}),e})();var N=n("PCNd"),A=n("tyNb"),U=n("QJGT"),G=n("rvuC");let M=(()=>{class e{handleClick(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["nel-demo-tabs-basic"]],decls:9,vars:4,consts:[[3,"click"],[3,"nelLabel"]],template:function(e,t){1&e&&(l.Sb(0,"nel-tabs",0),l.Zb("click",function(){return t.handleClick()}),l.Sb(1,"nel-tab-pane",1),l.wc(2,"\u7528\u6237\u7ba1\u7406"),l.Rb(),l.Sb(3,"nel-tab-pane",1),l.wc(4,"\u914d\u7f6e\u7ba1\u7406"),l.Rb(),l.Sb(5,"nel-tab-pane",1),l.wc(6,"\u89d2\u8272\u7ba1\u7406"),l.Rb(),l.Sb(7,"nel-tab-pane",1),l.wc(8,"\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"),l.Rb(),l.Rb()),2&e&&(l.zb(1),l.ic("nelLabel","\u7528\u6237\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u914d\u7f6e\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u89d2\u8272\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"))},directives:[k,d],encapsulation:2}),e})(),Q=(()=>{class e{handleClick(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["nel-demo-tabs-type"]],decls:9,vars:5,consts:[[3,"nelType","click"],[3,"nelLabel"]],template:function(e,t){1&e&&(l.Sb(0,"nel-tabs",0),l.Zb("click",function(){return t.handleClick()}),l.Sb(1,"nel-tab-pane",1),l.wc(2,"\u7528\u6237\u7ba1\u7406"),l.Rb(),l.Sb(3,"nel-tab-pane",1),l.wc(4,"\u914d\u7f6e\u7ba1\u7406"),l.Rb(),l.Sb(5,"nel-tab-pane",1),l.wc(6,"\u89d2\u8272\u7ba1\u7406"),l.Rb(),l.Sb(7,"nel-tab-pane",1),l.wc(8,"\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"),l.Rb(),l.Rb()),2&e&&(l.ic("nelType","card"),l.zb(1),l.ic("nelLabel","\u7528\u6237\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u914d\u7f6e\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u89d2\u8272\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"))},directives:[k,d],encapsulation:2}),e})(),F=(()=>{class e{handleClick(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["nel-demo-tabs-border-card"]],decls:9,vars:5,consts:[[3,"nelType","click"],[3,"nelLabel"]],template:function(e,t){1&e&&(l.Sb(0,"nel-tabs",0),l.Zb("click",function(){return t.handleClick()}),l.Sb(1,"nel-tab-pane",1),l.wc(2,"\u7528\u6237\u7ba1\u7406"),l.Rb(),l.Sb(3,"nel-tab-pane",1),l.wc(4,"\u914d\u7f6e\u7ba1\u7406"),l.Rb(),l.Sb(5,"nel-tab-pane",1),l.wc(6,"\u89d2\u8272\u7ba1\u7406"),l.Rb(),l.Sb(7,"nel-tab-pane",1),l.wc(8,"\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"),l.Rb(),l.Rb()),2&e&&(l.ic("nelType","border-card"),l.zb(1),l.ic("nelLabel","\u7528\u6237\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u914d\u7f6e\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u89d2\u8272\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"))},directives:[k,d],encapsulation:2}),e})();var V=n("ASz/"),Z=n("SZFa");let $=(()=>{class e{constructor(){this.tabPosition="right"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["nel-demo-tabs-position"]],decls:19,vars:10,consts:[[2,"margin-bottom","30px"],[3,"ngModel","ngModelChange"],["nel-radio-button","",3,"nelValue"],[3,"nelTabPosition"],[3,"nelLabel"]],template:function(e,t){1&e&&(l.Sb(0,"div",0),l.Sb(1,"nel-radio-group",1),l.Zb("ngModelChange",function(e){return t.tabPosition=e}),l.Sb(2,"label",2),l.wc(3,"top"),l.Rb(),l.Sb(4,"label",2),l.wc(5,"right"),l.Rb(),l.Sb(6,"label",2),l.wc(7,"bottom"),l.Rb(),l.Sb(8,"label",2),l.wc(9,"left"),l.Rb(),l.Rb(),l.Rb(),l.Sb(10,"nel-tabs",3),l.Sb(11,"nel-tab-pane",4),l.wc(12,"\u7528\u6237\u7ba1\u7406"),l.Rb(),l.Sb(13,"nel-tab-pane",4),l.wc(14,"\u914d\u7f6e\u7ba1\u7406"),l.Rb(),l.Sb(15,"nel-tab-pane",4),l.wc(16,"\u89d2\u8272\u7ba1\u7406"),l.Rb(),l.Sb(17,"nel-tab-pane",4),l.wc(18,"\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"),l.Rb(),l.Rb()),2&e&&(l.zb(1),l.ic("ngModel",t.tabPosition),l.zb(1),l.ic("nelValue","top"),l.zb(2),l.ic("nelValue","right"),l.zb(2),l.ic("nelValue","bottom"),l.zb(2),l.ic("nelValue","left"),l.zb(2),l.ic("nelTabPosition",t.tabPosition),l.zb(1),l.ic("nelLabel","\u7528\u6237\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u914d\u7f6e\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u89d2\u8272\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"))},directives:[V.a,i.c,i.d,Z.a,k,d],encapsulation:2}),e})();function j(e,t){1&e&&(l.Sb(0,"span"),l.Nb(1,"i",3),l.wc(2," \u6211\u7684\u884c\u7a0b"),l.Rb())}let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["nel-demo-tabs-label"]],decls:11,vars:5,consts:[[3,"nelType"],[3,"nelLabel"],["labelTpl",""],[1,"el-icon-date"]],template:function(e,t){if(1&e&&(l.Sb(0,"nel-tabs",0),l.Sb(1,"nel-tab-pane",1),l.wc(2,"\u6211\u7684\u884c\u7a0b"),l.Rb(),l.Sb(3,"nel-tab-pane",1),l.wc(4,"\u6d88\u606f\u4e2d\u5fc3"),l.Rb(),l.Sb(5,"nel-tab-pane",1),l.wc(6,"\u89d2\u8272\u7ba1\u7406"),l.Rb(),l.Sb(7,"nel-tab-pane",1),l.wc(8,"\u5b9a\u65f6\u4efb\u52a1\u8865\u507f"),l.Rb(),l.Rb(),l.uc(9,j,3,0,"ng-template",null,2,l.vc)),2&e){const e=l.nc(10);l.ic("nelType","border-card"),l.zb(1),l.ic("nelLabel",e),l.zb(2),l.ic("nelLabel","\u6d88\u606f\u4e2d\u5fc3"),l.zb(2),l.ic("nelLabel","\u89d2\u8272\u7ba1\u7406"),l.zb(2),l.ic("nelLabel","\u5b9a\u65f6\u4efb\u52a1\u8865\u507f")}},directives:[k,d],encapsulation:2}),e})();var X=n("6qls");const B=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["app-tabs"]],decls:36,vars:6,consts:[["code","import { NelTabsModule } from 'ng-element-ui/tabs';"],[3,"codeUrl"],["demo",""],[3,"docUrl"]],template:function(e,t){1&e&&(l.Sb(0,"h2"),l.wc(1,"Tabs \u6807\u7b7e\u9875"),l.Rb(),l.Sb(2,"p"),l.wc(3,"\u5206\u9694\u5185\u5bb9\u4e0a\u6709\u5173\u8054\u4f46\u5c5e\u4e8e\u4e0d\u540c\u7c7b\u522b\u7684\u6570\u636e\u96c6\u5408\u3002"),l.Rb(),l.Nb(4,"app-code",0),l.Sb(5,"h3"),l.wc(6,"\u57fa\u7840\u7528\u6cd5"),l.Rb(),l.Sb(7,"p"),l.wc(8,"\u57fa\u7840\u7684\u3001\u7b80\u6d01\u7684\u6807\u7b7e\u9875\u3002"),l.Rb(),l.Sb(9,"app-demo",1),l.Nb(10,"nel-demo-tabs-basic",2),l.Rb(),l.Sb(11,"h3"),l.wc(12,"\u9009\u9879\u5361\u6837\u5f0f"),l.Rb(),l.Sb(13,"p"),l.wc(14,"\u9009\u9879\u5361\u6837\u5f0f\u7684\u6807\u7b7e\u9875\u3002"),l.Rb(),l.Sb(15,"app-demo",1),l.Nb(16,"nel-demo-tabs-type",2),l.Rb(),l.Sb(17,"h3"),l.wc(18,"\u5361\u7247\u5316"),l.Rb(),l.Sb(19,"p"),l.wc(20,"\u5361\u7247\u5316\u7684\u6807\u7b7e\u9875\u3002"),l.Rb(),l.Sb(21,"app-demo",1),l.Nb(22,"nel-demo-tabs-border-card",2),l.Rb(),l.Sb(23,"h3"),l.wc(24,"\u4f4d\u7f6e"),l.Rb(),l.Sb(25,"p"),l.wc(26,"\u53ef\u4ee5\u901a\u8fc7 tab-position \u8bbe\u7f6e\u6807\u7b7e\u7684\u4f4d\u7f6e"),l.Rb(),l.Sb(27,"app-demo",1),l.Nb(28,"nel-demo-tabs-position",2),l.Rb(),l.Sb(29,"h3"),l.wc(30,"\u81ea\u5b9a\u4e49\u6807\u7b7e\u9875"),l.Rb(),l.Sb(31,"p"),l.wc(32,"\u53ef\u4ee5\u901a\u8fc7\u5177\u540d label \u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6807\u7b7e\u9875\u7684\u5185\u5bb9"),l.Rb(),l.Sb(33,"app-demo",1),l.Nb(34,"nel-demo-tabs-label",2),l.Rb(),l.Nb(35,"app-doc",3)),2&e&&(l.zb(9),l.ic("codeUrl","components-tabs-demo-basic.component"),l.zb(6),l.ic("codeUrl","components-tabs-demo-type.component"),l.zb(6),l.ic("codeUrl","components-tabs-demo-border-card.component"),l.zb(6),l.ic("codeUrl","components-tabs-demo-position.component"),l.zb(6),l.ic("codeUrl","components-tabs-demo-label.component"),l.zb(2),l.ic("docUrl","components-tabs"))},directives:[U.a,G.a,M,Q,F,$,J,X.a],encapsulation:2}),e})()}];let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[A.f.forChild(B)],A.f]}),e})(),K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({imports:[[O,N.a,W]]}),e})()}}]);