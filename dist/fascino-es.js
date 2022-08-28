/**
	* Fascino  
	* @version v1.0.1
	* @copyright 2021-2022 Robert Pérez.
	* @author Robert Pérez delfinmundo@gmail.com
	* 
	* @license Licensed under MIT
	*/
import camelcase from 'camelcase';

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

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
 * Verifica si es un número
 * @function isNumber
 * @memberOf module:Utils
 * @param  {*}  num
 * @return {Boolean}  verdadero si es un tipo numérico
 */


function isNumber(num) {
  if (typeof num === "number") {
    return num - num === 0;
  }

  if (typeof num === "string" && num.trim() !== "") {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }

  return false;
}
/**
 * Verifica si es una función
 * @memberOf module:Utils
 * @function isFunction
 * @param  {*} fn
 * @return {Boolean}  verdadero si es una función
 */


function isFunction$1(fn) {
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
 * Extensión de [object|function|array|string].toString([native])
 * @memberOf module:Utils
 * @function toString
 * @param  {string} arg tipo que contiene la función toString
 * @return {(Boolean|String)}     El resultado del toString o falso
 */


function toString(arg) {
  return !empty(arg) && isFunction$1(arg.toString) ? arg.toString() : false;
}
/**
 * Verifica si es un selector valido
 * @memberOf module:Utils
 * @function isSelector
 * @param  {String}  selector
 * @return {Boolean}  Verdadero si es un selector
 */


function isSelector(selector) {
  if (!isString(selector)) {
    return false;
  }

  try {
    document.querySelector(selector);
  } catch (error) {
    return false;
  }

  return true;
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
 * Obtiene los estilos computados del elemento
 * @memberOf module:Utils
 * @function getStyleComputed
 * @param  {Element} el El Elemento
 * @param  {String} prop La Propiedad
 * @param  {String} pseudoElt PseudoElt
 * @return {Array}
 */


function getStyleComputed(el, prop) {
  var pseudoElt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (empty(el) || !isElement(el)) {
    return;
  }

  if (!empty(prop) && prop.indexOf(":") === 0) {
    pseudoElt = prop;
    prop = undefined;
  }

  if (empty(prop)) {
    return window.getComputedStyle(el, pseudoElt);
  }

  if (isArrayish(prop)) {
    var ListProperty = {},
        propertys = window.getComputedStyle(el, pseudoElt);
    prop.forEach(function (property) {
      ListProperty[property] = propertys[property];
    });
    return ListProperty;
  }

  var propertyStyle = window.getComputedStyle(el, pseudoElt);
  return propertyStyle[prop];
}
/**
 * Verifica si es un elemento
 * @memberOf module:Utils
 * @function isElement
 * @param  {*}  el
 * @return {Boolean}  Verdadero si el es un Elemento del DOM
 */


function isElement(el) {
  if (empty(el)) {
    return false;
  }

  if (isString(el)) {
    return isSelector(el);
  }

  if (el instanceof HTMLElement) {
    return true;
  }

  return _typeof(el) === "object" && el.nodeType === 1 && isString(el.nodeName);
}
/**
 * Verifica si es un Elemento Fascino
 * @memberOf module:Utils
 * @function isFascinoElement
 * @param  {*}  el
 * @return {Boolean}    Verdadero si es un elemento de Fascino o _$
 */


function isFascinoElement(el) {
  if (empty(el)) {
    return false;
  }

  if (el.constructor && el.constructor.name.toUpperCase() === "FASCINO") {
    return true;
  }

  return hasProp(el, "Elem");
}
/**
 * Verifica si el elemento es visible en el DOM
 * @memberOf module:Utils
 * @function isVisible
 * @param  {(String|Element)}  el
 * @return {Boolean}    Verdadero si es visible
 */


function isVisible(el) {
  if (empty(el)) {
    return false;
  }

  var elem = !isElement(el) ? null : isSelector(el) ? document.querySelector(el) : el;

  if (empty(elem)) {
    return false;
  }

  var Body = document.querySelector("body"),
      HTML = document.querySelector("html");

  while (elem && elem !== Body && elem !== HTML) {
    var property = getStyleComputed(elem, ["display", "opacity", "visibility"]);

    if (property.display === "none") {
      return false;
    }

    if (toString(property.opacity) === "0") {
      return false;
    }

    if (property.visibility === "hidden") {
      return false;
    }

    elem = elem.parentNode;
  }

  return true;
}
/**
 * Verifica si el elemento esta oculto
 * @memberOf module:Utils
 * @function isHiden
 * @param  {(String|Element)}  el
 * @return {Boolean}    Verdadero si esta oculto
 */


function isHiden$1(el) {
  return el.hidden || !isVisible(el);
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
 * Combinar 2 array
 * @memberOf module:Utils
 * @function merge
 * @param  {Array} n1 Matriz n1
 * @param  {Array} n2 Matriz n2
 * @return {Array}    El array resultante
 */


function merge(n1, n2) {
  var l = +n2.length,
      j = 0,
      i = n1.length;

  for (; j < l; j++) {
    n1[i++] = n2[j];
  }

  n1.length = i;
  return n1;
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

  if (!isFunction$1(callback)) {
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
 * <p>Analiza y crea un nuevo elemento script que añada al body</p>
 * <p>Util para el uso de {@link Plugins.Ajax.XHR Ajax}, y cargas de html en linea</p>
 * @memberOf module:Utils
 * @function createScript
 * @param  {(String|Element|Array)} script
 * @return {Element}        El nuevo Script
 */


function createScript(script) {
  var s = document.createElement("script"),
      _s;

  s.type = "text/javascript";

  if (empty(script)) {
    return _$(s);
  }

  _s = _$(script).Elem[0];

  if (!empty(_s.src)) {
    s.src = _s.src;
  } else {
    s.textContent = _s.innerText;
  }

  document.body.appendChild(s);

  if (_s.parentNode) {
    _s.parentNode.removeChild(_s);
  }

  return s;
}
/**
 * Normaliza y busca los elementos Script
 * @memberOf module:Utils
 * @function script
 * @param  {Element} el El elemento script o padre del Script
 * @return {void}
 */


function script(el) {
  if (empty(el)) {
    return createScript();
  }

  var _el = _$(el).Elem[0];

  if (_el.tagName && _el.tagName === "SCRIPT") {
    createScript(_el);
  } else {
    _$(_el).find("script").each(function (s) {
      createScript(s);
    });
  }
}
/**
 * Esta función recibe una etiqueta e intenta crear un Object HTMLElement de la misma
 * @memberOf module:Utils
 * @function parseHTML
 * @param  {String} data el texto HTML
 * @return {(Element|Array)}  El nuevo objeto o una matriz
 */


function parseHTML(data) {
  var base,
      singleTag,
      result = [],
      ctx,
      _context,
      regexpSingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // eslint-disable-line


  if (typeof data !== "string") {
    return [];
  }

  data = data.trim();
  ctx = document.implementation.createHTMLDocument("");
  base = ctx.createElement("base");
  base.href = document.location.href;
  ctx.head.appendChild(base);
  _context = ctx.body;
  singleTag = regexpSingleTag.exec(data);

  if (singleTag) {
    result.push(document.createElement(singleTag[1]));
  } else {
    _context.innerHTML = data;

    for (var i = 0; i < _context.childNodes.length; i++) {
      result.push(_context.childNodes[i]);
    }
  }

  return result;
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
 * Transforma un Byte en su unidad correspondiente
 * @memberOf module:Utils
 * @function formatBytes
 * @param  {Number} bytes    Bytes a dar formato
 * @param  {Number} decimals Cantidad de decimales a mostrar
 * @return {String}
 */


function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (bytes === 0) return "0 Bytes";
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
/**
 * Establece opciones por defecto a los Simple plugins
 * @memberOf module:Utils
 * @function SetOptinsOfData
 * @param  {(Element|Fascino|String)} el      Elemento
 * @param  {Object} defaults Opciones por defecto
 * @return {Object}         Nuevas Opciones
 */


function setOptionsOfData(el, defaults) {
  var o = {},
      data = _$(el).data();

  each(data, function (d, i) {
    if (hasProp(defaults, i)) {
      try {
        o[i] = JSON.parse(d);
      } catch (e) {
        o[i] = d;
      }
    }
  });
  return extend({}, defaults, o);
}
/**
 * Genera un numero aleatorio entre rangos
 * @memberOf module:Utils
 * @function random
 * @param  {(Number|Undefined)} min Número minino
 * @param  {(Number|Undefined)} max Número máximo
 * @return {Number}      Resultado aleatorio
 */


function random(min, max) {
  if (min == undefined && max == undefined) {
    return Math.random();
  } else if (min == undefined || max == undefined) {
    var base = min || max;
    return Math.floor(Math.random() * base);
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
/**
 * Obtiene un valor Aleatorio de una Matriz o un Objeto
 * @memberOf module:Utils
 * @function randomMap
 * @param  {(Object|String)} arr Matriz u Objecto
 * @return {(Number|*)}     Valor de la Matriz u Objecto o -1 si no tiene éxito
 */


function randomMap(arr) {
  if (empty(arr)) {
    return -1;
  }

  if (isArrayish(arr)) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (isObject(arr)) {
    var k = Object.keys(arr);
    return arr[k[Math.floor(Math.random() * k.length)]];
  }

  return -1;
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
 * Valida y obtiene un elemento dado
 * @memberOf module:Utils
 * @function normalizeElements
 * @param  {(String|Array|Fascino)} s
 * @return {(Object|Element|Array|undefined)}   El elemento en su expresión para su uso
 */


function normalizeElements(s) {
  var result;

  if (isString(s)) {
    result = isSelector(s) ? _$(s) : parseHTML(s);
  } else if (isElement(s)) {
    result = [s];
  } else if (isFascinoElement(s)) {
    result = s;
  } else if (isArrayish(s)) {
    result = s;
  }

  return result;
}
/**
 * Genera un Identificador único basado en la fecha y hora actual
 * @memberOf module:Utils
 * @function uniqueId
 * @param  {String} prefix Prefijo del identificador
 * @return {String}        Identificador
 */


function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "fs";
  var d = new Date().getTime();
  return (prefix !== "" ? prefix + "-" : "") + "xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  });
}
/**
 * Genera una cadena HTML codificada para mostrar en pre o navegador
 * @memberOf module:Utils
 * @function htmlEntities
 * @param  {String} str Cadena de código Html
 * @example
 * <div>
 *   <pre></pre>
 *   <script>
 *   _$("pre").html(_$.htmlEntities("<section><h2>Hola Mundo</h2></section>"))
 *   </script>
 * </div>
 * @return {String}
 */


function htmlEntities(str) {
  return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace('/"/g', "&quot;");
}
/**
 * Limpia un texto pre-codificado
 * @memberOf module:Utils
 * @function cleanPreCode
 * @param  {String} textContent Texto
 * @return {String}
 */


function cleanPreCode(textContent) {
  var txt = textContent.replace(/^[\r\n]+/, "") // strip leading newline
  .replace(/\s+$/g, ""),
      mat,
      str,
      re = /^[\t ]+/gm,
      len,
      min = 1e3;

  if (/^\S/gm.test(txt)) {
    return txt;
  }
  /* jshint -W084 */

  /* eslint-disable-next-line */


  while (mat = re.exec(txt)) {
    len = mat[0].length;

    if (len < min) {
      min = len;
      str = mat[0];
    }
  }

  if (min === 1e3) {
    return;
  }

  return txt.replace(new RegExp("^" + str, "gm"), "").trim();
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
 * Convierte un Objecto JSON a u objecto del tipo FromData
 * @memberOf module:Utils
 * @function jsonToFormdata
 * @param  {Object} obj El Objecto
 * @return {FromData}
 */


function jsonToFormdata(obj) {
  if (!isObject(obj)) {
    return null;
  }

  var fromdata = new FormData();
  each(obj, function (v, k) {
    fromdata.append(camelCase(k), v);
  });
  return fromdata;
}

var Utils$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  camelCase: camelCase,
  strValue: strValue,
  toStr: toStr,
  tryStringObject: tryStringObject,
  defineProperty: defineProperty,
  gOPD: gOPD,
  isArray: isArray,
  setPropertyObj: setPropertyObj,
  getProperty: getProperty,
  extend: extend,
  isString: isString,
  isObject: isObject,
  isArrayish: isArrayish,
  isNumber: isNumber,
  isFunction: isFunction$1,
  hasProp: hasProp,
  toString: toString,
  isSelector: isSelector,
  empty: empty,
  not: not,
  getStyleComputed: getStyleComputed,
  isElement: isElement,
  isFascinoElement: isFascinoElement,
  isVisible: isVisible,
  isHiden: isHiden$1,
  isURL: isURL,
  merge: merge,
  each: each,
  createScript: createScript,
  script: script,
  parseHTML: parseHTML,
  normName: normName,
  formatBytes: formatBytes,
  setOptionsOfData: setOptionsOfData,
  random: random,
  randomMap: randomMap,
  normalizeData: normalizeData,
  normalizeElements: normalizeElements,
  uniqueId: uniqueId,
  htmlEntities: htmlEntities,
  cleanPreCode: cleanPreCode,
  strToArr: strToArr,
  createURI: createURI,
  url: url,
  jsonToFormdata: jsonToFormdata
});
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

var ListEvents$1 = ['blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];
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

      if (isFunction$1(selector)) {
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
        var NameEvents = ListEvents$1.indexOf(name) > -1 ? name : e;

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

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$2()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * @memberOf module:Core.Selector
 * @private
 * @inner
 * @const {Number}
 * @default 3
 */


var NODETEXT$1 = 3;
/**
 * Errores Personalizados de la Clase Selector
 * @namespace SelectorError
 * @memberOf module:Core.Selector
 * @class
 * @extends {Error} Error
 */

var SelectorError = /*#__PURE__*/function (_Error) {
  _inherits(SelectorError, _Error);

  var _super = _createSuper$1(SelectorError);

  function SelectorError() {
    var _this;

    _classCallCheck(this, SelectorError);

    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(params));

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), SelectorError);
    }

    _this.name = 'SelectorError';
    return _this;
  }

  return _createClass(SelectorError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Selecciona los Elementos y almacena en una matriz,
 * <blockquote>Esta clase esta pensada para el uso de [Fascino JS]{@link Fascino}, para usarla use [Fascino JS]{@link Fascino}.</blockquote>
 * @namespace Selector
 * @memberOf module:Core
 * @class
 * @requires Utils
 * @example
 * let div = new Selector('div.miclassdiv') // Retorna todos los div con la clase miclassdiv
 * let span = new Selector('span#miSpanID', div) // Retorna todos los span miSpanID hijo de div.miclassdiv
 */


var Selector = /*#__PURE__*/function () {
  /**
   * @param  {(String|Element|Object|Function|Array)} selector el elemento a seleccionar si es un String vea los selectores CSS
   * @param  {Element} context  El elemento padre de donde se seleccionara el elemento dado ejm. <code>p[context] > span[selector]</code>
   * @return {module:Core.Selector}  Un objecto con nuevas funciones para el elemento
   */
  function Selector(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    _classCallCheck(this, Selector);

    this.Elem = Array.from('');
    this.context = context;

    if (empty(selector)) {
      return this;
    }

    if (isString(selector)) {
      selector = selector.trim();
    }

    this.sel(selector);
    return this;
  }
  /**
   * Combina el nuevo elemento con los ya obtenidos
   * @memberOf module:Core.Selector
   * @protected
   * @param  {(Array|Object|Element|window|document)} otherEl
   * @return {void}
   */


  _createClass(Selector, [{
    key: "mergeEl",
    value: function mergeEl(otherEl) {
      var _this2 = this;

      if (!empty(otherEl) && otherEl.length === undefined) {
        otherEl = [otherEl];
      } else if (otherEl.self === window) {
        otherEl = [otherEl];
      }

      var e = [].slice.call(otherEl);

      if (e.length > 0) {
        e.forEach(function (el) {
          _this2.Elem.push(el);
        });
      }
    }
    /**
     * Valida y verifica el selector dado
     * @memberOf module:Core.Selector
     * @protected
     * @param  {*} sel
     * @return {Object}
     */

  }, {
    key: "sel",
    value: function sel(_sel) {
      if (isFunction$1(_sel)) {
        document.addEventListener('DOMContentLoaded', _sel, false);
        return this;
      }

      if (_sel instanceof Element) {
        this.mergeEl([_sel]);
        return this;
      }

      if (_sel instanceof NodeList) {
        this.mergeEl(_sel);
        return this;
      }

      if (_sel instanceof HTMLCollection) {
        var dHtmlCol = Array.from(_sel);
        this.mergeEl(dHtmlCol);
        return this;
      }

      if (isObject(_sel) && hasProp(_sel, 'Elem')) {
        this.mergeEl(_sel.Elem);
        return this;
      }

      switch (_sel) {
        case 'window':
          _sel = window;
          break;

        case 'document':
          _sel = document;
          break;

        case 'body':
          _sel = document.body;
          break;

        case 'html':
          _sel = document.documentElement;
          break;

        case ':root':
          _sel = document.documentElement;
          break;

        case 'doctype':
          _sel = document.doctype;
          break;
      }

      if (_sel && (_sel.nodeType || _sel.self === window)) {
        this.mergeEl(_sel);
        return this;
      }

      if (isArrayish(_sel)) {
        if (hasProp(_sel, '_prevObj')) {
          this._prevObj = _sel._prevObj;
        }

        this.mergeEl(_sel);
        return this;
      }

      if (typeof _sel !== 'string' && _sel.self && _sel.self !== window) {
        return this;
      }

      var pHtml = parseHTML(_sel);

      if (pHtml.length === 1 && pHtml[0].nodeType === NODETEXT$1) {
        try {
          var el = this.querySelector(_sel);

          if (el.length === 0) {
            return this;
          } else {
            this.mergeEl(el);
          }
        } catch (e) {
          throw new SelectorError("\nFascino:\n ".concat(_sel, " is not a valid selector"));
        }
      } else if (pHtml.length > 0) {
        this.mergeEl(pHtml);
      } else {
        this.mergeEl(_sel);
      }

      return this;
    }
    /**
     * Hace uso de querySelector y valida la cantidad de elementos
     * @memberOf module:Core.Selector
     * @protected
     * @param  {String} selector
     * @return {(Array|NodeList)}
     */

  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      var d = this.context || document;
      return d.querySelectorAll(selector).length > 1 ? d.querySelectorAll(selector) : d.querySelector(selector) != null ? [d.querySelector(selector)] : [];
    }
  }]);

  return Selector;
}();

var name = "fascino";
var version = "1.0.1";
var config = {
  version_short: "1.0"
};
var description = "Fascino JS Framework";
var main = "./src/index.js";
var scripts = {
  test: "karma start tests/karma.conf.js",
  dev: "rollup --environment DEV:true --config build/rollup.config.js --sourcemap",
  build: "rollup --environment DEV:false --config build/rollup.config.js --sourcemap",
  doc: "jsdoc --configure build/jsdoc.conf.js --verbose",
  fdev: "npm-run-all dev doc",
  prod: "npm-run-all build doc"
};
var publishConfig = {
  access: "public"
};
var keywords = ["framework", "js", "web", "javascript", "webcomponent"];
var browser = "./dist/fascino-umd.min.js";
var module = "./dist/fascino-es.js";
var unpkg = "./dist/fascino-umd.min.js";
var exports = {
  "./": "./src/index.js",
  "./all": "./src/all.js",
  "./plugins": "./src/Plugins/index.js",
  "./plugins/http": "./src/Plugins/http/index.js",
  "./plugins/progressbar": "./src/Plugins/progressbar/index.js"
};
var imports = {
  fascino: "src/index.js",
  "fascino/": "src/",
  "fascino-all": "src/all.js"
};
var homepage = "https://rep98.github.io/fascino";
var bugs = {
  url: "https://github.com/REP98/fascino/issues"
};
var author = {
  name: "Robert Pérez",
  email: "delfinmundo@gmail.com",
  url: "https://github.com/REP98"
};
var engines = {
  node: ">=18",
  npm: ">=8"
};
var license = "MIT";
var contributors = [];
var repository = {
  type: "git",
  url: "https://github.com/REP98/fascino.git"
};
var files = ["src/**/*", "dist/*.{js,map}", "dist/**/*.{js,map}"];
var peerDependencies = {
  axios: "^0.27.2",
  camelcase: "^6.3.0"
};
var devDependencies = {
  "@babel/cli": "^7.18.10",
  "@babel/core": "^7.18.13",
  "@babel/plugin-transform-runtime": "^7.18.10",
  "@babel/preset-env": "^7.18.10",
  "@babel/runtime": "^7.18.9",
  "@rollup/plugin-babel": "^5.3.1",
  "@rollup/plugin-commonjs": "^22.0.2",
  "@rollup/plugin-dynamic-import-vars": "^1.4.4",
  "@rollup/plugin-eslint": "^8.0.2",
  "@rollup/plugin-json": "^4.1.0",
  "@rollup/plugin-node-resolve": "^13.3.0",
  "@rollup/plugin-replace": "^4.0.0",
  "clean-jsdoc-theme": "^4.1.7",
  eslint: "^8.22.0",
  "eslint-config-google": "^0.14.0",
  jsdoc: "^3.6.11",
  karma: "^6.4.0",
  "karma-firefox-launcher": "^2.1.2",
  "karma-jasmine": "^5.1.0",
  "karma-jasmine-html-reporter": "^2.0.0",
  "karma-phantomjs-launcher": "^1.0.4",
  "node-notifier": "^10.0.1",
  "npm-run-all": "^4.1.5",
  rollup: "^2.78.1",
  "rollup-plugin-istanbul": "^3.0.0",
  "rollup-plugin-terser": "^7.0.2",
  terser: "^5.15.0"
};
var pkg = {
  name: name,
  version: version,
  config: config,
  description: description,
  main: main,
  scripts: scripts,
  publishConfig: publishConfig,
  keywords: keywords,
  browser: browser,
  module: module,
  unpkg: unpkg,
  exports: exports,
  imports: imports,
  homepage: homepage,
  bugs: bugs,
  author: author,
  engines: engines,
  license: license,
  contributors: contributors,
  repository: repository,
  files: files,
  peerDependencies: peerDependencies,
  devDependencies: devDependencies
};

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;

    while (--i >= 0 && matches.item(i) !== this) {}

    return i > -1;
  };
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}
/**
 * Lista de Eventos Nativos de Javascript <br>
 * Aquí se Almacenan los nombre de las funciones de eventos nativos 
 * 'blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove',
 * 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown',
 * 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
 * @example <caption>Uso</caption>
 * _$('selector').clicK(function(e){})
 * @memberOf Fascino
 * @private
 * @type {Array}
 */


var ListEvents = ['blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];
/**
 * @memberOf Fascino
 * @private
 * @const {Number}
 * @default 3
 */

var NODETEXT = 3;
/**
 * Función que reinvoca la Clase Fascino
 * @memberOf Fascino
 * @private
 * @param  {(String|Element|Array|Function|Object)} selector
 * @param  {HTMLElement} context
 * @return {Fascino}
 */

function w(sel, ctx) {
  return new Fascino(sel, ctx);
}
/**
 * Fascino, Encantador Framework JS para su fácil uso
 * @global
 * @namespace Fascino
 * @class
 * @extends {module:Core.Selector}
 */


var Fascino = /*#__PURE__*/function (_Selector) {
  _inherits(Fascino, _Selector);

  var _super = _createSuper(Fascino);
  /**
   * @param  {(String|Element|Array|Function|Object)} selector Seletor, Elemento ó funcion para iniciar FascinoJs
   * @param  {HTMLElement} context Contexto del selector, por defecto es <code>document</code>
   * @return {Fascino}
   */


  function Fascino(selector) {
    var _this2;

    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    _classCallCheck(this, Fascino);

    _this2 = _super.call(this, selector, context);

    _defineProperty(_assertThisInitialized(_this2), "_ds", new Data());

    _defineProperty(_assertThisInitialized(_this2), "_ev", new Event());

    _this2.name = 'FascinoJS';
    _this2.length = _this2.Elem.length;
    _this2.version = pkg.version;

    if (_this2.length == 1) {
      _this2.events = _this2.getEvent();
    }

    return _this2;
  } // STATICOS

  /**
   * Añade funciones a Fascino
   * @memberOf Fascino
   * @public
   * @param {String} name Nombre de la función
   * @param {Function} fn Función a asignar
   * @return {Fascino}
   */


  _createClass(Fascino, [{
    key: "_is",
    value: // PRIVADOS

    /**
     * Private _is
     * @memberOf Fascino
     * @private
     * @param  {String}  prop propiedad tipo
     * @return {Boolean}
     */
    function _is(prop) {
      var res = false;
      this.each(function (el) {
        res = el[prop];
      });
      return res;
    }
    /**
     * Busca y obtiene una propiedad de un elemento dado
     * @memberOf Fascino
     * @private
     * @param  {String} n Nombre de la propiedad
     * @param  {String} v Valor de la propiedad
     * @return {Fascino}
     */

  }, {
    key: "_prop",
    value: function _prop(n, v) {
      if (this.length === 0) {
        return this;
      }

      if (arguments.length === 1) {
        return n in this.Elem[0] ? this.Elem[0][n] : undefined;
      }

      if (empty(v)) {
        v = '';
      }

      return this.each(function (el) {
        el[n] = v;

        if (n === 'innerHTML') {
          script(el);
        }
      });
    }
    /**
     * Método privado que ayuda a establecer opciones a un elemento dado.
     * @memberOf Fascino
     * @private
     * @param {(Element|NodeList)} newNode
     * @param {Object} options
     */

  }, {
    key: "_setOptions",
    value: function _setOptions(newNode, options) {
      if (!empty(options)) {
        for (var key in options) {
          if (hasProp(options, key)) {
            var value = options[key];

            if (hasProp(this, key)) {
              w(newNode)[key].apply(this, value);
            }
          }
        }
      }
    }
    /**
     * Tamaño Externo del elemento
     * @memberOf Fascino
     * @private
     * @param  {String} prop
     * @param  {String} val
     * @return {(String|Number)}
     */

  }, {
    key: "_sizeOut",
    value: function _sizeOut(prop, val) {
      var el, size, style, result;

      if (this.length === 0) {
        return;
      }

      if (!empty(val) && typeof val !== 'boolean') {
        return this.each(function (el) {
          if (el === window || el === document) {
            return;
          }

          var h,
              style = getStyleComputed(el),
              bs = prop === 'width' ? parseInt(style['border-left-width']) + parseInt(style['border-right-width']) : parseInt(style['border-top-width']) + parseInt(style['border-bottom-width']),
              pa = prop === 'width' ? parseInt(style['padding-left']) + parseInt(style['padding-right']) : parseInt(style['padding-top']) + parseInt(style['padding-bottom']);
          h = w(el)[prop](val)[prop]() - bs - pa;
          el.style[prop] = h + 'px';
        });
      }

      el = this.Elem[0];
      size = el[prop === 'width' ? 'offsetWidth' : 'offsetHeight'];
      style = getStyleComputed(el);
      result = size + parseInt(style[prop === 'width' ? 'margin-left' : 'margin-top']) + parseInt(style[prop === 'width' ? 'margin-right' : 'margin-bottom']);
      return val === true ? result : size;
    }
    /**
     * Tamano real del elemento
     * @memberOf Fascino
     * @private
     * @param  {String} pro
     * @param  {String} val
     * @return {(fascino|Number|NaN|String)}
     */

  }, {
    key: "_size",
    value: function _size(prop, val) {
      if (this.length === 0) {
        return NaN;
      }

      if (empty(val)) {
        var el = this.Elem[0];

        if (prop === 'height') {
          return el === window ? window.innerHeight : el === document ? el.body.clientHeight : parseInt(getComputedStyle(el).height);
        } else if (prop === 'width') {
          return el === window ? window.innerWidth : el === document ? el.body.clientWidth : parseInt(getComputedStyle(el).width);
        }
      }

      return this.each(function (el) {
        if (el === window || el === document) {
          return;
        }

        el.style[prop] = isNaN(val) ? val : val + 'px';
      });
    } // PUBLICOS

    /**
     * Recorre los elementos
     * @memberOf Fascino
     * @public
     * @param  {...(Function|Array)} arg Argumentos
     * @return {Fascino}
     */

  }, {
    key: "each",
    value: function each() {
      var _this$Elem;

      (_this$Elem = this.Elem).forEach.apply(_this$Elem, arguments);

      return this;
    }
    /**
     * Verifica si el elemento es seleccionable por el Selector
     * @memberOf Fascino
     * @public
     * @param  {String} selectorString Selector CSS
     * @return {(Element|Array)}
     */

  }, {
    key: "matches",
    value: function matches(selectorString) {
      var elem = [];
      this.each(function (el) {
        if (el.matches(selectorString)) {
          elem.push(el);
        }
      });
      return elem;
    }
    /**
     * Crea una nueva matriz de elementos a través de la función dada
     * @memberOf Fascino
     * @public
     * @param  {Function} callback Función
     * @return {Array}
     */

  }, {
    key: "map",
    value: function map(callback) {
      return this.Elem.map(callback);
    }
    /**
     * Combina Elementos
     * @memberOf Fascino
     * @public
     * @param  {Array} els Matriz de elementos nueva
     * @return {Fascino}
     */

  }, {
    key: "merge",
    value: function merge$1(els) {
      merge(this.Elem, els);
      return this;
    }
    /**
     * Obtiene la posición del elemento dentro de su padre
     * @memberOf Fascino
     * @public
     * @param  {(Element|Null)} parent   El padre de los Elementos
     * @param  {String} nodeName tipo de nombre de nodo entre los cuales buscar
     * @return {Number}
     */

  }, {
    key: "index",
    value: function index(parent, nodeName) {
      var el = this.Elem[0],
          index = -1,
          child;
      parent = empty(parent) ? el.parentNode() : normalizeElements(parent);

      if (empty(nodeName)) {
        child = w(parent).children();
      } else {
        child = w(parent).find(nodeName);
      }

      child.each(function (element, i) {
        if (element === el) {
          index = i;
        }
      });
      return index;
    }
    /**
     * Obtiene el Elemento solicitado por su posición dentro de la matriz de Elementos, El Elemeto obtenido es de tipo Element
     * @memberOf Fascino
     * @public
     * @param  {Number} i Posición
     * @return {Element}
     */

  }, {
    key: "get",
    value: function get(i) {
      if (not(i)) {
        return this.Elem;
      }

      return i < 0 ? this.Elem[i + this.length] : this.Elem[i];
    }
    /**
     * Busca, valida y obtiene el elemento dado por su posición dentro de la matriz de elementos
     * @memberOf Fascino
     * @public
     * @param  {Number} i posición del elemento
     * @return {Fascino}
     */

  }, {
    key: "eq",
    value: function eq(i) {
      return !isNaN(i) && this.length > 0 ? extend(w(this.get(i)), {
        _prevObj: this
      }) : this;
    }
    /**
     * Obtiene el ultimo elemento de la matriz
     * @memberOf Fascino
     * @public
     * @return {Element}
     */

  }, {
    key: "last",
    value: function last() {
      return this.eq(this.length - 1);
    }
    /**
     * Obtiene el primer elemento de la matriz
     * @memberOf Fascino
     * @public
     * @return {Element}
     */

  }, {
    key: "first",
    value: function first() {
      return this.eq(0);
    }
    /**
     * Crea una nueva selección de elemento que cumplan con la condición dada en la función
     * @memberOf Fascino
     * @public
     * @param  {Function} fn Función para filtrar
     * @return {Fascino}
     */

  }, {
    key: "filter",
    value: function filter(fn) {
      if (isString(fn)) {
        var sel = fn;

        fn = function fn(el) {
          return el.matches(sel);
        };
      }

      return extend(merge(w().Elem, [].filter.call(this.Elem, fn)), {
        _prevObj: this
      });
    }
    /**
     * Obtiene los elementos impares de la matriz
     * @memberOf Fascino
     * @public
     * @return {(Element|Fascino)}
     */

  }, {
    key: "odd",
    value: function odd() {
      var result = this.filter(function (el, i) {
        return i % 2 === 0;
      });
      return extend(result, {
        _prevObj: this
      });
    }
    /**
     * Obtiene los numero pares de la matriz
     * @memberOf Fascino
     * @public
     * @return {(Element|Fascino)}
     */

  }, {
    key: "even",
    value: function even() {
      var result = this.filter(function (el, i) {
        return i % 2 !== 0;
      });
      return extend(result, {
        _prevObj: this
      });
    }
    /**
     * Busca un elemento hijo por su selector CSS
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel Selector CSS valido
     * @return {Fascino}
     */

  }, {
    key: "find",
    value: function find(sel) {
      var rEl = Array.from('');
      this.Elem.forEach(function (el) {
        var _ref;

        rEl.push((_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(el, sel))));
      });
      return rEl.length === 0 ? [] : rEl.length === 1 ? w(rEl[0]) : merge(w().Elem, rEl);
    }
    /**
     * Verifica si el elemento es hijo del Elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} s Selector CSS
     * @return {Boolean}
     */

  }, {
    key: "contains",
    value: function contains(s) {
      return this.find(s).length > 0;
    }
    /**
     * Obtiene los hijos de un elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel Selector o elemento hijo a buscar
     * @return {Array} Lista de hijos
     */

  }, {
    key: "children",
    value: function children(sel) {
      var _ref3;

      var element = this.Elem[0];

      if (empty(sel)) {
        var _ref2;

        return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.children));
      }

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(sel);
      });
    }
    /**
     * Verifica de que tipo es el selector
     * @memberOf Fascino
     * @public
     * @param  {*}  s
     * @return {Boolean}
     */

  }, {
    key: "is",
    value: function is(s) {
      var result = false;

      if (this.length === 0) {
        return false;
      }

      if (s && hasProp(s, 'Elem')) {
        this.each(function (el) {
          s.each(function (o) {
            if (el === o) {
              result = true;
              return;
            }
          });
        });
      }

      if (isString(s)) {
        if (s === ':selected') {
          result = this._is('selected');
        } else if (s === ':checked') {
          result = this._is('checked');
        } else if (s === ':visible') {
          this.each(function (el) {
            if (isVisible(el)) {
              result = true;
            }
          });
        } else if (s === ':hidden') {
          this.each(function (el) {
            if (el.getAttribute('type') === 'hidden' || isHiden(el)) {
              result = true;
            }
          });
        } else if (s === ':disabled') {
          this.each(function (el) {
            if (el.getAttribute('disabled') || _$(el).hasClass('disabled')) {
              result = true;
            }
          });
        } else if (s === ':readonly') {
          this.each(function (el) {
            if (el.getAttribute('readonly') || _$(el).hasClass('readonly')) {
              result = true;
            }
          });
        } else {
          this.each(function (el) {
            if (el.matches(s) || Element.prototype.matches.call(el, s)) {
              result = true;
            }
          });
        }
      } else if (isArrayish(s)) {
        this.each(function (el) {
          s.forEach(function (sel) {
            if (el === sel) {
              result = true;
            }
          });
        });
      } else if (s.nodeType === 1) {
        this.each(function (el) {
          if (el === s) {
            result = true;
          }
        });
      }

      return result;
    }
    /**
     * Método público de Fascino._prop
     * @memberOf Fascino
     * @public
     * @param  {String} n
     * @param  {String} v
     * @return {Fascino}
     */

  }, {
    key: "prop",
    value: function prop(n, v) {
      return arguments.length === 1 ? this._prop(n) : this._prop(n, empty(v) ? '' : v);
    }
    /**
     * Agrega un elemento al padre seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(Element|Fascino|String)} node
     * @param  {Object} options
     * @return {Fascino}
     */

  }, {
    key: "append",
    value: function append(node, options) {
      if (this.length === 0) {
        return this;
      }

      var newNode = normalizeElements(node);

      this._setOptions(newNode, options);

      return this.each(function (el) {
        w(newNode).each(function (nN, i) {
          if (nN === el) {
            return;
          }

          var child = i === 0 ? nN : nN.cloneNode(true);
          script(child);

          if (child.tagName && child.tagName !== 'SCRIPT') {
            el.append(child);
          }
        });
      });
    }
    /**
     * Agrega el elemento seleccionado al nuevo padre
     * @memberOf Fascino
     * @public
     * @param  {(Element|Fascino|String)} node
     * @param  {Object} options
     * @return {Fascino}
     */

  }, {
    key: "appendTo",
    value: function appendTo(node, options) {
      if (this.length === 0) {
        return this;
      }

      var newNode = normalizeElements(node);

      this._setOptions(newNode, options);

      return this.each(function (el) {
        w(newNode).each(function (p, i) {
          if (el === p) {
            return p;
          }

          p.append(i === 0 ? el : el.cloneNode(true));
        });
      });
    }
    /**
     * Agrega un nuevo elemento al principio del padre seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(Element|Fascino|String)} node
     * @param  {Object} options
     * @return {Fascino}
     */

  }, {
    key: "prepend",
    value: function prepend(node, options) {
      if (this.length === 0) {
        return this;
      }

      var newNode = normalizeElements(node);

      this._setOptions(newNode, options);

      return this.each(function (el, elIndex) {
        w(newNode).each(function (e) {
          if (el === e) return;
          var child = elIndex === 0 ? e : e.cloneNode(true);
          script(child);

          if (child.tagName && child.tagName !== 'SCRIPT') {
            el.prepend(child);
          }
        });
      });
    }
    /**
     * Agrega el elemento seleccionado al nuevo padre
     * @memberOf Fascino
     * @public
     * @param  {(Element|Fascino)} node
     * @param  {Object} options
     * @return {Fascino}
     */

  }, {
    key: "prependTo",
    value: function prependTo(node, options) {
      if (this.length === 0) {
        return this;
      }

      var newNode = normalizeElements(node);

      this._setOptions(newNode, options);

      return this.each(function (el) {
        w(newNode).each(function (parent, parIndex) {
          if (el === parent) return parent;
          w(parent).prepend(parIndex === 0 ? el : el.cloneNode(true));
        });
      });
    }
    /**
     * Clona el elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {Boolean} deep Verdadero si los hijos del nodo también deben ser clonados
     * @return {Array}
     */

  }, {
    key: "clone",
    value: function clone() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var res = [];

      if (not(deep)) {
        deep = false;
      }

      this.each(function (e) {
        var el = e.cloneNode(deep);
        res.push(el);
      });
      return merge(w().Elem, res);
    }
    /**
     * Crea una copia de un nodo desde un documento externo
     * @memberOf Fascino
     * @public
     * @param  {Boolean} deep Verdadero si los hijos del nodo también deben ser importados
     * @return {Array}
     */

  }, {
    key: "import",
    value: function _import() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var res = [];

      if (not(deep)) {
        deep = true;
      }

      this.each(function (e) {
        res.push(document.importNode(e, deep));
      });
      return merge(w().Elem, res);
    }
    /**
     * Transfiere un node desde otro document al documento del método
     * @memberOf Fascino
     * @public
     * @return {Array}
     */

  }, {
    key: "adopt",
    value: function adopt() {
      var res = [];
      this.each(function (e) {
        res.push(document.adoptNode(e));
      });
      return merge(w().Elem, res);
    }
    /**
     * Obtiene el contenido de un Iframe o Template
     * @memberOf Fascino
     * @public
     * @return {Array}
     */

  }, {
    key: "contents",
    value: function contents() {
      if (this.length === 0) {
        return this;
      }

      var res = [];
      this.each(function (el) {
        var content;

        if (el.nodeName === 'IFRAME') {
          content = el.contentDocument || el.contentWindow.document;
        } else if (el.nodeName === 'TEMPLATE') {
          content = el.content;
        }

        res.push(content);
      });
      return merge(w().Elem, res);
    }
    /**
     * Obtiene el o los padres de un elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel Selector del padre a buscar
     * @return {Fascino} Lista de Padres
     */

  }, {
    key: "parents",
    value: function parents(sel) {
      var parents = [];
      this.each(function (el) {
        var ancestor = el.parentNode;

        while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODETEXT) {
          if (ancestor.matches(sel)) {
            parents.push(ancestor);
          }

          ancestor = ancestor.parentNode;
        }
      });
      return w(parents);
    }
    /**
     * Obtiene el padre del elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "parent",
    value: function parent() {
      var parent = [];
      this.each(function (el) {
        parent.push(el.parentNode);
      });
      return w(parent);
    }
    /**
     * Obtiene o busca el hermano anterior
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel
     * @return {(Fascino|Array)}
     */

  }, {
    key: "prev",
    value: function prev(sel) {
      var el = this.Elem[0],
          previous = el.previousElementSibling;

      if (empty(sel)) {
        return w(previous);
      }

      while (previous) {
        if (previous.matches(sel)) {
          return w(previous);
        }

        previous = previous.previousElementSibling;
      }

      return [];
    }
    /**
     * Obtiene o busca el hermano siguiente
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)}   sel
     * @return {(Fascino|Array)}
     */

  }, {
    key: "next",
    value: function next(sel) {
      var el = this.Elem[0],
          next = el.nextElementSibling;

      if (empty(sel)) {
        return w(next);
      }

      while (next) {
        if (next.matches(sel)) {
          return w(next);
        }

        next = next.nextElementSibling;
      }

      return [];
    }
    /**
     * Busca el ascendiente más cercano al elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel Selector del ascendiente a buscar
     * @return {(Fascino|Element|Array|Null)}
     */

  }, {
    key: "closest",
    value: function closest(sel) {
      if (this.length === 0) return this;

      if (!sel) {
        return this.parent(sel);
      }

      var res = [];
      this.each(function (el) {
        if ('closest' in el) {
          res.push(el.closest(sel));
        } else {
          while (el) {
            if (!el) break;

            if (el.matches(sel)) {
              res.push(el);
              return;
            }

            el = el.parentElement;
          }
        }
      });
      return res;
    }
    /**
     * Vacía el contenido HTML de un elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "emptyHtml",
    value: function emptyHtml() {
      return this.each(function (el) {
        el.innerHTML = '';
      });
    }
    /**
     * Vacía el valor de un elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "emptyVal",
    value: function emptyVal() {
      return this.each(function (el) {
        el.value = '';
      });
    }
    /**
     * Encierra un elemento
     * @memberOf Fascino
     * @public
     * @param  {(Element|String)} el
     * @return {Fascino} El nuevo padre
     */

  }, {
    key: "wrap",
    value: function wrap(el) {
      if (this.length === 0) {
        return;
      }

      var wrapper = w(normalizeElements(el));

      if (!wrapper.length) {
        return;
      }

      var res = [];
      this.each(function (el) {
        var _target, _wrapper;

        _wrapper = w(wrapper.clone(true));

        _wrapper.insertBefore(el);

        _target = _wrapper;

        while (_target.children().length) {
          _target = _target.children().eq(0);
        }

        _target.append(el);

        res.push(_wrapper.eq(0));
      });
      return w(res);
    }
    /**
     * Busca y encierra todos los elemento del tipo dado
     * @memberOf Fascino
     * @public
     * @param  {(NodeList|Fascino-Object|Object|Array)} el
     * @return {Fascino}
     */

  }, {
    key: "wrapAll",
    value: function wrapAll(el) {
      var wrapper, _wrapper, _target;

      if (this.length === 0) {
        return;
      }

      wrapper = w(normalizeElements(el));

      if (!wrapper.length) {
        return;
      }

      _wrapper = w(wrapper.clone(true));

      _wrapper.insertBefore(this.Elem[0]);

      _target = _wrapper;

      while (_target.children().length) {
        _target = _target.children().eq(0);
      }

      this.each(function (e) {
        _target.append(e);
      });
      return _wrapper;
    }
    /**
     * Busca y encierra los hijo de un elemento
     * @memberOf Fascino
     * @public
     * @param  {(Elemento|Fascino|String)} el
     * @return {Fascino}
     */

  }, {
    key: "wrapInner",
    value: function wrapInner(el) {
      if (this.length === 0) {
        return;
      }

      var wrapper = w(normalizeElements(el));

      if (!wrapper.length) {
        return;
      }

      var res = [];
      this.each(function (e) {
        var elem = w(e),
            html = elem.html(),
            wrp = w(wrapper.clone(true));
        elem.html(wrp.html(html));
        res.push(wrp);
      });
      return w(res);
    }
    /**
     * Desencierra los elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "unwrap",
    value: function unwrap() {
      return this.each(function (el) {
        var p = el.parentNode;

        while (el.firstChild) {
          p.insertBefore(el.firstChild, el);
        }

        p.removeChild(el);
      });
    }
    /**
     * Elimina uno o todos los elementos del DOM
     * @memberOf Fascino
     * @public
     * @param  {(String|Element|Array)} sel Selector a eliminar
     * @return {Array}
     */

  }, {
    key: "remove",
    value: function remove(sel) {
      var _ref4;

      var out = !empty(sel) ? this.Elem.filter(function (el) {
        return el.matches(sel);
      }) : this.Elem,
          res = [];
      out.forEach(function (el) {
        res.push(el.parentNode.removeChild(el));
      });
      return (_ref4 = []).concat.apply(_ref4, _toConsumableArray(this.Elem).concat(res));
    }
    /**
     * Inserta un elemento antes del elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {Element} elements
     * @return {Fascino}
     */

  }, {
    key: "insertBefore",
    value: function insertBefore(elements) {
      var _el = w(elements);

      return this.each(function (el) {
        _el.each(function (_e, i) {
          if (_e === el) {
            return;
          }

          var p = _e.parentNode;

          if (p) {
            p.insertBefore(i === 0 ? el : el.cloneNode(true), _e);
          }
        });
      });
    }
    /**
     * Inserta un elemento después del elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {Element} elements
     * @return {Fascino}
     */

  }, {
    key: "insertAfter",
    value: function insertAfter(elements) {
      var _el = w(elements);

      return this.each(function (el) {
        _el.each(function (_e, i) {
          if (_e === el) {
            return;
          }

          var p = _e.parentNode;

          if (p) {
            p.insertBefore(i === 0 ? el : el.cloneNode(true), _e.nextSibling);
          }
        });
      });
    }
    /**
     * Agrega un elemento o etiquetas HTML después del elemento dado
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} html
     * @param  {String} position la posición equivale a afterbegin o afterend; @default afterbegin
     * @return {Fascino}
     */

  }, {
    key: "after",
    value: function after(html) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'afterbegin';
      return this.each(function (el) {
        if (isString(html)) {
          el.insertAdjacentHTML(position, html);
        } else {
          w(html).insertAfter(el);
        }
      });
    }
    /**
     * Agrega un elemento o HTML antes del elemento dado
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} html
     * @param  {String} position la posición equivale a beforebegin o beforeend; @default beforebegin
     * @return {Fascino}
     */

  }, {
    key: "before",
    value: function before(html) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'beforebegin';
      return this.each(function (el) {
        if (isString(html)) {
          el.insertAdjacentHTML(position, html);
        } else {
          w(html).insertBefore(el);
        }
      });
    }
    /**
     * Obtiene o Establece el texto al elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(String|Null)} txt
     * @return {(Fascino|String)}
     */

  }, {
    key: "text",
    value: function text(txt) {
      return empty(txt) ? this._prop('textContent') : this._prop('textContent', txt);
    }
    /**
     * Obtiene o Establece el contenido HTML del elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(String|Fascino|Element)} html
     * @return {(Fascino|String)}
     */

  }, {
    key: "html",
    value: function html(_html) {
      var value = [];

      if (this.length === 0) {
        return this;
      }

      if (_html === '') {
        return this._prop('innerHTML', '');
      }

      if (empty(_html)) {
        return this._prop('innerHTML');
      }

      if (Array.isArray(_html)) {
        var _ref5;

        value = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(value).concat(_toConsumableArray(_html)));
      } else if (_html instanceof Element || isFascinoElement(_html)) {
        var _ref6;

        var res = [],
            h = _html instanceof Element ? w(_html) : _html;
        h.each(function (v) {
          res.push(w(v).outerHTML());
        });
        value = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(value).concat(res));
      } else {
        value.push(_html);
      }

      this._prop('innerHTML', value.length === 1 && empty(value[0]) ? '' : value.join('\n'));

      return this;
    }
    /**
     * Obtiene o Establece el valor de un elemento dado
     * @memberOf Fascino
     * @public
     * @param  {String} value Valor del input, textarea o elemento que contenta value
     * @return {(Fascino|String)}
     */

  }, {
    key: "val",
    value: function val(value) {
      if (not(value)) {
        return this.length === 0 ? undefined : this._prop('value');
      }

      return this.each(function (el) {
        if (typeof el.value != 'undefined') {
          el.value = value;
        } else {
          w(el).html(value);
        }
      });
    }
    /**
     * Obtiene el HTML o envoltura del elemento dado
     * @memberOf Fascino
     * @public
     * @return {String}
     */

  }, {
    key: "outerHTML",
    value: function outerHTML() {
      return this._prop('outerHTML');
    }
    /**
     * Agrega clases al elemento dado
     * @memberOf Fascino
     * @example
     * _$(mi-elem).addClass('miclass')
     * _$(mi-elem).addClass('miclass1', 'miclass2' /*...*\)
     * @public
     * @param {...String} arg Lista de clases separadas por coma(,)
     * @return {Fascino}
     */

  }, {
    key: "addClass",
    value: function addClass() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      return this.each(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, arg);
      });
    }
    /**
     * Elimina Clases del elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {...String} args
     * @return {Fascino}
     */

  }, {
    key: "removeClass",
    value: function removeClass() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.each(function (e) {
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, args);
      });
    }
    /**
     * Intercambia clases del elemento dado
     * @memberOf Fascino
     * @public
     * @param  {...String} args Lista de Clases a cambiar
     * @return {Fascino}
     */

  }, {
    key: "toggleClass",
    value: function toggleClass() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.each(function (e) {
        var _e$classList3;

        (_e$classList3 = e.classList).toggle.apply(_e$classList3, args);
      });
    }
    /**
     * Reemplaza una clase por otra
     * @memberOf Fascino
     * @public
     * @param  {...String} args Clase vieja clase nueva
     * @example
     * miElement.replaceClass('oldClass', 'NewClass')
     * @return {Fascino}
     */

  }, {
    key: "replaceClass",
    value: function replaceClass() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.each(function (e) {
        var _e$classList4;

        (_e$classList4 = e.classList).replace.apply(_e$classList4, args);
      });
    }
    /**
     * Verifica si el elemento posee una clase
     * @memberOf Fascino
     * @public
     * @param  {String}  className Nombre de la clase
     * @return {Boolean} Verdadero si existe
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return this.Elem[0].classList.contains(className);
    }
    /**
     * Agrega u Obtiene estilos CSS a los Elementos
     * @memberOf Fascino
     * @public
     * @param  {...(String|Array|Object)} arg
     * @example <caption>Uso</caption>
     * miElement.style('display', 'none') // establece la propiedad CSS a display none
     * miElement.style({
     *   border: '1px solid #ff0' // Establece un border Amarillo
     *   color: '#000' // y un color de texto Negro
     * })
     * miElement.style('display') // retorna none
     * miElement.style() // Retorna todos los Estilos establecidos(CSSStyleDeclaration)
     * miElement.style([
     *   'border', 'color' // Retorna un Objecto {IDfromMiElem: {border: '1px solid #ff0', color: '#000'}}
     * ]) // Importante: si el elemento no tiene ID se le creara uno aleatorio
     * @return {(Fascino|Array|Object|String)}
     */

  }, {
    key: "style",
    value: function style() {
      for (var _len5 = arguments.length, arg = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        arg[_key5] = arguments[_key5];
      }

      if (this.length === 0) {
        return this;
      }

      if (arg.length === 0) {
        return getComputedStyle(this.Elem[0]);
      }

      if (arg.length === 1) {
        if (isArrayish(arg[0])) {
          var getStyle = {},
              i = 0;
          this.each(function (el) {
            var id = el.getAttribute('id'),
                prefix = !empty(id) ? id : el.tagName + i;
            getStyle[prefix] = {};
            arg[0].forEach(function (nameStyle) {
              getStyle[prefix][nameStyle] = el.style[nameStyle];
            });
            i++;
          });
          return getStyle;
        } else if (isObject(arg[0])) {
          return this.each(function (el) {
            for (var key in arg[0]) {
              if (hasProp(arg[0], key)) {
                var value = arg[0][key];
                el.style.setProperty(key, value);
              }
            }
          });
        } else if (arg[0].indexOf(':') === 0) {
          return getStyleComputed(this.Elem[0], null, arg[0]);
        } else if (arg[0] === '*' || arg[0] === 'all') {
          return getStyleComputed(this.Elem[0]);
        } else {
          var st = getStyleComputed(this.Elem[0]);
          return arg[0] in st ? st[arg[0]] : '';
        }
      }

      if (arg.length === 2 || arg.length === 3) {
        return this.each(function (el) {
          var _el$style;

          (_el$style = el.style).setProperty.apply(_el$style, arg);
        });
      }

      return this;
    }
    /**
     * Remueve todos o los estilos establecidos
     * @memberOf Fascino
     * @public
     * @example
     * miElement.removeStyle('border', 'color') // Removerá los estilos del border y el color
     * @param  {...String} name Lista de Stilo}
     * @return {Fascino}
     */

  }, {
    key: "removeStyle",
    value: function removeStyle() {
      for (var _len6 = arguments.length, name = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        name[_key6] = arguments[_key6];
      }

      if (empty(name) || this.length === 0) {
        return this;
      }

      return this.each(function (el) {
        name.forEach(function (n) {
          el.style.removeProperty(n);
        });
      });
    }
    /**
     * Obtiene o estable el valor de la barra de desplazamiento vertical
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)} val
     * @return {(String|Number|Fascino)}
     */

  }, {
    key: "scrollTop",
    value: function scrollTop(val) {
      if (this.length === 0) {
        return this;
      }

      if (not(val)) {
        return this.Elem[0] === window ? window.pageYOffset : this.Elem[0].scrollTop;
      }

      return this.each(function (el) {
        el.scrollTop = val;
      });
    }
    /**
     * Obtiene o estable el valor de la barra de desplazamiento Horizontal
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)} val
     * @return {(String|Number|Fascino)}
     */

  }, {
    key: "scrollLeft",
    value: function scrollLeft(val) {
      if (this.length === 0) {
        return this;
      }

      if (empty(val)) {
        return this.Elem[0] === window ? window.pageXOffset : this.Elem[0].scrollLeft;
      }

      return this.each(function (el) {
        el.scrollLeft = val;
      });
    }
    /**
     * Obtiene o Establece el Ancho total del elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)} val
     * @return {(String|Number|Fascino)}
     */

  }, {
    key: "outerWidth",
    value: function outerWidth(val) {
      return this._sizeOut('width', val);
    }
    /**
     * Obtiene o Establece la Altura total del elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)} val
     * @return {(String|Number|Fascino)}
     */

  }, {
    key: "outerHeight",
    value: function outerHeight(val) {
      return this._sizeOut('height', val);
    }
    /**
     * Obtiene o Establece la posición del Elemento
     * @memberOf Fascino
     * @public
     * @param  {Object} val Objeto {top,left}
     * @return {(Object|Fascino)}
     */

  }, {
    key: "offset",
    value: function offset(val) {
      if (this.length === 0) {
        return this;
      }

      if (empty(val)) {
        var rect = this.Elem[0].getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        };
      }

      return this.each(function (el) {
        var offset = w(el).offset(),
            top = val.top,
            left = val.left,
            position = getStyleComputed(el).position;

        if (position === 'static') {
          w(el).style('position', 'relative');
        }

        if (['absolute', 'fixed'].indexOf(position) === -1) {
          top = top - offset.top;
          left = left - offset.left;
        }

        w(el).style({
          top: top,
          left: left
        });
      });
    }
    /**
     * Obtiene la Posición del elemento
     * @memberOf Fascino
     * @public
     * @param  {Boolean} margin Verdader si se incluye el margen
     * @return {(Object|Undefined)}
     */

  }, {
    key: "position",
    value: function position() {
      var margin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.length === 0) {
        return undefined;
      }

      if (typeof margin != 'boolean') {
        try {
          margin = JSON.parse(margin);
        } catch (e) {
          margin = false;
        }
      }

      var ml = 0,
          mt = 0;

      if (margin) {
        var s = getStyleComputed(this.Elem[0]);
        ml = parseInt(s['margin-left']);
        mt = parseInt(s['margin-top']);
      }

      return {
        top: this.Elem[0].offsetTop - mt,
        left: this.Elem[0].offsetLeft - ml
      };
    }
    /**
     * Obtiene o Establece la posición horizontal del elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)}  v Nueva posición
     * @param  {Boolean} m Si se debe incluir el margen
     * @return {(String|Number|NaN)}
     */

  }, {
    key: "left",
    value: function left(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.length === 0) {
        return NaN;
      }

      if (typeof v === 'boolean') {
        m = v;
        v = undefined;
      }

      if (empty(v)) {
        return this.position(m).left;
      }

      return this.style('left', !isNaN(v) ? v + 'px' : v);
    }
    /**
     * Obtiene o Establece la posición vertical del elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)}  v Nueva posición
     * @param  {Boolean} m Si se debe incluir el margen
     * @return {(String|Number|NaN)}
     */

  }, {
    key: "top",
    value: function top(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.length === 0) {
        return NaN;
      }

      if (typeof v === 'boolean') {
        m = v;
        v = undefined;
      }

      if (empty(v)) {
        return this.position(m).top;
      }

      return this.style('top', !isNaN(v) ? v + 'px' : v);
    }
    /**
     * Obtiene el Ancho interno del elemento
     * @memberOf Fascino
     * @public
     * @return {Number}
     */

  }, {
    key: "innerWidth",
    value: function innerWidth() {
      return this.Elem[0] === window ? window.innerWidth : this.Elem[0].clientWidth;
    }
    /**
     * Obtiene el Alto interno del elemento
     * @memberOf Fascino
     * @public
     * @return {Number}
     */

  }, {
    key: "innerHeight",
    value: function innerHeight() {
      return this.Elem[0].clientHeight;
    }
    /**
     * Obtiene o establece la altura del elemento
     * @memberOf Fascino
     * @public
     * @param  {(Number|String)} val
     * @return {(Number|String|Fascino)}
     */

  }, {
    key: "height",
    value: function height(val) {
      return this._size('height', val);
    }
    /**
     * Obtiene o establece la anchura del elemento
     * @memberOf Fascino
     * @public
     * @param  {(Number|String)} val
     * @return {(Number|String|Fascino)}
     */

  }, {
    key: "width",
    value: function width(val) {
      return this._size('width', val);
    }
    /**
     * Oculta un ELemento y ejecuta la función dada
     * @memberOf Fascino
     * @public
     * @param  {Function} callback
     * @return {Fascino}
     */

  }, {
    key: "hide",
    value: function hide(callback) {
      var _this3 = this;

      return this.each(function (el) {
        var display = w(el).style('display'),
            opacity = w(el).style('opacity');

        if (display != 'none' && parseInt(opacity) != 0) {
          w(el).origin('display', display);
          w(el).origin('opacity', opacity);
          w(el).style({
            display: 'none',
            opacity: 0
          });
        }

        if (isFunction$1(callback)) {
          callback.call(_this3, el);
        }
      });
    }
    /**
     * Muestra un elemento y ejecuta la función dada
     * @memberOf Fascino
     * @public
     * @param  {Function} callback
     * @return {Fascino}
     */

  }, {
    key: "show",
    value: function show(callback) {
      var _this4 = this;

      return this.each(function (el) {
        var display = w(el).origin('display', undefined, 'block'),
            opacity = w(el).origin('opacity', undefined, '1'),
            setDisplay = 'block',
            setOpacity = 1;

        if (display && display !== 'none') {
          setDisplay = display;
        }

        if (opacity && opacity !== 0) {
          setOpacity = opacity;
        }

        w(el).style({
          display: setDisplay,
          opacity: setOpacity
        });

        if (isFunction$1(callback)) {
          callback.call(_this4, el);
        }
      });
    }
    /**
     * Muestra un elemento con desvanecimiento suave
     * @memberOf Fascino
     * @public
     * @param  {Function} fn   Funcion a ejecutar despues del efecto
     * @param  {Number}   time Tiempo del desvanecimiento
     * @return {Fascino} 
     */

  }, {
    key: "fadeIn",
    value: function fadeIn(fn) {
      var _this5 = this;

      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
      this.style({
        opacity: 0,
        display: ''
      });

      if (isNumber(fn)) {
        time = fn;

        fn = function fn(el) {};
      }

      var last = +new Date(),
          element = this.Elem[0],
          view = function view() {
        _this5.style('opacity', +element.style.opacity + (new Date() - last) / time);

        last = +new Date();

        if (+element.style.opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(view) || setTimeout(view, 16);
        }
      };

      view();

      if (isFunction$1(fn)) {
        fn.apply(this, [element]);
      }

      return this;
    }
    /**
     * Funcion que Oculta con un desvanecimiento suave
     * @memberOf Fascino
     * @public
     * @param  {Function} fn   Función a ejecutar luego de ocultar
     * @param  {Number}   time Tiempo del desvanecimiento
     * @return {Fascino}
     */

  }, {
    key: "fadeOut",
    value: function fadeOut(fn) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
      this.style({
        opacity: 1,
        display: ''
      });

      var last = +new Date(),
          element = this.Elem[0],
          view = function view() {
        element.style.opacity = Number(+element.style.opacity - (new Date() - last) / time).toFixed(4);
        last = +new Date();

        if (-element.style.opacity <= 0) {
          window.requestAnimationFrame && requestAnimationFrame(view) || setTimeout(view, 16);
        }
      };

      view();

      if (isFunction$1(fn)) {
        fn.apply(this, [element]);
      }

      return this;
    }
    /**
     * Obtiene o Establece los Atributos de un elemento
     * @memberOf Fascino
     * @public
     * @param  {...(String|Array|Object|Function)} args
     * @example <caption>Uso</caption>
     * miElement.attr('name', 'paswd') // Establece el Atributo Name a passwd
     * miElement.attr({
     *   id:'miElementID', // Establece el Id a miElementID y cambia el placeholder
     *   placeholder:'Escribe Aquí'
     * })
     * miElement.attr() // Re-establece los Atributos y retorna un NodeMap con ellos en caso de no poseer atributos retornara un Objecto Fascino
     * miElement.attr('name') // Retorna 'passwd' o false
     * miElement.attr(['name', 'id']) // Retorna un objecto {miElementID: {name: 'passwd', id:'miElementID'}}
     * // Ademas podemos pasar una función que se invocara dentro de un bucle que recorre los atributos
     * miElement.attr( function(attrName, attrValue, Attr) {
     *   console.log(
     *       this, // El Elemento iterado
     *       attrName, // El nombre del atributo
     *       attrValue, // El Valor del Attributo
     *       Attr // Lista de todos los atributos
     * )
     * })
     * @return {(String|Array|Object|Fascino)}
     */

  }, {
    key: "attr",
    value: function attr() {
      var _this6 = this;

      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      if (this.length === 0) {
        return this;
      }

      if (args.length === 0) {
        if (this.Elem[0].hasAttributes()) {
          var Attr = this.Elem[0].attributes;
          Array.from(Attr).forEach(function (a) {
            _this6.Elem[0].setAttribute(a.nodeName, a.nodeValue);
          });
          return Attr;
        } else {
          return this;
        }
      }

      if (args.length === 1) {
        if (isArrayish(args[0])) {
          var Attrs = {};
          var i = 0;
          this.each(function (el) {
            var id = el.getAttribute('id'),
                prefix = !not(id) ? id : el.tagName + i;
            Attrs[prefix] = {};
            args[0].forEach(function (a) {
              if (el.hasAttributes(a)) {
                Attrs[prefix][a] = el.getAttribute(a);
              } else {
                Attrs[prefix][a] = false;
              }
            });
            i++;
          });
          return Attrs;
        } else if (isObject(args[0])) {
          return this.each(function (el) {
            for (var key in args[0]) {
              if (hasProp(args[0], key)) {
                var value = normalizeData(args[0][key]);

                if (key in el) {
                  el[key] = value;
                } else {
                  el.setAttribute(key, value);
                }
              }
            }
          });
        } else if (isString(args[0])) {
          return this.Elem[0].hasAttributes(args[0]) ? this.Elem[0].getAttribute(args[0]) : false;
        } else if (isFunction$1(args[0])) {
          return this.each(function (el) {
            if (el.hasAttributes()) {
              var a = el.attributes;
              Array.from(a).forEach(function (attr) {
                args[0].call(el, [attr.nodeName, attr.nodeValue, attr]);
              });
            }
          });
        }
      }

      return this.each(function (el) {
        var key = args[0],
            value = normalizeData(args[1]);

        if (key in el) {
          el[key] = value;
        } else {
          el.setAttribute(key, value);
        }
      });
    }
    /**
     * Remueve los atributos dados
     * @memberOf Fascino
     * @public
     * @param  {...String} args Lista de Atributos
     * @example
     * miElement.removeAttr('style', 'name')
     * @return {Fascino}
     */

  }, {
    key: "removeAttr",
    value: function removeAttr() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      return this.each(function (el) {
        var attrs = [];

        if (args.length == 1 && !isArrayish(args[0])) {
          attrs.push(args[0]);
        } else {
          attrs = [].slice(args);
        }

        attrs.forEach(function (a) {
          el.removeAttribute(a);
        });
      });
    }
    /**
     * Verifica si el elemento tiene el atributo dado
     * @memberOf Fascino
     * @public
     * @param  {String}  attr
     * @return {Boolean}
     */

  }, {
    key: "hasAttr",
    value: function hasAttr(attr) {
      if (empty(attr)) {
        return false;
      }

      return this.Elem[0].hasAttribute(attr);
    }
    /**
     * Alterna los Atributos y su valor
     * @memberOf Fascino
     * @public
     * @param  {String} name  Nombre del Atributo
     * @param  {String} value Valor d el Atributo
     * @return {Fascino}
     */

  }, {
    key: "toggleAttr",
    value: function toggleAttr(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var _this = this;

      return this.each(function (el) {
        if (name in el && el[name] !== value) {
          el[name] = value;
        }

        if (!empty(name) && not(value)) {
          if (el.hasAttributes(name)) {
            el.removeAttribute(name);
          }
        } else {
          _this.Elem = [el];

          _this.attr(name, value);
        }
      });
    }
    /**
     * Elimina todos los atributos de un elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "cleanAttr",
    value: function cleanAttr() {
      return this.each(function (el) {
        if (el.hasAttributes()) {
          var attr = el.attributes;
          attr.forEach(function (a) {
            el.removeAttribute(a.nodeName);
          });
        }
      });
    }
    /**
     * Establece u Obtiene los datos del Elemento Dataset
     * @memberOf Fascino
     * @public
     * @example <caption>Uso</caption>
     * miElement.data('role', 'dialog')  // Establece el Rol a dialog
     * // Esteble al data-json al objecto dado
     * miElement.data({
     *   json:{
     *      a: 1,
     *      b: 2
     * }
     * })
     * miElement.data() // Retorna un Objecto con todos los datos del Atributo data
     * miElement.data('role') // Retorna Dialog
     * miElement.data(['role','json']) // Retornara un Objecto {miElementID: {role: 'dialog', json: {a:1,b:2}}}
     * @param  {...(String|Array|Object)} args
     * @return {(String|Array|Object|Fascino)}
     */

  }, {
    key: "data",
    value: function data() {
      var _this$_ds;

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      return this.length === 0 ? this : (_this$_ds = this._ds).data.apply(_this$_ds, [this.Elem].concat(args));
    }
    /**
     * Remueve los Atributos data
     * @memberOf Fascino
     * @public
     * @param  {...String} keys Lista de nombres de data sin el data
     * @example
     * // <input id="miElement" data-role='pick' data-color="#fff">
     * _$('#miElement').removeData('role', 'color');
     * // Obtendremos
     * // <input id="miElement">
     * @return {Fascino}
     */

  }, {
    key: "removeData",
    value: function removeData() {
      var _this7 = this;

      for (var _len10 = arguments.length, keys = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        keys[_key10] = arguments[_key10];
      }

      return this.each(function (el) {
        var _this7$_ds;

        (_this7$_ds = _this7._ds).remove.apply(_this7$_ds, [el].concat(keys));
      });
    }
    /**
     * Verifica si el Elemento tiene un atributo data dado
     * @memberOf Fascino
     * @public
     * @param  {String}  key Nombre sin el data
     * @return {Boolean}
     */

  }, {
    key: "hasData",
    value: function hasData(key) {
      if (empty(key)) {
        return false;
      }

      if (this._ds.has(this.Elem[0], key)) {
        return this._ds.get(this.Elem[0], key);
      }

      if (hasProp(this.Elem[0].dataset, key)) {
        return true;
      }

      return this.hasAttr("data-".concat(key));
    }
    /**
     * Alterna entre los atributos data
     * @memberOf Fascino
     * @public
     * @param  {String} name  Nombre del Atributo sin el data
     * @param  {(String|Object|Array)} value Valor del atributo data
     * @return {(Boolean|String|Object|Array|Fascino)}
     */

  }, {
    key: "toggleData",
    value: function toggleData(name, value) {
      if (arguments.length === 0) {
        return false;
      }

      if (this.hasData()) {
        return this._ds.access(this.ELem[0], name, value);
      }

      return this.toggleAttr("data-".concat(name), value);
    }
    /**
     * Establece el Evento para un elemento<br>
     * Si va usar eventos estándar es mejor que use los de la lista <code>_$().click(), $().blur() ...</code>
     * @memberOf Fascino
     * @public
     * @param  {(String|Array)} eventsList El nombre del Evento
     * @param  {String} sel Namespace o selector
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de AddEventListiner
     * @return {Fascino}
     */

  }, {
    key: "on",
    value: function on(eventsList, sel, handler, options) {
      var _this8 = this;

      return this.each(function (el) {
        _this8._ev.on(el, eventsList, sel, handler, options);
      });
    }
    /**
     * Desvincula el Evento para un elemento
     * @memberOf Fascino
     * @public
     * @param  {String} eventsList El nombre del Evento
     * @param  {String} sel Namespace o selector
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de AddEventListiner
     * @param  {Number} ix Index del evento
     * @return {Fascino}
     */

  }, {
    key: "off",
    value: function off(eventsList, sel, options, ix) {
      var _this9 = this;

      return this.each(function (el) {
        _this9._ev.off(el, eventsList, sel, options, ix);
      });
    }
    /**
     * Ejecuta el evento solo para el primer evento dado
     * @memberOf Fascino
     * @param  {String} events  El evento
     * @param  {String} sel Namespace o selector
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de AddEventListiner
     * @return {Fascino}
     */

  }, {
    key: "one",
    value: function one(events, sel, handler, options) {
      var _this10 = this;

      return this.each(function (el) {
        _this10._ev.one(el, events, sel, handler, options);
      });
    }
    /**
     * Dispara o Crea un Evento Personalizado
     * @memberOf Fascino
     * @public
     * @param  {String} name Nombre del Evento
     * @param  {Object} data Información del Evento
     * @return {(void|Fascino)}
     */

  }, {
    key: "fire",
    value: function fire(name, data) {
      var _this11 = this;

      var _name = normName(name),
          newEv;

      if (['submit', 'reset'].indexOf(_name) > -1) {
        if (this.Elem[0].nodeName === 'FORM') {
          this.Elem[0][_name].call(this.Elem[0]);
        } else {
          var form = this.parents('form');

          form.Elem[0][_name].call(form.Elem[0]);
        }

        return this;
      }

      if (ListEvents.indexOf(_name) > -1) {
        this.Elem[0][_name].call(this.Elem[0]);
      }

      newEv = this._ev.createEv(name, data);
      return this.each(function (el) {
        var customEvent = w(el).data('customEvent'),
            et = {};
        et[_name] = newEv;

        if (not(customEvent)) {
          w(el).data('customEvent', et);
        } else {
          w(el).data('customEvent', extend({}, customEvent, et));
        }

        _this11._ev.fire(el, newEv);
      });
    }
    /**
     * Dispara un evento
     * @memberOf Fascino
     * @public
     * @param  {String} name Nombre del Evento
     * @param  {Object} data Información del evento
     * @return {Fascino}
     */

  }, {
    key: "trigger",
    value: function trigger(name, data) {
      var _this12 = this;

      var _name = normName(name);

      return this.each(function (el) {
        if (ListEvents.indexOf(_name) > -1) {
          el[_name].call(el);
        } else if (w(el).hasData('customEvent')) {
          var customEvent = w(el).data('customEvent');

          if (!not(customEvent) && hasProp(customEvent, _name)) {
            _this12._ev.fire(el, customEvent[_name]);
          } else {
            w(el).fire(name, data);
          }
        }
      });
    }
    /**
     * Crea el evento hover
     * @memberOf Fascino
     * @public
     * @param  {Function} fnOver Función de entrada
     * @param  {Function} fnOut  Función de Salida
     * @return {Fascino}
     */

  }, {
    key: "hover",
    value: function hover(fnOver, fnOut) {
      var _this13 = this;

      return this.each(function (el) {
        _this13.on('mouseenter', fnOver).on('mouseleave', fnOut);
      });
    }
    /**
     * Obtiene las lista de eventos asignados aun elemento, si no se pasa ningun argumento se obtendran todos los eventos
     * @param  {String} name  Nombre del Evento
     * @param  {Number} index Posición del evento a buscar
     * @return {Object}
     */

  }, {
    key: "getEvent",
    value: function getEvent(name, index) {
      return this._ev.getEvents(this.Elem[0], name, index);
    }
  }], [{
    key: "addFn",
    value: function addFn(name, fn) {
      if (!hasProp(this, name)) {
        this.prototype[name] = fn;
      }

      return this;
    }
  }]);

  return Fascino;
}(Selector);

[
/**
 * Obtiene o Establece el relleno del Elemento dado
 * @memberOf Fascino
 * @public
 * @function padding
 * @param  {(String|Number|null)} val   Valor del Elemento a establecer
 * @param  {String} pseudo      Important
 * @return {(Object|Fascino)}
 */
'padding',
/**
 * Obtiene o Establece el relleno del Elemento dado
 * @memberOf Fascino
 * @public
 * @function margin
 * @param  {(String|Number|null)} val   Valor del Elemento a establecer
 * @param  {String} pseudo      Important
 * @return {(Object|Fascino)}
 */
'margin',
/**
 * Obtiene o Establece el relleno del Elemento dado
 * @memberOf Fascino
 * @public
 * @function border
 * @param  {(String|Number|null)} val   Valor del Elemento a establecer
 * @param  {String} pseudo      Important
 * @return {(Object|Fascino)}
 */
'border'].forEach(function (name) {
  Fascino.addFn(name, function (val, pseudo) {
    if (this.length === 0) {
      return;
    }

    if (isString(val)) {
      if (val.indexOf(':') === 0) {
        pseudo = val;
        val = undefined;
      }
    }

    if (empty(val)) {
      var s = getStyleComputed(this.Elem[0], null, !empty(pseudo) ? pseudo : ''),
          res = {};

      if (name !== 'border') {
        res = {
          top: parseInt(s["".concat(name, "-top")]),
          right: parseInt(s["".concat(name, "-right")]),
          bottom: parseInt(s["".concat(name, "-bottom")]),
          left: parseInt(s["".concat(name, "-left")])
        };
      } else {
        res = {
          top: parseInt(s['border-top-width']),
          right: parseInt(s['border-right-width']),
          bottom: parseInt(s['border-bottom-width']),
          left: parseInt(s['border-left-width'])
        };
      }

      return res;
    }

    return this.each(function (el) {
      if (isArrayish(val)) {
        w(el).style(name, val.join(' '));
      } else if (isObject(val)) {
        var _res = {},
            ext = name === 'border' ? '-width' : '';

        for (var i in val) {
          if (hasProp(val, i)) {
            _res["".concat(name, "-").concat(i).concat(ext)] = val[i];
          }
        }

        w(el).style(_res);
      } else {
        w(el).style(name, val);
      }
    });
  });
});
/**
 * Eventos Nativos de Javascript <br>
 * 'blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove',
 * 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown',
 * 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
 * @example <caption>Uso</caption>
 * // Formato
 * // _$(miselector).[nameEvento](selector, function, options)
 * _$('body').clicK(function(e){
 * 	console.log("Presionastes sobre el body")
 * })
 * // Al hacer doble click sobre una section del elemento main, se ejecuta la funcion del click del body
 * _$('main').dblclick("section", function(e){
 * 		_$('body').click()
 * })
 * @memberOf Fascino
 * @public
 * @param  {String} s selector
 * @param  {Function} f Función a ejecutar
 * @param  {Object} o Opciones de AddEventListiner
 * @return {Fascino}
 */

ListEvents.forEach(function (n) {
  Fascino.addFn(n, function (s, f, o) {
    return arguments.length > 0 ? this.on(n, s, f, o) : this.fire(n, {
      detail: 'Fire ' + n
    });
  });
});
/**
 * Mini Motor de plantillas javascript
 * @memberOf module:Utils
 * @function template
 * @example <caption>Uso</caption>
 * var html = `
 *    <div class='alert alert<%this.type%>' role="alert">
 *       <%this.content%>
 *    </div>
 * `;
 * var options = {
 *    type: 'info',
 *    content:'This is Alerts'
 * }
 *
 * document.write(_$.template(html,options))
 * @param  {String} html    Código HTML de la plantilla
 * @param  {Object} options Opciones de plantilla para reemplazar
 * @param  {Object} conf    Configuraciones del motor
 * @return {String}
 */

function template$1(html, options, conf) {
  var ReEx,
      re = '<%(.+?)%>',
      reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
      code = 'with(obj) { var r=[];\n',
      cursor = 0,
      result,
      match,
      add = function add(line, js) {
    /* jshint -W030 */
    js ? code += line.match(reExp) ? "".concat(line, "\n") : "r.push(".concat(line, ")\n") : code += line !== '' ? "r.push('".concat(line, "')\n") : '';
    return add;
  };

  if (!empty(conf)) {
    if (hasProp(conf, 'beginToken')) {
      re = re.replace('<%', conf.beginToken);
    }

    if (hasProp(conf, 'endToken')) {
      re = re.replace('%>', conf.endToken);
    }
  }

  ReEx = new RegExp(re, 'g');
  match = ReEx.exec(html);

  while (match) {
    add(html.slice(cursor, match.index).replace(/[\n]/g, ' '))(match[1], true);
    cursor = match.index + match[0].length;
    match = ReEx.exec(html);
  }

  add(html.substr(cursor, html.length - cursor).replace(/[\n]/g, ' '));
  code = (code + "return r.join('') }").replace(/[\r\t]/g, ' ');
  /* jshint -W054 */

  try {
    result = new Function('obj', code).apply(options, [options]);
  } catch (err) {
    console.error(err);
    console.error("'" + err.message + "'", ' in \n\nCode:\n', code, '\n');
    /* eslint no-console: 0, quotes: 0 */
  }

  return result;
}
/**
 * Funciones Útiles para el manejo de colores con javascript en formatos Hex, RGB(A), HSL(A), HWB
 * @namespace Colors
 * @memberOf module:Utils 
 * @tutorial Colors
 */
// CONVERSORES Y VALIDADORES
//============================================================================================
//-------------------- HEXADECIMA -------------------------------------------------------------

/**
 * Valida si es un color Hexadecimal valido
 * @memberOf module:Utils.Colors
 * @function isHex
 * @param  {String}  color Hexadecimal a validar
 * @return {Boolean}
 */


function isHex(color) {
  return /(^#[0-9a-f]{3}$)|(^#[0-9a-f]{4}$)|(^#[0-9a-f]{6}$)|(^#[0-9a-f]{8}$)/i.test(color);
}
/**
 * Obtiene el canal Alpha de un hexadecimal y lo convierte en decimal
 * @memberOf module:Utils.Colors
 * @function AlphaHex
 * @param {Hexadecimal} hex Color Hexadecimal en formato #RRGGBBAA
 * @return {(Number|Boolean)} El numero del porcentaje o false si no es un hexadecimal valido
 */


function AlphaHex(hex) {
  if (!isHex(hex)) {
    return false;
  }

  var r = /^#([0-9a-f]{6})([0-9a-f]{2})$/i.exec(hex);
  return r.length > 2 ? Hex2Per(r[2]) : 100;
}
/**
 * Convierte Colores Hexadecimales a RGB
 * @see [Github]{http://gist.github.com/983661}
 * @memberOf module:Utils.Colors
 * @function Hex2Rgb
 * @param {String} hex Color Hexadecimal
 * @return {(Object|Boolean)} Objecto con el color RGBA o false si no es valido
 */


function Hex2Rgb(hex) {
  if (!isHex(hex)) {
    return false;
  }

  var withAlpha = /(^#[0-9a-f]{4}$)|(^#[0-9a-f]{8}$)/i.test(hex),
      alpha = withAlpha ? AlphaHex(hex) : 100;

  if (withAlpha) {
    if (hex.length == 4) {
      hex = hex.substring(1, 4);
    } else {
      hex = hex.substring(1, 7);
    }
  } else {
    hex = hex.slice(1);
  }

  hex = +("0x" + hex.replace(hex.length < 5 && /./g, '$&$&'));
  return {
    r: hex >> 16 & 255,
    g: hex >> 8 & 255,
    b: hex & 255,
    a: alpha
  };
}
/**
 * Convierte Hexadecimal en HSL
 * @memberOf module:Utils.Colors
 * @function Hex2Hsl
 * @param {String} hex Color
 * @return {(Object|Boolean)} Objecto hsl o false
 */


function Hex2Hsl(hex) {
  if (!isHex(hex)) {
    return false;
  }

  var c = Hex2Rgb(hex);
  return Rgb2Hsl(c.r, c.g, c.b, c.a);
}
/**
 * Convierte un Hexadecimal a HWB
 * @memberOf module:Utils.Colors
 * @function Hex2Hsl
 * @param {String} hex
 * @return {(Object|Boolean)} Objecto hsl o false
 */


function Hex2Hwb(hex) {
  if (!isHex(hex)) {
    return false;
  }

  var c = Hex2Rgb(hex);
  return Rgb2Hwb(c.r, c.g, c.b);
} //-------------------- RGBA --------------------------------------------------------------------

/**
 * Valida si es un Objecto o String valido para rgb
 * @memberOf module:Utils.Colors
 * @function isRGB
 * @param  {(Object|String)}  rgb RGBA
 * @return {Boolean}
 */


function isRGB(rgb) {
  return isObject(rgb) && hasProp(rgb, 'r') || /(^rgb\([\d,?\s?]+\)$)|(^rgba\(([\d,?\s?]+)\s?\/?\s?(([\d.\d]|[\d\%])+)\)$)/gi.test(rgb);
}
/**
 * Convierte un valor RGBA a HEXADECIMAL
 * @memberOf module:Utils.Colors
 * @function Rgb2Hex
 * @param {Number} r     Rojo
 * @param {Number} g     Verde
 * @param {Number} b     Azul
 * @param {Number} a 	 Alfa
 * @return {String}		Expresión Hexadecimal
 */


function Rgb2Hex(r, g, b) {
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

  var ts = function ts(c) {
    var rt = c.toString(16);
    return rt.length == 1 ? rt + rt : rt;
  },
      hex = "#" + ts(r) + ts(g) + ts(b);

  if (a < 100) {
    hex += Per2Hex(a);
  }

  return hex.toUpperCase();
}
/**
 * Convierte un rgba a Hsla, el alfa es opcional
 * @memberOf module:Utils.Colors
 * @function Rgb2Hsl
 * @param {Number} r     Rojo
 * @param {Number} g     Verde
 * @param {Number} b     Azul
 * @param {Number} alpha Opacidad
 * @return {Object} Objecto con los datos HSLA
 */


function Rgb2Hsl(r, g, b) {
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var hue = NaN,
      sat = 0,
      light = (max + min) / 2;
  var d = max - min;

  if (d !== 0) {
    sat = light === 0 || light === 1 ? 0 : (max - light) / Math.min(light, 1 - light);

    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        hue = (b - r) / d + 2;
        break;

      case b:
        hue = (r - g) / d + 4;
    }

    hue = hue * 60;
  }

  return {
    h: Math.round(hue),
    s: Math.round(sat * 100),
    l: Math.round(light * 100),
    a: alpha
  };
}
/**
 * Convierte un RGB en HWB
 * @memberOf module:Utils.Colors
 * @function Rgb2Hwb
 * @param {Number} r Rojo
 * @param {Number} g Verde
 * @param {Number} b Azul
 * @return {Object} Objecto HWB
 */


function Rgb2Hwb(r, g, b) {
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  return function (b) {
    var hsl = Rgb2Hsl(r, g, b, a),
        w = 1 / 255 * Math.min(r, Math.min(g, b)),
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return {
      h: hsl.h,
      w: Math.round(100 * w),
      b: Math.round(100 * b),
      a: hsl.a
    };
  }(b);
}
/**
 * Calcula el HSP de un RGB 
 * @memberOf module:Utils.Colors
 * @function Rgb2Hsp
 * @param {Number} r Rojo(0-255)
 * @param {Number} g Verde(0-255)
 * @param {Number} b Azul(0-255)
 * @return {Object} Un Objecto confomado por una clave hsp y una booleana isDark que indica si es o no oscuro el color
 */


function Rgb2Hsp(r, g, b) {
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  return {
    hsp: hsp,
    isDark: !(hsp > 127.5)
  };
} //-------------------- HSLA --------------------------------------------------------------------

/**
 * Valida si es un Objecto o String HSL
 * @memberOf module:Utils.Colors
 * @function isHSL
 * @param  {(Object|String)}  hsl
 * @return {Boolean}
 */


function isHSL(hsl) {
  return isObject(hsl) && hasProp(hsl, 's') || /(^hsl\([\d%?,?\s?]+\)$)|(^hsla\(([\d%?,?\s?]+)\s?\/?\s?(([\d.\d]|[\d\%])+)\)$)/gi.test(hsl);
}
/**
 * Convierte HSLA en RGBA
 * @memberOf module:Utils.Colors
 * @function Hsl2Rgb
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {Object} Object rgba
 */


function Hsl2Rgb() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var sat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  hue = hue % 360;

  if (hue < 0) {
    hue += 360;
  }

  sat /= 100;
  light /= 100;

  var f = function f(n) {
    var k = (n + hue / 30) % 12,
        a = sat * Math.min(light, 1 - light);
    return light - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
  };

  return {
    r: Math.round(255 * f(0)),
    g: Math.round(255 * f(8)),
    b: Math.round(255 * f(4)),
    a: alpha
  };
}
/**
 * Convierte Hsl a Hexadecimal
 * @memberOf module:Utils.Colors
 * @function Hsl2Hex
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {String}
 */


function Hsl2Hex() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var sat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var r = Hsl2Rgb(hue, sat, light, alpha);
  return Rgb2Hex(r.r, r.g, r.b, r.a);
}
/**
 * Convierte HSL a HWB
 * @memberOf module:Utils.Colors
 * @function Hsl2Hwb
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {Object} Objecto hwba
 */


function Hsl2Hwb() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var sat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var r = Hsl2Rgb(hue, sat, light, alpha),
      w = 1 / 255 * Math.min(r.r, Math.min(r.g, r.b)),
      b = 1 - 1 / 255 * Math.max(r.r, Math.max(r.g, r.b));
  w = Math.round(w);
  b = Math.round(b);
  return {
    h: Math.round(hue),
    w: w,
    b: b,
    a: alpha
  };
} //-------------------- HWB ---------------------------------------------------------------------

/**
 * Valida si es un Objecto o string HWB valido 
 * @memberOf module:Utils.Colors
 * @function isHwb
 * @param  {(Object|String)}  hwb
 * @return {Boolean}
 */


function isHwb(hwb) {
  return isObject(hwb) && hasProp(hwb, 'w') || /^hwb\(([\/?\d%?\s?]+)\)$/gi.test(hwb);
}
/**
 * Convierte un HWB en RGBA
 * @memberOf module:Utils.Colors
 * @function Hwb2Rgb
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {Object}
 */


function Hwb2Rgb() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var white = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var black = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  hue /= 360;
  white /= 100;
  black /= 100;
  var radio = white + black,
      r,
      g,
      b,
      i,
      v,
      f,
      n;

  if (radio > 1) {
    white = black = radio;
  }

  i = Math.floor(6 * hue);
  v = 1 - black, f = 6 * hue - i;

  if ((i & 0x01) !== 0) {
    f = 1 - f;
  }

  n = white + f * (v - white);

  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = white;
      break;

    case 1:
      r = n;
      g = v;
      b = white;
      break;

    case 2:
      r = white;
      g = v;
      b = n;
      break;

    case 3:
      r = white;
      g = n;
      b = v;
      break;

    case 4:
      r = n;
      g = white;
      b = v;
      break;

    case 5:
      r = v;
      g = white;
      b = n;
      break;
  }

  return {
    r: Math.round(255 * r),
    g: Math.round(255 * g),
    b: Math.round(255 * b),
    a: alpha
  };
}
/**
 * Convierte un HWB a HEX
 * @memberOf module:Utils.Colors
 * @function Hwb2Hex
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {String}
 */


function Hwb2Hex() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var white = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var black = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var r = Hwb2Rgb(hue, white, black, alpha);
  return Rgb2Hex(r.r, r.g, r.b, r.a);
}
/**
 * Convierte un HWB a HSL
 * @memberOf module:Utils.Colors
 * @function Hwb2Hsl
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {Object}
 */


function Hwb2Hsl() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var white = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var black = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var r = Hwb2Rgb(hue, white, black, alpha);
  return Rgb2Hsl(r.r, r.g, r.b, r.a);
} //============================================================================================
// UTILIDADES PARRA LAS FUNCIONES DE COLORES
//============================================================================================

/**
 * Convierte un color a su representacion en String
 * @memberOf module:Utils.Colors
 * @function Color2Str
 * @param {(String|Object)} color El color
 * @return {String}
 */


function Color2Str(color) {
  if (isObject(color)) {
    if (hasProp(color, 'r')) {
      return hasProp(color, 'a') && color.a < 100 ? "rgba(".concat(color.r, " ").concat(color.g, " ").concat(color.b, " / ").concat(color.a, "%)") : "rgb(".concat(color.r, " ").concat(color.g, " ").concat(color.b, ")");
    } else if (hasProp(color, 'w')) {
      return hasProp(color, 'a') && color.a < 100 ? "hwb(".concat(color.h, " ").concat(color.w, "% ").concat(color.b, "% / ").concat(color.a, ")") : "hwb(".concat(color.h, " ").concat(color.w, "% ").concat(color.b, "%)");
    } else if (hasProp(color, 'h')) {
      return hasProp(color, 'a') && color.a < 100 ? "hsla(".concat(color.h, " ").concat(color.s, "% ").concat(color.l, "% / ").concat(color.a, "%)") : "hsl(".concat(color.h, " ").concat(color.s, "% ").concat(color.l, "%)");
    }
  } else {
    return "#".concat(color.toUpperCase());
  }
}
/**
 * Convierte un porcentaje a una expresión Hexadecimal
 * @memberOf module:Utils.Colors
 * @function Per2Hex
 * @see [Github]{https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4?permalink_comment_id=3036936#gistcomment-3036936}
 * @param {Number} percent El valor del porcentaje
 * @return {String}
 */


function Per2Hex(percent) {
  percent = Math.max(0, Math.min(100, percent));
  var PerHex = Math.round(percent / 100 * 255).toString(16);
  return PerHex.padStart(2, "0").toUpperCase();
}
/**
 * Convierte un Hexadecimal a Porcentaje
 * @memberOf module:Utils.Colors
 * @function Hex2Per
 * @param {String} Hex Hexadecimal
 * @return {Number}
 */


function Hex2Per(Hex) {
  return Math.round((parseInt(Hex, 16) - 0) / 255 * 100);
}
/**
 * Ilumina u oscurece un color <br/>
 * Similar a las funciones de Sass
 * @memberOf module:Utils.Colors
 * @function lightOrDark
 * @see [Author y Blog original]{https://css-tricks.com/snippets/javascript/lighten-darken-color/}
 * @param  {String} color Color Hexadecimal
 * @param  {Number} amt   Importe si e positivo seria Light negativo para dark
 * @return {String}       Color Hexadecimal
 */


function lightOrDark(color, amt) {
  if (!isHex(color)) {
    return color;
  }

  var hex = color.slice(1),
      num = parseInt(hex, 16),
      nor = function nor(c) {
    if (c > 255) {
      c = 255;
    } else if (c < 0) {
      c = 0;
    }

    return c;
  },
      r = nor((num >> 16) + amt),
      g = nor((num & 0x0000FF) + amt),
      b = nor((num >> 8 & 0x00FF) + amt);

  return "#" + String("000000" + (g | b << 8 | r << 16).toString(16)).slice(-6);
}
/**
 * Convierte un representación String de un color a un Objecto, si toRgb es verdadero el color suministrado
 * sera trasformado en un color RGB  y retorna su objecto dado.
 * @memberOf module:Utils.Colors
 * @function ColorStr2Obj
 * @param {String}  color representación de colores
 * @param {Boolean} toRgb Retorna objecto rgb si se establece a true
 */


function ColorStr2Obj(color) {
  var toRgb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isHex(color)) {
    return Hex2Rgb(color);
  } else {
    var c = /^([rgb|rgba|hsl|hsla|hwb]+)\(([\d]+),?\s?([\d%?]+),?\s?([\d%?]+),?\s?\/?\s?([\d%?]+)?\)$/gi.exec(color),
        o = {},
        rgb;

    if (not(c)) {
      return color;
    }

    switch (c[1]) {
      case 'rgb':
      case 'rgba':
        o.r = parseInt(c[2]);
        o.g = parseInt(c[3]);
        o.b = parseInt(c[4]);
        o.a = parseInt(c[5] || 100);
        rgb = o;
        break;

      case 'hsl':
      case 'hsla':
        o.h = parseInt(c[2]);
        o.s = parseInt(c[3]);
        o.l = parseInt(c[4]);
        o.a = parseInt(c[5] || 100);
        rgb = toRgb ? Hsl2Rgb(o.h, o.s, o.l, o.a) : null;
        break;

      case 'hwb':
        o.h = parseInt(c[2]);
        o.w = parseInt(c[3]);
        o.b = parseInt(c[4]);
        o.a = parseInt(c[5] || 100);
        rgb = toRgb ? Hwb2Rgb(o.h, o.w, o.b, o.a) : null;
        break;
    }

    return toRgb ? rgb : o;
  }
}

String.prototype.toObject = function () {
  var toRgb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return ColorStr2Obj(this, toRgb);
};

var Colors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isHex: isHex,
  AlphaHex: AlphaHex,
  Hex2Rgb: Hex2Rgb,
  Hex2Hsl: Hex2Hsl,
  Hex2Hwb: Hex2Hwb,
  isRGB: isRGB,
  Rgb2Hex: Rgb2Hex,
  Rgb2Hsl: Rgb2Hsl,
  Rgb2Hwb: Rgb2Hwb,
  Rgb2Hsp: Rgb2Hsp,
  isHSL: isHSL,
  Hsl2Rgb: Hsl2Rgb,
  Hsl2Hex: Hsl2Hex,
  Hsl2Hwb: Hsl2Hwb,
  isHwb: isHwb,
  Hwb2Rgb: Hwb2Rgb,
  Hwb2Hex: Hwb2Hex,
  Hwb2Hsl: Hwb2Hsl,
  Color2Str: Color2Str,
  Per2Hex: Per2Hex,
  Hex2Per: Hex2Per,
  lightOrDark: lightOrDark,
  ColorStr2Obj: ColorStr2Obj
});
/**
 * Conjunto de Utilidades
 * <p>Grupo de Funciones Utiles para nuestros proyectos</p>
 * @module Utils
 */

var Utils = {
  Colors: Colors,
  Utils: Utils$1,
  template: template$1
};
/**
 * Fascino desde el Navegador <br>
 * Esta variable sera la que interactué desde el navegador
 * @global
 * @namespace _$
 * @param  {(String|Function|Element|Object)} selector Selector CSS o HTMLElement o Array de HTMLElememnt
 * @param  {(HTMLElement|document)} context  Entorno de selección
 * @return {Fascino} Class [Fascino]{@link Fascino}
 */

function _$$1(selector, context) {
  return new Fascino(selector, context);
}

if (typeof window._$ === 'undefined') {
  window._$ = _$$1;
}

var U = Utils.Utils,
    template = Utils.template,
    C = Utils.Colors;
_$$1.template = template;
U.extend(_$$1, U);
U.extend(_$$1, C);
U.extend(_$$1, {
  /**
   * Añade funciones a Fascino JS
   * @memberOf _$
   * @public
   * @param {String} name      Nombre de la función
   * @param {Function} callbacks Función a añadir
   * @example
   * _$.addFn('decir', function(quedigo){
   * 	return this.each((el) => {
   * 		_$(el).html(quedigo)
   * 	})
   * })
   * // Ahora la usamos
   * _$('body').decir('Hola')
   *
   * // si lo ejecutamos el body contendrá la palabra "Hola"
   * @return {Fascino}
   * 
   */
  addFn: function addFn(name, callbacks) {
    return Fascino.addFn.apply(Fascino, [name, callbacks]);
  },

  /**
   * Globaliza la variable $,
   * Ojo si usa jQuery no use esta función
   * @memberOf _$
   * @public
   */
  global: function global() {
    window.$ = _$$1;
  },

  /**
   * Libera la variable $
   * @memberOf _$
   * @public
   */
  setFree$: function setFree$() {
    if (window.$ === window._$) {
      window.$ = undefined;
    }
  },

  /**
   * Intenta evitar conflicto con jQuery y Otros framework que usen el $
   * @memberOf _$
   * @public
   * @return {Fascino}
   */
  noConflict: function noConflict() {
    if (window.$ === $) {
      window.$ = _$$1;
    }

    return _$$1;
  },

  /**
   * Ejecuta una función cuando el DOM a cargado
   * @memberOf _$
   * @public
   * @param {Function} fn      función a ejecutar
   * @param {Object}   options Opciones para addEventListiner
   */
  DOMLoad: function DOMLoad(fn, options) {
    if (document.readyState != 'loading') {
      if (isFunction(fn)) {
        fn();
      }
    } else {
      document.addEventListener('DOMContentLoaded', fn, options || false);
    }
  },

  /**
   * Ejecuta una función cuando window a cargado
   * @memberOf _$
   * @public
   * @param {Function} fn Función a ejecutar
   * @return {Fascino}
   */
  WLoad: function WLoad(fn) {
    return _$$1(window).on('load', fn);
  },

  /**
   * Ejecuta una función cuando la ventana, el documento y sus recursos están a punto de ser descargados
   * @memberOf _$
   * @public
   * @param  {Function} fn Función a ejecutar
   * @return {Fascino}
   */
  beforeunload: function beforeunload(fn) {
    if (typeof fn === 'string') {
      return _$$1(window).on('beforeunload', function (e) {
        e.returnValue = fn;
        return fn;
      });
    } else {
      return _$$1(window).on('beforeunload', fn);
    }
  },

  /**
   * Carga perezosa de imágenes
   * @memberOf _$
   * @public
   * @param {Object} o Opciones de carga
   * @exclude {String} exclude Selector css de imágenes a excluir
   * @return {Fascino} Lista de imágenes cargadas
   */
  Lazy: function Lazy(o) {
    var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var img = _$$1('img'),
        picture = _$$1('picture'),
        bgImg = _$$1('[data-lazy-bg]'),
        LazyOptions = {
      root: document.querySelector('body'),
      rootMargin: '0px',
      threshold: 1.0
    };

    var opt = _$$1.extend({}, LazyOptions, o);

    var IO = new IntersectionObserver(function (entries, imgObserver) {
      entries.forEach(function (entry) {
        // If the image is not visible.
        _$$1.hooks.run('before.lazy', entry, imgObserver);

        if (entry.isIntersecting) {
          // If it's visible.
          var _img = entry.target;

          if (_$$1(_img).hasData('lazy-bg')) {
            _$$1(_img).style('background-image', "url('".concat(_$$1(_img).data('lazy-bg'), "')"));
          }

          if (_img.nodeName === 'IMG') {
            _img.src = _$$1(_img).data('src');

            if (_$$1(_img).hasData('srcset')) {
              _img.srcset = _$$1(_img).data('srcset');
            }
          }

          if (_img.nodeName === 'PICTURE') {
            var imgp = _$$1(_img).find('img');

            imgp.src = _$$1(imgp).data('src');

            if (_$$1(imgp).hasData('srcset')) {
              imgp.srcset = _$$1(imgp).data('srcset');
            }
          }

          _$$1(_img).fadeIn();

          imgObserver.unobserve(entry.target);
        }

        _$$1.hooks.run('after.lazy', entry, imgObserver);
      });
    }, opt); // Observing the images.

    if (img.length > 0) {
      img.each(function (img) {
        if (img.parentNode.nodeName !== 'PICTURE') {
          _$$1(img).fadeOut();

          if (img && !_$$1.empty(exclude)) {
            if (!img.matches(exclude)) {
              IO.observe(img);
            }
          } else {
            IO.observe(img);
          }
        }
      });
    }

    if (picture.length > 0) {
      picture.each(function (img) {
        _$$1(img).fadeOut();

        if (img && !_$$1.empty(exclude)) {
          IO.observe(img);
        } else {
          IO.observe(img);
        }
      });
    }

    if (bgImg.length > 0) {
      bgImg.each(function (img) {
        _$$1(img).fadeOut();

        if (img && !_$$1.empty(exclude)) {
          IO.observe(img);
        } else {
          IO.observe(img);
        }
      });
    }

    return img;
  },

  /**
   * Sistema de Ganchos de [Fascino JS]{@link Fascino}
   * @memberOf _$
   * @public
   * @namespace Hooks
   * @type {Object}
   * @example 
   * // Añadimos una función a anclar
   * _$.hooks.add('name.myhooks', function(Elemet) {
   *   // ...
   * })
   * // Ejecutamos la Función anclada y pasamos el argumento Element
   * _$.hooks.run('name.myhooks', Elemet)
   * // Puede pasar la cantidad de argumentos que desee asi
   * _$.hooks.run('name.myhooks', Elemet, Args1, Args2)
   * // Y en la función add los recibimos de igual manera
   * _$.hooks.add('name.myhooks', function(Elemet, Args1, Args2) {
   *   // ...
   * })
   * // Para listar todas las funciones ancladas use
   * _$.hooks.hook // No se recomienda su uso de esta manera
   * // Es recomendable si se require saber si existe o no una función anclada use el método _$.hasProp
   * _$.hasProp(_$.hooks.hook, 'name.myhooks') // Retornara true si existe
   */
  hooks: {
    /**
     * Lista de Ganchos anclados
     * @memberOf _$.Hooks
     * @inner
     * @type {Object}
     */
    hook: {},

    /**
     * Añade funciones a los ganchos
     * @memberOf _$.Hooks
     * @public
     * @param {String} name    Nombre
     * @param {Function} actions función a ejecutar
     */
    add: function add(name, actions) {
      var hook = this.hook;
      hook[name] = hook[name] || [];
      hook[name].push(actions);
    },

    /**
     * Ejecuta un Gancho,
     * La mayoria de los componente de [Fascino]{@link module:core.Fascino} poseen un gancho para anclarnos a sus funciones
     * @memberOf _$.Hooks
     * @public
     * @param  {String}    name Nombre del Gancho existente
     * @param  {...*} args Lista de argumentos que pasar a la función
     */
    run: function run(name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (args.length === 0) return;
      var callbacks = this.hook[name];
      if (_$$1.empty(callbacks)) return;

      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].apply(this, args);
      }
    }
  }
});
export { Fascino, _$$1 as _$ };
//# sourceMappingURL=fascino-es.js.map
