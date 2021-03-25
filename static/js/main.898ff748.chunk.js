(this["webpackJsonpphp-api"]=this["webpackJsonpphp-api"]||[]).push([[0],{41:function(e,t,a){},43:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(31),r=a.n(c),i=(a(38),a(39),a(40),a(41),a(17)),l=a(2),o=a(10),h=a.n(o),u=a(16),j=a(12),d=a(13),m=a(8),b=a(15),p=a(14),f=(a(43),a(0));var O=function(){return Object(f.jsx)("div",{className:"loader"})},x=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={users:[],message:"",loading:!0},n.loadData=n.loadData.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"loadData",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost/php-api/view/readall.view.php").then((function(e){return e.json()})).then((function(e){t.setState({users:e,loading:!1})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost/php-api/view/readall.view.php").then((function(e){return e.json()})).then((function(e){t.setState({users:e,loading:!1})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteUser",value:function(){var e=Object(u.a)(h.a.mark((function e(t,a,n){var s,c=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="http://localhost/php-api/controller/php_api/user/delete_user.controller.php?id=".concat(t,"&email=").concat(a),e.next=3,fetch(s).then((function(e){return e.json()})).then((function(e){return c.setState({message:e.Message})}));case 3:this.loadData();case 4:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?Object(f.jsx)(O,{}):null!==this.state.users?Object(f.jsxs)("div",{className:"container ms-2 mt-4 ",children:[Object(f.jsx)("h1",{children:"View User Details"}),Object(f.jsxs)("table",{className:"table align-middle mt-4 table-bordered",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"table-info",children:[Object(f.jsx)("th",{children:"Id"}),Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Email"}),Object(f.jsx)("th",{})]})}),Object(f.jsx)("tbody",{children:this.state.users.map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t.id}),Object(f.jsx)("td",{children:t.name}),Object(f.jsx)("td",{children:t.email}),Object(f.jsx)("td",{children:Object(f.jsx)("i",{class:"fas fa-trash fa-2x",onClick:function(a){return e.deleteUser(t.id,t.email,a)}})})]})}))})]})]}):Object(f.jsx)("h1",{style:{color:"red",textAlign:"center",marginTop:"15%"},children:"Data not found"})}}]),a}(s.a.Component),v=a(32),g=a.n(v),N=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n.handleEmail=n.handleEmail.bind(Object(m.a)(n)),n.handleName=n.handleName.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"handleName",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={name:this.state.name,email:this.state.email};g.a.post("http://localhost/php-api/controller/php_api/user/create_user.controller.php",a).then((function(e){t.setState({message:"User created..",name:"",email:""})})).catch((function(e){t.setState({message:"Unable to create user"})}))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"mt-5",children:"Admin Home"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("div",{className:"form-outline mb-4",children:[Object(f.jsx)("label",{className:"form-label",for:"name",children:"Name"}),Object(f.jsx)("input",{type:"text",id:"name",name:"name",className:"form-control",onChange:this.handleName,value:t})]}),Object(f.jsxs)("div",{className:"form-outline mb-4",children:[Object(f.jsx)("label",{className:"form-label",for:"email",children:"Email Id"}),Object(f.jsx)("input",{type:"email",id:"email",className:"form-control",onChange:this.handleEmail,value:a})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-4",children:"Insert"})]}),Object(f.jsx)("p",{children:this.state.message})]})}}]),a}(s.a.Component);var y=function(){return Object(f.jsxs)(i.a,{children:[Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light shadow-5",children:Object(f.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(f.jsx)("h5",{className:"mr-5 mt-1",children:"Admin Panel"}),Object(f.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(i.b,{to:"/",className:"nav-link",children:[Object(f.jsx)("i",{class:"fas fa-home"})," Home"]})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(i.b,{to:"/users",className:"nav-link",children:[Object(f.jsx)("i",{class:"fas fa-user"})," Users"]})})]})]})}),Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,component:N,path:"/"}),Object(f.jsx)(l.a,{exact:!0,component:x,path:"/users"})]})]})};a(68);var k=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(y,{})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),w()}},[[69,1,2]]]);
//# sourceMappingURL=main.898ff748.chunk.js.map