"use strict";(self.webpackChunkng_element=self.webpackChunkng_element||[]).push([[9681],{9681:(x,h,s)=>{s.r(h),s.d(h,{PaginationModule:()=>N});var a=s(177),C=s(741),f=s(7691),t=s(4438);let P=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[a.MD,C.v,f.N]})}}return e})(),_=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[P]})}}return e})();var v=s(3887),r=s(1739);function b(e,d){if(1&e){const n=t.RV6();t.j41(0,"li",12),t.bIt("click",function(){t.eBV(n);const o=t.XpG().$implicit,c=t.XpG();return t.Njj(c.selectPage(o.value))}),t.EFF(1),t.k0s()}if(2&e){const n=t.XpG().$implicit,i=t.XpG();t.AVh("active",n.value===i.currentPage),t.R7$(),t.SpI(" ",n.value," ")}}function l(e,d){if(1&e){const n=t.RV6();t.j41(0,"li",13),t.bIt("click",function(){t.eBV(n);const o=t.XpG(2);return t.Njj(o.prevMore())}),t.nrm(1,"i",14),t.k0s()}}function p(e,d){if(1&e){const n=t.RV6();t.j41(0,"li",15),t.bIt("click",function(){t.eBV(n);const o=t.XpG(2);return t.Njj(o.nextMore())}),t.nrm(1,"i",14),t.k0s()}}function m(e,d){if(1&e&&(t.qex(0)(1,8),t.DNE(2,b,2,3,"li",9)(3,l,2,0,"li",10)(4,p,2,0,"li",11),t.bVm()()),2&e){const n=d.$implicit;t.R7$(),t.Y8G("ngSwitch",n.type),t.R7$(),t.Y8G("ngSwitchCase","number"),t.R7$(),t.Y8G("ngSwitchCase","more-prev"),t.R7$(),t.Y8G("ngSwitchCase","more-next")}}let g=(()=>{class e{constructor(){this.small=!1,this.background=!1,this.pageSize=10,this.total=0,this.pagerCount=7,this.currentPage=1,this.pageCount=0,this.pageIndexList=[],this.prevLen=0,this.nextLen=0}ngOnInit(){this.pageCount=Math.ceil(this.total/this.pageSize),this.pageCount<this.pagerCount&&(this.pagerCount=this.pageCount),this.initLen(),this.initPageIndex()}initLen(){if(this.pageCount>this.pagerCount){const n=(this.pagerCount-1)/2;(this.pagerCount-1)%2==0?(this.prevLen=n,this.nextLen=n):(this.prevLen=Math.floor(n),this.nextLen=Math.ceil(n))}}initPageIndex(){let n=!1,i=!1;this.pageCount>this.pagerCount&&(n=this.currentPage-1>this.prevLen,i=this.pageCount-this.currentPage>this.nextLen);const o=[];if(n||i)if(n&&!i){o.push({type:"number",value:1}),o.push({type:"more-prev",value:0});for(let u=this.pageCount-this.pagerCount+1;u<this.pageCount;u++)o.push({type:"number",value:u+1})}else if(!n&&i){const c=this.pagerCount-1;for(let u=0;u<c;u++)o.push({type:"number",value:u+1});o.push({type:"more-next",value:0}),o.push({type:"number",value:this.pageCount})}else{o.push({type:"number",value:1}),o.push({type:"more-prev",value:0});const u=this.currentPage+this.nextLen;for(let k=this.currentPage-this.prevLen+1;k<u;k++)o.push({type:"number",value:k});o.push({type:"more-next",value:0}),o.push({type:"number",value:this.pageCount})}else for(let c=0;c<this.pagerCount;c++)o.push({type:"number",value:c+1});this.pageIndexList=o}prevPage(){let n=this.currentPage-1;n<1&&(n=1),this.currentPage=n,this.initPageIndex()}nextPage(){let n=this.currentPage+1;n>this.pageCount&&(n=this.pageCount),this.currentPage=n,this.initPageIndex()}prevMore(){let n=this.currentPage-5;n<1&&(n=1),this.currentPage=n,this.initPageIndex()}nextMore(){let n=this.currentPage+5;n>this.pageCount&&(n=this.pageCount),this.currentPage=n,this.initPageIndex()}selectPage(n){this.currentPage=n,this.initPageIndex()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["nel-pagination"]],inputs:{small:"small",background:"background",pageSize:"pageSize",total:"total",pagerCount:"pagerCount",currentPage:"currentPage"},decls:9,vars:7,consts:[["role","pagination",1,"el-pagination"],["type","button",1,"btn-prev","is-first",3,"click","disabled"],[1,"el-icon"],[1,"el-icon-arrow-left"],[1,"el-pager"],[4,"ngFor","ngForOf"],["type","button",1,"btn-next","is-last",3,"click","disabled"],[1,"el-icon-arrow-right"],[3,"ngSwitch"],["class","number",3,"active","click",4,"ngSwitchCase"],["class","more btn-quickprev el-icon",3,"click",4,"ngSwitchCase"],["class","more btn-quicknext el-icon",3,"click",4,"ngSwitchCase"],[1,"number",3,"click"],[1,"more","btn-quickprev","el-icon",3,"click"],[1,"el-icon-more"],[1,"more","btn-quicknext","el-icon",3,"click"]],template:function(i,o){1&i&&(t.j41(0,"div",0)(1,"button",1),t.bIt("click",function(){return o.prevPage()}),t.j41(2,"i",2),t.nrm(3,"i",3),t.k0s()(),t.j41(4,"ul",4),t.DNE(5,m,5,4,"ng-container",5),t.k0s(),t.j41(6,"button",6),t.bIt("click",function(){return o.nextPage()}),t.j41(7,"i",2),t.nrm(8,"i",7),t.k0s()()()),2&i&&(t.AVh("is-background",o.background)("el-pagination--small",o.small),t.R7$(),t.Y8G("disabled",1===o.currentPage||null),t.R7$(4),t.Y8G("ngForOf",o.pageIndexList),t.R7$(),t.Y8G("disabled",o.currentPage===o.pageCount||null))},dependencies:[a.Sq,a.ux,a.e1],encapsulation:2})}}return e})(),y=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["nel-demo-pagination-basic"]],decls:6,vars:2,consts:[[3,"total"]],template:function(i,o){1&i&&(t.j41(0,"p"),t.EFF(1,"When you have few pages"),t.k0s(),t.nrm(2,"nel-pagination",0),t.j41(3,"p"),t.EFF(4,"When you have more than 7 pages"),t.k0s(),t.nrm(5,"nel-pagination",0)),2&i&&(t.R7$(2),t.Y8G("total",50),t.R7$(3),t.Y8G("total",1e3))},dependencies:[g],encapsulation:2})}}return e})(),F=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["nel-demo-pagination-pager-count"]],decls:1,vars:2,consts:[[3,"total","pagerCount"]],template:function(i,o){1&i&&t.nrm(0,"nel-pagination",0),2&i&&t.Y8G("total",500)("pagerCount",11)},dependencies:[g],encapsulation:2})}}return e})(),E=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["nel-demo-pagination-background"]],decls:1,vars:2,consts:[[3,"total","background"]],template:function(i,o){1&i&&t.nrm(0,"nel-pagination",0),2&i&&t.Y8G("total",1e3)("background",!0)},dependencies:[g],encapsulation:2})}}return e})(),I=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["nel-demo-pagination-small"]],decls:2,vars:5,consts:[[3,"total","small"],[3,"total","small","background"]],template:function(i,o){1&i&&t.nrm(0,"nel-pagination",0)(1,"nel-pagination",1),2&i&&(t.Y8G("total",50)("small",!0),t.R7$(),t.Y8G("total",50)("small",!0)("background",!0))},dependencies:[g],encapsulation:2})}}return e})();var j=s(9521),M=s(4356);const G=[{path:"",component:(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-pagination"]],decls:21,vars:4,consts:[["code","import { NelPaginationModule } from 'ng-element-ui/pagination';"],[3,"codeUrl"],["demo",""]],template:function(i,o){1&i&&(t.j41(0,"h2"),t.EFF(1,"PageHeader \u9875\u5934"),t.k0s(),t.j41(2,"p"),t.EFF(3,"\u5982\u679c\u9875\u9762\u7684\u8def\u5f84\u6bd4\u8f83\u7b80\u5355\uff0c\u63a8\u8350\u4f7f\u7528\u9875\u5934\u7ec4\u4ef6\u800c\u975e\u9762\u5305\u5c51\u7ec4\u4ef6\u3002"),t.k0s(),t.nrm(4,"app-code",0),t.j41(5,"h3"),t.EFF(6,"\u57fa\u7840\u7528\u6cd5"),t.k0s(),t.j41(7,"app-demo",1),t.nrm(8,"nel-demo-pagination-basic",2),t.k0s(),t.j41(9,"h3"),t.EFF(10,"\u8bbe\u7f6e\u6700\u5927\u9875\u7801\u6309\u94ae\u6570"),t.k0s(),t.j41(11,"app-demo",1),t.nrm(12,"nel-demo-pagination-pager-count",2),t.k0s(),t.j41(13,"h3"),t.EFF(14,"\u5e26\u6709\u80cc\u666f\u8272\u7684\u5206\u9875"),t.k0s(),t.j41(15,"app-demo",1),t.nrm(16,"nel-demo-pagination-background",2),t.k0s(),t.j41(17,"h3"),t.EFF(18,"\u5c0f\u578b\u5206\u9875"),t.k0s(),t.j41(19,"app-demo",1),t.nrm(20,"nel-demo-pagination-small",2),t.k0s()),2&i&&(t.R7$(7),t.Y8G("codeUrl","components-pagination-demo-basic.component"),t.R7$(4),t.Y8G("codeUrl","components-pagination-demo-pager-count.component"),t.R7$(4),t.Y8G("codeUrl","components-pagination-demo-background.component"),t.R7$(4),t.Y8G("codeUrl","components-pagination-demo-small.component"))},dependencies:[y,F,E,I,j.J,M.D],encapsulation:2})}}return e})()}];let T=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[r.iI.forChild(G),r.iI]})}}return e})(),N=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[_,v.G,T]})}}return e})()},9521:(x,h,s)=>{s.d(h,{J:()=>v});var a=s(4438),C=s(8426),f=s(177),t=s(3801),P=s(5692);function _(r,b){if(1&r){const l=a.RV6();a.qex(0),a.j41(1,"div",1)(2,"pre",2),a.nrm(3,"code",3),a.nI1(4,"highlightAuto"),a.k0s(),a.j41(5,"i",4),a.bIt("cdkCopyToClipboardCopied",function(m){a.eBV(l);const g=a.XpG();return a.Njj(g.copy(m))}),a.k0s()(),a.bVm()}if(2&r){const l=a.XpG();a.R7$(3),a.Y8G("innerHTML",a.bMT(4,2,l.code),a.npT),a.R7$(2),a.Y8G("cdkCopyToClipboard",l.code)}}let v=(()=>{class r{constructor(l){this.message=l}copy(l){l?this.message.success("\u590d\u5236\u6210\u529f"):this.message.error("\u590d\u5236\u5931\u8d25")}static{this.\u0275fac=function(p){return new(p||r)(a.rXU(C.mJ))}}static{this.\u0275cmp=a.VBU({type:r,selectors:[["app-code"]],inputs:{code:"code"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"highlight"],[1,"language-ts"],[1,"hljs",3,"innerHTML"],[1,"el-icon-copy-document",3,"cdkCopyToClipboardCopied","cdkCopyToClipboard"]],template:function(p,m){1&p&&a.DNE(0,_,6,4,"ng-container",0),2&p&&a.Y8G("ngIf",m.code)},dependencies:[f.bT,t.dF,P.V],styles:["pre[class*=language-][_ngcontent-%COMP%]{background:#f6f6f6}pre[class*=language-][_ngcontent-%COMP%]{margin:16px 0;padding:12px 20px;overflow:auto}.highlight[_ngcontent-%COMP%]{position:relative}i[_ngcontent-%COMP%]{position:absolute;top:12px;right:10px;font-size:24px;color:#b0bec5;cursor:pointer}i[_ngcontent-%COMP%]:hover{color:#6e6e6e}"]})}}return r})()}}]);