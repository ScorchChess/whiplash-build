(this["webpackJsonptoastie-results"]=this["webpackJsonptoastie-results"]||[]).push([[0],{15:function(e,t,n){},29:function(e,t,n){e.exports=n(57)},34:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(25),o=n.n(r),c=(n(34),n(26)),i=n(6),u=n(8),s=(n(15),n(10)),d=n.n(s),m=function(){};function h(e){return e=Object.assign(e,{method:"GET"}),d()(e).then((function(e){return e.data})).catch((function(e){var t;throw console.error(e),e.response&&m([e.response.status,e.response.statusText,":","/"+(null===(t=e.response.config.url)||void 0===t?void 0:t.split("/").pop())].join(" ")),e}))}function v(e){var t=e.match.params.id,n=Object(a.useState)({}),r=Object(u.a)(n,2),o=(r[0],r[1],Object(a.useState)({})),c=Object(u.a)(o,2),i=(c[0],c[1],Object(a.useState)({})),s=Object(u.a)(i,2),d=s[0],m=s[1],v=Object(a.useState)([]),E=Object(u.a)(v,2),f=E[0],b=E[1],p=Object(a.useState)([]),g=Object(u.a)(p,2),j=g[0],O=g[1];Object(a.useEffect)((function(){h({url:"/tournament/"+t+"/fetchPlayers"}).then(b),h({url:"/tournament/"+t+"/getPairings"}).then(O),h({url:"/tournament/"+t+"/getState"}).then(m)}),[O,b]);var w=d.round;return l.a.createElement("div",{id:"main"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,d.name),l.a.createElement("section",null,l.a.createElement("h2",null,"Pairings"),l.a.createElement("table",{className:"download-table full-width"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"White"),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,"Black"))),l.a.createElement("tbody",null,j.map((function(e){var t,n,a,r,o=f.find((function(t){return t.id===e[0]})),c=f.find((function(t){return t.id===e[1]}));return l.a.createElement("tr",null,l.a.createElement("td",null,null===o||void 0===o?void 0:o.firstName),l.a.createElement("td",{className:(null===c||void 0===c||null===(t=c.histories[w])||void 0===t?void 0:t.game)?"bold":""},null===o||void 0===o||null===(n=o.histories[w])||void 0===n?void 0:n.game),l.a.createElement("td",null),l.a.createElement("td",{className:(null===c||void 0===c||null===(a=c.histories[w])||void 0===a?void 0:a.game)?"bold":""},null===c||void 0===c||null===(r=c.histories[w])||void 0===r?void 0:r.game),l.a.createElement("td",null,null===c||void 0===c?void 0:c.firstName))})))))))}d.a.defaults.baseURL="https://api.oxfordchess.co.uk/";var E=function(){return l.a.createElement(c.a,null,l.a.createElement(i.a,{render:function(e){var t=e.location;return l.a.createElement(i.c,{location:t},l.a.createElement(i.a,{exact:!0,path:"/tournament/:id/",render:function(e){return l.a.createElement(v,e)}}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.d582c2f9.chunk.js.map