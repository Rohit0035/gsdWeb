(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[77],{556:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(6),s=t(182);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(s.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.d,finalItem:"span"}))))}},856:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var l=t(183),n=t(184),c=t(185),s=t(186),r=t(187),o=t(0),m=t.n(o),i=t(559),d=t.n(i),u=t(182),E=t(817),p=t(181),g=t(556),h=t(610),b=t(67),v=t(616),N=t.n(v),f=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).submitHandler=function(e){e.preventDefault(),b.a.post("/user/editcustomer",c.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data),console.log(e.data.STATUSMSG),"Failed"!==e.data.STATUSMSG&&"Failed"!==e.data.STATUSMSG?N()("Success!","Account  Updated ","success"):N()("Error!","Account Not Updated","error")})).catch((function(e){console.log(e.response)}))},c.addAddress=function(e){e.preventDefault(),console.log(c.state),b.a.post("/user/addcus_address",c.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}))},c.editPassword=function(e){e.preventDefault(),console.log(c.state),b.a.post("/user/updatePassword",c.state,{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.STATUSMSG),"success"==e.data.msg&&"success"===e.data.msg?(N()("Success!","Password Updated Successfully.. ","success"),c.props.history.push("/")):N()("Error!","Password Not Updated","error")})).catch((function(e){console.log("error"==e.response.msg&&"error"===e.response.msg),N()("Error!","Password Not Updated","error")}))},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.state={firstname:"",lastname:"",address:"",locality:"",pincode:"",city:"",state:"",password:"",cnfrmPassword:"",oldPassword:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/user/getonecustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(a){console.log(a),e.setState({firstname:a.data.data.firstname,lastname:a.data.data.lastname,email:a.data.data.email,mobile:a.data.data.mobile}),console.log(e.state)})).catch((function(e){console.log(e.response)})),b.a.get("/user/viewoneuseraddress",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(a){console.log(a),e.setState({address:a.data.data.address,locality:a.data.data.locality,pincode:a.data.data.pincode,city:a.data.data.city,state:a.data.data.state}),console.log(e.state)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(o.Fragment,null,m.a.createElement(d.a,null,m.a.createElement("title",null,"GSD100"),m.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),m.a.createElement(u.BreadcrumbsItem,{to:"/"},"Home/ My Account"),m.a.createElement(p.a,{headerTop:"visible"},m.a.createElement(g.a,null),m.a.createElement("div",{className:"myaccount-area pb-80 pt-100"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},m.a.createElement("div",{className:"ml-auto mr-auto col-lg-9"},m.a.createElement("div",{className:"myaccount-wrapper"},m.a.createElement(E.a,{className:"single-my-account mb-20"},m.a.createElement(E.a.Header,{className:"panel-heading"}),m.a.createElement(E.a.Body,null,m.a.createElement(h.a,{onSubmit:this.submitHandler},m.a.createElement("div",{className:"myaccount-info-wrapper"},m.a.createElement("div",{className:"account-info-wrapper"},m.a.createElement("h3",null,"My Account Information")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"First Name"),m.a.createElement("input",{type:"text",placeholder:"First Name",name:"firstname",value:this.state.firstname,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Last Name"),m.a.createElement("input",{type:"text",placeholder:"Last Name",name:"lastname",value:this.state.lastname,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Email Address"),m.a.createElement("input",{readOnly:!0,type:"email",placeholder:"Customer Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Mobile Number"),m.a.createElement("input",{type:"number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler})))),m.a.createElement("div",{className:"billing-back-btn"},m.a.createElement("div",{className:"billing-btn"},m.a.createElement("button",{type:"submit"},"Submit"))))))),m.a.createElement(E.a,{className:"single-my-account mb-20"},m.a.createElement(E.a.Body,null,m.a.createElement(h.a,{onSubmit:this.editPassword},m.a.createElement("div",{className:"myaccount-info-wrapper"},m.a.createElement("div",{className:"account-info-wrapper"},m.a.createElement("h3",null,"Change Password")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Old Password"),m.a.createElement("input",{type:"password",required:!0,name:"oldPassword",value:this.state.oldPassword,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"New Password"),m.a.createElement("input",{type:"password",required:!0,name:"password",value:this.state.password,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Confirm Password"),m.a.createElement("input",{type:"password",required:!0,name:"cnfrmPassword",value:this.state.cnfrmPassword,onChange:this.changeHandler})))),m.a.createElement("div",{className:"billing-back-btn"},m.a.createElement("div",{className:"billing-btn"},m.a.createElement("button",{type:"submit"},"Submit"))))))),m.a.createElement(E.a,{className:"single-my-account mb-20"},m.a.createElement(E.a.Body,null,m.a.createElement(h.a,{onSubmit:this.addAddress},m.a.createElement("div",{className:"myaccount-info-wrapper"},m.a.createElement("div",{className:"account-info-wrapper"},m.a.createElement("h4",null,"My Address")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Address"),m.a.createElement("input",{type:"textarea",placeholder:"Address",name:"address",value:this.state.address,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Locality"),m.a.createElement("input",{type:"text",placeholder:"Locality",name:"locality",value:this.state.locality,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"Pin Code"),m.a.createElement("input",{type:"number",placeholder:"Pin Code",name:"pincode",value:this.state.pincode,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"City"),m.a.createElement("input",{type:"text",placeholder:"city",name:"city",value:this.state.city,onChange:this.changeHandler}))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"billing-info"},m.a.createElement("label",null,"State"),m.a.createElement("input",{type:"text",placeholder:"State",name:"state",value:this.state.state,onChange:this.changeHandler})))),m.a.createElement("div",{className:"billing-back-btn"},m.a.createElement("div",{className:"billing-btn"},m.a.createElement("button",{type:"submit"},"Continue"))))))),m.a.createElement(E.a,{className:"single-my-account mb-20"},m.a.createElement(E.a.Body,null,m.a.createElement(h.a,{onSubmit:this.addAddress},m.a.createElement("div",{className:"myaccount-info-wrapper"},m.a.createElement("div",{className:"account-info-wrapper"},m.a.createElement("h4",null,"My Orders")),m.a.createElement("div",{className:"row"}),m.a.createElement("div",{className:"billing-back-btn"},m.a.createElement("div",{className:"billing-btn"},m.a.createElement("button",{type:"submit"},"Continue"))))))))))))))}}]),t}(o.Component)}}]);
//# sourceMappingURL=77.8b2cc423.chunk.js.map