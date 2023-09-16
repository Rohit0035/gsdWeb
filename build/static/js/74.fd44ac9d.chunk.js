(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[74],{556:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(6),r=a(182);t.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(r.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:l.d,finalItem:"span"}))))}},628:function(e,t,a){"use strict";var n=a(7),c=a(12),l=a(188),r=a(16),o=a(0),i=a.n(o),s=a(3),u=a.n(s),d=a(78),m=a.n(d),p=a(54),h=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],v={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.c,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,r=e.className,o=e.close,s=e.cssModule,u=e.color,d=e.outline,v=e.size,b=e.tag,f=e.innerRef,E=Object(c.a)(e,h);o&&"undefined"===typeof E.children&&(E.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(d?"-outline":"")+"-"+u,N=Object(p.b)(m()(r,{close:o},o||"btn",o||g,!!v&&"btn-"+v,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),s);E.href&&"button"===b&&(b="a");var k=o?"Close":null;return i.a.createElement(b,Object(n.a)({type:"button"===b&&E.onClick?"button":void 0},E,{className:N,ref:f,onClick:this.onClick,"aria-label":a||k}))},t}(i.a.Component);b.propTypes=v,b.defaultProps={color:"secondary",tag:"button"},t.a=b},863:function(e,t,a){"use strict";a.r(t);var n=a(41),c=a.n(n),l=a(68),r=a(35),o=a(0),i=a.n(o),s=a(628),u=a(6),d=a(104),m=a(182),p=a(44),h=(a(180),a(106)),v=a(69),b=a(181),f=a(556),E=a(67);t.default=Object(p.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(v.e)(t,a,n))},addToWishlist:function(t,a,n){e(Object(h.d)(t,a,n))},deleteFromWishlist:function(t,a,n){e(Object(h.f)(t,a,n))},deleteAllFromWishlist:function(t){e(Object(h.e)(t))}}}))((function(e){var t=e.location,a=(e.cartItems,e.currency,e.addToCart,e.wishlistItems,e.deleteFromWishlist,e.deleteAllFromWishlist,Object(d.useToasts)().addToast,t.pathname),n=Object(o.useState)([]),p=Object(r.a)(n,2),h=p[0],v=p[1],g=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,n,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,E.a.get("/admin/getallwishlist",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 3:a=e.sent,n=a.data,l=n.data,v(l),console.log(l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/admin/clrwishlist",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:t=e.sent,a=t.data,console.log(a.data),g();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,E.a.get("/admin/delonewishlist/".concat(t),{headers:{"auth-token":localStorage.getItem("auth-token")}});case 3:a=e.sent,n=a.data,console.log(n.data),g();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){localStorage.getItem("auth-token")&&g()}),[]),i.a.createElement(o.Fragment,null,i.a.createElement(m.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(m.BreadcrumbsItem,{to:""+a},"Wishlist"),i.a.createElement(b.a,{headerTop:"visible"},i.a.createElement(f.a,null),i.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},i.a.createElement("div",{className:"container"},h&&h.length>=1?i.a.createElement(o.Fragment,null,i.a.createElement("h3",{className:"cart-page-title"},"Your wishlist items"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"table-content table-responsive cart-table-content"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Image"),i.a.createElement("th",null,"Product Name"),i.a.createElement("th",null,"Colour"),i.a.createElement("th",null,"Size"),i.a.createElement("th",null,"Add To Cart"),i.a.createElement("th",null,"action"))),i.a.createElement("tbody",null,null===h||void 0===h?void 0:h.map((function(e,t){var a,n;return i.a.createElement("tr",{key:t},i.a.createElement("td",{className:"product-thumbnail"},i.a.createElement(u.c,{to:"#"},i.a.createElement("img",{className:"img-fluid",src:""+(null===(a=e.product)||void 0===a?void 0:a.product_img[0]),alt:""}))),i.a.createElement("td",{className:"product-name text-center"},i.a.createElement(u.c,{to:"/product-sticky/"},null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.product_name)),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.color)),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.size)),i.a.createElement("td",{className:"product-wishlist-cart"},i.a.createElement("div",{className:"pro-details-cart btn-hover"},i.a.createElement(s.a,{color:"primary",onClick:function(){var t;E.a.post("/admin/add_ToCart",{product:null===(t=e.product)||void 0===t?void 0:t._id,product_qty:null===e||void 0===e?void 0:e.qty,product_price:null===e||void 0===e?void 0:e.price,color:null===e||void 0===e?void 0:e.color,size:null===e||void 0===e?void 0:e.size},{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(t){alert("Added To Cart"),console.log(t),console.log(e.product._id),E.a.get("/admin/delonewishlist/".concat(e.product._id),{headers:{"auth-token":localStorage.getItem("auth-token")}}).then((function(e){return g(e)})).catch((function(e){return console.log(e.response)}))})).catch((function(e){console.log(e.response)}))}},"Add To Cart"))),i.a.createElement("td",{className:"product-remove"},i.a.createElement("button",{onClick:function(t){var a;return k(null===(a=e.product)||void 0===a?void 0:a._id)(window.location.reload(!1))}},i.a.createElement("i",{className:"fa fa-times"}))))}))))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"cart-shiping-update-wrapper"},i.a.createElement("div",{className:"cart-shiping-update"},i.a.createElement(u.c,{to:"/shop-grid-two-column"},"Continue Shopping")),i.a.createElement("div",{className:"cart-clear"},i.a.createElement("button",{onClick:function(){return N()(window.location.reload())}},"Clear Wishlist")))))):i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"item-empty-area text-center"},i.a.createElement("div",{className:"item-empty-area__icon mb-30"},i.a.createElement("i",{className:"pe-7s-like"})),i.a.createElement("div",{className:"item-empty-area__text"},"No items found in wishlist ",i.a.createElement("br",null)," ",i.a.createElement(u.c,{to:"/"},"Add Items")))))))))}))}}]);
//# sourceMappingURL=74.fd44ac9d.chunk.js.map