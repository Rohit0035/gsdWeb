(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[33],{552:function(e,t,n){"use strict";e.exports=n(578)},555:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(6),c=n(181);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(c.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:o.d,finalItem:"span"}))))}},558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=c(n(565)),a=c(n(559)),o=c(n(567));function c(e){return e&&e.__esModule?e:{default:e}}var i=a.default;t.default=i},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=i(n(3)),o=i(n(35)),c=n(566);function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,h,y=function(e){function t(){return u(this,t),f(this,p(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);o.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),a=document.head,o=a.innerHTML;(r=(r=r.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,c.getDuplicateTitle)();n&&(0,c.removeChild)(a,n)}else if("meta"===t){var r=(0,c.getDuplicateMeta)(e);r&&(0,c.removeChild)(a,r)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(a,o)}})),(0,c.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,a),i&&s(n,i),t}(r.Component);d=y,b="contextTypes",h={extract:a.default.func},b in d?Object.defineProperty(d,b,{value:h,enumerable:!0,configurable:!0,writable:!0}):d[b]=h;var v=y;t.default=v,e.exports=t.default},565:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(0),o=(r=n(3))&&r.__esModule?r:{default:r};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return i(this,t),u(this,s(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&l(n.prototype,r),o&&l(n,o),t}(a.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:o.default.func});var m=p;t.default=m,e.exports=t.default},566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],c=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?n=e:"meta"===a?r.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var c=e[r],i=c.props.id;(i?!t.id[i]:0===a.filter((function(e){var n=c.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(c),o.forEach((function(e){var n=c.props[e];n&&(t[e][n]=c)})))},c=e.length-1;c>=0;c--)r(c);return n}(r)),[n],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var a,o=e.getAttribute(r);return o?n.concat((a=t.querySelectorAll("[".concat(r,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,a=t.length;r<a;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],a=r.concat(["itemProp"]),o=a.concat(["id"])},567:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=c(n(3)),o=c(n(559));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,d,b,h=function(e){function t(){return l(this,t),s(this,f(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.default.createElement(o.default,null,r.default.createElement("title",null,this.props.title))}}])&&u(n.prototype,a),c&&u(n,c),t}(r.Component);m=h,d="propTypes",b={title:a.default.string},d in m?Object.defineProperty(m,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):m[d]=b;var y=h;t.default=y,e.exports=t.default},569:function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n(569);function o(e){var t=Object(a.a)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},576:function(e,t,n){"use strict";var r=n(15),a=n(553),o=n(78),c=n.n(o),i=/-(.)/g;var l=n(0),u=n(560),s=n(552);n.d(t,"a",(function(){return m}));var f=["className","bsPrefix","as"],p=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,o=void 0===n?p(e):n,i=t.Component,m=t.defaultProps,d=l.forwardRef((function(t,n){var o=t.className,l=t.bsPrefix,p=t.as,m=void 0===p?i||"div":p,d=Object(a.a)(t,f),b=Object(u.a)(l,e);return Object(s.jsx)(m,Object(r.a)({ref:n,className:c()(o,b)},d))}));return d.defaultProps=m,d.displayName=o,d}},578:function(e,t,n){"use strict";n(135);var r=n(0),a=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,s=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:s,props:o,_owner:c.current}}t.jsx=u,t.jsxs=u},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));function r(e){return"".concat("data-rr-ui-").concat(e)}function a(e){return"".concat("rrUi").concat(e)}},587:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},588:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}},599:function(e,t,n){"use strict";var r,a=n(15),o=n(553),c=n(182),i=n(78),l=n.n(i),u=n(0),s=n(25),f=n(591),p=n(590),m=n(595),d=n(552),b=["className","children","transitionClasses"],h=(r={},Object(c.a)(r,s.b,"show"),Object(c.a)(r,s.a,"show"),r),y=u.forwardRef((function(e,t){var n=e.className,r=e.children,c=e.transitionClasses,i=void 0===c?{}:c,s=Object(o.a)(e,b),y=Object(u.useCallback)((function(e,t){Object(p.a)(e),null==s.onEnter||s.onEnter(e,t)}),[s]);return Object(d.jsx)(m.a,Object(a.a)(Object(a.a)({ref:t,addEndListener:f.a},s),{},{onEnter:y,childRef:r.ref,children:function(e,t){return u.cloneElement(r,Object(a.a)(Object(a.a)({},t),{},{className:l()("fade",n,r.props.className,h[e],i[e])}))}}))}));y.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},y.displayName="Fade",t.a=y},600:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},856:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n(182),a=n(183),o=n(184),c=n(185),i=n(186),l=n(0),u=n.n(l),s=n(558),f=n.n(s),p=n(6),m=(n(181),n(582)),d=n(604),b=(n(105),n(180)),h=(n(555),n(615)),y=n.n(h),v=n(67),g=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).handlechange=function(e){e.preventDefault(),o.setState(Object(r.a)({},e.target.name,e.target.value))},o.loginHandler=function(e){e.preventDefault(),v.a.post("/user/login",{mobile:NaN!=parseInt(o.state.email)?parseInt(o.state.email):"null",email:o.state.email,password:o.state.password}).then((function(e){console.log("@@@####",e.data);var t=e.data.user;localStorage.setItem("auth-token",e.data.token),localStorage.setItem("userInfo",JSON.stringify(t)),y()("Success!","Login Successful Done!","success"),o.props.history.push("/")})).catch((function(e){console.log(e),console.log(e.response),y()("Error!"," Wrong UserName or Password","error")}))},o.changeHandler=function(e){e.preventDefault(),o.setState(Object(r.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),v.a.post("/user/signup",o.state).then((function(e){console.log(e),localStorage.setItem("auth-token",e.data.token),o.setState({token:e.data.token}),y()("Success!"," Register Successful Done!","success"),o.props.history.push("/")})).catch((function(e){console.log(e.response),y()("Error!","Something went wrong","error")}))},o.state={firstname:"",lastname:"",email:"",mobile:"",password:"",cnfrmPassword:""},o}return Object(o.a)(n,[{key:"render",value:function(){return u.a.createElement(l.Fragment,null,u.a.createElement(f.a,null,u.a.createElement("title",null,"GSD100"),u.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),u.a.createElement(b.a,{headerTop:"visible"},u.a.createElement("div",{className:"login-register-area pt-100 pb-100"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},u.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},u.a.createElement("div",{className:"login-register-wrapper"},u.a.createElement(m.a.Container,{defaultActiveKey:"login"},u.a.createElement(d.a,{variant:"pills",className:"login-register-tab-list"},u.a.createElement(d.a.Item,null,u.a.createElement(d.a.Link,{eventKey:"login"},u.a.createElement("h4",null,"Login"))),u.a.createElement(d.a.Item,null,u.a.createElement(d.a.Link,{eventKey:"register"},u.a.createElement("h4",null,"Register")))),u.a.createElement(m.a.Content,null,u.a.createElement(m.a.Pane,{eventKey:"login"},u.a.createElement("div",{className:"login-form-container"},u.a.createElement("div",{className:"login-register-form"},u.a.createElement("form",{onSubmit:this.loginHandler},u.a.createElement("input",{type:"text",name:"email",required:!0,placeholder:"Email / Mobile",value:this.state.email,onChange:this.handlechange}),u.a.createElement("input",{type:"password",maxLength:8,name:"password",placeholder:"Password",value:this.state.password,onChange:this.handlechange}),u.a.createElement("div",{className:"button-box"},u.a.createElement("div",{className:"login-toggle-btn"}),u.a.createElement("button",{type:"submit"},u.a.createElement("span",null,"Login")),u.a.createElement(p.c,{to:"/PinForgotpass",className:"login-toggle-btn fgtbtn"},"Forget Password")))))),u.a.createElement(m.a.Pane,{eventKey:"register"},u.a.createElement("div",{className:"login-form-container"},u.a.createElement("div",{className:"login-register-form"},u.a.createElement("form",{className:"text-center",onSubmit:this.submitHandler,method:"post"},u.a.createElement("input",{type:"text",name:"firstname",required:!0,placeholder:"Enter Your Firstname",value:this.state.firstname,onChange:this.changeHandler}),u.a.createElement("input",{type:"text",name:"lastname",placeholder:"Enter Your Lastname",value:this.state.lastname,onChange:this.changeHandler}),u.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Enter Your Email",value:this.state.email,onChange:this.changeHandler}),u.a.createElement("input",{type:"number",name:"mobile",maxLength:"12",required:!0,placeholder:"Enter Your Mobile No.",value:this.state.mobile,onChange:this.changeHandler}),u.a.createElement("input",{type:"password",minLength:6,maxLength:8,name:"password",required:!0,placeholder:"Password",value:this.state.password,onChange:this.changeHandler}),u.a.createElement("input",{type:"password",name:"cnfrmPassword",maxLength:"8",required:!0,placeholder:"Confrim Password",value:this.state.cnfrmPassword,onChange:this.changeHandler}),u.a.createElement("div",{className:"button-box"},u.a.createElement("button",{type:"submit"},u.a.createElement("span",null,"Register")))))))))),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"login-form-container"},u.a.createElement("div",{className:"login-register-form"},u.a.createElement("div",{className:"button-box"},u.a.createElement("div",{className:"login-toggle-btn"})))))))))))}}]),n}(l.Component)}}]);
//# sourceMappingURL=33.c0449b18.chunk.js.map