import{Ab as Y,C as j,H as p,I as g,J as I,L as d,U as W,V as D,W as R,Y as U,g as E,ga as G,h as C,ma as _,n as A,na as O,nb as v,r as k,v as N,w as F}from"./chunk-UJIEDWPF.js";function ut(t){return t!=null&&`${t}`!="false"}function J(t,r=0){return tt(t)?Number(t):arguments.length===2?r:0}function tt(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ft(t){return Array.isArray(t)?t:[t]}function pt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function H(t){return t instanceof R?t.nativeElement:t}var z;try{z=typeof Intl<"u"&&Intl.v8BreakIterator}catch{z=!1}var M=(()=>{class t{_platformId=d(U);isBrowser=this._platformId?Y(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||z)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var w;function et(){if(w==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>w=!0}))}finally{w=w||!1}return w}function wt(t){return et()?t:!!t.capture}var u=function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t}(u||{}),x,m;function Z(){if(m==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return m=!1,m;if("scrollBehavior"in document.documentElement.style)m=!0;else{let t=Element.prototype.scrollTo;t?m=!/\{\s*\[native code\]\s*\}/.test(t.toString()):m=!1}}return m}function y(){if(typeof document!="object"||!document)return u.NORMAL;if(x==null){let t=document.createElement("div"),r=t.style;t.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),x=u.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,x=t.scrollLeft===0?u.NEGATED:u.INVERTED),t.remove()}return x}var T;function rt(){if(T==null){let t=typeof document<"u"?document.head:null;T=!!(t&&(t.createShadowRoot||t.attachShadow))}return T}function St(t){if(rt()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function Ct(t){return t.composedPath?t.composedPath()[0]:t.target}function Dt(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var it=new I("cdk-dir-doc",{providedIn:"root",factory:ot});function ot(){return d(v)}var st=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function at(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?st.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var q=(()=>{class t{value="ltr";change=new W;constructor(){let e=d(it,{optional:!0});if(e){let n=e.body?e.body.dir:null,l=e.documentElement?e.documentElement.dir:null;this.value=at(n||l||"ltr")}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var B=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=_({type:t});static \u0275inj=g({})}return t})();var lt=20,ct=(()=>{class t{_ngZone=d(D);_platform=d(M);_document=d(v,{optional:!0});constructor(){}_scrolled=new C;_globalSubscription=null;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=lt){return this._platform.isBrowser?new E(n=>{this._globalSubscription||this._addGlobalListener();let l=e>0?this._scrolled.pipe(F(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{l.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):A()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let l=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(N(a=>!a||l.indexOf(a)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((l,a)=>{this._scrollableContainsElement(a,e)&&n.push(a)}),n}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,n){let l=H(n),a=e.getElementRef().nativeElement;do if(l==a)return!0;while(l=l.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return k(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ie=(()=>{class t{elementRef=d(R);scrollDispatcher=d(ct);ngZone=d(D);dir=d(q,{optional:!0});_destroyed=new C;_elementScrolled=new E(e=>this.ngZone.runOutsideAngular(()=>k(this.elementRef.nativeElement,"scroll").pipe(j(this._destroyed)).subscribe(e)));constructor(){}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,l=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=l?e.end:e.start),e.right==null&&(e.right=l?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),l&&y()!=u.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),y()==u.INVERTED?e.left=e.right:y()==u.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;Z()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",l="right",a=this.elementRef.nativeElement;if(e=="top")return a.scrollTop;if(e=="bottom")return a.scrollHeight-a.clientHeight-a.scrollTop;let h=this.dir&&this.dir.value=="rtl";return e=="start"?e=h?l:n:e=="end"&&(e=h?n:l),h&&y()==u.INVERTED?e==n?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:h&&y()==u.NEGATED?e==n?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==n?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),dt=20,Oe=(()=>{class t{_platform=d(M);_listeners;_viewportSize;_change=new C;_document=d(v,{optional:!0});constructor(){let e=d(D),n=d(G).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let l=a=>this._change.next(a);this._listeners=[n.listen("window","resize",l),n.listen("window","orientationchange",l)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:l}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+l,right:e.left+n,height:l,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),l=e.documentElement,a=l.getBoundingClientRect(),h=-a.top||e.body.scrollTop||n.scrollY||l.scrollTop||0,b=-a.left||e.body.scrollLeft||n.scrollX||l.scrollLeft||0;return{top:h,left:b}}change(e=dt){return e>0?this._change.pipe(F(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var K=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=_({type:t});static \u0275inj=g({})}return t})(),Te=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=_({type:t});static \u0275inj=g({imports:[B,K,B,K]})}return t})();var f=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(f||{}),Me="*";function c(t,r){return{type:f.Trigger,name:t,definitions:r,options:{}}}function o(t,r=null){return{type:f.Animate,styles:r,timings:t}}function V(t,r=null){return{type:f.Group,steps:t,options:r}}function Be(t,r=null){return{type:f.Sequence,steps:t,options:r}}function i(t){return{type:f.Style,styles:t,offset:null}}function S(t,r,e){return{type:f.State,name:t,styles:r,options:e}}function s(t,r,e=null){return{type:f.Transition,expr:t,animation:r,options:e}}function P(t=null){return{type:f.AnimateChild,options:t}}function L(t,r,e=null){return{type:f.Query,selector:t,animation:r,options:e}}var Q=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(r=0,e=0){this.totalTime=r+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(r=>r()),this._onDoneFns=[])}onStart(r){this._originalOnStartFns.push(r),this._onStartFns.push(r)}onDone(r){this._originalOnDoneFns.push(r),this._onDoneFns.push(r)}onDestroy(r){this._onDestroyFns.push(r)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(r=>r()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(r=>r()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(r){this._position=this.totalTime?r*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(r){let e=r=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},X=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(r){this.players=r;let e=0,n=0,l=0,a=this.players.length;a==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(h=>{h.onDone(()=>{++e==a&&this._onFinish()}),h.onDestroy(()=>{++n==a&&this._onDestroy()}),h.onStart(()=>{++l==a&&this._onStart()})}),this.totalTime=this.players.reduce((h,b)=>Math.max(h,b.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(r=>r()),this._onDoneFns=[])}init(){this.players.forEach(r=>r.init())}onStart(r){this._onStartFns.push(r)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(r=>r()),this._onStartFns=[])}onDone(r){this._onDoneFns.push(r)}onDestroy(r){this._onDestroyFns.push(r)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(r=>r.play())}pause(){this.players.forEach(r=>r.pause())}restart(){this.players.forEach(r=>r.restart())}finish(){this._onFinish(),this.players.forEach(r=>r.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(r=>r.destroy()),this._onDestroyFns.forEach(r=>r()),this._onDestroyFns=[])}reset(){this.players.forEach(r=>r.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(r){let e=r*this.totalTime;this.players.forEach(n=>{let l=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(l)})}getPosition(){let r=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return r!=null?r.getPosition():0}beforeDestroy(){this.players.forEach(r=>{r.beforeDestroy&&r.beforeDestroy()})}triggerCallback(r){let e=r=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Ve="!";var Ae=c("fadeMotion",[s(":enter",[i({opacity:0}),o(300,i({opacity:1}))]),s(":leave",[o(300,i({opacity:0}))])]);var We=c("collapseMotion",[S("expanded",i({display:"block",opacity:"1"})),S("collapsed",i({display:"none",height:"0",opacity:"0"})),s("expanded <=> collapsed",[i({display:"block"}),o("300ms")])]);var Ye=c("zoomMotion",[s(":enter",[i({opacity:0,transform:"scaleX(0)"}),o(300,i({opacity:1,transform:"scaleX(1)"}))]),s(":leave",[o(300,i({opacity:0,transform:"scaleX(0)"}))])]),He=c("zoomTopMotion",[s(":enter",[i({transform:"scaleY(0)","transform-origin":"center top"}),o(300,i({transform:"scaleY(1)","transform-origin":"center bottom"}))]),s(":leave",[o(300,i({transform:"scaleY(0)","transform-origin":"center top"}))])]),$e=c("zoomBottomMotion",[s(":enter",[i({opacity:0,transform:"scaleY(0)","transform-origin":"center bottom"}),o(300,i({opacity:1,transform:"scaleY(1)","transform-origin":"center top"}))]),s(":leave",[o(300,i({opacity:0,transform:"scaleY(0)","transform-origin":"center bottom"}))])]);var Ke=c("drawerMotion",[s(":enter",[i({opacity:0,overflow:"hidden"}),V([L("@drawerDialogMotion",[P()]),o(300,i({opacity:1}))])]),s(":leave",[i({overflow:"hidden"}),V([L("@drawerDialogMotion",[P()]),o(300,i({opacity:0}))])])]),Qe=c("drawerDialogMotion",[s("void => rtl",[i({transform:"translate(100%, 0px)"}),o(300,i({transform:"translate(0px, 0px)"}))]),s("rtl => void",[i({transform:"translate(0px, 0px)"}),o(300,i({transform:"translate(100%, 0px)"}))]),s("void => ltr",[i({transform:"translate(-100%, 0px)"}),o(300,i({transform:"translate(0px, 0px)"}))]),s("ltr => void",[i({transform:"translate(0px, 0px)"}),o(300,i({transform:"translate(-100%, 0px)"}))]),s("void => ttb",[i({transform:"translate(0px, -100%)"}),o(300,i({transform:"translate(0px, 0px)"}))]),s("ttb => void",[i({transform:"translate(0px, 0px)"}),o(300,i({transform:"translate(0px, -100%)"}))]),s("void => btt",[i({transform:"translate(0px, 100%)"}),o(300,i({transform:"translate(0px, 0px)"}))]),s("btt => void",[i({transform:"translate(0px, 0px)"}),o(300,i({transform:"translate(0px, 100%)"}))])]);var tr=c("modalMotion",[s(":enter",[i({opacity:0,transform:"translate3d(0, -20px, 0)"}),o(300,i({opacity:1,transform:"translate3d(0, 0, 0)"}))]),s(":leave",[i({opacity:1,transform:"translate3d(0, 0, 0)"}),o(300,i({opacity:0,transform:"translate3d(0, -20px, 0)"}))])]);var nr=c("messageMotion",[S("done",i({opacity:1,transform:"translate(-50%, 0)"})),s(":enter",[i({opacity:0,transform:"translate(-50%, -100%)"}),o(300,i({opacity:1,transform:"translate(-50%, 0)"}))]),s("start => done",[o(300,i({opacity:0,transform:"translate(-50%, -100%)"}))])]);var sr=c("notificationMotion",[s("void => rightInto",[i({opacity:0,transform:"translate(100%, 0)"}),o(300,i({opacity:1,transform:"translate(0, 0)"}))]),s("rightInto => leave",[i({opacity:1,transform:"translate(0, 0)"}),o(300,i({opacity:0,transform:"translate(100%, 0)"}))]),s("void => leftInto",[i({opacity:0,transform:"translate(-100%, 0)"}),o(300,i({opacity:1,transform:"translate(0, 0)"}))]),s("leftInto => leave",[i({opacity:1,transform:"translate(0, 0)"}),o(300,i({opacity:0,transform:"translate(-100%, 0)"}))])]);var cr=c("messageBoxMotion",[s("void => into",[i({opacity:0,transform:"translate(0, -20px)"}),o(300,i({opacity:1,transform:"translate(0, 0)"}))]),s("into => leave",[i({opacity:1,transform:"translate(0, 0)"}),o(300,i({opacity:0,transform:"translate(0, -20px)"}))])]);var ur=c("loadingMotion",[s(":enter",[i({opacity:0}),o(300,i({opacity:1}))]),s(":leave",[o(300,i({opacity:0}))])]);var mr=c("dropdownMotion",[s("void => into, leave => into",[i({opacity:0,transform:"scaleY(0)","transform-origin":"center top"}),o(300,i({opacity:1,transform:"scaleY(1)","transform-origin":"center top"}))]),s(":leave",[i({opacity:1,transform:"scaleY(1)","transform-origin":"center top"}),o(300,i({opacity:0,transform:"scaleY(0)","transform-origin":"center top"}))])]);export{f as a,Me as b,Be as c,i as d,Q as e,X as f,Ve as g,Ae as h,We as i,Ye as j,He as k,$e as l,Ke as m,Qe as n,tr as o,nr as p,sr as q,cr as r,ur as s,mr as t,ut as u,J as v,ft as w,pt as x,H as y,M as z,wt as A,Z as B,St as C,Ct as D,Dt as E,q as F,B as G,ct as H,Ie as I,Oe as J,K,Te as L};