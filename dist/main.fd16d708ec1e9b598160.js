"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

:root {
  --bg:\$white;
  --text-color:\$black; }

.dark-theme {
  --bg:\$black;
  --text-color:\$grey; }

body {
  width: 100vw;
  min-height: 100vh;
  background-color: var(--bg);
  color: var(--text-color);
  font-family: "Poppins", sans-serif, sans-serif; }

header {
  background-color: #0d3b6b;
  padding-right: 3rem; }

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0rem;
  padding: 0 0.8rem; }
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem; }
  nav a {
    text-decoration: none;
    color: inherit; }
    nav a:hover {
      color: #FFFFFF; }
    nav a:active {
      border-bottom: 2px solid #FFFFFF; }
  nav .icon {
    display: none; }

section .theme {
  width: 2rem;
  height: 0.5rem;
  border-radius: 0.8rem;
  transition: all 0.2s ease-in;
  background-color: white;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 0rem;
  transition: all 0.2s ease-in; }

section .theme-switcher {
  width: 0.9rem;
  height: 0.9rem;
  background-color: #0d3b6b;
  border-radius: 50%; }

button {
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #104882;
  color: #FFFFFF;
  cursor: pointer; }
  button:hover {
    color: #104882;
    background-color: #FFFFFF; }

.end {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  justify-content: start; }

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0rem; }
  main div {
    max-width: 35rem;
    padding: 2rem;
    background-color: rgba(13, 59, 107, 0.05);
    border-radius: 1rem; }

@media (max-width: 768px) {
  .end button, .end ul {
    display: none; }
  nav .icon {
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0rem; }
    nav .icon svg:first-child {
      display: block; }
    nav .icon svg:last-child {
      display: none; } }

footer {
  background-color: #0d3b6b;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0rem; }
`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAaA;EACI,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAE1B;EACI,WAAK;EACL,mBAAa,EAAA;;AAEjB;EACI,WAAK;EACL,kBAAa,EAAA;;AAEjB;EACI,YAAY;EACZ,iBAAiB;EAEjB,2BAA2B;EAC3B,wBAAwB;EACxB,8CAAgC,EAAA;;AASpC;EACK,yBAjCW;EAkCX,mBAAmB,EAAA;;AAExB;EAVI,aAAa;EACb,mBAFyC;EAGzC,8BASiC;EARjC,mBAAmB;EACnB,SAOkB;EAClB,iBAAiB,EAAA;EAFrB;IAKQ,SAAS;IACT,UAAU;IACV,gBAAgB;IAjBpB,aAAa;IACb,mBAFyC;IAGzC,8BAgBoC;IAfpC,mBAAmB;IACnB,SAcsB,EAAA;EAR1B;IAYQ,qBAAqB;IACrB,cAAc,EAAA;IAbtB;MAeY,cAvDG,EAAA;IAwCf;MAkBY,gCA1DG,EAAA;EAwCf;IAsBQ,aAAa,EAAA;;AAGrB;EAEI,WAAU;EACV,cAAc;EACd,qBAAqB;EACrB,4BAA4B;EAC5B,uBAAsC;EACvC,YAAY;EA1CX,aAAa;EACb,mBAFyC;EAGzC,sBAyCuB;EAxCvB,mBAAmB;EACnB,SAuCiB;EAClB,4BAA4B,EAAA;;AAT/B;EAaK,aAAY;EACZ,cAAc;EACd,yBA5EW;EA6EX,kBAAkB,EAAA;;AAGvB;EACI,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,yBAAqC;EACrC,cAzFW;EA0FX,eAAe,EAAA;EANnB;IAQO,cAA0B;IACzB,yBA7FO,EAAA;;AAgGf;EAlEI,aAAa;EACb,mBAFyC;EAGzC,8BAiEmC;EAhEnC,mBAAmB;EACnB,SA+DqB;EACjB,sBAAsB,EAAA;;AAE9B;EAtEI,aAAa;EACb,sBAsEgC;EArEhC,uBAqEyB;EApEzB,mBAAmB;EACnB,SAmEkB;EAClB,kBAAkB,EAAA;EAFtB;IAIQ,gBAjGU;IAkGV,aAAa;IACb,yCAtGQ;IAuGR,mBArGS,EAAA;;AAwGjB;EACI;IAEQ,aAAa,EAAA;EAGrB;IAEI,cAAc;IAxFlB,aAAa;IACb,mBAFyC;IAGzC,sBAuF6B;IAtF7B,mBAAmB;IACnB,SAqFuB,EAAA;IAHvB;MAOQ,cAAc,EAAA;IAPtB;MAUQ,aAAa,EAAA,EAChB;;AAMT;EACI,yBAlIY;EAmIZ,aAAa;EAzGb,aAAa;EACb,mBAFyC;EAGzC,uBAwGyB;EAvGzB,mBAAmB;EACnB,SAsGkB,EAAA","sourcesContent":["\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n$fontfam : \"Poppins\", sans-serif;\r\n\r\n$text: rgb(4, 12, 56);\r\n$white: #FFFFFF;\r\n$black: #050505;\r\n$grey: #F4F4F4;\r\n$dark-gray: #2D2D2D;\r\n$header: #0d3b6b;\r\n$tablet-break-point: 768px;\r\n$card-border:1rem;\r\n$card-width: 35rem;\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root{\r\n    --bg:$white;\r\n    --text-color:$black;\r\n}\r\n.dark-theme{\r\n    --bg:$black;\r\n    --text-color:$grey;\r\n}\r\nbody{\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    // color: $text;\r\n    background-color: var(--bg);\r\n    color: var(--text-color);\r\n    font-family: $fontfam,sans-serif;\r\n}\r\n@mixin flex($gap,$just-content,$direction:row,){\r\n    display: flex;\r\n    flex-direction: $direction;\r\n    justify-content: $just-content;\r\n    align-items: center;\r\n    gap: $gap;\r\n}\r\nheader{\r\n     background-color: $header;\r\n     padding-right: 3rem;\r\n}\r\nnav{\r\n    @include flex(0rem, space-between);\r\n    padding: 0 0.8rem;\r\n   \r\n    ul{\r\n        margin: 0;\r\n        padding: 0;\r\n        list-style: none;\r\n        @include flex(2rem,space-between);\r\n\r\n    }\r\n    a{\r\n        text-decoration: none;\r\n        color: inherit;\r\n        &:hover{\r\n            color: $white;\r\n        }\r\n        &:active{\r\n            border-bottom: 2px solid $white ;\r\n        }\r\n    }\r\n    .icon{\r\n        display: none; \r\n    }\r\n}\r\nsection{\r\n    .theme{\r\n    width:2rem;\r\n    height: 0.5rem;\r\n    border-radius: 0.8rem;\r\n    transition: all 0.2s ease-in;\r\n    background-color: lighten($header,90%);\r\n   padding: 5px;\r\n   @include flex(0rem,start);\r\n   transition: all 0.2s ease-in;\r\n}\r\n\r\n.theme-switcher{\r\n     width:0.9rem;\r\n     height: 0.9rem;\r\n     background-color: $header;\r\n     border-radius: 50%;\r\n}\r\n}\r\nbutton{\r\n    padding: 1rem;\r\n    border: none;\r\n    border-radius: 10px;\r\n    background-color: lighten($header,5%);\r\n    color: $white;\r\n    cursor: pointer;\r\n    &:hover{\r\n       color: lighten($header,5%);\r\n        background-color: $white;\r\n    }\r\n}\r\n.end{\r\n       @include flex(5rem,space-between);\r\n        justify-content: start;    \r\n}\r\nmain{\r\n    @include flex(3rem,center,column);\r\n    padding: 2rem 0rem;\r\n    div{\r\n        max-width: $card-width;\r\n        padding: 2rem;\r\n        background-color: rgba($color: $header, $alpha: 0.05);\r\n        border-radius: $card-border;\r\n    }\r\n}\r\n@media(max-width: $tablet-break-point){\r\n    .end{\r\n        button,ul{\r\n            display: none;\r\n        }\r\n    }\r\n    nav{\r\n       .icon{\r\n        display: block;\r\n         @include flex(0rem,start);\r\n         svg{\r\n        // fill: $white;\r\n        &:first-child{\r\n            display: block;\r\n        }\r\n        &:last-child{\r\n            display: none;\r\n        }\r\n       }\r\n         \r\n    }\r\n    }\r\n}\r\nfooter{\r\n    background-color: $header;\r\n    padding: 1rem;\r\n    @include flex(0rem,center);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/index.json":
/*!*******************************!*\
  !*** ./src/assets/index.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"name":"React","released":2013,"summary":"A JavaScript library for building user interfaces, maintained by Meta (Facebook)."},{"name":"Vue.js","released":2014,"summary":"A progressive framework for building user interfaces, focused on simplicity and flexibility."},{"name":"Angular","released":2010,"summary":"A TypeScript-based open-source web application framework developed by Google."},{"name":"Node.js","released":2009,"summary":"A runtime environment that allows you to run JavaScript on the server side."},{"name":"Django","released":2005,"summary":"A high-level Python web framework that encourages rapid development and clean, pragmatic design."},{"name":"MongoDB","released":2009,"summary":"A NoSQL document-based database known for scalability and performance."},{"name":"Docker","released":2013,"summary":"A platform for developing, shipping, and running applications in isolated containers."},{"name":"Git","released":2005,"summary":"A distributed version control system created by Linus Torvalds for tracking changes in source code."},{"name":"Webpack","released":2012,"summary":"A static module bundler for modern JavaScript applications."},{"name":"Jest","released":2014,"summary":"A delightful JavaScript testing framework with a focus on simplicity and support for React."},{"name":"Postman","released":2012,"summary":"A collaboration platform for API development that simplifies building, testing, and monitoring APIs."},{"name":"AWS","released":2006,"summary":"Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services."},{"name":"Figma","released":2016,"summary":"A collaborative web-based interface design tool used for UI/UX design."}]');

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _assets_index_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/index.json */ "./src/assets/index.json");


const main = document.querySelector('main');
const theme = document.querySelector('.theme');
theme.addEventListener('click', (e) => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        theme.style.justifyContent = 'flex-end';
        theme.style.backgroundColor = 'rgba(0,0,0,70%)';
    }
    else {
        theme.style.justifyContent = 'flex-start';
        theme.style.backgroundColor = '#ffffff';
    }
});
_assets_index_json__WEBPACK_IMPORTED_MODULE_1__.forEach((element) => {
    const tool = document.createElement('div');
    tool.innerHTML = `
    <h2>${element.name}</h2>
    <p>Released on ${element.released}</p>
    <p>${element.summary}</p>
    `;
    main.appendChild(tool);
});


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=main.fd16d708ec1e9b598160.js.map