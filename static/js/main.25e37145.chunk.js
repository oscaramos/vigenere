(this.webpackJsonpvigenere=this.webpackJsonpvigenere||[]).push([[0],{181:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=n(38),l=n(221),s=n(218),u=n(223),m=n(220),d=n(62),f=n(226),g=n(225),h=n(227),p=n(224);function v(e){return r.a.createElement(f.a,null,r.a.createElement(g.a,{value:e.value,onChange:e.onChange},r.a.createElement(s.a,{container:!0,direction:"row"},r.a.createElement(s.a,{item:!0},r.a.createElement(h.a,{value:"encrypt",control:r.a.createElement(p.a,{color:"primary"}),label:"encrypt"})),r.a.createElement(s.a,{item:!0},r.a.createElement(h.a,{value:"decrypt",control:r.a.createElement(p.a,{color:"primary"}),label:"decrypt"})))))}var b=n(219);function w(e){return r.a.createElement(b.a,{className:e.classes.output,elevation:0},r.a.createElement(s.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(s.a,{item:!0},r.a.createElement("div",{style:{fontSize:"1.5rem",fontWeight:700,marginBottom:"0.7em"}},"Your encrypted message")),r.a.createElement(s.a,{item:!0},e.resultText)))}var E=Object(m.a)((function(){return{"@global":{html:{backgroundColor:"#f2f9f9",fontFamily:"arial"}},input:{width:"30em",backgroundColor:"white"},output:{width:"35em",height:"15em",backgroundColor:"white",border:"1px solid rgb(196, 196, 196)",padding:"2em"}}}));var y=function(){var e=Object(a.useState)("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(""),m=Object(c.a)(i,2),f=m[0],g=m[1],h=Object(a.useState)("fortuna"),p=Object(c.a)(h,2),b=p[0],y=p[1],k=Object(a.useState)("encrypt"),C=Object(c.a)(k,2),O=C[0],j=C[1],W=E();return Object(a.useEffect)((function(){g("encrypt"===O?function(e,t){return Object(d.encrypt)(e.toLowerCase(),t.toLowerCase())}(n,b):function(e,t){return Object(d.decrypt)(e.toLowerCase(),t.toLowerCase())}(n,b))}),[n,b,O]),r.a.createElement(l.a,{maxWidth:"sm"},r.a.createElement(s.a,{container:!0,direction:"column",spacing:3,alignItems:"center"},r.a.createElement(s.a,{item:!0},r.a.createElement("div",{style:{fontSize:"2rem",paddingTop:"2em",fontWeight:700}},"Vigenere encription")),r.a.createElement(s.a,{item:!0},r.a.createElement(u.a,{value:n,multiline:!0,fullWidth:!0,onChange:function(e){return o(e.target.value)},variant:"outlined",className:W.input,rows:8})),r.a.createElement(s.a,{item:!0},r.a.createElement(v,{value:O,onChange:function(e){return j(e.target.value)}})),r.a.createElement(s.a,{item:!0},r.a.createElement(u.a,{value:b,onChange:function(e){return y(e.target.value)},variant:"outlined",label:"Secret key",style:{backgroundColor:"white"}})),r.a.createElement(s.a,{item:!0},r.a.createElement(w,{classes:W,resultText:f}))))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var O=n(87),j=n.n(O)()({overrides:{MuiOutlinedInput:{root:{"&$focused $notchedOutline":{borderColor:"black",borderWidth:1},"&:hover":{border:"1px solid black",borderRadius:"5px"}}}}}),W=n(222);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W.a,{theme:j},r.a.createElement(y,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/vigenere",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/vigenere","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()},93:function(e,t,n){e.exports=n(181)}},[[93,1,2]]]);
//# sourceMappingURL=main.25e37145.chunk.js.map