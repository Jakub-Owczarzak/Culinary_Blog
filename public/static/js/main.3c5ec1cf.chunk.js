(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{13:function(e,t,n){e.exports={inputWrapper:"input_inputWrapper__2umN4",label:"input_label__JwPza",input:"input_input__2WsXB",textarea:"input_textarea__eFIBC",textareaLabel:"input_textareaLabel__30V43",social:"input_social__3S49P"}},20:function(e,t,n){e.exports={mainWrapper:"loginform_mainWrapper__FDHJ0",loginHeader:"loginform_loginHeader__1nleS",buttonContainer:"loginform_buttonContainer__2FTLE",signupinfo:"loginform_signupinfo__2rybp"}},21:function(e,t,n){e.exports={mainWrapper:"signupform_mainWrapper__3WAc9",loginHeader:"signupform_loginHeader__2mUZe",pageWrapper:"signupform_pageWrapper__3YhNj",infoButtonWrapper:"signupform_infoButtonWrapper__ocJ3-",infoButtonWrapperNextPage:"signupform_infoButtonWrapperNextPage__1PnsE",step:"signupform_step__337CG"}},22:function(e,t,n){e.exports={mainWrapper:"loginform_mainWrapper__8vUKI",loginHeader:"loginform_loginHeader__3m7eH",buttonContainer:"loginform_buttonContainer__3jEXM",signupinfo:"loginform_signupinfo__1Jt9N"}},23:function(e,t,n){e.exports={mainContainer:"notificationModal_mainContainer__2K4aM",opacity:"notificationModal_opacity__3zxDA",closeButton:"notificationModal_closeButton__3gywf",error:"notificationModal_error__3VQRG"}},26:function(e,t,n){e.exports={button:"button_button__336By",action:"button_action__2pVgg"}},29:function(e,t,n){e.exports={navWrapper:"App_navWrapper__3iUEW",divTitle:"App_divTitle__RWuN_"}},32:function(e,t,n){e.exports={divWrapper:"MenuItem_divWrapper__3guoD",textLink:"MenuItem_textLink__3C9aX"}},34:function(e,t,n){e.exports={Wrapper:"MainView_Wrapper__28q7m"}},35:function(e,t,n){e.exports={screenWrapper:"screenWrapper_screenWrapper__dXGuY"}},36:function(e,t,n){e.exports={error:"errorMessage_error__2zwJU"}},37:function(e,t,n){e.exports={span:"linkitem_span__1QgRJ"}},45:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(24),c=n.n(s),o=(n(45),n(3)),i=n(5),l=n(29),p=n.n(l),u=n(34),j=n.n(u),b=n(0),d=function(){return Object(b.jsx)("div",{children:"RecipeViewer"})},O=function(){return Object(b.jsx)("div",{className:j.a.Wrapper,children:Object(b.jsx)(d,{})})},m=n(35),x=n.n(m),h=function(e){var t=e.children;return Object(b.jsx)("div",{className:x.a.screenWrapper,children:t})},f=n(12),_=n.n(f),g=n(15),v=n(9),y=n(11),w="STORE_USER_DATA",N="REMOVE_USER_DATA ",k="OPEN_PROFILE_MODAL",T="CLOSE_PROFILE_MODAL",W="OPEN_NOTIFICATION_MODAL",C="CLOSE_NOTIFICATION_MODAL",E="FETCHED_ALL_PROJECTS_TO_STATE",S="FETCHED_SINGLE_PROJECT_TO_STATE",z="CLEAN_SINGLE_PROJECT",P=function(e){return{type:w,payload:e}},L=function(e,t){return{type:W,payload:{message:e,error:t}}},M=n(20),H=n.n(M),I=n(13),A=n.n(I),D=n(36),B=n.n(D),R=function(e){var t=e.errorText;return Object(b.jsx)("p",{className:B.a.error,children:t})},J=function(e){var t=e.type,n=e.value,r=e.onChange,s=e.label,c=e.name,o=e.onBlur,i=e.errorType,l=e.placeholder,p=e.textareaHeight;return Object(a.useEffect)((function(){}),[p]),Object(b.jsxs)(b.Fragment,{children:["textarea"===t?Object(b.jsxs)("div",{className:A.a.inputWrapper,children:[Object(b.jsx)("textarea",{className:A.a.textarea,style:{height:"".concat(p+5,"px")},type:t,value:n,placeholder:l,onChange:r,onBlur:o,autoComplete:"off",name:c,required:!0,maxLength:255}),Object(b.jsx)("label",{className:A.a.textareaLabel,children:s})]}):Object(b.jsxs)("div",{className:A.a.inputWrapper,children:[Object(b.jsx)("input",{className:A.a.input,type:t,value:n,placeholder:l,onChange:r,onBlur:o,autoComplete:"off",name:c,required:!0}),Object(b.jsx)("label",{className:A.a.label,children:s})]}),i&&Object(b.jsx)(R,{errorText:i})]})},F=n(26),V=n.n(F),U=function(e){var t=e.title,n=e.onClick,a=e.action;return Object(b.jsx)("button",{className:a?[V.a.button,V.a.action].join(" "):V.a.button,onClick:n,children:t})},Z=n(37),G=n.n(Z),q=function(e){var t=e.text,n=e.onClick;return Object(b.jsx)("span",{className:G.a.span,onClick:n,children:t})},X=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),c=Object(v.a)(s,2),l=c[0],p=c[1],u=Object(a.useState)({}),j=Object(v.a)(u,2),d=j[0],O=j[1],m=Object(i.b)(),x=Object(o.f)(),h=function(){var e=Object(g.a)(_.a.mark((function e(t){var a,r,s,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={},/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(n)||(a.email="Email jest nieprawid\u0142owy"),l.length<6&&(a.password="Has\u0142o jest za kr\xf3tkie."),!(Object.keys(a).length>0)){e.next=9;break}return O(a),e.abrupt("return");case 9:return r={email:n,password:l},e.prev=10,e.next=13,fetch("http://localhost:8080/auth/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)});case 13:return s=e.sent,e.next=16,s.json();case 16:if((c=e.sent).success){e.next=20;break}return m(L(c.message,!0)),e.abrupt("return");case 20:m(P(c.user)),x.push("/home"),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(10),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[10,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:H.a.mainWrapper,children:Object(b.jsxs)("section",{children:[Object(b.jsx)("h3",{className:H.a.loginHeader,children:"Zaloguj si\u0119"}),Object(b.jsx)("p",{children:"B\u0105d\u017a aktywny i tw\xf3rz projekty z innymi."}),Object(b.jsxs)("form",{onSubmit:h,children:[Object(b.jsx)(J,{type:"text",label:"E-mail",value:n,onChange:function(e){return r(e.target.value)},errorType:d.email}),Object(b.jsx)(J,{type:"password",label:"Password",value:l,onChange:function(e){return p(e.target.value)},errorType:d.password}),Object(b.jsx)(y.b,{to:"/requestpassword",children:Object(b.jsx)(q,{text:"Nie pami\u0119tam has\u0142a"})}),Object(b.jsx)("div",{className:H.a.buttonContainer,children:Object(b.jsx)(U,{title:"Zaloguj si\u0119",action:!0})})]}),Object(b.jsxs)("div",{className:H.a.signupinfo,children:[Object(b.jsx)("p",{children:"Nie masz konta na naszej stronie"}),Object(b.jsx)(y.b,{to:"/signup",children:Object(b.jsx)(q,{text:"Do\u0142\u0105cz teraz"})})]})]})})})},K=function(){return Object(b.jsx)(h,{children:Object(b.jsx)(X,{})})},Y=n(32),Q=n.n(Y),$=function(e){var t=e.to,n=e.text;return Object(b.jsx)("div",{className:Q.a.divWrapper,children:Object(b.jsx)(y.b,{className:Q.a.textLink,to:t,children:n})})},ee=n(16),te=n(4),ne=n(21),ae=n.n(ne),re=function(){var e=Object(o.f)(),t=Object(i.b)(),n=Object(a.useState)({name:"",email:"",password:"",confirmPassword:""}),r=Object(v.a)(n,2),s=r[0],c=r[1],l=Object(a.useState)({}),p=Object(v.a)(l,2),u=p[0],j=p[1],d=function(e){c((function(t){return Object(te.a)(Object(te.a)({},t),{},Object(ee.a)({},e.target.name,e.target.value))}))},O=function(){var e={};return s.name.length<2&&(e.name="Imi\u0119 jest za kr\xf3tkie"),/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(s.email)||(e.email="Email jest nieprawid\u0142owy"),s.password.length<6&&(e.password="Has\u0142o jest za kr\xf3tkie."),s.confirmPassword!==s.password&&(e.confirmPassword="Has\u0142a musz\u0105 si\u0119 zgadza\u0107"),j(e),Object.keys(e).length},m=function(){var n=Object(g.a)(_.a.mark((function n(a){var r,c,o;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),O(),{},r={name:s.name,email:s.email,password:s.password},console.log(r),n.prev=5,n.next=8,fetch("http://localhost:8080/auth/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)});case 8:return c=n.sent,n.next=11,c.json();case 11:if(!1!==(o=n.sent).success){n.next=16;break}return console.log("jest w ifce modalnpm"),t(L(o.message,!0)),n.abrupt("return");case 16:t(L("Twoje konto zosta\u0142o utworzone! Link aktywacyjny zosta\u0142 wys\u0142any na Tw\xf3j mail",!1)),e.push("/login"),n.next=23;break;case 20:n.prev=20,n.t0=n.catch(5),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[5,20]])})));return function(e){return n.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:ae.a.mainWrapper,children:[Object(b.jsx)("h3",{className:ae.a.loginHeader,children:"Zarejestruj si\u0119"}),Object(b.jsx)("form",{onSubmit:m,children:Object(b.jsxs)("div",{className:ae.a.pageWrapper,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(J,{type:"text",label:"Imi\u0119",name:"name",onChange:d,value:s.name,errorType:u.name}),Object(b.jsx)(J,{type:"text",label:"E-mail",name:"email",onChange:d,value:s.email,errorType:u.email}),Object(b.jsx)(J,{type:"password",label:"Has\u0142o (min.6 znak\xf3w)",name:"password",onChange:d,value:s.password,errorType:u.password}),Object(b.jsx)(J,{type:"password",label:"Potwierd\u017a has\u0142o",name:"confirmPassword",onChange:d,value:s.confirmPassword,errorType:u.confirmPassword})]}),Object(b.jsx)("div",{className:ae.a.infoButtonWrapper,children:Object(b.jsx)(U,{title:"Zarejestruj si\u0119",action:!0})})]})})]})},se=function(){return Object(b.jsx)(h,{children:Object(b.jsx)(re,{})})},ce=n(22),oe=n.n(ce),ie=function(){var e=Object(i.c)((function(e){return e.user}));console.log(e);var t=Object(a.useState)(""),n=Object(v.a)(t,2),r=(n[0],n[1],Object(a.useState)(null)),s=Object(v.a)(r,2),c=s[0],l=s[1],p=Object(a.useState)({name:"",description:""}),u=Object(v.a)(p,2),j=u[0],d=u[1],O=Object(a.useState)({}),m=Object(v.a)(O,2),x=m[0],h=m[1],f=Object(i.b)(),w=Object(o.f)(),N=function(){var t=Object(g.a)(_.a.mark((function t(n){var a,r,s,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a={},j.name.length<6&&(a.name="Nazwa przepisu jest za kr\xf3tka"),j.description.length<6&&(a.description="Has\u0142o jest za kr\xf3tkie."),!(Object.keys(a).length>0)){t.next=7;break}return h(a),t.abrupt("return");case 7:return r={name:j.name,description:j.description,userId:e.id},t.prev=8,t.next=11,fetch("http://localhost:8080/recipe/create",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(r)});case 11:return s=t.sent,t.next=14,s.json();case 14:if((c=t.sent).success){t.next=18;break}return f(L(c.message,!0)),t.abrupt("return");case 18:w.push("/"),t.next=24;break;case 21:t.prev=21,t.t0=t.catch(8),console.log(t.t0);case 24:case"end":return t.stop()}}),t,null,[[8,21]])})));return function(e){return t.apply(this,arguments)}}(),k=function(e){l(e.target.scrollHeight),console.log(e.target.value),d((function(t){return Object(te.a)(Object(te.a)({},t),{},Object(ee.a)({},e.target.name,e.target.value))}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:oe.a.mainWrapper,children:Object(b.jsxs)("section",{children:[Object(b.jsx)("h3",{className:oe.a.loginHeader,children:"Stw\xf3rz sw\xf3j przepis !"}),Object(b.jsx)("p",{children:"Poka\u017c innym swoje przepyszne dania!"}),Object(b.jsxs)("form",{onSubmit:N,children:[Object(b.jsx)(J,{type:"text",label:"Nazwa przepisu",name:"name",value:j.name,onChange:k,errorType:x.name}),Object(b.jsx)(J,{type:"textarea",label:"Opis projektu",name:"description",onChange:k,value:j.description,errorType:x.description,textareaHeight:c}),Object(b.jsx)("div",{className:oe.a.buttonContainer,children:Object(b.jsx)(U,{title:"Dodaj przepis",action:!0})})]}),Object(b.jsxs)("div",{className:oe.a.signupinfo,children:[Object(b.jsx)("p",{children:"Wr\xf3\u0107 do strony g\u0142\xf3wnej"}),Object(b.jsx)(y.b,{to:"/",children:Object(b.jsx)(q,{text:"Wr\xf3\u0107"})})]})]})})})},le=function(){return Object(b.jsx)(h,{children:Object(b.jsx)(ie,{})})},pe=n(23),ue=n.n(pe),je=function(){var e=Object(i.c)((function(e){return e.notificationModal})),t=e.message,n=e.error,r=Object(i.b)(),s=function(){r({type:C})};return Object(a.useEffect)((function(){var e=setTimeout((function(){s()}),5e3);return function(){clearTimeout(e)}}),[]),Object(b.jsxs)("div",{className:"".concat(ue.a.mainContainer," ").concat(n&&ue.a.error),children:[Object(b.jsx)("p",{className:ue.a.message,children:t}),Object(b.jsx)("div",{className:ue.a.closeButton,onClick:s,children:Object(b.jsx)("span",{children:"Zamknij"})})]})};var be=function(){var e=Object(i.c)((function(e){return e.notificationModal})),t=e.isOpen,n=e.error,a=Object(i.c)((function(e){return e.user}));return console.log(a),Object(i.b)(),Object(b.jsxs)(b.Fragment,{children:[t&&Object(b.jsx)(je,{error:n}),Object(b.jsxs)("nav",{className:p.a.navWrapper,children:[Object(b.jsx)("div",{className:p.a.divTitle,children:"BLOG KULINARNY"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)($,{to:"/",text:"Home"})}),a&&Object(b.jsx)("li",{children:Object(b.jsx)($,{to:"/createrecipe",text:"Dodaj przepis"})}),Object(b.jsx)("li",{children:Object(b.jsx)($,{to:"/login",text:"Zaloguj"})})]})]}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:O}),Object(b.jsx)(o.a,{path:"/login",component:K}),Object(b.jsx)(o.a,{path:"/signup",component:se}),Object(b.jsx)(o.a,{path:"/createrecipe",component:le})]})]})},de=n(17),Oe=n(38),me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(te.a)({},t.payload);case N:return null;default:return e}},xe={isModalOpen:!1,userId:null},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{isModalOpen:!0,userId:t.payload};case T:return{isModalOpen:!1,userId:null};default:return Object(te.a)({},e)}},fe={isOpen:!1,error:!1,message:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return{isOpen:!0,message:t.payload.message,error:t.payload.error};case C:return{isOpen:!1,message:null};default:return e}},ge=n(40),ve={all:[],currentViewProject:null},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(te.a)(Object(te.a)({},e),{},{all:Object(ge.a)(t.payload)});case S:return Object(te.a)(Object(te.a)({},e),{},{currentViewProject:t.payload});case z:return Object(te.a)(Object(te.a)({},e),{},{currentViewProject:null});default:return Object(te.a)({},e)}},we=Object(de.combineReducers)({user:me,projects:ye,profileModal:he,notificationModal:_e}),Ne=n(39),ke=Object(de.createStore)(we,Object(Oe.composeWithDevTools)(Object(de.applyMiddleware)(Ne.a)));c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{store:ke,children:Object(b.jsx)(y.a,{children:Object(b.jsx)(be,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3c5ec1cf.chunk.js.map