(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{vnES:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_nav",(function(){return v})),i.d(t,"ion_nav_link",(function(){return m}));var s=i("imtE"),n=i("AfW+"),r=i("aiEM"),o=i("0AIG"),a=i("kBU6"),h=i("m9yc"),c=i("7MJf");class l{constructor(e,t){this.component=e,this.params=t,this.state=1}async init(e){if(this.state=2,!this.element){const t=this.component;this.element=await Object(h.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)}}_destroy(){Object(r.b)(3!==this.state,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}const u=(e,t,i)=>{if(!e)return!1;if(e.component!==t)return!1;const s=e.params;if(s===i)return!0;if(!s&&!i)return!0;if(!s||!i)return!1;const n=Object.keys(s),r=Object.keys(i);if(n.length!==r.length)return!1;for(const o of n)if(s[o]!==i[o])return!1;return!0},d=(e,t)=>e?e instanceof l?e:new l(e,t):null,v=class{constructor(e){Object(s.k)(this,e),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(s.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(s.e)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(s.e)(this,"ionNavDidChange",3)}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=Object(s.d)(this);this.swipeGesture=n.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await i.e(9).then(i.bind(null,"vYiJ"))).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const e of this.views)Object(c.c)(e.element,a.e),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,i,s){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:i},s)}insert(e,t,i,s,n){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:i}],opts:s},n)}insertPages(e,t,i,s){return this.queueTrns({insertStart:e,insertViews:t,opts:i},s)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,i){const s={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(s.removeView=e,s.removeStart=1):"number"==typeof e&&(s.removeStart=e+1),this.queueTrns(s,i)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,i,s){return this.queueTrns({removeStart:e,removeCount:t,opts:i},s)}setRoot(e,t,i,s){return this.setPages([{page:e,params:t}],i,s)}setPages(e,t,i){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},i)}setRouteId(e,t,i){const s=this.getActiveSync();if(u(s,e,t))return Promise.resolve({changed:!1,element:s.element});let n;const r=new Promise(e=>n=e);let o;const a={updateURL:!1,viewIsReady:e=>{let t;const i=new Promise(e=>t=e);return n({changed:!0,element:e,markVisible:async()=>{t(),await o}}),i}};if("root"===i)o=this.setRoot(e,t,a);else{const s=this.views.find(i=>u(i,e,t));s?o=this.popTo(s,Object.assign(Object.assign({},a),{direction:"back"})):"forward"===i?o=this.push(e,t,a):"back"===i&&(o=this.setRoot(e,t,Object.assign(Object.assign({},a),{direction:"back",animated:!0})))}return r}async getRouteId(){const e=this.getActiveSync();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,i=t.indexOf(e);return i>0?t[i-1]:void 0}queueTrns(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const i=new Promise((t,i)=>{e.resolve=t,e.reject=i});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),i}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");t&&t.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const t=this.getActiveSync(),i=this.getEnteringView(e,t);if(!t&&!i)throw new Error("no views in the stack to be removed");i&&1===i.state&&await i.init(this.el),this.postViewInit(i,t,e);const s=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==t?await this.transition(i,t,e):{hasCompleted:!0,requiresTransition:!1};this.success(s,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(r.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(r.b)(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const i=e.insertViews;if(!i)return;Object(r.b)(i.length>0,"length can not be zero");const s=i.map(e=>e instanceof l?e:"page"in e?d(e.page,e.params):d(e,void 0)).filter(e=>null!==e);if(0===s.length)throw new Error("invalid views to insert");for(const n of s){n.delegate=e.opts.delegate;const t=n.nav;if(t&&t!==this)throw new Error("inserted view was already inserted");if(3===n.state)throw new Error("inserted view was already destroyed")}e.insertViews=s}getEnteringView(e,t){const i=e.insertViews;if(void 0!==i)return i[i.length-1];const s=e.removeStart;if(void 0!==s){const i=this.views,n=s+e.removeCount;for(let e=i.length-1;e>=0;e--){const r=i[e];if((e<s||e>=n)&&r!==t)return r}}}postViewInit(e,t,i){Object(r.b)(t||e,"Both leavingView and enteringView are null"),Object(r.b)(i.resolve,"resolve must be valid"),Object(r.b)(i.reject,"reject must be valid");const s=i.opts,n=i.insertViews,o=i.removeStart,h=i.removeCount;let l;if(void 0!==o&&void 0!==h){Object(r.b)(o>=0,"removeStart can not be negative"),Object(r.b)(h>=0,"removeCount can not be negative"),l=[];for(let i=0;i<h;i++){const s=this.views[i+o];s&&s!==e&&s!==t&&l.push(s)}s.direction=s.direction||"back"}const u=this.views.length+(void 0!==n?n.length:0)-(void 0!==h?h:0);if(Object(r.b)(u>=0,"final balance can not be negative"),0===u)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(n){let e=i.insertStart;for(const t of n)this.insertViewAt(t,e),e++;i.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(l&&l.length>0){for(const e of l)Object(c.c)(e.element,a.c),Object(c.c)(e.element,a.d),Object(c.c)(e.element,a.e);for(const e of l)this.destroyView(e)}}async transition(e,t,i){const r=i.opts,o=r.progressAnimation?e=>this.sbAni=e:void 0,a=Object(s.d)(this),h=e.element,l=t&&t.element,u=Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||n.b.get("navAnimation"),progressCallback:o,animated:this.animated&&n.b.getBoolean("animated",!0),enteringEl:h,leavingEl:l},r),{hasCompleted:d}=await Object(c.e)(u);return this.transitionFinish(d,e,t,r)}transitionFinish(e,t,i,s){const n=e?t:i;return n&&this.cleanup(n),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:i,direction:s.direction}}insertViewAt(e,t){const i=this.views,s=i.indexOf(e);s>-1?(Object(r.b)(e.nav===this,"view is not part of the nav"),i.splice(t,0,i.splice(s,1)[0])):(Object(r.b)(!e.nav,"nav is used"),e.nav=this,i.splice(t,0,e))}removeView(e){Object(r.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,i=t.indexOf(e);Object(r.b)(i>-1,"view must be part of the stack"),i>=0&&t.splice(i,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,i=t.indexOf(e);for(let s=t.length-1;s>=0;s--){const e=t[s],n=e.element;s>i?(Object(c.c)(n,a.e),this.destroyView(e)):s<i&&Object(c.d)(n,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,i){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let s=e?-.001:.001;e?s+=Object(o.a)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=Object(o.a)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,s,i)}}render(){return Object(s.i)("slot",null)}get el(){return Object(s.f)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}},m=class{constructor(e){Object(s.k)(this,e),this.routerDirection="forward",this.onClick=()=>((e,t,i,s)=>{const n=this.el.closest("ion-nav");if(n)if("forward"===t){if(void 0!==i)return n.push(i,s,{skipIfBusy:!0})}else if("root"===t){if(void 0!==i)return n.setRoot(i,s,{skipIfBusy:!0})}else if("back"===t)return n.pop({skipIfBusy:!0});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps)}render(){return Object(s.i)(s.a,{onClick:this.onClick})}get el(){return Object(s.f)(this)}}}}]);