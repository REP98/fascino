/**
	* Fascino  
	* @version v1.0.1
	* @copyright 2021-2022 Robert Pérez.
	* @author Robert Pérez delfinmundo@gmail.com
	* 
	* @license Licensed under MIT
	*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["fascino-progress"] = {}));
})(this, (function (exports) { 'use strict';

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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
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

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$1()) {
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

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    _inherits(Progress, _HTMLElement);

    var _super = _createSuper(Progress);

    /**
     * @return {module:Plugins.Progress.Progress}
     */
    function Progress() {
      var _this;

      _classCallCheck(this, Progress);

      _this = _super.call(this);

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


    _createClass(Progress, [{
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

    return Progress;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  customElements.define('progress-bar', Progress);

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

  exports["default"] = Progress;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=fascino-progress-umd.js.map
