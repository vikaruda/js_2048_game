parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ir8I":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return i(t)||r(t)||a(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function i(t){if(Array.isArray(t))return u(t)}function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=a(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw o}}}}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function c(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(e){var n=h(e,"string");return"symbol"==t(n)?n:n+""}function h(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,n||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var d=function(){return c(function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];l(this,t),this.initialState=e,this.score=0},[{key:"moveLeft",value:function(){var t,n=!1,r=o(this.initialState);try{var i=function(){for(var r=t.value,i=r.filter(function(t){return 0!==t}),o=0;o<i.length-1;o++)i[o]===i[o+1]&&(i[o]<256?i[o]*=2:i[o]+=i[o],i[o+1]=0,n=!0);var a=(i=i.filter(function(t){return 0!==t})).concat(Array(r.length-i.length).fill(0));a.some(function(t,e){return t!==r[e]})&&(n=!0),r.length=0,r.push.apply(r,e(a))};for(r.s();!(t=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}n&&(this.addRandomOneNumber(),this.addScore(10))}},{key:"moveRight",value:function(){var t,n=!1,r=o(this.initialState);try{var i=function(){for(var r=t.value,i=r.filter(function(t){return 0!==t}),o=i.length-1;o>0;o--)i[o]===i[o-1]&&(i[o]<256?i[o]*=2:i[o]+=i[o],i[o-1]=0,n=!0);i=i.filter(function(t){return 0!==t});var a=Array(r.length-i.length).fill(0).concat(i);r.every(function(t,e){return t===a[e]})||(n=!0),r.length=0,r.push.apply(r,e(a))};for(r.s();!(t=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}n&&(this.addRandomOneNumber(),this.addScore(10))}},{key:"moveUp",value:function(){for(var t=this,e=!1,n=function(n){for(var r=t.initialState.map(function(t){return t[n]}).filter(function(t){return 0!==t}),i=0;i<r.length-1;i++)r[i]===r[i+1]&&(r[i]<256?r[i]*=2:r[i]+=r[i],r[i+1]=0,e=!0);for(var o=(r=r.filter(function(t){return 0!==t})).concat(Array(t.initialState.length-r.length).fill(0)),a=0;a<t.initialState.length;a++)t.initialState[a][n]!==o[a]&&(e=!0),t.initialState[a][n]=o[a]},r=0;r<this.initialState[0].length;r++)n(r);e&&(this.addRandomOneNumber(),this.addScore(10))}},{key:"moveDown",value:function(){for(var t=this,e=!1,n=function(n){for(var r=t.initialState.map(function(t){return t[n]}).filter(function(t){return 0!==t}),i=r.length-1;i>0;i--)r[i]===r[i-1]&&(r[i]<256?r[i]*=2:r[i]+=r[i],r[i-1]=0,e=!0);r=r.filter(function(t){return 0!==t});for(var o=Array(t.initialState.length-r.length).fill(0).concat(r),a=0;a<t.initialState.length;a++)t.initialState[a][n]=o[a],e=!0},r=0;r<this.initialState[0].length;r++)n(r);e&&(this.addRandomOneNumber(),this.addScore(10))}},{key:"getScore",value:function(){return this.score}},{key:"addScore",value:function(t){this.score+=t}},{key:"getState",value:function(){return this.initialState}},{key:"getStatus",value:function(){if(this.initialState.some(function(t){return t.includes(2048)})){var t=document.querySelector(".message.message-win.hidden");t&&(t.classList.remove("hidden"),t.textContent="You winner",document.body.append(t))}var e=this.checkLose(),n=document.querySelector(".message.message-lose.hidden");"Lose"===e?n&&(n.classList.remove("hidden"),n.textContent="You lose"):n&&n.classList.add("hidden")}},{key:"restart",value:function(){this.resetArrayToZero(this.initialState),this.state=e(this.initialState),this.addRandomNumber(),this.score=0}},{key:"start",value:function(){this.state=e(this.initialState),this.addRandomNumber()}},{key:"checkLose",value:function(){var t=this;return this.initialState.every(function(t){return t.every(function(t){return 0!==t})})?this.initialState.some(function(e,n){return e.some(function(e,r){return t.canMerge(n,r)})})?"Continue":"Lose":"Continue"}},{key:"canMerge",value:function(t,e){var n=this.initialState[t][e];return t>0&&this.initialState[t-1][e]===n||t<this.initialState.length-1&&this.initialState[t+1][e]===n||e>0&&this.initialState[t][e-1]===n||e<this.initialState[t].length-1&&this.initialState[t][e+1]===n}},{key:"addRandomNumber",value:function(){var t=[];this.state.forEach(function(e,n){e.forEach(function(e,r){0===e&&t.push({rowIndex:n,colIndex:r})})});for(var e=0;e<2;e++){var n=Math.floor(Math.random()*t.length),r=t[n],i=r.rowIndex,o=r.colIndex;this.state[i][o]=2,t.splice(n,1)}}},{key:"addRandomOneNumber",value:function(){var t=[];this.state.forEach(function(e,n){e.forEach(function(e,r){0===e&&t.push({rowIndex:n,colIndex:r})})});for(var e=0;e<1;e++){var n=Math.floor(Math.random()*t.length),r=t[n],i=r.rowIndex,o=r.colIndex;this.state[i][o]=2,t.splice(n,1)}}},{key:"resetArrayToZero",value:function(t){for(var e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++)t[e][n]=0}}])}();module.exports=d;
},{}],"6KIz":[function(require,module,exports) {
"use strict";var e=require("../modules/Game.class"),t=new e,l=document.querySelector("button"),r=document.querySelectorAll(".field-cell"),c=document.querySelector(".game-score"),s=document.querySelector(".message.message-lose"),a=document.querySelector(".message-container"),o=0;function n(e){r.forEach(function(e){e.textContent="",e.classList.remove("field-cell--2","field-cell--4","field-cell--8","field-cell--16","field-cell--32","field-cell--64","field-cell--128","field-cell--256","field-cell--512","field-cell--1024","field-cell--2048")}),e.forEach(function(e,t){e.forEach(function(e,l){var c=r[4*t+l];0!==e&&(c.textContent=e,c.classList.add("field-cell--".concat(e)))})})}l.addEventListener("click",function(e){if("BUTTON"===e.target.tagName){if(o++,l.classList.add("start"),1===o)t.start(),n(t.state),document.querySelector(".message.message-start").classList.add("hidden");o>1&&(a.contains(s)?s.classList.add("hidden"):a.append(s),t.restart(),n(t.state),c.textContent=0)}}),document.addEventListener("keydown",function(e){if(e){switch("ArrowRight"!==e.key&&"ArrowLeft"!==e.key&&"ArrowUp"!==e.key&&"ArrowDown"!==e.key||(l.classList.remove("start"),l.classList.add("restart"),l.textContent="Restart"),e.key){case"ArrowRight":t.moveRight();break;case"ArrowLeft":t.moveLeft();break;case"ArrowUp":t.moveUp();break;case"ArrowDown":t.moveDown();break;default:return}n(t.state),c.textContent=t.getScore(),t.getStatus()}});
},{"../modules/Game.class":"Ir8I"}]},{},["6KIz"], null)
//# sourceMappingURL=main.15669786.js.map