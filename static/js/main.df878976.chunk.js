(this.webpackJsonpalexdev0ver=this.webpackJsonpalexdev0ver||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),o=n.n(c),i=n(16),a=n.n(i),l=n(37),r=n(4),d=n(3),h=n(13),j=n(14),b=n(18),x=n(17),m=function(e){Object(b.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={aboutHover:!1,portfolioHover:!1,hobbiesHover:!1},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"d-flex flex-column align-items-center",style:{marginTop:"20vh"},children:[Object(s.jsx)("div",{className:"d-flex align-items-center ".concat(this.state.hobbiesHover?"border-top rounded-circle border-info":""),style:this.state.hobbiesHover?{marginTop:"-1px",zIndex:1080}:{zIndex:1080},children:Object(s.jsx)("img",{style:{minWidth:"20vh",minHeight:"20vh"},src:"img/avatar.png",alt:"avatar"})}),Object(s.jsx)("div",{className:"d-flex flex-column align-items-center border-bottom w-100",style:{zIndex:1080},children:Object(s.jsx)("h1",{className:"".concat(this.state.aboutHover?"text-success":"text-light"),style:{fontSize:"5vh"},children:"Alex Dan"})}),Object(s.jsx)("div",{className:"d-flex flex-column align-items-center",style:{zIndex:1080},children:Object(s.jsx)("h1",{className:"".concat(this.state.portfolioHover?"text-warning":"text-light"," text-center"),style:{fontSize:"5vh"},children:"JavaScript developer"})}),Object(s.jsx)("div",{className:"text-dark",style:{zIndex:1080},children:Object(s.jsxs)("ul",{className:"d-flex justify-content-center p-3",style:{listStyle:"none",cursor:"pointer",fontSize:"2vh"},children:[Object(s.jsx)("li",{onMouseEnter:function(){return e.setState({aboutHover:!0})},onMouseLeave:function(){return e.setState({aboutHover:!1})},className:"".concat(this.state.aboutHover?"bg-success":""," px-2"),children:Object(s.jsx)(r.b,{to:"/about",className:"text-decoration-none text-dark",children:"About Me"})}),Object(s.jsx)("li",{onMouseEnter:function(){return e.setState({portfolioHover:!0})},onMouseLeave:function(){return e.setState({portfolioHover:!1})},className:"".concat(this.state.portfolioHover?"bg-warning":""," px-2"),children:Object(s.jsx)(r.b,{to:"/portfolio",className:"text-decoration-none text-dark",children:"Portfolio"})}),Object(s.jsx)("li",{onMouseEnter:function(){return e.setState({hobbiesHover:!0})},onMouseLeave:function(){return e.setState({hobbiesHover:!1})},className:"".concat(this.state.hobbiesHover?"bg-info":""," px-2"),children:Object(s.jsx)(r.b,{to:"/hobbies",className:"text-decoration-none text-dark",children:"Hobbies"})})]})}),Object(s.jsx)("video",{loop:!0,muted:!0,autoPlay:!0,style:{position:"fixed",left:0,bottom:"".concat(window.innerHeight<650?"-30%":"0"),minHeight:"100%",minWidth:"100%",zIndex:1030},children:Object(s.jsx)("source",{src:"video/background.mp4",type:"video/mp4"})})]})})}}]),n}(c.Component),u=n(19),f=n.n(u),v=new(function(){function e(){Object(h.a)(this,e),f.a.defaults.baseURL="https://alexdev0ver-api.herokuapp.com"}return Object(j.a)(e,[{key:"getQuestions",value:function(){return f.a.get("/questions").then((function(e){return e.data}))}},{key:"askQuestion",value:function(e){return f.a.post("/questions",{question:e}).then((function(e){return e.data.message}))}}]),e}()),p=n(9),O=function(e){var t=e.component,n=void 0===t?"":t,o=Object(c.useState)(!1),i=Object(p.a)(o,2),a=i[0],l=i[1],d=Object(c.useState)(!1),h=Object(p.a)(d,2),j=h[0],b=h[1],x=Object(c.useState)(!1),m=Object(p.a)(x,2),u=m[0],f=m[1],v=Object(c.useState)(!1),O=Object(p.a)(v,2),g=O[0],y=O[1],w=Object(c.useState)(!1),N=Object(p.a)(w,2),S=N[0],k=N[1],M={backgroundColor:"#000000",opacity:"0.6",position:"fixed",top:"0",left:"0",width:"".concat(a?"200px":"50px"),height:"100vh",transition:"0.6s"};return Object(s.jsxs)("div",{id:"sidebar",className:"d-none d-sm-flex flex-column justify-content-evenly align-items-center",style:M,children:[Object(s.jsx)("button",{className:"position-absolute top-0 left-0 w-100 btn btn-dark text-center",style:{backgroundColor:"#000",opacity:"0.6",border:"none",outline:"none"},onClick:function(e){e.currentTarget.blur(),l(!a)},children:"\u2630"}),Object(s.jsx)(r.b,{className:"".concat(a?"":"d-none"," w-100 text-center text-light fw-bolder"),to:"/",style:{textDecoration:"none",borderBottom:"".concat(j?"2px solid #fff":"none"),marginBottom:"".concat(j?"-2px":"0")},onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},children:"Overview"}),Object(s.jsx)(r.b,{className:"".concat(a?"":"d-none"," w-100 text-center text-light fw-bolder ").concat("about"===n?"d-none":""),to:"/about",style:{textDecoration:"none",borderBottom:"".concat(u?"2px solid #fff":"none"),marginBottom:"".concat(u?"-2px":"0")},onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:"About Me"}),Object(s.jsx)(r.b,{className:"".concat(a?"":"d-none"," w-100 text-center text-light fw-bolder ").concat("portfolio"===n?"d-none":""),to:"/portfolio",style:{textDecoration:"none",borderBottom:"".concat(g?"2px solid #fff":"none"),marginBottom:"".concat(g?"-2px":"0")},onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)},children:"Portfolio"}),Object(s.jsx)(r.b,{className:"".concat(a?"":"d-none"," w-100 text-center text-light fw-bolder ").concat("hobbies"===n?"d-none":""),to:"/hobbies",style:{textDecoration:"none",borderBottom:"".concat(S?"2px solid #fff":"none"),marginBottom:"".concat(S?"-2px":"0")},onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)},children:"Hobbies"})]})},g=(n(70),function(e){Object(b.a)(n,e);var t=Object(x.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).state={questions:[],ask:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;v.getQuestions().then((function(t){return e.setState({questions:t})}))}},{key:"sendData",value:function(){""!==this.state.ask?v.askQuestion(this.state.ask).then((function(e){return alert(e)})):alert("You should type your question first")}},{key:"render",value:function(){var e=this;return this.state.questions.length?Object(s.jsxs)("div",{className:"container-fluid overflow-hidden d-flex flex-column justify-content-center aboutContainer",children:[Object(s.jsx)("div",{className:"vertical-line d-none d-sm-block"}),Object(s.jsx)("div",{className:"horizontal-line d-none d-sm-block"}),Object(s.jsx)("h1",{className:"text-center mb-4 pt-5",style:{marginLeft:"-15px",color:"#2ca93e",fontSize:"6vh"},children:"About Me"}),Object(s.jsxs)("div",{className:"scrollbarStyle questionContainer overflow-auto container-fluid col-12 col-md-8 col-xl-5 col-xxl-5",children:[this.state.questions.map((function(e){return Object(s.jsxs)("div",{className:"mx-1 my-3 row",style:{color:"#463f3e"},children:[Object(s.jsx)("h5",{className:"fst-italic text-md-end",style:{borderBottom:"1px solid #32E14C",fontSize:"2.8vh"},children:e.question}),Object(s.jsx)("div",{style:{fontSize:"2.5vh"},children:e.answer})]},"".concat(100*Math.random(),"-questions"))})),Object(s.jsxs)("div",{className:"mx-1 my-3 row",children:[Object(s.jsx)("h5",{style:{fontSize:"2.5vh"},className:"fst-italic text-md-end",children:"Send you're question"}),Object(s.jsx)("textarea",{onChange:function(t){return e.setState({ask:t.target.value})},className:"textareaStyle",style:{fontSize:"2.8vh"},placeholder:"How are you, Alex?"}),Object(s.jsx)("button",{onClick:function(){return e.sendData()},className:"btn btn-outline-dark w-25 mx-auto my-4",children:"Send"})]})]}),Object(s.jsx)(O,{component:"about"}),Object(s.jsx)(r.b,{to:"/",className:"d-md-none d-xs-flex mt-4 justify-content-center align-self-center",style:{textDecoration:"none",color:"#2c3033"},children:"Back"})]}):Object(s.jsxs)("div",{className:"container-fluid overflow-hidden d-flex flex-column justify-content-center aboutContainer",children:[Object(s.jsx)("div",{className:"vertical-line d-none d-sm-block"}),Object(s.jsx)("div",{className:"horizontal-line d-none d-sm-block"}),Object(s.jsx)("h1",{className:"text-center mb-4 pt-5",style:{marginLeft:"-15px",color:"#2ca93e",fontSize:"6vh"},children:"About Me"}),Object(s.jsx)("div",{className:"text-center scrollbarStyle questionContainer overflow-auto container-fluid col-12 col-md-8 col-xl-5 col-xxl-5",children:"data processing..."}),Object(s.jsx)(O,{component:"about"}),Object(s.jsx)(r.b,{to:"/",className:"d-md-none d-xs-flex mt-4 justify-content-center align-self-center",style:{textDecoration:"none",color:"#2c3033"},children:"Back"})]})}}]),n}(c.Component)),y=function(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(!1),a=Object(p.a)(i,2),l=a[0],r=a[1],d={opacity:0,transition:"1.5s",position:"absolute",pointerEvents:"none"},h={opacity:1,transition:"1s"},j={color:"#eee",fontSize:"2.3vh",height:"100vh",background:"no-repeat url(/img/park.jpg)",backgroundSize:"cover",backgroundColor:n?"#faff00":"#23272B",backgroundBlendMode:n?"darken":l?"hard-light":"normal"};return Object(s.jsxs)("div",{className:"d-flex align-items-center overflow-hidden",style:j,children:[Object(s.jsxs)("div",{className:"".concat(n?"w-75":l?"w-25":"w-50"," h-100 d-flex flex-column align-items-center justify-content-center px-4 border-end"),onClick:function(){l?(r(!1),o(!n)):o(!n)},style:{transition:"1s"},children:[Object(s.jsx)("h5",{style:n?d:h,children:Object(s.jsx)("a",{style:{textDecoration:"none",color:"#0dcaf0",fontSize:"3vh"},href:"https://github.com/AlexDev0ver/alexdev0ver.github.io",children:"Github"})}),Object(s.jsx)("div",{style:n||l?d:h,children:Object(s.jsx)("span",{children:"Single page application based on React+Typescript"})}),Object(s.jsxs)("div",{className:"d-flex flex-column align-items-center",style:n?h:d,children:[Object(s.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(s.jsx)("a",{style:{textDecoration:"none",color:"#0dcaf0",fontSize:"3vh"},href:"https://github.com/AlexDev0ver/alexdev0ver.github.io",children:Object(s.jsx)("span",{children:"Frontend:"})}),Object(s.jsxs)("ul",{className:"d-flex my-4 align-items-baseline flex-wrap",style:{listStyle:"none"},children:[Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/html-icon.svg",alt:"HTML"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/css-icon.svg",alt:"CSS"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"12vh",height:"12vh"},src:"/img/react-icon.svg",alt:"ReactJS"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/javascript-icon.svg",alt:"Javascript"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/typescript-icon.svg",alt:"Typescript"})})]})]}),Object(s.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(s.jsx)("a",{style:{textDecoration:"none",color:"#0dcaf0",fontSize:"3vh"},href:"https://github.com/AlexDev0ver/alexdev0verAPI",children:Object(s.jsx)("span",{children:"Backend:"})}),Object(s.jsxs)("ul",{className:"d-flex my-4 align-items-baseline flex-wrap",style:{listStyle:"none"},children:[Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/nodejs-icon.svg",alt:"NodeJS"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"12vh",height:"12vh"},src:"/img/mongodb.svg",alt:"MongoDB"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/heroku-icon.svg",alt:"Heroku"})})]})]})]})]}),Object(s.jsxs)("div",{className:"".concat(l?"w-75":n?"w-25":"w-50"," h-100 d-flex flex-column align-items-center justify-content-center px-4"),onClick:function(){n?(o(!1),r(!l)):r(!l)},style:{transition:"1s"},children:[Object(s.jsx)("h5",{className:"my-2",style:{color:"#0dcaf0",fontSize:"3vh"},children:"alexdev0ver.io"}),Object(s.jsx)("div",{style:n||l?d:h,children:Object(s.jsx)("span",{children:"Here suppose to be a link on live mode, but you already here."})}),Object(s.jsxs)("div",{className:"d-flex flex-column align-items-center",style:l?h:d,children:[Object(s.jsx)("span",{children:"I've tried to create this project following the next purposes:"}),Object(s.jsxs)("ul",{className:"d-flex flex-column align-items-baseline my-2",style:{listStyle:"none"},children:[Object(s.jsx)("li",{className:"my-1 w-100",children:"Provide answers to popular questions that are often asked in interviews."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Take feedback from people, who want to share it. For more convenience, I made it anonymous. Take a shot!"}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Try new technologies. But about that on the other side section."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Create a different design for each page."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"To introduce you and create a complete impression about me then just show code."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Combine it all in one source, make it extensible and easily modifiable."})]})]})]})]})},w=function(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(!1),a=Object(p.a)(i,2),l=a[0],r=a[1],d={opacity:0,transition:"1.5s",position:"absolute",pointerEvents:"none"},h={opacity:1,transition:"1s"},j={color:l?"#23272B":"gray",fontSize:"2.3vh",height:"100vh",background:"no-repeat url(/img/leadelyPC.png)",backgroundSize:"cover",backgroundColor:n?"#b5b5b5":"#e3e3e3",backgroundBlendMode:n?"darken":l?"lighten":"normal"};return Object(s.jsxs)("div",{className:"d-flex w-100 align-items-center overflow-hidden",style:j,children:[Object(s.jsxs)("div",{className:"".concat(n?"w-75":l?"w-25":"w-50"," h-100 d-flex flex-column align-items-center justify-content-center px-4 border-end"),onClick:function(){l?(r(!1),o(!n)):o(!n)},style:{transition:"1s"},children:[Object(s.jsx)("h5",{style:n?d:h,children:Object(s.jsx)("span",{style:{textDecoration:"none",color:"#000",fontSize:"3vh"},children:"Github not available"})}),Object(s.jsx)("div",{style:n||l?d:h,children:Object(s.jsx)("span",{children:"Personal planning application based on React-Redux"})}),Object(s.jsx)("div",{className:"d-flex flex-column align-items-center overflow-hidden",style:n?h:d,children:Object(s.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(s.jsx)("div",{style:{color:"#000",fontSize:"3vh",borderBottom:"3px solid #000"},children:Object(s.jsx)("span",{children:"Frontend:"})}),Object(s.jsxs)("ul",{className:"d-flex my-4 align-items-baseline flex-wrap",style:{listStyle:"none"},children:[Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/html-icon.svg",alt:"HTML"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/css-icon.svg",alt:"CSS"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"12vh",height:"12vh"},src:"/img/react-icon.svg",alt:"ReactJS"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/javascript-icon.svg",alt:"Javascript"})}),Object(s.jsx)("li",{className:"px-2",children:Object(s.jsx)("img",{style:{width:"10vh",height:"10vh"},src:"/img/flow.png",alt:"Flow"})})]})]})})]}),Object(s.jsxs)("div",{className:"".concat(l?"w-75":n?"w-25":"w-50"," h-100 d-flex flex-column align-items-center justify-content-center px-4"),onClick:function(){n?(o(!1),r(!l)):r(!l)},style:{transition:"1s"},children:[Object(s.jsx)("a",{style:{textDecoration:"none",color:"#000",fontSize:"3vh"},href:"https://leadely.com",children:"Leadely"}),Object(s.jsx)("div",{style:n||l?d:h,children:Object(s.jsx)("span",{children:"Small startup company"})}),Object(s.jsxs)("div",{className:"d-flex flex-column align-items-center",style:l?h:d,children:[Object(s.jsx)("span",{children:"I've been working aroun half-year as frontend developer at Leadely.com"}),Object(s.jsxs)("ul",{className:"d-flex flex-column align-items-baseline my-2",style:{listStyle:"none"},children:[Object(s.jsx)("li",{className:"my-1 w-100",children:"First what I've done - cover almost all frontend(~95%) by tests from 0. And with new functional I continue do it."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Design and developed Impression functional. By this you can add and track your impression of day. Like happy or angry, etc."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Design and developed Notes functional. With this feature you can do a simple dairy or just mark something important."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Design and developed Sprints functional. Long-period planning feature."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Design and developed Tags functional. Validate your tasks as Important/Urgent/Maybe tags."}),Object(s.jsx)("li",{className:"my-1 w-100",children:"Fix some mobile-screen issues, rewrite old code, improve loading performance."})]})]})]})]})},N=function(){return Object(s.jsxs)("div",{className:"overflow-hidden",children:[Object(s.jsx)(y,{}),Object(s.jsx)(w,{}),Object(s.jsx)(O,{component:"portfolio"})]})},S=function(){return Object(s.jsxs)("div",{className:"d-flex justify-content-center align-items-center overflow-hidden",style:{height:"100vh"},children:[Object(s.jsx)("span",{children:"In development."}),Object(s.jsx)(O,{component:"hobbies"})]})};var k=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(d.d,{children:[Object(s.jsx)(d.b,{exact:!0,path:"/",component:m}),Object(s.jsx)(d.b,{exact:!0,path:"/about",component:g}),Object(s.jsx)(d.b,{exact:!0,path:"/portfolio",component:N}),Object(s.jsx)(d.b,{exact:!0,path:"/hobbies",component:S}),Object(s.jsx)(d.a,{to:"/"})]})})},M=n(11),z=n(36),C=Object.freeze({SELECT_ITEM:"SELECT_ITEM"}),H=Object(M.c)({overview:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.SELECT_ITEM:return t.payload;default:return e}}});var D=Object(M.d)(H,Object(M.a)(z.a));a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(l.a,{store:D,children:Object(s.jsx)(r.a,{children:Object(s.jsx)(k,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.df878976.chunk.js.map