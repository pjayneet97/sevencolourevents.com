(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"4ro/":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),o=n("ofXK"),r=n("TEn/");function c(t,e){if(1&t&&i.Qb(0,"ion-icon",5),2&t){const t=i.hc();i.pc("name",t.icon)}}function s(t,e){if(1&t&&i.Qb(0,"img",6),2&t){const t=i.hc();i.pc("src",t.image,i.Bc)("width",t.imageWidth)}}let a=(()=>{class t{constructor(){this.text="",this.icon="alert",this.image="",this.imageWidth=""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["empty-view"]],inputs:{text:"text",icon:"icon",image:"image",imageWidth:"imageWidth"},decls:6,vars:3,consts:[[1,"container"],[3,"name",4,"ngIf"],[3,"src","width",4,"ngIf"],["color","medium"],[1,"bold"],[3,"name"],[3,"src","width"]],template:function(t,e){1&t&&(i.Vb(0,"div",0),i.Fc(1,c,1,1,"ion-icon",1),i.Fc(2,s,1,2,"img",2),i.Vb(3,"ion-text",3),i.Vb(4,"p",4),i.Hc(5),i.Ub(),i.Ub(),i.Ub()),2&t&&(i.Cb(1),i.pc("ngIf",!e.image),i.Cb(1),i.pc("ngIf",e.image),i.Cb(3),i.Ic(e.text))},directives:[o.l,r.S,r.r],styles:["[_nghost-%COMP%]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;text-align:center;height:100%}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:64px}"]}),t})()},aFRw:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),o=n("3Pt+"),r=n("tyNb"),c=n("TEn/"),s=n("mrSG"),a=n("NV1z"),b=n("PoVt"),l=n("R0Ic"),d=n("XNiG"),h=n("VRyK"),u=n("62S+"),g=n("fXoL"),p=n("hrlM"),f=n("4ro/"),m=n("wf0l"),w=n("sYmb");function v(t,e){1&t&&(g.Vb(0,"div",17),g.Qb(1,"ion-spinner"),g.Ub())}function y(t,e){1&t&&(g.Qb(0,"empty-view",18),g.ic(1,"translate")),2&t&&g.pc("text",g.jc(1,1,"ERROR_DATA"))}function C(t,e){1&t&&(g.Qb(0,"empty-view",18),g.ic(1,"translate")),2&t&&g.pc("text",g.jc(1,1,"EMPTY_DATA"))}const V=function(){return["../items"]};function x(t,e){1&t&&(g.Vb(0,"div",19),g.Vb(1,"h1",20),g.Hc(2),g.ic(3,"translate"),g.Ub(),g.Vb(4,"ion-button",21),g.Hc(5),g.ic(6,"translate"),g.Ub(),g.Ub()),2&t&&(g.Cb(2),g.Ic(g.jc(3,3,"Shops")),g.Cb(2),g.pc("routerLink",g.sc(7,V)),g.Cb(1),g.Jc(" ",g.jc(6,5,"All Products")," "))}const O=function(t){return{shop:t}};function j(t,e){if(1&t&&(g.Vb(0,"div"),g.Vb(1,"div",24),g.Vb(2,"div",25),g.Vb(3,"div",26),g.Qb(4,"img",27),g.Ub(),g.Vb(5,"div",28),g.Vb(6,"a",29),g.Hc(7),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&t){const t=e.$implicit,n=g.hc(2);g.Cb(1),g.pc("routerLink",g.sc(5,V))("queryParams",g.tc(6,O,t.id)),g.Cb(3),g.pc("customObservable",n.loadAndScroll)("lazyLoad",null==t.image?null:t.image.url()),g.Cb(3),g.Jc(" ",t.name," ")}}function k(t,e){if(1&t&&(g.Vb(0,"div",22),g.Fc(1,j,8,8,"div",23),g.Ub()),2&t){const t=g.hc();g.pc("@staggerIn",t.shops.length),g.Cb(1),g.pc("ngForOf",t.shops)("ngForTrackBy",t.trackByFn)}}let U=(()=>{class t extends a.a{constructor(t,e,n){super(t),this.shopService=e,this.itemService=n,this.searchTerm="",this.suggestions=[],this.shops=[]}ngOnInit(){this.setupObservable()}onSearch(t={}){return Object(s.a)(this,void 0,void 0,(function*(){if(this.searchTerm=t.target.value,this.searchTerm)try{this.suggestions=yield this.itemService.load({tag:this.searchTerm.toLowerCase(),limit:10}),console.log(this.suggestions)}catch(e){console.log(e.message)}}))}onClearSearch(){return Object(s.a)(this,void 0,void 0,(function*(){this.suggestions=[]}))}enableMenuSwipe(){return!1}ionViewDidEnter(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.getTrans("CATEGORIES");this.setPageTitle(t),this.setMetaTags({title:t}),this.shops.length?this.onContentLoaded():(yield this.showLoadingView({showOverlay:!1}),this.loadData())}))}setupObservable(){this.contentLoaded=new d.a,this.loadAndScroll=Object(h.a)(this.container.ionScroll,this.contentLoaded)}onContentLoaded(){setTimeout(()=>{this.contentLoaded.next()},400)}loadData(t={}){return Object(s.a)(this,void 0,void 0,(function*(){this.refresher=t.target;try{this.shops=yield this.shopService.load(),this.onRefreshComplete(),this.shops.length?this.showContentView():this.showEmptyView(),this.onContentLoaded()}catch(e){this.translate.get("ERROR_NETWORK").subscribe(t=>this.showToast(t)),this.onRefreshComplete(),this.showErrorView()}}))}trackByFn(t,e){return e?e.id:null}}return t.\u0275fac=function(e){return new(e||t)(g.Pb(g.r),g.Pb(b.a),g.Pb(u.a))},t.\u0275cmp=g.Jb({type:t,selectors:[["app-shop-list"]],viewQuery:function(t,e){var n;1&t&&g.Dc(c.n,!0),2&t&&g.wc(n=g.ec())&&(e.container=n.first)},features:[g.zb],decls:24,vars:14,consts:[[1,"d-block","d-sm-none"],[1,"ion-no-border","border-bottom"],["fixed",""],["slot","start"],["defaultHref","/1/browse"],["color","white","mode","ios",1,"py-2","px-0",3,"placeholder","ionClear","ionChange"],[1,"d-none","d-sm-block"],["scrollEvents","true"],["container",""],["slot","fixed",3,"ionRefresh"],[3,"pullingText","refreshingText"],["class","ion-text-center",4,"ngIf"],["icon","alert-circle-outline",3,"text",4,"ngIf"],[1,"jumbotron","jumbotron-fluid","my-0","bg-white","pb-0"],[1,"container","px-lg-0","mt-0"],["class","container d-flex justify-content-between section-header",4,"ngIf"],["class","row row-cols-3 row-cols-sm-3 row-cols-md-5 px-2",4,"ngIf"],[1,"ion-text-center"],["icon","alert-circle-outline",3,"text"],[1,"container","d-flex","justify-content-between","section-header"],[1,"h2","section-heading","my-auto"],["size","small","shape","undefined","color","undefined","fill","clear",1,"my-auto","text-capitalize","shadow-sm","ion-button",3,"routerLink"],[1,"row","row-cols-3","row-cols-sm-3","row-cols-md-5","px-2"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col",3,"routerLink","queryParams"],[1,"card","bg-transparent","border-0","text-center","cursor-pointer"],[1,"card-header","p-0","border-0","bg-transparent"],["defaultImage","./assets/imgs/placeholder.png",1,"square-category-img","img-fluid","card-img-top","rounded-0",3,"customObservable","lazyLoad"],[1,"card-body","p-0","mt-2","mb-3"],[1,"card-title","stretched-link","text-decoration-none","text-dark","square-category-title","h5"]],template:function(t,e){1&t&&(g.Vb(0,"div",0),g.Vb(1,"ion-header",1),g.Vb(2,"ion-toolbar",2),g.Vb(3,"ion-buttons",3),g.Qb(4,"ion-back-button",4),g.Ub(),g.Vb(5,"div"),g.Vb(6,"ion-searchbar",5),g.dc("ionClear",(function(){return e.onClearSearch()}))("ionChange",(function(t){return e.onSearch(t)})),g.ic(7,"translate"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Vb(8,"div",6),g.Qb(9,"app-navbar"),g.Ub(),g.Vb(10,"ion-content",7,8),g.Vb(12,"ion-refresher",9),g.dc("ionRefresh",(function(t){return e.loadData(t)})),g.Qb(13,"ion-refresher-content",10),g.ic(14,"translate"),g.ic(15,"translate"),g.Ub(),g.Vb(16,"ion-grid",2),g.Fc(17,v,2,0,"div",11),g.Fc(18,y,2,3,"empty-view",12),g.Fc(19,C,2,3,"empty-view",12),g.Vb(20,"section",13),g.Vb(21,"div",14),g.Fc(22,x,7,8,"div",15),g.Fc(23,k,2,3,"div",16),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&t&&(g.Cb(6),g.pc("placeholder",g.jc(7,8,"SEARCH_PLACEHOLDER")),g.Cb(7),g.qc("pullingText",g.jc(14,10,"PULL_TO_REFRESH")),g.qc("refreshingText",g.jc(15,12,"REFRESHING")),g.Cb(4),g.pc("ngIf",e.isLoadingViewVisible),g.Cb(1),g.pc("ngIf",e.isErrorViewVisible),g.Cb(1),g.pc("ngIf",e.isEmptyViewVisible),g.Cb(3),g.pc("ngIf",e.isContentViewVisible),g.Cb(1),g.pc("ngIf",e.isContentViewVisible))},directives:[c.q,c.X,c.k,c.g,c.h,c.J,c.jb,p.a,c.n,c.F,c.G,c.p,i.l,c.O,f.a,c.j,c.hb,r.h,i.k,m.a],pipes:[w.c],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-grid[_ngcontent-%COMP%]{background:#fff}.bg-img[_ngcontent-%COMP%]{background-color:var(--ion-color-light);background-size:cover;background-repeat:no-repeat;border:6px solid var(--ion-color-light-shade);border-radius:16px;background-position:50%;height:150px}@media (min-width:992px){.bg-img[_ngcontent-%COMP%]{height:300px}}"],data:{animation:[Object(l.l)("staggerIn",[Object(l.k)("* => *",[Object(l.f)(":enter",Object(l.j)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(l.f)(":enter",Object(l.h)("40ms",[Object(l.e)("100ms",Object(l.j)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),t})();var T=n("d2mR");n.d(e,"ShopListPageModule",(function(){return L}));const I=[{path:"",component:U}];let L=(()=>{class t{}return t.\u0275mod=g.Nb({type:t}),t.\u0275inj=g.Mb({factory:function(e){return new(e||t)},imports:[[i.c,o.f,c.Y,T.a,r.j.forChild(I)]]}),t})()}}]);