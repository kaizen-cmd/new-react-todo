(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},59:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/FontAwesome.8daab3c4.otf"},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(30),r=a.n(o),l=a(12),s=a(2),i=a(9),m=a(1),d=a(7),u=a.n(d),p=a(10),v=a.n(p),g=function(){var e=Object(n.useState)("username"),t=Object(m.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)("password"),l=Object(m.a)(r,2),d=l[0],p=l[1],g=Object(n.useState)(""),E=Object(m.a)(g,2),h=E[0],b=E[1],f=Object(n.useState)(""),k=Object(m.a)(f,2),w=k[0],j=k[1],y=new s.e;return localStorage.getItem("token")?c.a.createElement(c.a.Fragment,null,y.push("/")):c.a.createElement("div",{className:"vertical-center"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"text-center mb-4"},c.a.createElement("h2",null,"Task App - PWA")),c.a.createElement("div",{className:"mx-auto form-group row"},c.a.createElement("div",{className:"col-lg-3 col-sm-8 col-md-8 mx-auto"},c.a.createElement("input",{type:"text",className:"form-input",id:"username",placeholder:a,value:h,onChange:function(e){b(e.target.value)}}))),c.a.createElement("div",{className:"mx-auto form-group row"},c.a.createElement("div",{className:"col-lg-3 col-sm-8 col-md-8 mx-auto"},c.a.createElement("input",{type:"password",className:"form-input",id:"password",placeholder:d,value:w,onChange:function(e){j(e.target.value)}}))),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-md mb-3",type:"submit",onClick:function(){var e=document.getElementById("username").value,t=document.getElementById("password").value;if(""!==e&&""!==t){var a=new v.a;a.append("username",e),a.append("password",t);var n={method:"post",url:"https://djreacttodoapi.herokuapp.com/accounts/login/",headers:Object(i.a)({},a.getHeaders),data:a};u()(n).then((function(e){localStorage.setItem("token","Token ".concat(e.data.token)),y.push("/")})).catch((function(){o("wrong username"),p("wrong password"),j(""),b("")}))}}},"Login"),c.a.createElement("div",null,c.a.createElement("p",{className:"d-inline"},"Not a member? "),c.a.createElement("a",{href:"/register"}," Register")))))},E=function(){var e=Object(n.useState)("username(more than 4 chars)"),t=Object(m.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),l=Object(m.a)(r,2),d=l[0],p=l[1],g=Object(n.useState)("password(more than 8 chars)"),E=Object(m.a)(g,1)[0],h=Object(n.useState)(""),b=Object(m.a)(h,2),f=b[0],k=b[1],w=Object(n.useState)("email"),j=Object(m.a)(w,2),y=j[0],N=j[1],O=Object(n.useState)(""),x=Object(m.a)(O,2),S=x[0],I=x[1],B=Object(n.useState)("confirm password"),C=Object(m.a)(B,1)[0],A=Object(n.useState)(""),W=Object(m.a)(A,2),z=W[0],R=W[1],T=Object(s.e)(),F=Object(n.useState)(!1),H=Object(m.a)(F,2),L=H[0],D=H[1],P=Object(n.useState)(!1),U=Object(m.a)(P,2),J=U[0],M=U[1],$=Object(n.useState)(!1),_=Object(m.a)($,2),q=_[0],G=_[1];var K=new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);return localStorage.getItem("token")?c.a.createElement(c.a.Fragment,null,T.push("/")):c.a.createElement("div",{className:"vertical-center"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"text-center mb-4"},c.a.createElement("h2",null,"Task App - PWA")),c.a.createElement("div",{className:"mx-auto form-group row"},c.a.createElement("div",{className:"col-lg-3 col-sm-8 col-md-8 mx-auto"},c.a.createElement("input",{type:"text",className:"form-input",placeholder:a,value:d,onChange:function(e){p(e.target.value),document.getElementById("username").value.length>=4?(document.getElementById("username").style.border="3px solid #79d70f",D(!0)):document.getElementById("username").style.border="3px solid #d32626"},id:"username"}))),c.a.createElement("div",{className:"mx-auto form-group row"},c.a.createElement("div",{className:"col-lg-3 col-sm-8 col-md-8 mx-auto"},c.a.createElement("input",{type:"email",className:"form-input",placeholder:y,value:S,onChange:function(e){I(e.target.value),document.getElementById("email").value.match(K)?(document.getElementById("email").style.border="3px solid #79d70f",M(!0)):document.getElementById("email").style.border="3px solid #d32626"},id:"email"}))),c.a.createElement("div",{className:"mx-auto form-group row"},c.a.createElement("div",{className:"col-lg-3 col-sm-8 col-md-8 mx-auto"},c.a.createElement("input",{type:"password",className:"form-input",placeholder:E,value:f,onChange:function(e){k(e.target.value);var t=document.getElementById("password").value;t===document.getElementById("cpassword").value&&t.length>=8?(document.getElementById("cpassword").style.border="3px solid #79d70f",document.getElementById("password").style.border="3px solid #79d70f",G(!0)):(document.getElementById("cpassword").style.border="3px solid #d32626",document.getElementById("password").style.border="3px solid #d32626")},id:"password"}))),c.a.createElement("div",{className:"mx-auto form-group row"},c.a.createElement("div",{className:"col-lg-3 col-sm-8 col-md-8 mx-auto"},c.a.createElement("input",{type:"password",className:"form-input",placeholder:C,value:z,onChange:function(e){R(e.target.value);var t=document.getElementById("password").value;t===document.getElementById("cpassword").value&&t.length>=8?(document.getElementById("cpassword").style.border="3px solid #79d70f",document.getElementById("password").style.border="3px solid #79d70f",G(!0)):(document.getElementById("cpassword").style.border="3px solid #d32626",document.getElementById("password").style.border="3px solid #d32626")},id:"cpassword"}))),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-md mb-3",onClick:function(){if(!0===q&&!0===J&&!0===L){var e=document.getElementById("username").value,t=document.getElementById("email").value,a=document.getElementById("password").value,n=document.getElementById("cpassword").value,c=new v.a;c.append("username",e),c.append("password",a),c.append("password2",n),c.append("email",t);var r={method:"post",url:"https://djreacttodoapi.herokuapp.com/accounts/register/",headers:Object(i.a)({},c.getHeaders),data:c};u()(r).then((function(e){"A user with that username already exists."===e.data.username[0]?(o("username taken"),p("")):T.push("/login")})).catch((function(e){console.log(e),N("email taken"),I("")}))}}},"Register"),c.a.createElement("div",null,c.a.createElement("p",{className:"d-inline"},"Already a member? "),c.a.createElement("a",{href:"/login"}," Login")))))},h=function(e){var t=Object(n.useState)(),a=Object(m.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){"login"===e.active?r(c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item mr-5"},c.a.createElement("a",{className:"nav-link active",href:"/login"},"Login")),c.a.createElement("li",{className:"nav-item mr-3"},c.a.createElement("a",{className:"nav-link default",href:"/register"},"Register")))):"home"===e.active?r(c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item mr-5"},c.a.createElement("a",{className:"nav-link active",href:"/login",onClick:function(){localStorage.clear()}},"Logout")))):r(c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"nav-item mr-5"},c.a.createElement("a",{className:"nav-link default",href:"/login"},"Login")),c.a.createElement("li",{className:"nav-item mr-3"},c.a.createElement("a",{className:"nav-link active",href:"/register"},"Register"))))}),[e]),c.a.createElement("div",{className:"sticky-top"},c.a.createElement("nav",{className:"navbar navbar-expand-sm"},c.a.createElement("a",{className:"navbar-brand default",href:"/"},"Task - PWA"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},o))))},b=a(32),f=function(e){var t=Object(n.useState)(e.task),a=Object(m.a)(t,2),o=a[0],r=a[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),d=s[0],p=s[1],g=Object(n.useState)(e.isDone),E=Object(m.a)(g,2),h=E[0],b=E[1],f=Object(n.useState)(""),k=Object(m.a)(f,2),w=k[0],j=k[1],y=localStorage.getItem("token");return Object(n.useEffect)((function(){!0===e.isDone?(p(c.a.createElement("i",{className:"icon-check"})),j("strikeout")):(p(c.a.createElement("i",{className:"icon-check-empty"})),j(""))}),[e]),c.a.createElement("div",{className:"taskdiv",id:e.id},c.a.createElement("input",{id:e.id+"taskin",type:"text",value:o,onChange:function(t){r(t.target.value);var a=new v.a;a.append("id","".concat(e.id)),a.append("isdone","".concat(e.isDone)),a.append("task",document.getElementById("".concat(e.id,"taskin")).value);var n={method:"put",url:"https://djreacttodoapi.herokuapp.com/tasks/",headers:Object(i.a)({Authorization:"".concat(y)},a.getHeaders),data:a};u()(n)},className:w}),c.a.createElement("div",{className:"taskdivbuttons"},c.a.createElement("button",{id:"donebtn",onClick:function(){var t=new v.a;if(t.append("id","".concat(e.id)),t.append("task","".concat(e.task)),h){p(c.a.createElement("i",{className:"icon-check-empty"})),b(!1),j(""),t.append("isdone","false");var a={method:"put",url:"https://djreacttodoapi.herokuapp.com/tasks/",headers:Object(i.a)({Authorization:"".concat(y)},t.getHeaders),data:t};u()(a)}else{p(c.a.createElement("i",{className:"icon-check"})),b(!0),j("strikeout"),t.append("isdone","true");a={method:"put",url:"https://djreacttodoapi.herokuapp.com/tasks/",headers:Object(i.a)({Authorization:"".concat(y)},t.getHeaders),data:t};u()(a)}}},d),c.a.createElement("button",null,c.a.createElement("i",{className:"icon-remove",onClick:function(){var t=new v.a;t.append("id","".concat(e.id));var a={method:"delete",url:"https://djreacttodoapi.herokuapp.com/tasks/",headers:Object(i.a)({Authorization:"".concat(y)},t.getHeaders),data:t};u()(a),document.getElementById("".concat(e.id)).style.display="none"}}))))},k=function(){var e=Object(s.e)(),t=Object(n.useState)([]),a=Object(m.a)(t,2),o=a[0],r=a[1],l=Object(n.useState)([]),d=Object(m.a)(l,2),p=d[0],g=d[1],E=Object(n.useState)(""),h=Object(m.a)(E,2),k=h[0],w=h[1],j=localStorage.getItem("token"),y={method:"get",url:"https://djreacttodoapi.herokuapp.com/tasks/",headers:{Authorization:"".concat(j)}};return Object(n.useEffect)((function(){u()(y).then((function(e){r(e.data)}))}),[]),localStorage.getItem("token")?c.a.createElement("div",null,c.a.createElement("h2",{className:"text-center mt-5"},"Tasks"),c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"container taskbox"},o.map((function(e){return c.a.createElement(f,{key:e.id,id:e.id,task:e.task,isDone:e.isdone})})),p.map((function(e){return c.a.createElement(f,{key:e.id,id:e.id,task:e.task,isDone:e.isdone})})),c.a.createElement("br",null),c.a.createElement("div",{className:"newtaskdiv"},c.a.createElement("input",{type:"text",id:"newtaskin",value:k,onChange:function(e){w(e.target.value)}}),c.a.createElement("div",{className:"taskdivbuttons"},c.a.createElement("button",{id:"addButton",onClick:function(){var e=document.getElementById("newtaskin").value;if(""!==e){var t=new v.a;t.append("task","".concat(e));var a={method:"post",url:"https://djreacttodoapi.herokuapp.com/tasks/",headers:Object(i.a)({Authorization:"".concat(j)},t.getHeaders),data:t};u()(a).then((function(e){g((function(t){return[].concat(Object(b.a)(t),[e.data])})),w("")})).catch((function(e){console.log(e)}))}}},c.a.createElement("i",{className:"icon-plus"}))))))):c.a.createElement(c.a.Fragment,null,e.push("/login"))},w=function(){return c.a.createElement("div",null,c.a.createElement(s.a,{exact:!0,path:"/",render:function(){return c.a.createElement("div",null,c.a.createElement(h,{active:"home"}),c.a.createElement(k,null))}}),c.a.createElement(s.a,{exact:!0,path:"/login",render:function(){return c.a.createElement("div",null,c.a.createElement(h,{active:"login"}),c.a.createElement(g,null))}}),c.a.createElement(s.a,{exact:!0,path:"/register",render:function(){return c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement(E,null))}}))};var j=function(){return c.a.createElement("div",null,c.a.createElement(l.a,null,c.a.createElement(w,null)))},y=(a(59),a(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(61),a(62),a(64);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.4492534d.chunk.js.map