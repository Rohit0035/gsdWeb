(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[83],{883:function(t,e,a){"use strict";a.r(e);var n=a(183),o=a(184),c=a(185),l=a(186),s=a(187),r=a(0),u=a.n(r),i=a(6),m=a(67),h=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var c;return Object(o.a)(this,a),(c=e.call(this,t)).changeHandler=function(t){c.setState(Object(n.a)({},t.target.name,t.target.value))},c.state={amount:0,responseData:{}},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t,e=this;t=JSON.parse(localStorage.getItem("userInfo")),console.log("@@@@@",t),null===t||m.a.get("/admin/getone/",{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(t){console.log("walletqqqqqqq####",t.data),e.setState({responseData:t.data.data}),e.setState({amount:t.data.data.amount})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return u.a.createElement(i.c,{to:"/wallet"},u.a.createElement("div",{className:"wt-text"},u.a.createElement("i",{className:"pe-7s-wallet"}),u.a.createElement("span",null,"INR:",this.state.amount)))}}]),a}(u.a.Component);e.default=h}}]);
//# sourceMappingURL=83.93c60df5.chunk.js.map