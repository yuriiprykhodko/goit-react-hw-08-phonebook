(this.webpackJsonpdraft=this.webpackJsonpdraft||[]).push([[3],{85:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(32);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},86:function(t,e,n){},87:function(t,e,n){},88:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var r,a=n(33),c=n(85),o=n(0),u=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(t){return"string"===typeof t&&s.test(t)},b=[],d=0;d<256;++d)b.push((d+256).toString(16).substr(1));var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(b[t[e+0]]+b[t[e+1]]+b[t[e+2]]+b[t[e+3]]+"-"+b[t[e+4]]+b[t[e+5]]+"-"+b[t[e+6]]+b[t[e+7]]+"-"+b[t[e+8]]+b[t[e+9]]+"-"+b[t[e+10]]+b[t[e+11]]+b[t[e+12]]+b[t[e+13]]+b[t[e+14]]+b[t[e+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n};var j=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return f(r)},m=(n(86),n(9)),h=n(31),p=n(1);var O=Object(m.b)(null,(function(t){return{onSubmit:function(e,n){return t(h.b.addContact(e,n))}}}))((function(){var t=Object(o.useState)(""),e=Object(c.a)(t,2),n=e[0],r=e[1],a=Object(o.useState)(""),u=Object(c.a)(a,2),i=u[0],s=u[1],l=Object(m.d)(h.c.getContacts),b=Object(m.c)(),d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":s(a);break;default:return}},f=function(){r(""),s("")};return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),l.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):(b(h.b.addContact({name:n,number:i})),f())},className:"form",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Name"}),Object(p.jsx)("input",{id:j(),type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:d,required:!0})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Number"}),Object(p.jsx)("input",{id:j(),type:"tel",name:"number",value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:d,required:!0})]}),Object(p.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})})),y=(n(87),Object(m.b)((function(t){return{contacts:h.c.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(h.b.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:"list",children:e.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(p.jsxs)("li",{className:"item",children:[Object(p.jsxs)("p",{className:"text",children:[r,":"]}),Object(p.jsx)("span",{children:a}),Object(p.jsx)("button",{className:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}))),v=(n(88),Object(m.b)((function(t){return{value:h.c.getFilter(t)}}),(function(t){return{onChange:function(e){return t(Object(h.a)(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{className:"text",children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",value:e,onChange:n})]})})));e.default=Object(m.b)(null,(function(t){return{fetchContacts:function(){return t(h.b.fetchContacts())}}}))((function(){var t=Object(m.c)();return Object(o.useEffect)((function(){return t(h.b.fetchContacts())}),[t]),Object(p.jsxs)(a.a,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(v,{}),Object(p.jsx)(y,{})]})}))}}]);
//# sourceMappingURL=3.66ff7971.chunk.js.map