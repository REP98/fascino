/**
	* Fascino  
	* @version v1.0.1
	* @copyright 2021-2022 Robert Pérez.
	* @author Robert Pérez delfinmundo@gmail.com
	* 
	* @license Licensed under MIT
	*/
import _axios from 'axios';
import camelcase from 'camelcase';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var regeneratorRuntime$1 = {
  exports: {}
};
var _typeof$1 = {
  exports: {}
};

(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }

  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof$1);

(function (module) {
  var _typeof = _typeof$1.exports["default"];

  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
        Op = Object.prototype,
        hasOwn = Op.hasOwnProperty,
        $Symbol = "function" == typeof Symbol ? Symbol : {},
        iteratorSymbol = $Symbol.iterator || "@@iterator",
        asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
        toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }

    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
          generator = Object.create(protoGenerator.prototype),
          context = new Context(tryLocsList || []);
      return generator._invoke = function (innerFn, self, context) {
        var state = "suspendedStart";
        return function (method, arg) {
          if ("executing" === state) throw new Error("Generator is already running");

          if ("completed" === state) {
            if ("throw" === method) throw arg;
            return doneResult();
          }

          for (context.method = method, context.arg = arg;;) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
              if ("suspendedStart" === state) throw state = "completed", context.arg;
              context.dispatchException(context.arg);
            } else "return" === context.method && context.abrupt("return", context.arg);
            state = "executing";
            var record = tryCatch(innerFn, self, context);

            if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
              return {
                value: record.arg,
                done: context.done
              };
            }

            "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }(innerFn, self, context), generator;
    }

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

    exports.wrap = wrap;
    var ContinueSentinel = {};

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {}

    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
        NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if ("throw" !== record.type) {
          var result = record.arg,
              value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }

        reject(record.arg);
      }

      var previousPromise;

      this._invoke = function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      };
    }

    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (undefined === method) {
        if (context.delegate = null, "throw" === context.method) {
          if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
          context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }

    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }

            return next.value = undefined, next.done = !0, next;
          };

          return next.next = next;
        }
      }

      return {
        next: doneResult
      };
    }

    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }

    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }

        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        }
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;

        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
              record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
                hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }

  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$1); // TODO(Babel 8): Remove this file.


var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime; // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var camelCase = camelcase;
/**
 * Alias String.prototype.valueOf
 * @memberOf module:Utils
 * @type {Function}
 */

var strValue = String.prototype.valueOf;
/**
 * Alias Object.prototype.toString
 * @memberOf module:Utils
 * @type {Function}
 */

var toStr = Object.prototype.toString;
/**
 * Valida String u Object
 * @memberOf module:Utils
 * @param  {(String|Object)} value la cadena a evaluar
 *
 * @return {Boolean} 
 */

var tryStringObject = function tryStringObject(value) {
  try {
    strValue.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
/**
 * Alias Object.defineProperty
 * @memberOf module:Utils
 * @type {Function}
 */


var defineProperty = Object.defineProperty;
/**
 * Alias Object.getOwnPropertyDescriptor
 * @memberOf module:Utils
 * @type {Function}
 */

var gOPD = Object.getOwnPropertyDescriptor;
/**
 * Verifica si es una Array
 * @memberOf module:Utils
 * @function isArray
 * @return {Boolean}
 */

var isArray = Array.isArray;
/**
 * Funtions
 */

/**
 * Establece Propiedades de los Objetos
 * @memberOf module:Utils
 * @private
 * @param {Object} target el Objecto
 * @param {Object} opt    opciones del objecto
 */

function setPropertyObj(target, opt) {
  if (defineProperty && opt.name === "__proto__") {
    defineProperty(target, opt.name, {
      enumerable: true,
      configurable: true,
      value: opt.newValue,
      writable: true
    });
  } else {
    target[opt.name] = opt.newValue;
  }
}
/**
 * Obtiene una propiedad de un objecto
 * @memberOf module:Utils
 * @private
 * @param  {Object} obj  El Objecto
 * @param  {String} name Nombre de la propiedad
 *
 * @return {(Void|*)}
 */


function getProperty(obj, name) {
  if (name === "__proto__") {
    if (!hasProp(obj, name)) {
      return void 0;
    } else if (gOPD) {
      return gOPD(obj, name).value;
    }
  }

  return obj[name];
}
/**
 * Extiende un objeto o matriz y combinar sus elementos
 * @memberOf module:Utils
 * @function extend
 * @param {...*} Argumentos Lista de Objetos a iterar
 * @return {(String|Object|Array)} retorna el elemento, o la unión de ellos
 */


function extend() {
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target,
      deep,
      i,
      length = 0;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    return void 0;
  }

  target = args[0];
  length = args.length;
  i = 1;
  deep = false;

  if (typeof target === "boolean") {
    deep = target;
    target = args[1] || {};
    i = 2;
  }

  if (empty(target) || _typeof(target) !== "object" && typeof target !== "function") {
    target = {};
  }

  for (; i < length; ++i) {
    if (args[i] !== null) {
      options = args[i];

      for (name in options) {
        if (hasProp(options, name)) {
          src = getProperty(target, name);
          copy = getProperty(options, name);

          if (target !== copy) {
            copyIsArray = isArrayish(copy);

            if (deep && copy && (isObject(copy) || copyIsArray)) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && isArrayish(src) ? src : [];
              } else {
                clone = src && isObject(src) ? src : {};
              }

              setPropertyObj(target, {
                name: name,
                newValue: extend(deep, clone, copy)
              });
            } else if (!not(copy)) {
              setPropertyObj(target, {
                name: name,
                newValue: copy
              });
            }
          }
        }
      }
    }
  }

  return target;
}
/**
 * Verifica si es un texto valido
 * @memberOf module:Utils
 * @function isString
 * @param  {*}  value
 * @return {Boolean}  verdadero si es un string
 */


function isString(value) {
  var strClass = "[object String]",
      hasToStringTag = typeof Symbol === "function" && _typeof(Symbol.toStringTag) === "symbol";

  if (typeof value === "string") {
    return true;
  }

  if (_typeof(value) !== "object") {
    return false;
  }

  return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
}
/**
 * Verifica si es un objecto
 * @memberOf module:Utils
 * @function isObject
 * @param  {*}  obj
 * @return {Boolean} verdadero si es un objecto
 */


function isObject(obj) {
  var proto;

  if (!obj || toStr.call(obj) !== "[object Object]") {
    return false;
  }

  proto = obj.prototype !== undefined;

  if (!proto) {
    return true;
  }

  return proto.constructor && typeof proto.constructor === "function";
}
/**
 * Verifica si es una Matriz
 * @memberOf module:Utils
 * @function isArrayish
 * @param  {*}  obj
 * @return {Boolean}  Verdadero si es un array
 */


function isArrayish(obj) {
  if (!obj) {
    return false;
  }

  return obj instanceof Array || isArray(obj) || obj.length >= 0 && obj.splice instanceof Function;
}
/**
 * Verifica si es una función
 * @memberOf module:Utils
 * @function isFunction
 * @param  {*} fn
 * @return {Boolean}  verdadero si es una función
 */


function isFunction(fn) {
  if (!fn) {
    return false;
  }

  var string = toStr.call(fn);
  return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && ( // IE8 and below
  fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
}
/**
 * Busca y valida la propiedad del objeto dato
 * @memberOf module:Utils
 * @function hasProp
 * @param  {Object}  obj  objeto a verificar
 * @param  {String}  prop propiedad a buscar
 * @return {Boolean}  verdadero si la propiedad existe dentro del objeto
 */


function hasProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/**
 * Verifica si la variable dada esta vaciá
 * @memberOf module:Utils
 * @function empty
 * @example
 * let a
 * empty(a) // true
 * empty(0) // true
 * empty(0.0) // true
 * empty(false) // true
 * empty([]) // true
 * empty({}) // true
 * empty("") // true
 * empty() // true
 * empty(1) // false
 * @param  {*} arg Variable, Objecto, matriz etc.. a verificar
 * @return {Boolean}  Verdadero si esta vació
 */


function empty(arg) {
  var und;
  var emptyVal = [undefined, null, false, 0, 0.0, "", "0", "0.0", und],
      l = emptyVal.length;

  if (typeof arg === "undefined") {
    return true;
  }

  for (var i = 0; i < l; i++) {
    if (arg === emptyVal[i]) return true;
  }

  if (isArrayish(arg)) {
    return arg.length === 0;
  }

  if (isObject(arg)) {
    var o = 0;

    for (var _i in arg) {
      if (hasProp(arg, _i)) {
        o++;
      }
    }

    return o === 0;
  }

  return false;
}
/**
 * Verifica si la variable dada no es nula o indefinida
 * @memberOf module:Utils
 * @function not
 * @param  {*} arg Variable
 * @return {Boolean} verdadero si esta nula o indefinida
 */


function not(arg) {
  return arg === undefined || arg === null;
}
/**
 * Valida una URL
 * @memberOf module:Utils
 * @function isURL
 * @param  {(String|URL)}  u URI a validar
 * @return {Boolean}
 */


function isURL(u) {
  return u instanceof URL || /(http|https|ftp):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(u);
}
/**
 * ForEach Personalizado.
 * <p>Extiende la funcionalidad del forEach por defecto de los Array para todo tipo de elementos.</p>
 * <p>Para saber más visite <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" alt="Docuementación de ForEach">forEach en Developer Mozilla</a></p>
 * @memberOf module:Utils
 * @function each
 * @param  {(Object|Array)}   arr      El Objecto a iterar
 * @param  {Function} callback Función a ejecutar
 * @param  {(Object|Array)}   thisArg  Valor de la constante this
 */


function each(arr, callback, thisArg) {
  if (empty(arr)) {
    return;
  }

  if (typeof arr.forEach === "function") {
    return arr.forEach(callback, thisArg);
  }

  if (!isFunction(callback)) {
    return arr;
  }

  var T,
      k,
      O = Object(arr),
      len = O.length >>> 0;

  if (len === 0 && isObject(O)) {
    len = Object.keys(O).length;
  }

  if (!empty(thisArg)) {
    T = thisArg;
  }

  for (k in O) {
    if (hasProp(O, k)) {
      var KeyValue = O[k];
      callback.call(T, KeyValue, k, O);
    }
  }
}
/**
 * Regula y normaliza el nombre de un atributo, función, o variable para su uso en Javascript
 * @memberOf module:Utils
 * @function normName
 * @param  {String} name variable
 * @return {(String|void)}  el nombre normalizado o indefinido
 */


function normName(name) {
  return typeof name !== "string" ? undefined : name.replace(/-/g, "").toLowerCase();
}
/**
 * Convierte los datos tipo texto JSON pasados por atributos a un objecto valido
 * @memberOf module:Utils
 * @function normalizeData
 * @param  {String} data
 * @return {Object} El objeto JSON
 */


function normalizeData(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}
/**
 * Transforma una cadena de texto en una matriz
 * @memberOf module:Utils
 * @function strToArr
 * @param  {String} str       La cadena
 * @param  {String} separator El separador
 *
 * @return {Array}
 */


function strToArr(str) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

  if (empty(str)) {
    return [];
  }

  if (str.indexOf(separator) === -1) {
    return [str];
  }

  return isArrayish(str) ? str : str.split(separator);
}
/**
 * Crea una uri a partir de un String
 * @memberOf module:Utils
 * @function createURI
 * @example
 * _$.createURI('mifile.php')
 * // return --> https://domain.ext/path/mifile.php
 * @param  {String} u Dirección o path a convertir
 * @return {String}   URI bien formateada
 */


function createURI(u) {
  var a = document.createElement('a');
  a.href = u;
  return !not(a.href) && isURL(a.href) ? a.href : u;
}
/**
 * Construye una URL valida para la API fetch o XMLHttpRequest
 * @memberOf module:Utils
 * @function url
 * @param  {String} urlBase URL
 * @param  {Object} params  Conjunto de parametros de URLSearchParams
 * @return {URL}         API URL
 */


function url(urlBase) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!isURL(urlBase)) {
    urlBase = createURI(urlBase);
  }

  var url = new URL(urlBase);
  Object.keys(params).forEach(function (key) {
    return url.searchParams.append(key, params[key]);
  });
  return url;
}
/**
 * Clase para serializar valores para envió [Fetch]{@link module:Plugins.HTTP.fetch}
 * @namespace Serialize
 * @memberOf module:Plugins.HTTP
 * @class
 */


var Serialize = /*#__PURE__*/function () {
  function Serialize() {
    _classCallCheck(this, Serialize);
  }

  _createClass(Serialize, [{
    key: "stringify",
    value:
    /**
     * Serializa los datos
     * @memberOf module:Plugins.HTTP.Serialize
     * @param  {(Object|Array)} param Grupo de parámetros a serializar
     * @param  {String} space separador de la cadena por defecto & para URL
     * @return {String}       cadena serializada
     */
    function stringify(param) {
      var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
      return Object.keys(param).map(function (key) {
        if (isObject(param[key]) || Array.isArray(param[key])) {
          return "".concat(encodeURIComponent(key), "[]=").concat(new Serialize().stringify(param[key], space));
        } else {
          return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(param[key]));
        }
      }).join(space);
    }
    /**
     * Deserializa una cadena serializada
     * @memberOf module:Plugins.HTTP.Serialize
     * @param  {String} param cadena serializada
     * @param  {String} space Divisor de cadena para cortar
     * @return {Object}       Objeto deserializado
     */

  }, {
    key: "parse",
    value: function parse(param) {
      var _this2 = this;

      var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
      var obj = {};
      param.split(space).forEach(function (query) {
        var param = query.split('=');
        var key = decodeURIComponent(param[0]);
        var value = decodeURIComponent(param[1]);

        if (key.indexOf('[]') > -1) {
          obj[key.replace('[]', '')] = _this2.parse(value);
        } else {
          obj[key] = value;
        }
      });
      return obj;
    }
  }]);

  return Serialize;
}();
/**
 * Identificador Único para los Atributos
 * @memberOf module:Core.Data
 * @private
 * @type {Number}
 * @defaultvalue -1
 */


var DataUI = -1;
/**
 * Manejador de Eventos Data
 * @namespace Data
 * @memberOf module:Core
 * @requires Utils
 * @class
 * @tutorial Data
 */

var Data = /*#__PURE__*/function () {
  /**
   * @return {module:Core.Data}
   */
  function Data() {
    _classCallCheck(this, Data);

    this.UID = "FSData";
    DataUI++;
    this.ID = DataUI;
  }
  /**
   * Verifica si el objeto dado es un Elemento
   * @memberOf module:Core.Data
   * @public
   * @param  {Element} el El elemento
   * @return {Boolean}
   */


  _createClass(Data, [{
    key: "acceptData",
    value: function acceptData(el) {
      return el.nodeType === 1 || el.nodeType === 9 || !+el.nodeType;
    }
    /**
     * Valida si se puede establece o usar el Atributo DataSet del HTMLElement
     * @param  {Element} el El Elemento
     * @memberOf module:Core.Data
     * @public
     * @return {Boolean}
     */

  }, {
    key: "acceptDataSet",
    value: function acceptDataSet(el) {
      return this.acceptData(el) && !not(el.dataset);
    }
    /**
     * Obtiene los datos Almacenados en el Elemento
     * @memberOf module:Core.Data
     * @public
     * @param  {Element}  el El elemento
     * @param  {Boolean} config Indica si el objeto sera configurable
     * @return {Object}
     */

  }, {
    key: "storage",
    value: function storage(el) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var val = el[this.UID];

      if (!val) {
        val = {};

        if (this.acceptData(el)) {
          if (el.nodeType) {
            el[this.UID] = val;
          } else {
            defineProperty(el, this.UID, {
              value: val,
              configurable: config
            });
          }
        }
      }

      return val;
    }
    /**
     * Establece el nuevo valor de la propiedad
     * @memberOf module:Core.Data
     * @public
     * @param {Element} el El elemento
     * @param {(String|Object)} key  La clave
     * @param {(Object|String)} data El valor a establecer
     * @return {(Object|String)} El nuevo valor establecido
     */

  }, {
    key: "set",
    value: function set(el, key, data) {
      var store = this.storage(el);

      if (isString(key)) {
        store[camelCase(key)] = data;
      } else {
        for (var prop in key) {
          if (hasProp(key, prop)) {
            store[camelCase(prop)] = key[prop];
          }
        }
      }

      return store;
    }
    /**
     * Obtiene el valor del Atributo o todos
     * @memberOf module:Core.Data
     * @public
     * @param  {Element} el El elemento
     * @param  {(String|Null)} key La clave a buscar si se omite se buscaran todos los atributos
     * @return {(Object|String|Boolean)}
     */

  }, {
    key: "get",
    value: function get(el, key) {
      if (not(key)) {
        return this.storage(el);
      }

      return el[this.UID] && el[this.UID][key] ? el[this.UID][key] : false;
    }
    /**
     * Obtiene o Establece el atributo
     * @memberOf module:Core.Data
     * @public
     * @param  {Element} el El elemento
     * @param  {String} key  La clave
     * @param  {(String|Object)} data El valor
     * @return {(Object|String)}      El valor obtenido o establecido
     */

  }, {
    key: "access",
    value: function access(el, key, data) {
      if (not(key) || key && isString(key) && not(data)) {
        return this.get(el, key);
      }

      this.set(el, key, data);
      return not(data) ? key : data;
    }
    /**
     * Verifica si el elemento tiene la clave dada
     * @public
     * @memberOf module:Core.Data
     * @param  {Element}  el El elemento
     * @param  {String}  key La clave
     * @return {Boolean}
     */

  }, {
    key: "has",
    value: function has(el, key) {
      if (not(key)) {
        var c = this.storage(el);
        return !not(c);
      } else {
        return this.get(el, key) !== false ? true : el.hasAttributes && el.hasAttributes("data-".concat(key)) ? el.getAttribute("data-".concat(key)) : false;
      }
    }
    /**
     * Remueve una clave dada
     * @public
     * @memberOf module:Core.Data
     * @param  {Element} el El elemento
     * @param  {String} key La clave
     * @return {(void|Boolean)}
     */

  }, {
    key: "remove",
    value: function remove(el, key) {
      var i,
          store = el[this.UID];

      if (not(store)) {
        var ds = this.data(el);

        if (not(ds)) {
          return;
        }

        this.remove(el, key);

        if (this.acceptDataSet(el)) {
          attrs = el.attributes;
          i = attrs.length;

          while (i--) {
            if (attrs[i]) {
              var name = attrs[i].name;

              if (name.indexOf("data-") === 0) {
                el.removeAttribute(name);
              }
            }
          }
        }

        return;
      }

      if (!not(key)) {
        if (isArrayish(key)) {
          key = key.map(camelCase);
        } else {
          key = camelCase(key);
          key = key in store ? [key] : key.match(/[^\x20\t\r\n\f]+/g) || [];
        }

        i = key.length;

        while (i--) {
          delete store[key[i]];
        }
      }

      if (not(key) && not(store)) {
        if (el.nodeType) {
          el[this.UID] = undefined;
        } else {
          delete el[this.UID];
        }
      }

      return true;
    }
    /**
     * Establece los atributos data de un elemento
     * @memberOf module:Core.Data
     * @public 
     * @param  {Element} elem Elemento a manipular
     * @param  {String} key  La clave del atributo data ejemplo data-valor; key = valor
     * @param  {(Object|String|Array)} data El resultado del atributo data
     * @return {(Object|undefine|Array)}  El resultado del atributo data obtenido
     */

  }, {
    key: "attrToStorage",
    value: function attrToStorage(elem, key, data) {
      var name;

      if (empty(data) && elem.nodeType === 1) {
        name = "data-" + key.replace(/[A-Z]/g, "-$&").toLowerCase();
        data = elem.getAttribute(name);

        if (typeof data === "string") {
          data = normalizeData(data);
          this.set(elem, key, data);
        } else {
          data = undefined;
        }
      }

      return data;
    }
    /**
     * Establece u Obtiene los atributos de Data
     * @memberOf module:Core.Data
     * @public 
     * @param  {(NodeList|Element)}    els  El o los Elementos
     * @param  {...(Array|Object|String)} arg Cualqier argumento según su accion hasta 2 maximo
     *
     * @return {*}
     */

  }, {
    key: "data",
    value: function data(els) {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var ds, attrs, i, el;

      if (not(els.length)) {
        el = els;
        els = [els];
      } else {
        el = els[0];
      }

      if (args.length === 0) {
        ds = this.get(el);

        if (this.acceptDataSet(el)) {
          attrs = el.attributes;
          i = attrs.length;

          while (i--) {
            if (attrs[i]) {
              var name = attrs[i].name;

              if (name.indexOf("data-") === 0) {
                name = camelCase(name.slice(5));
                this.attrToStorage(el, name, ds[name]);
              }
            }
          }
        }

        return ds;
      }

      if (args.length === 1) {
        if (isArrayish(args[0])) {
          var res = {},
              _i = 0;
          each(els, function (elem) {
            var id = elem.getAttribute("id"),
                prefix = !not(id) ? id : el.tagName + _i;
            args[0].forEach(function (d) {
              res[prefix] = res[prefix] || {};

              var re = _this.get(elem, d);

              if (not(re)) {
                if (elem.nodeType === 1) {
                  re = elem.hasAttributes("data-".concat(d)) ? elem.getAttribute("data-".concat(d)) : re;
                  re = normalizeData(re);
                }
              }

              res[prefix][d] = re;
            });
            _i++;
          });
          return res;
        } else if (isObject(args[0])) {
          return each(els, function (elem) {
            for (var key in args[0]) {
              if (hasProp(args[0], key)) {
                var value = normalizeData(args[0][key]);

                _this.set(elem, key, value);
              }
            }
          });
        } else if (isString(args[0])) {
          var _res = this.get(el, args[0]);

          if (!_res || not(_res)) {
            if (el.nodeType === 1) {
              _res = el.hasAttributes("data-".concat(args[0])) ? el.getAttribute("data-".concat(args[0])) : _res;
              _res = normalizeData(_res);
            }
          }

          return _res;
        }
      }

      return each(els, function (elem) {
        _this.set(elem, args[0], args[1]);
      });
    }
  }]);

  return Data;
}();

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ListEvents = ['blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];
/**
 * Maneja y manipula los Eventos del DOM
 * @namespace Event
 * @memberOf module:Core
 * @requires Utils
 * @class
 * @tutorial Events
 */

var Event = /*#__PURE__*/function () {
  function Event() {
    _classCallCheck(this, Event);

    _defineProperty(this, "_ds", new Data());

    _defineProperty(this, "_eventName", "fsEvent");
  }
  /**
   * Añada un Evento Escucha al elemento
   * @private
   * @memberOf Core.Event
   * @param {Element}   el      El Elemento
   * @param {String}   event   Nombre del Evento
   * @param {Function} fn      Función a asignar
   * @param {Boolean}  capture use capture
   */


  _createClass(Event, [{
    key: "_add",
    value: function _add(el, event, fn) {
      var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      return el.addEventListener(event, fn, useCapture);
    }
    /**
     * Remueve un evento asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element}   el      El Elemento
     * @param  {String}   event   el nombre del evento
     * @param  {Function} fn      Función asignada
     * @param  {(Boolean|Object)}   capture Use capture ó opciones de captura
     */

  }, {
    key: "_remove",
    value: function _remove(el, event, fn, capture) {
      if (not(capture)) {
        capture = true;
      }

      return el.removeEventListener(event, fn, capture);
    }
    /**
     * Dispara un Evento
     * @private
     * @memberOf Core.Event
     * @param  {Element} el       El elemento
     * @param  {(Event|CustomEvent)} newEvent Nombre del Evento a disparar
     * @return {Element}         
     */

  }, {
    key: "_dispatch",
    value: function _dispatch(el, newEvent) {
      return el.dispatchEvent(newEvent);
    }
    /**
     * Crea un Evento
     * @private
     * @memberOf Core.Event
     * @param  {string} name            Nombre del Evento
     * @param  {(Boolean|String|Object|Array|Fascino)} customEventInit Acciones del evento capturarle, estas acciones se captura con e.detail
     */

  }, {
    key: "_createEvent",
    value: function _createEvent(name) {
      var customEventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var o;

      if (hasProp(customEventInit, 'detail')) {
        o = extend({}, {
          bubbles: true,
          cancelable: true,
          detail: null
        }, customEventInit);
      } else {
        o = {
          bubbles: true,
          cancelable: true,
          detail: customEventInit
        };
      }

      return new CustomEvent(name, o);
    }
    /**
     * Almacena los eventos asignado a cada elemento en memoria del elemento
     * @private
     * @memberOf Core.Event
     * @param {Element} el   El Elemento
     * @param {String} name Nombre del Evento
     * @param {(Boolean|String|Object|Array|Fascino|Function)} data información del evento
     * @return {Object} Lista de Eventos Asignado
     */

  }, {
    key: "_setData",
    value: function _setData(el, event, data) {
      if (this._ds.acceptData(el) && el.self !== window) {
        var dataEv = this._ds.has(el, this._eventName) ? this._ds.get(el, this._eventName) : this._ds.access(el, this._eventName, {}),
            name = camelCase(event);
        strToArr(event, '.');
        var e = {};
        e[this._eventName] = dataEv;
        e[this._eventName][name] = name in dataEv === true ? e[this._eventName][name] : [];

        e[this._eventName][name].push(data);

        return this._ds.set(el, e);
      }
    }
    /**
     * Obtiene información sobre un evento asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element} el    El Elemento
     * @param  {String} name  Nombre del Evento, se puede asignar namespace ejm: click.bs
     * @param  {Number} index posición del evento
     * @return {(Object|Array)}
     */

  }, {
    key: "_getData",
    value: function _getData(el) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

      var evList = this._ds.get(el, this._eventName);

      if (not(evList)) {
        return {};
      }

      if (not(name)) {
        return evList;
      }

      name = camelCase(name);

      if (name in evList === false) {
        return false;
      }

      return index === -1 ? evList[name] : evList[name][index];
    }
    /**
     * Verifica que un evento exista
     * @private
     * @memberOf Core.Event
     * @param  {Element}  el    El elemento
     * @param  {String}  name  Nombre
     * @param  {Number}  index Indice del evento
     * @return {Boolean}
     */

  }, {
    key: "_hasData",
    value: function _hasData(el, name) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

      if (this._ds.has(el, this._eventName)) {
        var evList = this._ds.get(el, this._eventName);

        if (!empty(evList)) {
          if (camelCase(name) in evList) {
            return index > -1 ? evList[camelCase(name)].indexOf(index) > -1 : true;
          }
        }
      }

      return false;
    }
    /**
     * Remueve un Evento Asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element} el    Elemento
     * @param  {String} name  Nombre
     * @param  {Number} index Indice del Evento
     * @return {Boolean}
     */

  }, {
    key: "_removeData",
    value: function _removeData(el, name) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

      if (this._ds.has(el, this._eventName)) {
        var ds = this._getData(el, name, index);

        if (not(name)) {
          this._ds.set(el, this._eventName, {});

          return true;
        }

        var camelName = camelCase(name);

        if (camelName in ds) {
          if (index > -1) {
            delete ds[camelName][index];
          } else {
            delete ds[camelName];
          }

          this._ds.set(el, this._eventName, d);

          return this;
        }
      }

      return false;
    }
    /**
     * Remueve todos los Eventos de todos los elementos seleccionado
     * @private
     * @memberOf Core.Event
     * @return {Core.Event}
     */

  }, {
    key: "_off",
    value: function _off(el) {
      this._ds.remove(el, this._eventName);

      return this;
    }
    /**
     * Obtiene los NameSpaces del Evento
     * @private
     * @memberOf Core.Event
     * @param  {Array}  NS     Nombre separado en array
     * @param  {Boolean} onlyNS Si solo se retorna el NS ó se retorna Nombre y NS
     * @return {(String|Object)} 
     */

  }, {
    key: "_getNS",
    value: function _getNS(NS) {
      var onlyNS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var name = NS.shift(),
          ns = NS.join('.');
      return onlyNS ? ns : {
        name: name,
        ns: ns
      };
    } // Public

    /**
     * Obtiene los eventos almacenados
     * @public
     * @memberOf Core.Event
     * @see Core.Event._getData
     * @return {Object}
     */

  }, {
    key: "getEvents",
    value: function getEvents(el) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      return this._getData(el, name, index);
    }
    /**
     * Ejecuta los eventos dados
     * @memberOf Core.Event
     * @public
     * @param  {Element} el         El elemento
     * @param  {(String|Array)} eventList Lista de eventos con su namespace si es necesario
     * @param  {String} selector        Selector a iterar o null
     * @param  {Function} callback    Función a ejecutar
     * @param  {Object} options    Opciones de addEventListiner
     * @return {(Element|Object|Core.Event)}
     */

  }, {
    key: "on",
    value: function on(el, eventList, selector, callback, options) {
      var _this2 = this;

      if (not(el)) {
        return this;
      }

      if (isFunction(selector)) {
        options = callback;
        callback = selector;
        selector = undefined;
      }

      if (!isObject(options)) {
        options = {};
      }

      var EVL = strToArr(eventList, ' ');
      EVL.forEach(function (e) {
        var nameAndNs = strToArr(e, '.'),
            nameAndNSObj = _this2._getNS(nameAndNs, false),
            ns = nameAndNSObj.ns,
            name = nameAndNSObj.name,
            handler = function handler(ev) {
          var target = ev.target;

          if (!selector) {
            callback.call(el, ev);
          } else {
            while (target && target !== el) {
              if (Element.prototype.matches.call(target, selector)) {
                callback.call(target, ev);

                if (ev.isPropagationStopped) {
                  ev.stopImmediatePropagation();
                  break;
                }
              }

              target = target.parentNode;
            }
          }

          if (!not(options.once)) {
            _this2.off(el, eventList, selector, options);
          }
        };

        defineProperty(handler, 'name', {
          value: callback.name && callback.name !== '' ? callback.name : "func_event_".concat(name, "_").concat(not(ns) ? new Date().getTime() : ns)
        });
        var NameEvents = ListEvents.indexOf(name) > -1 ? name : e;

        _this2._add(el, NameEvents, handler, !not(options.capture) ? options.capture : false);

        _this2._setData(el, e, {
          event: e,
          handler: handler,
          selector: selector,
          ns: ns,
          options: !not(options) ? options : false
        });
      });
      return el;
    }
    /**
     * Ejecuta solo el primer eventos del elemento
     * @memberOf Core.Event
     * @public
     * @param  {Element} el      El Elemento
     * @param  {String} events  Eventos
     * @param  {String} sel     Selector o null
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de addEventListiner
     * @return {(Element|Object|Core.Event)}
     */

  }, {
    key: "one",
    value: function one(el, events, sel, handler, options) {
      if (!isObject(options)) {
        options = {};
      }

      options.once = true;
      return this.on.apply(this, [el, events, sel, handler, options]);
    }
    /**
     * Remueve los Eventos de los elementos dado
     * @memberOf Core.Event
     * @public
     * @param  {Element} el         Elemento
     * @param  {String} eventsList Lista de Eventos
     * @param  {String} sel        Selecotr o null
     * @param  {Object} options    Opciones de removeEventListiner
     * @return {(Element|Object|Core.Event)}
     */

  }, {
    key: "off",
    value: function off(el, eventsList, sel, options) {
      var _this3 = this;

      var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      if (isObject(sel)) {
        options = sel;
        sel = null;
      }

      if (!isNaN(options)) {
        index = options;
        options = {};
      }

      if (!isObject(options)) {
        options = {};
      }

      var Dev = this._getData(el);

      if (not(eventsList) || eventsList.toLowerCase() === 'all' || eventsList === '*') {
        var _ret = function () {
          var _this = _this3;

          if (Dev) {
            for (var prop in Dev) {
              if (hasProp(Dev, prop)) {
                var e = Dev[prop];
                e.forEach(function (i) {
                  _this._remove(el, i.event, i.handler, i.options);
                });
              }
            }

            _this3._off();
          }

          return {
            v: el
          };
        }();

        if (_typeof(_ret) === "object") return _ret.v;
      }

      var EvL = strToArr(eventsList, ' ');
      EvL.forEach(function (e) {
        var nMap = strToArr(e, '.'),
            evMap = nMap.length > 1 ? _this3._getNS(nMap, true) : {
          name: nMap[0],
          ns: ''
        },
            name = normName(evMap.name);
        options.ns ? options.ns : evMap.ns;

        if (hasProp(Dev, name)) {
          var ev = Dev[name][index];

          _this3._remove(el, ev.event, ev.handler, ev.options);

          _this3._removeData(el, e, index);
        }
      });
      return el;
    }
    /**
     * Dispara un Evento
     * @public
     * @memberOf Core.Event
     * @param  {Element} el    Elemento HTMLELEMENT
     * @param  {String} event Nombre del Evento
     * @return {Element}
     */

  }, {
    key: "fire",
    value: function fire(el, event) {
      return this._dispatch(el, event);
    }
    /**
     * Crea un Evento, versión publica
     * @public
     * @memberOf Core.Event
     * @see Core.Event._createEvent
     */

  }, {
    key: "createEv",
    value: function createEv(name, data) {
      return this._createEvent(name, data);
    }
  }]);

  return Event;
}();

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/**
 * Opciones de Configuración para FT
 * @const
 * @memberOf module:Plugins.HTTP.fetch
 * @namespace OptionsFT
 * @type {Object}
 */


var OptionsFT = {
  /**
   * Metodo de la llamada
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {String}
   */
  method: null,

  /**
   * Encabezado de la Peticion
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {(Object|Headers)}
   */
  headers: null,

  /**
   * Cuerpo de la Solicitud, <cite>Tenga en cuenta que una solicitud que utiliza el método GET o HEAD no puede tener un cuerpo.</cite>
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {(Blob|BufferSource|FormData|URLSearchParams|USVString|ReadableStream|Object)}
   */
  body: null,

  /**
   * Modo para la Solicitud
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {String}
   */
  mode: null,

  /**
   * Controla lo que hacen los navegadores con las credenciales (cookies, entradas de autenticación HTTP y certificados de cliente TLS).<br>
   * para saber mas consulte la [guia]{@link https://developer.mozilla.org/en-US/docs/web/api/fetch#parameters}
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {String}
   */
  credentials: null,

  /**
   * Indica cómo se debe comportar la solicitud con el cache del navegador.
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {String}
   */
  cache: null,

  /**
   * Indica cómo debe actuar si la respuesta devuelve una redirección.
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {(Object|String)}
   */
  redirect: null,

  /**
   * Indica el tipo de respuesta a recibir
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {String}
   */
  typeResponse: "json",

  /**
   * Si el recurso solicitado es del tipo multimedia especifique aqui el mime type del recurso adquirido
   * @memberOf module:Plugins.HTTP.fetch.OptionsFT
   * @type {String}
   */
  mime: null
};

function getResource(resource) {
  if (resource instanceof Request) {
    return resource;
  } else if (isArrayish(resource)) {
    var ul = resource.shift();

    if (resource.length > 0) {
      return url(ul, resource[0]);
    } else {
      return url(ul);
    }
  } else if (isObject(resource)) {
    return url(resource.url, resource.params);
  }

  return resource;
}

function getSettingsOfForm(form) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var d = {},
      url = getResource(form.getAttribute("action")),
      otherData = ['mode', 'credentials', 'cache', 'redirect', 'type-response', 'mime'];
  d.method = form.getAttribute('method').toUpperCase();

  if (form.hasAttribute('enctype')) {
    d.headers = {};
    d.headers['Content-Type'] = form.getAttribute('enctype');
  }

  d.body = new FormData(form);
  each(otherData, function (n) {
    if (form.hasAttribute("data-".concat(n))) {
      d[camelCase(n)] = form.getAttribute("data-".concat(n));
    }
  });
  d = _$.extend({}, d, options);
  return {
    url: url,
    obj: getSettings(_$.extend({}, OptionsFT, d))
  };
}

function getSettings(s) {
  if (!isObject(s)) {
    return false;
  }

  var o = extend({}, OptionsFT, s),
      op = {};

  if (o.method.toLowerCase() !== 'post' && not(o.headers)) {
    o.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  each(o, function (v, n) {
    if (!not(v)) {
      if (n == 'headers') {
        if (v instanceof Headers) {
          op[n] = v;
        } else if (isObject(v)) {
          op[n] = new Headers(v);
        }
      } else if (n == 'body') {
        op[n] = v;
      } else if (n == 'credentials') {
        if (["omit", "same-origin", "include"].indexOf(v) > -1) {
          op[n] = v;
        }
      } else if (n == 'cache') {
        if (["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"].indexOf(v) > -1) {
          op[n] = v;
        }
      } else {
        op[n] = v;
      }
    }
  });
  return !not(op) ? op : false;
}
/**
 * Nueva API fetch la evolución de XHR<br>
 * Antes de Usar verifique la [Compatibilidad]{@link https://caniuse.com/fetch}
 * @function fetch
 * @memberOf module:Plugins.HTTP
 * @param  {(String|URL|Request|Array|Object|HTMLFormElement)} resource recurso de la url o un formulario de la instancia de HTMLFormElement
 * @param  {Object} settings Opciones de configuraciones
 *
 * @return {Object}
 */


function http(resource) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var loading = false,
      chunks = [],
      error = null,
      controller = null,
      u,
      s,
      tr,
      ml;

  if (resource instanceof HTMLFormElement) {
    var arg = getSettingsOfForm(resource, settings);
    u = arg.url;
    s = arg.obj;
  } else {
    u = getResource(resource);
    s = getSettings(settings);
  }

  tr = s.typeResponse;
  ml = s.mime;
  delete s.typeResponse;
  delete s.mime;

  var _resetLocals = function _resetLocals() {
    loading = false;
    chunks = [];
    error = null;
    controller = new AbortController();
  };

  var _readBody = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(response) {
      var typeResponse,
          mimeType,
          reader,
          length,
          received,
          _yield$reader$read,
          done,
          value,
          payload,
          onProgress,
          onFinished,
          body,
          position,
          _iterator,
          _step,
          chunk,
          n,
          _args = arguments;

      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              typeResponse = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'json';
              mimeType = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
              reader = response.body.getReader(), length = +response.headers.get('content-length');
              received = 0;

            case 4:
              if (!loading) {
                _context.next = 16;
                break;
              }

              _context.next = 7;
              return reader.read();

            case 7:
              _yield$reader$read = _context.sent;
              done = _yield$reader$read.done;
              value = _yield$reader$read.value;
              payload = {
                detail: {
                  received: received,
                  length: length,
                  loading: loading
                }
              };
              onProgress = new CustomEvent('fetch-progress', payload);
              onFinished = new CustomEvent('fetch-finished', payload);

              if (done) {
                // Finish loading 
                loading = false;
                window.dispatchEvent(onFinished);
              } else {
                // Push values to the chunk array
                chunks.push(value);
                received += value.length;
                window.dispatchEvent(onProgress);
              }

              _context.next = 4;
              break;

            case 16:
              body = new Uint8Array(received), position = 0;
              _iterator = _createForOfIteratorHelper(chunks);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  chunk = _step.value;
                  body.set(chunk, position);
                  position += chunk.length;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (!(typeResponse.toLowerCase() === "json")) {
                _context.next = 30;
                break;
              }

              n = new TextDecoder('utf-8').decode(body);
              _context.prev = 21;
              return _context.abrupt("return", JSON.parse(n));

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](21);
              return _context.abrupt("return", n);

            case 28:
              _context.next = 39;
              break;

            case 30:
              if (!(typeResponse.toLowerCase() === "blob")) {
                _context.next = 38;
                break;
              }

              if (not(mimeType)) {
                _context.next = 35;
                break;
              }

              return _context.abrupt("return", new Blob([body], {
                type: mimeType
              }));

            case 35:
              return _context.abrupt("return", new Blob([body]));

            case 36:
              _context.next = 39;
              break;

            case 38:
              return _context.abrupt("return", new TextDecoder('utf-8').decode(body));

            case 39:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[21, 25]]);
    }));

    return function _readBody(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Incia la llamada fetch
   * @memberOf module:Plugins.HTTP.fetch
   * @function start
   * @return {Promise}
   */


  var start = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
      var signal, response;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _resetLocals();

              loading = true;
              signal = controller.signal;
              _context2.prev = 3;
              _context2.next = 6;
              return fetch(u, _objectSpread({
                signal: signal
              }, s));

            case 6:
              response = _context2.sent;

              if (!(response.status >= 200 && response.status < 300)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 10;
              return _readBody(response, tr, ml);

            case 10:
              return _context2.abrupt("return", _context2.sent);

            case 13:
              throw new Error(response.statusText);

            case 14:
              _context2.next = 21;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](3);
              error = _context2.t0;
              return _context2.abrupt("return", error);

            case 21:
              _context2.prev = 21;
              loading = false;
              return _context2.finish(21);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 16, 21, 24]]);
    }));

    return function start() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Cancela petición en curso
   * @memberOf module:Plugins.HTTP.fetch
   * @function cancel
   * @return {Promise}
   */


  var cancel = function cancel() {
    var onAbort = new CustomEvent('fetch-abort', {
      detail: {
        status: "abourt"
      }
    });
    controller.abort();

    _resetLocals();

    window.dispatchEvent(onAbort);
  };

  return {
    start: start,
    cancel: cancel
  };
}

var ft = http;

var isGetMethod = function isGetMethod(method) {
  return ['GET', 'JSON', 'SCRIPT'].indexOf(method) !== -1;
};

if (window._$ !== undefined) {
  _$.extend(_$, {
    /**
     * Acceso directo desde el navegador a fetch api
     * @memberOf _$
     * @function ft
     * @see module:Plugins.HTTP.fetch
     */
    ft: ft,

    /**
     * Axios
     * @memberOf _$
     * @see [Axios]{@link https://axios-http.com/docs/instance}
     * @param  {Object} config Configuraciones de la instansea
     * @return {Axios}
     */
    axios: function axios() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _axios.create(config);
    }
  });

  var EvHTTP = ['get', 'post', 'put', 'patch', 'delete', 'json', 'head'];

  _$.each(EvHTTP, function (method) {
    /**
     * Métodos de Fetch publicados en [_$]{@link _$}
     * Los miembros son:
     * 1. get
     * 2. post
     * 3. put
     * 4. patch
     * 5. delete
     * 6. json (Este es igual al metodo Get pero con configuraciónes para recibir un JSON en la respuesta)
     * @function  [methods](url, data, options)
     * @memberOf _$
     * @param  {String} url     Url del Envio
     * @param  {(Null|String|Object)} data    Datos a enviar
     * @param  {Object} options Opciones de [Fetch]{@link Plugins.HTTP.fetch}
     * @return {Promise}
     */
    _$[method] = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(url) {
        var data,
            options,
            m,
            u,
            o,
            _$$ft,
            start,
            cancel,
            _args = arguments;

        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                m = method.toUpperCase(), u = isGetMethod(m) && !_$.not(data) ? {
                  url: url,
                  params: data
                } : url, o = {
                  method: isGetMethod(m) ? 'get' : m.toLowerCase(),
                  body: isGetMethod(m) ? null : data,
                  typeResponse: m === 'JSON' ? 'json' : 'text'
                };
                _$$ft = _$.ft(u, _$.extend({}, o, options)), start = _$$ft.start, cancel = _$$ft.cancel; // Creamos o Actualizamos el Metodo de cancelación de la trascición actual

                _$.ftCancel = cancel;
                _context.next = 7;
                return start();

              case 7:
                return _context.abrupt("return", _context.sent);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  });

  _$.extend(_$, {
    /**
     * Carga un Script vía [Fetch]{@link Plugins.HTTP.fecth}
     * @memberOf _$
     * @function getscript
     * @param  {String}   url      Url del Script
     * @param  {Function} callback Función a ejecutar
     * @param  {(Object|Null)}   data    Parámetros a pasar
     * @param  {Object}   options  Opciones de [Fetch]{@link Plugins.HTTP.fecth}
     * @return {Promise}
     */
    getscript: function getscript(url, callback, data, options) {
      if (!_$.isFunction(callback) && !_$.empty(callback)) {
        data = callback;
      }

      return _$.get(url, data, option).then(function (response) {
        var s = responce;

        _$.script(s);

        if (_$.isFunction(callback)) {
          callback(s);
        }
      });
    },

    /**
     * Serializa una cadena para su envio
     * @memberOf _$
     * @function serialize
     * @param  {(Object|Array)} x Grupo de parámetros a serializar
     * @@param {String} space separador de la cadena por defecto & para URL
     * @return {String}
     */
    serialize: function serialize(x) {
      var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
      return new Serialize().stringify(x, space);
    },

    /**
     * Deserializa una cadena previamente serializada con [_$.serialize](@link _$.serialize)
     * @memberOf _$
     * @function unserialize
     * @param  {String} x     cadena serializada
     * @param  {String} space Divisor de cadena para cortar
     * @return {(Object|Array)}
     */
    unserialize: function unserialize(x) {
      var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
      return new Serialize().parse(x, space);
    }
  });
  /**
   * Carga datos vía HTTP y los vuelca en elemento dado
   * @function load
   * @memberOf _$
   * @param  {String} url     URL del envió
   * @param  {(Null|String|Array)} data    Parámetros para el envió
   * @param  {Object} options Opciones de [Fetch]{@link Plugins.HTTP.fetch}
   * @return {(Null|Promise)}
   */


  _$.addFn('load', function (url, data, options) {
    var _this = this;

    if (this.length === 0) {
      return null;
    }

    var callback = 'get';

    if (options && _$.hasProp(options, 'method') && options.method.toUpperCase() !== 'GET') {
      callback = options.method.toLowerCase();
    }

    return _$.hasProp(_$, callback) ? _$[callback](url, data, options).then(function (response) {
      _this.each(function (el) {
        _$(el).html(response);
      });
    })["catch"](function (e) {
      console.error('An error occurred while processing your request', e);
    }) : null;
  });

  _$(document).on('submit.ns.fetch', '[data-fetch]', function (e) {
    var _this2 = this;

    if (this.nodeName === 'FORM') {
      e.preventDefault();
      ft(this).start().then(function (response) {
        _$.hooks.run("fetch-submit-".concat(_$(_this2).attr('id')), response, e, _this2);

        var ev = new Event();
        var onSubmit = ev.createEv('fetch-submit', {
          detail: {
            form: _this2,
            events: e,
            response: response
          }
        });
        ev.fire(_this2, onSubmit);
      });
    }
  });
}

var index = {
  axios: _axios,
  ft: ft
};
export { index as default };
//# sourceMappingURL=fascino-http-es.js.map
