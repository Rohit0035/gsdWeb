(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[44],{556:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(6),r=t(182);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(r.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.d,finalItem:"span"}))))}},569:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){for(var a=e.ratingValue,t=[],c=0;c<5;c++)t.push(n.a.createElement("i",{className:"fa fa-star-o",key:c}));if(a&&a>0)for(var r=0;r<=a-1;r++)t[r]=n.a.createElement("i",{className:"fa fa-star-o yellow",key:r});return n.a.createElement(l.Fragment,null,t)}},622:function(e,a,t){"use strict";var l=t(41),n=t.n(l),c=t(68),r=t(35),o=t(0),i=t.n(o),s=t(583),m=t(605),d=t(67),u=t(692),v=t(693);a.a=function(e){var a,t=e.spaceBottomClass,l=e.productFullDesc,p=e.productid,E=i.a.useState({}),f=Object(r.a)(E,2),g=f[0],N=f[1],b=i.a.useState([]),h=Object(r.a)(b,2),y=(h[0],h[1]),w=Object(o.useState)([]),O=Object(r.a)(w,2),k=O[0],S=O[1],j=Object(o.useState)([]),I=Object(r.a)(j,2),_=I[0],x=I[1],C=Object(o.useState)([]),z=Object(r.a)(C,2),D=z[0],T=z[1],A=Object(o.useState)([]),J=Object(r.a)(A,2),B=J[0],F=J[1],K=Object(o.useState)([!0,!0,!1,!1,!1]),R=Object(r.a)(K,2);R[0],R[1];console.log(p);var W=function(){var e=Object(c.a)(n.a.mark((function e(a){var t,l,c,r,o,i,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,d.a.get("/admin/getonereviewproduct/".concat(a));case 3:for(t=e.sent,l=t.data,console.log(l),c=l.data,r=0,o=0;o<c.length;o++)i=c[o].rating,r+=i;console.log(r),s=r/c.length,console.log(s),x(s),console.log(c),S(c);case 15:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){localStorage.getItem("auth-token")&&p&&W(p)}),[p]),i.a.useEffect((function(){var e=JSON.parse(l).product_img;void 0!==e&&null!==e&&y(e),N(JSON.parse(l))}),[l]),console.log(g),i.a.createElement("div",{className:"description-review-area ".concat(t)},i.a.createElement("div",{className:"container mt-5 mb-5"},i.a.createElement("div",{className:"description-review-wrapper"},i.a.createElement(s.a.Container,{defaultActiveKey:"productDescription"},i.a.createElement(m.a,{variant:"pills",className:"description-review-topbar"},i.a.createElement(m.a.Item,null,i.a.createElement(m.a.Link,{eventKey:"additionalInfo"},"Additional Information")),i.a.createElement(m.a.Item,null,i.a.createElement(m.a.Link,{eventKey:"productDescription"},"Description")),i.a.createElement(m.a.Item,null,i.a.createElement(m.a.Link,{eventKey:"productReviews"},"Reviews"))),i.a.createElement(s.a.Content,{className:"description-review-bottom"},i.a.createElement(s.a.Pane,{eventKey:"additionalInfo"},i.a.createElement("div",{className:"product-anotherinfo-wrapper"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,"Brand"),null===g||void 0===g||null===(a=g.brand)||void 0===a?void 0:a.name),i.a.createElement("li",null,i.a.createElement("span",null,"Material"),null===g||void 0===g?void 0:g.material),i.a.createElement("li",null,i.a.createElement("span",null,"Other Info")," ",null===g||void 0===g?void 0:g.short_desc)))),i.a.createElement(s.a.Pane,{eventKey:"productDescription"},i.a.createElement("h5",null,null===g||void 0===g?void 0:g.long_desc)),i.a.createElement(s.a.Pane,{eventKey:"productReviews"},i.a.createElement("h3",null,"RATINGS ",i.a.createElement("i",{class:"fa fa-star"})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-7"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h1",{style:{fontSize:96,marginTop:39,marginRight:15,marginBottom:20,marginLeft:0}},parseFloat(_).toFixed(1)),i.a.createElement("p",null,k.length," Verified Buyers")),i.a.createElement("div",{className:"col-md-6"},i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#14958f"},variant:"determinate",value:70}),i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#ff"},variant:"determinate",value:30}),i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#14958f"},variant:"determinate",value:30}),i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#14958f"},variant:"determinate",value:30}),i.a.createElement(v.a,{className:"m-1 mb-3 ",style:{color:"#14958f"},variant:"determinate",value:10}))),i.a.createElement("hr",null),null===k||void 0===k?void 0:k.map((function(e){var a,t;return i.a.createElement("div",{className:"review-wrapper",key:e._id},i.a.createElement("div",{className:"single-review"},i.a.createElement("div",{className:"review-content"},i.a.createElement("div",{className:"review-top-wrap"},i.a.createElement("div",{className:"review-left"},i.a.createElement("div",{className:"review-name"},i.a.createElement("h4",{style:{textTransform:"capitalize",margin:5}},null===e||void 0===e?void 0:e.comment)),i.a.createElement("div",{className:"review-rating"},i.a.createElement(u.a,{name:"disabled",style:{opacity:1},value:null===e||void 0===e?void 0:e.rating,disabled:!0})))),i.a.createElement("div",{className:"review-bottom"},i.a.createElement("p",{style:{display:"inline",textTransform:"capitalize"}},null===e||void 0===e||null===(a=e.customer)||void 0===a?void 0:a.firstname," ",null===e||void 0===e||null===(t=e.customer)||void 0===t?void 0:t.lastname," |"," ",e.createdAt.split("T")[0])))))}))),i.a.createElement("div",{className:"col-lg-5"},i.a.createElement("div",{className:"ratting-form-wrapper pl-50"},i.a.createElement("h3",null,"Write a Review"),i.a.createElement("div",{className:"ratting-form"},i.a.createElement("form",{action:"#",onSubmit:function(e){e.preventDefault(),console.log({rating:D,comment:B,productid:p}),d.a.post("/admin/addreview",{rating:D,comment:B,product:p},{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){console.log(e.data.data),W(p)})).catch((function(e){console.log(e.response)}))}},i.a.createElement("div",{className:"star-box"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"rating-form-style mb-10"},i.a.createElement(u.a,{name:"simple-controlled",value:D,onChange:function(e,a){console.log(e),T(a)}})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"rating-form-style form-submit"},i.a.createElement("textarea",{name:"comment",placeholder:"Comment",defaultValue:"",onChange:function(e){F(e.target.value)},style:{height:"auto"},rows:3}),i.a.createElement("input",{type:"submit",defaultValue:"Submit"})))))))))))))))}},645:function(e,a,t){e.exports=t.p+"static/media/business-img.7dd6f858.jpg"},774:function(e,a,t){},780:function(e,a,t){},900:function(e,a,t){"use strict";t.r(a);var l=t(184),n=t(185),c=t(186),r=t(187),o=t(0),i=t.n(o),s=(t(182),t(181)),m=(t(556),t(774),t(622)),d=t(183),u=t(35),v=t(44),p=(t(775),t(703)),E=(t(69),t(106),t(137),t(569),t(67)),f=t(628),g=(t(780),t(22)),N={margin:"-4px 8px"},b=Object(v.connect)((function(e){return{currency:e.currencyData,cartItems:e.cartData,wishlistItems:e.wishlistData,compareItems:e.compareData}}))((function(e){var a,t,l,n,c=e.spaceTopClass,r=e.spaceBottomClass,s=e.wishlistItems,m=e.productImage,v=Object(o.useState)(1),b=Object(u.a)(v,2),h=b[0],y=b[1],w=Object(o.useState)(""),O=Object(u.a)(w,2),k=O[0],S=O[1],j=Object(o.useState)([!1,!1,!1,!1,!1]),I=Object(u.a)(j,2),_=I[0],x=I[1],C=Object(o.useState)(0),z=Object(u.a)(C,2),D=z[0],T=z[1],A=i.a.useState({}),J=Object(u.a)(A,2),B=J[0],F=J[1],K=i.a.useState([]),R=Object(u.a)(K,2),W=R[0],q=R[1],L=i.a.useState([0]),P=Object(u.a)(L,2),V=(P[0],P[1]);i.a.useEffect((function(){var e=JSON.parse(m).product_img,a=JSON.parse(m).color,t=JSON.parse(m).size;void 0!==e&&null!==e&&q(e),void 0!==a&&null!==a&&T(a[0].colorName),void 0!==t&&null!==t&&S(t[0].sizeName),console.log(a),console.log(t),F(JSON.parse(m))}),[m]);var M=Object(g.g)();return i.a.createElement("div",{className:"shop-area ".concat(c||""," ").concat(r||"")},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"product-large-image-wrapper product-large-image-wrapper--sticky"},i.a.createElement("div",{className:""},i.a.createElement(p.a,null,null===W||void 0===W?void 0:W.map((function(e){return i.a.createElement(p.a.Item,{key:e},i.a.createElement("img",{src:e,alt:"",className:"img-fluid",style:{width:"550px",height:"105vh"}}))})))))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"product-details-content ml-70 mt-5 mb-5"},i.a.createElement("h4",{style:{color:"#282c3f",textTransform:"uppercase",fontWeight:700,fontSize:24}},null===B||void 0===B||null===(a=B.brand)||void 0===a?void 0:a.name),i.a.createElement("h2",{className:"",style:(t={textTransform:"capitalize",fontSize:20,fontWeight:400},Object(d.a)(t,"fontWeight",500),Object(d.a)(t,"color","#535665"),t)},null===B||void 0===B?void 0:B.product_name," ",i.a.createElement("span",null,"(",null===B||void 0===B?void 0:B.material,")")),i.a.createElement("div",{className:"pro-details-list"},i.a.createElement("p",null,null===B||void 0===B?void 0:B.short_desc),i.a.createElement("p",null,null===B||void 0===B?void 0:B.long_desc),i.a.createElement("p",{className:" w-25 shadow-none p-1 mb-0 bg-white rounded"},"#",null===B||void 0===B||null===(l=B.productsubcategory)||void 0===l?void 0:l.name)),i.a.createElement("div",{className:"product-details-price"},i.a.createElement("h2",null,"\u20b9",null===B||void 0===B?void 0:B.sell_price,"\xa0\xa0",i.a.createElement("del",null," ","\u20b9",Math.floor(parseInt(null===B||void 0===B?void 0:B.sell_price)*parseInt(null===B||void 0===B?void 0:B.discount_perc)/100+parseInt(null===B||void 0===B?void 0:B.sell_price)),"\xa0\xa0"," "),i.a.createElement("span",{style:{color:"#ffa500"}}," ","\xa0\xa0(",null===B||void 0===B?void 0:B.discount_perc,"% OFF)"))),i.a.createElement("div",{className:"pro-details-rating-wrap"},i.a.createElement("div",{className:"pro-details-rating"},_.map((function(e,a){return i.a.createElement("span",{key:a,onClick:function(){for(var e=[],t=0;t<5;t++)t<=a?e.push(!0):e.push(!1);x(e)}},_[a]?i.a.createElement("i",{className:"fa fa-star-o yellow",key:a}):i.a.createElement("i",{className:"fa fa-star-o",key:a}))})))),i.a.createElement("div",{className:"pro-details-size-color"},i.a.createElement("div",{className:"pro-details-color-wrap"},i.a.createElement("span",null,"Color"),i.a.createElement("div",{className:"pro-details-color-content",style:{flexDirection:"row"}},i.a.createElement("div",{class:"colors"},i.a.createElement("ul",null,null===B||void 0===B||null===(n=B.color)||void 0===n?void 0:n.map((function(e,a){return i.a.createElement("li",null,i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"color",checked:(null===e||void 0===e?void 0:e.colorName)==D,onClick:function(){V(a),console.log(null===e||void 0===e?void 0:e.colorName),T(null===e||void 0===e?void 0:e.colorName)}}),i.a.createElement("span",{class:"swatch",style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderColor:(null===e||void 0===e?void 0:e.colorName)==D?"black":"transparent",borderWidth:2,padding:2}})," "))}))))))),i.a.createElement("div",{className:"pro-details-size-color mt-5"},i.a.createElement("div",{className:"pro-details-color-wrap"},i.a.createElement("span",null,"Size"),i.a.createElement("div",{className:"pro-details-color-content",style:{flexDirection:"row"}},B&&B.size?B.size.map((function(e){return i.a.createElement(f.a,{outline:k===(null===e||void 0===e?void 0:e.sizeName),color:k===(null===e||void 0===e?void 0:e.sizeName)?"danger":"primary",className:"m-1 ",key:null===e||void 0===e?void 0:e.sizeName,onClick:function(){S(null===e||void 0===e?void 0:e.sizeName)}},i.a.createElement("h5",{className:"mb-0"},null===e||void 0===e?void 0:e.sizeName))})):null))),i.a.createElement("div",{className:"pro-details-quality"},i.a.createElement("div",{className:"cart-plus-minus"},i.a.createElement("button",{onClick:function(){return y(h>1?h-1:1)},className:"dec qtybutton"},"-"),i.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:h}),i.a.createElement("button",{className:"inc qtybutton",onClick:function(){return y(h>=1?h+1:1)}},"+")),i.a.createElement("div",{className:"pro-details-cart btn-hover"},i.a.createElement("button",{onClick:function(){console.log({product:B._id,product_qty:h,product_price:B.sell_price,color:D,size:k}),localStorage.getItem("auth-token")?E.a.post("/admin/add_ToCart",{product:B._id,product_qty:h,product_price:B.sell_price,color:D,size:k},{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){alert("Added To Cart"),window.location.reload(),console.log(e)})).catch((function(e){alert("error by pratima"),console.log(e.response)})):M.push("/login-register")}},"Add To Cart")),i.a.createElement("div",{className:"pro-details-cart btn-hover"},i.a.createElement("button",{title:void 0!==s?"Added to wishlist":"Add to wishlist",onClick:function(){console.log("btn clicked"),E.a.post("/admin/addwishlist",{product:B._id,color:D,size:k,qty:h,price:B.sell_price},{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){alert("Added To Wishlist"),window.location.reload(),console.log(e)})).catch((function(e){console.log(e.response)}))}},i.a.createElement("i",{className:"pe-7s-like",style:N}),"Wishlist"))))))))})),h=t(105),y=t.n(h),w=t(645),O=t.n(w),k=t(550),S=t(551);t.d(a,"ProductSticky",(function(){return j}));var j=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={detail:{},pid:""},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("http://44.205.32.29:8000/admin/getoneproduct/".concat(a)).then((function(a){e.setState({detail:a.data.data,pid:a.data.data._id})})).catch((function(e){}))}},{key:"render",value:function(){return i.a.createElement(s.a,{headerTop:"visible"},i.a.createElement(k.a,{fluid:!0,className:"mb-4"},i.a.createElement(S.a,{className:"mb-5"},i.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(O.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"text-light text-center"},"PRODUCT DETAIL "))))),i.a.createElement(b,{spaceTopclass:"mt-100",spaceBottomclass:"mb-100",productImage:JSON.stringify(this.state.detail)}),i.a.createElement(m.a,{spaceBottomclass:"pb-90",productFullDesc:JSON.stringify(this.state.detail),productid:this.state.pid}))}}]),t}(o.Component);a.default=j}}]);
//# sourceMappingURL=44.b2783a10.chunk.js.map