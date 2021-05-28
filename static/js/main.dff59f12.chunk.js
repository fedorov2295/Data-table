(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),r=n.n(s),l=(n(11),n(2)),o=n(3),i=n.n(o),j=n(4),d=n.n(j),u=n(0),b=function(e){var t=null;switch(e.elementType){case"delete":t=Object(u.jsx)("button",{className:d.a.delete,onClick:e.deleteItem,children:"Delete"});break;case"edit":t=Object(u.jsx)("button",{className:d.a.edit,onClick:e.editItem,children:"Edit"});break;case"save":t=Object(u.jsx)("button",{className:d.a.save,onClick:e.saveItem,children:"Save"});break;case"add":t=Object(u.jsx)("button",{className:d.a.add,onClick:e.addItem,children:"Add Item"})}return Object(u.jsx)(c.a.Fragment,{children:t})},p=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("allEntries"))),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),o=r[0],j=r[1],d=Object(a.useState)(""),p=Object(l.a)(d,2),O=p[0],m=p[1],h=Object(a.useState)(""),x=Object(l.a)(h,2),g=x[0],y=x[1],f=Object(a.useState)(""),S=Object(l.a)(f,2),_=S[0],v=S[1],N=Object(a.useState)(""),A=Object(l.a)(N,2),I=A[0],w=A[1],C=Object(a.useState)(""),E=Object(l.a)(C,2),J=E[0],k=E[1],T=Object(a.useState)({status:!1,rowKey:null}),K=Object(l.a)(T,2),B=K[0],L=K[1],F=[];F.push({name:"name1",type:"type1",color:"#f90b0b"}),F.push({name:"name2",type:"type2",color:"#0a5c8f"}),F.push({name:"name3",type:"type3",color:"#8f5b5b"}),F.push({name:"name4",type:"type4",color:"#d0b83e"}),localStorage.setItem("allEntries",JSON.stringify(F));return Object(u.jsxs)("div",{className:i.a.App,children:[Object(u.jsxs)("table",{className:i.a.table,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:i.a.tableHead,children:[Object(u.jsx)("th",{className:i.a.rowNumber}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Type"}),Object(u.jsx)("th",{children:"Color"}),Object(u.jsx)("th",{className:i.a.rowAction,children:"Action"})]})}),Object(u.jsxs)("tbody",{children:[n.map((function(e,t){return Object(u.jsxs)("tr",{className:i.a.data,id:t,children:[Object(u.jsx)("td",{children:t+1}),Object(u.jsx)("td",{children:B.status&&B.rowKey===t?Object(u.jsx)("input",{value:o,onChange:function(e){return j(e.target.value)},placeholder:"Enter name"}):e.name}),Object(u.jsx)("td",{children:B.status&&B.rowKey===t?Object(u.jsxs)("select",{value:O,onChange:function(e){return m(e.target.value)},children:[Object(u.jsx)("option",{}),Object(u.jsx)("option",{children:"Main"}),Object(u.jsx)("option",{children:"Side"}),Object(u.jsx)("option",{children:"Lower"})]}):e.type}),Object(u.jsx)("td",{children:B.status&&B.rowKey===t?Object(u.jsx)("input",{onChange:function(e){return y(e.target.value)},value:g,type:"color"}):e.color}),B.status&&B.rowKey===t?Object(u.jsx)(b,{elementType:"save",saveItem:function(){return function(e){n[e]={name:o,type:O,color:g},localStorage.setItem("allEntries",JSON.stringify(n)),c(JSON.parse(localStorage.getItem("allEntries"))),L({status:!1,rowKey:null}),j(""),m(""),y("")}(t)}}):Object(u.jsxs)("td",{children:[Object(u.jsx)(b,{elementType:"delete",deleteItem:function(e){return t=e,n.splice(t.target.closest("TR").id,1),localStorage.setItem("allEntries",JSON.stringify(n)),void c(JSON.parse(localStorage.getItem("allEntries")));var t}}),Object(u.jsx)(b,{elementType:"edit",editItem:function(){return function(e){var t=e.id,n=e.currentName,a=e.currentColor;L({status:!0,rowKey:t}),j(n),y(a)}({id:t,currentName:e.name,currentColor:e.color})}})]})]},t)})),Object(u.jsxs)("tr",{className:i.a.data,children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{value:_,onChange:function(e){return v(e.target.value)},placeholder:"Enter name"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("select",{value:I,onChange:function(e){return w(e.target.value)},children:[Object(u.jsx)("option",{}),Object(u.jsx)("option",{children:"Main"}),Object(u.jsx)("option",{children:"Side"}),Object(u.jsx)("option",{children:"Lower"})]})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{value:J,type:"color",onChange:function(e){return k(e.target.value)}})})]})]})]}),Object(u.jsx)(b,{elementType:"add",addItem:function(){n.push({name:_,type:I,color:J}),localStorage.setItem("allEntries",JSON.stringify(n)),c(JSON.parse(localStorage.getItem("allEntries"))),v(""),w(""),k("")},children:"Add Item"})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),O()},3:function(e,t,n){e.exports={App:"App_App__3aBuA",table:"App_table__4LPPZ",tableHead:"App_tableHead__1hPeL",data:"App_data__1rgjd",rowNumber:"App_rowNumber__21n5p",rowAction:"App_rowAction__3aD7S"}},4:function(e,t,n){e.exports={delete:"ActionButtons_delete__2-gJK",edit:"ActionButtons_edit__39YdJ",save:"ActionButtons_save__14mft",add:"ActionButtons_add__2mYtm"}}},[[13,1,2]]]);
//# sourceMappingURL=main.dff59f12.chunk.js.map