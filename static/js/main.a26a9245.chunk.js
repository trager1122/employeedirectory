(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(9),s=n(21),a=n.n(s);n(60);var i=function(e){return Object(c.jsx)("div",{className:"wrapper",children:e.children})};n(61);var l=function(e){return Object(c.jsx)("h1",{className:"title",children:e.children})},o=n(47),j=n(48),u=n(15),d=n(54),h=n(53),b=n(103),m=n(49),y=n.n(m),O=function(){return y.a.get("https://randomuser.me/api/?results=10&nat=us")},f=n(50),p=n.n(f),x=n(22),B=n(101),v=n(104),g=n(105),k=n(102);var N=function(e){var t=Object(r.useState)(!1),n=Object(x.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)(B.a,{isOpen:s,toggle:function(){return a((function(e){return!e}))},children:[Object(c.jsx)(v.a,{caret:!0,children:"Filter by"}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(k.a,{onClick:e.filterByMale,children:"Male"}),Object(c.jsx)(k.a,{onClick:e.filterByFemale,children:"Female"})]})]})};var M=function(e){var t=Object(r.useState)(!1),n=Object(x.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)(B.a,{isOpen:s,toggle:function(){return a((function(e){return!e}))},children:[Object(c.jsx)(v.a,{caret:!0,children:"Sort by"}),Object(c.jsxs)(g.a,{children:[Object(c.jsx)(k.a,{onClick:e.sortByName,children:"Name"}),Object(c.jsx)(k.a,{onClick:e.sortByDOB,children:"Birthdate"})]})]})},D=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).sortByName=e.sortByName.bind(Object(u.a)(e)),e.sortByDOB=e.sortByDOB.bind(Object(u.a)(e)),e.filterByMale=e.filterByMale.bind(Object(u.a)(e)),e.filterByFemale=e.filterByFemale.bind(Object(u.a)(e)),e.state={employees:[]},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){return e.setState({employees:t.data.results},(function(){console.log("Component Mounted!")}))}))}},{key:"sortByName",value:function(e){var t=this.state.employees;this.setState({employees:t.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}))})}},{key:"sortByDOB",value:function(e){var t=this.state.employees;this.setState({employees:t.sort((function(e,t){return e.dob.date.localeCompare(t.dob.date)}))})}},{key:"filterByMale",value:function(e){var t=this,n=this.state.employees;console.log(this.state.employees),this.setState({employees:n.filter((function(e){return"male"===e.gender}))},(function(){console.log(t.state.employees)}))}},{key:"filterByFemale",value:function(e){var t=this.state.employees;this.setState({employees:t.filter((function(e){return"female"===e.gender}))})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{className:"d-flex justify-content-start",children:[Object(c.jsx)(M,{sortByName:this.sortByName,sortByDOB:this.sortByDOB}),Object(c.jsx)(N,{className:"d-flex filterBtn justify-content-end",filterByMale:this.filterByMale,filterByFemale:this.filterByFemale})]}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Picture"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"Birthdate"})]})}),Object(c.jsxs)("tbody",{children:[this.state.employees.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{alt:"".concat(e.name.first," ").concat(e.name.last),src:e.picture.thumbnail})}),Object(c.jsx)("td",{children:"".concat(e.name.first," ").concat(e.name.last)}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:p()(e.dob.date).format("MM-DD-YYYY")})]})})),";"]})]})]})}}]),n}(r.Component);var C=function(){return Object(c.jsxs)(i,{children:[Object(c.jsx)(l,{children:"Employee Directory"}),Object(c.jsx)(D,{})]})};n(98),n(99);a.a.render(Object(c.jsx)(C,{}),document.getElementById("root"))},60:function(e,t,n){},61:function(e,t,n){},98:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.a26a9245.chunk.js.map