(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{19:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n.n(c),a=n(13),o=n.n(a),i=(n(19),n(3)),u=n(14),l=n.n(u),s=n(0);var j=function(){var t=Object(c.useState)(null),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)({}),o=Object(i.a)(a,2),u=o[0],j=o[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),p=d[0],h=d[1],f=Object(c.useState)(0),O=Object(i.a)(f,2),v=O[0];O[1],Object(c.useEffect)((function(){console.log(u)}),[u,v]);var m=function(t){t.preventDefault();var e=new FormData;e.append("file",n),l.a.post("http://127.0.0.1:8000/api/".concat(t.target.value,"-trend/"),e).then((function(t){return t.data.error?h(t.data.error):t.data})).then((function(t){return j(t)})).catch((function(t){return console.log(t.message)}))};return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("form",{encType:"multipart/form-data",children:[Object(s.jsx)("input",{type:"file",onChange:function(t){return r(t.target.files[0])}}),n&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("button",{onClick:function(t){return m(t)},value:"linear",children:"Linear"}),Object(s.jsx)("button",{onClick:function(t){return m(t)},value:"logarithmic",children:"Logarithmic"}),Object(s.jsx)("button",{onClick:function(t){return m(t)},value:"hyperbolic",children:"Hyperbolic"}),Object(s.jsx)("button",{onClick:function(t){return m(t)},value:"smoothing",children:"Smoothing"}),Object(s.jsx)("p",{children:null===u||void 0===u?void 0:u.correlation}),p&&!(null===u||void 0===u?void 0:u.data)&&Object(s.jsx)("p",{children:p})]})]})})};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e813db01.chunk.js.map