(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{UDB2:function(n,t,e){"use strict";e.r(t),e.d(t,"GuideModule",function(){return k});var i=e("ofXK"),r=e("KOtk"),a=e("nnIi"),l=e("PCNd"),o=e("tyNb"),c=e("pLZG");const s=[{title:"\u5f00\u53d1\u6307\u5357",menuList:[{link:"installation",name:"\u5b89\u88c5"},{link:"quickstart",name:"\u5feb\u901f\u4e0a\u624b"},{link:"transition",name:"\u5185\u7f6e\u52a8\u753b"},{link:"changelog",name:"\u66f4\u65b0\u65e5\u5fd7"}]}];var b=e("fXoL"),u=e("dFDY"),d=e("QaGy"),p=e("ZOkb");const h=["scrollbar"];function g(n,t){if(1&n&&(b.Tb(0,"li",2),b.Tb(1,"a",15),b.Tb(2,"p",16),b.yc(3),b.Sb(),b.Sb(),b.Sb()),2&n){const n=t.$implicit;b.zb(1),b.jc("routerLink",n.link),b.zb(2),b.zc(n.name)}}function m(n,t){if(1&n&&(b.Tb(0,"div",11),b.Tb(1,"div",12),b.yc(2),b.Sb(),b.Tb(3,"ul",13),b.wc(4,g,4,2,"li",14),b.Sb(),b.Sb()),2&n){const n=t.$implicit;b.zb(2),b.zc(n.title),b.zb(2),b.jc("ngForOf",n.menuList)}}const f=[{path:"",component:(()=>{class n{constructor(n){this.router=n,this.groupList=s}ngOnInit(){this.router.events.pipe(Object(c.a)(n=>n instanceof o.b)).subscribe(()=>{this.scrollbar.vertical.scrollTop=0,this.scrollbar.verticalScrollHandle(!0)})}}return n.\u0275fac=function(t){return new(t||n)(b.Nb(o.e))},n.\u0275cmp=b.Hb({type:n,selectors:[["app-guide"]],viewQuery:function(n,t){if(1&n&&b.Cc(h,1),2&n){let n;b.oc(n=b.bc())&&(t.scrollbar=n.first)}},decls:14,vars:4,consts:[[1,"sidebar"],[1,"side-nav","is-fade"],[1,"nav-item"],["class","nav-group",4,"ngFor","ngForOf"],[1,"page-content","has-sidebar"],[3,"nelWrapClass"],["scrollbar",""],[1,"doc-content-wrapper"],[1,"doc-content-container"],["type","guide/",3,"routers"],[3,"nelTarget"],[1,"nav-group"],[1,"nav-group__title"],[1,"pure-menu-list",2,"height","auto"],["class","nav-item",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"link",3,"routerLink"],[1,"link-text"]],template:function(n,t){1&n&&(b.Tb(0,"div",0),b.Tb(1,"nel-scrollbar"),b.Tb(2,"div",1),b.Tb(3,"ul"),b.Tb(4,"li",2),b.wc(5,m,5,2,"div",3),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(6,"main",4),b.Tb(7,"nel-scrollbar",5,6),b.Tb(9,"div",7),b.Tb(10,"div",8),b.Ob(11,"router-outlet"),b.Ob(12,"app-nav-bottom",9),b.Sb(),b.Sb(),b.Ob(13,"nel-backtop",10),b.Sb(),b.Sb()),2&n&&(b.zb(5),b.jc("ngForOf",t.groupList),b.zb(2),b.jc("nelWrapClass","mainWrap"),b.zb(5),b.jc("routers",t.groupList),b.zb(1),b.jc("nelTarget",".mainWrap"))},directives:[u.a,i.i,o.j,d.a,p.a,o.h,o.g],encapsulation:2}),n})(),children:[{path:"installation",loadChildren:()=>Promise.all([e.e(0),e.e(64)]).then(e.bind(null,"Kkej")).then(n=>n.InstallationModule)},{path:"quickstart",loadChildren:()=>Promise.all([e.e(0),e.e(65)]).then(e.bind(null,"0Rov")).then(n=>n.QuickstartModule)},{path:"transition",loadChildren:()=>Promise.all([e.e(0),e.e(1),e.e(32)]).then(e.bind(null,"klDd")).then(n=>n.TransitionModule)},{path:"changelog",loadChildren:()=>e.e(75).then(e.bind(null,"kiix")).then(n=>n.ChangelogModule)},{path:"**",redirectTo:"installation"}]}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=b.Lb({type:n}),n.\u0275inj=b.Kb({imports:[[o.i.forChild(f)],o.i]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=b.Lb({type:n}),n.\u0275inj=b.Kb({imports:[[i.c,r.a,a.a,l.a,v]]}),n})()}}]);