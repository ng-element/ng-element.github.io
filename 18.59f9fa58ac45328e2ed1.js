(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"6qls":function(t,n,i){"use strict";i.d(n,"a",function(){return s});var o=i("fXoL"),e=i("F5nt"),c=i("dran");let s=(()=>{class t{constructor(t){this.appService=t,this.docUrl="",this.doc=""}ngOnInit(){this.appService.getDoc(this.docUrl).subscribe(t=>{this.doc=t})}}return t.\u0275fac=function(n){return new(n||t)(o.Nb(e.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-doc"]],inputs:{docUrl:"docUrl"},decls:2,vars:3,consts:[[1,"marked",3,"innerHTML"]],template:function(t,n){1&t&&(o.Ob(0,"div",0),o.fc(1,"marked")),2&t&&o.jc("innerHTML",o.gc(1,1,n.doc),o.rc)},pipes:[c.a],styles:[".marked{font-size:14px;line-height:2}.marked h3{margin:55px 0 20px;font-weight:400;color:#1f2f3d;font-size:22px}.marked ul{margin:0;padding:0}.marked ul>li{margin-left:20px;padding-left:4px;list-style-type:circle}.marked code{margin:0 1px;padding:.2em .4em;background:#f2f4f5;border:1px solid #f0f0f0;border-radius:3px}"],encapsulation:2}),t})()},FCkB:function(t,n,i){"use strict";i.d(n,"a",function(){return c});var o=i("fXoL");const e=["*"];let c=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["nel-button-group"]],hostAttrs:[1,"el-button-group"],ngContentSelectors:e,decls:1,vars:0,template:function(t,n){1&t&&(o.ic(),o.hc(0))},encapsulation:2}),t})()},QJGT:function(t,n,i){"use strict";i.d(n,"a",function(){return l});var o=i("fXoL"),e=i("yqRL"),c=i("ofXK"),s=i("UXJo"),a=i("pIld");function r(t,n){if(1&t){const t=o.Ub();o.Rb(0),o.Tb(1,"div",1),o.Tb(2,"pre",2),o.Ob(3,"code",3),o.fc(4,"highlightAuto"),o.Sb(),o.Tb(5,"i",4),o.ac("cdkCopyToClipboardCopied",function(n){return o.qc(t),o.ec().copy(n)}),o.Sb(),o.Sb(),o.Qb()}if(2&t){const t=o.ec();o.zb(3),o.jc("innerHTML",o.gc(4,2,t.code),o.rc),o.zb(2),o.jc("cdkCopyToClipboard",t.code)}}let l=(()=>{class t{constructor(t){this.message=t}copy(t){t?this.message.success("\u590d\u5236\u6210\u529f"):this.message.error("\u590d\u5236\u5931\u8d25")}}return t.\u0275fac=function(n){return new(n||t)(o.Nb(e.b))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboard","cdkCopyToClipboardCopied"]],template:function(t,n){1&t&&o.wc(0,r,6,4,"ng-container",0),2&t&&o.jc("ngIf",n.code)},directives:[c.i,s.a],pipes:[a.a],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6;margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]}),t})()},"X2/8":function(t,n,i){"use strict";i.d(n,"a",function(){return p});var o=i("mrSG"),e=i("O7xw"),c=i("fXoL"),s=i("ofXK");const a=["nel-button",""];function r(t,n){if(1&t&&c.Ob(0,"i"),2&t){const t=c.ec();c.Cb("el-icon-",t.nelIcon,"")}}function l(t,n){1&t&&c.Ob(0,"i",2)}const f=["*"];let p=(()=>{class t{constructor(t,n){this.elementRef=t,this.renderer=n,this.nelType="",this.nelPlain=!1,this.nelRound=!1,this.nelIcon="",this.nelCircle=!1,this.nelDisabled=!1,this.nelLoading=!1,this.nelSize=""}set disabled(t){(""===t||t)&&(this.nelDisabled=!0)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}insertSpan(t,n){t.forEach(t=>{if("#text"===t.nodeName){const i=n.createElement("span"),o=n.parentNode(t);n.insertBefore(o,i,t),n.appendChild(i,t)}})}}return t.\u0275fac=function(n){return new(n||t)(c.Nb(c.l),c.Nb(c.E))},t.\u0275cmp=c.Hb({type:t,selectors:[["button","nel-button",""]],hostVars:30,hostBindings:function(t,n){2&t&&c.Fb("el-button",!0)("el-button--primary","primary"===n.nelType)("el-button--success","success"===n.nelType)("el-button--info","info"===n.nelType)("el-button--warning","warning"===n.nelType)("el-button--danger","danger"===n.nelType)("is-plain",n.nelPlain)("is-round",n.nelRound)("is-circle",n.nelCircle)("is-disabled",n.nelDisabled)("el-button--text","text"===n.nelType)("is-loading",n.nelLoading)("el-button--medium","medium"===n.nelSize)("el-button--small","small"===n.nelSize)("el-button--mini","mini"===n.nelSize)},inputs:{nelType:"nelType",nelPlain:"nelPlain",nelRound:"nelRound",nelIcon:"nelIcon",nelCircle:"nelCircle",disabled:"disabled",nelLoading:"nelLoading",nelSize:"nelSize"},attrs:a,ngContentSelectors:f,decls:3,vars:2,consts:[[3,"class",4,"ngIf"],["class","el-icon-loading",4,"ngIf"],[1,"el-icon-loading"]],template:function(t,n){1&t&&(c.ic(),c.wc(0,r,1,3,"i",0),c.wc(1,l,1,0,"i",1),c.hc(2)),2&t&&(c.jc("ngIf",n.nelIcon),c.zb(1),c.jc("ngIf",n.nelLoading))},directives:[s.i],encapsulation:2}),Object(o.a)([Object(e.a)()],t.prototype,"nelPlain",void 0),Object(o.a)([Object(e.a)()],t.prototype,"nelRound",void 0),Object(o.a)([Object(e.a)()],t.prototype,"nelCircle",void 0),Object(o.a)([Object(e.a)()],t.prototype,"nelLoading",void 0),t})()},ackU:function(t,n,i){"use strict";i.d(n,"a",function(){return o.a}),i.d(n,"b",function(){return a}),i("X2/8");var o=i("FCkB"),e=i("ofXK"),c=i("aA8y"),s=i("fXoL");let a=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({imports:[[e.b,c.a]]}),t})()},u2tu:function(t,n,i){"use strict";i.r(n),i.d(n,"NotificationModule",function(){return M});var o=i("WzYV"),e=i("fXoL");class c{constructor(t,n,i,o,e,c,s){this.type=t,this.id=n,this.leave=i,this.overlay=o,this.title=e,this.content=c,this.options=s,this.height=84,this.position="topRight",this.top=0,this.bottom=0,this.componentInstance=null}close(){this.componentInstance.state="done"}}var s=i("ofXK"),a=i("72Au");const r=["notificationEle"];function l(t,n){if(1&t&&e.Ob(0,"i"),2&t){const t=e.ec();e.Cb("el-notification__icon el-icon-",t.type,"")}}function f(t,n){if(1&t&&(e.Rb(0),e.yc(1),e.Qb()),2&t){const t=e.ec();e.zb(1),e.zc(t.title)}}function p(t,n){if(1&t&&(e.Rb(0),e.yc(1),e.Qb()),2&t){const t=e.ec();e.zb(1),e.zc(t.content)}}function u(t,n){if(1&t){const t=e.Ub();e.Tb(0,"div",8),e.ac("click",function(){return e.qc(t),e.ec().close()}),e.Sb()}}let b=(()=>{class t{constructor(t){this.notificationRef=t,this.id=0,this.top=16,this.bottom=16,this.showClose=!0,this.duration=3e3,this.state=""}ngOnDestroy(){this.timer&&clearTimeout(this.timer)}ngOnInit(){this.type=this.notificationRef.type,this.id=this.notificationRef.id,this.position=this.notificationRef.position,this.top=this.notificationRef.top,this.bottom=this.notificationRef.bottom,this.title=this.notificationRef.title,this.content=this.notificationRef.content,this.overlay=this.notificationRef.overlay,this.notificationRef.options&&(void 0!==this.notificationRef.options.duration&&(this.duration=this.notificationRef.options.duration),void 0!==this.notificationRef.options.showClose&&(this.showClose=this.notificationRef.options.showClose),this.notificationRef.options.onClose&&(this.onClose=this.notificationRef.options.onClose)),this.state="topRight"===this.position||"bottomRight"===this.position?"rightInto":"leftInto",this.initTimer()}ngAfterViewInit(){this.notificationRef.height=this.notificationEle.nativeElement.offsetHeight}initTimer(){this.duration>0&&(this.timer=setTimeout(()=>{this.state="leave"},this.duration))}onAnimationStart(t){"leave"===t.toState&&(clearTimeout(this.timer),this.notificationRef.leave.next({id:this.id,position:this.position}))}onAnimationDone(t){"leave"===t.toState&&(this.overlay.dispose(),this.onClose&&this.onClose())}mouseenter(){this.timer&&clearTimeout(this.timer)}mouseleave(){this.initTimer()}close(){this.timer&&clearTimeout(this.timer),this.state="leave"}}return t.\u0275fac=function(n){return new(n||t)(e.Nb(c))},t.\u0275cmp=e.Hb({type:t,selectors:[["nel-notification"]],viewQuery:function(t,n){if(1&t&&e.Cc(r,1),2&t){let t;e.oc(t=e.bc())&&(n.notificationEle=t.first)}},decls:9,vars:13,consts:[["role","alert",1,"el-notification",2,"top","16px",3,"mouseenter","mouseleave"],["notificationEle",""],[3,"class",4,"ngIf"],[1,"el-notification__group"],[1,"el-notification__title"],[4,"stringTemplate"],[1,"el-notification__content"],["class","el-notification__closeBtn el-icon-close",3,"click",4,"ngIf"],[1,"el-notification__closeBtn","el-icon-close",3,"click"]],template:function(t,n){1&t&&(e.Tb(0,"div",0,1),e.ac("@notificationMotion.start",function(t){return n.onAnimationStart(t)})("@notificationMotion.done",function(t){return n.onAnimationDone(t)})("mouseenter",function(){return n.mouseenter()})("mouseleave",function(){return n.mouseleave()}),e.wc(2,l,1,3,"i",2),e.Tb(3,"div",3),e.Tb(4,"h2",4),e.wc(5,f,2,1,"ng-container",5),e.Sb(),e.Tb(6,"div",6),e.wc(7,p,2,1,"ng-container",5),e.Sb(),e.wc(8,u,1,0,"div",7),e.Sb(),e.Sb()),2&t&&(e.vc("top",n.top?n.top+"px":"")("bottom",n.bottom?n.bottom+"px":""),e.Fb("right","topRight"==n.position||"bottomRight"==n.position)("left","topLeft"==n.position||"bottomLeft"==n.position),e.jc("@notificationMotion",n.state),e.zb(2),e.jc("ngIf","blank"!=n.type),e.zb(3),e.jc("stringTemplate",n.title),e.zb(2),e.jc("stringTemplate",n.content),e.zb(1),e.jc("ngIf",n.showClose))},directives:[s.i,a.a],encapsulation:2,data:{animation:[o.j]}}),t})();var h=i("+rOU"),d=i("XNiG"),m=i("rDax");let g=(()=>{class t{constructor(t,n){this.overlay=t,this.injector=n,this.notificationId=0,this.leave=new d.a,this.notificationRefList={topRight:[],bottomRight:[],topLeft:[],bottomLeft:[]},this._handlerLeave()}blank(t,n,i){return this.show("blank",t,n,i)}success(t,n,i){return this.show("success",t,n,i)}warning(t,n,i){return this.show("warning",t,n,i)}info(t,n,i){return this.show("info",t,n,i)}error(t,n,i){return this.show("error",t,n,i)}show(t,n,i,o){this.notificationId++;const e=this.overlay.create(),s=new c(t,this.notificationId,this.leave,e,n,i,o),a=this.createInjector(s,this.injector),r=e.attach(new h.a(b,null,a));let l=16,f=16,p="topRight";if(o&&(o.offset&&(l+=o.offset,f+=o.offset),o.position))switch(o.position){case"bottom-right":p="bottomRight";break;case"top-left":p="topLeft";break;case"bottom-left":p="bottomLeft"}return"topRight"===p||"topLeft"===p?(f=0,this.notificationRefList[p].forEach(t=>{l+=t.height+16})):(l=0,this.notificationRefList[p].forEach(t=>{f+=t.height+16})),this.notificationRefList[p].push(s),s.position=p,s.top=l,s.bottom=f,s.componentInstance=r.instance,s}createInjector(t,n){return e.s.create({parent:n,providers:[{provide:c,useValue:t}]})}_handlerLeave(){this.leave.subscribe(t=>{const n=this.notificationRefList[t.position].findIndex(n=>n.id===t.id);if(n>-1){const i=this.notificationRefList[t.position][n].height;if(n!==this.notificationRefList[t.position].length-1)for(let o=n+1;o<this.notificationRefList[t.position].length;o++)this.notificationRefList[t.position][o].componentInstance.top-=i+16;this.notificationRefList[t.position].splice(n,1)}})}}return t.\u0275fac=function(n){return new(n||t)(e.Xb(m.b),e.Xb(e.s))},t.\u0275prov=e.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=i("j9Rq");let v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.Lb({type:t}),t.\u0275inj=e.Kb({providers:[g],imports:[[s.b,m.c,y.a]]}),t})();var T=i("ackU");let w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.Lb({type:t}),t.\u0275inj=e.Kb({imports:[[v,T.b]]}),t})();var S=i("PCNd"),k=i("tyNb"),R=i("QJGT"),C=i("rvuC"),L=i("X2/8");const j=["contentTpl"];function I(t,n){}function O(t,n){1&t&&(e.Tb(0,"i",2),e.yc(1,"\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848"),e.Sb(),e.wc(2,I,0,0,"ng-template"))}let z=(()=>{class t{constructor(t){this.notification=t}open1(){this.notification.blank("\u6807\u9898\u540d\u79f0",this.contentTpl)}open2(){this.notification.blank("\u6807\u9898\u540d\u79f0","\u8fd9\u662f\u4e00\u6761\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\u7684\u6d88\u606f",{duration:0})}}return t.\u0275fac=function(n){return new(n||t)(e.Nb(g))},t.\u0275cmp=e.Hb({type:t,selectors:[["nel-demo-notification-basic"]],viewQuery:function(t,n){if(1&t&&e.Cc(j,1),2&t){let t;e.oc(t=e.bc())&&(n.contentTpl=t.first)}},decls:6,vars:0,consts:[["nel-button","","nelPlain","",3,"click"],["contentTpl",""],[2,"color","teal"]],template:function(t,n){1&t&&(e.Tb(0,"button",0),e.ac("click",function(){return n.open1()}),e.yc(1,"\u53ef\u81ea\u52a8\u5173\u95ed"),e.Sb(),e.Tb(2,"button",0),e.ac("click",function(){return n.open2()}),e.yc(3,"\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed"),e.Sb(),e.wc(4,O,3,0,"ng-template",null,1,e.xc))},directives:[L.a],encapsulation:2}),t})(),x=(()=>{class t{constructor(t){this.notification=t}open1(){this.notification.success("\u6210\u529f","\u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u63d0\u793a\u6d88\u606f")}open2(){this.notification.warning("\u8b66\u544a","\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u7684\u63d0\u793a\u6d88\u606f")}open3(){this.notification.info("\u6d88\u606f","\u8fd9\u662f\u4e00\u6761\u6d88\u606f\u7684\u63d0\u793a\u6d88\u606f")}open4(){this.notification.error("\u9519\u8bef","\u8fd9\u662f\u4e00\u6761\u9519\u8bef\u7684\u63d0\u793a\u6d88\u606f")}}return t.\u0275fac=function(n){return new(n||t)(e.Nb(g))},t.\u0275cmp=e.Hb({type:t,selectors:[["nel-demo-notification-type"]],decls:8,vars:0,consts:[["nel-button","","nelPlain","",3,"click"]],template:function(t,n){1&t&&(e.Tb(0,"button",0),e.ac("click",function(){return n.open1()}),e.yc(1,"\u6210\u529f"),e.Sb(),e.Tb(2,"button",0),e.ac("click",function(){return n.open2()}),e.yc(3,"\u8b66\u544a"),e.Sb(),e.Tb(4,"button",0),e.ac("click",function(){return n.open3()}),e.yc(5,"\u6d88\u606f"),e.Sb(),e.Tb(6,"button",0),e.ac("click",function(){return n.open4()}),e.yc(7,"\u9519\u8bef"),e.Sb())},directives:[L.a],encapsulation:2}),t})(),N=(()=>{class t{constructor(t){this.notification=t}open1(){this.notification.blank("\u81ea\u5b9a\u4e49\u4f4d\u7f6e","\u53f3\u4e0a\u89d2\u5f39\u51fa\u7684\u6d88\u606f",{position:"top-right"})}open2(){this.notification.blank("\u81ea\u5b9a\u4e49\u4f4d\u7f6e","\u53f3\u4e0b\u89d2\u5f39\u51fa\u7684\u6d88\u606f",{position:"bottom-right"})}open3(){this.notification.blank("\u81ea\u5b9a\u4e49\u4f4d\u7f6e","\u5de6\u4e0b\u89d2\u5f39\u51fa\u7684\u6d88\u606f",{position:"bottom-left"})}open4(){this.notification.blank("\u81ea\u5b9a\u4e49\u4f4d\u7f6e","\u5de6\u4e0a\u89d2\u5f39\u51fa\u7684\u6d88\u606f",{position:"top-left"})}}return t.\u0275fac=function(n){return new(n||t)(e.Nb(g))},t.\u0275cmp=e.Hb({type:t,selectors:[["nel-demo-notification-position"]],decls:8,vars:0,consts:[["nel-button","","nelPlain","",3,"click"]],template:function(t,n){1&t&&(e.Tb(0,"button",0),e.ac("click",function(){return n.open1()}),e.yc(1,"\u53f3\u4e0a\u89d2"),e.Sb(),e.Tb(2,"button",0),e.ac("click",function(){return n.open2()}),e.yc(3,"\u53f3\u4e0b\u89d2"),e.Sb(),e.Tb(4,"button",0),e.ac("click",function(){return n.open3()}),e.yc(5,"\u5de6\u4e0b\u89d2"),e.Sb(),e.Tb(6,"button",0),e.ac("click",function(){return n.open4()}),e.yc(7,"\u5de6\u4e0a\u89d2"),e.Sb())},directives:[L.a],encapsulation:2}),t})(),U=(()=>{class t{constructor(t){this.notification=t}open(){this.notification.blank("\u504f\u79fb","\u8fd9\u662f\u4e00\u6761\u5e26\u6709\u504f\u79fb\u7684\u63d0\u793a\u6d88\u606f",{offset:100})}}return t.\u0275fac=function(n){return new(n||t)(e.Nb(g))},t.\u0275cmp=e.Hb({type:t,selectors:[["nel-demo-notification-offset"]],decls:2,vars:0,consts:[["nel-button","","nelPlain","",3,"click"]],template:function(t,n){1&t&&(e.Tb(0,"button",0),e.ac("click",function(){return n.open()}),e.yc(1,"\u504f\u79fb\u7684\u6d88\u606f"),e.Sb())},directives:[L.a],encapsulation:2}),t})(),_=(()=>{class t{constructor(t){this.notification=t}open(){this.notification.success("\u504f\u79fb","\u8fd9\u662f\u4e00\u6761\u6ca1\u6709\u5173\u95ed\u6309\u94ae\u7684\u6d88\u606f",{showClose:!1})}}return t.\u0275fac=function(n){return new(n||t)(e.Nb(g))},t.\u0275cmp=e.Hb({type:t,selectors:[["nel-demo-notification-close"]],decls:2,vars:0,consts:[["nel-button","","nelPlain","",3,"click"]],template:function(t,n){1&t&&(e.Tb(0,"button",0),e.ac("click",function(){return n.open()}),e.yc(1,"\u9690\u85cf\u5173\u95ed\u6309\u94ae"),e.Sb())},directives:[L.a],encapsulation:2}),t})();var X=i("6qls");const H=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Hb({type:t,selectors:[["app-notification"]],decls:36,vars:6,consts:[["code","import { NelNotificationModule } from 'ng-element-ui/notification';"],[3,"codeUrl"],["demo",""],[3,"docUrl"]],template:function(t,n){1&t&&(e.Tb(0,"h2"),e.yc(1,"Notification \u901a\u77e5"),e.Sb(),e.Tb(2,"p"),e.yc(3,"\u60ac\u6d6e\u51fa\u73b0\u5728\u9875\u9762\u89d2\u843d\uff0c\u663e\u793a\u5168\u5c40\u7684\u901a\u77e5\u63d0\u9192\u6d88\u606f\u3002"),e.Sb(),e.Ob(4,"app-code",0),e.Tb(5,"h3"),e.yc(6,"\u57fa\u672c\u7528\u6cd5"),e.Sb(),e.Tb(7,"p"),e.yc(8,"\u9002\u7528\u6027\u5e7f\u6cdb\u7684\u901a\u77e5\u680f"),e.Sb(),e.Tb(9,"app-demo",1),e.Ob(10,"nel-demo-notification-basic",2),e.Sb(),e.Tb(11,"h3"),e.yc(12,"\u5e26\u6709\u503e\u5411\u6027"),e.Sb(),e.Tb(13,"p"),e.yc(14,"\u5e26\u6709 icon\uff0c\u5e38\u7528\u6765\u663e\u793a\u300c\u6210\u529f\u3001\u8b66\u544a\u3001\u6d88\u606f\u3001\u9519\u8bef\u300d\u7c7b\u7684\u7cfb\u7edf\u6d88\u606f"),e.Sb(),e.Tb(15,"app-demo",1),e.Ob(16,"nel-demo-notification-type",2),e.Sb(),e.Tb(17,"h3"),e.yc(18,"\u81ea\u5b9a\u4e49\u5f39\u51fa\u4f4d\u7f6e"),e.Sb(),e.Tb(19,"p"),e.yc(20,"\u53ef\u4ee5\u8ba9 Notification \u4ece\u5c4f\u5e55\u56db\u89d2\u4e2d\u7684\u4efb\u610f\u4e00\u89d2\u5f39\u51fa"),e.Sb(),e.Tb(21,"app-demo",1),e.Ob(22,"nel-demo-notification-position",2),e.Sb(),e.Tb(23,"h3"),e.yc(24,"\u5e26\u6709\u504f\u79fb"),e.Sb(),e.Tb(25,"p"),e.yc(26,"\u8ba9 Notification \u504f\u79fb\u4e00\u4e9b\u4f4d\u7f6e"),e.Sb(),e.Tb(27,"app-demo",1),e.Ob(28,"nel-demo-notification-offset",2),e.Sb(),e.Tb(29,"h3"),e.yc(30,"\u9690\u85cf\u5173\u95ed\u6309\u94ae"),e.Sb(),e.Tb(31,"p"),e.yc(32,"\u53ef\u4ee5\u4e0d\u663e\u793a\u5173\u95ed\u6309\u94ae"),e.Sb(),e.Tb(33,"app-demo",1),e.Ob(34,"nel-demo-notification-close",2),e.Sb(),e.Ob(35,"app-doc",3)),2&t&&(e.zb(9),e.jc("codeUrl","components-notification-demo-basic.component"),e.zb(6),e.jc("codeUrl","components-notification-demo-type.component"),e.zb(6),e.jc("codeUrl","components-notification-demo-position.component"),e.zb(6),e.jc("codeUrl","components-notification-demo-offset.component"),e.zb(6),e.jc("codeUrl","components-notification-demo-close.component"),e.zb(2),e.jc("docUrl","components-notification"))},directives:[R.a,C.a,z,x,N,U,_,X.a],encapsulation:2}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.Lb({type:t}),t.\u0275inj=e.Kb({imports:[[k.f.forChild(H)],k.f]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.Lb({type:t}),t.\u0275inj=e.Kb({imports:[[w,S.a,P]]}),t})()}}]);