(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[64,78],{556:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(6),c=a(182);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.d,finalItem:"span"}))))}},610:function(e,t,a){"use strict";var n=a(7),r=a(12),l=a(188),c=a(16),i=a(0),s=a.n(i),o=a(3),m=a.n(o),u=a(78),f=a.n(u),p=a(54),d=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.c,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,c=e.tag,i=e.innerRef,o=Object(r.a)(e,d),m=Object(p.b)(f()(t,!!l&&"form-inline"),a);return s.a.createElement(c,Object(n.a)({},o,{ref:i,className:m}))},t}(i.Component);g.propTypes=b,g.defaultProps={tag:"form"},t.a=g},755:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(183),r=a(184),l=a(185),c=a(186),i=a(187),s=a(0),o=a.n(s),m=a(559),u=a.n(m),f=a(583),p=a(181),d=a(556),b=a(67),g=a(610),h=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),b.a.post("/user/sendotp",l.state).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},l.state={mobile_no:"12345678",customer_email:"guptapratima98710@gmail.com",selectedFile:null},l}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(s.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,"GSD100"),o.a.createElement("meta",{content:"Compare page of flone react minimalist eCommerce template."})),o.a.createElement(p.a,{headerTop:"visible"},o.a.createElement(d.a,null),o.a.createElement("div",{className:"login-register-area pt-100 pb-100"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},o.a.createElement("div",{className:"login-register-wrapper"},o.a.createElement(f.a.Container,{defaultActiveKey:"login"},o.a.createElement(f.a.Content,null,o.a.createElement(f.a.Pane,{eventKey:"login"},o.a.createElement("div",{className:"login-form-container"},o.a.createElement("div",{className:"login-register-form"},o.a.createElement(g.a,{onSubmit:this.submitHandler},o.a.createElement("input",{onChange:this.changeHandler,type:"number",value:this.state.mobile_no,name:"mobile_no ",placeholder:"Enter your mobile number"}),o.a.createElement("input",{value:this.state.customer_email,type:"email",name:"customer_email",placeholder:"Enter Email"}),o.a.createElement("div",{className:"button-box"},o.a.createElement("button",{type:"submit",color:"primary"},"SendOTP")))))))))))))))}}]),a}(s.Component)},756:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(183),r=a(184),l=a(185),c=a(195),i=a(186),s=a(187),o=a(0),m=a.n(o),u=a(559),f=a.n(u),p=a(757),d=a.n(p),b=a(67),g=a(583),h=a(181),v=a(556),E=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"12345678",otp:"1234",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),b.a.post("/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(o.Fragment,null,m.a.createElement(f.a,null,m.a.createElement("title",null,"GSD100"),m.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),m.a.createElement(h.a,{headerTop:"visible"},m.a.createElement(v.a,null),m.a.createElement("div",{className:"login-register-area pt-100 pb-100"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},m.a.createElement("div",{className:"login-register-wrapper"},m.a.createElement(g.a.Container,{defaultActiveKey:"login"},m.a.createElement(g.a.Content,null,m.a.createElement(g.a.Pane,{eventKey:"login"},m.a.createElement("div",{className:"login-form-container"},m.a.createElement("div",{className:"login-register-form"},m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("div",null,m.a.createElement(d.a,{value:this.state.otp,onChange:this.handleChange,numInputs:4,type:"number",name:"otp",separator:m.a.createElement("span",null)}),this.state.OTPError?this.state.OTPError:null),m.a.createElement("div",{className:"button-box"},m.a.createElement("button",{type:"back"},"Back"),m.a.createElement("button",{type:"submit"},"SendOTP")))))))))))))))}}]),a}(m.a.Component)},860:function(e,t,a){"use strict";a.r(t);var n=a(183),r=a(15),l=a(35),c=a(0),i=a.n(c),s=a(755),o=a(756);t.default=function(){var e=Object(c.useState)({status:"",msg:"",mobile:"",otp:""}),t=Object(l.a)(e,2),a=t[0],m=t[1],u=Object(c.useState)(1),f=Object(l.a)(u,2),p=f[0],d=f[1],b=function(e){return function(t){m(Object(r.a)(Object(r.a)({},a),{},Object(n.a)({},e,t.target.value)))}},g=function(e){m(Object(r.a)(Object(r.a)({},a),{},{msg:e}))},h=function(){m((function(e){return d+1}))},v={status:a.status,msg:a.msg,mobile:a.mobile,otp:a.otp};switch(p){case 1:return i.a.createElement(s.default,{nextStep:h,msgHandleChange:g,handleChange:b,value:v});case 2:return i.a.createElement(o.default,{nextStep:h,prevStep:function(){m((function(e){return e-1}))},handleChange:b,value:v});default:return i.a.createElement(s.default,{nextStep:h,msgHandleChange:g,handleChange:b,value:v})}}}}]);
//# sourceMappingURL=64.515b2bee.chunk.js.map