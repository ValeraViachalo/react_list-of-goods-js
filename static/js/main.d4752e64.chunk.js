(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=(n(13),n(14),n(4)),a=n.n(o),l=n(1),u=n(0),b="name",j="length",d=["Dumplings","Carrot","Eggs","Apple","Bread","Fish","Honey","Jam","Ice cream","Garlic"];var h=function(){var t=Object(l.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(l.useState)(""),o=Object(r.a)(c,2),h=o[0],p=o[1],f=function(t,e){var n=e.sortField,s=e.reverseField,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case j:return t[n]-e[n];case b:return t.localeCompare(e);default:return 0}})),s&&c.reverse(),c}(d,{sortField:n,reverseField:h});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return s(b)},type:"button",className:a()("button is-info",{"is-light":n!==b}),children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return s(j)},type:"button",className:a()("button is-success",{"is-light":n!==j}),children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){return p(!h)},type:"button",className:a()("button is-warning",{"is-light":!h}),children:"Reverse"}),(n||h)&&Object(u.jsx)("button",{onClick:function(){p(""),s("")},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(u.jsx)("ul",{children:f.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t})}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d4752e64.chunk.js.map