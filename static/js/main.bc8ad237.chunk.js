(this["webpackJsonpdashboard-app"]=this["webpackJsonpdashboard-app"]||[]).push([[18],{115:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a(1),a(49)),i=a.n(r),s=a(688),o=a(687),c=a(88),l=a(165),d=document.getElementById("root");i.a.render(Object(n.jsxs)(o.a,{theme:c.default,children:[Object(n.jsx)(s.a,{}),Object(n.jsx)(l.default,{})]}),d)},126:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a(1),a(46)),i=(a(195),a(254)),s=a(23),o=a(15),c=a(406),l=a(686),d=a(691),p=a(262),j=Object(r.a)((e=>({root:{height:"100vh",width:"100%",backgroundImage:"url(".concat(i.default,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:"center",backdropFilter:"blur(5px)"},filter:{backdropFilter:"blur(5px)"},loginContainer:{width:"520px",maxWidth:"90%",height:"520px",backgroundColor:"#fff",boxShadow:"0 0 14px 0 rgba(53,64,82,.05)",borderRadius:"2px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"2.3rem"},login:{},large:{width:e.spacing(10),height:e.spacing(10),marginTop:"0.4rem",transform:"translate"},signinBtn:{width:"100%",marginTop:"1.2rem",textTransform:"initial"},fgtBtn:{width:"100%",marginTop:"0.5rem",textTransform:"initial",color:e.palette.primary.main,fontWeight:"bold"},text:{margin:"0.7rem 0"},form:{marginTop:"1.5rem"},h4:{marginTop:"1.5rem",fontWeight:"bold"},h6:{marginTop:"0.5rem"}})));t.default=function({history:e}){var t=j();return Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)("div",{className:t.filter}),Object(n.jsxs)("div",{className:t.loginContainer,children:[Object(n.jsx)(s.a,{className:t.large,alt:"logo",src:"https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1578063880"}),Object(n.jsx)(o.a,{variant:"h4",component:"h4",className:t.h4,children:"Welcome back, Ayush !"}),Object(n.jsx)(o.a,{variant:"h6",component:"h6",color:"textSecondary",className:t.h6,children:"Sign in to your account to continue"}),Object(n.jsxs)("form",{className:t.form,children:[Object(n.jsx)(c.a,{label:"Email address",required:!0,fullWidth:!0,className:t.text}),Object(n.jsx)(c.a,{label:"Password",type:"password",required:!0,fullWidth:!0,className:t.text}),Object(n.jsx)(l.a,{control:Object(n.jsx)(d.a,{name:"checkedC",color:"primary"}),label:"Remember me"}),Object(n.jsx)(p.a,{variant:"contained",className:t.signinBtn,onClick:()=>{e.push("/dashboard")},children:"Sign in"}),Object(n.jsx)(p.a,{variant:"default",className:t.fgtBtn,children:"Forgot password"})]})]})]})}},127:function(e){e.exports=JSON.parse('[{"icon":"dashboard","title":"Dashboard","route":"/dashboard"},{"title":"Elements","icon":"settings","route":"/elements","children":[{"title":"Tabs","route":"/tabs"},{"title":"Cards","route":"/cards"}]},{"title":"Pages","icon":"web","route":"/pages","children":[{"title":"Login","route":"/login"},{"title":"Register","route":"/register"},{"title":"Profile","route":"/profile"}]}]')},150:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(3),i=a(1),s=a(89);t.default=function(){var e=Object(i.useState)(0),t=Object(n.a)(e,2),a=t[0],o=t[1];return Object(i.useEffect)((()=>{var e=setInterval((()=>{o((e=>{var t=10*Math.random();return Math.min(e+t,100)}))}),200);return()=>{clearInterval(e)}}),[]),Object(r.jsx)(s.Top,{value:a})}},151:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a(1),a(5)),i=a(46),s=a(664),o=Object(i.a)({root:{width:"100%",position:"fixed",zIndex:1201,top:0,left:0}});t.default=function({value:e=0,variant:t="determinate",className:a=""}){var i=o();return Object(n.jsx)(s.a,{value:e,variant:t,className:Object(r.a)(i.root,a)})}},164:function(e,t,a){"use strict";a.r(t);var n=a(27);t.default={h1:{color:n.default.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:n.default.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:n.default.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:n.default.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:n.default.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:n.default.white,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:n.default.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:n.default.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:n.default.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:n.default.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:n.default.text.primary,fontSize:"14px"},caption:{color:n.default.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:n.default.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"},fontFamily:["Nunito","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}},165:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a(255),i=a.n(r),s=a(387),o=a(1),c=a(3),l=a(166),d=a(167),p=a(75),j=a(18),m=(a(126),e=>new Promise((t=>setTimeout(t,e)))),b=e=>Object(o.lazy)(Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(661)("".concat(e));case 2:return n=t.sent,t.next=5,m(3e3);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)}))));t.default=function(){var e=[{path:"/dashboard",component:b("./routes/dashboard/"),exact:!0},{path:"/tabs",component:b("./routes/tabs/"),exact:!0},{path:"/cards",component:b("./routes/cards/"),exact:!0},{path:"/login",component:b("./routes/login/"),exact:!0},{path:"*",component:b("./pages/404")}];return Object(c.jsx)(p.a,{basename:"/domina",children:Object(c.jsx)(d.default,{children:Object(c.jsx)(o.Suspense,{fallback:Object(c.jsx)(l.TopProgress,{}),children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.a,{from:"/",to:"login",exact:!0}),e.map(((e,t)=>Object(o.createElement)(j.b,Object(n.a)(Object(n.a)({},e),{},{key:t}))))]})})})})}},166:function(e,t,a){"use strict";a.r(t);var n=a(150);a.d(t,"TopProgress",(function(){return n.default}))},167:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a(1),a(678)),i=a(679),s=a(23),o=a(46),c=a(261),l=a(411),d=a(399),p=a.n(d),j=a(189),m=a(18),b=a(90),u=a(91),x=a(92),h=a(93),g=a(127),f=a(252),O=(a(383),Object(o.a)((e=>({root:{display:"flex"},content:{flexGrow:1,padding:e.spacing(3),height:"calc(100vh - 64px - 0.5rem)"},pane:{flex:1},logoContainer:{display:"flex",height:"100px",alignItems:"center",justifyContent:"center"},large:{width:e.spacing(7),height:e.spacing(7)},appbar:{background:"inherit",boxShadow:"none",marginTop:"0.5rem"},actions:{position:"absolute",right:e.spacing(3)},login:{backgroundColor:"rgb(247, 249, 252)"}})))),v=e=>Object(n.jsx)("div",{className:e.logoContainer,children:Object(n.jsx)(s.a,{className:e.large,alt:"logo",src:f.default})});t.default=Object(m.g)((function({children:e,location:t}){var a="/login"===t.pathname,s=O();return a?Object(n.jsx)("main",{className:s.login,children:e}):Object(n.jsxs)("div",{className:s.root,children:[Object(n.jsx)(b.default,{routes:g,disableParentLink:!0,logo:v(s)}),Object(n.jsxs)("div",{className:s.pane,children:[Object(n.jsx)(r.a,{position:"static",className:s.appbar,children:Object(n.jsxs)(i.a,{children:[Object(n.jsx)(u.default,{routes:g}),Object(n.jsxs)("div",{className:s.actions,children:[Object(n.jsx)(l.a,{title:"Statistics",children:Object(n.jsx)(c.a,{children:Object(n.jsx)(j.a,{badgeContent:" ",variant:"dot",color:"primary",children:Object(n.jsx)(p.a,{})})})}),Object(n.jsx)(x.default,{}),Object(n.jsx)(h.default,{})]})]})}),Object(n.jsx)("main",{className:s.content,children:e})]})]})}))},168:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(35),i=a(3),s=a(1),o=a.n(s),c=a(5),l=a(46),d=a(667),p=a(59),j=a(665),m=a(69),b=a(15),u=a(261),x=a(75),h=a(186),g=a(47),f=a(666),O=240,v=Object(l.a)((e=>({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:O,width:"calc(100% - ".concat(O,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:O,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:O,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1,[e.breakpoints.up("sm")]:{width:e.spacing(9)+1}},toolbar:Object(r.a)({display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(0,1),position:"absolute",bottom:0,width:"100%"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},menuItem:{borderLeft:"6px solid transparent","&:hover":{backgroundColor:"rgba(67,160,71, 0.1)",color:e.palette.primary.light,width:"90%",borderTopRightRadius:"1000px",borderBottomRightRadius:"1000px"}},nested:{paddingLeft:e.spacing(10),borderLeft:"6px solid transparent"},title:{display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.primary.light,fontWeight:"bolder"},list:{marginTop:"4rem"},selected:{backgroundColor:"rgba(67,160,71, 0.1)",borderLeft:"6px solid rgb(0,105,92)","& .route-title > span":{fontWeight:"bolder"},color:e.palette.primary.light,width:"90%",borderTopRightRadius:"1000px",borderBottomRightRadius:"1000px","& .icon":{fontFamily:"'Material Icons'",fontWeight:"normal",fontStyle:"normal",fontSize:"24px",lineHeight:"1",letterSpacing:"normal",textTransform:"none",display:"inline-block",whiteSpace:"nowrap",wordWrap:"normal",direction:"ltr",WebkitFontFeatureSettings:"'liga'",WebkitFontSmoothing:"antialiased",color:e.palette.primary.main},"&:hover":{backgroundColor:"rgba(67,160,71, 0.1)",borderLeft:"6px solid rgb(0,105,92)"}}})));function y({route:e,classes:t,disableParentLink:a}){var o=Object(s.useState)(!1),c=Object(n.a)(o,2),l=c[0],d=c[1],b=a&&e.children?{}:{component:x.c,to:e.route,value:e.route,activeClassName:t.selected,exact:!0};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(p.a,Object(r.a)(Object(r.a)({button:!0,onClick:()=>d(!l),className:t.menuItem},b),{},{children:[Object(i.jsx)(j.a,{children:e.icon&&Object(i.jsx)(g.a,{className:"icon material-icons-outlined",children:e.icon})}),Object(i.jsx)(m.a,{primary:e.title,className:"route-title"}),e.children&&(l?Object(i.jsx)(g.a,{children:"expand_less"}):Object(i.jsx)(g.a,{children:"expand_more"}))]})),e.children&&Object(i.jsx)(f.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(i.jsx)(h.a,{component:"div",disablePadding:!0,children:e.children.map(((e,a)=>Object(i.jsx)(p.a,{button:!0,component:x.c,activeClassName:t.selected,exact:!0,to:e.route,value:e.route,className:t.nested,children:Object(i.jsx)(m.a,{primary:e.title,className:"route-title"})},a)))})})]})}t.default=function({routes:e=[],logo:t,disableParentLink:a=!1}){var r=v(),s=o.a.useState(!0),l=Object(n.a)(s,2),p=l[0],j=l[1];return Object(i.jsxs)(d.a,{variant:"permanent",className:Object(c.a)(r.drawer,{[r.drawerOpen]:p,[r.drawerClose]:!p}),classes:{paper:Object(c.a)({[r.drawerOpen]:p,[r.drawerClose]:!p})},children:[t,p&&Object(i.jsx)(b.a,{variant:"h4",className:r.title,children:"Eccentric UX"}),Object(i.jsx)(h.a,{className:r.list,children:e.map(((e,t)=>Object(i.jsx)(y,{route:e,classes:r,disableParentLink:a},t)))}),Object(i.jsx)("div",{className:r.toolbar,onClick:()=>j(!p),children:Object(i.jsx)(u.a,{children:p?Object(i.jsx)(g.a,{children:"chevron_left"}):Object(i.jsx)(g.a,{children:"chevron_right"})})})]})}},169:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(35),i=a(4),s=a(3),o=a(1),c=a(46),l=a(22),d=a(261),p=a(47),j=a(411),m=a(189),b=a(404),u=a(15),x=a(690),h=a(676),g=a(388),f=a.n(g),O=a(409),v=a(170),y=a(171),w=a(172);function S(e){var t=e.children,a=e.value,n=e.index,o=Object(i.a)(e,["children","value","index"]);return Object(s.jsx)("div",Object(r.a)(Object(r.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},o),{},{children:a===n&&Object(s.jsx)(O.a,{p:0,children:Object(s.jsx)(u.a,{children:t})})}))}var k=Object(c.a)((e=>({notifications:{padding:e.spacing(2),width:"552px",maxWidth:"552px"},tabTitle:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},tabTitleLabel:{paddingLeft:"5px"}}))),N=({classes:e,value:t})=>[{key:"timeline",label:Object(s.jsxs)("div",{className:e.tabTitle,style:0===t?{color:"#e53935"}:{},children:[Object(s.jsx)(p.a,{className:0!==t&&"material-icons-outlined",children:"timeline"}),Object(s.jsx)("span",{className:e.tabTitleLabel,children:"Timeline"})]})},{key:"messages",label:Object(s.jsxs)("div",{className:e.tabTitle,style:1===t?{color:"#e53935"}:{},children:[Object(s.jsx)(m.a,{badgeContent:" ",variant:"dot",color:"error",children:Object(s.jsx)(p.a,{className:1!==t&&"material-icons-outlined",children:"email"})}),Object(s.jsx)("span",{className:e.tabTitleLabel,children:"Messages"})]})},{key:"report",label:Object(s.jsxs)("div",{className:e.tabTitle,style:2===t?{color:"#e53935"}:{},children:[Object(s.jsx)(p.a,{className:2!==t&&"material-icons-outlined",children:"analytics"}),Object(s.jsx)("span",{className:e.tabTitleLabel,children:"Report"})]})}];t.default=function(){var e=k(),t=Object(l.a)(),a=Object(o.useState)(null),i=Object(n.a)(a,2),c=i[0],u=i[1],g=Object(o.useState)(0),O=Object(n.a)(g,2),C=O[0],T=O[1],I=!!c,W=I?"notifications":void 0;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j.a,{title:"Notifications",children:Object(s.jsx)(d.a,{"aria-describedby":W,variant:"contained",onClick:e=>{u(e.currentTarget)},children:Object(s.jsx)(m.a,{badgeContent:4,color:"error",children:Object(s.jsx)(p.a,{className:"material-icons-outlined",children:"notifications"})})})}),Object(s.jsx)(b.a,{id:W,open:I,anchorEl:c,onClose:()=>{u(null),T(0)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(s.jsxs)("div",{className:e.notifications,children:[Object(s.jsx)(x.a,{value:C,onChange:(e,t)=>{T(t)},variant:"fullWidth",scrollButtons:!1,"aria-label":"Timeline and Messages",children:N({classes:e,value:C}).map((e=>Object(s.jsx)(h.a,Object(r.a)({},e))))}),Object(s.jsxs)(f.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:C,onChangeIndex:e=>{T(e)},children:[Object(s.jsx)(S,{value:C,index:0,dir:t.direction,children:Object(s.jsx)(y.default,{})}),Object(s.jsx)(S,{value:C,index:1,dir:t.direction,children:Object(s.jsx)(v.default,{})}),Object(s.jsx)(S,{value:C,index:2,dir:t.direction,children:Object(s.jsx)(w.default,{})})]})]})})]})}},170:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(1),i=a(46),s=a(186),o=a(59),c=a(673),l=a(113),d=a(69),p=a(112),j=a(23),m=a(15),b=Object(i.a)((e=>({root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"}})));function u(){var e=b();return Object(n.jsxs)(s.a,{className:e.root,"aria-labelledby":"notitifications-title",subheader:Object(n.jsx)(c.a,{component:"div",id:"notitifications-title",children:"Messages"}),children:[Object(n.jsxs)(o.a,{alignItems:"flex-start",children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(j.a,{alt:"Remy Sharp",src:"https://next--material-ui.netlify.app/static/images/avatar/1.jpg"})}),Object(n.jsx)(d.a,{primary:"Brunch this weekend?",secondary:Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(m.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:"Ali Connors"})," \u2014 I'll be in your neighborhood doing errands this\u2026"]})})]}),Object(n.jsx)(l.a,{variant:"inset",component:"li"}),Object(n.jsxs)(o.a,{alignItems:"flex-start",children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(j.a,{alt:"Travis Howard",src:"https://next--material-ui.netlify.app/static/images/avatar/2.jpg"})}),Object(n.jsx)(d.a,{primary:"Summer BBQ",secondary:Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(m.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:"to Scott, Alex, Jennifer"})," \u2014 Wish I could come, but I'm out of town this\u2026"]})})]}),Object(n.jsx)(l.a,{variant:"inset",component:"li"}),Object(n.jsxs)(o.a,{alignItems:"flex-start",children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(j.a,{alt:"Cindy Baker",src:"https://next--material-ui.netlify.app/static/images/avatar/3.jpg"})}),Object(n.jsx)(d.a,{primary:"Oui Oui",secondary:Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(m.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:"Sandra Adams"})," \u2014 Do you have Paris recommendations? Have you ever\u2026"]})})]}),Object(n.jsx)(l.a,{variant:"inset",component:"li"}),Object(n.jsxs)(o.a,{alignItems:"flex-start",children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(j.a,{alt:"Remy Sharp",src:"https://next--material-ui.netlify.app/static/images/avatar/1.jpg"})}),Object(n.jsx)(d.a,{primary:"Brunch this weekend?",secondary:Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(m.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:"Ali Connors"})," \u2014 I'll be in your neighborhood doing errands this\u2026"]})})]}),Object(n.jsx)(l.a,{variant:"inset",component:"li"}),Object(n.jsxs)(o.a,{alignItems:"flex-start",children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(j.a,{alt:"Travis Howard",src:"https://next--material-ui.netlify.app/static/images/avatar/2.jpg"})}),Object(n.jsx)(d.a,{primary:"Summer BBQ",secondary:Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(m.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:"to Scott, Alex, Jennifer"})," \u2014 Wish I could come, but I'm out of town this\u2026"]})})]}),Object(n.jsx)(l.a,{variant:"inset",component:"li"}),Object(n.jsxs)(o.a,{alignItems:"flex-start",children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(j.a,{alt:"Cindy Baker",src:"https://next--material-ui.netlify.app/static/images/avatar/3.jpg"})}),Object(n.jsx)(d.a,{primary:"Oui Oui",secondary:Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(m.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:"Sandra Adams"})," \u2014 Do you have Paris recommendations? Have you ever\u2026"]})})]})]})}},171:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(3),r=(a(1),a(46)),i=a(674),s=a(132),o=a(134),c=a(188),l=a(136),d=a(133),p=a(135),j=a(15),m=a(23),b=a(402),u=Object(r.a)((()=>({oppositeContent:{flex:.2},heading:{fontWeight:"bolder",marginBottom:"5px"},avatarGroup:{alignItems:"center",justifyContent:"flex-end",marginTop:"5px"}})));function x(){var e=u();return Object(n.jsxs)(i.a,{children:[Object(n.jsxs)(s.a,{children:[Object(n.jsx)(d.a,{className:e.oppositeContent,align:"right",variant:"body2",color:"textSecondary",children:"11:20 am"}),Object(n.jsxs)(o.a,{children:[Object(n.jsx)(p.a,{variant:"outlined"}),Object(n.jsx)(c.a,{})]}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a,{variant:"h5",component:"h1",className:e.heading,children:"India Wins World Cup"}),Object(n.jsx)(j.a,{children:"Dhoni's Heroic wins india world cup."})]})]}),Object(n.jsxs)(s.a,{children:[Object(n.jsx)(d.a,{className:e.oppositeContent,align:"right",variant:"body2",color:"textSecondary",children:"12:59 pm"}),Object(n.jsxs)(o.a,{children:[Object(n.jsx)(p.a,{variant:"outlined"}),Object(n.jsx)(c.a,{})]}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a,{variant:"h5",component:"h1",className:e.heading,children:"Election 2020"}),Object(n.jsx)(j.a,{children:"U.S.A to vote for elections today."}),Object(n.jsxs)(b.a,{max:4,className:e.avatarGroup,children:[Object(n.jsx)(m.a,{alt:"Remy Sharp",src:"https://next--material-ui.netlify.app/static/images/avatar/1.jpg"}),Object(n.jsx)(m.a,{alt:"Travis Howard",src:"https://next--material-ui.netlify.app/static/images/avatar/2.jpg"}),Object(n.jsx)(m.a,{alt:"Cindy Baker",src:"https://next--material-ui.netlify.app/static/images/avatar/3.jpg"}),Object(n.jsx)(m.a,{alt:"Agnes Walker",src:"https://next--material-ui.netlify.app/static/images/avatar/4.jpg"}),Object(n.jsx)(m.a,{alt:"Trevor Henderson",src:"https://next--material-ui.netlify.app/static/images/avatar/5.jpg"})]})]})]}),Object(n.jsxs)(s.a,{children:[Object(n.jsx)(d.a,{className:e.oppositeContent,align:"right",variant:"body2",color:"textSecondary",children:"13:40 pm"}),Object(n.jsxs)(o.a,{children:[Object(n.jsx)(p.a,{variant:"outlined"}),Object(n.jsx)(c.a,{})]}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a,{variant:"h5",component:"h1",className:e.heading,children:"Code"}),Object(n.jsx)(j.a,{children:"Because it's awesome!"})]})]}),Object(n.jsxs)(s.a,{children:[Object(n.jsx)(d.a,{className:e.oppositeContent,align:"right",variant:"body2",color:"textSecondary",children:"11:20 am"}),Object(n.jsxs)(o.a,{children:[Object(n.jsx)(p.a,{variant:"outlined"}),Object(n.jsx)(c.a,{})]}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a,{variant:"h5",component:"h1",className:e.heading,children:"India Wins World Cup"}),Object(n.jsx)(j.a,{children:"Dhoni's Heroic wins india world cup."})]})]}),Object(n.jsxs)(s.a,{children:[Object(n.jsx)(d.a,{className:e.oppositeContent,align:"right",variant:"body2",color:"textSecondary",children:"12:59 pm"}),Object(n.jsx)(o.a,{children:Object(n.jsx)(p.a,{variant:"outlined"})}),Object(n.jsxs)(l.a,{children:[Object(n.jsx)(j.a,{variant:"h5",component:"h1",className:e.heading,children:"Election 2020"}),Object(n.jsx)(j.a,{children:"U.S.A to vote for elections today."}),Object(n.jsxs)(b.a,{max:4,className:e.avatarGroup,children:[Object(n.jsx)(m.a,{alt:"Remy Sharp",src:"https://next--material-ui.netlify.app/static/images/avatar/1.jpg"}),Object(n.jsx)(m.a,{alt:"Travis Howard",src:"https://next--material-ui.netlify.app/static/images/avatar/2.jpg"}),Object(n.jsx)(m.a,{alt:"Cindy Baker",src:"https://next--material-ui.netlify.app/static/images/avatar/3.jpg"}),Object(n.jsx)(m.a,{alt:"Agnes Walker",src:"https://next--material-ui.netlify.app/static/images/avatar/4.jpg"}),Object(n.jsx)(m.a,{alt:"Trevor Henderson",src:"https://next--material-ui.netlify.app/static/images/avatar/5.jpg"})]})]})]})]})}},172:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a(1),a(46)),i=a(58),s=Object(r.a)((e=>({root:{height:"400px",padding:"32px 0"}}))),o=[{name:"India",uv:4e3,pv:2400,amt:2400},{name:"U.S.A",uv:3e3,pv:1398,amt:2210},{name:"Nepal",uv:2780,pv:3908,amt:2e3},{name:"U.K",uv:1890,pv:4800,amt:2181},{name:"France",uv:2390,pv:3800,amt:2500},{name:"Spain",uv:3490,pv:4300,amt:2100}];t.default=function(){var e=s();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(i.f,{children:Object(n.jsxs)(i.e,{data:o,margin:{top:5,right:30,left:20,bottom:5},children:[Object(n.jsx)(i.h,{dataKey:"name"}),Object(n.jsx)(i.i,{}),Object(n.jsx)(i.g,{}),Object(n.jsx)(i.c,{}),Object(n.jsx)(i.d,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),Object(n.jsx)(i.d,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]})})})}},195:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a(1),a(409)),i=a(15),s=a(46),o=a(253),c=Object(s.a)({img:{height:"100%",width:"100%"},container:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},title:{paddingTop:"15px"}});t.default=function(){var e=c();return Object(n.jsxs)(r.a,{padding:3,className:e.container,children:[Object(n.jsx)("img",{src:o.default,className:e.img}),Object(n.jsx)(i.a,{variant:"h2",className:e.title,gutterBottom:!0,children:"Under Progress"})]})}},252:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/logo.809d18ca.svg"},253:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/under-construction.ea6db4b6.svg"},254:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/background.73f0635a.svg"},27:function(e,t,a){"use strict";a.r(t);var n=a(20),r="#FFFFFF";t.default={black:"#000000",white:r,primary:{contrastText:r,dark:n.a.teal[900],main:n.a.teal[800],light:n.a.teal[600]},secondary:{contrastText:r,dark:"#d32f2f",main:"#d32f2f",light:"#d32f2f"},success:{contrastText:r,dark:n.a.green[900],main:n.a.green[600],light:n.a.green[400]},info:{contrastText:r,dark:n.a.blue[900],main:n.a.blue[600],light:n.a.blue[400]},warning:{contrastText:r,dark:n.a.orange[900],main:n.a.orange[600],light:n.a.orange[400]},error:{contrastText:r,dark:n.a.red[900],main:n.a.red[600],light:n.a.red[400]},text:{primary:n.a.blueGrey[800],secondary:n.a.blueGrey[600],link:n.a.blue[600],disabled:n.a.blueGrey[300]},background:{default:"#F4F6F8",paper:r},icon:n.a.blueGrey[600],divider:n.a.grey[200]}},383:function(e,t,a){},661:function(e,t,a){var n={".":[115,9],"./":[115,9],"./App":[167,9],"./App.js":[167,9],"./assets/svgs/404.svg":[696,9,22],"./assets/svgs/background.svg":[254,9],"./assets/svgs/logo.svg":[252,9],"./assets/svgs/under-construction.svg":[253,9],"./components/breadcrumbs":[91,9],"./components/breadcrumbs/":[91,9],"./components/breadcrumbs/index":[91,9],"./components/breadcrumbs/index.js":[91,9],"./components/breadcrumbs/package":[414,3,10],"./components/breadcrumbs/package.json":[414,3,10],"./components/drawer":[90,9],"./components/drawer/":[90,9],"./components/drawer/drawer":[168,9],"./components/drawer/drawer.jsx":[168,9],"./components/drawer/index":[90,9],"./components/drawer/index.js":[90,9],"./components/drawer/package":[415,3,11],"./components/drawer/package.json":[415,3,11],"./components/grid":[196,7,4],"./components/grid/":[196,7,4],"./components/grid/grid":[416,9,7],"./components/grid/grid.jsx":[416,9,7],"./components/grid/index":[196,7,4],"./components/grid/index.js":[196,7,4],"./components/grid/package":[417,3,12],"./components/grid/package.json":[417,3,12],"./components/loader/loader":[166,9],"./components/loader/loader.js":[166,9],"./components/loader/package":[418,3,13],"./components/loader/package.json":[418,3,13],"./components/loader/top-progress":[150,9],"./components/loader/top-progress.jsx":[150,9],"./components/notifications":[92,9],"./components/notifications/":[92,9],"./components/notifications/index":[92,9],"./components/notifications/index.js":[92,9],"./components/notifications/messages":[170,9],"./components/notifications/messages.jsx":[170,9],"./components/notifications/notifications":[169,9],"./components/notifications/notifications.jsx":[169,9],"./components/notifications/package":[419,3,14],"./components/notifications/package.json":[419,3,14],"./components/notifications/report":[172,9],"./components/notifications/report.jsx":[172,9],"./components/notifications/timeline":[171,9],"./components/notifications/timeline.jsx":[171,9],"./components/progress":[89,9],"./components/progress/":[89,9],"./components/progress/index":[89,9],"./components/progress/index.js":[89,9],"./components/progress/package":[420,3,15],"./components/progress/package.json":[420,3,15],"./components/progress/top":[151,9],"./components/progress/top.jsx":[151,9],"./components/tabs":[197,9,3],"./components/tabs/":[197,9,3],"./components/tabs/index":[197,9,3],"./components/tabs/index.js":[197,9,3],"./components/tabs/package":[421,3,16],"./components/tabs/package.json":[421,3,16],"./components/tabs/tabs":[413,9,9],"./components/tabs/tabs.jsx":[413,9,9],"./components/user-menu":[93,9],"./components/user-menu/":[93,9],"./components/user-menu/index":[93,9],"./components/user-menu/index.js":[93,9],"./components/user-menu/package":[422,3,17],"./components/user-menu/package.json":[422,3,17],"./index":[115,9],"./index.js":[115,9],"./pages/404":[423,9,8],"./pages/404.jsx":[423,9,8],"./pages/under-progress":[195,9],"./pages/under-progress.jsx":[195,9],"./router":[165,9],"./router.js":[165,9],"./routes.config":[127,3],"./routes.config.json":[127,3],"./routes/cards":[198,9,0],"./routes/cards/":[198,9,0],"./routes/cards/index":[198,9,0],"./routes/cards/index.js":[198,9,0],"./routes/dashboard":[199,9,1,2],"./routes/dashboard/":[199,9,1,2],"./routes/dashboard/index":[199,9,1,2],"./routes/dashboard/index.js":[199,9,1,2],"./routes/login":[126,9],"./routes/login/":[126,9],"./routes/login/index":[126,9],"./routes/login/index.js":[126,9],"./routes/tabs":[200,9,5],"./routes/tabs/":[200,9,5],"./routes/tabs/index":[200,9,5],"./routes/tabs/index.js":[200,9,5],"./styles.css":[383,7],"./theme":[88,9],"./theme/":[88,9],"./theme/index":[88,9],"./theme/index.js":[88,9],"./theme/palette":[27,9],"./theme/palette.js":[27,9],"./theme/typography":[164,9],"./theme/typography.js":[164,9],"./views/SectionHeading/SectionHeading":[412,9,6],"./views/SectionHeading/SectionHeading.css":[695,7,21],"./views/SectionHeading/SectionHeading.js":[412,9,6]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(2).map(a.e)).then((function(){return a.t(r,t[1])}))}r.keys=function(){return Object.keys(n)},r.id=661,e.exports=r},88:function(e,t,a){"use strict";a.r(t);var n=a(260),r=a(27),i=a(164),s=Object(n.a)({palette:r.default,typography:i.default});t.default=s},89:function(e,t,a){"use strict";a.r(t);var n=a(151);a.d(t,"Top",(function(){return n.default}))},90:function(e,t,a){"use strict";a.r(t);var n=a(168);t.default=n.default},91:function(e,t,a){"use strict";a.r(t);var n=a(3),r=(a(1),a(23)),i=a(47),s=a(15),o=a(692),c=a(46),l=a(75),d=a(672),p=a(18),j=Object(c.a)((e=>({root:{display:"flex",alignItems:"center",justifyContent:"center"},avatar:{backgroundColor:"rgba(67, 160, 71, 0.1)",height:"48px",width:"48px"},icon:{color:e.palette.primary.main},breadcrumbs:{paddingLeft:"10px"}}))),m=(e=[],t)=>{var a=[];return e.forEach((e=>{if(e.route===t)return a.push(e),!0;if(Array.isArray(e.children)){var n=m(e.children,t);if(n.length)return a=[...a,e,...n],!0}})),a};t.default=Object(p.g)((function({location:e,routes:t}){var a=j(),c=m(t,e.pathname);return Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(r.a,{className:a.avatar,children:Object(n.jsx)(i.a,{className:a.icon,children:"".concat((c[0]||{}).icon)})}),Object(n.jsx)(o.a,{separator:Object(n.jsx)(i.a,{children:"navigate_next"}),className:a.breadcrumbs,"aria-label":"breadcrumb",children:c.map((({title:e,route:t},a)=>Object(n.jsx)(d.a,{color:"inherit",component:l.b,to:t,children:Object(n.jsx)(s.a,{color:"textPrimary",children:e})},a)))})]})}))},92:function(e,t,a){"use strict";a.r(t);var n=a(169);t.default=n.default},93:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a(25),i=a(3),s=a(1),o=a(23),c=a(262),l=a(189),d=a(15),p=a(403),j=a(187),m=a(675),b=a(190),u=a(405),x=a(113),h=a(677),g=a(6),f=a(46),O=Object(g.a)((e=>({badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}})))(l.a),v=Object(f.a)((e=>({user:{marginRight:e.spacing(2),textTransform:"initial",fontWeight:700,textAlign:"left"},userBtn:{margin:"0 0.5rem",borderRadius:"1000px",paddingLeft:"1.5rem"},menu:{width:"250px"},popper:{zIndex:1},userMenu:{display:"flex",alignItems:"flex-start",flexDirection:"column"}})));t.default=function(){var e=v(),t=Object(s.useState)(!1),a=Object(r.a)(t,2),l=a[0],g=a[1],f=Object(s.useRef)(null),y=e=>{f.current&&f.current.contains(e.target)||g(!1)};function w(e){"Tab"===e.key&&(e.preventDefault(),g(!1))}var S=Object(s.useRef)(l);return Object(s.useEffect)((()=>{!0===S.current&&!1===l&&f.current.focus(),S.current=l}),[l]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(c.a,{className:e.userBtn,ref:f,"aria-controls":l?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:()=>{g((e=>!e))},children:[Object(i.jsxs)(d.a,{variant:"h5",noWrap:!0,color:"primary",className:e.user,children:["Shubham K",Object(i.jsx)(d.a,{color:"textSecondary",variant:"body2",gutterBottom:!0,children:"UI Developer"})]}),Object(i.jsx)(O,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:Object(i.jsx)(o.a,{alt:"logo",src:"https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1578063880"})})]}),Object(i.jsx)(m.a,{open:l,anchorEl:f.current,role:void 0,transition:!0,disablePortal:!0,className:e.popper,children:({TransitionProps:t,placement:a})=>Object(i.jsx)(p.a,Object(n.a)(Object(n.a)({},t),{},{style:{transformOrigin:"bottom"===a?"center top":"center bottom"},children:Object(i.jsx)(j.a,{children:Object(i.jsx)(h.a,{onClickAway:y,children:Object(i.jsxs)(u.a,{className:e.menu,autoFocusItem:l,id:"menu-list-grow",onKeyDown:w,children:[Object(i.jsxs)(b.a,{onClick:y,className:e.userMenu,children:[Object(i.jsx)(d.a,{noWrap:!0,children:"Signed in as"}),Object(i.jsx)(d.a,{noWrap:!0,children:Object(i.jsx)("b",{children:"shubhamkul@gmail.com"})})]}),Object(i.jsx)(x.a,{}),Object(i.jsx)(b.a,{onClick:y,children:"Account Settings"}),Object(i.jsx)(b.a,{onClick:y,children:"Support"}),Object(i.jsx)(b.a,{onClick:y,children:"Sign out"})]})})})}))})]})}}},[[115,19,20]]]);
//# sourceMappingURL=main.bc8ad237.chunk.js.map