module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(12);
} else {}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Root = Root;
exports.Data = Data;
exports.Style = Style;
exports.Script = Script;

var _rax = __webpack_require__(0);

function Root(props, context) {
  var __initialHtml = context.__initialHtml;

  if (__initialHtml) {
    return (0, _rax.createElement)("div", {
      id: "root",
      dangerouslySetInnerHTML: {
        __html: __initialHtml || ''
      }
    });
  }

  return (0, _rax.createElement)("div", {
    id: "root"
  });
}

function Data(props, context) {
  var __initialData = context.__initialData;

  if (__initialData) {
    return (0, _rax.createElement)("script", {
      "data-from": "server",
      dangerouslySetInnerHTML: {
        __html: 'window.__INITIAL_DATA__=' + __initialData
      }
    });
  }

  return null;
} // Named by role rather than implementationm, so component name are `Style` rather than `Styles`.


function Style(props, context) {
  var _context$__styles = context.__styles,
      __styles = _context$__styles === void 0 ? [] : _context$__styles;

  return __styles.map(function (src, index) {
    return (0, _rax.createElement)("link", {
      rel: "stylesheet",
      href: src,
      key: "style_" + index
    });
  });
}

function Script(props, context) {
  var _context$__scripts = context.__scripts,
      __scripts = _context$__scripts === void 0 ? [] : _context$__scripts;

  return __scripts.map(function (src, index) {
    return (0, _rax.createElement)("script", {
      src: src,
      key: "script_" + index
    });
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _rax = __webpack_require__(0);

var _universalEnv = {
  isWeex: false,
  isWeb: false,
  isKraken: false,
  isNode: true,
  isMiniApp: false,
  isWeChatMiniprogram: false
};

var _index = _interopRequireDefault(__webpack_require__(18));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var _styleSheet = _index.default;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});

  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = cache[className];

  if (!style) {
    style = {};

    if (classNameArr.length === 1) {
      style = _styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        style = Object.assign(style, _styleSheet[cls.trim()]);
      });
    }

    cache[className] = style;
  }

  return style;
}

var prefixCls = 'rax-text';
var Text = (0, _rax.forwardRef)(function (props, ref) {
  var className = props.className,
      style = props.style,
      numberOfLines = props.numberOfLines,
      children = props.children,
      onPress = props.onPress,
      onClick = props.onClick,
      rest = __rest(props, ["className", "style", "numberOfLines", "children", "onPress", "onClick"]);

  var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
  var textString = '';

  if (children != null) {
    textString = Array.isArray(children) ? children.join('') : children.toString();
  }

  var classNames = [prefixCls, className];

  if (lines) {
    classNames.push(prefixCls + "--overflow-hidden");

    if (lines === 1) {
      classNames.push(prefixCls + "--singleline");
    } else {
      classNames.push(prefixCls + "--multiline");
    }
  }

  return (0, _rax.createElement)("span", _extends({}, rest, {
    ref: ref,
    className: classNames.join(' '),
    style: Object.assign({}, _getStyle(classNames.join(' ')), Object.assign(Object.assign({}, style), {
      webkitLineClamp: lines > 1 ? lines : undefined
    })),
    onClick: onClick || onPress
  }), textString);
});
Text.displayName = 'Text';
var _default = Text;
exports.default = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _rax = __webpack_require__(0);

var _dedupe = _interopRequireDefault(__webpack_require__(16));

var _universalEnv = {
  isWeex: false,
  isWeb: false,
  isKraken: false,
  isNode: true,
  isMiniApp: false,
  isWeChatMiniprogram: false
};

var _index = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var _styleSheet = _index.default;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});

  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = cache[className];

  if (!style) {
    style = {};

    if (classNameArr.length === 1) {
      style = _styleSheet[classNameArr[0].trim()];
    } else {
      classNameArr.forEach(function (cls) {
        style = Object.assign(style, _styleSheet[cls.trim()]);
      });
    }

    cache[className] = style;
  }

  return style;
}

var View = (0, _rax.forwardRef)(function (props, ref) {
  var className = props.className,
      style = props.style,
      rest = __rest(props, ["className", "style"]);

  return (0, _rax.createElement)("div", _extends({}, rest, {
    ref: ref,
    className: (0, _dedupe.default)('rax-view', className),
    style: Object.assign({}, _getStyle((0, _dedupe.default)('rax-view', className)), style)
  }));
});
var _default = View;
exports.default = _default;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rax_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var rax_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rax_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (() => {
  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
    source: {
      uri: '//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png'
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _rax = __webpack_require__(0);

var _universalEnv = {
  isWeex: false,
  isWeb: false,
  isKraken: false,
  isNode: true,
  isMiniApp: false,
  isWeChatMiniprogram: false
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Image(props) {
  var _useState = (0, _rax.useState)(props.source),
      source = _useState[0],
      setSource = _useState[1];

  var onError = (0, _rax.useCallback)(function (e) {
    var fallbackSource = props.fallbackSource,
        _props$onError = props.onError,
        onError = _props$onError === void 0 ? function () {} : _props$onError;

    if (fallbackSource && fallbackSource.uri && source.uri !== fallbackSource.uri) {
      setSource(fallbackSource);
    }

    onError(e);
  }, []);
  var onLoad = (0, _rax.useCallback)(function (e) {
    var _props$onLoad = props.onLoad,
        onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad;

    if (typeof e.success !== 'undefined') {
      if (e.success) {
        onLoad(e);
      } else {
        onError(e);
      }
    } else if (typeof e.currentTarget !== 'undefined') {
      if (e.currentTarget.naturalWidth > 1 && e.currentTarget.naturalHeight > 1) {
        onLoad(e);
      } else {
        onError(e);
      }
    }
  }, []); // Source must a object

  if (source && source.uri) {
    var _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style;
    var width = source.width,
        height = source.height,
        uri = source.uri;
    var nativeProps = Object.assign(Object.assign({}, props), {
      src: uri,
      onLoad: onLoad,
      onError: onError
    });
    nativeProps.style = Object.assign({
      width: width,
      height: height
    }, style);
    delete nativeProps.source; // for cover and contain

    var resizeMode = nativeProps.resizeMode || nativeProps.style.resizeMode;

    if (resizeMode) {
      nativeProps.style.objectFit = resizeMode;
    } // Set default quality to "original" in weex avoid image be optimized unexpect


    return (0, _rax.createElement)("img", nativeProps);
  }

  return null;
}

var _default = Image;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var _styles = {
  "logo": {
    "width": "26.66667vw",
    "height": "24vw",
    "marginBottom": "2.66667vw"
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _universalEnv = {
  isWeex: false,
  isWeb: false,
  isKraken: false,
  isNode: true,
  isMiniApp: false,
  isWeChatMiniprogram: false
};

var _index = _interopRequireDefault(__webpack_require__(19));

var _index2 = _interopRequireDefault(__webpack_require__(20));

var _index3 = _interopRequireDefault(__webpack_require__(21));

var _index4 = _interopRequireDefault(__webpack_require__(22));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function dutyChain() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  for (var i = 0; i < fns.length; i++) {
    var result = fns[i]();

    if (result) {
      return result;
    }
  }
}

function handleWeb() {
  return null;
}

function handleWeex() {
  return null;
}

function handleMiniApp() {
  return null;
}

function handleWeChat() {
  return null;
} // Default module is web


function handleDefault() {
  return _index.default;
}

var Navigate = dutyChain(handleWeb, handleWeex, handleMiniApp, handleWeChat, handleDefault); // Web should be first

var _default = Navigate;
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var _styles = {
  "home": {
    "alignItems": "center",
    "marginTop": "26.66667vw"
  },
  "title": {
    "fontSize": "6vw",
    "fontWeight": "bold",
    "marginTop": "2.66667vw",
    "marginRight": 0,
    "marginBottom": "2.66667vw",
    "marginLeft": 0
  },
  "info": {
    "fontSize": "4.8vw",
    "marginTop": "1.06667vw",
    "marginRight": 0,
    "marginBottom": "1.06667vw",
    "marginLeft": 0,
    "color": "rgb(85,85,85)"
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function (method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : "suspendedYield";

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

!function () {
  var x = {
    n: 1,
    t: !1,
    driver: null,
    rootComponents: {},
    rootInstances: {},
    owner: null
  };

  function a(n, t, i, r, u) {
    return {
      type: n,
      key: t,
      ref: i,
      props: r,
      _owner: u
    };
  }

  function A(n) {
    return null === n;
  }

  function d(n) {
    return "function" == typeof n;
  }

  function u(n) {
    return "object" == typeof n;
  }

  function e(n) {
    return "[object Object]" === s.toString.call(n);
  }

  function S(n) {
    return Array.isArray(n);
  }

  function f(n) {
    return "string" == typeof n;
  }

  function o(n) {
    return "number" == typeof n;
  }

  function l() {}

  var s = {};

  function v(n) {
    if (null == n) return n;
    var t = [];
    return function n(t, i) {
      if (S(t)) for (var r = 0, u = t.length; r < u; r++) n(t[r], i);else i.push(t);
    }(n, t), t.length - 1 ? t : t[0];
  }

  var t = [],
      i = [],
      c = [],
      r = setTimeout;

  function h(n) {
    var t;

    while (t = n.shift()) t();
  }

  function _(n) {
    0 === t.length && r(p), t.push(n);
  }

  function p() {
    h(t);
  }

  function m(n) {
    0 === i.length && r(w), i.push(n);
  }

  function w() {
    h(i);
  }

  function y(n) {
    c.push(n);
  }

  function b(n, t, i) {
    var r = void 0 === i ? "" : " got: " + function (n) {
      return e(n) ? Object.keys(n) : n;
    }(i);
    return Error(n + ": #" + t + ", " + function () {
      var n = x.owner;
      return n ? "check <" + n.i() + ">" : "no owner";
    }() + "." + r);
  }

  function j(n, t) {
    throw b("Error", n, t);
  }

  function C(n, t) {
    var i = b("Warn", n, t);
    r(function () {
      throw i;
    }, 0);
  }

  var g = {
    key: !0,
    ref: !0
  };

  function O(n, t, i) {
    var r,
        u = {},
        e = null,
        f = null;
    if (null != t) for (r in f = void 0 === t.ref ? null : t.ref, e = void 0 === t.key ? null : "" + t.key, t) g[r] || (u[r] = t[r]);
    var o = arguments.length - 2;
    if (0 < o) if (1 != o || S(i)) {
      var s = i;

      if (1 < o) {
        s = Array(o);

        for (var c = 0; c < o; c++) s[c] = arguments[c + 2];
      }

      u.children = v(s);
    } else u.children = i;

    if (n && n.defaultProps) {
      var h = n.defaultProps;

      for (r in h) void 0 === u[r] && (u[r] = h[r]);
    }

    return null == n && (n = l, C(0)), new a(n, e, f, u, x.owner);
  }

  function k(n, t, i) {
    for (var r = 0, u = n && n.length; r < u; r++) n[r].call(t, i);
  }

  var E = s.hasOwnProperty;

  function I(n, t) {
    return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
  }

  function R(n, t) {
    if (I(n, t)) return !0;
    if (!u(n) || A(n) || !u(t) || A(t)) return !1;
    var i = Object.keys(n);
    if (i.length !== Object.keys(t).length) return !1;

    for (var r = 0; r < i.length; r++) if (!E.call(t, i[r]) || !I(n[i[r]], t[i[r]])) return !1;

    return !0;
  }

  var P = "_internal",
      D = "_instance",
      H = "_nativeNode",
      N = "_renderedComponent";

  function U() {
    return x.owner && x.owner[D];
  }

  function F() {
    var n = U();
    if (n) return n;
    j(1);
  }

  function L(n, t) {
    if (A(t) || n.length !== t.length) return !1;

    for (var i = 0; i < n.length; i++) if (!I(n[i], t[i])) return !1;

    return !0;
  }

  function M(n) {
    var r = F(),
        u = r.getHookID(),
        e = r.getHooks();

    if (!e[u]) {
      d(n) && (n = n());
      e[u] = [n, function (n) {
        x.t || w();
        var t = e[u],
            i = t[2];
        d(n) && (n = n(i)), I(n, i) || (t[2] = n, U() === r ? r.r = !0 : r.u());
      }, n];
    }

    var t = e[u];
    return I(t[0], t[2]) || (t[0] = t[2], r.e = !0), t;
  }

  function T(n, t) {
    V(n, t);
  }

  function V(n, t, r) {
    var i = F(),
        u = i.getHookID(),
        e = i.getHooks();

    if (t = void 0 === t ? null : t, e[u]) {
      var f = e[u],
          o = f.f,
          s = f.o;
      f.o = t, f.s = s, o.current = n;
    } else {
      function c(n) {
        if (!n && r) return m(function () {
          return c(!0);
        });
        var t = c.current;
        t && (h.current = t(), c.current = null);
      }

      var h = function n(t) {
        if (!t && r) return m(function () {
          return n(!0);
        });
        var i = n.current;
        i && (i(), n.current = null);
      };

      c.current = n, e[u] = {
        f: c,
        c: h,
        s: t,
        o: t
      }, i.didMount.push(c), i.willUnmount.push(h), i.didUpdate.push(function () {
        var n = e[u],
            t = n.o,
            i = n.f;
        null != t && L(t, n.s) || (h(), i());
      });
    }
  }

  function W(n, t) {
    var i = F(),
        r = i.getHookID(),
        u = i.getHooks();

    if (t = void 0 === t ? null : t, u[r]) {
      var e = u[r][1];
      !A(t) && L(t, e) || (u[r] = [n(), t]);
    } else u[r] = [n(), t];

    return u[r][0];
  }

  function Z(n) {
    return S(n) ? n : [n];
  }

  function $(n, t) {
    var i;

    while (n && n[P]) {
      if (t(n)) {
        i = n;
        break;
      }

      n = n[P].h;
    }

    return i;
  }

  var n = 0;

  function q(n, t) {
    n.prototype = Object.create(t.prototype), (n.prototype.constructor = n).__proto__ = t;
  }

  var z = function () {
    function n(n) {
      this.a = n;
    }

    var t = n.prototype;
    return t.l = function (n, t, i) {
      this._parent = n, this.h = t, this._context = i, this._mountID = x.n++;
    }, t.v = function () {
      this.a = this[H] = this._parent = this.h = this._context = null, this[D] && (this[D] = this[D][P] = null);
    }, t.d = function (n, t, i, r) {
      this.l(n, t, i), this._(r);
      var u = {};
      return u[P] = this, u;
    }, t.unmountComponent = function (n) {
      this[H] && !n && x.driver.removeChild(this[H], this._parent), this.v();
    }, t.i = function () {
      var n = this.a,
          t = n && n.type;
      return t && t.displayName || t && t.name || t || n;
    }, t._ = function (n) {
      var t = this.p(),
          i = this._parent;
      n ? n(t, i) : x.driver.appendChild(t, i);
    }, t.p = function () {
      return null == this[H] ? this[H] = this.m() : this[H];
    }, t.w = function () {
      return this.p();
    }, n;
  }(),
      B = function (n) {
    function t() {
      return n.apply(this, arguments) || this;
    }

    return q(t, n), t.prototype.m = function () {
      return x.driver.createEmpty(this);
    }, t;
  }(z);

  function G(n, t, i) {
    var r = n ? n.ref : null,
        u = t ? t.ref : null;
    r !== u && (r && K(n._owner, r, i), u && J(t._owner, u, i));
  }

  function J(n, t, i) {
    if (n) {
      var r = i.w();
      d(t) ? t(r) : u(t) ? t.current = r : n[D].refs[t] = r;
    } else C(3);
  }

  function K(n, t, i) {
    if (d(t)) t(null);else {
      var r = i.w();
      u(t) && t.current === r ? t.current = null : n[D].refs[t] === r && delete n[D].refs[t];
    }
  }

  function Q(n) {
    return e(n) && null !== n && n.type ? f(n.type) ? new x.y(n) : new x.b(n) : f(n) || o(n) ? new x.j(n + "") : S(n) ? new x.C(n) : (void 0 === n || A(n) || !1 === n || !0 === n || C(2, n), new x.g());
  }

  function X(n, t) {
    var i = A(n),
        r = A(t);
    return i || r ? i === r : !(!S(n) || !S(t)) || (f(n) || o(n) ? f(t) || o(t) : u(n) && u(t) && n.type === t.type && n.key === t.key);
  }

  function Y(n, t, i) {
    var r = t && t.key,
        u = "." + i.toString(36);

    if (f(r)) {
      var e = "$" + r;
      return void 0 === n[e] ? e : u;
    }

    return u;
  }

  function nn(n) {
    var t = n;

    while (t = n.h && n.h[P]) if (t instanceof x.b) n = t;else {
      for (var i = Object.keys(t.O), r = n.k - 1; 0 <= r; r--) {
        var u = t.O[i[r]].p();
        if (!S(u)) return u;
        if (0 < u.length) return u[u.length - 1];
      }

      if (!(t instanceof x.C)) return null;
      n = t;
    }
  }

  var tn = function () {
    function n(n, t) {
      this.props = n, this.context = t, this.refs = {};
    }

    var t = n.prototype;
    return t.setState = function (n, t) {
      this.updater.setState(this, n, t);
    }, t.forceUpdate = function (n) {
      this.updater.forceUpdate(this, n);
    }, n;
  }(),
      rn = function (r) {
    function n(n, t) {
      var i;
      return (i = r.call(this, n, t) || this).I = !0, i;
    }

    return q(n, r), n;
  }(tn),
      un = 1,
      en = function (t) {
    function n() {
      var n;
      return (n = t.call(this) || this).R = [], n.P = un++, n;
    }

    q(n, t);
    var i = n.prototype;
    return i.w = function () {
      return this.x().w();
    }, i.x = function () {
      return this[P][N];
    }, i.u = function (n) {
      this.R = n, this.forceUpdate();
    }, i.render = function () {
      return this.R;
    }, n;
  }(tn),
      fn = {
    set: function (n, t) {
      n._r || (n._r = t).P && (x.rootInstances[t.P] = t, x.rootComponents[t.P] = t[P]);
    },
    get: function (n) {
      return n._r;
    },
    remove: function (n) {
      var t = this.get(n);
      t && (n._r = null, t.P && (delete x.rootComponents[t.P], delete x.rootInstances[t.P]));
    },
    mount: function (n, t, i) {
      var r = i.parent,
          u = i.hydrate,
          e = x.driver;
      null == t && (t = e.createBody());
      var f,
          o = {
        element: n,
        container: t,
        hydrate: u
      };

      if (e.beforeRender && e.beforeRender(o), r) {
        var s = r[P];
        f = s.A(s._context);
      }

      var c = this.get(t);
      if (c && c.P) return f && (c[P].S = f), c.u(n), c;
      var h = Q(O(en)).d(t, null, f || {});
      return this.set(t, h), h.u(n), e.afterRender && e.afterRender(o), h;
    }
  },
      on = Object.assign,
      sn = "style",
      cn = "children",
      hn = /^on[A-Z]/,
      an = function (n) {
    function t() {
      return n.apply(this, arguments) || this;
    }

    q(t, n);
    var i = t.prototype;
    return i.d = function (n, t, i, r) {
      this.l(n, t, i);
      var u = this.a,
          e = u.props,
          f = u.type,
          o = e[cn],
          s = e.append || "tree";
      this.D = on({}, e[sn]);
      var c = {
        type: f,
        props: e
      };
      return (c[P] = this)[D] = c, "tree" === s ? (this.H(o, i), this._(r)) : (this._(r), this.H(o, i)), u && u.ref && J(u._owner, u.ref, this), c;
    }, i.H = function (n, t) {
      if (null == n) return n;
      var i = this.p();
      return this.N(i, Z(n), t);
    }, i.N = function (n, t, i, r) {
      for (var u = this.O = {}, e = [], f = 0, o = t.length; f < o; f++) {
        var s = t[f],
            c = Q(s);
        (u[Y(u, s, f)] = c).k = f;
        var h = c.d(n, this[D], i, r);
        e.push(h);
      }

      return e;
    }, i.U = function (n) {
      var t = this.O;

      if (t) {
        for (var i in t) {
          t[i].unmountComponent(n);
        }

        this.O = null;
      }
    }, i.unmountComponent = function (n) {
      if (this[H]) {
        var t = this.a.ref;
        t && K(this.a._owner, t, this), fn.remove(this[H]), n || x.driver.removeChild(this[H], this._parent);
      }

      this.U(!0), this.D = null, this.v();
    }, i.F = function (n, t, i, r) {
      G(n, this.a = t, this);
      var u = n.props,
          e = t.props;
      this.L(u, e), null == u[cn] || S(u[cn]) && 0 === u[cn].length ? this.H(e[cn], r) : this.M(e[cn], r);
    }, i.L = function (n, t) {
      var i,
          r,
          u,
          e = x.driver,
          f = this.p();

      for (i in n) if (i !== cn && null != n[i] && !t.hasOwnProperty(i)) if (i === sn) {
        var o = this.D;

        for (r in o) (u = u || {})[r] = "";

        this.D = null;
      } else if (hn.test(i)) {
        var s = n[i];
        d(s) && e.removeEventListener(f, i.slice(2).toLowerCase(), s);
      } else e.removeAttribute(f, i, n[i]);

      for (i in t) {
        var c = t[i],
            h = i === sn ? this.D : null != n ? n[i] : void 0;
        if (i !== cn && h !== c && (null != c || null != h)) if (i === sn) {
          if (c ? c = this.D = on({}, c) : this.D = null, null != h) {
            for (r in h) c && (c[r] || 0 === c[r]) || ((u = u || {})[r] = "");

            for (r in c) h[r] !== c[r] && ((u = u || {})[r] = c[r]);
          } else u = c;
        } else if (hn.test(i)) {
          var a = i.slice(2).toLowerCase();
          d(h) && e.removeEventListener(f, a, h, t), d(c) && e.addEventListener(f, a, c, t);
        } else null != c ? e.setAttribute(f, i, c) : e.removeAttribute(f, i, n[i]);
      }

      u && e.setStyle(f, u);
    }, i.M = function (n, t) {
      var i = this.O,
          u = x.driver;

      if (null != n || null != i) {
        var r = {};
        if (null != n) for (var e = 0, f = (n = Z(n)).length; e < f; e++) {
          var o = n[e],
              s = Y(r, o, e),
              c = i && i[s],
              h = c && c.a,
              a = c && c._context;
          null != c && X(h, o) ? (h === o && a === t || c.F(h, o, t, t), r[s] = c) : (c && (c.T = !0), r[s] = Q(o));
        }
        var l = this.p(),
            v = S(l),
            d = null,
            _ = null,
            p = !1,
            m = !1,
            w = null,
            y = !(!u.removeChildren || !(A(n) || n && !n.length));

        if (null != i) {
          for (var b in i) {
            var j = i[b],
                C = j.T || !r[b];
            d ? C && j.unmountComponent(y) : (m = C, S(_ = (d = j).p()) && (p = 0 === _.length, _ = _[0]));
          }

          (v && 0 === l.length || p) && (w = nn(this));
        }

        {
          function g(n, t) {
            for (var i = 0, r = (n = Z(n)).length; i < r; i++) w ? u.insertAfter(n[r - 1 - i], w) : _ ? u.insertBefore(n[i], _) : t && u.appendChild(n[i], t);
          }

          var O = 0,
              k = [];

          for (var E in r) {
            var I = r[E],
                R = i && i[E];

            if (R === I) {
              var P = R.p();
              R.k !== O && g(P);
            } else v && (l = this._parent), I.d(l, this[D], t, g);

            I.k = O++, S(w = I.p()) ? (k = k.concat(w), w = w[w.length - 1]) : k.push(w);
          }

          S(this[H]) && (this[H].length = 0, on(this[H], k));
        }
        m && d.unmountComponent(y), y && u.removeChildren(this[H]), this.O = r;
      }
    }, i.m = function () {
      var n = this[D],
          t = x.driver.createElement(n.type, n.props, this);
      return fn.set(t, n), t;
    }, t;
  }(z),
      ln = function (n) {
    function t() {
      return n.apply(this, arguments) || this;
    }

    q(t, n);
    var i = t.prototype;
    return i.F = function (n, t) {
      n !== (t = "" + t) && (this.a = t, x.driver.updateText(this.p(), t));
    }, i.m = function () {
      return x.driver.createText(this.a, this);
    }, t;
  }(z),
      vn = function (i) {
    function n(n, t) {
      var r;
      (r = i.call(this) || this).V = !0, r.W = n, r.Z = 0, r.$ = 0, r.q = {}, r.r = !1, r.e = !1, r.z = null, r.B = {}, r.didMount = [], r.didUpdate = [], r.willUnmount = [], r.state = s, n._forwardRef && (r.G = r._forwardRef = t);
      var u = n.J;
      return u && (r.shouldComponentUpdate = function (n) {
        for (var t = !0, i = u.length - 1; -1 < i; i--) if (t = u[i](r.props, n)) break;

        return !t || r.G !== r._forwardRef;
      }), r;
    }

    q(n, i);
    var t = n.prototype;
    return t.getHooks = function () {
      return this.q;
    }, t.getHookID = function () {
      return ++this.Z;
    }, t.useContext = function (n) {
      var t = this,
          i = n._contextID,
          r = this.B[i];

      if (!r) {
        var u = n.K(this);

        if (r = this.B[i] = {
          Q: u
        }, u) {
          function e(n) {
            r.X !== n && (t.e = !0, t.u());
          }

          u.Y(e), this.willUnmount.push(function () {
            return u.nn(e);
          });
        }
      }

      return r.X = r.Q ? r.Q.getValue() : n._defaultValue;
    }, t.componentWillMount = function () {
      this.e = !0;
    }, t.componentDidMount = function () {
      k(this.didMount);
    }, t.componentWillReceiveProps = function () {
      this.e = !0;
    }, t.componentDidUpdate = function () {
      k(this.didUpdate);
    }, t.componentWillUnmount = function () {
      k(this.willUnmount);
    }, t.u = function () {
      this[P].tn = !0, this.setState(s);
    }, t.render = function () {
      this.Z = 0, this.$ = 0, this.r = !1;
      var n = this.W(this.props, this._forwardRef ? this._forwardRef : this.context);

      while (this.r) this.$++, 24 < this.$ && j(4), this.Z = 0, this.r = !1, n = this.W(this.props, this._forwardRef ? this._forwardRef : this.context);

      return this.e && (this.z = n, this.e = !1), this.z;
    }, n;
  }(tn),
      dn = [];

  function _n(n) {
    return n.in;
  }

  function pn(n, t) {
    ((function (n) {
      return n.rn;
    })(n) || function (n, t) {
      return n.rn = t;
    }(n, [])).push(t);
  }

  function mn(n, t) {
    (_n(n) || function (n, t) {
      return n.in = t;
    }(n, [])).push(t);
  }

  function wn(n) {
    var t = n[P];

    if (t) {
      x.t = !0;
      var i = t.a,
          r = t._context,
          u = t.S || r;
      t.S = void 0, (_n(t) || t.tn) && (t.F(i, i, r, u), h(c)), x.t = !1;
    }
  }

  function yn(n, t) {
    return t[P]._mountID - n[P]._mountID;
  }

  function bn() {
    if (x.t) return _(bn);
    var n,
        t = dn;

    if (0 < t.length) {
      w(), dn = [], 1 < t.length && (t = t.sort(yn));

      while (n = t.pop()) wn(n);
    }
  }

  function jn(n, t) {
    if (~dn.indexOf(n) || dn.push(n), t) {
      if (1 < dn.length) return;

      _(bn);
    } else bn();
  }

  function Cn(n, t, i) {
    var r = n[P];

    if (r) {
      i && pn(r, i);
      var u = r[N];
      t ? (mn(r, t), !r.un && u && jn(n, !0)) : (r.tn = !0, u && jn(n));
    }
  }

  var gn = {
    setState: function (n, t, i) {
      x.t || w(), Cn(n, t, i);
    },
    forceUpdate: function (n, t) {
      Cn(n, null, t);
    }
  };

  function On(n, t, i) {
    try {
      return n();
    } catch (n) {
      i ? i(n) : function (n, t) {
        var i = $(n, function (n) {
          return n.componentDidCatch;
        });
        i ? y(function () {
          var n = i[P];
          n && On(function () {
            i.componentDidCatch(t);
          }, n.h);
        }) : r(function () {
          throw t;
        }, 0);
      }(t, n);
    }
  }

  function kn(n, t) {
    y(function () {
      On(n, t);
    });
  }

  function En(n, t) {
    n && kn(function () {
      k(n, t);
    }, t);
  }

  var In = function (n) {
    function t() {
      return n.apply(this, arguments) || this;
    }

    q(t, n);
    var i = t.prototype;
    return i.d = function (n, t, i, r) {
      this.l(n, t, i);
      var u,
          e,
          f = this.a,
          o = f.type,
          s = f.ref,
          c = f.props,
          h = o.prototype,
          a = this.en(i);

      if (On(function () {
        h && h.render ? u = new o(c, a) : d(o) ? u = new vn(o, s) : j(6, o);
      }, t), u) {
        u.props = c, u.context = a, u.refs = {}, u.updater = gn;
        var l = ((u[P] = this)[D] = u).state;
        void 0 === l && (u.state = l = null), u.componentWillMount && On(function () {
          u.componentWillMount();
        }, u), u.state = (x.owner = this).fn(c, a);
        var v = this.rn;
        return this.rn = null, On(function () {
          e = u.render();
        }, u), x.owner = null, this[N] = Q(e), this[N].d(this._parent, u, this.A(i), r), !f.type._forwardRef && s && J(f._owner, s, this), u.componentDidMount && kn(function () {
          u.componentDidMount();
        }, u), En(v, u), u;
      }
    }, i.unmountComponent = function (n) {
      var t = this[D];

      if (t && t.componentWillUnmount && On(function () {
        t.componentWillUnmount();
      }, t), null != this[N]) {
        var i = this.a,
            r = i.ref;
        !i.type._forwardRef && r && K(i._owner, r, this), this[N].unmountComponent(n), this[N] = null;
      }

      this.in = null, this.tn = !1, this.v();
    }, i.en = function (n) {
      var t = {},
          i = this.a.type.contextTypes;
      if (i) for (var r in i) t[r] = n[r];
      return t;
    }, i.A = function (n) {
      var t = this[D],
          i = t.getChildContext && t.getChildContext();
      return i ? on({}, n, i) : n;
    }, i.fn = function (n, t) {
      var i = this[D],
          r = this.in;
      if (!r) return i.state;
      this.in = null;

      for (var u = on({}, i.state), e = 0; e < r.length; e++) {
        var f = r[e];
        on(u, d(f) ? f.call(i, u, n, t) : f);
      }

      return u;
    }, i.F = function (c, h, n, a) {
      var l = this,
          v = this[D];
      v && On(function () {
        var n, t, i;
        l._context === a ? t = v.context : (t = l.en(a), n = !0), i = h.props, c !== h && (n = !0), n && v.componentWillReceiveProps && (l.un = !0, v.componentWillReceiveProps(i, t), l.un = !1), l.a.type._forwardRef ? (v.G = c.ref, v._forwardRef = h.ref) : G(c, h, l);
        var r = !0,
            u = v.props,
            e = v.state,
            f = l.fn(i, t),
            o = l.rn;

        if (l.rn = null, l.tn || (v.shouldComponentUpdate ? r = v.shouldComponentUpdate(i, f, t) : v.I && (r = !R(u, i) || !R(e, f))), r) {
          l.tn = !1;
          var s = v.context;
          v.componentWillUpdate && v.componentWillUpdate(i, f, t), l.a = h, l._context = a, v.props = i, v.state = f, v.context = t, l.on(a), v.componentDidUpdate && kn(function () {
            v.componentDidUpdate(u, e, s);
          }, v);
        } else l.a = h, l._context = a, v.props = i, v.state = f, v.context = t;

        En(o, v);
      }, v);
    }, i.on = function (n) {
      var t,
          i = this[N],
          r = i.a,
          u = this[D];

      if (x.owner = this, t = u.render(), x.owner = null, X(r, t)) {
        var e = i._context,
            f = this.A(n);
        r === t && e === f || i.F(r, t, e, f);
      } else {
        var o = null,
            s = i.p();
        S(s) && 0 === s.length && null == u.P && (o = nn(i)), i.unmountComponent(!0), this[N] = Q(t), this[N].d(this._parent, u, this.A(n), function (n, t) {
          var i = x.driver;
          s = Z(s), n = Z(n);

          for (var r = 0; r < n.length; r++) {
            var u = n[r];
            s[r] ? i.replaceChild(u, s[r]) : o ? i.insertAfter(u, o) : i.appendChild(u, t), o = u;
          }

          for (var e = n.length; e < s.length; e++) i.removeChild(s[e]);
        });
      }
    }, i.p = function () {
      var n = this[N];
      if (n) return n.p();
    }, i.w = function () {
      var n = this[D];
      return n.V ? null : n;
    }, t;
  }(z),
      Rn = function (n) {
    function t() {
      return n.apply(this, arguments) || this;
    }

    q(t, n);
    var i = t.prototype;
    return i.d = function (n, t, i, r) {
      this.l(n, t, i);
      var u = this[D] = {};
      (u[P] = this).H(this.a, i);
      var e = this.p();
      if (r) r(e, n);else for (var f = 0; f < e.length; f++) x.driver.appendChild(e[f], n);
      return u;
    }, i.H = function (n, t) {
      var i = this.p();
      return this.N(this._parent, n, t, function (n) {
        n = Z(n);

        for (var t = 0; t < n.length; t++) i.push(n[t]);
      });
    }, i.unmountComponent = function (n) {
      var t = this[H];
      if (t && (fn.remove(t), !n)) for (var i = 0, r = t.length; i < r; i++) x.driver.removeChild(t[i]);
      this.U(!0), this.v();
    }, i.F = function (n, t, i, r) {
      this.a = t, this.M(this.a, r);
    }, i.m = function () {
      return [];
    }, t;
  }(an);

  var Pn = {
    __proto__: null,
    createElement: O,
    createContext: function (s) {
      var c = "_c" + n++;

      function h(n) {
        return $(n, function (n) {
          return n.sn === c;
        });
      }

      return {
        Provider: function () {
          function n() {
            this.sn = c, this.cn = [];
          }

          var t = n.prototype;
          return t.Y = function (n) {
            this.cn.push(n);
          }, t.nn = function (t) {
            this.cn = this.cn.filter(function (n) {
              return n !== t;
            });
          }, t._getChildContext = function () {
            var n;
            return (n = {})[c] = this, n;
          }, t.getValue = function () {
            return void 0 !== this.props.value ? this.props.value : s;
          }, t.componentDidUpdate = function (n) {
            this.props.value !== n.value && k(this.cn, null, this.getValue());
          }, t.render = function () {
            return this.props.children;
          }, n;
        }(),
        Consumer: function (n, t) {
          var i = this,
              r = M(function () {
            return t[c] || h(i);
          })[0],
              u = r ? r.getValue() : s,
              e = M(u),
              f = e[1];

          if (u === e[0]) {
            T(function () {
              if (r) return r.Y(f), function () {
                r.nn(f);
              };
            }, []);
            var o = Z(n.children)[0];
            return d(o) ? o(u) : void 0;
          }

          f(u);
        },
        _contextID: c,
        _defaultValue: s,
        K: h
      };
    },
    createRef: function () {
      return {
        current: null
      };
    },
    forwardRef: function (n) {
      return n._forwardRef = !0, n;
    },
    memo: function (n, t) {
      return t = t || R, n.J ? n.J.push(t) : n.J = [t], n;
    },
    Fragment: function (n) {
      return n.children;
    },
    render: function (n, t, i, r) {
      d(i) && (r = i, i = null), function (n) {
        var t = n.driver;
        x.g = B, x.y = an, x.j = ln, x.C = Rn, x.b = In, (x.driver = t || x.driver) || j(5);
      }(i = i || s);
      var u = fn.mount(n, t, i).w();
      return r && r.call(u), u;
    },
    Component: tn,
    version: "1.1.0",
    shared: {
      Host: x,
      Instance: fn,
      Element: a,
      flattenChildren: v
    },
    useState: M,
    useContext: function (n) {
      return F().useContext(n);
    },
    useEffect: function (n, t) {
      V(n, t, !0);
    },
    useLayoutEffect: T,
    useRef: function (n) {
      var t = F(),
          i = t.getHookID(),
          r = t.getHooks();
      return r[i] || (r[i] = {
        current: n
      }), r[i];
    },
    useCallback: function (n, t) {
      return W(function () {
        return n;
      }, t);
    },
    useMemo: W,
    useReducer: function (n, t, i) {
      var u = F(),
          e = u.getHookID(),
          f = u.getHooks(),
          r = f[e];

      if (!r) {
        var o = d(i) ? i(t) : t;
        return f[e] = [o, function (n) {
          x.t || w();
          var t = f[e][2];
          if (U() === u) t.hn.push(n), u.r = !0;else {
            var i = t.an,
                r = (0, t.ln)(i, n);
            if (I(r, i)) return;
            t.an = r, t.hn.push(n), u.u();
          }
        }, {
          hn: [],
          ln: n,
          an: o
        }];
      }

      var s = r[2],
          c = r[0];
      if (0 < u.$) for (var h = 0; h < s.hn.length; h++) c = n(c, s.hn[h]);else c = s.an;
      return I(c, r[0]) || (r[0] = c, u.e = !0), s.ln = n, s.an = c, s.hn.length = 0, f[e];
    },
    useImperativeHandle: function (n, t, i) {
      T(function () {
        return d(n) ? (n(t()), function () {
          return n(null);
        }) : null != n ? (n.current = t(), function () {
          n.current = null;
        }) : void 0;
      }, S(i) ? i.concat([n]) : null);
    },
    PureComponent: rn
  };
   true ? module.exports = Pn : undefined;
}(); //# sourceMappingURL=rax.min.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.renderToString = renderToString;
exports.default = void 0;

var _rax = __webpack_require__(0);

var _attribute = __webpack_require__(14);

var _CSSProperty = __webpack_require__(15);

var EMPTY_OBJECT = {};
var VOID_ELEMENTS = {
  'area': true,
  'base': true,
  'br': true,
  'col': true,
  'embed': true,
  'hr': true,
  'img': true,
  'input': true,
  'link': true,
  'meta': true,
  'param': true,
  'source': true,
  'track': true,
  'wbr': true
};
var ESCAPE_LOOKUP = {
  '&': '&amp;',
  '>': '&gt;',
  '<': '&lt;',
  '"': '&quot;',
  '\'': '&#x27;'
};
var ESCAPE_REGEXP = /[&><"']/g;
var ESCAPE_TEST_REGEXP = /[&><"']/;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

function escapeText(text) {
  if (!ESCAPE_TEST_REGEXP.test(text)) {
    return text;
  }

  return String(text).replace(ESCAPE_REGEXP, escaper);
}

function merge(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

var DEFAULT_STYLE_OPTIONS = {
  defaultUnit: 'px',
  viewportWidth: 750,
  unitPrecision: 5
};
var UPPERCASE_REGEXP = /[A-Z]/g;
var NUMBER_REGEXP = /^[0-9]*$/;
var CSSPropCache = {};

function styleToCSS(style, options) {
  if (options === void 0) {
    options = {};
  }

  var css = '';

  if (Array.isArray(style)) {
    style = style.reduce(function (prev, curr) {
      return Object.assign(prev, curr);
    }, {});
  } // Use var avoid v8 warns "Unsupported phi use of const or let variable"


  for (var prop in style) {
    var val = style[prop];
    var unit = '';

    if (val == null) {
      continue;
    }

    if (typeof val === 'number' && _CSSProperty.UNITLESS_NUMBER_PROPS[prop]) {// Noop
    } else if (typeof val === 'number' || typeof val === 'string' && NUMBER_REGEXP.test(val)) {
      unit = options.defaultUnit;
    }

    if (typeof val === 'string' && val.indexOf('rpx') > -1 || unit === 'rpx') {
      val = rpx2vw(val, options);
      unit = val === 0 ? '' : 'vw';
    }

    prop = CSSPropCache[prop] ? CSSPropCache[prop] : CSSPropCache[prop] = prop.replace(UPPERCASE_REGEXP, '-$&').toLowerCase();
    css = css + (prop + ":" + val + unit + ";");
  }

  return css;
}

function createMarkupForProperty(prop, value, options) {
  if (prop === 'children') {
    // Ignore children prop
    return '';
  }

  if (prop === 'style') {
    return " style=\"" + styleToCSS(value, options) + "\"";
  }

  if (prop === 'className') {
    return typeof value === 'string' ? " class=\"" + escapeText(value) + "\"" : '';
  }

  if (prop === 'dangerouslySetInnerHTML') {
    // Ignore innerHTML
    return '';
  }

  if ((0, _attribute.shouldRemoveAttribute)(prop, value)) {
    return '';
  }

  var propInfo = (0, _attribute.getPropertyInfo)(prop);
  var propType = propInfo ? propInfo.type : null;
  var valueType = typeof value;

  if (propType === _attribute.BOOLEAN || propType === _attribute.OVERLOADED_BOOLEAN && value === true) {
    return " " + prop;
  }

  if (valueType === 'string') {
    return " " + prop + "=\"" + escapeText(value) + "\"";
  }

  if (valueType === 'number') {
    return " " + prop + "=\"" + String(value) + "\"";
  }

  if (valueType === 'boolean') {
    if (propType === _attribute.BOOLEANISH_STRING || prop.indexOf('data-') === 0 || prop.indexOf('aria-') === 0) {
      return " " + prop + "=\"" + (value ? 'true' : 'false') + "\"";
    }
  }

  return '';
}

function propsToString(props, options) {
  var html = '';

  for (var prop in props) {
    var value = props[prop];

    if (prop === 'defaultValue') {
      if (props.value == null) {
        prop = 'value';
      } else {
        continue;
      }
    }

    if (prop === 'defaultChecked') {
      if (!props.checked) {
        prop = 'checked';
      } else {
        continue;
      }
    }

    html = html + createMarkupForProperty(prop, value, options);
  }

  return html;
}

function rpx2vw(val, opts) {
  var pixels = parseFloat(val);
  var vw = pixels / opts.viewportWidth * 100;
  var parsedVal = parseFloat(vw.toFixed(opts.unitPrecision));
  return parsedVal;
}

function checkContext(element) {
  // Filter context by `contextTypes` or prevent pass context to child without `contextTypes`,
  // need to distinguish context for passing to child and render, which will cause `Consumer` can not work correctly.
  // The best way to get context is from the nearest parent provider, but it will increase the complexity of SSR.
  if (element.contextTypes || element.childContextTypes) {
    console.error('Warning: ' + 'The legacy "contextTypes" and "childContextTypes" API not working properly in server renderer, ' + 'use the new context API. ' + ("(Current: " + _rax.shared.Host.owner.__getName() + ")"));
  }
}

var updater = {
  setState: function (component, partialState) {
    if (partialState) {
      if (!component._pendingState) {
        component._pendingState = partialState;
      } else {
        merge(component._pendingState, partialState);
      }
    }
  },
  forceState: function () {// Noop
  }
};
/**
 * Functional Reactive Component Class Wrapper
 */

var ServerReactiveComponent =
/*#__PURE__*/
function () {
  function ServerReactiveComponent(pureRender, ref) {
    // A pure function
    this._render = pureRender;
    this._hookID = 0;
    this._hooks = {}; // Handles store

    this.didMount = [];
    this.didUpdate = [];
    this.willUnmount = [];

    if (pureRender._forwardRef) {
      this._forwardRef = ref;
    }
  }

  var _proto = ServerReactiveComponent.prototype;

  _proto.getHooks = function () {
    return this._hooks;
  };

  _proto.getHookID = function () {
    return ++this._hookID;
  };

  _proto.useContext = function (context) {
    var contextID = context._contextID;

    if (this.context[contextID]) {
      return this.context[contextID].getValue();
    } else {
      return context._defaultValue;
    }
  };

  _proto.render = function () {
    this._hookID = 0;

    var children = this._render(this.props, this._forwardRef ? this._forwardRef : this.context);

    return children;
  };

  return ServerReactiveComponent;
}();

function createInstance(element, context) {
  var type = element.type;
  var props = element.props || EMPTY_OBJECT;
  var instance; // class component

  if (type.prototype && type.prototype.render) {
    instance = new type(props, context); // eslint-disable-line new-cap

    instance.props = props;
    instance.context = context; // Inject the updater into instance

    instance.updater = updater;

    if (instance.componentWillMount) {
      instance.componentWillMount();

      if (instance._pendingState) {
        var state = instance.state;
        var pending = instance._pendingState;

        if (state == null) {
          instance.state = pending;
        } else {
          for (var key in pending) {
            state[key] = pending[key];
          }
        }

        instance._pendingState = null;
      }
    }
  } else {
    var ref = element.ref;
    instance = new ServerReactiveComponent(type, ref);
    instance.props = props;
    instance.context = context;
  }

  return instance;
}

function renderElementToString(element, context, options) {
  if (typeof element === 'string') {
    return escapeText(element);
  } else if (element == null || element === false || element === true) {
    return '<!-- _ -->';
  } else if (typeof element === 'number') {
    return String(element);
  } else if (Array.isArray(element)) {
    var html = '';

    for (var index = 0, length = element.length; index < length; index++) {
      var child = element[index];
      html = html + renderElementToString(child, context, options);
    }

    return html;
  } // pre compiled html


  if (element.__html != null) {
    // __html may be empty string
    return element.__html;
  } // pre compiled attrs


  if (element.__attrs) {
    return propsToString(element.__attrs, options);
  }

  var type = element.type;

  if (type) {
    // class component || function component
    if (type.prototype && type.prototype.render || typeof type === 'function') {
      var instance = createInstance(element, context);
      _rax.shared.Host.owner = {
        // Give the component name in render error info (only for development)
        __getName: function () {
          return type.displayName || type.name || element;
        },
        _instance: instance
      };

      if (false) {}

      var currentContext = instance.context;
      var childContext;

      if (instance.getChildContext) {
        childContext = instance.getChildContext();
      } else if (instance._getChildContext) {
        // Only defined in Provider
        childContext = instance._getChildContext();
      }

      if (childContext) {
        // Why not use Object.assign? for better performance
        currentContext = merge({}, context, childContext);
      }

      var renderedElement = instance.render();
      return renderElementToString(renderedElement, currentContext, options);
    } else if (typeof type === 'string') {
      var props = element.props || EMPTY_OBJECT;
      var isVoidElement = VOID_ELEMENTS[type];

      var _html = "<" + type + propsToString(props, options);

      var innerHTML;

      if (props.dangerouslySetInnerHTML) {
        innerHTML = props.dangerouslySetInnerHTML.__html;
      }

      if (isVoidElement) {
        _html = _html + '>';
      } else {
        _html = _html + '>'; // When child is null or undefined, it should be render as <!-- _ -->

        if (props.hasOwnProperty('children')) {
          var children = props.children;

          if (Array.isArray(children)) {
            for (var i = 0, l = children.length; i < l; i++) {
              var child = children[i];
              _html = _html + renderElementToString(child, context, options);
            }
          } else {
            _html = _html + renderElementToString(children, context, options);
          }
        } else if (innerHTML != null) {
          // When dangerouslySetInnerHTML is 0, it should be render as 0
          _html = _html + innerHTML;
        }

        _html = _html + ("</" + type + ">");
      }

      return _html;
    } else {
      throwInValidElementError(element);
    }
  } else {
    throwInValidElementError(element);
  }
}

function throwInValidElementError(element) {
  var typeInfo = element === undefined ? '' : '(found: ' + (isPlainObject(element) ? "object with keys {" + Object.keys(element) + "}" : element) + ')';
  console.error("Invalid element type, expected types: Element instance, string, boolean, array, null, undefined. " + typeInfo);
}

function isPlainObject(obj) {
  return EMPTY_OBJECT.toString.call(obj) === '[object Object]';
}

function renderToString(element, options) {
  return renderElementToString(element, EMPTY_OBJECT, Object.assign({}, DEFAULT_STYLE_OPTIONS, options));
}

var _default = {
  renderToString: renderToString
};
exports.default = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getPropertyInfo = getPropertyInfo;
exports.shouldRemoveAttribute = shouldRemoveAttribute;
exports.POSITIVE_NUMERIC = exports.NUMERIC = exports.OVERLOADED_BOOLEAN = exports.BOOLEAN = exports.BOOLEANISH_STRING = exports.STRING = void 0; // A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in Rax. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

exports.STRING = STRING;
var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

exports.BOOLEAN = BOOLEAN;
var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

exports.NUMERIC = NUMERIC;
var POSITIVE_NUMERIC = 6;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
var properties = {};

function getPropertyInfo(prop) {
  return properties[prop];
}

function shouldRemoveAttribute(prop, value) {
  var propertyInfo = getPropertyInfo(prop);
  var propType = propertyInfo ? propertyInfo.type : null;
  var valueType = typeof value;

  if (value === null || valueType === 'undefined') {
    return true;
  }

  switch (valueType) {
    case 'function':
    case 'symbol':
      return true;
  }

  if (propType !== null) {
    switch (propType) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = {
    type: BOOLEANISH_STRING
  };
});
['allowFullScreen', 'async', 'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', 'itemScope', 'checked', 'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = {
    type: BOOLEAN
  };
});
['capture', 'download'].forEach(function (name) {
  properties[name] = {
    type: OVERLOADED_BOOLEAN
  };
});
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = {
    type: POSITIVE_NUMERIC
  };
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.UNITLESS_NUMBER_PROPS = void 0;
var TRUE = true;
/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var UNITLESS_NUMBER_PROPS = {
  animationIterationCount: TRUE,
  borderImageOutset: TRUE,
  borderImageSlice: TRUE,
  borderImageWidth: TRUE,
  boxFlex: TRUE,
  boxFlexGroup: TRUE,
  boxOrdinalGroup: TRUE,
  columnCount: TRUE,
  columns: TRUE,
  flex: TRUE,
  flexGrow: TRUE,
  flexPositive: TRUE,
  flexShrink: TRUE,
  flexNegative: TRUE,
  flexOrder: TRUE,
  gridArea: TRUE,
  gridRow: TRUE,
  gridRowEnd: TRUE,
  gridRowSpan: TRUE,
  gridRowStart: TRUE,
  gridColumn: TRUE,
  gridColumnEnd: TRUE,
  gridColumnSpan: TRUE,
  gridColumnStart: TRUE,
  fontWeight: TRUE,
  lineClamp: TRUE,
  lineHeight: TRUE,
  opacity: TRUE,
  order: TRUE,
  orphans: TRUE,
  tabSize: TRUE,
  widows: TRUE,
  zIndex: TRUE,
  zoom: TRUE,
  // SVG-related properties
  fillOpacity: TRUE,
  floodOpacity: TRUE,
  stopOpacity: TRUE,
  strokeDasharray: TRUE,
  strokeDashoffset: TRUE,
  strokeMiterlimit: TRUE,
  strokeOpacity: TRUE,
  strokeWidth: TRUE
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

exports.UNITLESS_NUMBER_PROPS = UNITLESS_NUMBER_PROPS;

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(UNITLESS_NUMBER_PROPS).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    UNITLESS_NUMBER_PROPS[prefixKey(prefix, prop)] = UNITLESS_NUMBER_PROPS[prop];
  });
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var classNames = function () {
    // don't inherit from Object so we can skip hasOwnProperty check later
    // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
    function StorageObject() {}

    StorageObject.prototype = Object.create(null);

    function _parseArray(resultSet, array) {
      var length = array.length;

      for (var i = 0; i < length; ++i) {
        _parse(resultSet, array[i]);
      }
    }

    var hasOwn = {}.hasOwnProperty;

    function _parseNumber(resultSet, num) {
      resultSet[num] = true;
    }

    function _parseObject(resultSet, object) {
      for (var k in object) {
        if (hasOwn.call(object, k)) {
          // set value to false instead of deleting it to avoid changing object structure
          // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
          resultSet[k] = !!object[k];
        }
      }
    }

    var SPACE = /\s+/;

    function _parseString(resultSet, str) {
      var array = str.split(SPACE);
      var length = array.length;

      for (var i = 0; i < length; ++i) {
        resultSet[array[i]] = true;
      }
    }

    function _parse(resultSet, arg) {
      if (!arg) return;
      var argType = typeof arg; // 'foo bar'

      if (argType === 'string') {
        _parseString(resultSet, arg); // ['foo', 'bar', ...]

      } else if (Array.isArray(arg)) {
        _parseArray(resultSet, arg); // { 'foo': true, ... }

      } else if (argType === 'object') {
        _parseObject(resultSet, arg); // '130'

      } else if (argType === 'number') {
        _parseNumber(resultSet, arg);
      }
    }

    return function () {
      // don't leak arguments
      // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
      var len = arguments.length;
      var args = Array(len);

      for (var i = 0; i < len; i++) {
        args[i] = arguments[i];
      }

      var classSet = new StorageObject();

      _parseArray(classSet, args);

      var list = [];

      for (var k in classSet) {
        if (classSet[k]) {
          list.push(k);
        }
      }

      return list.join(' ');
    };
  }();

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var _styles = {
  "rax-view": {
    "boxSizing": "border-box",
    "display": "flex",
    "flexDirection": "column",
    "alignContent": "flex-start",
    "flexShrink": 0,
    "position": "relative"
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var _styles = {
  "rax-text": {
    "boxSizing": "border-box",
    "display": "block",
    "fontSize": "4.26667vw",
    "whiteSpace": "pre-wrap"
  },
  "rax-text--overflow-hidden": {
    "overflow": "hidden"
  },
  "rax-text--singleline": {
    "whiteSpace": "nowrap"
  },
  "rax-text--multiline": {
    "display": "-webkit-box",
    "WebkitBoxOrient": "vertical"
  }
};
  
  
  
  module.exports = _styles;
  

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var push = function (options) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      location.href = options.url;
    });
    resolve();
  });
};

var go = function (options) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      history.go(options.step);
    });
    resolve();
  });
};

var pop = function () {
  return go({
    step: -1
  });
};

var _default = {
  push: push,
  pop: pop,
  go: go
};
exports.default = _default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var weexModule;

function getNavigator() {
  return weexModule = weexModule || __weex_require__('@weex-module/navigator');
}

var push = function (options) {
  return new Promise(function (resolve) {
    var url = options.url,
        _options$animated = options.animated,
        animated = _options$animated === void 0 ? true : _options$animated;
    getNavigator().push({
      url: url,
      animated: animated.toString()
    }, function () {
      resolve();
    });
  });
};

var pop = function (options) {
  return new Promise(function (resolve) {
    var animated = options ? options.animated ? options.animated : true : true;
    getNavigator().pop({
      animated: animated.toString()
    }, function () {
      resolve();
    });
  });
};

var go = function (options) {
  return new Promise(function (resolve, reject) {
    var step = options.step,
        _options$animated2 = options.animated,
        animated = _options$animated2 === void 0 ? true : _options$animated2;

    if (step < 0) {
      pop({
        animated: animated
      }).then(resolve);
    } else {
      reject();
    }
  });
};

var _default = {
  push: push,
  pop: pop,
  go: go
};
exports.default = _default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var push = function (options) {
  return new Promise(function (resolve, reject) {
    var url = options.url;
    my.navigateTo({
      url: url,
      success: resolve,
      fail: reject
    });
  });
};

var pop = function () {
  return new Promise(function (resolve, reject) {
    my.navigateBack({
      delta: 1,
      success: resolve,
      fail: reject
    });
  });
};

var go = function (options) {
  return new Promise(function (resolve, reject) {
    var step = options.step;

    if (step < 0) {
      my.navigateBack({
        delta: Math.abs(step),
        success: resolve,
        fail: reject
      });
    } else {
      reject();
    }
  });
};

var _default = {
  push: push,
  pop: pop,
  go: go
};
exports.default = _default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var push = function (options) {
  return new Promise(function (resolve, reject) {
    var url = options.url;
    wx.navigateTo({
      url: url,
      success: resolve,
      fail: reject
    });
  });
};

var pop = function () {
  return new Promise(function (resolve, reject) {
    wx.navigateBack({
      delta: 1,
      success: resolve,
      fail: reject
    });
  });
};

var go = function (options) {
  return new Promise(function (resolve, reject) {
    var step = options.step;

    if (step < 0) {
      wx.navigateBack({
        delta: Math.abs(step),
        success: resolve,
        fail: reject
      });
    } else {
      reject();
    }
  });
};

var _default = {
  push: push,
  pop: pop,
  go: go
};
exports.default = _default;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rax_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var rax_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rax_document__WEBPACK_IMPORTED_MODULE_1__);



function Document() {
  return [{
    __html: "<html><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover\"/><title>toker</title>"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_document__WEBPACK_IMPORTED_MODULE_1__["Style"], null), {
    __html: "</head><body>"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_document__WEBPACK_IMPORTED_MODULE_1__["Root"], null), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_document__WEBPACK_IMPORTED_MODULE_1__["Data"], null), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_document__WEBPACK_IMPORTED_MODULE_1__["Script"], null), {
    __html: "</body></html>"
  }];
}

/* harmony default export */ __webpack_exports__["default"] = (Document);

/***/ }),
/* 24 */
/***/ (function(module) {

module.exports = JSON.parse("{\"routes\":[{\"path\":\"/\",\"name\":\"home\",\"source\":\"pages/Home/index\"},{\"path\":\"/detail\",\"name\":\"detail\",\"source\":\"pages/Detail/index\"}],\"historyType\":\"browser\",\"hydrate\":true,\"window\":{\"defaultTitle\":\"Rax App\"}}");

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"toker\",\"author\":\"jiajie G\",\"production\":true,\"scripts\":{\"build\":\"build-scripts build\",\"start\":\"build-scripts start\"},\"dependencies\":{\"driver-universal\":\"^3.0.0\",\"rax\":\"^1.1.0\",\"rax-app\":\"^0.2.0\",\"rax-document\":\"^0.1.0\",\"rax-image\":\"^2.0.0\",\"rax-link\":\"^1.0.1\",\"rax-server-renderer\":\"^1.1.0\",\"rax-text\":\"^1.0.0\",\"rax-view\":\"^1.0.0\",\"universal-navigate\":\"^1.0.2\"},\"devDependencies\":{\"build-plugin-rax-ssr\":\"^1.0.0\",\"build-plugin-rax-multi-pages\":\"^0.1.2\",\"build-plugin-rax-app\":\"^1.0.0\",\"@alib/build-scripts\":\"^0.1.0\"}}");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.render = render;
exports.renderToHTML = renderToHTML;
exports.renderWithContext = renderWithContext;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _rax = __webpack_require__(0);

var _raxServerRenderer = _interopRequireDefault(__webpack_require__(13));

var _index = _interopRequireDefault(__webpack_require__(31));

var _index2 = _interopRequireDefault(__webpack_require__(23));

var _app = _interopRequireDefault(__webpack_require__(24));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Shell = function (props) {
  return props.children;
};

function renderComponentToHTML() {
  return _renderComponentToHTML.apply(this, arguments);
}

function _renderComponentToHTML() {
  _renderComponentToHTML = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(Component, ctx) {
    var shellData, pageData, documentData, initialData, contentElement, initialHtml, DocumentContextProvider, DocumentContextProviderElement, html;
    return _regenerator.default.wrap(function (_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getInitialProps(Shell, ctx);

          case 2:
            shellData = _context.sent;
            _context.next = 5;
            return getInitialProps(Component, ctx);

          case 5:
            pageData = _context.sent;
            _context.next = 8;
            return getInitialProps(_index2.default, ctx);

          case 8:
            documentData = _context.sent;
            initialData = {
              shellData: shellData,
              pageData: pageData,
              pagePath: '/'
            };
            contentElement = (0, _rax.createElement)(Shell, shellData, (0, _rax.createElement)(Component, pageData));
            initialHtml = _raxServerRenderer.default.renderToString(contentElement, {
              defaultUnit: 'rpx'
            }); // This loader is executed after babel, so need to be tansformed to ES5.

            DocumentContextProvider = function () {};

            DocumentContextProvider.prototype.getChildContext = function () {
              return {
                __initialHtml: initialHtml,
                __initialData: JSON.stringify(initialData),
                __pageName: 'home',
                __styles: [],
                __scripts: ["/web/home.js"]
              };
            };

            DocumentContextProvider.prototype.render = function () {
              return (0, _rax.createElement)(_index2.default, documentData);
            };

            DocumentContextProviderElement = (0, _rax.createElement)(DocumentContextProvider);
            html = '<!doctype html>' + _raxServerRenderer.default.renderToString(DocumentContextProviderElement);
            return _context.abrupt("return", html);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _renderComponentToHTML.apply(this, arguments);
}

function render() {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    var html;
    return _regenerator.default.wrap(function (_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return renderToHTML(req, res);

          case 2:
            html = _context2.sent;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.send(html);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _render.apply(this, arguments);
}

function renderToHTML() {
  return _renderToHTML.apply(this, arguments);
} // Handler for Midway FaaS and Koa


function _renderToHTML() {
  _renderToHTML = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    var html;
    return _regenerator.default.wrap(function (_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return renderComponentToHTML(_index.default, {
              req: req,
              res: res
            });

          case 2:
            html = _context3.sent;
            return _context3.abrupt("return", html);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _renderToHTML.apply(this, arguments);
}

function renderWithContext() {
  return _renderWithContext.apply(this, arguments);
}

function _renderWithContext() {
  _renderWithContext = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(ctx) {
    var html;
    return _regenerator.default.wrap(function (_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return renderComponentToHTML(_index.default, ctx);

          case 2:
            html = _context4.sent;
            ctx.set('Content-Type', 'text/html; charset=utf-8');
            ctx.body = html;

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _renderWithContext.apply(this, arguments);
}

var _default = render;
exports.default = _default;

function getInitialProps() {
  return _getInitialProps.apply(this, arguments);
}

function _getInitialProps() {
  _getInitialProps = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(Component, ctx) {
    var props, message;
    return _regenerator.default.wrap(function (_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (Component.getInitialProps) {
              _context5.next = 2;
              break;
            }

            return _context5.abrupt("return", null);

          case 2:
            _context5.next = 4;
            return Component.getInitialProps(ctx);

          case 4:
            props = _context5.sent;

            if (!(!props || typeof props !== 'object')) {
              _context5.next = 8;
              break;
            }

            message = '"getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
            throw new Error(message);

          case 8:
            return _context5.abrupt("return", props);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getInitialProps.apply(this, arguments);
}

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/rax/index.js
var rax = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/rax-view/lib/index.js
var lib = __webpack_require__(3);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/rax-text/lib/index.js
var rax_text_lib = __webpack_require__(2);
var rax_text_lib_default = /*#__PURE__*/__webpack_require__.n(rax_text_lib);

// EXTERNAL MODULE: ./src/pages/Home/index.css
var Home = __webpack_require__(8);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home);

// EXTERNAL MODULE: ./src/components/Logo/index.jsx
var Logo = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/universal-navigate/lib/index.js
var universal_navigate_lib = __webpack_require__(7);
var universal_navigate_lib_default = /*#__PURE__*/__webpack_require__.n(universal_navigate_lib);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(25);

// CONCATENATED MODULE: ./src/utils/index.jsx


function routerUrl(pageName) {
  // ./detail.html
  // 开发环境 ./Detail
  // process.env.NODE_ENV 不生效
  if (package_0.production) {
    return './' + pageName + '.html';
  } else {
    return './' + pageName;
  }
}

/* harmony default export */ var utils = (routerUrl);
// CONCATENATED MODULE: ./src/pages/Home/index.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home_Home; });







function Home_Home() {
  console.log('当前环境', "production");
  return Object(rax["createElement"])(lib_default.a, {
    style: Home_default.a.home
  }, Object(rax["createElement"])(Logo["a" /* default */], null), Object(rax["createElement"])(rax_text_lib_default.a, {
    style: Home_default.a.title
  }, "\u6211\u662F\u9996\u9875"), Object(rax["createElement"])(rax_text_lib_default.a, {
    style: Home_default.a.info,
    onClick: () => {
      universal_navigate_lib_default.a.push({
        url: utils('detail')
      });
    }
  }, "\u6211\u8981\u8DF3\u8F6C\u8BE6\u60C5\u9875\u9762"), Object(rax["createElement"])(rax_text_lib_default.a, {
    style: Home_default.a.info
  }, "Visit https://rax.js.org"));
}

/***/ })
/******/ ]);