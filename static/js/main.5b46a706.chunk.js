(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a,r=n(1),i=n.n(r),c=n(16),o=n.n(c),s=(n(25),n(19)),l=n(15),u=n(8),b=n(9),d=n(12),h=n(11),m=n(32),j=n(7),p=n(3),f=n(4),O=f.a.button(a||(a=Object(p.a)(["\n  background-color: #010101;\n  border: none;\n  outline: none;\n  padding: 8px 16px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  text-transform: uppercase;\n  cursor: pointer;\n"]))),x=n(0);var g,v,C=function(e){var t=e.text;return Object(x.jsx)(O,{children:t})},y=f.a.form(g||(g=Object(p.a)(["\n  padding: 20px 30px;\n  & input {\n    display: block;\n    margin-bottom: 10px;\n  }\n"]))),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(j.a)({},a,r)),console.log("Hello")},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",number:""})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(y,{onSubmit:this.handleSubmit,children:[Object(x.jsx)("h3",{children:"Name"}),Object(x.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:this.state.name,id:this.state.id,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(x.jsx)("input",{type:"tel",name:"number",placeholder:"Number",value:this.state.number,id:this.state.id,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(x.jsx)(C,{type:"submit",text:"Add contact"})]})}}]),n}(r.Component),k=f.a.div(v||(v=Object(p.a)(["\n  background-color: #e9f043;\n  padding: 10px;\n"])));var w=function(e){var t=e.children;return Object(x.jsx)(k,{children:t})},A=n(10);var z=Object(A.a)("ul",{target:"e1f359250"})({name:"14b4hfm",styles:"list-style:square;& li{&:not(:last-child){margin-bottom:10px;}& span:not(:last-child){margin-right:10px;}}"}),q=function(e){var t=e.contacts;return Object(x.jsx)(z,{children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(x.jsxs)("li",{children:[Object(x.jsx)("p",{children:n}),Object(x.jsx)("p",{children:a})]},t)}))})},H=function(e){e.value;var t=e.onChange;return Object(x.jsx)("input",{type:"text",name:"name",placeholder:"Filter by name",onChange:t,required:!0})},J=n(18),N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:J,filter:""},e.formHandleSubmit=function(t){var n=t.name,a=(t.id,t.number),r={id:Object(m.a)(),name:n,number:a};e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{contacts:[].concat(Object(s.a)(e.contacts),[r])})}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(x.jsxs)(w,{children:[Object(x.jsx)("h2",{children:"Phonebook"}),Object(x.jsx)(S,{onSubmit:this.formHandleSubmit}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(H,{value:e,onChange:this.changeFilter}),Object(x.jsx)(q,{contacts:t})]})}}]),n}(r.Component);o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5b46a706.chunk.js.map