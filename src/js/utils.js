/**
 * Conjunto de Utilidades
 * @namespace Utils
 */

const strValue = String.prototype.valueOf,
	toStr = Object.prototype.toString,
	tryStringObject = function tryStringObject(value) {
		try {
			strValue.call(value)
			return true
		} catch (e) {
			return false
		}
	},
	defineProperty = Object.defineProperty,
	gOPD = Object.getOwnPropertyDescriptor,
	setPropertyObj = function setPropertyObj(target, opt) {
		if (defineProperty && opt.name === '__proto__') {
			defineProperty(target, opt.name, {
				enumerable: true,
				configurable: true,
				value: opt.newValue,
				writable: true,
			})
		} else {
			target[opt.name] = opt.newValue
		}
	},
	getProperty = function getProperty(obj, name) {
		if (name === '__proto__') {
			if (!hasProp(obj, name)) {
				return void 0
			} else if (gOPD) {
				return gOPD(obj, name).value
			}
		}

		return obj[name]
	}
/**
 * Extiende un objeto o matriz y combinar sus elementos
 * @memberOf Utils
 * @function extend
 * @param {...*} Argumentos Lista de Objetos a iterar
 * @return {(String|Object|Array)} retorna el elemento, o la unión de ellos
 */
export function extend(...args) {
	let options,
		name,
		src,
		copy,
		copyIsArray,
		clone,
		target,
		deep,
		i,
		length = 0

	if (args.length === 0) {
		return void 0
	}

	target = args[0]
	length = args.length
	i = 1
	deep = false

	if (typeof target === 'boolean') {
		deep = target
		target = args[1] || {}
		i = 2
	}

	if (empty(target) || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {}
	}

	for (; i < length; ++i) {
		if (args[i] !== null) {
			options = args[i]

			for (name in options) {
				if (hasProp(options, name)) {
					src = getProperty(target, name)
					copy = getProperty(options, name)

					if (target !== copy) {
						copyIsArray = isArrayish(copy)
						if (deep && copy && (isObject(copy) || copyIsArray)) {
							if (copyIsArray) {
								copyIsArray = false
								clone = src && isArrayish(src) ? src : []
							} else {
								clone = src && isObject(src) ? src : {}
							}

							setPropertyObj(target, {
								name: name,
								newValue: extend(deep, clone, copy),
							})
						} else if (!not(copy)) {
							setPropertyObj(target, { name: name, newValue: copy })
						}
					}
				}
			}
		}
	}
	return target
}
/**
 * Verifica si es un texto valido
 * @memberOf Utils
 * @function isString
 * @param  {*}  value
 * @return {Boolean}  verdadero si es un string
 */
export function isString(value) {
	const strClass = '[object String]',
		hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'

	if (typeof value === 'string') {
		return true
	}
	if (typeof value !== 'object') {
		return false
	}
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass
}
/**
 * Verifica si es un objecto
 * @memberOf Utils
 * @function isObject
 * @param  {*}  obj
 * @return {Boolean} verdadero si es un objecto
 */
export function isObject(obj) {
	let proto

	if ( !obj || Object.prototype.toString.call( obj ) !== '[object Object]' ) {
		return false
	}

	proto = obj.prototype !== undefined
	if ( !proto ) {
		return true
	}
	return proto.constructor && typeof proto.constructor === 'function'
}
/**
 * Verifica si es una Matriz
 * @memberOf Utils
 * @function isArrayish
 * @param  {*}  obj
 * @return {Boolean}  Verdadero si es un array
 */
export function isArrayish(obj) {
	if (!obj) {
		return false
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && obj.splice instanceof Function)
}
/**
 * Verifica si es un número
 * @function isNumber
 * @memberOf Utils
 * @param  {*}  num
 * @return {Boolean}  verdadero si es un tipo numérico
 */
export function isNumber(num) {
	if (typeof num === 'number') {
		return num - num === 0
	}
	if (typeof num === 'string' && num.trim() !== '') {
		return Number.isFinite ? Number.isFinite(+num) : isFinite(+num)
	}
	return false
}
/**
 * Verifica si es una función
 * @memberOf Utils
 * @function isFunction
 * @param  {*} fn
 * @return {Boolean}  verdadero si es una función
 */
export function isFunction(fn) {
	if (!fn) {
		return false
	}
	const string = Object.prototype.toString.call(fn)
	return string === '[object Function]' ||
		(typeof fn === 'function' && string !== '[object RegExp]') ||
		(typeof window !== 'undefined' &&
		 // IE8 and below
		 (fn === window.setTimeout ||
		  fn === window.alert ||
		  fn === window.confirm ||
		  fn === window.prompt))
}
/**
 * Busca y valida la propiedad del objeto dato
 * @memberOf Utils
 * @function hasProp
 * @param  {Object}  obj  objeto a verificar
 * @param  {String}  prop propiedad a buscar
 * @return {Boolean}  verdadero si la propiedad existe dentro del objeto
 */
export function hasProp(obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop)
}
/**
 * Extensión de [object|function|array|string].toString([native])
 * @memberOf Utils
 * @function toString
 * @param  {string} arg tipo que contiene la función toString
 * @return {(Boolean|String)}     El resultado del toString o falso
 */
export function toString(arg) {
	return !empty(arg) && isFunction(arg.toString) ? arg.toString() : false
}
/**
 * Verifica si es un selector valido
 * @memberOf Utils
 * @function isSelector
 * @param  {String}  selector
 * @return {Boolean}  Verdadero si es un selector
 */
export function isSelector(selector) {
	if (typeof selector !== 'string') {
		return false
	}
	try {
		document.querySelector(selector)
	} catch (error) {
		return false
	}
	return true
}
/**
 * Verifica si la variable dada esta vaciá
 * @memberOf Utils
 * @function empty
 * @example
 * let a
 * empty(a) // true
 * empty(0) // true
 * empty(0.0) // true
 * empty(false) // true
 * empty([]) // true
 * empty({}) // true
 * empty('') // true
 * empty() // true
 * empty(1) // false
 * @param  {*} arg Variable, Objecto, matriz etc.. a verificar
 * @return {Boolean}  Verdadero si esta vació
 */
export function empty(arg) {
	let und
	const emptyVal = [undefined, null, false, 0, 0.0, '', '0', '0.0', und],
		l = emptyVal.length

	if (typeof arg === 'undefined') {
		return true
	}

	for (let i = 0; i < l; i++) {
		if (arg === emptyVal[i]) return true
	}

	if (isArrayish(arg)) {
		return arg.length === 0
	}

	if (isObject(arg)) {
		let o = 0
		for (let i in arg) {
			if (hasProp(arg, i)) {
				o++
			}
		}

		return o === 0
	}

	return false
}
/**
 * Verifica si la variable dada no es nula o indefinida
 * @memberOf Utils
 * @function not
 * @param  {*} arg Variable
 * @return {Boolean} verdadero si esta nula o indefinida
 */
export function not(arg) {
	return arg === undefined || arg === null
}
/**
 * Obtiene los estilos computados del elemento
 * @memberOf Utils
 * @function getStyleComputed
 * @param  {Element} el El Elemento
 * @param  {String} prop La Propiedad
 * @param  {String} pseudoElt PseudoElt
 * @return {Array}
 */
export function getStyleComputed(el, prop, pseudoElt = '') {
	if (empty(el) || !isElement(el)) {
		return
	}

	if (!empty(prop) && prop.indexOf(':') === 0) {
		pseudoElt = prop
		prop = undefined
	}

	if (empty(prop)) {
		return window.getComputedStyle(el, pseudoElt)
	}

	if ( isArrayish(prop)) {
		let ListProperty = {},
			propertys = window.getComputedStyle(el, pseudoElt)
		prop.forEach( (property) => {
			ListProperty[property] = propertys[property]
		})
		return ListProperty
	}
	let propertyStyle = window.getComputedStyle(el, pseudoElt)
	return propertyStyle[prop]
}
/**
 * Verifica si es un elemento
 * @memberOf Utils
 * @function isElement
 * @param  {*}  el
 * @return {Boolean}  Verdadero si el es un Elemento del DOM
 */
export function isElement(el) {
	if (empty(el)) {
		return false
	}
	if (isString(el)) {
		return isSelector(el)
	}
	if (el instanceof HTMLElement) {
		return true
	}

	return typeof el === 'object' && el.nodeType === 1 && isString(el.nodeName)
}
/**
 * Verifica si es un Elemento Fascino
 * @memberOf Utils
 * @function isFascinoElement
 * @param  {*}  el
 * @return {Boolean}    Verdadero si es un elemento de Fascino o _$
 */
export function isFascinoElement(el) {
	if (empty(el)) {
		return false
	}
	if (el.constructor && el.constructor.name.toUpperCase() === 'FASCINO' ) {
		return true
	}

	return hasProp(el, 'Elem')
}

/**
 * Verifica si el elemento es visible en el DOM
 * @memberOf Utils
 * @function isVisible
 * @param  {(String|Element)}  el
 * @return {Boolean}    Verdadero si es visible
 */
export function isVisible(el) {
	if (empty(el)) {
		return false
	}

	var elem = !isElement(el) ? null : isSelector(el) ? document.querySelector(el) : el

	if (empty(elem)) {
		return false
	}

	let Body = document.querySelector('body'),
		HTML = document.querySelector('html')
	while (elem && elem !== Body && elem !== HTML) {
		let property = getStyleComputed(elem, ['display', 'opacity', 'visibility'])
		if (property.display === 'none') {
			return false
		}
		if (toString(property.opacity) === '0') {
			 return false
		}
		if (property.visibility === 'hidden') {
			return false
		}
		elem = elem.parentNode
	}
	return true
}
/**
 * Verifica si el elemento esta oculto
 * @memberOf Utils
 * @function isHiden
 * @param  {(String|Element)}  el
 * @return {Boolean}    Verdadero si esta oculto
 */
export function isHiden(el) {
	return el.hidden || !isVisible(el)
}
/**
 * Combinar 2 array
 * @memberOf Utils
 * @function merge
 * @param  {Array} n1 Matriz n1
 * @param  {Array} n2 Matriz n2
 * @return {Array}    El array resultante
 */
export function merge(n1, n2) {
	let l = +n2.length, j = 0, i = n1.length
	for ( ; j < l; j++) {
		n1[i++] = n2[j]
	}
	n1.length = i
	return n1
}

/**
 * ForEach Personalizado.
 * <p>Extiende la funcionalidad del forEach por defecto de los Array para todo tipo de elementos.</p>
 * <p>Para saber más visite <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" alt="Docuementación de ForEach">forEach en Developer Mozilla</a></p>
 * @memberOf Utils
 * @function each
 * @param  {(Object|Array)}   arr      El Objecto a iterar
 * @param  {Function} callback Función a ejecutar
 * @param  {(Object|Array)}   thisArg  Valor de la constante this
 */
export function each(arr, callback, thisArg) {
	if (empty(arr)) {
		return
	}

	if (typeof arr.forEach === 'function') {
		return arr.forEach(callback, thisArg)
	}

	if (!isFunction(callback)) {
		return arr
	}

	let T,
		k,
		O = Object(arr),
		len = O.length >>> 0

	if (len === 0 && isObject(O)) {
		len = Object.keys(O).length
	}

	if (!empty(thisArg)) {
		T = thisArg
	}

	for ( k in O) {
		if (hasProp(O, k)) {
			let KeyValue = O[k]
			callback.call(T, KeyValue, k, O)
		}
	}
}
/**
 * <p>Analiza y crea un nuevo elemento script que añada al body</p>
 * <p>Util para el uso de {@link Plugins.Ajax.XHR Ajax}, y cargas de html en linea</p>
 * @memberOf Utils
 * @function createScript
 * @param  {(String|Element|Array)} script
 * @return {Element}        El nuevo Script
 */
export function createScript(script) {
	let s = document.createElement('script'),
		_s
	s.type = 'text/javascript'
	if (empty(script)) {
		return _$(s)
	}

	_s = _$(script).Elem[0]
	if (!empty(_s.src)) {
		s.src = _s.src
	} else {
		s.textContent = _s.innerText
	}

	document.body.appendChild(s)

	if (_s.parentNode) {
		_s.parentNode.removeChild(_s)
	}

	return s
}
/**
 * Normaliza y busca los elementos Script
 * @memberOf Utils
 * @function script
 * @param  {Element} el El elemento script o padre del Script
 * @return {void}
 */
export function script(el) {
	if (empty(el)) {
		return createScript()
	}
	const _el = _$(el).Elem[0]
	if (_el.tagName && _el.tagName === 'SCRIPT') {
		createScript(_el)
	} else {
		_$(_el).find('script').each((s) => {
			createScript(s)
		})
	}
}
/**
 * Esta función recibe una etiqueta e intenta crear un Object HTMLElement de la misma
 * @memberOf Utils
 * @function parseHTML
 * @param  {String} data el texto HTML
 * @return {(Element|Array)}  El nuevo objeto o una matriz
 */
export function parseHTML(data) {
	let base, singleTag, result = [], ctx, _context,
		regexpSingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // eslint-disable-line

	if (typeof data !== 'string') {
		return []
	}

	data = data.trim()

	ctx = document.implementation.createHTMLDocument('')
	base = ctx.createElement('base')
	base.href = document.location.href
	ctx.head.appendChild( base )
	_context = ctx.body

	singleTag = regexpSingleTag.exec(data)

	if (singleTag) {
		result.push(document.createElement(singleTag[1]))
	} else {
		_context.innerHTML = data
		for (let i = 0; i < _context.childNodes.length; i++) {
			result.push(_context.childNodes[i])
		}
	}

	return result
}

/**
 * Regula y normaliza el nombre de un atributo, función, o variable para su uso en Javascript
 * @memberOf Utils
 * @function normName
 * @param  {String} name variable
 * @return {(String|void)}  el nombre normalizado o indefinido
 */
export function normName(name) {
	return typeof name !== 'string' ? undefined : name.replace(/-/g, '').toLowerCase()
}
/**
 * Transforma un Byte en su unidad correspondiente
 * @memberOf Utils
 * @function formatBytes
 * @param  {Number} bytes    Bytes a dar formato
 * @param  {Number} decimals Cantidad de decimales a mostrar
 * @return {String}
 */
export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Establece opciones por defecto a los Simple plugins
 * @memberOf Utils
 * @function SetOptinsOfData
 * @param  {(Element|Fascino|String)} el      Elemento
 * @param  {Object} defaults Opciones por defecto
 * @return {Object}         Nuevas Opciones
 */
export function setOptionsOfData(el, defaults) {
	let o = {}, data = _$(el).data()
	_$.each(data, (d, i) => {
		if (_$.hasProp(defaults, i)) {
			try{
				o[i] = JSON.parse(d)
			} catch (e) {
				o[i] = d
			}
		}
	})
	return _$.extend({}, defaults, o)
}

export default {
	createScript,
	getStyleComputed,
	each,
	empty,
	extend,
	hasProp,
	isArrayish,
	isElement,
	isFunction,
	isNumber,
	isObject,
	isSelector,
	isString,
	isVisible,
	merge,
	normName,
	parseHTML,
	script,
	setOptionsOfData
}
