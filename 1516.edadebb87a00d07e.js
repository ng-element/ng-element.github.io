"use strict";(self.webpackChunkng_element=self.webpackChunkng_element||[]).push([[1516],{1516:(T,p,a)=>{a.r(p),a.d(p,{TreeModule:()=>b});var l=a(177),e=a(4438);let h=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[l.MD]})}}return t})(),m=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[l.MD,h]})}}return t})();var f=a(3887),u=a(1739);function g(t,_){if(1&t&&(e.j41(0,"div",8),e.nrm(1,"nel-tree-node",9),e.k0s()),2&t){const o=e.XpG().$implicit,n=e.XpG();e.xc7("display",o.expand?"inherit":"none"),e.R7$(),e.Y8G("data",o.children)("leafLevel",n.leafLevel+1)}}function c(t,_){if(1&t){const o=e.RV6();e.j41(0,"div",1)(1,"div",2),e.bIt("click",function(){const s=e.eBV(o).$implicit,y=e.XpG();return e.Njj(y.toggle(s))}),e.j41(2,"i",3),e.qSk(),e.j41(3,"svg",4),e.nrm(4,"path",5),e.k0s()(),e.joV(),e.j41(5,"span",6),e.EFF(6),e.k0s()(),e.DNE(7,g,2,4,"div",7),e.k0s()}if(2&t){const o=_.$implicit,n=e.XpG();e.R7$(),e.xc7("padding-left",18*(n.leafLevel-1)+"px"),e.R7$(),e.AVh("expanded",o.expand)("is-leaf",!o.children||0===o.children.length),e.R7$(4),e.JRh(o.label),e.R7$(),e.Y8G("ngIf",o.init)}}let C=(()=>{class t{constructor(){this.data=[],this.leafLevel=1}toggle(o){o.children&&(o.init?(o.expand=!o.expand,!o.expand&&o.children&&o.children.forEach(n=>{n.expand=!1})):(o.init=!0,o.expand=!0))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["nel-tree-node"]],inputs:{data:"data",leafLevel:"leafLevel"},decls:1,vars:1,consts:[["class","el-tree-node is-expanded is-current is-focusable","role","treeitem","tabindex","0","aria-expanded","true","aria-disabled","","aria-checked","false","draggable","false","data-key","1",4,"ngFor","ngForOf"],["role","treeitem","tabindex","0","aria-expanded","true","aria-disabled","","aria-checked","false","draggable","false","data-key","1",1,"el-tree-node","is-expanded","is-current","is-focusable"],[1,"el-tree-node__content",2,"padding-left","0px",3,"click"],[1,"el-icon","el-tree-node__expand-icon"],["viewBox","0 0 1024 1024","xmlns","http://www.w3.org/2000/svg"],["fill","currentColor","d","M384 192v640l384-320.064z"],[1,"el-tree-node__label"],["class","el-tree-node__children","role","group","aria-expanded","true","style","overflow: hidden;",3,"display",4,"ngIf"],["role","group","aria-expanded","true",1,"el-tree-node__children",2,"overflow","hidden"],[3,"data","leafLevel"]],template:function(n,s){1&n&&e.DNE(0,c,8,8,"div",0),2&n&&e.Y8G("ngForOf",s.data)},dependencies:[l.Sq,l.bT,t],encapsulation:2})}}return t})(),i=(()=>{class t{constructor(){this.data=[]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["nel-tree"]],inputs:{data:"data"},decls:3,vars:2,consts:[["role","tree",1,"el-tree"],[3,"data","leafLevel"],[1,"el-tree__drop-indicator",2,"display","none"]],template:function(n,s){1&n&&(e.j41(0,"div",0),e.nrm(1,"nel-tree-node",1)(2,"div",2),e.k0s()),2&n&&(e.R7$(),e.Y8G("data",s.data)("leafLevel",1))},dependencies:[C],encapsulation:2})}}return t})(),r=(()=>{class t{constructor(){this.data=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}]}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["nel-demo-tree-basic"]],decls:1,vars:1,consts:[[3,"data"]],template:function(n,s){1&n&&e.nrm(0,"nel-tree",0),2&n&&e.Y8G("data",s.data)},dependencies:[i],encapsulation:2})}}return t})();var d=a(9521),v=a(4356);const x=[{path:"",component:(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-tree"]],decls:11,vars:1,consts:[["code","import { NelTreeModule } from 'ng-element-ui/tree';"],[3,"codeUrl"],["demo",""]],template:function(n,s){1&n&&(e.j41(0,"h2"),e.EFF(1,"Tree \u6811\u5f62\u63a7\u4ef6"),e.k0s(),e.j41(2,"p"),e.EFF(3,"\u7528\u6e05\u6670\u7684\u5c42\u7ea7\u7ed3\u6784\u5c55\u793a\u4fe1\u606f\uff0c\u53ef\u5c55\u5f00\u6216\u6298\u53e0\u3002"),e.k0s(),e.nrm(4,"app-code",0),e.j41(5,"h3"),e.EFF(6,"\u57fa\u7840\u7528\u6cd5"),e.k0s(),e.j41(7,"p"),e.EFF(8,"\u57fa\u7840\u7684\u6811\u5f62\u7ed3\u6784\u5c55\u793a"),e.k0s(),e.j41(9,"app-demo",1),e.nrm(10,"nel-demo-tree-basic",2),e.k0s()),2&n&&(e.R7$(9),e.Y8G("codeUrl","components-tree-demo-basic.component"))},dependencies:[r,d.J,v.D],encapsulation:2})}}return t})()}];let F=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[u.iI.forChild(x),u.iI]})}}return t})(),b=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[m,f.G,F]})}}return t})()},9521:(T,p,a)=>{a.d(p,{J:()=>g});var l=a(4438),e=a(8426),h=a(177),m=a(3801),f=a(5692);function u(c,C){if(1&c){const i=l.RV6();l.qex(0),l.j41(1,"div",1)(2,"pre",2),l.nrm(3,"code",3),l.nI1(4,"highlightAuto"),l.k0s(),l.j41(5,"i",4),l.bIt("cdkCopyToClipboardCopied",function(d){l.eBV(i);const v=l.XpG();return l.Njj(v.copy(d))}),l.k0s()(),l.bVm()}if(2&c){const i=l.XpG();l.R7$(3),l.Y8G("innerHTML",l.bMT(4,2,i.code),l.npT),l.R7$(2),l.Y8G("cdkCopyToClipboard",i.code)}}let g=(()=>{class c{constructor(i){this.message=i}copy(i){i?this.message.success("\u590d\u5236\u6210\u529f"):this.message.error("\u590d\u5236\u5931\u8d25")}static{this.\u0275fac=function(r){return new(r||c)(l.rXU(e.mJ))}}static{this.\u0275cmp=l.VBU({type:c,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboardCopied","cdkCopyToClipboard"]],template:function(r,d){1&r&&l.DNE(0,u,6,4,"ng-container",0),2&r&&l.Y8G("ngIf",d.code)},dependencies:[h.bT,m.dF,f.V],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6}pre[class*=language-][_ngcontent-%COMP%]{margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]})}}return c})()}}]);