(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(14),n(1)),i=n(2),u=n(4),s=n(3),m=n(5),h=(n(16),r.a.createContext()),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"mike",age:100,hair:"red"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.Provider,{value:{state:this.state,growYearOlder:function(){console.log("click"),e.setState({age:e.state.age+1})}}},this.props.children)}}]),t}(a.Component),d=function(e){return r.a.createElement("div",{className:"family"},r.a.createElement(f,null))},f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"person"},r.a.createElement(h.Consumer,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"name: ",e.state.name),r.a.createElement("p",null,"hair: ",e.state.hair),r.a.createElement("p",null,"age: ",e.state.age),r.a.createElement("button",{onClick:e.growYearOlder},"\ud83c\udf82"))}))}}]),t}(a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement("h1",null,"React Context API Test"),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.1fb29ffa.chunk.js.map