(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[54],{578:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),i=t(3),l=t.n(i),c=t(78),m=t.n(c),d=t(54),u=["className","cssModule","widths","tag"],p=l.a.oneOfType([l.a.number,l.a.string]),g=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),h={tag:d.c,xs:g,sm:g,md:g,lg:g,xl:g,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,i=e.tag,l=Object(s.a)(e,u),c=[];r.forEach((function(a,n){var s=e[a];if(delete l[a],s||""===s){var r=!n;if(Object(d.a)(s)){var o,i=r?"-":"-"+a+"-",u=f(r,a,s.size);c.push(Object(d.b)(m()(((o={})[u]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o)),t))}else{var p=f(r,a,s);c.push(p)}}})),c.length||c.push("col");var p=Object(d.b)(m()(a,c),t);return o.a.createElement(i,Object(n.a)({},l,{className:p}))};v.propTypes=h,v.defaultProps=b,a.a=v},717:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')},739:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(571),o=t.n(r),i=function(e){var a=e.data,t=e.sliderClassName,n=e.spaceBottomClass;return s.a.createElement("div",{className:"single-brand-logo ".concat(t||""," ").concat(n||"")},s.a.createElement("img",{src:""+a.image,alt:""}))},l=t(717);a.a=function(e){var a=e.spaceBottomClass,t=e.spaceTopClass,n={loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:4},640:{slidesPerView:3},320:{slidesPerView:2}}};return s.a.createElement("div",{className:"brand-logo-area ".concat(a||"","  ").concat(t||"")},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"brand-logo-active"},s.a.createElement(o.a,n,l&&l.map((function(e,a){return s.a.createElement(i,{data:e,key:a,sliderClassName:"swiper-slide",spaceBottomClass:"mb-30"})}))))))}},744:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),i=t(3),l=t.n(i),c=t(78),m=t.n(c),d=t(54),u=["className","cssModule","tag","fluid"],p={tag:d.c,fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},g=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=e.fluid,l=Object(s.a)(e,u),c=Object(d.b)(m()(a,"jumbotron",!!i&&"jumbotron-fluid"),t);return o.a.createElement(r,Object(n.a)({},l,{className:c}))};g.propTypes=p,g.defaultProps={tag:"div"},a.a=g},781:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-1.jpg","title":"Watches","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-2.jpg","title":"Plo Bag","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-3.jpg","title":"Sunglass","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]')},782:function(e){e.exports=JSON.parse('[{"id":1,"title":"ABOUT US","subtitle":"GSD100","image":"/assets/img/Cloth.jpg","url":"/shop-grid-standard"}]')},895:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass;return s.a.createElement("div",{className:"welcome-area ".concat(a||""," ").concat(t||"")},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"welcome-content text-center"},s.a.createElement("h5",null,"Who Are We"),s.a.createElement("h1",null,"Welcome To GSD100"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure"," "))))},o=t(781),i=t(6),l=function(e){var a=e.data,t=e.spaceBottomClass;return s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"single-banner ".concat(t||"")},s.a.createElement(i.c,{to:""+a.link},s.a.createElement("img",{src:""+a.image,alt:""})),s.a.createElement("div",{className:"banner-content"},s.a.createElement("h3",null,a.title),s.a.createElement("h4",null,a.subtitle," ",s.a.createElement("span",null,a.price)),s.a.createElement(i.c,{to:""+a.link},s.a.createElement("i",{className:"fa fa-long-arrow-right"})))))},c=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass;return s.a.createElement("div",{className:"banner-area ".concat(a||""," ").concat(t||"")},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},o&&o.map((function(e,a){return s.a.createElement(l,{data:e,key:a,spaceBottomClass:"mb-30"})})))))},m=t(578),d=t(744),u=function(e){var a=e.spaceBottomClass;return s.a.createElement("div",{className:"about-mission-area ".concat(a||"")},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement(m.a,{md:"5"}," ",s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 "},s.a.createElement("div",{className:"shadow p-4 mb-5 mr-2 bg-black rounded"},s.a.createElement("h2",null,"Our Vision"),s.a.createElement("p",{style:{color:"white"}},s.a.createElement("p",{style:{color:"white"}},"We aspire to put \u201ccrypto currency in every portfolio.\u201d")," ","We envision a world where wealth-building strategies that were once only accessible to affluent individuals become available to everyone, transferring the power over our financial systems back to the people. GSD100 is going to create a revolutionary ecosystem to bring more people into digital assets, helping to earn a passive income through redistribution / reflection, by holding the Lift token long term, along with maintaining their privacy, security, power, and autonomy. We strive to create an ecosystem based on sound monetary policies, with a sound and solid decentralized foundation, that should be expected with the Lift coin digital asset"))),s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:" shadow p-4 mb-5 mr-2 bg-black rounded"},s.a.createElement("h2",null,"Our Mission"),s.a.createElement("p",{style:{color:"white"}},"GSD100 utility will become a powerful weapon for normal household people globally for utilizing day to day needs ."))))),s.a.createElement(m.a,{md:"7"},s.a.createElement(d.a,{className:"shadow p-4 mb-5 bg-black rounded "},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("h2",null,"About us"),s.a.createElement("p",{style:{color:"white"}},"GSD100 is not only an emerging crypto currency platform that is built on TRC 20 (Tron Smart chain) and BEP-20 (Binance Chain) but also has features of transparency and Initial coin distribution which we believe is crucial for the long-term feasibility and decentralization. GSD100 is complete all in one ecosystem that contains the Staking, Launchpad, NFT marketplace, and swapping facility under an umbrella.GSD100 is also using in utility services for over 4r5 countries in phase wise offering through GSD100. GSD100 also bringing exchange services. GSD100 used block chain technology to make its NFT marketplace Unique. Community members are also involved in decision making to make feel true ownership of their asset. To connect the different block chain platform under an umbrella GSD100 started a platform SOXYBRIDGE & By using GSD100 SWAP digital asset can be converted into desired form. Martin Dewis & Williams are the founders of Soxy. Both together have decided to develop the community through Gynysys partner program. Martin is an experienced market analyst with 10years of traditional business and crypto currency portfolio management. Martin has done his Masters in Computer science with specialization in blockchain technology. With very rich experience in blockchain and crypto, he turned into an expert in crypto trading. Williams has done his masters in Cyber Security and is experienced in researching, execution of innovative new products in Block Chain & Crypto currency for the last 9 years. William\u2019s passion is transformation of life through technology. Moved by confidence and trusted team and as the crypto is the future, both the founders have planned to provide financial freedom for each and every one through crypto currency in many countries. Martin has decided to make GSD100 household name worldwide."),s.a.createElement("p",null)))))))},p=t(739),g=t(571),h=t.n(g),b=t(782),f=t(189),v=t.n(f),y=function(e){e.data,e.sliderClassName;return s.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(v.a,")"),width:"100%",padding:"100px 0px",backgroundSize:"cover"}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12"},s.a.createElement("div",{className:""},s.a.createElement("h1",{className:"text-light text-center"},"About Us"))))))},E=function(){var e={effect:"fade",loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1}};return s.a.createElement("div",{className:"slider-area"},s.a.createElement("div",{className:"slider-active-2 nav-style-3"},s.a.createElement(h.a,e,b&&b.map((function(e,a){return s.a.createElement(y,{sliderClassName:"swiper-slide",data:e,key:a})})))))},w=t(181);a.default=function(e){e.location;return s.a.createElement(n.Fragment,null,s.a.createElement(w.a,null,s.a.createElement(E,null),s.a.createElement(r,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95"}),s.a.createElement(c,{spaceBottomClass:"pb-70"}),s.a.createElement(u,{spaceBottomClass:"pb-70",spaceTopClass:"pt-70"}),s.a.createElement(p.a,{spaceBottomClass:"pb-70"})))}}}]);
//# sourceMappingURL=54.0c14a153.chunk.js.map