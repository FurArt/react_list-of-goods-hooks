(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(5),r=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.STATE_BY_LENGTH="byLength",t.STATE_BY_ALPHABET="byAlphabet"}(c||(c={}));var h=function(){var t=Object(a.useState)(null),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),h=u[0],T=u[1],d=Object(a.useState)(j),E=Object(i.a)(d,2),f=E[0],A=E[1];return Object(a.useEffect)((function(){var t=function(t,e,n){var s=Object(r.a)(t);switch(e){case c.STATE_BY_LENGTH:s.sort((function(t,e){return t.length-e.length}));break;case c.STATE_BY_ALPHABET:s.sort((function(t,e){return t.localeCompare(e)}))}return n&&(s=s.reverse()),s}(j,n,h);A(t)}),[n,h]),Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==c.STATE_BY_ALPHABET}),onClick:function(){return s(c.STATE_BY_ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==c.STATE_BY_LENGTH}),onClick:function(){return s(c.STATE_BY_LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!h}),onClick:function(){T(!h)},children:"Reverse"}),(n||h)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(null),T(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:f.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5f1c3bc2.chunk.js.map