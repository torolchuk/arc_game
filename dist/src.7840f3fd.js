parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.getRndInteger=function(e,t){return Math.floor(Math.random()*(t-e))+e},t=exports.getRandomTrueFalse=function(t){return e(0,t)===t-1},r=exports.hexToRgbCode=function(e){var t=e.substring(1).split("");return 3==t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")},o=exports.COLOR_SCHEME=Object.freeze(["#FFFF00","#2AD689","#F3FF3F","#0D5C63","#247B7B","#44A1A0"]),n=exports.getRandomColorCode=function(){return o[e(0,o.length)]};
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.GRAVITY_VECTOR={x:0,y:.25},E=exports.TILESIZE=48,T=exports.CIRCLE_LENGTH=2*Math.PI,t=exports.TIMESTAMP_CORRECTION=900,r=exports.OBJECTS_TYPES=Object.freeze({ENEMY:"ENEMY",BULLET:"BULLET",PARTICLE:"PARTICLE"});
},{}],12:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Drawer=void 0;var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),e=require("../_const.js"),n=require("../functions/helpers.js");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=exports.Drawer=function(){function o(t){i(this,o),this.element=t,this.context=t.getContext("2d")}return t(o,[{key:"clear",value:function(){this.context.save(),this.context.fillStyle="rgba("+(0,n.hexToRgbCode)("#333")+", .5)",this.context.fillRect(0,0,this.element.width,this.element.height),this.context.restore()}},{key:"drawMe",value:function(t,e,n){this.context.save(),this.context.fillStyle=n,this.context.fillRect(t.x-e/2,t.y-e/2,e,e),this.context.restore()}},{key:"drawMeCircle",value:function(t,n,i){n<0||(this.context.fillStyle=i,this.context.beginPath(),this.context.arc(t.x,t.y,n,0,e.CIRCLE_LENGTH),this.context.fill())}},{key:"line",value:function(t,e,n,i){n<0||(this.context.beginPath(),this.context.moveTo(t.x,t.y),this.context.lineTo(e.x,e.y),this.context.stroke())}},{key:"fillText",value:function(t,e,n,i){this.context.save(),this.context.textAlign="center",this.context.textBaseline="middle",this.context.fillStyle=n,this.context.font=i+"px Helvetica",this.context.fillText(e,t.x,t.y),this.context.restore()}},{key:"fillTile",value:function(t,e){this.context.drawImage(e,t.x,t.y)}}]),o}();
},{"../_const.js":11,"../functions/helpers.js":6}],15:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t){return+Number(t).toFixed(2)},e=exports.summVectors=function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0};return{x:t(e.x+r.x+o.x),y:t(e.y+r.y+o.y)}},r=exports.substractVectors=function(e,r){return{x:t(e.x-r.x),y:t(e.y-r.y)}},o=exports.multipleVectorByCoef=function(e,r){return{x:t(e.x*r),y:t(e.y*r)}},n=exports.decriceVectorByCoef=function(e,r){return{x:t(e.x/r),y:t(e.y/r)}},x=exports.fixPointsToOneSystem=function(t,e){return{a:{x:0,y:0},b:r(e,t)}},u=exports.getAngleByTwoPoints=function(t,e){var r=x(t,e);r.a,r.b},s=exports.getVectorLength=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))};
},{}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Particle=void 0;var t=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),e=require("../_const.js"),i=require("../functions/helpers.js"),s=require("../functions/vectors.js");function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=exports.Particle=function(){function o(t){var e=t.pos,s=t.lifetime,n=t.parrent,h=t.vector,a=t.size,c=t.color;r(this,o),this.pos=e,this.vector=h||{x:4*Math.random()-2,y:4*Math.random()-2},this.size=a||5,this.color=(0,i.hexToRgbCode)(c||(0,i.getRandomColorCode)()),this.fillCode="",this.lifestamp=0,this.lifetime=s,this.borntime=(new Date).getTime(),this.deathtime=this.borntime+s,this.parrent=n}return t(o,[{key:"draw",value:function(t){t.drawMeCircle(this.pos,this.size*(1-this.lifestamp),this.fillCode)}},{key:"tick",value:function(t){this.lifestamp=(t-this.borntime)/this.lifetime,this.pos.y>this.parrent.element.height&&(this.vector.y=-1*this.vector.y/2),this.vector=(0,s.summVectors)(this.vector,e.GRAVITY_VECTOR),this.pos=(0,s.summVectors)(this.pos,this.vector),this.fillCode="rgba("+this.color+", "+(1-this.lifestamp)+")",this.lifestamp>1&&this.parrent.deleteObject(this)}}]),o}();
},{"../_const.js":11,"../functions/helpers.js":6,"../functions/vectors.js":15}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=exports.KeyboardEventBinder=function(){function n(){t(this,n),this.listeners={},this.pushedKey=new Set,window.addEventListener("keydown",this),window.addEventListener("keyup",this)}return e(n,[{key:"register",value:function(e,t){var n=this;e.forEach(function(e){n.listeners[e]||(n.listeners[e]=new Set),n.listeners[e].add(t)})}},{key:"handleEvent",value:function(e){if(e.preventDefault(),"keydown"===e.type){if(this.pushedKey.has(e.keyCode))return;this.pushedKey.add(e.keyCode)}else"keyup"===e.type&&this.pushedKey.delete(e.keyCode);this.listeners[e.keyCode]&&this.listeners[e.keyCode].forEach(function(t){t(e)})}}]),n}();
},{}],28:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=exports.BasicObject=function(){function r(e){var n=e.pos,i=e.color,o=e.size,u=e.parrent;t(this,r),this.pos=n,this.parrent=u,this.color=i,this.size=o}return e(r,[{key:"tick",value:function(){return null}},{key:"draw",value:function(e){e.drawMeCircle(this.pos,this.size,this.color)}},{key:"deleteSelf",value:function(){return null}}]),r}();
},{}],14:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Enemy=void 0;var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),t=require("../core/basic-object"),r=require("../functions/vectors"),o=require("../functions/helpers"),n=require("../_const");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=exports.Enemy=function(u){function a(e){var t=e.pos,r=e.size,n=e.parrent,c=e.deathPoint;i(this,a);var u=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,{pos:t,size:r,color:(0,o.getRandomColorCode)()}));return u.parrent=n,u.deathPoint=c,u.vector={x:0,y:(0,o.getRndInteger)(10,30)/10},u}return c(a,t.BasicObject),e(a,[{key:"tick",value:function(e){this.pos=(0,r.summVectors)(this.pos,this.vector),this.vector=(0,r.summVectors)(this.vector,{x:0,y:.05}),this.pos.y>this.deathPoint&&this.parrent.deleteObject(n.OBJECTS_TYPES.ENEMY,this)}}]),a}();
},{"../core/basic-object":28,"../functions/vectors":15,"../functions/helpers":6,"../_const":11}],16:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FloatingDot=void 0;var t=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),e=require("../functions/helpers"),i=require("../_const"),s=require("../functions/vectors");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=exports.FloatingDot=function(){function r(t){var i=t.pos,s=t.parrent;o(this,r),this.pos=i,this.vector={x:0,y:0},this.color=(0,e.getRandomColorCode)(),this.deathTime=(new Date).getTime()+5e3,this.parrent=s||null,this.size=0,this.initialSize=this.size,this.floatOffset=50*Math.random()*100,this.mousePos=null}return t(r,[{key:"tick",value:function(t){this.size+=1;var e=(t+this.floatOffset)/i.TIMESTAMP_CORRECTION;this.vector=(0,s.summVectors)({x:Math.cos(e)/4,y:Math.sin(e)/4},i.GRAVITY_VECTOR),this.pos=(0,s.summVectors)(this.pos,this.vector),this.deathTime<t&&this.parrent.deleteObject(this)}},{key:"draw",value:function(t){t.drawMeCircle(this.pos,this.size,this.color)}}]),r}();
},{"../functions/helpers":6,"../_const":11,"../functions/vectors":15}],30:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=exports.ObjectRegister=function(){function r(){t(this,r),this.register=[]}return e(r,[{key:"add",value:function(e){this.register.push(e)}},{key:"remove",value:function(e){this.register=this.register.filter(function(t){return t!==e})}},{key:"get",value:function(){return this.register}},{key:"update",value:function(e){this.register.forEach(function(t){t.tick&&t.tick(e)})}},{key:"draw",value:function(e){this.register.forEach(function(t){t.draw&&t.draw(e)})}}]),r}();
},{}],17:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RegistersOwner=void 0;var e=function(){function e(e,r){for(var t=0;t<r.length;t++){var s=r[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(r,t,s){return t&&e(r.prototype,t),s&&e(r,s),r}}(),r=require("./objects-register");function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var s=exports.RegistersOwner=function(){function s(){t(this,s),this.registersMap={}}return e(s,[{key:"add",value:function(e,t){this.registersMap[e]||(this.registersMap[e]=new r.ObjectRegister),this.registersMap[e].add(t)}},{key:"remove",value:function(e,r){this.registersMap[e]&&this.registersMap[e].remove(r)}},{key:"get",value:function(e){return this.registersMap[e]?this.registersMap[e].get():null}},{key:"update",value:function(e){for(var r in this.registersMap)this.registersMap[r].update(e)}},{key:"draw",value:function(e){var r=this;Object.keys(this.registersMap).forEach(function(t){r.registersMap[t].draw(e)})}}]),s}();
},{"./objects-register":30}],29:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Bullet=void 0;var e=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),t=require("../core/basic-object"),r=require("../functions/vectors"),o=require("../_const");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=exports.Bullet=function(s){function u(e){var t=e.pos,r=e.parrent;n(this,u);var o=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,{pos:t,color:"#fff",size:2,parrent:r}));return o.vector={x:0,y:-2},o}return c(u,t.BasicObject),e(u,[{key:"tick",value:function(e){this.pos=(0,r.summVectors)(this.pos,this.vector),this.vector=(0,r.summVectors)(this.vector,{x:0,y:-.2}),this.pos.y<0&&this.deleteSelf()}},{key:"deleteSelf",value:function(){this.parrent.deleteObject(o.OBJECTS_TYPES.BULLET,this)}}]),u}();
},{"../core/basic-object":28,"../functions/vectors":15,"../_const":11}],18:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Player=exports.DODGE_DURATION=exports.DEFAULT_DODGE_STATE=void 0;var t=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),e=require("../core/basic-object.js"),r=require("../functions/vectors.js"),o=require("./bullet.js"),i=require("../_const.js");function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=exports.DEFAULT_DODGE_STATE=Object.freeze({active:!1,startTimestamp:null,startPos:null,vector:{x:0,y:0}}),h=exports.DODGE_DURATION=1e3,u=exports.Player=function(u){function p(t){var e=t.pos,r=t.color,o=t.parrent;s(this,p);var i=n(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,{pos:e,color:r,size:10}));return i.movingDir=0,i.vector={x:0,y:0},i.floor=e.y+40,i.dodgeState=Object.assign({},c),i.parrent=o,i.init(),i}return a(p,e.BasicObject),t(p,[{key:"init",value:function(){this.parrent.keyboardEventBinder.register([65,68,32,16],this.keyboardHandler.bind(this))}},{key:"keyboardHandler",value:function(t){if("keydown"===t.type)switch(t.keyCode){case 65:this.movingDir-=1;break;case 68:this.movingDir+=1;break;case 32:this.parrent.createObject(i.OBJECTS_TYPES.BULLET,new o.Bullet({pos:Object.assign({},this.pos),parrent:this.parrent}));break;case 16:this.activateDodge()}else if("keyup"===t.type)switch(t.keyCode){case 65:this.movingDir+=1;break;case 68:this.movingDir-=1}}},{key:"activateDodge",value:function(){this.dodgeState.active||(this.dodgeState.startPos=Object.assign({},this.pos),this.dodgeState.active=!0,this.dodgeState.startTimestamp=(new Date).getTime(),this.dodgeState.vector={x:16*this.movingDir,y:0})}},{key:"updateDodge",value:function(t){this.dodgeState.active&&(this.dodgeState.vector=(0,r.decriceVectorByCoef)(this.dodgeState.vector,1.2),this.dodgeState.startTimestamp+h<t&&(this.dodgeState=Object.assign({},c)))}},{key:"draw",value:function(t){t.drawMeCircle(this.pos,this.size,this.color)}},{key:"tick",value:function(t){this.updateDodge(t),this.pos=(0,r.summVectors)((0,r.summVectors)(this.pos,this.vector),this.dodgeState.vector),this.pos.x>this.parrent.element.width?this.pos.x=0:this.pos.x<0&&(this.pos.x=this.parrent.element.width),1===this.movingDir&&this.vector.x<4?this.vector=(0,r.summVectors)(this.vector,{x:.1,y:0}):-1===this.movingDir&&this.vector.x>-4?this.vector=(0,r.summVectors)(this.vector,{x:-.1,y:0}):0===this.movingDir&&(this.vector.x>0?this.vector=(0,r.summVectors)(this.vector,{x:-.1,y:0}):this.vector.x<0&&(this.vector=(0,r.summVectors)(this.vector,{x:.1,y:0})))}}]),p}();
},{"../core/basic-object.js":28,"../functions/vectors.js":15,"./bullet.js":29,"../_const.js":11}],7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Owner=void 0;var e=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),t=require("./drawer"),i=require("./particle"),r=require("./keyboard-event-binder.js"),n=require("../functions/helpers"),s=require("../objects/enemy"),o=require("../functions/vectors"),a=require("../objects/floating-dot"),l=require("./registers-owner"),c=require("../_const"),h=require("../objects/player");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f=exports.Owner=function(){function f(e){u(this,f),this.element=e,this.objectsRegister=new l.RegistersOwner,this.drawer=new t.Drawer(this.element),this.lastFrameTime=(new Date).getTime(),this.keyboardEventBinder=new r.KeyboardEventBinder,this.score=0,this.player=new h.Player({pos:{x:this.element.width/2,y:this.element.height-40},color:(0,n.getRandomColorCode)(),parrent:this}),this.ongoing=!0,this.init()}return e(f,[{key:"init",value:function(){this.tick()}},{key:"checkPlayerCollissions",value:function(){var e=this,t=this.objectsRegister.get(c.OBJECTS_TYPES.ENEMY);t&&t.forEach(function(t){(0,o.getVectorLength)(e.player.pos,t.pos)<e.player.size+t.size&&(e.ongoing=!1)})}},{key:"checkBulletCollisions",value:function(){var e=this,t=this.objectsRegister.get(c.OBJECTS_TYPES.ENEMY),i=this.objectsRegister.get(c.OBJECTS_TYPES.BULLET);null!==t&&null!==i&&i.forEach(function(i){t.forEach(function(t){(0,o.getVectorLength)(i.pos,t.pos)<i.size+t.size&&(i.deleteSelf(),t.deleteSelf(),e.score+=1,e.spamParticles(i.pos,4))})})}},{key:"deleteObject",value:function(e,t){this.objectsRegister.remove(e,t)}},{key:"createObject",value:function(e,t){this.objectsRegister.add(e,t)}},{key:"createEnemy",value:function(){if((0,n.getRandomTrueFalse)(10)){var e=new s.Enemy({pos:{x:(0,n.getRndInteger)(0,this.element.width),y:-5},size:5,color:n.getRandomColorCode,parrent:this,deathPoint:this.element.height+5});this.createObject(c.OBJECTS_TYPES.ENEMY,e)}}},{key:"tick",value:function(){var e=(new Date).getTime();if(this.drawer.clear(),this.ongoing)this.createEnemy(),this.objectsRegister.update(e),this.objectsRegister.draw(this.drawer),this.player.tick(e),this.player.draw(this.drawer),this.checkPlayerCollissions(),this.checkBulletCollisions();else if(this.drawer.fillText({x:this.element.width/2,y:this.element.height/2},"YOU DIED","#fff",90),(0,n.getRandomTrueFalse)(10)){var t=new a.FloatingDot({pos:{x:(0,n.getRndInteger)(0,this.element.width),y:(0,n.getRndInteger)(0,this.element.height)},parrent:this});this.createObject(c.OBJECTS_TYPES.PARTICLE,t)}this.drawer.fillText({x:this.element.width/2,y:40},"SCORE: "+Math.ceil(this.score),"#fff",16),requestAnimationFrame(this.tick.bind(this))}},{key:"spamParticles",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=0;r<t;r++){var n=new i.Particle({pos:e,lifetime:2e3,parrent:this});this.createObject(c.OBJECTS_TYPES.PARTICLE,n)}}}]),f}();
},{"./drawer":12,"./particle":13,"./keyboard-event-binder.js":10,"../functions/helpers":6,"../objects/enemy":14,"../functions/vectors":15,"../objects/floating-dot":16,"./registers-owner":17,"../_const":11,"../objects/player":18}],4:[function(require,module,exports) {
"use strict";var e=require("./functions/helpers.js"),n=require("./core/owner.js"),i=document.querySelector("canvas");i.height=window.innerHeight,window.addEventListener("resize",function(){i.height=window.innerHeight}),window,new n.Owner(i);
},{"./functions/helpers.js":6,"./core/owner.js":7}]},{},[4], null)
//# sourceMappingURL=src.7840f3fd.map