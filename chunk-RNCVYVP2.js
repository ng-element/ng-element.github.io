import{a as re,b as ne,e as V,i as x,l as O}from"./chunk-AQGOD4VY.js";import{b as G}from"./chunk-XRBZUWDJ.js";import{c as K,i as Z,j as J,l as ee,o as te,q as oe,t as ie}from"./chunk-JOIXMEFZ.js";import"./chunk-JYBRZQRP.js";import{$a as q,Da as a,Ea as c,Fa as g,G as j,I as f,Ja as L,Ka as v,O as p,P as d,Q as Y,Qa as M,Qb as H,Ra as N,Sa as P,Ua as m,Va as W,W as Q,Ya as E,Za as F,_a as D,ca as u,da as $,h as U,la as C,ma as b,r as k,va as X,wa as S,zb as z}from"./chunk-UJIEDWPF.js";var we=["hueSlider"],Se=["hueSliderThumb"],ye=["svpanel"],ke=["svpanelCursor"],se=(()=>{class o{constructor(){this.hueSliderThumbTop="0px",this.svpanelCursorTop="0px",this.svpanelCursorLeft="0px",this.backgroundColor="hsl(0, 100%, 50%)",this.changeColor$=new U,this.selectedColor$=new U,this.displayedColor=""}ngOnDestroy(){this.hueSliderUnSubscribe(),this.svpanelUnSubscribe()}ngAfterViewInit(){setTimeout(()=>{this.getThumbTop(),this.getSvpanel()},0)}getThumbTop(){let t=this.color.get("hue");this.hueSliderThumbTop=Math.round(t*(this.hueSlider.nativeElement.offsetHeight-this.hueSliderThumb.nativeElement.offsetHeight/2)/360)+"px"}getSvpanel(){let t=this.color.get("saturation"),e=this.color.get("value"),{clientWidth:i,clientHeight:n}=this.svpanel.nativeElement;this.svpanelCursorLeft=t*i/100+"px",this.svpanelCursorTop=(100-e)*n/100+"px",this.backgroundColor=`hsl(${this.color.get("hue")}, 100%, 50%)`}initHueSlider(){this.hueSliderUnSubscribe();let t=this.hueSlider.nativeElement.getBoundingClientRect();this.hueSliderThumbMove=k(document,"mousemove").subscribe(e=>{e.preventDefault();let i=0,n=0;e.clientY<t.top?n=0:e.clientY>t.top+t.height-2?n=t.height-2:n=e.clientY-t.top,i=Math.round((n-this.hueSliderThumb.nativeElement.offsetHeight/2)/(t.height-this.hueSliderThumb.nativeElement.offsetHeight)*360),this.hueSliderThumbTop=n+"px",this.backgroundColor=`hsl(${i}, 100%, 50%)`,this.color.set("hue",i),this.displayedColor=this.color.value,this.changeColor$?.next(this.color)}),this.hueSliderThumbUp=k(document,"mouseup").subscribe(e=>{this.hueSliderUnSubscribe()})}clickHueSliderBar(t){let e=this.hueSlider.nativeElement.getBoundingClientRect(),i=t.clientY-e.top,n=Math.round((i-this.hueSliderThumb.nativeElement.offsetHeight/2)/(e.height-this.hueSliderThumb.nativeElement.offsetHeight)*360);this.hueSliderThumbTop=i+"px",this.backgroundColor=`hsl(${n}, 100%, 50%)`,this.color.set("hue",n),this.displayedColor=this.color.value,this.changeColor$?.next(this.color)}hueSliderUnSubscribe(){this.hueSliderThumbMove?.unsubscribe(),this.hueSliderThumbUp?.unsubscribe()}initSvpanel(){this.svpanelUnSubscribe();let t=this.svpanel.nativeElement.getBoundingClientRect();this.svpanelCursorMove=k(document,"mousemove").subscribe(e=>{e.preventDefault();let i=0,n=0;e.clientY<t.top?i=0:e.clientY>t.top+t.height?i=t.height:i=e.clientY-t.top,e.clientX<t.left?n=0:e.clientX>t.left+t.width?n=t.width:n=e.clientX-t.left,this.svpanelCursorTop=i+"px",this.svpanelCursorLeft=n+"px",this.changeSvpanel(t,n,i)}),this.hueSliderThumbUp=k(document,"mouseup").subscribe(e=>{this.svpanelUnSubscribe()})}clickSvpanel(t){let e=this.svpanel.nativeElement.getBoundingClientRect(),i=t.clientY-e.top,n=t.clientX-e.left;this.svpanelCursorTop=i+"px",this.svpanelCursorLeft=n+"px",this.changeSvpanel(e,n,i)}svpanelUnSubscribe(){this.svpanelCursorMove?.unsubscribe(),this.svpanelCursorUp?.unsubscribe()}changeSvpanel(t,e,i){this.color.set({saturation:e/t.width*100,value:100-i/t.height*100}),this.displayedColor=this.color.value,this.changeColor$?.next(this.color)}confirmValue(){this.displayedColor=this.color.value,this.selectedColor$?.next(this.color)}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=C({type:o,selectors:[["nel-color-picker-dropdown"]],viewQuery:function(e,i){if(e&1&&(M(we,5),M(Se,5),M(ye,5),M(ke,5)),e&2){let n;N(n=P())&&(i.hueSlider=n.first),N(n=P())&&(i.hueSliderThumb=n.first),N(n=P())&&(i.svpanel=n.first),N(n=P())&&(i.svpanelCursor=n.first)}},standalone:!1,decls:26,vars:9,consts:[["hueSlider",""],["hueSliderThumb",""],["svpanel",""],["svpanelCursor",""],["tabindex","-1","aria-hidden","false","data-popper-placement","right",1,"el-popper","is-light","el-color-picker__panel","el-color-dropdown",2,"z-index","2017","margin","0px"],[1,"el-color-dropdown__main-wrapper"],[1,"el-color-hue-slider","is-vertical","hue-slider"],[1,"el-color-hue-slider__bar",3,"click","mousedown"],[1,"el-color-hue-slider__thumb",2,"left","0px",3,"mousedown"],[1,"el-color-svpanel",3,"click","mousedown"],[1,"el-color-svpanel__white"],[1,"el-color-svpanel__black"],[1,"el-color-svpanel__cursor",3,"mousedown"],[1,"el-color-dropdown__btns"],[1,"el-color-dropdown__value"],[1,"el-input","el-input--small"],[1,"el-input__wrapper"],["type","text","autocomplete","off","tabindex","0","id","el-id-9846-25",1,"el-input__inner",3,"ngModelChange","ngModel"],["aria-disabled","false","type","button",1,"el-button","el-button--small","is-text","el-color-dropdown__link-btn"],[1,""],["aria-disabled","false","type","button",1,"el-button","el-button--small","is-plain","el-color-dropdown__btn",3,"click"]],template:function(e,i){if(e&1){let n=L();a(0,"div",4)(1,"div")(2,"div",5)(3,"div",6,0)(5,"div",7),v("click",function(l){return p(n),d(i.clickHueSliderBar(l))})("mousedown",function(){return p(n),d(i.initHueSlider())}),c(),a(6,"div",8,1),v("mousedown",function(){return p(n),d(i.initHueSlider())}),c()(),a(8,"div",9,2),v("click",function(l){return p(n),d(i.clickSvpanel(l))})("mousedown",function(){return p(n),d(i.initSvpanel())}),g(10,"div",10)(11,"div",11),a(12,"div",12,3),v("mousedown",function(){return p(n),d(i.initSvpanel())}),g(14,"div"),c()()(),a(15,"div",13)(16,"span",14)(17,"div",15)(18,"div",16)(19,"input",17),D("ngModelChange",function(l){return p(n),F(i.displayedColor,l)||(i.displayedColor=l),d(l)}),c()()()(),a(20,"button",18)(21,"span",19),m(22,"Clear"),c()(),a(23,"button",20),v("click",function(){return p(n),d(i.confirmValue())}),a(24,"span",19),m(25,"OK"),c()()()()()}e&2&&(u(6),S("top",i.hueSliderThumbTop),u(2),S("background-color",i.backgroundColor),u(4),S("top",i.svpanelCursorTop)("left",i.svpanelCursorLeft),u(7),E("ngModel",i.displayedColor))},dependencies:[ne,V,x],styles:[`.el-color-picker__panel{position:relative!important}
`],encapsulation:2})}}return o})();var le=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),ae=function(o,r,t){return[o,r*t/((o=(2-r)*t)<1?o:2-o)||0,o/2]},Me=function(o){return typeof o=="string"&&o.includes(".")&&Number.parseFloat(o)===1},Ne=function(o){return typeof o=="string"&&o.includes("%")},y=function(o,r){Me(o)&&(o="100%");let t=Ne(o);return o=Math.min(r,Math.max(0,Number.parseFloat(`${o}`))),t&&(o=Number.parseInt(`${o*r}`,10)/100),Math.abs(o-r)<1e-6?1:o%r/Number.parseFloat(r)},ce={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"},R=function(o){o=Math.min(Math.round(o),255);let r=Math.floor(o/16),t=o%16;return`${ce[r]||r}${ce[t]||t}`},ue=function({r:o,g:r,b:t}){return Number.isNaN(+o)||Number.isNaN(+r)||Number.isNaN(+t)?"":`#${R(o)}${R(r)}${R(t)}`},I={A:10,B:11,C:12,D:13,E:14,F:15},w=function(o){return o.length===2?(I[o[0].toUpperCase()]||+o[0])*16+(I[o[1].toUpperCase()]||+o[1]):I[o[1].toUpperCase()]||+o[1]},Pe=function(o,r,t){r=r/100,t=t/100;let e=r,i=Math.max(t,.01);t*=2,r*=t<=1?t:2-t,e*=i<=1?i:2-i;let n=(t+r)/2,s=t===0?2*e/(i+e):2*r/(t+r);return{h:o,s:s*100,v:n*100}},he=function(o,r,t){o=y(o,255),r=y(r,255),t=y(t,255);let e=Math.max(o,r,t),i=Math.min(o,r,t),n,s=e,l=e-i,h=e===0?0:l/e;if(e===i)n=0;else{switch(e){case o:{n=(r-t)/l+(r<t?6:0);break}case r:{n=(t-o)/l+2;break}case t:{n=(o-r)/l+4;break}}n/=6}return{h:n*360,s:h*100,v:s*100}},T=function(o,r,t){o=y(o,360)*6,r=y(r,100),t=y(t,100);let e=Math.floor(o),i=o-e,n=t*(1-r),s=t*(1-i*r),l=t*(1-(1-i)*r),h=e%6,B=[t,s,n,n,l,t][h],ge=[l,t,t,s,n,n][h],ve=[n,n,l,t,t,s][h];return{r:Math.round(B*255),g:Math.round(ge*255),b:Math.round(ve*255)}},A=class{constructor(r){this._hue=0,this._saturation=100,this._value=100,this._alpha=100,this.enableAlpha=!1,this.format="hex",this.value="",r=r||{};for(let t in r)le(r,t)&&(this[t]=r[t]);r.value?this.fromString(r.value):this.doOnChange()}set(r,t){if(arguments.length===1&&typeof r=="object"){for(let e in r)le(r,e)&&this.set(e,r[e]);return}this[`_${r}`]=t,this.doOnChange()}get(r){return r==="alpha"?Math.floor(this[`_${r}`]):this[`_${r}`]}toRgb(){return T(this._hue,this._saturation,this._value)}fromString(r){if(!r){this._hue=0,this._saturation=100,this._value=100,this.doOnChange();return}let t=(e,i,n)=>{this._hue=Math.max(0,Math.min(360,e)),this._saturation=Math.max(0,Math.min(100,i)),this._value=Math.max(0,Math.min(100,n)),this.doOnChange()};if(r.includes("hsl")){let e=r.replace(/hsla|hsl|\(|\)/gm,"").split(/\s|,/g).filter(i=>i!=="").map((i,n)=>n>2?Number.parseFloat(i):Number.parseInt(i,10));if(e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3){let{h:i,s:n,v:s}=Pe(e[0],e[1],e[2]);t(i,n,s)}}else if(r.includes("hsv")){let e=r.replace(/hsva|hsv|\(|\)/gm,"").split(/\s|,/g).filter(i=>i!=="").map((i,n)=>n>2?Number.parseFloat(i):Number.parseInt(i,10));e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3&&t(e[0],e[1],e[2])}else if(r.includes("rgb")){let e=r.replace(/rgba|rgb|\(|\)/gm,"").split(/\s|,/g).filter(i=>i!=="").map((i,n)=>n>2?Number.parseFloat(i):Number.parseInt(i,10));if(e.length===4?this._alpha=Number.parseFloat(e[3])*100:e.length===3&&(this._alpha=100),e.length>=3){let{h:i,s:n,v:s}=he(e[0],e[1],e[2]);t(i,n,s)}}else if(r.includes("#")){let e=r.replace("#","").trim();if(!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(e))return;let i,n,s;e.length===3?(i=w(e[0]+e[0]),n=w(e[1]+e[1]),s=w(e[2]+e[2])):(e.length===6||e.length===8)&&(i=w(e.slice(0,2)),n=w(e.slice(2,4)),s=w(e.slice(4,6))),e.length===8?this._alpha=w(e.slice(6))/255*100:(e.length===3||e.length===6)&&(this._alpha=100);let{h:l,s:h,v:B}=he(i,n,s);t(l,h,B)}}compare(r){return Math.abs(r._hue-this._hue)<2&&Math.abs(r._saturation-this._saturation)<1&&Math.abs(r._value-this._value)<1&&Math.abs(r._alpha-this._alpha)<1}doOnChange(){let{_hue:r,_saturation:t,_value:e,_alpha:i,format:n}=this;if(this.enableAlpha)switch(n){case"hsl":{let s=ae(r,t/100,e/100);this.value=`hsla(${r}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%, ${this.get("alpha")/100})`;break}case"hsv":{this.value=`hsva(${r}, ${Math.round(t)}%, ${Math.round(e)}%, ${this.get("alpha")/100})`;break}case"hex":{this.value=`${ue(T(r,t,e))}${R(i*255/100)}`;break}default:{let{r:s,g:l,b:h}=T(r,t,e);this.value=`rgba(${s}, ${l}, ${h}, ${this.get("alpha")/100})`}}else switch(n){case"hsl":{let s=ae(r,t/100,e/100);this.value=`hsl(${r}, ${Math.round(s[1]*100)}%, ${Math.round(s[2]*100)}%)`;break}case"hsv":{this.value=`hsv(${r}, ${Math.round(t)}%, ${Math.round(e)}%)`;break}case"rgb":{let{r:s,g:l,b:h}=T(r,t,e);this.value=`rgb(${s}, ${l}, ${h})`;break}default:this.value=ue(T(r,t,e))}}};var pe=(()=>{class o{constructor(t,e,i){this.overlay=t,this.overlayPositionBuilder=e,this.elementRef=i,this.showAlpha=!1,this.colorFormat="",this.isOpen=!1,this.displayedColor="",this.modelValue="",this.change=n=>{}}ngOnDestroy(){this.changeColorSub&&this.changeColorSub.unsubscribe(),this.selectedColorSub&&this.selectedColorSub.unsubscribe(),this.outsideSub&&this.outsideSub.unsubscribe(),this.timeout&&clearTimeout(this.timeout)}open(){if(this.isOpen)return;let t={originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"},e={originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},i=this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withPositions([t,e]);if(this.overlayRef=this.overlay.create({positionStrategy:i}),this.overlayRef){let n=this.overlayRef.attach(new K(se));n.instance.color=new A({enableAlpha:this.showAlpha,format:this.colorFormat,value:this.modelValue}),this.changeColorSub=n.instance.changeColor$?.subscribe(s=>{this.displayedColor=s.value}),this.selectedColorSub=n.instance.selectedColor$?.subscribe(s=>{this.displayedColor=s.value,this.modelValue=s.value,this.change(s.value),this.close()}),this.isOpen=!0,this.outsideSub=this.overlayRef.outsidePointerEvents().subscribe(()=>{this.displayedColor=this.modelValue,this.change(this.modelValue),this.close()})}}close(){this.overlayRef.detach(),this.outsideSub?.unsubscribe(),this.changeColorSub?.unsubscribe(),this.selectedColorSub?.unsubscribe(),this.timeout=setTimeout(()=>{this.isOpen=!1},150)}writeValue(t){this.modelValue=t}registerOnChange(t){this.change=t}registerOnTouched(t){}static{this.\u0275fac=function(e){return new(e||o)($(J),$(Z),$(Q))}}static{this.\u0275cmp=C({type:o,selectors:[["nel-color-picker"]],inputs:{showAlpha:"showAlpha",colorFormat:"colorFormat"},standalone:!1,features:[q([{provide:re,useExisting:j(()=>o),multi:!0}])],decls:7,vars:2,consts:[["role","button","aria-label","color picker","aria-description","current color is #409EFF. press enter to select a new color.","tabindex","0",1,"el-color-picker","el-tooltip__trigger","el-tooltip__trigger",3,"click"],[1,"el-color-picker__trigger"],[1,"el-color-picker__color"],[1,"el-color-picker__color-inner"],[1,"el-icon","el-color-picker__icon","is-icon-arrow-down"],["viewBox","0 0 1024 1024","xmlns","http://www.w3.org/2000/svg"],["fill","currentColor","d","M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"]],template:function(e,i){e&1&&(a(0,"div",0),v("click",function(){return i.open()}),a(1,"div",1)(2,"span",2)(3,"span",3)(4,"i",4),Y(),a(5,"svg",5),g(6,"path",6),c()()()()()()),e&2&&(u(3),S("background-color",i.displayedColor))},styles:["nel-color-picker[_ngcontent-%COMP%]{display:inline-block}"]})}}return o})();var de=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=b({type:o})}static{this.\u0275inj=f({imports:[z,O,ee]})}}return o})();var me=(()=>{class o{constructor(){this.color1="#409EFF"}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=C({type:o,selectors:[["nel-demo-color-picker-basic"]],standalone:!1,decls:3,vars:2,consts:[[3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(a(0,"p"),m(1),c(),a(2,"nel-color-picker",0),D("ngModelChange",function(s){return F(i.color1,s)||(i.color1=s),s}),c()),e&2&&(u(),W(i.color1),u(),E("ngModel",i.color1))},dependencies:[V,x,pe],encapsulation:2})}}return o})();var fe=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=b({type:o})}static{this.\u0275inj=f({imports:[O,de,G]})}}return o})();var Ce=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=C({type:o,selectors:[["app-color-picker"]],standalone:!1,decls:9,vars:1,consts:[["code","import { NelColorPickerModule } from 'ng-element-ui/color-picker';"],[3,"codeUrl"],["demo",""]],template:function(e,i){e&1&&(a(0,"h2"),m(1,"ColorPicker \u989C\u8272\u9009\u62E9\u5668"),c(),a(2,"p"),m(3,"\u7528\u4E8E\u989C\u8272\u9009\u62E9\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u3002"),c(),g(4,"app-code",0),a(5,"h3"),m(6,"\u57FA\u7840\u7528\u6CD5"),c(),a(7,"app-demo",1),g(8,"nel-demo-color-picker-basic",2),c()),e&2&&(u(7),X("codeUrl","components-color-picker-demo-basic.component"))},dependencies:[me,te,oe],encapsulation:2})}}return o})();var Ee=[{path:"",component:Ce}],be=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=b({type:o})}static{this.\u0275inj=f({imports:[H.forChild(Ee),H]})}}return o})();var vt=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=b({type:o})}static{this.\u0275inj=f({imports:[fe,ie,be]})}}return o})();export{vt as ColorPickerModule};
