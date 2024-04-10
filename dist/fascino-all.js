/*!
 * Fascino  fascino-all.js
 * 	@version v1.1.5
 * 	@copyright 2021-2024 Robert Pérez.
 * 	@author Robert Pérez delfinmundo@gmail.com
 *
 * 	@license Licensed under MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fascino-all", [], factory);
	else if(typeof exports === 'object')
		exports["fascino-all"] = factory();
	else
		root["fascino-all"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Data)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(901);
/* harmony import */ var _Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(573);



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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(this, Data);
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(Data, [{
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
      return this.acceptData(el) && !(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(el.dataset);
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
            (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.defineProperty)(el, this.UID, {
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(key)) {
        store[(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.camelCase)(key)] = data;
      } else {
        for (var prop in key) {
          if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProp)(key, prop)) {
            store[(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.camelCase)(prop)] = key[prop];
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(key)) {
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(key) || key && (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(key) && (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(data)) {
        return this.get(el, key);
      }
      this.set(el, key, data);
      return (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(data) ? key : data;
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(key)) {
        var c = this.storage(el);
        return !(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(c);
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(store)) {
        var ds = this.data(el);
        if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(ds)) {
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
      if (!(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(key)) {
        if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isArrayish)(key)) {
          key = key.map(_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.camelCase);
        } else {
          key = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.camelCase)(key);
          key = key in store ? [key] : key.match(/[^\x20\t\r\n\f]+/g) || [];
        }
        i = key.length;
        while (i--) {
          delete store[key[i]];
        }
      }
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(key) && (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(store)) {
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.empty)(data) && elem.nodeType === 1) {
        name = "data-" + key.replace(/[A-Z]/g, "-$&").toLowerCase();
        data = elem.getAttribute(name);
        if (typeof data === "string") {
          data = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeData)(data);
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(els.length)) {
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
                name = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.camelCase)(name.slice(5));
                this.attrToStorage(el, name, ds[name]);
              }
            }
          }
        }
        return ds;
      }
      if (args.length === 1) {
        if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isArrayish)(args[0])) {
          var res = {},
            _i = 0;
          (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.each)(els, function (elem) {
            var id = elem.getAttribute("id"),
              prefix = !(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(id) ? id : el.tagName + _i;
            args[0].forEach(function (d) {
              res[prefix] = res[prefix] || {};
              var re = _this.get(elem, d);
              if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(re)) {
                if (elem.nodeType === 1) {
                  re = elem.hasAttributes("data-".concat(d)) ? elem.getAttribute("data-".concat(d)) : re;
                  re = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeData)(re);
                }
              }
              res[prefix][d] = re;
            });
            _i++;
          });
          return res;
        } else if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(args[0])) {
          return (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.each)(els, function (elem) {
            for (var key in args[0]) {
              if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProp)(args[0], key)) {
                var value = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeData)(args[0][key]);
                _this.set(elem, key, value);
              }
            }
          });
        } else if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(args[0])) {
          var _res = this.get(el, args[0]);
          if (!_res || (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.not)(_res)) {
            if (el.nodeType === 1) {
              _res = el.hasAttributes("data-".concat(args[0])) ? el.getAttribute("data-".concat(args[0])) : _res;
              _res = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.normalizeData)(_res);
            }
          }
          return _res;
        }
      }
      return (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__.each)(els, function (elem) {
        _this.set(elem, args[0], args[1]);
      });
    }
  }]);
}();


/***/ }),

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Event)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(901);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(467);
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);
/* harmony import */ var _Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(573);





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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this, Event);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "_ds", new _Data_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, "_eventName", "fsEvent");
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(Event, [{
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(capture)) {
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.hasProp)(customEventInit, 'detail')) {
        o = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, {
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
          name = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.camelCase)(event),
          nameToArr = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.strToArr)(event, '.'),
          e = {};
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(evList)) {
        return {};
      }
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(name)) {
        return evList;
      }
      name = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.camelCase)(name);
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
        if (!(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.empty)(evList)) {
          if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.camelCase)(name) in evList) {
            return index > -1 ? evList[(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.camelCase)(name)].indexOf(index) > -1 : true;
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
        if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(name)) {
          this._ds.set(el, this._eventName, {});
          return true;
        }
        var camelName = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.camelCase)(name);
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
    }
    // Public
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(el)) {
        return this;
      }
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(selector)) {
        options = callback;
        callback = selector;
        selector = undefined;
      }
      if (!(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(options)) {
        options = {};
      }
      var EVL = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.strToArr)(eventList, ' ');
      EVL.forEach(function (e) {
        var nameAndNs = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.strToArr)(e, '.'),
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
            if (!(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(options.once)) {
              _this2.off(el, eventList, selector, options);
            }
          };
        (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.defineProperty)(handler, 'name', {
          value: callback.name && callback.name !== '' ? callback.name : "func_event_".concat(name, "_").concat((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(ns) ? new Date().getTime() : ns)
        });
        var NameEvents = ListEvents.indexOf(name) > -1 ? name : e;
        _this2._add(el, NameEvents, handler, !(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(options.capture) ? options.capture : false);
        _this2._setData(el, e, {
          event: e,
          handler: handler,
          selector: selector,
          ns: ns,
          options: !(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(options) ? options : false
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
      if (!(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(options)) {
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(sel)) {
        options = sel;
        sel = null;
      }
      if (!isNaN(options)) {
        index = options;
        options = {};
      }
      if (!(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(options)) {
        options = {};
      }
      var Dev = this._getData(el);
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.not)(eventsList) || eventsList.toLowerCase() === 'all' || eventsList === '*') {
        var _this = this;
        if (Dev) {
          for (var prop in Dev) {
            if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.hasProp)(Dev, prop)) {
              var e = Dev[prop];
              e.forEach(function (i) {
                _this._remove(el, i.event, i.handler, i.options);
              });
            }
          }
          this._off();
        }
        return el;
      }
      var EvL = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.strToArr)(eventsList, ' ');
      EvL.forEach(function (e) {
        var nMap = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.strToArr)(e, '.'),
          evMap = nMap.length > 1 ? _this3._getNS(nMap, true) : {
            name: nMap[0],
            ns: ''
          },
          name = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.normName)(evMap.name),
          ns = options.ns ? options.ns : evMap.ns;
        if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_1__.hasProp)(Dev, name)) {
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
}();


/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Selector)
/* harmony export */ });
/* unused harmony export SelectorError */
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(901);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(822);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(954);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(501);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(579);
/* harmony import */ var _Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(573);






function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

/**
 * @memberOf module:Core.Selector
 * @private
 * @inner
 * @const {Number}
 * @default 3
 */
var NODETEXT = 3;

/**
 * Errores Personalizados de la Clase Selector
 * @namespace SelectorError
 * @memberOf module:Core.Selector
 * @class
 * @extends {Error} Error
 */
var SelectorError = /*#__PURE__*/function (_Error) {
  function SelectorError() {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, SelectorError);
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }
    _this = _callSuper(this, SelectorError, [].concat(params));
    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, SelectorError);
    }
    _this.name = 'SelectorError';
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(SelectorError, _Error);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(SelectorError);
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(Error));

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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(this, Selector);
    this.Elem = Array.from('');
    this.context = context;
    if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.empty)(selector)) {
      return this;
    }
    if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(selector)) {
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
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(Selector, [{
    key: "mergeEl",
    value: function mergeEl(otherEl) {
      var _this2 = this;
      if (!(0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.empty)(otherEl) && otherEl.length === undefined) {
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.isFunction)(_sel)) {
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(_sel) && (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.hasProp)(_sel, 'Elem')) {
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
      if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.isArrayish)(_sel)) {
        if ((0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.hasProp)(_sel, '_prevObj')) {
          this._prevObj = _sel._prevObj;
        }
        this.mergeEl(_sel);
        return this;
      }
      if (typeof _sel !== 'string' && _sel.self && _sel.self !== window) {
        return this;
      }
      var pHtml = (0,_Utils_Utils_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)(_sel);
      if (pHtml.length === 1 && pHtml[0].nodeType === NODETEXT) {
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
}();


/***/ }),

/***/ 153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B_: () => (/* reexport safe */ _Data_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   Jh: () => (/* reexport safe */ _Event_js__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   MD: () => (/* reexport safe */ _Selector_js__WEBPACK_IMPORTED_MODULE_2__.A)
/* harmony export */ });
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(409);
/* harmony import */ var _Selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(572);
/**
 * Nueclo de Fascino
 * <p>Conjunto de clases que contrullen el centro de fascino.</p>
 * @module Core
 */





/***/ }),

/***/ 253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Plugins_http)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  const pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    utils_toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

/* harmony default export */ const utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const core_AxiosError = (AxiosError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ const helpers_null = (null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ const defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ const classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ const classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ const classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js




/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ const browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new browser.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (browser.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js










const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: browser.classes.FormData,
    Blob: browser.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

/* harmony default export */ const lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

/* harmony default export */ const core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ const cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js





/* harmony default export */ const cookies = (browser.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ const isURLSameOrigin = (browser.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && (browser.isStandardBrowserEnv || browser.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || defaults_transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (browser.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && browser.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js





const knownAdapters = {
  http: helpers_null,
  xhr: xhr
}

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

/* harmony default export */ const adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new core_AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.3.4";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer !== undefined) {
      validator.assertOptions(paramsSerializer, {
        encode: Axios_validators.function,
        serialize: Axios_validators.function
      }, true);
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const core_Axios = (Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const helpers_HttpStatusCode = (HttpStatusCode);

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js



















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const lib_axios = (axios);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(29);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(901);
// EXTERNAL MODULE: ./src/Utils/Utils.js
var Utils = __webpack_require__(573);
;// CONCATENATED MODULE: ./src/Plugins/http/serialize.js



/**
 * Clase para serializar valores para envió [Fetch]{@link module:Plugins.HTTP.fetch}
 * @namespace Serialize
 * @memberOf module:Plugins.HTTP
 * @class
 */
var Serialize = /*#__PURE__*/function () {
  function Serialize() {
    (0,classCallCheck/* default */.A)(this, Serialize);
  }
  return (0,createClass/* default */.A)(Serialize, [{
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
      var _this = this;
      return Object.keys(param).map(function (key) {
        if ((0,Utils.isObject)(param[key]) || Array.isArray(param[key])) {
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
}();
/**
 * Serializa un formulario
 * @function
 * @memberOf module:Plugins.HTTP.Serialize
 * @public
 * @param {HTMLFromElement} form El formulario
 * @throws {Error} If form !== HTMLFromElement
 * @return {String} Cadena serializada o vació si hay errores
 */
var SerializeToForm = function SerializeToForm(form) {
  if (empty(form)) {
    return '';
  }
  if (form.nodeName !== 'FORM') {
    throw new Error(form, 'is not element HTMLFormElement');
    return '';
  }
  var e = form.elements,
    l = e.length,
    p = {};
  for (var i = 0; i < l; i++) {
    var field = e[i],
      name = field.name || field.id;
    if (!empty(name) && !field.disabled) {
      switch (field.nodeName) {
        case 'INPUT':
          switch (field.type.toLowerCase()) {
            case 'checkbox':
            case 'radio':
              if (field.checked) {
                p[name] = field.value;
              }
              break;
            case 'file':
              var data = new FormData();
              for (var k = 0; k < field.files.length; k++) {
                data.append(name, field.files[k]);
              }
              p[name] = data;
              break;
            default:
              p[name] = field.value;
              break;
          }
          break;
        case 'TEXTAREA':
          p[name] = field.value;
          break;
        case 'SELECT':
          switch (field.type) {
            case 'select-one':
              p[name] = field.value;
              break;
            case 'select-multiple':
              var o = field.options;
              for (var j = 0; j < o.length; j++) {
                if (o.selected) {
                  if (!Array.isArray(p[name])) {
                    p[name] = [];
                  }
                  p[name].push(o.value);
                }
              }
              break;
          }
      }
    }
  }
  return new Serialize().stringify(p);
};
/* harmony default export */ const serialize = ((/* unused pure expression or super */ null && (Serialize)));
// EXTERNAL MODULE: ./src/Classes/index.js
var Classes = __webpack_require__(153);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(467);
;// CONCATENATED MODULE: ./src/Plugins/http/fetch.js


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



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
  } else if ((0,Utils.isArrayish)(resource)) {
    var ul = resource.shift();
    if (resource.length > 0) {
      return (0,Utils.url)(ul, resource[0]);
    } else {
      return (0,Utils.url)(ul);
    }
  } else if ((0,Utils.isObject)(resource)) {
    return (0,Utils.url)(resource.url, resource.params);
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
  (0,Utils.each)(otherData, function (n) {
    if (form.hasAttribute("data-".concat(n))) {
      d[(0,Utils.camelCase)(n)] = form.getAttribute("data-".concat(n));
    }
  });
  d = _$.extend({}, d, options);
  return {
    url: url,
    obj: getSettings(_$.extend({}, OptionsFT, d))
  };
}
function getSettings(s) {
  if (!(0,Utils.isObject)(s)) {
    return false;
  }
  var o = (0,Utils.extend)({}, OptionsFT, s),
    op = {};
  if (o.method.toLowerCase() !== 'post' && (0,Utils.not)(o.headers)) {
    o.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }
  (0,Utils.each)(o, function (v, n) {
    if (!(0,Utils.not)(v)) {
      if (n == 'headers') {
        if (v instanceof Headers) {
          op[n] = v;
        } else if ((0,Utils.isObject)(v)) {
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
  return !(0,Utils.not)(op) ? op : false;
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
    results = null,
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
    results = null;
    error = null;
    controller = new AbortController();
  };
  var _readBody = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(response) {
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
        _i,
        _chunks,
        chunk,
        n,
        _args = arguments;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
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
            for (_i = 0, _chunks = chunks; _i < _chunks.length; _i++) {
              chunk = _chunks[_i];
              body.set(chunk, position);
              position += chunk.length;
            }
            if (!(typeResponse.toLowerCase() === "json")) {
              _context.next = 29;
              break;
            }
            n = new TextDecoder('utf-8').decode(body);
            _context.prev = 20;
            return _context.abrupt("return", JSON.parse(n));
          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](20);
            return _context.abrupt("return", n);
          case 27:
            _context.next = 38;
            break;
          case 29:
            if (!(typeResponse.toLowerCase() === "blob")) {
              _context.next = 37;
              break;
            }
            if ((0,Utils.not)(mimeType)) {
              _context.next = 34;
              break;
            }
            return _context.abrupt("return", new Blob([body], {
              type: mimeType
            }));
          case 34:
            return _context.abrupt("return", new Blob([body]));
          case 35:
            _context.next = 38;
            break;
          case 37:
            return _context.abrupt("return", new TextDecoder('utf-8').decode(body));
          case 38:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[20, 24]]);
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var signal, response;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
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
            results = null;
            return _context2.abrupt("return", error);
          case 21:
            _context2.prev = 21;
            loading = false;
            return _context2.finish(21);
          case 24:
          case "end":
            return _context2.stop();
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
;// CONCATENATED MODULE: ./src/Plugins/http/index.js


/**
 * Plugins HTTP por fetch con Serialize
 * @namespace HTTP
 * @memberOf module:Plugins
 */




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
      return lib_axios.create(config);
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
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(url) {
        var data,
          options,
          m,
          u,
          o,
          _$$ft,
          start,
          cancel,
          _args = arguments;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
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
        var ev = new Classes/* Event */.Jh();
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
/* harmony default export */ const Plugins_http = ({
  axios: lib_axios,
  ft: ft
});

/***/ }),

/***/ 573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   cleanPreCode: () => (/* binding */ cleanPreCode),
/* harmony export */   createScript: () => (/* binding */ createScript),
/* harmony export */   createURI: () => (/* binding */ createURI),
/* harmony export */   defineProperty: () => (/* binding */ defineProperty),
/* harmony export */   each: () => (/* binding */ each),
/* harmony export */   empty: () => (/* binding */ empty),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   formatBytes: () => (/* binding */ formatBytes),
/* harmony export */   gOPD: () => (/* binding */ gOPD),
/* harmony export */   getProperty: () => (/* binding */ getProperty),
/* harmony export */   getStyleComputed: () => (/* binding */ getStyleComputed),
/* harmony export */   hasProp: () => (/* binding */ hasProp),
/* harmony export */   htmlEntities: () => (/* binding */ htmlEntities),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isArrayish: () => (/* binding */ isArrayish),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isFascinoElement: () => (/* binding */ isFascinoElement),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isHiden: () => (/* binding */ isHiden),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isSelector: () => (/* binding */ isSelector),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isURL: () => (/* binding */ isURL),
/* harmony export */   isVisible: () => (/* binding */ isVisible),
/* harmony export */   jsonToFormdata: () => (/* binding */ jsonToFormdata),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   normName: () => (/* binding */ normName),
/* harmony export */   normalizeData: () => (/* binding */ normalizeData),
/* harmony export */   normalizeElements: () => (/* binding */ normalizeElements),
/* harmony export */   not: () => (/* binding */ not),
/* harmony export */   parseHTML: () => (/* binding */ parseHTML),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   randomMap: () => (/* binding */ randomMap),
/* harmony export */   script: () => (/* binding */ script),
/* harmony export */   setOptionsOfData: () => (/* binding */ setOptionsOfData),
/* harmony export */   setPropertyObj: () => (/* binding */ setPropertyObj),
/* harmony export */   strToArr: () => (/* binding */ strToArr),
/* harmony export */   strValue: () => (/* binding */ strValue),
/* harmony export */   toStr: () => (/* binding */ toStr),
/* harmony export */   toString: () => (/* binding */ toString),
/* harmony export */   tryStringObject: () => (/* binding */ tryStringObject),
/* harmony export */   uniqueId: () => (/* binding */ uniqueId),
/* harmony export */   url: () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);

var camelCaseDefautl = {
  firstUpper: false,
  locale: false
};
/**
 * CamelCase
 * @memberOf module:Utils
 * @type {Function}
 */
var camelCase = function camelCase(src) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : camelCaseDefautl;
  var SEPARATOR = /[_.\- ]+/;
  if (not(src)) {
    return src;
  }
  if (isArrayish(src)) {
    src = src.map(function (x) {
      return x.trim();
    }).filter(function (x) {
      return x.length;
    }).join('-');
  } else {
    src = src.trim();
  }
  if (src.length === 0) {
    return '';
  }
  var o = extend({}, camelCaseDefautl, options),
    tLC = not(o.locale) || o.locale == false ? function (string) {
      return string.toLowerCase();
    } : function (string) {
      return string.toLocaleLowerCase(o.locale);
    },
    tUC = not(o.locale) || o.locale == false ? function (string) {
      return string.toUpperCase();
    } : function (string) {
      return string.toLocaleUpperCase(o.locale);
    };
  if (src.length === 1) {
    if (SEPARATOR.test(src)) {
      return "";
    }
    return o.firstUpper ? tUC(src) : tLC(src);
  }
  var wordArr = src.split(SEPARATOR),
    newSrc = "";
  each(wordArr, function (chart, ix) {
    if (ix == 0) {
      newSrc += (o.firstUpper ? tUC(chart.charAt(0)) : tLC(chart.charAt(0))) + chart.slice(1);
    } else if (ix > 0) {
      newSrc += tUC(chart.charAt(0)) + chart.slice(1);
    } else {
      newSrc += chart;
    }
  });
  return newSrc;
};
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
  if (empty(target) || (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(target) !== "object" && typeof target !== "function") {
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
    hasToStringTag = typeof Symbol === "function" && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Symbol.toStringTag) === "symbol";
  if (typeof value === "string") {
    return true;
  }
  if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) !== "object") {
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
function isFunction(fn) {
  if (!fn) {
    return false;
  }
  var string = toStr.call(fn);
  return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && (
  // IE8 and below
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
  return !empty(arg) && isFunction(arg.toString) ? arg.toString() : false;
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
  return (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(el) === "object" && el.nodeType === 1 && isString(el.nodeName);
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
function isHiden(el) {
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

/***/ }),

/***/ 633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(738)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 738:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(633)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 417:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ 29:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(662);
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(176);


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(p, r.prototype), p;
}

/***/ }),

/***/ 901:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(922);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(descriptor.key), descriptor);
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

/***/ }),

/***/ 467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(922);

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(key);
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

/***/ }),

/***/ 954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 501:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(662);

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
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(subClass, superClass);
}

/***/ }),

/***/ 202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}

/***/ }),

/***/ 176:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

/***/ }),

/***/ 822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(self);
}

/***/ }),

/***/ 662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(284);

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ 922:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(284);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(i) ? i : i + "";
}

/***/ }),

/***/ 284:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ 579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(954);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(662);
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(324);




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Fascino: () => (/* reexport */ Fascino),
  _$: () => (/* reexport */ Fascino_$)
});

// NAMESPACE OBJECT: ./src/Utils/Colors.js
var Colors_namespaceObject = {};
__webpack_require__.r(Colors_namespaceObject);
__webpack_require__.d(Colors_namespaceObject, {
  AlphaHex: () => (AlphaHex),
  Color2Str: () => (Color2Str),
  ColorStr2Obj: () => (ColorStr2Obj),
  Hex2Hsl: () => (Hex2Hsl),
  Hex2Hwb: () => (Hex2Hwb),
  Hex2Per: () => (Hex2Per),
  Hex2Rgb: () => (Hex2Rgb),
  Hsl2Hex: () => (Hsl2Hex),
  Hsl2Hwb: () => (Hsl2Hwb),
  Hsl2Rgb: () => (Hsl2Rgb),
  Hwb2Hex: () => (Hwb2Hex),
  Hwb2Hsl: () => (Hwb2Hsl),
  Hwb2Rgb: () => (Hwb2Rgb),
  Per2Hex: () => (Per2Hex),
  Rgb2Hex: () => (Rgb2Hex),
  Rgb2Hsl: () => (Rgb2Hsl),
  Rgb2Hsp: () => (Rgb2Hsp),
  Rgb2Hwb: () => (Rgb2Hwb),
  isHSL: () => (isHSL),
  isHex: () => (isHex),
  isHwb: () => (isHwb),
  isRGB: () => (isRGB),
  lightOrDark: () => (lightOrDark)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(29);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(822);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(501);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(467);
// EXTERNAL MODULE: ./src/Classes/index.js
var Classes = __webpack_require__(153);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"rE":"1.1.5"};
// EXTERNAL MODULE: ./src/Utils/Utils.js
var Utils = __webpack_require__(573);
;// CONCATENATED MODULE: ./src/core.js







function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



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
  /**
   * @param  {(String|Element|Array|Function|Object)} selector Seletor, Elemento ó funcion para iniciar FascinoJs
   * @param  {HTMLElement} context Contexto del selector, por defecto es <code>document</code>
   * @return {Fascino}
   */
  function Fascino(selector) {
    var _this2;
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    (0,classCallCheck/* default */.A)(this, Fascino);
    _this2 = _callSuper(this, Fascino, [selector, context]);
    (0,defineProperty/* default */.A)(_this2, "_ds", new Classes/* Data */.B_());
    (0,defineProperty/* default */.A)(_this2, "_ev", new Classes/* Event */.Jh());
    _this2.name = 'FascinoJS';
    _this2.length = _this2.Elem.length;
    _this2.version = package_namespaceObject.rE;
    if (_this2.length == 1) {
      _this2.events = _this2.getEvent();
    }
    return _this2;
  }
  // STATICOS

  /**
   * Añade funciones a Fascino
   * @memberOf Fascino
   * @public
   * @param {String} name Nombre de la función
   * @param {Function} fn Función a asignar
   * @return {Fascino}
   */
  (0,inherits/* default */.A)(Fascino, _Selector);
  return (0,createClass/* default */.A)(Fascino, [{
    key: "_is",
    value:
    // PRIVADOS
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
      if ((0,Utils.empty)(v)) {
        v = '';
      }
      return this.each(function (el) {
        el[n] = v;
        if (n === 'innerHTML') {
          (0,Utils.script)(el);
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
      if (!(0,Utils.empty)(options)) {
        for (var key in options) {
          if ((0,Utils.hasProp)(options, key)) {
            var value = options[key];
            if ((0,Utils.hasProp)(this, key)) {
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
      if (!(0,Utils.empty)(val) && typeof val !== 'boolean') {
        return this.each(function (el) {
          if (el === window || el === document) {
            return;
          }
          var h,
            style = (0,Utils.getStyleComputed)(el),
            bs = prop === 'width' ? parseInt(style['border-left-width']) + parseInt(style['border-right-width']) : parseInt(style['border-top-width']) + parseInt(style['border-bottom-width']),
            pa = prop === 'width' ? parseInt(style['padding-left']) + parseInt(style['padding-right']) : parseInt(style['padding-top']) + parseInt(style['padding-bottom']);
          h = w(el)[prop](val)[prop]() - bs - pa;
          el.style[prop] = h + 'px';
        });
      }
      el = this.Elem[0];
      size = el[prop === 'width' ? 'offsetWidth' : 'offsetHeight'];
      style = (0,Utils.getStyleComputed)(el);
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
      if ((0,Utils.empty)(val)) {
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
    }
    // PUBLICOS
    /** L
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
    /** L
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
    /** L
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
    /** L
     * Combina Elementos
     * @memberOf Fascino
     * @public
     * @param  {Array} els Matriz de elementos nueva
     * @return {Fascino}
     */
  }, {
    key: "merge",
    value: function merge(els) {
      (0,Utils.merge)(this.Elem, els);
      return this;
    }
    /** L
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
      parent = (0,Utils.empty)(parent) ? el.parentNode() : (0,Utils.normalizeElements)(parent);
      if ((0,Utils.empty)(nodeName)) {
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
     * @memberOf Fascino L
     * @public
     * @param  {Number} i Posición
     * @return {Element}
     */
  }, {
    key: "get",
    value: function get(i) {
      if ((0,Utils.not)(i)) {
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
      return !isNaN(i) && this.length > 0 ? (0,Utils.extend)(w(this.get(i)), {
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
      if ((0,Utils.isString)(fn)) {
        var sel = fn;
        fn = function fn(el) {
          return el.matches(sel);
        };
      }
      return (0,Utils.extend)((0,Utils.merge)(w().Elem, [].filter.call(this.Elem, fn)), {
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
      return (0,Utils.extend)(result, {
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
      return (0,Utils.extend)(result, {
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
      return rEl.length === 0 ? [] : rEl.length === 1 ? w(rEl[0]) : (0,Utils.merge)(w().Elem, rEl);
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
      if ((0,Utils.empty)(sel)) {
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
      if (s && (0,Utils.hasProp)(s, 'Elem')) {
        this.each(function (el) {
          s.each(function (o) {
            if (el === o) {
              result = true;
              return;
            }
          });
        });
      }
      if ((0,Utils.isString)(s)) {
        if (s === ':selected') {
          result = this._is('selected');
        } else if (s === ':checked') {
          result = this._is('checked');
        } else if (s === ':visible') {
          this.each(function (el) {
            if ((0,Utils.isVisible)(el)) {
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
      } else if ((0,Utils.isArrayish)(s)) {
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
      return arguments.length === 1 ? this._prop(n) : this._prop(n, (0,Utils.empty)(v) ? '' : v);
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
      var newNode = (0,Utils.normalizeElements)(node);
      this._setOptions(newNode, options);
      return this.each(function (el) {
        w(newNode).each(function (nN, i) {
          if (nN === el) {
            return;
          }
          var child = i === 0 ? nN : nN.cloneNode(true);
          (0,Utils.script)(child);
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
      var newNode = (0,Utils.normalizeElements)(node);
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
      var newNode = (0,Utils.normalizeElements)(node);
      this._setOptions(newNode, options);
      return this.each(function (el, elIndex) {
        w(newNode).each(function (e) {
          if (el === e) return;
          var child = elIndex === 0 ? e : e.cloneNode(true);
          (0,Utils.script)(child);
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
      var newNode = (0,Utils.normalizeElements)(node);
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
      if ((0,Utils.not)(deep)) {
        deep = false;
      }
      this.each(function (e) {
        var el = e.cloneNode(deep);
        res.push(el);
      });
      return (0,Utils.merge)(w().Elem, res);
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
      if ((0,Utils.not)(deep)) {
        deep = true;
      }
      this.each(function (e) {
        res.push(document.importNode(e, deep));
      });
      return (0,Utils.merge)(w().Elem, res);
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
      return (0,Utils.merge)(w().Elem, res);
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
      return (0,Utils.merge)(w().Elem, res);
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
      if ((0,Utils.empty)(sel)) {
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
      if ((0,Utils.empty)(sel)) {
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
      var wrapper = w((0,Utils.normalizeElements)(el));
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
      wrapper = w((0,Utils.normalizeElements)(el));
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
      var wrapper = w((0,Utils.normalizeElements)(el));
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
      var out = !(0,Utils.empty)(sel) ? this.Elem.filter(function (el) {
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
        if ((0,Utils.isString)(html)) {
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
        if ((0,Utils.isString)(html)) {
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
      return (0,Utils.empty)(txt) ? this._prop('textContent') : this._prop('textContent', txt);
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
      if ((0,Utils.empty)(_html)) {
        return this._prop('innerHTML');
      }
      if (Array.isArray(_html)) {
        var _ref5;
        value = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(value).concat(_toConsumableArray(_html)));
      } else if (_html instanceof Element || (0,Utils.isFascinoElement)(_html)) {
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
      this._prop('innerHTML', value.length === 1 && (0,Utils.empty)(value[0]) ? '' : value.join('\n'));
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
      if ((0,Utils.not)(value)) {
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
        if ((0,Utils.isArrayish)(arg[0])) {
          var getStyle = {},
            i = 0;
          this.each(function (el) {
            var id = el.getAttribute('id'),
              prefix = !(0,Utils.empty)(id) ? id : el.tagName + i;
            getStyle[prefix] = {};
            arg[0].forEach(function (nameStyle) {
              getStyle[prefix][nameStyle] = el.style[nameStyle];
            });
            i++;
          });
          return getStyle;
        } else if ((0,Utils.isObject)(arg[0])) {
          return this.each(function (el) {
            for (var key in arg[0]) {
              if ((0,Utils.hasProp)(arg[0], key)) {
                var value = arg[0][key];
                el.style.setProperty(key, value);
              }
            }
          });
        } else if (arg[0].indexOf(':') === 0) {
          return (0,Utils.getStyleComputed)(this.Elem[0], null, arg[0]);
        } else if (arg[0] === '*' || arg[0] === 'all') {
          return (0,Utils.getStyleComputed)(this.Elem[0]);
        } else {
          var st = (0,Utils.getStyleComputed)(this.Elem[0]);
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
      if ((0,Utils.empty)(name) || this.length === 0) {
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
      if ((0,Utils.not)(val)) {
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
      if ((0,Utils.empty)(val)) {
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
      if ((0,Utils.empty)(val)) {
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
          position = (0,Utils.getStyleComputed)(el).position;
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
        var s = (0,Utils.getStyleComputed)(this.Elem[0]);
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
      if ((0,Utils.empty)(v)) {
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
      if ((0,Utils.empty)(v)) {
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
          w(el).data('display', display);
          w(el).data('opacity', opacity);
          w(el).style({
            display: 'none',
            opacity: 0
          });
        }
        if ((0,Utils.isFunction)(callback)) {
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
        var display = w(el).data('display') || "block",
          opacity = w(el).data('opacity') || 1,
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
        if ((0,Utils.isFunction)(callback)) {
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
      if ((0,Utils.isNumber)(fn)) {
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
      if ((0,Utils.isFunction)(fn)) {
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
      if ((0,Utils.isFunction)(fn)) {
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
        if ((0,Utils.isArrayish)(args[0])) {
          var Attrs = {};
          var i = 0;
          this.each(function (el) {
            var id = el.getAttribute('id'),
              prefix = !(0,Utils.not)(id) ? id : el.tagName + i;
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
        } else if ((0,Utils.isObject)(args[0])) {
          return this.each(function (el) {
            for (var key in args[0]) {
              if ((0,Utils.hasProp)(args[0], key)) {
                var value = (0,Utils.normalizeData)(args[0][key]);
                if (key in el) {
                  el[key] = value;
                } else {
                  el.setAttribute(key, value);
                }
              }
            }
          });
        } else if ((0,Utils.isString)(args[0])) {
          return this.Elem[0].hasAttributes(args[0]) ? this.Elem[0].getAttribute(args[0]) : false;
        } else if ((0,Utils.isFunction)(args[0])) {
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
          value = (0,Utils.normalizeData)(args[1]);
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
        if (args.length == 1 && !(0,Utils.isArrayish)(args[0])) {
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
      if ((0,Utils.empty)(attr)) {
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
        if (!(0,Utils.empty)(name) && (0,Utils.not)(value)) {
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
      if ((0,Utils.empty)(key)) {
        return false;
      }
      if (this._ds.has(this.Elem[0], key)) {
        return this._ds.get(this.Elem[0], key);
      }
      if ((0,Utils.hasProp)(this.Elem[0].dataset, key)) {
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
      var _name = (0,Utils.normName)(name),
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
        if ((0,Utils.not)(customEvent)) {
          w(el).data('customEvent', et);
        } else {
          w(el).data('customEvent', (0,Utils.extend)({}, customEvent, et));
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
      var _name = (0,Utils.normName)(name);
      return this.each(function (el) {
        if (ListEvents.indexOf(_name) > -1) {
          el[_name].call(el);
        } else if (w(el).hasData('customEvent')) {
          var customEvent = w(el).data('customEvent');
          if (!(0,Utils.not)(customEvent) && (0,Utils.hasProp)(customEvent, _name)) {
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
      if (!(0,Utils.hasProp)(this, name)) {
        this.prototype[name] = fn;
      }
      return this;
    }
  }]);
}(Classes/* Selector */.MD);
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
    if ((0,Utils.isString)(val)) {
      if (val.indexOf(':') === 0) {
        pseudo = val;
        val = undefined;
      }
    }
    if ((0,Utils.empty)(val)) {
      var s = (0,Utils.getStyleComputed)(this.Elem[0], null, !(0,Utils.empty)(pseudo) ? pseudo : ''),
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
      if ((0,Utils.isArrayish)(val)) {
        w(el).style(name, val.join(' '));
      } else if ((0,Utils.isObject)(val)) {
        var _res = {},
          ext = name === 'border' ? '-width' : '';
        for (var i in val) {
          if ((0,Utils.hasProp)(val, i)) {
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
;// CONCATENATED MODULE: ./src/Utils/Template.js

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
function template(html, options, conf) {
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
  if (!(0,Utils.empty)(conf)) {
    if ((0,Utils.hasProp)(conf, 'beginToken')) {
      re = re.replace('<%', conf.beginToken);
    }
    if ((0,Utils.hasProp)(conf, 'endToken')) {
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
    console.error("'" + err.message + "'", ' in \n\nCode:\n', code, '\n'); /* eslint no-console: 0, quotes: 0 */
  }
  return result;
}
;// CONCATENATED MODULE: ./src/Utils/Colors.js
/**
 * Funciones Útiles para el manejo de colores con javascript en formatos Hex, RGB(A), HSL(A), HWB
 * @namespace Colors
 * @memberOf module:Utils 
 * @tutorial Colors
 */


//============================================================================================
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
}

//-------------------- RGBA --------------------------------------------------------------------
/**
 * Valida si es un Objecto o String valido para rgb
 * @memberOf module:Utils.Colors
 * @function isRGB
 * @param  {(Object|String)}  rgb RGBA
 * @return {Boolean}
 */
function isRGB(rgb) {
  return (0,Utils.isObject)(rgb) && (0,Utils.hasProp)(rgb, 'r') || /(^rgb\([\d,?\s?]+\)$)|(^rgba\(([\d,?\s?]+)\s?\/?\s?(([\d.\d]|[\d\%])+)\)$)/gi.test(rgb);
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
}

//-------------------- HSLA --------------------------------------------------------------------
/**
 * Valida si es un Objecto o String HSL
 * @memberOf module:Utils.Colors
 * @function isHSL
 * @param  {(Object|String)}  hsl
 * @return {Boolean}
 */
function isHSL(hsl) {
  return (0,Utils.isObject)(hsl) && (0,Utils.hasProp)(hsl, 's') || /(^hsl\([\d%?,?\s?]+\)$)|(^hsla\(([\d%?,?\s?]+)\s?\/?\s?(([\d.\d]|[\d\%])+)\)$)/gi.test(hsl);
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
}
//-------------------- HWB ---------------------------------------------------------------------
/**
 * Valida si es un Objecto o string HWB valido 
 * @memberOf module:Utils.Colors
 * @function isHwb
 * @param  {(Object|String)}  hwb
 * @return {Boolean}
 */
function isHwb(hwb) {
  return (0,Utils.isObject)(hwb) && (0,Utils.hasProp)(hwb, 'w') || /^hwb\(([\/?\d%?\s?]+)\)$/gi.test(hwb);
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
}

//============================================================================================
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
  if ((0,Utils.isObject)(color)) {
    if ((0,Utils.hasProp)(color, 'r')) {
      return (0,Utils.hasProp)(color, 'a') && color.a < 100 ? "rgba(".concat(color.r, " ").concat(color.g, " ").concat(color.b, " / ").concat(color.a, "%)") : "rgb(".concat(color.r, " ").concat(color.g, " ").concat(color.b, ")");
    } else if ((0,Utils.hasProp)(color, 'w')) {
      return (0,Utils.hasProp)(color, 'a') && color.a < 100 ? "hwb(".concat(color.h, " ").concat(color.w, "% ").concat(color.b, "% / ").concat(color.a, ")") : "hwb(".concat(color.h, " ").concat(color.w, "% ").concat(color.b, "%)");
    } else if ((0,Utils.hasProp)(color, 'h')) {
      return (0,Utils.hasProp)(color, 'a') && color.a < 100 ? "hsla(".concat(color.h, " ").concat(color.s, "% ").concat(color.l, "% / ").concat(color.a, "%)") : "hsl(".concat(color.h, " ").concat(color.s, "% ").concat(color.l, "%)");
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
    if ((0,Utils.not)(c)) {
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
;// CONCATENATED MODULE: ./src/Utils/index.js
/**
 * Conjunto de Utilidades
 * <p>Grupo de Funciones Utiles para nuestros proyectos</p>
 * @module Utils
 */



/* harmony default export */ const src_Utils = ({
  Colors: Colors_namespaceObject,
  Utils: Utils,
  template: template
});
;// CONCATENATED MODULE: ./src/Fascino.js


/**
 * Fascino desde el Navegador <br>
 * Esta variable sera la que interactué desde el navegador
 * @global
 * @namespace _$
 * @param  {(String|Function|Element|Object)} selector Selector CSS o HTMLElement o Array de HTMLElememnt
 * @param  {(HTMLElement|document)} context  Entorno de selección
 * @return {Fascino} Class [Fascino]{@link Fascino}
 */
function Fascino_$(selector, context) {
  return new Fascino(selector, context);
}
if (typeof window._$ === 'undefined') {
  window._$ = Fascino_$;
}
var U = src_Utils.Utils,
  Fascino_template = src_Utils.template,
  C = src_Utils.Colors;
Fascino_$.template = Fascino_template;
U.extend(Fascino_$, U);
U.extend(Fascino_$, C);
U.extend(Fascino_$, {
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
    window.$ = Fascino_$;
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
      window.$ = Fascino_$;
    }
    return Fascino_$;
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
    return Fascino_$(window).on('load', fn);
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
      return Fascino_$(window).on('beforeunload', function (e) {
        e.returnValue = fn;
        return fn;
      });
    } else {
      return Fascino_$(window).on('beforeunload', fn);
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
    var img = Fascino_$('img'),
      picture = Fascino_$('picture'),
      bgImg = Fascino_$('[data-lazy-bg]'),
      LazyOptions = {
        root: document.querySelector('body'),
        rootMargin: '0px',
        threshold: 1.0
      };
    var opt = Fascino_$.extend({}, LazyOptions, o);
    var IO = new IntersectionObserver(function (entries, imgObserver) {
      entries.forEach(function (entry) {
        // If the image is not visible.
        Fascino_$.hooks.run('before.lazy', entry, imgObserver);
        if (entry.isIntersecting) {
          // If it's visible.
          var _img = entry.target;
          if (Fascino_$(_img).hasData('lazy-bg')) {
            Fascino_$(_img).style('background-image', "url('".concat(Fascino_$(_img).data('lazy-bg'), "')"));
          }
          if (_img.nodeName === 'IMG') {
            _img.src = Fascino_$(_img).data('src');
            if (Fascino_$(_img).hasData('srcset')) {
              _img.srcset = Fascino_$(_img).data('srcset');
            }
          }
          if (_img.nodeName === 'PICTURE') {
            var imgp = Fascino_$(_img).find('img');
            imgp.src = Fascino_$(imgp).data('src');
            if (Fascino_$(imgp).hasData('srcset')) {
              imgp.srcset = Fascino_$(imgp).data('srcset');
            }
          }
          Fascino_$(_img).fadeIn();
          imgObserver.unobserve(entry.target);
        }
        Fascino_$.hooks.run('after.lazy', entry, imgObserver);
      });
    }, opt);

    // Observing the images.
    if (img.length > 0) {
      img.each(function (img) {
        if (img.parentNode.nodeName !== 'PICTURE') {
          Fascino_$(img).fadeOut();
          if (img && !Fascino_$.empty(exclude)) {
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
        Fascino_$(img).fadeOut();
        if (img && !Fascino_$.empty(exclude)) {
          IO.observe(img);
        } else {
          IO.observe(img);
        }
      });
    }
    if (bgImg.length > 0) {
      bgImg.each(function (img) {
        Fascino_$(img).fadeOut();
        if (img && !Fascino_$.empty(exclude)) {
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
      if (Fascino_$.empty(callbacks)) return;
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].apply(this, args);
      }
    }
  }
});
/* harmony default export */ const src_Fascino = ({
  _$: Fascino_$,
  Fascino: Fascino
});
// EXTERNAL MODULE: ./src/Plugins/http/index.js + 44 modules
var http = __webpack_require__(253);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(579);
;// CONCATENATED MODULE: ./src/Plugins/progressbar/Progress.js






function Progress_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, Progress_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function Progress_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Progress_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
if (_$ === undefined || typeof _$ != "function") {
  throw new Error("Fascino is required");
}
/**
 * WebComponent Progress <br/>
 * Barra de Progreso con nuevas opciones
 * @example <progress-bar value="200" max="1500" size="small" speed="0.3" bg="#000" value-bg="#f2b032"></progress-bar>
 * @namespace Progress
 * @memberOf module:Plugins.Progress
 * @class
 */
var Progress = /*#__PURE__*/function (_HTMLElement) {
  /**
   * @return {module:Plugins.Progress.Progress}
   */
  function Progress() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Progress);
    _this = Progress_callSuper(this, Progress);
    _this.attachShadow({
      mode: 'open'
    });
    _this._createChildren();
    _this.shadowRoot.append(_this.wrapper.get(0));
    return _this;
  }
  /**
   * Se ejecuta al conectarse al DOM
   * @memberOf module:Plugins.Progress.Progress
   * @public
   * @return {module:Plugins.Progress.Progress}
   */
  (0,inherits/* default */.A)(Progress, _HTMLElement);
  return (0,createClass/* default */.A)(Progress, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.isConnected) {
        this.max = _$(this).hasAttr('max') ? _$(this).attr('max') : 100;
        this.value = _$(this).hasAttr('value') ? _$(this).attr('value') : 0;
        this.speed = _$(this).hasAttr('speed') ? _$(this).attr('speed') : 0.2;
        this._updateProgress(this.max, this.speed, this.value);
        this._createStyle();
        console.log(this);
      }
    }
    /**
     * Se ejecuta al desconcertar del DOM
     * @memberOf module:Plugins.Progress.Progress
     * @public
     * @return {module:Plugins.Progress.Progress}
     */
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _$(this).remove();
    }
    /**
     * Ejecuta una acción al cambiar un atributo de Progress
     * @memberOf module:Plugins.Progress.Progress
     * @public
     * @param  {String} name     Nombre del Atributo que ha cambiado
     * @param  {(String|Boolean)} oldValue Valor anterior
     * @param  {(String|Boolean)} newValue Nuevo Valor
     */
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name == 'value') {
        this.setValue(parseFloat(newValue));
      } else if (name == 'bg') {
        this.setBg(newValue);
      } else if (name == 'value-bg') {
        this.setBgValue(newValue);
      } else if (name == 'size') {
        this.setSize(newValue);
      } else if (name == "speed") {
        this.setSpeed(newValue);
      } else if (name == "max") {
        this._updateProgress(parseFloat(newValue), this.speed, this.value);
        this.setValue(this.value);
      }
    }
    /**
     * Observa el cambio de los atributos value, bg, value-bg y size, max, step, speed
     * @memberOf module:Plugins.Progress.Progress
     * @public
     * @return {Array}
     */
  }, {
    key: "_createChildren",
    value:
    /**
     * Crea el contenido del ProgressBar
     * @memberOf module:Plugins.Progress.Progress
     * @private
     */
    function _createChildren() {
      var wrap = _$('<div/>'),
        value = _$('<div/>');
      wrap.addClass('_progressbar-wrapper');
      value.addClass('_progressbar-value');
      value.appendTo(wrap);
      this.valueElement = value;
      this.wrapper = wrap;
    }
    /**
     * Actualiza la barra de progreso
     * @param  {Number} mx Máximo
     * @param  {Number} s  Velocidad de barra de carga (Solo animación)
     * @param  {Number} v  Valor
     * @memberOf module:Plugins.Progress.Progress
     * @private
     */
  }, {
    key: "_updateProgress",
    value: function _updateProgress() {
      var mx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
      var v = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.max = parseInt(mx > 0 ? mx : 100);
      this.speed = parseFloat(s > 0 ? s : 0.2);
      if (!_$.not(v)) {
        v = parseFloat(v);
        if (v > mx) {
          v = mx;
        }
      }
      this.value = v;
    }
    /**
     * Establece los estilos iniciales del Progress Bar
     * @memberOf module:Plugins.Progress.Progress
     * @private
     */
  }, {
    key: "_createStyle",
    value: function _createStyle() {
      _$(this).style({
        "vertical-align": "baseline",
        appearance: "auto",
        "-moz-default-appearance": "progress-bar",
        display: "inline-block",
        border: "0px",
        "background-color": "#e6e6e6",
        "width": "100%",
        "min-height": "2px",
        height: '0.5em'
      });
      this.wrapper.style({
        width: '100%',
        height: '100%',
        display: "block"
      });
      this.valueElement.style({
        height: "100%",
        width: "0%",
        "max-width": "100%",
        display: "block",
        'background-color': '#CF142B',
        'transition': "width ".concat(this.speed, "s ease-in-out, background-color .15s ease-in")
      });
      this.setValue(this.value);
      this.setSize();
      this.setBgValue();
      this.setBg();
    }
    /**
     * Obtiene el Valor en porcentaje para añadirlo al valueElement
     * @memberOf module:Plugins.Progress.Progress
     * @private
     * @param  {Number} v Valor
     * @return {Number}   Tanto por ciento en base a Max
     */
  }, {
    key: "_getPercentage",
    value: function _getPercentage(v) {
      return Math.abs(parseFloat(v) / this.max * 100);
    }
    /**
     * Estable el estilo del tamaño
     * @memberOf module:Plugins.Progress.Progress
     * @public
     * @param {String} size Clase de tamaño puede ser small, default ó large
     */
  }, {
    key: "setSize",
    value: function setSize() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var s = _$.not(size) ? _$(this).attr('size') : size;
      if (!_$.not(s)) {
        if (s.toLowerCase() === 'small') {
          _$(this).height('0.1em');
        } else if (s.toLowerCase() === 'large') {
          _$(this).height('1em');
        } else {
          _$(this).height('0.5em');
        }
      }
    }
    /**
     * Cambia el color de fondo de la barra de carga
     * @memberOf module:Plugins.Progress.Progress
     * @public
     * @param {String} bg Color
     */
  }, {
    key: "setBgValue",
    value: function setBgValue() {
      var bg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var customBg = _$.not(bg) ? _$(this).attr('value-bg') : bg;
      if (!_$.not(customBg)) {
        this.valueElement.style('background-color', customBg);
      }
    }
    /**
     * Establece el color de fondo de la barra de progreso
     * @memberOf module:Plugins.Progress.Progress
     * @public
     * @param {String} bg Color de Fondo
     */
  }, {
    key: "setBg",
    value: function setBg() {
      var bg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var customBg = _$.not(bg) ? _$(this).attr('bg') : bg;
      if (!_$.not(customBg)) {
        _$(this).style('background-color', customBg);
      }
    }
    /**
     * Establece el valor
     * @memberOf module:Plugins.Progress.Progress
     * @public
     * @param {Number} v Valor
     */
  }, {
    key: "setValue",
    value: function setValue() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var newValue = parseInt(v);
      if (newValue > this.max) {
        newValue = this.max;
      }
      if (newValue > -1) {
        this.valueElement.style("width", this._getPercentage(newValue) + "%");
        this.value = newValue;
      }
    }
    /**
     * Establece la velocidad de desplazamiento del la barra de carga
     * @memberOf module:Plugins.Progress.Progress
     * @public
     * @param {Number} speed Velocidad
     */
  }, {
    key: "setSpeed",
    value: function setSpeed() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var sd = _$.not(speed) ? _$(this).attr('speed') : speed;
      if (!_$.not(sd)) {
        this._updateProgress(this.max, parseFloat(sd), this.value);
        this.setValue(this.value);
      }
    }
    /**
     * Retorna el valor de carga
     * @memberOf module:Plugins.Progress.Progress
     * @public	
     * @return {Number}
     */
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['value', 'bg', 'value-bg', 'size', 'max', 'speed'];
    }
  }]);
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.A)(HTMLElement));

customElements.define('progress-bar', Progress);
;// CONCATENATED MODULE: ./src/Plugins/progressbar/index.js
/**
 * Plugins Progress Bar
 * @namespace Progress
 * @memberOf module:Plugins
 */



/**
 * Añade u Obtiene el valor de la barra de progreso
 * @memberOf _$
 * @function progressVal
 * @param  {Number} newValue Valor a asignar
 * @return {(Void|Number)} 
 */
_$.addFn('progressVal', function (newValue) {
  if (_$.not(newValue)) {
    return this.get(0).getValue();
  }
  return this.each(function (p) {
    if (p.nodeName == 'PROGRESS-BAR') {
      p.setValue(newValue);
    }
  });
});
/**
 * Obtiene o establece el valor de los atributos de la barra de progreso
 * @memberOf _$
 * @function progressSet
 * @param  {String} name Nombre del atributo
 * @param  {(String|Number|Null)} val Valor a asignar
 * @return {(Void|Number)} 
 */
_$.addFn('progressSet', function (name) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (_$.not(val)) {
    var it = this.get(0);
    return name in it ? this[name] : null;
  }
  return this.each(function (p) {
    if (p.nodeName == 'PROGRESS-BAR') {
      if (['max', 'step', 'speed'].indexOf(name) == -1) {
        if (name == 'bg') {
          p.setBg(val);
        } else if (name == 'value-bg') {
          p.setBgValue(val);
        } else if (name == 'size') {
          p.setSize(val);
        }
      } else {
        p[name] = val;
      }
    }
  });
});
/* harmony default export */ const progressbar = (Progress);
;// CONCATENATED MODULE: ./src/Plugins/index.js
/**
 * Componentes de Fascino
 * @module Plugins
 */


/* harmony default export */ const Plugins = ({
  http: http,
  Progress: progressbar
});
;// CONCATENATED MODULE: ./src/all.js




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=fascino-all.js.map