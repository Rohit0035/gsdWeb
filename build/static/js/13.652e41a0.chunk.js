(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[13],{561:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},577:function(e,t,n){"use strict";var o=n(7),r=n(12),a=n(0),s=n.n(a),i=n(3),c=n.n(i),u=n(78),l=n.n(u),d=n(54),f=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),g={tag:d.c,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,a=e.widths,i=e.tag,c=Object(r.a)(e,f),u=[];a.forEach((function(t,o){var r=e[t];if(delete c[t],r||""===r){var a=!o;if(Object(d.a)(r)){var s,i=a?"-":"-"+t+"-",f=b(a,t,r.size);u.push(Object(d.b)(l()(((s={})[f]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s)),n))}else{var p=b(a,t,r);u.push(p)}}})),u.length||u.push("col");var p=Object(d.b)(l()(t,u),n);return s.a.createElement(i,Object(o.a)({},c,{className:p}))};h.propTypes=g,h.defaultProps=v,t.a=h},745:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(561),s=n(35);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function u(e){return"number"===typeof e&&!isNaN(e)}function l(e){return"boolean"===typeof e}function d(e){return"string"===typeof e}function f(e){return"function"===typeof e}function p(e){return d(e)||f(e)?e:null}function m(e){return 0===e||e}var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function v(e){return Object(o.isValidElement)(e)||d(e)||f(e)||u(e)}var b={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},h={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function O(e){var t=e.enter,n=e.exit,a=e.appendPosition,s=void 0!==a&&a,i=e.collapse,c=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var a=e.children,i=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=s?t+"--"+i:t,g=s?n+"--"+i:n,v=Object(o.useRef)(),b=Object(o.useRef)(0);function h(e){if(e.target===f.current){var t=f.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===b.current&&(t.className=v.current)}}function O(){var e=f.current;e.removeEventListener("animationend",O),c?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()}return Object(o.useLayoutEffect)((function(){!function(){var e=f.current;v.current=e.className,e.className+=" "+m,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),Object(o.useEffect)((function(){p||(u?O():function(){b.current=1;var e=f.current;e.className+=" "+g,e.addEventListener("animationend",O)}())}),[p]),r.a.createElement(r.a.Fragment,null,a)}}var y={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(e)&&this.list.get(e).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}},T=["delay","staleId"];function E(e){var t=Object(o.useReducer)((function(e){return e+1}),0)[1],n=Object(o.useState)([]),r=n[0],a=n[1],s=Object(o.useRef)(null),i=Object(o.useRef)(new Map).current,g=function(e){return-1!==r.indexOf(e)},b=Object(o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:g,getToast:function(e){return i.get(e)}}).current;function h(e){var t=e.containerId;!b.props.limit||t&&b.containerId!==t||(b.count-=b.queue.length,b.queue=[])}function O(e){a((function(t){return m(e)?t.filter((function(t){return t!==e})):[]}))}function E(){var e=b.queue.shift();C(e.toastContent,e.toastProps,e.staleId)}function j(e,n){var r=n.delay,a=n.staleId,g=c(n,T);if(v(e)&&!function(e){return!s.current||b.props.enableMultiContainer&&e.containerId!==b.props.containerId||i.has(e.toastId)&&null==e.updateId}(g)){var h=g.toastId,y=g.updateId,j=g.data,I=b.props,_=function(){return O(h)},L=null==y;L&&b.count++;var N,R,w={toastId:h,updateId:y,isLoading:g.isLoading,theme:g.theme||I.theme,icon:null!=g.icon?g.icon:I.icon,isIn:!1,key:g.key||b.toastKey++,type:g.type,closeToast:_,closeButton:g.closeButton,rtl:I.rtl,position:g.position||I.position,transition:g.transition||I.transition,className:p(g.className||I.toastClassName),bodyClassName:p(g.bodyClassName||I.bodyClassName),style:g.style||I.toastStyle,bodyStyle:g.bodyStyle||I.bodyStyle,onClick:g.onClick||I.onClick,pauseOnHover:l(g.pauseOnHover)?g.pauseOnHover:I.pauseOnHover,pauseOnFocusLoss:l(g.pauseOnFocusLoss)?g.pauseOnFocusLoss:I.pauseOnFocusLoss,draggable:l(g.draggable)?g.draggable:I.draggable,draggablePercent:g.draggablePercent||I.draggablePercent,draggableDirection:g.draggableDirection||I.draggableDirection,closeOnClick:l(g.closeOnClick)?g.closeOnClick:I.closeOnClick,progressClassName:p(g.progressClassName||I.progressClassName),progressStyle:g.progressStyle||I.progressStyle,autoClose:!g.isLoading&&(N=g.autoClose,R=I.autoClose,!1===N||u(N)&&N>0?N:R),hideProgressBar:l(g.hideProgressBar)?g.hideProgressBar:I.hideProgressBar,progress:g.progress,role:g.role||I.role,deleteToast:function(){i.delete(h);var e=b.queue.length;if(b.count=m(h)?b.count-1:b.count-b.displayedToast,b.count<0&&(b.count=0),e>0){var n=m(h)?1:b.props.limit;if(1===e||1===n)b.displayedToast++,E();else{var o=n>e?e:n;b.displayedToast=o;for(var r=0;r<o;r++)E()}}else t()}};f(g.onOpen)&&(w.onOpen=g.onOpen),f(g.onClose)&&(w.onClose=g.onClose),w.closeButton=I.closeButton,!1===g.closeButton||v(g.closeButton)?w.closeButton=g.closeButton:!0===g.closeButton&&(w.closeButton=!v(I.closeButton)||I.closeButton);var P=e;Object(o.isValidElement)(e)&&!d(e.type)?P=Object(o.cloneElement)(e,{closeToast:_,toastProps:w,data:j}):f(e)&&(P=e({closeToast:_,toastProps:w,data:j})),I.limit&&I.limit>0&&b.count>I.limit&&L?b.queue.push({toastContent:P,toastProps:w,staleId:a}):u(r)&&r>0?setTimeout((function(){C(P,w,a)}),r):C(P,w,a)}}function C(e,t,n){var o=t.toastId;n&&i.delete(n),i.set(o,{content:e,props:t}),a((function(e){return[].concat(e,[o]).filter((function(e){return e!==n}))}))}return Object(o.useEffect)((function(){return b.containerId=e.containerId,y.cancelEmit(3).on(0,j).on(1,(function(e){return s.current&&O(e)})).on(5,h).emit(2,b),function(){return y.emit(3,b)}}),[]),Object(o.useEffect)((function(){b.isToastActive=g,b.displayedToast=r.length,y.emit(4,r.length,e.containerId)}),[r]),Object(o.useEffect)((function(){b.props=e})),{getToastToRender:function(t){var n=new Map,o=Array.from(i.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:g}}function j(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function C(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function I(e){var t=Object(o.useState)(!1),n=t[0],r=t[1],a=Object(o.useState)(!1),s=a[0],i=a[1],c=Object(o.useRef)(null),u=Object(o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,l=Object(o.useRef)(e),d=e.autoClose,p=e.pauseOnHover,m=e.closeToast,g=e.onClick,v=e.closeOnClick;function b(t){if(e.draggable){u.didMove=!1,document.addEventListener("mousemove",T),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T),document.addEventListener("touchend",E);var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=j(t.nativeEvent),u.y=C(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(){if(u.boundingRect){var t=u.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&u.x>=r&&u.x<=a&&u.y>=n&&u.y<=o?y():O()}}function O(){r(!0)}function y(){r(!1)}function T(t){var o=c.current;u.canDrag&&o&&(u.didMove=!0,n&&y(),u.x=j(t),u.y=C(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",o.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function E(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",E);var t=c.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}Object(o.useEffect)((function(){l.current=e})),Object(o.useEffect)((function(){return c.current&&c.current.addEventListener("d",O,{once:!0}),f(e.onOpen)&&e.onOpen(Object(o.isValidElement)(e.children)&&e.children.props),function(){var e=l.current;f(e.onClose)&&e.onClose(Object(o.isValidElement)(e.children)&&e.children.props)}}),[]),Object(o.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||y();window.addEventListener("focus",O),window.addEventListener("blur",y)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",y))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:h,onTouchEnd:h};return d&&p&&(I.onMouseEnter=y,I.onMouseLeave=O),v&&(I.onClick=function(e){g&&g(e),u.canCloseOnClick&&m()}),{playToast:O,pauseToast:y,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:I}}function _(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L(e){var t,n,r=e.delay,s=e.isRunning,c=e.closeToast,u=e.type,l=e.hide,d=e.className,p=e.style,m=e.controlledProgress,g=e.progress,v=e.rtl,b=e.isIn,h=e.theme,O=i({},p,{animationDuration:r+"ms",animationPlayState:s?"running":"paused",opacity:l?0:1});m&&(O.transform="scaleX("+g+")");var y=Object(a.a)("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+h,"Toastify__progress-bar--"+u,((t={})["Toastify__progress-bar--rtl"]=v,t)),T=f(d)?d({rtl:v,type:u,defaultClassName:y}):Object(a.a)(y,d),E=((n={})[m&&g>=1?"onTransitionEnd":"onAnimationEnd"]=m&&g<1?null:function(){b&&c()},n);return Object(o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:T,style:O},E))}L.defaultProps={type:h.DEFAULT,hide:!1};var N=["theme","type"],R=function(e){var t=e.theme,n=e.type,r=c(e,N);return Object(o.createElement)("svg",Object.assign({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var w={info:function(e){return Object(o.createElement)(R,Object.assign({},e),Object(o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return Object(o.createElement)(R,Object.assign({},e),Object(o.createElement)("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return Object(o.createElement)(R,Object.assign({},e),Object(o.createElement)("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return Object(o.createElement)(R,Object.assign({},e),Object(o.createElement)("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Object(o.createElement)("div",{className:"Toastify__spinner"})}},P=function(e){var t,n,r=I(e),s=r.isRunning,i=r.preventExitTransition,c=r.toastRef,u=r.eventHandlers,l=e.closeButton,p=e.children,m=e.autoClose,g=e.onClick,v=e.type,b=e.hideProgressBar,h=e.closeToast,O=e.transition,y=e.position,T=e.className,E=e.style,j=e.bodyClassName,C=e.bodyStyle,_=e.progressClassName,N=e.progressStyle,R=e.updateId,P=e.role,k=e.progress,B=e.rtl,M=e.toastId,x=e.deleteToast,A=e.isIn,D=e.isLoading,S=e.icon,F=e.theme,z=Object(a.a)("Toastify__toast","Toastify__toast-theme--"+F,"Toastify__toast--"+v,((t={})["Toastify__toast--rtl"]=B,t)),H=f(T)?T({rtl:B,position:y,type:v,defaultClassName:z}):Object(a.a)(z,T),q=!!k,U=w[v],Q={theme:F,type:v},V=U&&U(Q);return!1===S?V=void 0:f(S)?V=S(Q):Object(o.isValidElement)(S)?V=Object(o.cloneElement)(S,Q):d(S)?V=S:D&&(V=w.spinner()),Object(o.createElement)(O,{isIn:A,done:x,position:y,preventExitTransition:i,nodeRef:c},Object(o.createElement)("div",Object.assign({id:M,onClick:g,className:H},u,{style:E,ref:c}),Object(o.createElement)("div",Object.assign({},A&&{role:P},{className:f(j)?j({type:v}):Object(a.a)("Toastify__toast-body",j),style:C}),V&&Object(o.createElement)("div",{className:Object(a.a)("Toastify__toast-icon",(n={},n["Toastify--animate-icon Toastify__zoom-enter"]=!D,n))},V),Object(o.createElement)("div",null,p)),function(e){if(e){var t={closeToast:h,type:v,theme:F};return f(e)?e(t):Object(o.isValidElement)(e)?Object(o.cloneElement)(e,t):void 0}}(l),(m||q)&&Object(o.createElement)(L,Object.assign({},R&&!q?{key:"pb-"+R}:{},{rtl:B,theme:F,delay:m,isRunning:s,isIn:A,closeToast:h,hide:b,type:v,style:N,className:_,controlledProgress:q,progress:k}))))},k=O({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),B=function(e){var t=E(e),n=t.getToastToRender,r=t.containerRef,s=t.isToastActive,c=e.className,u=e.style,l=e.rtl,d=e.containerId;function m(e){var t,n=Object(a.a)("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=l,t));return f(c)?c({position:e,rtl:l,defaultClassName:n}):Object(a.a)(n,p(c))}return Object(o.createElement)("div",{ref:r,className:"Toastify",id:d},n((function(e,t){var n=t.length?i({},u):i({},u,{pointerEvents:"none"});return Object(o.createElement)("div",{className:m(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return Object(o.createElement)(P,Object.assign({},n,{isIn:s(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?_:n.closeButton}),t)})))})))};B.defaultProps={position:b.TOP_RIGHT,transition:k,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:_,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,x,A,D=new Map,S=[],F=!1;function z(){return Math.random().toString(36).substring(2,9)}function H(e){return e&&(d(e.toastId)||u(e.toastId))?e.toastId:z()}function q(e,t){return D.size>0?y.emit(0,e,t):(S.push({content:e,options:t}),F&&g&&(F=!1,x=document.createElement("div"),document.body.appendChild(x),Object(s.render)(Object(o.createElement)(B,Object.assign({},A)),x))),t.toastId}function U(e,t){return i({},t,{type:t&&t.type||e,toastId:H(t)})}function Q(e){return function(t,n){return q(t,U(e,n))}}function V(e,t){return q(e,U(h.DEFAULT,t))}V.loading=function(e,t){return q(e,U(h.DEFAULT,i({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},V.promise=function(e,t,n){var o,r=t.pending,a=t.error,s=t.success;r&&(o=d(r)?V.loading(r,n):V.loading(r.render,i({},n,r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=function(e,t,r){if(null!=t){var a=i({type:e},c,n,{data:r}),s=d(t)?{render:t}:t;return o?V.update(o,i({},a,s)):V(s.render,i({},a,s)),r}V.dismiss(o)},l=f(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",a,e)})),l},V.success=Q(h.SUCCESS),V.info=Q(h.INFO),V.error=Q(h.ERROR),V.warning=Q(h.WARNING),V.warn=V.warning,V.dark=function(e,t){return q(e,U(h.DEFAULT,i({theme:"dark"},t)))},V.dismiss=function(e){return y.emit(1,e)},V.clearWaitingQueue=function(e){return void 0===e&&(e={}),y.emit(5,e)},V.isActive=function(e){var t=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},V.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=D.get(n||M);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=i({},o,t,{toastId:t.toastId||e,updateId:z()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,q(s,a)}}),0)},V.done=function(e){V.update(e,{progress:1})},V.onChange=function(e){return f(e)&&y.on(4,e),function(){f(e)&&y.off(4,e)}},V.configure=function(e){void 0===e&&(e={}),F=!0,A=e},V.POSITION=b,V.TYPE=h,y.on(2,(function(e){M=e.containerId||e,D.set(M,e),S.forEach((function(e){y.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){D.delete(e.containerId||e),0===D.size&&y.off(0).off(1).off(5),g&&x&&document.body.removeChild(x)}))},746:function(e,t,n){}}]);
//# sourceMappingURL=13.652e41a0.chunk.js.map