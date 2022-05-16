(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: 100vh;\n}\n\n#actions-bar {\n    padding: 1rem;\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n    justify-items: start;\n    align-items: start;\n    gap: 1rem;\n\n    color: rgb(247, 174, 174);\n    background-color: rgb(41, 41, 49);\n    border-right-width: 2px;\n    border-right-style: solid;\n    border-image: linear-gradient(rgb(255, 86, 227), rgba(214, 0, 214, 0.747)) 1;\n}\n\n#new-book,\n.submit-button {\n    margin-bottom: 1rem;\n    padding: 8px;\n    border-style: none;\n    border-radius: 6px;\n    background-color: rgb(247, 174, 174);\n    color: rgb(41, 41, 49);\n    font-weight: 800;\n}\n\n#new-book:hover,\n.submit-button:hover {\n    cursor: pointer;\n    filter: brightness(0.8);\n}\n\n#new-book-form {\n    display: grid;\n    gap: 0.5rem;\n}\n\ninput {\n    border-radius: 6px;\n}\n\nspan {\n    width:  14rem;\n}\n\nlabel,\n.read-status {\n    font-weight: 600;\n    padding-bottom: 0.2rem;\n}\n\n.radio-buttons {\n    display: grid;\n    gap: 0.5rem;\n}\n\n#shelf {\n    background-color: rgb(202, 187, 187);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    gap: 1rem;\n}\n\n#shelf>div {\n    color: rgb(160, 26, 104);\n    background-color: rgb(255, 245, 245);\n    border: 4px solid purple;\n    border-radius: 8px;\n    padding: 0.8rem;\n}\n\n#shelf>div button {\n    margin: 0.4rem;\n    margin-top: 1rem;\n    padding: 8px;\n    border-style: none;\n    border-radius: 6px;\n    background-color: purple;\n    color: rgb(247, 174, 174);\n    font-weight: 800;\n}\n\n#shelf>div button:hover {\n    cursor: pointer;\n    filter: brightness(1.4);\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],l=r.base?d[0]+r.base:d[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),d=n.n(s),l=n(216),c=n.n(l),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let h=[];class g{constructor(e,t,n,r){this.Title=e,this.Author=t,this.Pages=n,this.Status=r}static form=document.querySelector("#new-book-form").addEventListener("submit",(function(e){/^\d+$/.test(C.value)&&null!=document.querySelector('input[name="status"]:checked')?(function(e){let t=new g(e.title.value,e.author.value,e.pages.value,document.querySelector("input[type=radio]:checked").value);for(e.reset(),h.push(t);shelf.firstChild;)shelf.removeChild(shelf.firstChild);t.addToShelf()}(this),e.preventDefault(),b.textContent=""):(y.validity.valueMissing?b.textContent="Please fill in the book title.":x.validity.valueMissing?b.textContent="Please fill in the author name.":C.validity.valueMissing?b.textContent="Please fill in the number of pages.":!1===/^\d+$/.test(C.value)?b.textContent="Please fill in a valid number of pages.":null===document.querySelector('input[name="status"]:checked')&&(b.textContent="Please select the reading status."),e.preventDefault())}));static shelf=document.getElementById("shelf");updateDisplay(){for(;shelf.firstChild;)shelf.removeChild(shelf.firstChild);this.addToShelf()}addToShelf(){h.forEach((e=>{const t=document.createElement("div");for(const n in e){const r=document.createElement("div");r.innerText=`${n}: ${e[n]}`,t.appendChild(r)}shelf.appendChild(t);const n=document.createElement("button");n.textContent="Update Status",n.addEventListener("click",(()=>{const t=h.indexOf(e);"read"===h[t].Status?h[t].Status="unread":"unread"===h[t].Status?h[t].Status="reading":"reading"===h[t].Status&&(h[t].Status="read"),this.updateDisplay()})),t.appendChild(n);const r=document.createElement("button");r.textContent="Delete",r.addEventListener("click",(()=>{const t=h.indexOf(e);h.splice(t,1),this.updateDisplay()})),t.appendChild(r)}))}}const v=document.getElementById("new-book-form");v.style.display="none",document.getElementById("new-book").addEventListener("click",(()=>{"none"===v.style.display?v.style.display="grid":v.style.display="none"}));const b=document.getElementById("error-message"),y=document.getElementById("title"),x=document.getElementById("author"),C=document.getElementById("pages")})()})();