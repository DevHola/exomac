(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{297:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("30fa31d0",content,!0,{sourceMap:!1})},298:function(t,e,n){var content=n(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("7700fe40",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n(297)},300:function(t,e,n){(e=n(44)(!1)).push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=e},301:function(t){t.exports=JSON.parse('{"footerAboutWidget":{"logoSrc":"/images/logo/footer-logo.png","telephone":"0123456789","email":"demo@example.com","fbUrl":"#","twitterUrl":"#","instagramUrl":"#"},"footerLinkTitleOne":"Services","navListOne":[{"navTitle":"Recruitment","navUrl":"/services/Recruitment-and-Selection"},{"navTitle":"HRAdvisory Services","navUrl":"/services/HRAdvisory-Services"},{"navTitle":"Outsourcing","navUrl":"/services/Outsourcing"},{"navTitle":"Strategy & Learning","navUrl":"/services/Strategy-and-Learning"}],"footerLinkTitleThree":"About","navListThree":[{"navTitle":"About Us","navUrl":"/about"},{"navTitle":"Meet The Team","navUrl":"/meet-the-team"}],"footerLinkTitleFour":"Contact","navListFour":[{"navTitle":"Help Desk","navUrl":"/contact-us"},{"navTitle":"Live Chat","navUrl":"/"}]}')},302:function(t,e,n){"use strict";n(298)},303:function(t,e,n){(e=n(44)(!1)).push([t.i,'span[data-v-3c9bbc10]{font-family:"Lucida Sans","Lucida Sans Regular","Lucida Grande","Lucida Sans Unicode",Geneva,Verdana,sans-serif}',""]),t.exports=e},304:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,309))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-2 col-auto order-0"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/"}},[n("span",{staticStyle:{color:"white","font-size":"17px","font-family":"Lucida Sans Regular"}},[n("b",[t._v("Cocre-a Consults")])])])],1)]),t._v(" "),n("div",{staticClass:"col-auto col-xl d-flex align-items-center justify-content-xl-right justify-content-end order-2 order-xl-1"},[n("div",{staticClass:"menu-column-area d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(309).default})},305:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,308))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner custom-scrollbar"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("span",{staticStyle:{color:"white","font-size":"15px","font-family":"Lucida Sans Regular"}},[n("b",[t._v("Cocre-a Consults")])])])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(308).default})},306:function(t,e,n){"use strict";n.r(e);var o={methods:{toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[n("div",{staticClass:"sidebar-search-icon"},[n("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-search-input"},[e("form",[e("div",{staticClass:"form-search"},[e("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),this._v(" "),e("button",[e("i",{staticClass:"fa fa-search"})])])]),this._v(" "),e("p",{staticClass:"form-description"},[this._v("Hit enter to search")])])}],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);var footer=n(301),o={data:function(){return{footerData:footer}}},l=(n(302),n(43)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section",style:{backgroundColor:"#030e22"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row section-padding pt-0 mtn-30"},[n("div",{staticClass:"col-md-4 col-sm-6 col-12 mt-30"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("span",{staticStyle:{color:"white","font-size":"20px","font-family":"Lucida Sans Regular"}},[n("b",[t._v("Cocre-a Consults")])])])],1),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleOne))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListOne,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleThree))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListThree,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])]),t._v(" "),n("div",{staticClass:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},[n("div",{staticClass:"footer-widget"},[n("h4",{staticClass:"footer-widget-title"},[t._v(t._s(t.footerData.footerLinkTitleFour))]),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("ul",t._l(t.footerData.navListFour,(function(nav,e){return n("li",{key:e},[n("n-link",{attrs:{to:nav.navUrl}},[t._v(t._s(nav.navTitle))])],1)})),0)])])])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-widget-content"},[e("div",{staticClass:"content"},[e("p",[e("a",{attrs:{href:"tel:(+1)212-946-2701"}})]),this._v(" "),e("p",[e("a",{attrs:{href:"mailto:info@cocreaconsults.com"}},[this._v("Info@cocreaconsults.com")])])]),this._v(" "),e("div",{staticClass:"footer-social-inline"},[e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-twitter-square"})]),this._v(" "),e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-facebook-square"})]),this._v(" "),e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-instagram"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"copyright"},[this._v("Copyright © 2021 "),e("a",{attrs:{href:"/home"}},[this._v("Cocre-a Consults")]),this._v(". All Rights Reserved.")])])])}],!1,null,"3c9bbc10",null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),l=o.length,r=0;r<l;r++)o[r].addEventListener("click",(function(t){d(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){v()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},v=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},l=(n(299),n(43)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/meet-the-team"}},[t._v("Meet The Team")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var o=n(43),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",[n("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Services")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/meet-the-team"}},[t._v("Meet The Team")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var o={props:["items","title","backgroundUrl"]},l=n(43),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title-section section-padding-top bg-cover img-fluid",style:{backgroundImage:"url("+this.backgroundUrl+")"},attrs:{"data-overlay":"0.7"}},[this._m(0),this._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:this.items}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"})])}],!1,null,null,null);e.default=component.exports},311:function(t){t.exports=JSON.parse('[{"id":1,"logo":"/images/bg/logo(2).png","alt":"brand logo"},{"id":2,"logo":"/images/bg/logo(1).png","alt":"brand logo"},{"id":3,"logo":"/images/bg/1592239328846.jpg","alt":"brand logo"},{"id":4,"logo":"/images/bg/long-2.png","alt":"brand logo"},{"id":5,"logo":"/images/bg/Logo-1.png","alt":"brand logo"},{"id":6,"logo":"/images/bg/images56.png","alt":"brand logo"}]')},312:function(t,e,n){"use strict";n.r(e);var o=n(311),l={data:function(){return{brandData:o,swiperOption:{speed:1e3,loop:!0,spaceBetween:30,slidesPerView:6,autoplay:!0,breakpoints:{1200:{slidesPerView:6},992:{slidesPerView:5},768:{slidesPerView:4},576:{slidesPerView:3},320:{slidesPerView:2}}}}}},r=n(43),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brand-section pb-3",staticStyle:{position:"relative",top:"0px"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"brand-wrapper"},[e("div",{staticClass:"brand-list"},[e("swiper",{attrs:{options:this.swiperOption}},this._l(this.brandData,(function(t,n){return e("div",{key:n,staticClass:"swiper-slide brand"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"img-fluid",attrs:{src:t.logo,alt:"brand.alt"}})])],1)})),0)],1)])])])])])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,n){"use strict";n.r(e);var o={},l=n(43),component=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col col-lg-6 col-12"},[e("div",{staticClass:"about-image-area"},[e("div",{staticClass:"about-image js-tilt"},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/bg/depositphotos_50591129-stock-photo-african-american-businesswoman-in-office.jpeg",height:"500",width:"370",alt:"image"}})]),this._v(" "),e("div",{staticClass:"about-image js-tilt"})])]),this._v(" "),e("div",{staticClass:"col-xl-5 col-lg-6 col-12"},[e("div",{staticClass:"about-content-area about-four"},[e("div",{staticClass:"section-title-two"},[e("span",{staticClass:"sub-title"},[this._v("What we do")]),this._v(" "),e("h3",{staticClass:"title"},[this._v("We improve HR and business operations .")])]),this._v(" "),e("p",[this._v("Cocre-a provides customized solutions to improve HR and company processes in a variety of industries, both nationally and globally. We conduct impartial investigations into organizations and situations, and devise a \"flex-to-fit\" strategy to satisfy all of our clients' requests. Our solutions are adapted to our clients' individual needs; in this regard, we provide a wide range of bespoke solutions that meet and exceed the expectations of our clients.")])])])])])])}],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n.r(e);var o=n(43),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-1",staticStyle:{"padding-top":"10px"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"container pl-5"},[n("h1",{staticClass:"text-left mt-5"},[t._v("Cocre-a Consults")]),t._v(" "),n("p",{staticClass:"text-left"},[t._v("We are a global strategic Human Capital solutions provider with a team of seasoned individuals with a wide range of backgrounds and industry expertise who work across boards to tackle various HR difficulties. We construct methods that assist organizations in achieving their goals, making a profit, and reducing costs by attracting and developing the right talent, as well as creating an ideal organization that fosters productivity and innovation and collaboration.\n"),n("b",[t._v("Cocre-a bridges the gap of need for employers and jobseekers")]),t._v(". ")])]),t._v(" "),n("br"),t._v(" "),n("section",{staticClass:"py-5 "},[n("div",{staticClass:"container px-5"},[n("div",{staticClass:"row gx-5 align-items-center"},[n("div",{staticClass:"col-lg-6 order-first order-lg-last"},[n("img",{staticClass:"img-fluid rounded mb-5 mb pull-right img-responsive",attrs:{src:"/images/bg/imgbin_vision-statement-business-computer-icons-mission-statement-company-png.png",height:"250",width:"50%",alt:"..."}})]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("h2",{staticClass:"fw-bolder"},[t._v("Our Vision")]),t._v(" "),n("p",{staticClass:"lead fw-normal text-muted mb-0"},[t._v("Becoming the leading Human Capital and Resources Managers in Africa..")])])])])]),t._v(" "),n("section",{staticClass:"py-5 bg-light ",staticStyle:{"margin-top":"-130px"},attrs:{id:"scroll-target"}},[n("div",{staticClass:"container px-5 my-5"},[n("div",{staticClass:"row gx-5 align-items-center"},[n("div",{staticClass:"col-lg-6"},[n("img",{staticClass:"img-fluid rounded mb-5 mb-lg-0 pull-left",attrs:{src:"/images/bg/imgbin_mission-statement-computer-icons-vision-statement-business-png.png",height:"250",width:"50%",alt:"..."}})]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("h2",{staticClass:"fw-bolder"},[t._v("Our Mission")]),t._v(" "),n("p",{staticClass:"lead fw-normal text-muted mb-0"},[t._v("To provide sustainable Human Resources solutions by matching the talent shortage faced by organizations and businesses using creative, smart solutions..")])])])])])])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,304))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,305))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,306))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,310))},AboutTwo:function(){return Promise.resolve().then(n.bind(null,324))},AboutFour:function(){return Promise.resolve().then(n.bind(null,316))},BrandLogoCarousel:function(){return Promise.resolve().then(n.bind(null,312))},TheFooter:function(){return Promise.resolve().then(n.bind(null,307))}},data:function(){return{items:[{text:"Home",to:"/"},{text:"About Us",active:!0}]}},head:function(){return{title:"About us"}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("TheHeader"),t._v(" "),n("OffCanvasMobileMenu"),t._v(" "),n("SearchPopup"),t._v(" "),n("BreadcrumbOne",{attrs:{items:t.items,title:"",backgroundUrl:"/images/bg/slider-3.jpeg"}}),t._v(" "),n("AboutTwo",{}),t._v(" "),n("hr"),t._v(" "),n("AboutFour"),t._v(" "),t._m(0),t._v(" "),n("BrandLogoCarousel"),t._v(" "),n("TheFooter")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"py-5 mb-4 mt-5  box-shadow",staticStyle:{background:"#030E22"}},[e("div",{staticClass:"container px-5 my-5"},[e("h2",{staticClass:"display-4 fw-bolder mb-4",staticStyle:{color:"white"}},[this._v("Let's build something together")]),this._v(" "),e("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#!"}},[this._v("Contact us")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(304).default,OffCanvasMobileMenu:n(305).default,SearchPopup:n(306).default,BreadcrumbOne:n(310).default,AboutTwo:n(324).default,AboutFour:n(316).default,BrandLogoCarousel:n(312).default,TheFooter:n(307).default})}}]);