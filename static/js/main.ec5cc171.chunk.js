(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(23),i=a.n(s),r=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))},l=(a(30),a(24)),o=a(2),d=a(9),u=a(10),m=a(12),g=a(11),j=a(21),b="msg-added",h="msg-removed",p=[{id:1,name:"ade",age:34,country:"argentina"},{id:2,name:"john",age:16,country:"nigeria"},{id:3,name:"peter",age:20,country:"kenya"},{id:4,name:"james",age:13,country:"togo"},{id:5,name:"keneth",age:30,country:"uganda"},{id:6,name:"adekunle",age:21,country:"chile"},{id:7,name:"benedine",age:89,country:"brazil"},{id:8,name:"thomas",age:10,country:"nigeria"},{id:9,name:"jerry",age:19,country:"ghana"},{id:10,name:"kevin",age:99,country:"abia"},{id:11,name:"phliph",age:15,country:"korea"},{id:12,name:"livinus",age:60,country:"not available"},{id:13,name:"adeshina",age:73,country:"not available"},{id:14,name:"ade",age:34,country:"argentina"},{id:15,name:"john",age:16,country:"nigeria"},{id:16,name:"peter",age:20,country:"kenya"},{id:17,name:"james",age:13,country:"togo"},{id:18,name:"keneth",age:30,country:"uganda"},{id:19,name:"adekunle",age:21,country:"chile"},{id:20,name:"benedine",age:89,country:"brazil"}];var y=Object(j.a)({homepagereducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:case b:return e;case h:return 0===e.length?p.filter((function(e){return e.id===Number(t.payload.id)})):e.filter((function(e){return e.id===Number(t.payload.id)}))}}}),x=Object(j.b)(y),f=a(18),v=a.n(f),O=a(7),N=a(14),k=a(15),C=a(1);O.a.registerPlugin(O.a,N.a,k.a);var S=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={ray:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],styled:"nav-contain",checks:!0},e.navChange=function(){e.state.checks?e.setState({styled:"nav-contain backleft"}):e.setState({styled:"nav-contain"}),e.setState({checks:!e.state.checks})},e.componentDidMount=function(){console.log(x.getState());var e=document.querySelector(".cursor");document.addEventListener("mousemove",(function(t){e.style.left=t.pageX+"px",e.style.top=t.pageY+"px"})),v.a.init(document.querySelectorAll(".x")),document.querySelectorAll(".scroll-menu>div>div")[0].style.cssText="opacity:1;transform:scaleZ(1);left:0;top:0;transition:0.5s;",document.querySelectorAll(".scroll-menu>div>div")[1].style.cssText="opacity:1;transform:scaleZ(1);left:0;top:0;transition:0.5s;",O.a.timeline().from(".headphoto",{duration:1,y:"-100%",ease:"bounce"}).from(".text-flow",{duration:1,opacity:0,y:"20px",ease:"bounce",delay:0,stagger:.3}).from(".slide",{duration:1,opacity:0,x:"-40px",ease:"bounce",delay:0,stagger:.3})},e.addFile=function(e){x.dispatch({type:h,payload:{id:Number(e.target.id)}}),console.log(x.getState()),x.subscribe((function(){console.log("store unsubscribe")}))},e.scroller=function(e,t){for(var a=document.querySelectorAll(".scroll-menu>div>div"),n=e.target.getBoundingClientRect().top,c=0;c<a.length;c++)a[c].getBoundingClientRect().top<n+e.target.clientHeight/1.5?a[c].style.cssText="opacity:1;transform:scaleZ(1);left:0;top:0;transition:0.5s;":a[c].style.cssText="opacity:0;transition:0.5s;transform:scaleZ(0)";a[a.length-1].getBoundingClientRect().top,e.target.scrollHeight},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:"flex headphoto",children:[Object(C.jsxs)("div",{className:"col-md-12 flex",children:[Object(C.jsx)("div",{className:"col-5 col-md-2",children:Object(C.jsxs)("span",{className:"brand slide",children:[Object(C.jsx)("i",{className:"fa fa-th-large"}),Object(C.jsx)("em",{children:" Music"})]})}),Object(C.jsxs)("div",{className:"col-7 col-md-10 col-lg-8 text-right nav-text",children:[Object(C.jsx)("i",{onClick:this.navChange,className:"fa fa-navicon nav slide"}),Object(C.jsxs)("div",{className:this.state.styled,children:[Object(C.jsx)("span",{className:"slide l-slide",children:"Home"}),Object(C.jsx)("span",{className:"slide l-slide",children:"Pages"}),Object(C.jsx)("span",{className:"slide l-slide",children:"Blog"}),Object(C.jsx)("span",{className:"slide l-slide",children:"Portfolio"}),Object(C.jsx)("button",{className:"click-button slide l-slide",children:"Get started"})]})]})]}),Object(C.jsxs)("div",{className:"headcontain col-md-6",children:[Object(C.jsx)("h1",{className:"x text-flow","data-tilt":!0,"data-tilt-reverse":"true",children:" Introducing a New Music App Move Videos and Quality"}),Object(C.jsx)("p",{className:"text-flow",children:"Phasellus consectetur volutpat tortor at. Cras eu purus ipsum, quis. Morbi ullamcorper porta risus, ac. Integer semper convallis purus vitae. Vestibulum facilisis, neque nec mollis."}),Object(C.jsx)("button",{className:"click-button slide v-button",children:"Start 14 days free trial"}),Object(C.jsx)("em",{className:"cursor"}),Object(C.jsx)("span",{className:"arrow","data-tilt":!0,"data-tilt-reverse":"true","data-tilt-max-glare":"0.8"})]}),Object(C.jsxs)("div",{className:"col-md-6 scroll-menu",children:[this.state.login,Object(C.jsx)("div",{className:"col-12",onScroll:this.scroller,children:this.state.ray.map((function(t){return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"col-sm-7 col-md-7 col-lg-6 scroll-img-contain",children:[Object(C.jsx)("span",{onClick:e.addFile,id:e.state.ray.indexOf(t),className:"fa fa-play play"}),Object(C.jsx)("img",{className:"respond",src:"./pics/folder/earphone8.jpg"}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("span",{className:"heart-icon",children:[Object(C.jsx)("i",{className:"fa fa-heart"})," ",Object(C.jsx)("em",{children:" 34"})]}),Object(C.jsxs)("div",{className:"icon-img-contain",children:[Object(C.jsx)("img",{className:"icon-img",src:"./pics/folder/shop7.jpg"}),Object(C.jsx)("img",{className:"icon-img",src:"./pics/folder/scg-canvas-background-animation-6.jpg"}),Object(C.jsx)("img",{className:"icon-img",src:"./pics/folder/earphone8.jpg"}),Object(C.jsx)("img",{className:"icon-img",src:"./pics/folder/scg-canvas-background-animation-6.jpg"})]})]}),Object(C.jsxs)("div",{className:"title-text",children:[Object(C.jsx)("em",{children:"Johnny drill"}),Object(C.jsx)("span",{children:"Come close to me baby , I am less thing without you.."})]})]})},t)}))})]})]})}}]),a}(c.a.Component);O.a.registerPlugin(O.a,N.a,k.a);var w=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){var e=O.a.timeline({scrollTrigger:{trigger:".black-container"}}),t=O.a.timeline({scrollTrigger:{trigger:".imageish",start:"center bottom"}});e.from(".blackish-text",{x:200,opacity:0,duration:2}),t.from(".roll-img",{x:200,opacity:0,duration:2})},e.state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(C.jsx)("div",{className:"flex black-container"})}}]),a}(c.a.Component),T=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(S,{}),Object(C.jsx)(w,{})]})}}]),a}(c.a.Component);i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(l.a,{basename:window.location.pathname||"",children:Object(C.jsx)(o.c,{children:Object(C.jsx)(o.a,{path:"/",exact:!0,component:T})})})}),document.getElementById("root")),r()}},[[37,1,2]]]);
//# sourceMappingURL=main.ec5cc171.chunk.js.map