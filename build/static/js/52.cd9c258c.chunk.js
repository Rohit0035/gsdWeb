(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[52],{577:function(e,t,a){"use strict";var n=a(7),s=a(12),l=a(0),c=a.n(l),o=a(3),r=a.n(o),i=a(78),u=a.n(i),d=a(54),m=["className","cssModule","widths","tag"],p=r.a.oneOfType([r.a.number,r.a.string]),f=r.a.oneOfType([r.a.bool,r.a.number,r.a.string,r.a.shape({size:r.a.oneOfType([r.a.bool,r.a.number,r.a.string]),order:p,offset:p})]),b={tag:d.c,xs:f,sm:f,md:f,lg:f,xl:f,className:r.a.string,cssModule:r.a.object,widths:r.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,l=e.widths,o=e.tag,r=Object(s.a)(e,m),i=[];l.forEach((function(t,n){var s=e[t];if(delete r[t],s||""===s){var l=!n;if(Object(d.a)(s)){var c,o=l?"-":"-"+t+"-",m=h(l,t,s.size);i.push(Object(d.b)(u()(((c={})[m]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c)),a))}else{var p=h(l,t,s);i.push(p)}}})),i.length||i.push("col");var p=Object(d.b)(u()(t,i),a);return c.a.createElement(o,Object(n.a)({},r,{className:p}))};v.propTypes=b,v.defaultProps=g,t.a=v},609:function(e,t,a){"use strict";var n=a(7),s=a(12),l=a(187),c=a(16),o=a(0),r=a.n(o),i=a(3),u=a.n(i),d=a(78),m=a.n(d),p=a(54),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,c=e.tag,o=e.innerRef,i=Object(s.a)(e,f),u=Object(p.b)(m()(t,!!l&&"form-inline"),a);return r.a.createElement(c,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);g.propTypes=b,g.defaultProps={tag:"form"},t.a=g},627:function(e,t,a){"use strict";var n=a(7),s=a(12),l=a(187),c=a(16),o=a(0),r=a.n(o),i=a(3),u=a.n(i),d=a(78),m=a.n(d),p=a(54),f=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,c=e.className,o=e.close,i=e.cssModule,u=e.color,d=e.outline,b=e.size,g=e.tag,h=e.innerRef,v=Object(s.a)(e,f);o&&"undefined"===typeof v.children&&(v.children=r.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(d?"-outline":"")+"-"+u,y=Object(p.b)(m()(c,{close:o},o||"btn",o||E,!!b&&"btn-"+b,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),i);v.href&&"button"===g&&(g="a");var O=o?"Close":null;return r.a.createElement(g,Object(n.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:y,ref:h,onClick:this.onClick,"aria-label":a||O}))},t}(r.a.Component);g.propTypes=b,g.defaultProps={color:"secondary",tag:"button"},t.a=g},629:function(e,t,a){"use strict";var n=a(7),s=a(12),l=a(187),c=a(16),o=a(0),r=a.n(o),i=a(3),u=a.n(i),d=a(78),m=a.n(d),p=a(54),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,c=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,g=e.innerRef,h=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),y=u||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",y=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":v&&(O=d?null:"form-check-input"),h.size&&E.test(h.size)&&(Object(p.d)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var j=Object(p.b)(m()(t,i&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,O),a);return("input"===y||u&&"function"===typeof u)&&(h.type=l),h.children&&!b&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.d)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),r.a.createElement(y,Object(n.a)({},h,{ref:g,className:j,"aria-invalid":i}))},t}(r.a.Component);g.propTypes=b,g.defaultProps={type:"text"},t.a=g},675:function(e,t,a){"use strict";var n=a(7),s=a(12),l=a(0),c=a.n(l),o=a(3),r=a.n(o),i=a(78),u=a.n(i),d=a(54),m=["className","cssModule","tag","size"],p={tag:d.c,size:r.a.string,className:r.a.string,cssModule:r.a.object},f=function(e){var t=e.className,a=e.cssModule,l=e.tag,o=e.size,r=Object(s.a)(e,m),i=Object(d.b)(u()(t,"input-group",o?"input-group-"+o:null),a);return c.a.createElement(l,Object(n.a)({},r,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},810:function(e,t,a){e.exports=a.p+"static/media/electrimg.da8d846d.png"},872:function(e,t,a){"use strict";a.r(t);var n=a(182),s=a(183),l=a(184),c=a(185),o=a(186),r=a(0),i=a.n(r),u=a(180),d=a(188),m=a.n(d),p=a(810),f=a.n(p),b=a(549),g=a(550),h=a(577),v=a(609),E=a(629),y=a(675),O=a(627),j=a(105),N=a.n(j),R=a(615),S=a.n(R),k=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).changeHandler=function(e){var t=0;if(l.setState(Object(n.a)({},e.target.name,e.target.value)),"account"===e.target.name){if(t=e.target.value,console.log(t),/^[1234][0-9]{9}$/.test(t)){if(console.log("####",e.target.value),l.setState({isElecBill:!1,account:t}),""===l.state.code)return l.setState({isCode:!0}),!0;var a={account:t,code:l.state.code};return N.a.post("http://44.205.32.29:8000/admin/fetch_Bill",a).then((function(e){console.log(e.data),"success"===e.data.status?(console.log(e.data.billAmount),l.setState({billAmount:e.data.billAmount})):S()("Warning!",e.data.errortext,"warning")})).catch((function(e){console.log(e.response)})),!0}return l.setState({isElecBill:!0}),!1}},l.onRechargeSubmit=function(){var e={walletId:l.state.userData.walletId,email:l.state.email,account:l.state.account,electricity_code:l.state.electricity_code,code:l.state.code,amount:l.state.amount};N.a.post("http://44.205.32.29:8000/admin/elec_paybill/",e).then((function(e){console.log(e.data.data),console.log(e.data.STATUSMSG),"Failed"!==e.data.STATUSMSG&&"Failed"!==e.data.STATUSMSG?S()("Success!","Recharge SuccessFull!","success"):S()("Error!","Recharge UnsuccssFull!","error")})).catch((function(e){console.log(e.response)}))},l.updateItem=function(e){console.log("Selected Value::",e)},l.state={code:"",account:"",AMTNO:"",isElecBill:!1,isAmount:!1,responseData:{},billAmount:0,serviceR:[],isCode:!1},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://44.205.32.29:8000/admin/electricity_operator/").then((function(t){console.log(t.data.data),e.setState({serviceR:t.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e;return i.a.createElement(u.a,null,i.a.createElement(b.a,{fluid:!0,className:"mb-4"},i.a.createElement(g.a,{className:"mb-5"},i.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(m.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},i.a.createElement("div",{className:""},i.a.createElement("h1",{className:"text-light text-center"},"Electricity Bills"))))),i.a.createElement("section",{style:{margin:"70px 0px"}},i.a.createElement(b.a,null,i.a.createElement(g.a,null,i.a.createElement(h.a,{md:"6"},i.a.createElement("div",{className:"text-box mb-30"},i.a.createElement(g.a,null,i.a.createElement("h4",{className:"sr-h4"},"Pay For Electricity"),i.a.createElement("div",{className:"sr-1"},i.a.createElement(v.a,{className:"m-1"},i.a.createElement(h.a,{md:"12"},i.a.createElement(E.a,{type:"select",className:"st-select",name:"code",value:this.state.code,onChange:this.changeHandler},i.a.createElement("option",null,"Choose an operator"),null===(e=this.state.serviceR)||void 0===e?void 0:e.map((function(e){return i.a.createElement("option",{value:e.code,key:e._id},e.service)}))),i.a.createElement("span",{style:{color:"red"}},this.state.isCode?"Please select operator":null)),i.a.createElement("br",null),i.a.createElement(h.a,{md:"12"},i.a.createElement(E.a,{type:"number",name:"account",required:!0,value:this.state.account,onChange:this.changeHandler,className:"form-control",placeholder:"Consumer Number"}),i.a.createElement("span",{style:{color:"red"}},this.state.isElecBill?"Please enter 10 digits IVRS number":null)),i.a.createElement("small",{style:{color:"red"}},"(Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(h.a,{md:"12"},i.a.createElement(y.a,null,i.a.createElement("span",{className:"sr-2"},this.state.isAmount?"Rs":null),i.a.createElement(E.a,{className:"form-control",placeholder:"Amount",value:this.state.billAmount,name:"AMTNO",type:"number",onChange:this.changeHandlerAmount}),i.a.createElement("span",{style:{color:"red"}},this.state.isAmountVal?"Please enter recharge amount":null))),i.a.createElement("br",null),localStorage.getItem("auth-token")?i.a.createElement(O.a,{className:"sr-btn",onClick:this.onRechargeSubmit},"Proceed "):i.a.createElement(O.a,{className:"sr-btn",onClick:function(e){return window.location.href="/login-register"}},"Proceed")))))),i.a.createElement(h.a,{md:"6"},i.a.createElement("div",{className:"sr-3 text-center"},i.a.createElement("img",{src:f.a,alt:"image"})))))))}}]),a}(i.a.Component);t.default=k}}]);
//# sourceMappingURL=52.cd9c258c.chunk.js.map