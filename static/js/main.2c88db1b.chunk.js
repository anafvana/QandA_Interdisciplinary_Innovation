(this["webpackJsonpinterdisciplinary-innovation-qna"]=this["webpackJsonpinterdisciplinary-innovation-qna"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n.n(c),o=n(3),a=n.n(o),i=(n(14),n(2)),l=(n(15),n(16),function(){return Object(r.jsxs)("header",{tabIndex:"0",children:[Object(r.jsx)("h1",{children:"Frequently asked questions"}),Object(r.jsx)("h2",{children:"ACIT4200 - Interdisciplinary Innovation - OsloMet"}),Object(r.jsx)("h3",{className:"edit-notice",children:"Updated weekly for the duration of the course"})]})});function u(e){var t=[];return e.forEach((function(e){t.push(e.str)})),t}function d(e){var t=[{label:"All categories",value:"all"}];return e.map((function(e){return t.push({label:e,value:e.replace(/\s+/g,"-")})})),t}function j(e,t,n){var r=[];return console.log("selectEntriesCategory: allEntries length: "+e.length),"All categories"===n||null==n?r=h(e):e.map((function(e){return function(e,t){var n=!1;return t.categories.forEach((function(t){e===t.str&&(n=!0)})),n}(n,e)&&r.push(h(e)),r})),null!=t&&t.length>0&&(console.log("keywords are here"),r=function(e,t){var n=h(e);return n=n.filter((function(e){return function(e,t){var n=!0;return e.forEach((function(e){var r=!1;console.log(t.keywords),t.keywords.forEach((function(t){e.label===t.str&&(r=!0)})),n*=r})),n}(t,e)}))}(r,t)),r}function h(e){if(!e)return e;var t,n=Array.isArray(e)?[]:{};for(var r in e)t=e[r],n[r]="object"===typeof t?h(t):t;return n}n(17),n(18);var f=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h6",{className:"propTitle",children:"Keywords:"}),Object(r.jsx)("div",{className:"keywordContainer",children:e.kw.map((function(e){return Object(r.jsx)("div",{className:"keyword",children:e})}))})]})},b=(n(19),function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h6",{className:"propTitle",children:"Categories:"}),Object(r.jsx)("div",{className:"categoriesContainer",children:e.cat.map((function(e){return Object(r.jsx)("div",{className:"category",children:e})}))})]})}),O=function(e){return Object(r.jsxs)("article",{tabIndex:"0",children:[Object(r.jsxs)("div",{className:"questWrapper",children:[Object(r.jsxs)("h4",{children:["Question: ",e.question]}),Object(r.jsx)(b,{cat:e.cats})]}),Object(r.jsxs)("p",{children:["Answer: ",e.answer]}),Object(r.jsx)(f,{kw:e.kw})]})},y=function(e){return Object(r.jsx)("section",{name:"Entries matching your query",children:e.data&&e.data.length>=0&&e.data.map((function(e){return Object(r.jsx)(O,{question:e.question,answer:e.answer,kw:u(e.keywords),cats:u(e.categories)})}))})},g=(n(20),n(21),n(4)),p=function(e){Object(c.useEffect)((function(){fetch("https://ingrids.space/cats").then((function(e){return e.json()})).then((function(e){(e=u(e)).sort(),o(e)})).catch((function(e){return console.log(e)}))}),[]);var t=Object(c.useState)([]),n=Object(i.a)(t,2),s=n[0],o=n[1];return Object(r.jsxs)("div",{className:"catSelectorContainer",children:[Object(r.jsx)("label",{htmlFor:"categories",className:"propTitle",children:"Choose a category"}),Object(r.jsx)("br",{}),Object(r.jsx)(g.a,{placeholder:"All categories",defaultValue:"All categories",options:s&&s.length>=0&&d(s),onChange:function(t){return e.entrySelector(j(e.allEntries,e.selectedKeywords,t.label))}})]})},x=function(e){Object(c.useEffect)((function(){fetch("https://ingrids.space/kws").then((function(e){return e.json()})).then((function(e){(e=u(e)).sort(),console.log(e),o(e)})).catch((function(e){return console.log(e)}))}),[]);var t=Object(c.useState)([]),n=Object(i.a)(t,2),s=n[0],o=n[1];return Object(r.jsxs)("div",{className:"keywordSelectorContainer",children:[Object(r.jsx)("label",{htmlFor:"categories",className:"propTitle",children:"Choose keywords"}),Object(r.jsx)("br",{}),Object(r.jsx)(g.a,{isMulti:!0,options:s&&s.length>=0&&d(s),onChange:function(t){return n=t,r=e.entrySelector,c=e.setKeywords,s=e.allEntries,o=e.selectedCategory,console.log("updateKeywords: allEntries length: "+s.length),c(n),r(j(s,n,o)),void console.log("done with entry selector");var n,r,c,s,o}})]})},v=function(e){return Object(r.jsxs)("div",{className:"searchContainer",children:[Object(r.jsx)(p,{allEntries:e.allEntries,entrySelector:e.entrySelector,selectedCategory:e.selectedCategory,setCategory:e.setCategory,selectedKeywords:e.selectedKeywords}),Object(r.jsx)(x,{allEntries:e.allEntries,entrySelector:e.entrySelector,selectedCategory:e.selectedCategory,selectedKeywords:e.selectedKeywords,setKeywords:e.setKeywords})]})};var w=function(){Object(c.useEffect)((function(){fetch("https://ingrids.space/entries").then((function(e){return console.log(e),e.json()})).then((function(e){s(e),d(e)})).catch((function(e){return console.log(e)}))}),[]);var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)([]),a=Object(i.a)(o,2),u=a[0],d=a[1],j=Object(c.useState)([]),h=Object(i.a)(j,2),f=h[0],b=h[1],O=Object(c.useState)(null),g=Object(i.a)(O,2),p=g[0],x=g[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsxs)("main",{children:[Object(r.jsx)(v,{allEntries:n,entrySelector:d,selectedCategory:p,setCategory:x,selectedKeywords:f,setKeywords:b}),Object(r.jsx)(y,{data:u})]})]})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2c88db1b.chunk.js.map