(this.webpackJsonpnoteshub=this.webpackJsonpnoteshub||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(20),r=a.n(c),l=(a(26),a(8)),i=(a(27),a(7)),o=a(2),d=a(0),b=function(){var e=Object(o.f)(),t=Object(o.g)();return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:"NotesHub"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link ".concat("/"===t.pathname?"active":{}),"aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link ".concat("/about"===t.pathname?"active":{}),to:"/about",children:"About"})})]}),localStorage.getItem("sah")?Object(d.jsx)("button",{onClick:function(){localStorage.removeItem("sah"),e.push("/login")},className:"btn btn-primary",children:"Logout"}):Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)(i.b,{className:"btn btn-primary mx-2",to:"/login",role:"submit",children:"Login"}),Object(d.jsx)(i.b,{className:"btn btn-primary mx-2",to:"/signup",role:"submit",children:"Signup"})]})]})]})})},j=a(11),m=a(9),u=Object(s.createContext)(),h=function(e){var t=Object(s.useContext)(u),a=e.note,n=e.updateNote,c=t.deleteNote;return Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsx)("div",{className:"card my-2",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:a.title}),Object(d.jsx)("p",{className:"card-text",children:a.description}),Object(d.jsx)("i",{className:"fas fa-trash mx-2",onClick:function(){c(a._id),e.showAlert("deleted Successfully","success")}}),Object(d.jsx)("i",{className:"fas fa-edit mx-2",onClick:function(){n(a)}})]})})})},p=function(e){var t=Object(s.useContext)(u).addNote,a=Object(s.useState)({title:"",description:"",tag:""}),n=Object(l.a)(a,2),c=n[0],r=n[1],i=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h1",{children:"Add a Note"}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title ","aria-describedby":"emailHelp",value:c.title,name:"title",onChange:i,minLength:3,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"description",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"description",name:"description",value:c.description,onChange:i,minLength:3,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"tag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"tag",value:c.tag,name:"tag",onChange:i})]}),Object(d.jsx)("button",{disabled:c.title.length<3||c.description.length<3,type:"submit",className:"btn btn-primary",onClick:function(a){a.preventDefault(),t(c.title,c.description,c.tag),r({title:"",description:"",tag:""}),e.showAlert("Added Successfully","success")},children:"Add Note"})]})]})},x=function(e){var t=Object(o.f)(),a=Object(s.useContext)(u),n=a.notes,c=a.getNotes,r=a.editNote;Object(s.useEffect)((function(){localStorage.getItem("sah")?c():t.push("/login")}),[]);var i=Object(s.useRef)(null),b=Object(s.useRef)(null),x=Object(s.useState)({id:"",etitle:"",edescription:"",etag:""}),O=Object(l.a)(x,2),f=O[0],g=O[1],v=function(e){i.current.click(),g({id:e._id,etitle:e.title,edescription:e.description,etag:e.tag})},N=function(e){g(Object(m.a)(Object(m.a)({},f),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{showAlert:e.showAlert}),Object(d.jsx)("button",{ref:i,type:"button",className:"d-none btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Launch demo modal"}),Object(d.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(d.jsx)("div",{className:"modal-dialog",children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Edit Note"}),Object(d.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(d.jsx)("div",{className:"modal-body",children:Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"etitle",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"etitle ",name:"etitle",value:f.etitle,onChange:N,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"edescription",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"edescription",name:"edescription",value:f.edescription,onChange:N,minLength:5,required:!0})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"etag",className:"form-label",children:"Tag"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"etag",name:"etag",value:f.etag,onChange:N})]})]})}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{ref:b,type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(d.jsx)("button",{disabled:f.etitle.length<3||f.edescription.length<3,type:"button",onClick:function(t){r(f.id,f.etitle,f.edescription,f.etag),b.current.click(),e.showAlert("Updated Successfully","success")},className:"btn btn-primary",children:"Update Note"})]})]})})}),Object(d.jsxs)("div",{className:"row my-3",children:[Object(d.jsx)("h1",{children:"Your Note"}),Object(d.jsx)("div",{className:"container mx-1",children:0===n.length&&"No notes to display"}),n.map((function(t){return Object(d.jsx)(h,{updateNote:v,showAlert:e.showAlert,note:t},t._id)}))]})]})},O=function(e){var t=e.showAlert;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x,{showAlert:t})})},f=function(){return Object(d.jsx)("div",{children:"this is about"})},g=a(4),v=a.n(g),N=a(12),y=function(e){var t="http://localhost:5000",a=Object(s.useState)([]),n=Object(l.a)(a,2),c=n[0],r=n[1],i=function(){var e=Object(N.a)(v.a.mark((function e(){var a,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/fetchallnotes"),{method:"GET",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("sah")}});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,console.log(s),r(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(N.a)(v.a.mark((function e(a,s,n){var l,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/addnote"),{method:"POST",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("sah")},body:JSON.stringify({title:a,description:s,tag:n})});case 2:return l=e.sent,e.next=5,l.json();case 5:i=e.sent,r(c.concat(i));case 7:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),b=function(){var e=Object(N.a)(v.a.mark((function e(a){var s,n,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/deletenote/").concat(a),{method:"DELETE",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("sah")}});case 2:s=e.sent,n=s.json(),console.log(n),l=c.filter((function(e){return e._id!==a})),r(l);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(N.a)(v.a.mark((function e(a,s,n,l){var i,o,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/api/notes/updatenote/").concat(a),{method:"PUT",headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("sah")},body:JSON.stringify({title:s,description:n,tag:l})});case 2:i=e.sent,console.log(i),o=JSON.parse(JSON.stringify(c)),d=0;case 6:if(!(d<o.length)){e.next=16;break}if(o[d]._id!==a){e.next=13;break}return o[d].title=s,o[d].description=n,o[d].tag=l,e.abrupt("break",16);case 13:d++,e.next=6;break;case 16:r(o);case 17:case"end":return e.stop()}}),e)})));return function(t,a,s,n){return e.apply(this,arguments)}}();return Object(d.jsx)(u.Provider,{value:{notes:c,addNote:o,deleteNote:b,editNote:j,getNotes:i},children:e.children})},w=function(e){return Object(d.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dissmissible\n             fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){"danger"===e&&(e="error");var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})})},C=function(e){var t=Object(s.useState)({email:"",password:""}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(o.f)(),i=function(){var t=Object(N.a)(v.a.mark((function t(a){var s,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email,password:n.password})});case 3:return s=t.sent,t.next=6,s.json();case 6:c=t.sent,console.log(c),c.success?(localStorage.setItem("sah",c.authToken),e.showAlert("Logged in successfully","success"),r.push("/")):e.showAlert("Invalid Credentials","danger");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){c(Object(m.a)(Object(m.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsx)("h2",{children:"Login to continue NotesHub"}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",value:n.email,onChange:b,id:"email",name:"email","aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",value:n.password,onChange:b,name:"password",id:"password"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},S=function(e){var t=Object(s.useState)({name:"",email:"",password:"",cpassword:""}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(o.f)(),i=function(){var t=Object(N.a)(v.a.mark((function t(a){var s,c,l,i,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s=n.name,c=n.email,l=n.password,t.next=4,fetch("http://localhost:5000/api/auth/createuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:c,password:l})});case 4:return i=t.sent,t.next=7,i.json();case 7:o=t.sent,console.log(o),o.success?(localStorage.setItem("sah",o.authToken),e.showAlert("Account Created successfully","success"),r.push("/")):e.showAlert("Invalid details","danger");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(e){c(Object(m.a)(Object(m.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{children:"Create an account to to use NotesHub"}),Object(d.jsxs)("form",{onSubmit:i,children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",onChange:b,"aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",onChange:b,"aria-describedby":"emailHelp"}),Object(d.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",name:"password",onChange:b,minLength:5,required:!0,id:"password"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"cpassword",className:"form-label",children:" Confirm Password"}),Object(d.jsx)("input",{type:"cpassword",className:"form-control",name:"cpassword",onChange:b,minLength:5,required:!0,id:"cpassword"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})};var k=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],c=function(e,t){n({msg:e,type:t}),setTimeout((function(){n(null)}),2500)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(y,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(w,{alert:a}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{showAlert:c})}),Object(d.jsx)(o.a,{exact:!0,path:"/about",children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/login",children:Object(d.jsx)(C,{showAlert:c})}),Object(d.jsx)(o.a,{exact:!0,path:"/signup",children:Object(d.jsx)(S,{showAlert:c})})]})})]})})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.71e09c4c.chunk.js.map