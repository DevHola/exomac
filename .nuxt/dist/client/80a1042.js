(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{297:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("30fa31d0",content,!0,{sourceMap:!1})},298:function(t,e,n){var content=n(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("7700fe40",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,310))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-2 col-auto order-0"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/"}},[n("span",{staticStyle:{color:"white","font-size":"17px","font-family":"Lucida Sans Regular"}},[n("b",[t._v("Cocre-a Consults")])])])],1)]),t._v(" "),n("div",{staticClass:"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"},[n("div",{staticClass:"menu-column-area d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-search-area"},[n("div",{staticClass:"header-search"},[n("a",{staticClass:"header-search-toggle",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.toggleClass("addClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-search pe-2x pe-va"})])])]),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(310).default})},300:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,309))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner custom-scrollbar"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("span",{staticStyle:{color:"white","font-size":"15px","font-family":"Lucida Sans Regular"}},[n("b",[t._v("Cocre-a Consults")])])])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(309).default})},301:function(t,e,n){"use strict";n.r(e);var o={methods:{toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[n("div",{staticClass:"sidebar-search-icon"},[n("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-search-input"},[e("form",[e("div",{staticClass:"form-search"},[e("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),this._v(" "),e("button",[e("i",{staticClass:"fa fa-search"})])])]),this._v(" "),e("p",{staticClass:"form-description"},[this._v("Hit enter to search")])])}],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);var footer=n(305),o={data:function(){return{footerData:footer}}},l=(n(306),n(43)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section",style:{backgroundColor:"#030e22"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row section-padding pt-0 mtn-30"},[n("div",{staticClass:"col-md-4 col-sm-6 col-12 mt-30"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("span",{staticStyle:{color:"white","font-size":"20px","font-family":"Lucida Sans Regular"}},[n("b",[t._v("Cocre-a Consults")])])])],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleOne))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListOne,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleThree))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListThree,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleFour))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListFour,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-widget-content"},[e("div",{staticClass:"content"},[e("p",[e("a",{attrs:{href:"tel:(+1)212-946-2701"}})]),this._v(" "),e("p",[e("a",{attrs:{href:"mailto:info@cocreaconsults.com"}},[this._v("Info@cocreaconsults.com")])])]),this._v(" "),e("div",{staticClass:"footer-social-inline"},[e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-twitter-square"})]),this._v(" "),e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-facebook-square"})]),this._v(" "),e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"copyright"},[this._v("Copyright © 2021 "),e("a",{attrs:{href:"/home"}},[this._v("Cocre-a Consults")]),this._v(". All Rights Reserved.")])])])}],!1,null,"3c9bbc10",null);e.default=component.exports},303:function(t,e,n){"use strict";n(297)},304:function(t,e,n){(e=n(44)(!1)).push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=e},305:function(t){t.exports=JSON.parse('{"footerAboutWidget":{"logoSrc":"/images/logo/footer-logo.png","telephone":"0123456789","email":"demo@example.com","fbUrl":"#","twitterUrl":"#","instagramUrl":"#"},"footerLinkTitleOne":"Services","navListOne":[{"navTitle":"Recruitment","navUrl":"/services/Recruitment-and-Selection"},{"navTitle":"HRAdvisory Services","navUrl":"/services/HRAdvisory-Services"},{"navTitle":"Outsourcing","navUrl":"/services/Outsourcing"},{"navTitle":"Strategy & Learning","navUrl":"/services/Strategy-and-Learning"}],"footerLinkTitleThree":"About","navListThree":[{"navTitle":"About Us","navUrl":"/about"},{"navTitle":"Meet The Team","navUrl":"/meet-the-team"}],"footerLinkTitleFour":"Contact","navListFour":[{"navTitle":"Help Desk","navUrl":"/contact-us"},{"navTitle":"Live Chat","navUrl":"/"}]}')},306:function(t,e,n){"use strict";n(298)},307:function(t,e,n){(e=n(44)(!1)).push([t.i,'span[data-v-3c9bbc10]{font-family:"Lucida Sans","Lucida Sans Regular","Lucida Grande","Lucida Sans Unicode",Geneva,Verdana,sans-serif}',""]),t.exports=e},308:function(t,e,n){"use strict";n.r(e);var o={props:["items","title","backgroundUrl"]},l=n(43),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url("+this.backgroundUrl+")"},attrs:{"data-overlay":"0.7"}},[this._m(0),this._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:this.items}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"})])}],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),l=o.length,r=0;r<l;r++)o[r].addEventListener("click",(function(t){d(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){v()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},v=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},l=(n(303),n(43)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/meet-the-team"}},[t._v("Meet The Team")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var o=n(43),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/meet-the-team"}},[t._v("Meet The Team")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);n(94),n(19),n(30);var o={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,299))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,300))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,301))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,308))},TheFooter:function(){return Promise.resolve().then(n.bind(null,302))}},data:function(){return{items:[{text:"Home",to:"/"},{text:"Project Details",active:!0}]}},asyncData:function(t){return new Promise((function(e,n){setTimeout((function(){e({service:[{id:1,url:"Recruitment-and-Selection",title:"Recruitment and Selection",desc:[{id:1,desc:"This solution ensures that we adopt the most effective measures to ensure we attract, shortlist, select and present to our clients the most suitable candidates for all required roles."}],image:"",Selection:[{id:1,title:"Talent acquisition"},{id:2,title:"Talent retention"}]},{id:2,url:"HRAdvisory-Services",title:"HRAdvisory Services",desc:[{id:1,desc:"HR Transformation: This service offers a robust service that focuses on building and developing HR systems, practices and processes that are fit for purpose and are more perfectly aligned to the overall strategic objectives of the organisation."},{id:2,desc:"Talent Management: This solution focuses on equipping the workforce with efficient tools to ensure optimal productivity. Our approach ensures we tap and develop the potential of your employees from beginning to the end of their employment life cycle"}],image:"",Selection:[{id:1,title:"HRAnalytics & Diagnostics"},{id:2,title:"HR Systems &Technologies"},{id:3,title:"Change Management &Communication"},{id:4,title:"Human Resources Strategy Formulation"},{id:5,title:"Organisation Design & Development"},{id:6,title:"Workforce Strategy & Planning"},{id:7,title:"Performance Management"},{id:8,title:"Career Progression & Management"},{id:9,title:"Talent Profiling,Job Analysis & Evaluation"},{id:10,title:"Succession Planning and Talent Mapping"}]},{id:3,url:"Outsourcing",title:"Outsourcing",desc:[{id:1,desc:"Outsourcing solutions is structured such that our clients time resource is freed up to allow for a focus on strategic operations. It is an all-encompassing solution focused on the following:"}],image:"",Selection:[{id:1,title:"People Outsourcing "},{id:2,title:"Project Outsourcing"},{id:3,title:"Process Outsourcing "}]},{id:4,url:"Strategy-and-Learning",title:"Strategy and Learning",desc:[{id:1,desc:"This service aims at identifying and providing the right training opportunities to employees to improve individual performance by proper development of skills and knowledge."}],image:"",Selection:[{id:1,title:"Personal Development "},{id:2,title:"Strategic Leadership Development "},{id:1,title:"Learning and Development "}]}].find((function(e){return e.url===t.params.id}))})}),1500)}))},head:function(){return{title:"Project Details"}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("TheHeader"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("SearchPopup"),t._v(" "),n("BreadcrumbOne",{attrs:{items:t.items,title:"We work with bold brands that we believe in",backgroundUrl:"/images/bg/breadcrumb-bg-two.jpg"}}),t._v(" "),n("div",{staticClass:"section-padding"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row mt-60"},[n("div",{staticClass:"col-lg-4 col-md-12 col-12"},[n("div",{staticClass:"digital-marketing",attrs:{"data-aos":"fade-up"}},[n("h3",{staticClass:"heading heading-h3"},[t._v(t._s(t.service.title))])])]),t._v(" "),n("div",{staticClass:"col-lg-7 col-md-12 col-12 offset-lg-1"},[n("div",{staticClass:"digital-marketing",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"inner"},[t._l(t.service.desc,(function(details,e){return n("p",{key:e},[t._v(t._s(details.desc)+".")])})),t._v(" "),n("b",[t._v("Solutions we offer:")]),t._v(" "),t._l(t.service.Selection,(function(select,e){return n("li",{key:e},[t._v(t._s(select.title))])}))],2)])])]),t._v(" "),n("hr")])]),t._v(" "),t._m(1),t._v(" "),n("TheFooter")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"custom-column-thumbnail mt-60",attrs:{"data-aos":"fade-up"}},[e("img",{staticClass:"w-100",attrs:{src:"/images/project/work-details-1.jpg",alt:"Agency"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"py-5 bg-light"},[e("div",{staticClass:"container px-5 my-5"},[e("h2",{staticClass:"display-4 fw-bolder mb-4"},[this._v("Let's build something together")]),this._v(" "),e("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#!"}},[this._v("Contact us")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(299).default,OffCanvasMobileMenu:n(300).default,SearchPopup:n(301).default,BreadcrumbOne:n(308).default,TheFooter:n(302).default})}}]);