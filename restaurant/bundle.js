/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Merriweather_Sans/MerriweatherSans-Italic-VariableFont_wght.ttf */ "./src/assets/Merriweather_Sans/MerriweatherSans-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Merriweather_Sans/MerriweatherSans-VariableFont_wght.ttf */ "./src/assets/Merriweather_Sans/MerriweatherSans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --font-size: 18px;
    --light-color: #E8E8E8;
    --dark-color: #495464;
    --rgb-dark-color: 73, 84, 100;
    --rgb-light-color: 232, 232, 232;
}

@font-face {
    font-family: 'Merriweather Sans';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}


body,
html {
    margin: 0;
    padding: 0;
    font-size: var(--font-size);
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    font-family: 'Merriweather Sans';
    color: rgb(var(--rgb-dark-color));
}

header {
    min-height: 71px;
    background-color: rgb(var(--rgb-light-color), 0.7);
    color: var(--dark-color);
    border-bottom: 1px solid var(--dark-color);
}

header>h1 {
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    font-weight: 800;
    font-size: 2.3rem;
}

a {
    text-decoration: none;
    color: var(--light-color);
}

a:hover {
    text-decoration: none;
    font-weight: 800;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
}

.nav {
    display: flex;
    justify-content: center;
    align-content: center;
}

.navbar {
    display: grid;
    grid-template-columns: repeat(3, 110px);
    gap: 15px;
}

.navbar li {
    list-style-type: none;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 400;
}

.content {
    display: flex;
    justify-content: center;
    min-height: 90vh;
    margin-top: 150px;
}

.carousel {
    height: 80%;
    gap: 20px;
    padding: 100px;
    background: rgb(var(--rgb-dark-color), 0.7);
    border: 1px solid var(--dark-color);
    color: var(--light-color);
}

.carousel-item>h1 {
    font-size: 2.5rem;
    font-weight: 800;
}

.carousel-item>p {
    font-size: 0.9rem;
    font-weight: 200;
}

.cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    gap: 20px;
    padding: 100px;
    background: rgb(var(--rgb-dark-color), 0.7);
    border: 1px solid var(--dark-color);
}

.cards>.drinks-container>h2,
.cards>.snacks-container>h2 {
    color: var(--light-color);
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 260px;
    height: 260px;
    padding: 20px;
    background-color: var(--light-color);
}

.card>h3 {
    padding: 0;
    margin: 0;
}

.card>p {
    font-weight: 300;
}

.drinks-container {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    align-items: center;
    gap: 30px;
}

.drinks-container>h2 {
    grid-column: 1 / span 3;
    align-self: center;
}


.snacks-container {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    align-items: center;
    gap: 30px;
}

.snacks-container>h2 {
    grid-column: 1 / span 3;
}

.carousel .slide-hidden {
    display: none;
}

.contact {
    height: 80%;
    gap: 20px;
    padding: 100px;
    background: rgb(var(--rgb-dark-color), 0.7);
    border: 1px solid var(--dark-color);
    color: var(--light-color);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,qBAAqB;IACrB,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;IAChC,+DAAuG;IACvG,+DAAgG;AACpG;;;AAGA;;IAEI,SAAS;IACT,UAAU;IACV,2BAA2B;IAC3B,mDAAmC;IACnC,sBAAsB;IACtB,gCAAgC;IAChC,iCAAiC;AACrC;;AAEA;IACI,gBAAgB;IAChB,kDAAkD;IAClD,wBAAwB;IACxB,0CAA0C;AAC9C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,SAAS;IACT,cAAc;IACd,2CAA2C;IAC3C,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,cAAc;IACd,2CAA2C;IAC3C,mCAAmC;AACvC;;AAEA;;IAEI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,aAAa;IACb,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,uCAAuC;IACvC,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,SAAS;IACT,cAAc;IACd,2CAA2C;IAC3C,mCAAmC;IACnC,yBAAyB;AAC7B","sourcesContent":[":root {\n    --font-size: 18px;\n    --light-color: #E8E8E8;\n    --dark-color: #495464;\n    --rgb-dark-color: 73, 84, 100;\n    --rgb-light-color: 232, 232, 232;\n}\n\n@font-face {\n    font-family: 'Merriweather Sans';\n    src: url('./assets/Merriweather_Sans/MerriweatherSans-Italic-VariableFont_wght.ttf') format('truetype');\n    src: url('./assets/Merriweather_Sans/MerriweatherSans-VariableFont_wght.ttf') format('truetype');\n}\n\n\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n    font-size: var(--font-size);\n    background: url('./background.jpg');\n    background-size: cover;\n    font-family: 'Merriweather Sans';\n    color: rgb(var(--rgb-dark-color));\n}\n\nheader {\n    min-height: 71px;\n    background-color: rgb(var(--rgb-light-color), 0.7);\n    color: var(--dark-color);\n    border-bottom: 1px solid var(--dark-color);\n}\n\nheader>h1 {\n    margin: 0;\n    padding: 0;\n    margin-bottom: 5px;\n    font-weight: 800;\n    font-size: 2.3rem;\n}\n\na {\n    text-decoration: none;\n    color: var(--light-color);\n}\n\na:hover {\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-content: center;\n}\n\n.nav {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n.navbar {\n    display: grid;\n    grid-template-columns: repeat(3, 110px);\n    gap: 15px;\n}\n\n.navbar li {\n    list-style-type: none;\n    font-size: 1rem;\n    cursor: pointer;\n    font-weight: 400;\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    min-height: 90vh;\n    margin-top: 150px;\n}\n\n.carousel {\n    height: 80%;\n    gap: 20px;\n    padding: 100px;\n    background: rgb(var(--rgb-dark-color), 0.7);\n    border: 1px solid var(--dark-color);\n    color: var(--light-color);\n}\n\n.carousel-item>h1 {\n    font-size: 2.5rem;\n    font-weight: 800;\n}\n\n.carousel-item>p {\n    font-size: 0.9rem;\n    font-weight: 200;\n}\n\n.cards {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 80%;\n    gap: 20px;\n    padding: 100px;\n    background: rgb(var(--rgb-dark-color), 0.7);\n    border: 1px solid var(--dark-color);\n}\n\n.cards>.drinks-container>h2,\n.cards>.snacks-container>h2 {\n    color: var(--light-color);\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    width: 260px;\n    height: 260px;\n    padding: 20px;\n    background-color: var(--light-color);\n}\n\n.card>h3 {\n    padding: 0;\n    margin: 0;\n}\n\n.card>p {\n    font-weight: 300;\n}\n\n.drinks-container {\n    display: grid;\n    grid-template-columns: repeat(3, 300px);\n    align-items: center;\n    gap: 30px;\n}\n\n.drinks-container>h2 {\n    grid-column: 1 / span 3;\n    align-self: center;\n}\n\n\n.snacks-container {\n    display: grid;\n    grid-template-columns: repeat(3, 300px);\n    align-items: center;\n    gap: 30px;\n}\n\n.snacks-container>h2 {\n    grid-column: 1 / span 3;\n}\n\n.carousel .slide-hidden {\n    display: none;\n}\n\n.contact {\n    height: 80%;\n    gap: 20px;\n    padding: 100px;\n    background: rgb(var(--rgb-dark-color), 0.7);\n    border: 1px solid var(--dark-color);\n    color: var(--light-color);\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/carousel.js":
/*!************************************!*\
  !*** ./src/components/carousel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carousel: () => (/* binding */ carousel)
/* harmony export */ });
class Carousel {
    constructor(items) {
        this.items = items;
    };
    
    carouselDiv = document.createElement('div');
    createComponent() {
        let count = 0;
        this.carouselDiv.classList.add(['carousel']);
    
        this.items.forEach(element => {
            let div = document.createElement('div');

            let classList = count === 0 ? ['carousel-item', 'slide-visible'] : ['carousel-item', 'slide-hidden'];
            div.classList.add(...classList);


            let heading = document.createElement('h1');
            let desc = document.createElement('p');
            let link = document.createElement('a');
            link.href = '#';
            link.type = 'button';

            heading.textContent = element.heading;
            desc.textContent = element.desc;
            link.textContent = element.link;

            div.appendChild(heading);
            div.appendChild(desc);
            div.appendChild(link);

            this.carouselDiv.appendChild(div);
            count += 1;
        });
        return this.carouselDiv;
    };
};


class Items {
    constructor(heading, desc, link) {
        this.heading = heading;
        this.desc = desc;
        this.link = link;

        this._item = {
            heading: this.heading,
            desc: this.desc,
            link: this.link
        }
    }

    get item() {
        return this._item;
    }
}

let carouselItems = [
    {
        "heading": "Specialty Baked Goods and coffee",
        "desc": "Exclusively delicious baked goods, homemade and all that",
        "link": "Order Now!"
    },
    // {
    //     "heading": "Subscribe and Save today!",
    //     "desc": "We offer flexible subscription plans to meet your needs",
    //     "link": "Get started"
    // },
    // {
    //     "heading": "Explore our blog",
    //     "desc": "This Wondrous Life teaches you how to dream, inspire, and embrace life",
    //     "link": "Embrace this"
    // }
]

let items = carouselItems.map(e => new Items(e.heading, e.desc, e.link));
let carousel = new Carousel(items);






/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactComponent: () => (/* binding */ contactComponent)
/* harmony export */ });
function contactComponent(){
    let div = document.createElement('contact');
    div.classList.add(['contact']);
    
    let name = document.createElement('h2');
    name.textContent = 'This Wondrous Life';

    let link = document.createElement('p');
    link.textContent = 'https://thiswondrouslife.com';

    div.appendChild(name);
    div.appendChild(link);

    return div;
}




/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuComponent: () => (/* binding */ menuComponent)
/* harmony export */ });
const menuItems = {
    "drinks": [
        {
            "item": "latte",
            "desc": "A nice homemade latte from the Breville."
        },
        {
            "item": "nespresso",
            "desc": "a nespresso pod coffee"
        },
        {
            "item": "tea",
            "desc": "a steeped tea for ninjas"
        }
    ],
    "snacks": [
        {
            "item": "cookies",
            "desc": "homemade chocolate chip cookies or another delicious treat"
        },
        {
            "item": "pumpkin cake",
            "desc": "homemade pumpkin cake, leaving you wanting more"
        },
        {
            "item": "cinnamon rolls",
            "desc": "delicious mouth watering cinnamon rolls"
        }
    ]
}

function menuComponent(){
    const div = document.createElement('div');
    const drinksDiv = document.createElement('div');
    const snacksDiv = document.createElement('div');
    div.classList.add(['cards']);
    drinksDiv.classList.add('drinks-container');
    snacksDiv.classList.add('snacks-container');
    
    const drinkHeader = document.createElement('h2');
    const snackHeader = document.createElement('h2');
    drinkHeader.classList.add(['header', 'drink-header']);
    snackHeader.classList.add(['header', 'snack-header']);

    drinkHeader.textContent = 'Drinks';
    snackHeader.textContent = 'Snacks';

    let drinks = card(menuItems['drinks']);
    let snacks = card(menuItems['snacks']);

    drinksDiv.appendChild(drinkHeader);
    drinks.forEach(e => drinksDiv.appendChild(e));
    snacksDiv.appendChild(snackHeader);
    snacks.forEach(e => snacksDiv.appendChild(e));

    div.appendChild(drinksDiv);
    div.appendChild(snacksDiv);
    
    return div;

}

function card(item) {
    return item.map(element => {
        let div = document.createElement('div');
        div.classList.add(['card']);

        let item = document.createElement('h3');
        let desc = document.createElement('p');
        item.textContent = element.item;
        desc.textContent = element.desc;

        div.appendChild(item);
        div.appendChild(desc);
        return div;
    });
}




/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuBar: () => (/* binding */ menuBar)
/* harmony export */ });
function menuBar() {
    const items = [
        'HOME',
        'MENU',
        'CONTACT'
    ];

    const navbar = document.createElement('div');
    navbar.classList.add(['nav']);
    
    const ul = document.createElement('ul');
    ul.classList.add('navbar');

    items.forEach(e => {
        let li = document.createElement('li');
        li.textContent = e;

        ul.appendChild(li);
    });
    
    navbar.appendChild(ul);
    return navbar;
    
}




/***/ }),

/***/ "./src/assets/Merriweather_Sans/MerriweatherSans-Italic-VariableFont_wght.ttf":
/*!************************************************************************************!*\
  !*** ./src/assets/Merriweather_Sans/MerriweatherSans-Italic-VariableFont_wght.ttf ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05009c5164530cdb9ac0.ttf";

/***/ }),

/***/ "./src/assets/Merriweather_Sans/MerriweatherSans-VariableFont_wght.ttf":
/*!*****************************************************************************!*\
  !*** ./src/assets/Merriweather_Sans/MerriweatherSans-VariableFont_wght.ttf ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee384c85ee67825b545c.ttf";

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d7cc6f78c63a38a83f2.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/carousel */ "./src/components/carousel.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






let _carousel = _components_carousel__WEBPACK_IMPORTED_MODULE_1__.carousel.createComponent();

function website() {

    // Navbar
    document.body.appendChild(nav());

    loadPage();

}

function nav(){
    const element = document.createElement('header');
    const brandName = document.createElement('h1');

    let menu = new _components_navbar__WEBPACK_IMPORTED_MODULE_2__.menuBar();
    menu.addEventListener('click', e => loadPage(e.target.outerText));
    
    brandName.style.textAlign = 'center';
    brandName.textContent = 'This Wondrous Coffee';
    
    element.appendChild(brandName);
    element.appendChild(menu);
   
    return element;
};

function loadPage(page='home') {
    let home = _carousel;
    let menu = (0,_components_menu__WEBPACK_IMPORTED_MODULE_3__.menuComponent)();
    let contact = (0,_components_contact__WEBPACK_IMPORTED_MODULE_0__.contactComponent)();
    let contentData;

    switch(page.toLowerCase()){
        case 'menu':
            contentData = content(menu);
            break;
        case 'contact':
            contentData = content(contact);
            break;
        default:
            contentData = content(home);
            break;
        
    }        
    document.body.appendChild(contentData);
}

function content(data) {
    const old = document.querySelector('.content');
    if (old) {
        old.textContent = '';
        document.body.removeChild(old);
    }
    const _content = document.createElement('div');
    _content.classList.add('content');
    _content.appendChild(data);
    
    return _content;

};

website();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNk5BQTJGO0FBQ3ZJLDRDQUE0QywrTUFBb0Y7QUFDaEksNENBQTRDLDZHQUFtQztBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELGVBQWUsbUNBQW1DO0FBQ2xEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxRQUFRLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxp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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7OztBQzlFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7O0FDaEI1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7OztBQzlFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXdEO0FBQ1I7QUFDUTtBQUNOO0FBQzlCOztBQUVwQixnQkFBZ0IsMERBQVE7O0FBRXhCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1REFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QixrQkFBa0IscUVBQWdCO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9NZXJyaXdlYXRoZXJfU2Fucy9NZXJyaXdlYXRoZXJTYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9NZXJyaXdlYXRoZXJfU2Fucy9NZXJyaXdlYXRoZXJTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplOiAxOHB4O1xuICAgIC0tbGlnaHQtY29sb3I6ICNFOEU4RTg7XG4gICAgLS1kYXJrLWNvbG9yOiAjNDk1NDY0O1xuICAgIC0tcmdiLWRhcmstY29sb3I6IDczLCA4NCwgMTAwO1xuICAgIC0tcmdiLWxpZ2h0LWNvbG9yOiAyMzIsIDIzMiwgMjMyO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlciBTYW5zJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5cbmJvZHksXG5odG1sIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXIgU2Fucyc7XG4gICAgY29sb3I6IHJnYih2YXIoLS1yZ2ItZGFyay1jb2xvcikpO1xufVxuXG5oZWFkZXIge1xuICAgIG1pbi1oZWlnaHQ6IDcxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLXJnYi1saWdodC1jb2xvciksIDAuNyk7XG4gICAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcbn1cblxuaGVhZGVyPmgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTEwcHgpO1xuICAgIGdhcDogMTVweDtcbn1cblxuLm5hdmJhciBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogOTB2aDtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLmNhcm91c2VsIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKHZhcigtLXJnYi1kYXJrLWNvbG9yKSwgMC43KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uY2Fyb3VzZWwtaXRlbT5oMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNhcm91c2VsLWl0ZW0+cCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmNhcmRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKHZhcigtLXJnYi1kYXJrLWNvbG9yKSwgMC43KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcbn1cblxuLmNhcmRzPi5kcmlua3MtY29udGFpbmVyPmgyLFxuLmNhcmRzPi5zbmFja3MtY29udGFpbmVyPmgyIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuXG4uY2FyZD5oMyB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5jYXJkPnAge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5kcmlua3MtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMwMHB4KTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzBweDtcbn1cblxuLmRyaW5rcy1jb250YWluZXI+aDIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuXG4uc25hY2tzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMDBweCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG59XG5cbi5zbmFja3MtY29udGFpbmVyPmgyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbn1cblxuLmNhcm91c2VsIC5zbGlkZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb250YWN0IHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKHZhcigtLXJnYi1kYXJrLWNvbG9yKSwgMC43KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQywrREFBdUc7SUFDdkcsK0RBQWdHO0FBQ3BHOzs7QUFHQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixtREFBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4QiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxjQUFjO0lBQ2QsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYztJQUNkLDJDQUEyQztJQUMzQyxtQ0FBbUM7QUFDdkM7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxjQUFjO0lBQ2QsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZTogMThweDtcXG4gICAgLS1saWdodC1jb2xvcjogI0U4RThFODtcXG4gICAgLS1kYXJrLWNvbG9yOiAjNDk1NDY0O1xcbiAgICAtLXJnYi1kYXJrLWNvbG9yOiA3MywgODQsIDEwMDtcXG4gICAgLS1yZ2ItbGlnaHQtY29sb3I6IDIzMiwgMjMyLCAyMzI7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlciBTYW5zJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL01lcnJpd2VhdGhlcl9TYW5zL01lcnJpd2VhdGhlclNhbnMtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL01lcnJpd2VhdGhlcl9TYW5zL01lcnJpd2VhdGhlclNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2JhY2tncm91bmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyIFNhbnMnO1xcbiAgICBjb2xvcjogcmdiKHZhcigtLXJnYi1kYXJrLWNvbG9yKSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDcxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYih2YXIoLS1yZ2ItbGlnaHQtY29sb3IpLCAwLjcpO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcXG59XFxuXFxuaGVhZGVyPmgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTEwcHgpO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5uYXZiYXIgbGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYih2YXIoLS1yZ2ItZGFyay1jb2xvciksIDAuNyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbT5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbT5wIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IodmFyKC0tcmdiLWRhcmstY29sb3IpLCAwLjcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcXG59XFxuXFxuLmNhcmRzPi5kcmlua3MtY29udGFpbmVyPmgyLFxcbi5jYXJkcz4uc25hY2tzLWNvbnRhaW5lcj5oMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDI2MHB4O1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxufVxcblxcbi5jYXJkPmgzIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY2FyZD5wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmRyaW5rcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAzMDBweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLmRyaW5rcy1jb250YWluZXI+aDIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5cXG4uc25hY2tzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMwMHB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uc25hY2tzLWNvbnRhaW5lcj5oMiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbn1cXG5cXG4uY2Fyb3VzZWwgLnNsaWRlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWN0IHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYih2YXIoLS1yZ2ItZGFyay1jb2xvciksIDAuNyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIENhcm91c2VsIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtcykge1xuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgfTtcbiAgICBcbiAgICBjYXJvdXNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZUNvbXBvbmVudCgpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jYXJvdXNlbERpdi5jbGFzc0xpc3QuYWRkKFsnY2Fyb3VzZWwnXSk7XG4gICAgXG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgbGV0IGNsYXNzTGlzdCA9IGNvdW50ID09PSAwID8gWydjYXJvdXNlbC1pdGVtJywgJ3NsaWRlLXZpc2libGUnXSA6IFsnY2Fyb3VzZWwtaXRlbScsICdzbGlkZS1oaWRkZW4nXTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG5cblxuICAgICAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9ICcjJztcbiAgICAgICAgICAgIGxpbmsudHlwZSA9ICdidXR0b24nO1xuXG4gICAgICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gZWxlbWVudC5oZWFkaW5nO1xuICAgICAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzYztcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBlbGVtZW50Lmxpbms7XG5cbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rKTtcblxuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbERpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcm91c2VsRGl2O1xuICAgIH07XG59O1xuXG5cbmNsYXNzIEl0ZW1zIHtcbiAgICBjb25zdHJ1Y3RvcihoZWFkaW5nLCBkZXNjLCBsaW5rKSB7XG4gICAgICAgIHRoaXMuaGVhZGluZyA9IGhlYWRpbmc7XG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG5cbiAgICAgICAgdGhpcy5faXRlbSA9IHtcbiAgICAgICAgICAgIGhlYWRpbmc6IHRoaXMuaGVhZGluZyxcbiAgICAgICAgICAgIGRlc2M6IHRoaXMuZGVzYyxcbiAgICAgICAgICAgIGxpbms6IHRoaXMubGlua1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICAgIH1cbn1cblxubGV0IGNhcm91c2VsSXRlbXMgPSBbXG4gICAge1xuICAgICAgICBcImhlYWRpbmdcIjogXCJTcGVjaWFsdHkgQmFrZWQgR29vZHMgYW5kIGNvZmZlZVwiLFxuICAgICAgICBcImRlc2NcIjogXCJFeGNsdXNpdmVseSBkZWxpY2lvdXMgYmFrZWQgZ29vZHMsIGhvbWVtYWRlIGFuZCBhbGwgdGhhdFwiLFxuICAgICAgICBcImxpbmtcIjogXCJPcmRlciBOb3chXCJcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgXCJoZWFkaW5nXCI6IFwiU3Vic2NyaWJlIGFuZCBTYXZlIHRvZGF5IVwiLFxuICAgIC8vICAgICBcImRlc2NcIjogXCJXZSBvZmZlciBmbGV4aWJsZSBzdWJzY3JpcHRpb24gcGxhbnMgdG8gbWVldCB5b3VyIG5lZWRzXCIsXG4gICAgLy8gICAgIFwibGlua1wiOiBcIkdldCBzdGFydGVkXCJcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgXCJoZWFkaW5nXCI6IFwiRXhwbG9yZSBvdXIgYmxvZ1wiLFxuICAgIC8vICAgICBcImRlc2NcIjogXCJUaGlzIFdvbmRyb3VzIExpZmUgdGVhY2hlcyB5b3UgaG93IHRvIGRyZWFtLCBpbnNwaXJlLCBhbmQgZW1icmFjZSBsaWZlXCIsXG4gICAgLy8gICAgIFwibGlua1wiOiBcIkVtYnJhY2UgdGhpc1wiXG4gICAgLy8gfVxuXVxuXG5sZXQgaXRlbXMgPSBjYXJvdXNlbEl0ZW1zLm1hcChlID0+IG5ldyBJdGVtcyhlLmhlYWRpbmcsIGUuZGVzYywgZS5saW5rKSk7XG5sZXQgY2Fyb3VzZWwgPSBuZXcgQ2Fyb3VzZWwoaXRlbXMpO1xuXG5leHBvcnQgeyBjYXJvdXNlbCB9O1xuXG5cbiIsImZ1bmN0aW9uIGNvbnRhY3RDb21wb25lbnQoKXtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29udGFjdCcpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFsnY29udGFjdCddKTtcbiAgICBcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICdUaGlzIFdvbmRyb3VzIExpZmUnO1xuXG4gICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGluay50ZXh0Q29udGVudCA9ICdodHRwczovL3RoaXN3b25kcm91c2xpZmUuY29tJztcblxuICAgIGRpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBjb250YWN0Q29tcG9uZW50IH07XG4iLCJjb25zdCBtZW51SXRlbXMgPSB7XG4gICAgXCJkcmlua3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcIml0ZW1cIjogXCJsYXR0ZVwiLFxuICAgICAgICAgICAgXCJkZXNjXCI6IFwiQSBuaWNlIGhvbWVtYWRlIGxhdHRlIGZyb20gdGhlIEJyZXZpbGxlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaXRlbVwiOiBcIm5lc3ByZXNzb1wiLFxuICAgICAgICAgICAgXCJkZXNjXCI6IFwiYSBuZXNwcmVzc28gcG9kIGNvZmZlZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaXRlbVwiOiBcInRlYVwiLFxuICAgICAgICAgICAgXCJkZXNjXCI6IFwiYSBzdGVlcGVkIHRlYSBmb3IgbmluamFzXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJzbmFja3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcIml0ZW1cIjogXCJjb29raWVzXCIsXG4gICAgICAgICAgICBcImRlc2NcIjogXCJob21lbWFkZSBjaG9jb2xhdGUgY2hpcCBjb29raWVzIG9yIGFub3RoZXIgZGVsaWNpb3VzIHRyZWF0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpdGVtXCI6IFwicHVtcGtpbiBjYWtlXCIsXG4gICAgICAgICAgICBcImRlc2NcIjogXCJob21lbWFkZSBwdW1wa2luIGNha2UsIGxlYXZpbmcgeW91IHdhbnRpbmcgbW9yZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaXRlbVwiOiBcImNpbm5hbW9uIHJvbGxzXCIsXG4gICAgICAgICAgICBcImRlc2NcIjogXCJkZWxpY2lvdXMgbW91dGggd2F0ZXJpbmcgY2lubmFtb24gcm9sbHNcIlxuICAgICAgICB9XG4gICAgXVxufVxuXG5mdW5jdGlvbiBtZW51Q29tcG9uZW50KCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZHJpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc25hY2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoWydjYXJkcyddKTtcbiAgICBkcmlua3NEaXYuY2xhc3NMaXN0LmFkZCgnZHJpbmtzLWNvbnRhaW5lcicpO1xuICAgIHNuYWNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdzbmFja3MtY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgZHJpbmtIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHNuYWNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkcmlua0hlYWRlci5jbGFzc0xpc3QuYWRkKFsnaGVhZGVyJywgJ2RyaW5rLWhlYWRlciddKTtcbiAgICBzbmFja0hlYWRlci5jbGFzc0xpc3QuYWRkKFsnaGVhZGVyJywgJ3NuYWNrLWhlYWRlciddKTtcblxuICAgIGRyaW5rSGVhZGVyLnRleHRDb250ZW50ID0gJ0RyaW5rcyc7XG4gICAgc25hY2tIZWFkZXIudGV4dENvbnRlbnQgPSAnU25hY2tzJztcblxuICAgIGxldCBkcmlua3MgPSBjYXJkKG1lbnVJdGVtc1snZHJpbmtzJ10pO1xuICAgIGxldCBzbmFja3MgPSBjYXJkKG1lbnVJdGVtc1snc25hY2tzJ10pO1xuXG4gICAgZHJpbmtzRGl2LmFwcGVuZENoaWxkKGRyaW5rSGVhZGVyKTtcbiAgICBkcmlua3MuZm9yRWFjaChlID0+IGRyaW5rc0Rpdi5hcHBlbmRDaGlsZChlKSk7XG4gICAgc25hY2tzRGl2LmFwcGVuZENoaWxkKHNuYWNrSGVhZGVyKTtcbiAgICBzbmFja3MuZm9yRWFjaChlID0+IHNuYWNrc0Rpdi5hcHBlbmRDaGlsZChlKSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoZHJpbmtzRGl2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc25hY2tzRGl2KTtcbiAgICBcbiAgICByZXR1cm4gZGl2O1xuXG59XG5cbmZ1bmN0aW9uIGNhcmQoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChbJ2NhcmQnXSk7XG5cbiAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnQuaXRlbTtcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzYztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgbWVudUNvbXBvbmVudCB9O1xuIiwiZnVuY3Rpb24gbWVudUJhcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgJ0hPTUUnLFxuICAgICAgICAnTUVOVScsXG4gICAgICAgICdDT05UQUNUJ1xuICAgIF07XG5cbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChbJ25hdiddKTtcbiAgICBcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGU7XG5cbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuICAgIFxuICAgIG5hdmJhci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgcmV0dXJuIG5hdmJhcjtcbiAgICBcbn1cblxuZXhwb3J0IHsgbWVudUJhciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY29udGFjdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFjdFwiO1xuaW1wb3J0IHsgY2Fyb3VzZWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Nhcm91c2VsXCJcbmltcG9ydCB7IG1lbnVCYXIgYXMgbmF2YmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCB7IG1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmxldCBfY2Fyb3VzZWwgPSBjYXJvdXNlbC5jcmVhdGVDb21wb25lbnQoKTtcblxuZnVuY3Rpb24gd2Vic2l0ZSgpIHtcblxuICAgIC8vIE5hdmJhclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2KCkpO1xuXG4gICAgbG9hZFBhZ2UoKTtcblxufVxuXG5mdW5jdGlvbiBuYXYoKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgYnJhbmROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGxldCBtZW51ID0gbmV3IG5hdmJhcigpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGxvYWRQYWdlKGUudGFyZ2V0Lm91dGVyVGV4dCkpO1xuICAgIFxuICAgIGJyYW5kTmFtZS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBicmFuZE5hbWUudGV4dENvbnRlbnQgPSAnVGhpcyBXb25kcm91cyBDb2ZmZWUnO1xuICAgIFxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnJhbmROYW1lKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5mdW5jdGlvbiBsb2FkUGFnZShwYWdlPSdob21lJykge1xuICAgIGxldCBob21lID0gX2Nhcm91c2VsO1xuICAgIGxldCBtZW51ID0gbWVudUNvbXBvbmVudCgpO1xuICAgIGxldCBjb250YWN0ID0gY29udGFjdENvbXBvbmVudCgpO1xuICAgIGxldCBjb250ZW50RGF0YTtcblxuICAgIHN3aXRjaChwYWdlLnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgIGNvbnRlbnREYXRhID0gY29udGVudChtZW51KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgIGNvbnRlbnREYXRhID0gY29udGVudChjb250YWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29udGVudERhdGEgPSBjb250ZW50KGhvbWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgIH0gICAgICAgIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERhdGEpO1xufVxuXG5mdW5jdGlvbiBjb250ZW50KGRhdGEpIHtcbiAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGlmIChvbGQpIHtcbiAgICAgICAgb2xkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob2xkKTtcbiAgICB9XG4gICAgY29uc3QgX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgX2NvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIF9jb250ZW50O1xuXG59O1xuXG53ZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=