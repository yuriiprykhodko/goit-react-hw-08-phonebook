(this.webpackJsonpdraft=this.webpackJsonpdraft||[]).push([[5],{85:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(32);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,s=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw s}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},92:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a(85),r=a(9),s=a(0),c=a(16),i=(a(45),a(1));function l(){var e=Object(r.c)(),t=Object(s.useState)(""),a=Object(n.a)(t,2),l=a[0],u=a[1],o=Object(s.useState)(""),b=Object(n.a)(o,2),j=b[0],m=b[1],d=Object(s.useState)(""),f=Object(n.a)(d,2),p=f[0],h=f[1],O=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":return u(n);case"email":return m(n);case"password":return h(n);default:return}};return Object(i.jsxs)("div",{className:"Register",children:[Object(i.jsx)("h1",{children:"Register page"}),Object(i.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e(c.a.register({name:l,email:j,password:p})),u(""),m(""),h("")},autoComplete:"off",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("label",{className:"label",children:["Name",Object(i.jsx)("input",{className:"input",type:"name",name:"name",value:l,onChange:O})]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("label",{className:"label",children:["Email",Object(i.jsx)("input",{className:"input",type:"email",name:"email",value:j,onChange:O})]})}),Object(i.jsx)("div",{children:Object(i.jsxs)("label",{className:"label",children:["Password",Object(i.jsx)("input",{className:"input",type:"password",name:"password",value:p,onChange:O})]})}),Object(i.jsx)("button",{className:"button",type:"submit",children:"Register"})]})]})}}}]);
//# sourceMappingURL=5.62efb150.chunk.js.map