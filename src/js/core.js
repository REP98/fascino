import camelCase from 'camelcase'
import {
	createScript,
	each,
	empty,
	extend,
	formatBytes,
	getStyleComputed,
	hasProp,
	isArrayish,
	isElement,
	isFunction,
	isFascinoElement,
	isNumber,
	isObject,
	isSelector,
	isString,
	isVisible,
	merge,
	normName,
	not,
	parseHTML,
	script
} from './utils.js'

import {
	EventHandler,
	Selector,
	Data
} from './kernel'

if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function(s) {
			let matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i = matches.length
			while (--i >= 0 && matches.item(i) !== this) { }
			return i > -1
		}
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		let el = this

		do {
			if (el.matches(s)) return el
			el = el.parentElement || el.parentNode
		} while (el !== null && el.nodeType === 1)
		return null
	}
}

/**
 * @memberOf Fascino
 * @private
 * @const {Number}
 * @default 3
 */
const NODETEXT = 3
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
const ListEvents = [
	'blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove',
	'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown',
	'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
]


/**
 * Convierte los datos tipo texto JSON pasados por atributos a un objecto valido
 * @memberOf Fascino
 * @private
 * @param  {String} data
 * @return {Object} El objeto JSON
 */
function normalizeData(data) {
	try {
		return JSON.parse(data)
	} catch (e) {
		return data
	}
}
/**
 * Valida y obtiene un elemento dado
 * @memberOf Fascino
 * @private
 * @param  {(String|Array|Fascino)} s
 * @return {(Object|Element|Array|undefined)}   El elemento en su expresión para su uso
 */
function normalizeElements(s) {
	let result
	if (isString(s)) {
		result = isSelector(s) ? _$(s) : parseHTML(s)
	} else if (isElement(s)) {
		result = [s]
	} else if (isFascinoElement(s)) {
		result = s
	} else if (isArrayish(s)) {
		result = s
	}

	return result
}
/**
 * Establece los atributos data de un elemento
 * @memberOf Fascino
 * @private
 * @param  {Object} DS   Object DATA
 * @param  {Element} elem Elemento a manipular
 * @param  {String} key  La clave del atributo data ejemplo data-valor; key = valor
 * @param  {(Object|String|Array)} data El resultado del atributo data
 * @return {(Object|undefine|Array)}  El resultado del atributo data obtenido
 */
function dataAttr(DS, elem, key, data) {
	let name

	if (empty(data) && elem.nodeType === 1) {
		name = 'data-' + key.replace(/[A-Z]/g, '-$&').toLowerCase()
		data = elem.getAttribute(name)

		if (typeof data === 'string') {
			data = normalizeData(data)
			DS.set(elem, key, data)
		} else {
			data = undefined
		}
	}
	return data
}

/**
 * Fascino, Encantador Framework JS para su fácil uso
 * @global
 * @namespace Fascino
 * @class
 * @extends {Kernel.Selector}
 */
export class Fascino extends Selector {
	/**
	 * @param  {(String|Element|Array|Function|Object)} selector
	 * @param  {HTMLElement} context
	 * @return {Fascino}
	 */
	constructor(selector, context = document) {
		super(selector, context)
		this.name = 'FascinoJS'
		this.length = this.Elem.length
		this.DS = new Data('CORE')
		this.ev = new EventHandler()
		this.version = '0.0.6'
	}
	
	/**
	 * Añade funciones a Fascino
	 * @memberOf Fascino
	 * @public
	 * @param {String} name Nombre de la función
	 * @param {Function} fn Función a asignar
	 * @return {Fascino}
	 */
	static addFn(name, fn) {
		if (!hasProp(this, name)) {
			this.prototype[name] = fn
		}

		return this		
	}
	/**
	 * Verifica si el elemento es seleccionable por el Selector
	 * @memberOf Fascino
	 * @public
	 * @param  {String} selectorString Selector CSS
	 * @return {(Element|Array)}
	 */
	matches(selectorString) {
		const elem = []
		this.each((el) => {
			if (el.matches(selectorString)) {
				elem.push(el)
			}
		})
		return elem
	}
	/**
	 * Recorre los elementos
	 * @memberOf Fascino
	 * @public
	 * @param  {...(Function|Array)} arg Argumentos
	 * @return {Fascino}
	 */
	each(...arg) {
		this.Elem.forEach(...arg)
		return this
	}
	/**
	 * Crea una nueva matriz de elementos a través de la función dada
	 * @memberOf Fascino
	 * @public
	 * @param  {Function} callback Función
	 * @return {Array}
	 */
	map(callback) {
		return this.Elem.map(callback)
	}
	/**
	 * Combina Elementos
	 * @memberOf Fascino
	 * @public
	 * @param  {Array} els Matriz de elementos nueva
	 * @return {Fascino}
	 */
	merge(els) {
		merge(this.Elem, els)
		return this
	}
	/**
	 * Obtiene la posición del elemento dentro de su padre
	 * @memberOf Fascino
	 * @public
	 * @param  {(Element|Null)} parent   El padre de los Elementos
	 * @param  {String} nodeName tipo de nombre de nodo entre los cuales buscar
	 * @return {Number}
	 */
	index(parent, nodeName) {
		let el = this.Elem[0], index = -1, child
		parent = empty(parent) ? el.parentNode() : normalizeElements(parent)

		if (empty(nodeName)) {
			child = _$(parent).children()
		} else {
			child = _$(parent).find(nodeName)
		}

		child.each((element, i) => {
			if (element === el) {
				index = i
			}
		})

		return index
	}
	/**
	 * Obtiene el Elemento solicitado por su posición dentro de la matriz de Elementos
	 * @memberOf Fascino
	 * @public
	 * @param  {Number} i Posición
	 * @return {Element}
	 */
	get(i) {
		if (i === undefined) {
			return this.Elem
		}
		return i < 0 ? this.Elem[i + this.length] : this.Elem[i]
	}
	/**
	 * Busca, valida y obtiene el elemento dado por su posición dentro de la matriz de elementos
	 * @memberOf Fascino
	 * @public
	 * @param  {Number} i posición del elemento
	 * @return {Fascino}
	 */
	eq(i) {
		return !isNaN(i) && this.length > 0 ? extend(_$(this.get(i)), { _prevObj: this }) : this
	}
	/**
	 * Obtiene el ultimo elemento de la matriz
	 * @memberOf Fascino
	 * @public
	 * @return {Element}
	 */
	last() {
		return this.eq(this.length - 1)
	}
	/**
	 * Obtiene el primer elemento de la matriz
	 * @memberOf Fascino
	 * @public
	 * @return {Element}
	 */
	first() {
		return this.eq(0)
	}
	/**
	 * Obtiene los elementos impares de la matriz
	 * @memberOf Fascino
	 * @public
	 * @return {(Element|Fascino)}
	 */
	odd() {
		let result = this.filter(function(el, i) {
			return i % 2 === 0
		})
		return extend(result, { _prevObj: this })
	}
	/**
	 * Obtiene los numero pares de la matriz
	 * @memberOf Fascino
	 * @public
	 * @return {(Element|Fascino)}
	 */
	even() {
		let result = this.filter(function(el, i) {
			return i % 2 !== 0
		})
		return extend(result, { _prevObj: this })
	}
	/**
	 * Crea una nueva selección de elemento que cumplan con la condición dada en la función
	 * @memberOf Fascino
	 * @public
	 * @param  {Function} fn Función para filtrar
	 * @return {Fascino}
	 */
	filter(fn) {
		if (isString(fn)) {
			let sel = fn
			fn = function(el) {
				return el.matches(sel)
			}
		}

		return extend(
			merge(_$().Elem, [].filter.call(this.Elem, fn)),
			{ _prevObj: this })
	}
	/**
	 * Busca un elemento hijo por su selector CSS
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)} sel Selector CSS valido
	 * @return {Fascino}
	 */
	find(sel) {
		let rEl = Array.from('')

		this.Elem.forEach((el)=>{
			rEl.push(
				[].concat(...Element.prototype.querySelectorAll.call(el, sel))
			)
		})

		return rEl.length === 0 ? [] : rEl.length === 1 ? _$(rEl[0]) : merge(_$().Elem, rEl)
	}
	/**
	 * Verifica si el elemento es hijo del Elemento seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)} s Selector CSS
	 * @return {Boolean}
	 */
	contains(s) {
		return this.find(s).length > 0
	}
	/**
	 * Private _isType
	 * @memberOf Fascino
	 * @private
	 * @param  {String}  prop propiedad tipo
	 * @return {Boolean}
	 */
	_isType(prop) {
		let res = false
		this.each((el) => {
			res = el[prop]
		})
		return res
	}
	/**
	 * Verifica de que tipo es el selector
	 * @memberOf Fascino
	 * @public
	 * @param  {*}  s
	 * @return {Boolean}
	 */
	is(s) {
		let result = false
		if (this.length === 0 ) {
			return false
		}

		if (s && hasProp(s, 'Elem')) {
			this.each((el) => {
				s.each((o) => {
					if (el === o) {
						result = true
						return
					}
				})
			})
		}

		if (isString(s)) {
			if (s === ':selected') {
				result = this._isType('selected')
			} else if (s === ':checked') {
				result = this._isType('checked')
			} else if (s === ':visible') {
				this.each((el) => {
					if (isVisible(el)) {
						result = true
					}
				})
			} else if (s === ':hidden') {
				this.each((el) => {
					if (el.getAttribute('type') === 'hidden' || isHiden(el)) {
						result = true
					}
				})
			} else if (s === ':disabled') {
				this.each((el) => {
					if (el.getAttribute('disabled') || _$(el).hasClass('disabled')) {
						result = true
					}
				})
			} else if (s === ':readonly') {
				this.each((el) => {
					if (el.getAttribute('readonly') || _$(el).hasClass('readonly')) {
						result = true
					}
				})
			} else {
				this.each((el) => {
					if (el.matches(s) || Element.prototype.matches.call(el, s)) {
						result = true
					}
				})
			}
		} else if (isArrayish(s)) {
			this.each((el) => {
				s.forEach((sel) => {
					if (el === sel) {
						result = true
					}
				})
			})
		} else if (s.nodeType === 1) {
			this.each((el) => {
				if (el === s) {
					result = true
				}
			})
		}

		return result
	}
	/**
	 * Busca y obtiene una propiedad de un elemento dado
	 * @memberOf Fascino
	 * @private
	 * @param  {String} n Nombre de la propiedad
	 * @param  {String} v Valor de la propiedad
	 * @return {Fascino}
	 */
	_prop(n, v) {
		if (this.length === 0) {
			return this
		}

		if (arguments.length === 1) {
			return n in this.Elem[0] ? this.Elem[0][n] : undefined
		}

		if (empty(v)) {
			v = ''
		}

		return this.each((el) => {
			el[n] = v
			if (n === 'innerHTML') {
				script(el)
			}
		})
	}
	/**
	 * Método público de Fascino._prop
	 * @memberOf Fascino
	 * @public
	 * @param  {String} n
	 * @param  {String} v
	 * @return {Fascino}
	 */
	prop(n, v) {
		return arguments.length === 1 ?
			this._prop(n) :
			this._prop(n, empty(v) ? '' : v)
	}
	/**
	 * Método privado que ayuda a establecer opciones a un elemento dado.
	 * @memberOf Fascino
	 * @private
	 * @param {(Element|NodeList)} newNode
	 * @param {Object} options
	 */
	_setOptions(newNode, options) {
		if (!empty(options)) {
			for (let key in options) {
				if (hasProp(options, key)) {
					let value = options[key]
					if (hasProp(this, key)) {
						_$(newNode)[key].apply(this, value)
					}
				}
			}
		}
	}
	/**
	 * Agrega un elemento al padre seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {(Element|Fascino|String)} node
	 * @param  {Object} options
	 * @return {Fascino}
	 */
	append(node, options) {
		if (this.length === 0) {
			return this
		}
		let newNode = normalizeElements(node)

		this._setOptions(newNode, options)

		return this.each((el) => {
			_$(newNode).each((nN, i) => {
				if (nN === el) {
					return
				}
				let child = i === 0 ? nN : nN.cloneNode(true)
				script(child)
				if (child.tagName && child.tagName !== 'SCRIPT') {
					el.append(child)
				}
			})
		})
	}
	/**
	 * Agrega el elemento seleccionado al nuevo padre
	 * @memberOf Fascino
	 * @public
	 * @param  {(Element|Fascino|String)} node
	 * @param  {Object} options
	 * @return {Fascino}
	 */
	appendTo(node, options) {
		if (this.length === 0) {
			return this
		}
		let newNode = normalizeElements(node)

		this._setOptions(newNode, options)

		return this.each((el) => {
			_$(newNode).each((p, i) => {
				if (el === p) {
					return p
				}
				p.append(
					i === 0 ? el : el.cloneNode(true)
				)
			})
		})
	}
	/**
	 * Agrega un nuevo elemento al principio del padre seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {(Element|Fascino|String)} node
	 * @param  {Object} options
	 * @return {Fascino}
	 */
	prepend(node, options) {
		if (this.length === 0) {
			return this
		}
		let newNode = normalizeElements(node)

		this._setOptions(newNode, options)

		return this.each((el, elIndex) => {
			_$(newNode).each((e) => {
				if (el === e) return
				let child = elIndex === 0 ? e : e.cloneNode(true)
				script(child)
				if (child.tagName && child.tagName !== 'SCRIPT') {
					el.prepend(child)
				}
			})
		})
	}
	/**
	 * Agrega el elemento seleccionado al nuevo padre
	 * @memberOf Fascino
	 * @public
	 * @param  {(Element|Fascino)} node
	 * @param  {Object} options
	 * @return {Fascino}
	 */
	prependTo(node, options) {
		if (this.length === 0) {
			return this
		}
		let newNode = normalizeElements(node)

		this._setOptions(newNode, options)

		return this.each((el)=>{
			_$(newNode).each((parent, parIndex) => {
				if (el === parent) return parent
				_$(parent).prepend(parIndex === 0 ? el : el.cloneNode(true))
			})
		})
	}
	/**
	 * Obtiene los hijos de un elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)} sel Selector o elemento hijo a buscar
	 * @return {Array} Lista de hijos
	 */
	children(sel) {
		let element = this.Elem[0]
		if (empty(sel)) {
			return [].concat(...element.children)
		}


		return [].concat(...element.children)
			.filter(child => child.matches(sel))
	}
	/**
	 * Clona el elemento seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {Boolean} deep Verdadero si los hijos del nodo también deben ser clonados
	 * @return {Array}
	 */
	clone(deep = false) {
		let res = []
		if (empty(deep)) {
			deep = false
		}

		this.each((e) => {
			let el = e.cloneNode(deep)
			res.push(el)
		})
		return merge(_$().Elem, res)
	}
	/**
	 * Crea una copia de un nodo desde un documento externo
	 * @memberOf Fascino
	 * @public
	 * @param  {Boolean} deep Verdadero si los hijos del nodo también deben ser importados
	 * @return {Array}
	 */
	import(deep = true) {
		let res = []
		if (empty(deep)) {
			deep = true
		}
		this.each((e) => {
			res.push(document.importNode(e, deep))
		})
		return merge(_$().Elem, res)
	}
	/**
	 * Transfiere un node desde otro document al documento del método
	 * @memberOf Fascino
	 * @public
	 * @return {Array}
	 */
	adopt() {
		let res = []
		this.each((e) => {
			res.push(document.adoptNode(e))
		})
		return merge(_$().Elem, res)
	}
	/**
	 * Obtiene el contenido de un Iframe o Template
	 * @memberOf Fascino
	 * @public
	 * @return {Array}
	 */
	contents() {
		if (this.length === 0) {
			return this
		}
		let res = []
		this.each((el) => {
			let content
			if (el.nodeName === 'IFRAME') {
				content = el.contentDocument || el.contentWindow.document
			} else if (el.nodeName === 'TEMPLATE') {
				content = el.content
			}
			res.push(content)
		})

		return merge(_$().Elem, res)
	}
	/**
	 * Obtiene el o los padres de un elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)} sel Selector del padre a buscar
	 * @return {Array} Lista de Padres
	 */
	parents(sel) {
		const parents = []
		this.each((el) => {
			let ancestor = el.parentNode
			while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODETEXT) {
				if (ancestor.matches(sel)) {
					parents.push(ancestor)
				}

				ancestor = ancestor.parentNode
			}
		})

		return parents
	}
	/**
	 * Obtiene el padre del elemento
	 * @memberOf Fascino
	 * @public
	 * @return {Array}
	 */
	parent() {
		const parent = []
		this.each((el) => {
			parent.push(el.parentNode)
		})
		return parent
	}
	/**
	 * Obtiene o busca el hermano anterior
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)} sel
	 * @return {Array}
	 */
	prev(sel) {
		let el = this.Elem[0],
			previous = el.previousElementSibling

		if (empty(sel)) {
			return [previous]
		}

		while (previous) {
			if (previous.matches(sel)) {
				return [previous]
			}

			previous = previous.previousElementSibling
		}

		return []
	}
	/**
	 * Obtiene o busca el hermano siguiente
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)}   sel
	 * @return {Array}
	 */
	next(sel) {
		let el = this.Elem[0],
			next = el.nextElementSibling

		if (empty(sel)) {
			return [next]
		}

		while (next) {
			if (next.matches(sel)) {
				return [next]
			}

			next = next.nextElementSibling
		}

		return []
	}
	/**
	 * Busca el ascendiente más cercano al elemento seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)} sel Selector del ascendiente a buscar
	 * @return {(Fascino|Element|Array|Null)}
	 */
	closest(sel) {
		if (this.length === 0) return this

		if (!sel) {
			return this.parent(sel)
		}
		const res = []
		this.each((el) => {
			if ('closest' in el) {
				res.push(el.closest(sel))
			} else {
				while (el) {
					if (!el) break
					if (el.matches(sel)) {
						res.push(el)
						return
					}
					el = el.parentElement
				}
			}
		})
		return res
	}
	/**
	 * Vacía el contenido HTML de un elemento
	 * @memberOf Fascino
	 * @public
	 * @return {Fascino}
	 */
	emptyHtml() {
		return this.each((el) => {
			el.innerHTML = ''
		})
	}
	/**
	 * Vacía el valor de un elemento
	 * @memberOf Fascino
	 * @public
	 * @return {Fascino}
	 */
	emptyVal() {
		return this.each((el) => {
			el.value = ''
		})
	}
	/**
	 * Encierra un elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(Element|String)} el
	 * @return {Fascino} El nuevo padre
	 */
	wrap( el ) {
		if (this.length === 0) {
			return
		}

		const wrapper = _$(normalizeElements(el))

		if (!wrapper.length) {
			return
		}

		let res = []

		this.each((el) => {
			let _target, _wrapper

			_wrapper = _$(wrapper.clone(true))
			_wrapper.insertBefore(el)

			_target = _wrapper
			while (_target.children().length) {
				_target = _target.children().eq(0)
			}
			_target.append(el)

			res.push(_wrapper.e(0))
		})

		return _$(res)
	}
	/**
	 * Busca y encierra todos los elemento del tipo dado
	 * @memberOf Fascino
	 * @public
	 * @param  {(NodeList|Fascino-Object|Object|Array)} el
	 * @return {Fascino}
	 */
	wrapAll( el ) {
		let wrapper, _wrapper, _target

		if (this.length === 0) {
			return
		}

		wrapper = _$(normalizeElements(el))

		if (!wrapper.length) {
			return
		}

		_wrapper = _$(wrapper.clone(true))
		_wrapper.insertBefore(this.Elem[0])

		_target = _wrapper
		while (_target.children().length) {
			_target = _target.children().eq(0)
		}

		this.each((e) => {
			_target.append(e)
		})

		return _wrapper
	}
	/**
	 * Busca y encierra los hijo de un elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(Elemento|Fascino|String)} el
	 * @return {Fascino}
	 */
	wrapInner( el ) {
		if (this.length === 0) {
			return
		}

		const wrapper = _$(normalizeElements(el))

		if (!wrapper.length) {
			return
		}

		let res = []

		this.each((e) => {
			let elem = _$(e),
				html = elem.html(),
				wrp = _$(wrapper.clone(true))

			elem.html(wrp.html(html))
			res.push(wrp)
		})

		return _$(res)
	}
	/**
	 * Desencierra los elemento
	 * @memberOf Fascino
	 * @public
	 * @return {Fascino}
	 */
	unwrap() {
		return this.each((el) => {
			let p = el.parentNode
			while (el.firstChild) {
				p.insertBefore(el.firstChild, el)
			}
			p.removeChild(el)
		})
	}
	/**
	 * Elimina uno o todos los elementos del DOM
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element|Array)} sel Selector a eliminar
	 * @return {Array}
	 */
	remove(sel) {
		let out = !empty(sel) ?
				this.Elem.filter((el) => {
					return el.matches(sel)
				}) :
				this.Elem,
			res = []
		out.forEach((el) => {
			res.push(el.parentNode.removeChild(el))
		})

		return [].concat(...this.Elem, ...res)
	}
	/**
	 * Inserta un elemento antes del elemento seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {Element} elements
	 * @return {Fascino}
	 */
	insertBefore(elements) {
		let _el = _$(elements)
		return this.each((el) => {
			_el.each((_e, i) => {
				if (_e === el) {
					return
				}
				let p = _e.parentNode
				if (p) {
					p.insertBefore(
						i === 0 ? el : el.cloneNode(true),
						_e
					)
				}
			})
		})
	}
	/**
	 * Inserta un elemento después del elemento seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {Element} elements
	 * @return {Fascino}
	 */
	insertAfter(elements) {
		let _el = _$(elements)
		return this.each((el) => {
			_el.each((_e, i) => {
				if (_e === el) {
					return
				}
				let p = _e.parentNode
				if (p) {
					p.insertBefore(
						i === 0 ? el : el.cloneNode(true),
						_e.nextSibling
					)
				}
			})
		})
	}
	/**
	 * Agrega un elemento o etiquetas HTML después del elemento dado
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)} html
	 * @param  {String} position la posición equivale a afterbegin o afterend; @default afterbegin
	 * @return {Fascino}
	 */
	after(html, position = 'afterbegin') {
		return this.each((el) => {
			if (isString(html)) {
				el.insertAdjacentHTML(position, html)
			} else {
				_$(html).insertAfter(el)
			}
		})
	}
	/**
	 * Agrega un elemento o HTML antes del elemento dado
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Element)} html
	 * @param  {String} position la posición equivale a beforebegin o beforeend; @default beforebegin
	 * @return {Fascino}
	 */
	before(html, position = 'beforebegin') {
		return this.each((el) => {
			if (isString(html)) {
				el.insertAdjacentHTML(position, html)
			} else {
				_$(html).insertBefore(el)
			}
		})
	}
	/**
	 * Obtiene o Establece el texto al elemento seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Null)} txt
	 * @return {(Fascino|String)}
	 */
	text(txt) {
		return empty(txt) ?
				this._prop('textContent') :
				this._prop('textContent', txt)
	}
	/**
	 * Obtiene o Establece el contenido HTML del elemento seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Fascino|Element)} html
	 * @return {(Fascino|String)}
	 */
	html(html) {
		let value = []
		if (this.length === 0) {
			return this
		}

		if (html === '') {
			return this._prop('innerHTML', '')
		}

		if (empty(html)) {
			return this._prop('innerHTML')
		}

		if (Array.isArray(html)) {
			value = [].concat(...value, ...html)
		} else if (html instanceof Element || isFascinoElement(html)) {
			let res = [],
				h = (html instanceof Element) ? _$(html) : html

			h.each((v) => {
				res.push(_$(v).outerHTML())
			})

			value = [].concat(...value, ...res)
		} else {
			value.push(html)
		}

		this._prop('innerHTML',
			value.length === 1 && empty(value[0]) ? '' : value.join('\n')
		)

		return this
	}
	/**
	 * Obtiene o Establece el valor de un elemento dado
	 * @memberOf Fascino
	 * @public
	 * @param  {String} value Valor del input, textarea o elemento que contenta value
	 * @return {(Fascino|String)}
	 */
	val(value) {
		if (not(value)) {
			return this.length === 0 ? undefined : this.Elem[0].value
		}

		return this.each((el) => {
			if (typeof el.value != 'undefined') {
				el.value = value
			} else {
				_$(el).html(value)
			}
		})
	}
	/**
	 * Obtiene el HTML o envoltura del elemento dado
	 * @memberOf Fascino
	 * @public
	 * @return {String}
	 */
	outerHTML() {
		return this._prop('outerHTML')
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
	addClass(...arg) {
		return this.each((e) => {
			e.classList.add(...arg)
		})
	}
	/**
	 * Elimina Clases del elemento seleccionado
	 * @memberOf Fascino
	 * @public
	 * @param  {...String} args
	 * @return {Fascino}
	 */
	removeClass(...args) {
		return this.each((e) => {
			e.classList.remove(...args)
		})
	}
	/**
	 * Intercambia clases del elemento dado
	 * @memberOf Fascino
	 * @public
	 * @param  {...String} args Lista de Clases a cambiar
	 * @return {Fascino}
	 */
	toggleClass(...args) {
		return this.each((e) => {
			e.classList.toggle(...args)
		})
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
	replaceClass(...args) {
		return this.each((e) => {
			e.classList.replace(...args)
		})
	}
	/**
	 * Verifica si el elemento posee una clase
	 * @memberOf Fascino
	 * @public
	 * @param  {String}  className Nombre de la clase
	 * @return {Boolean} Verdadero si existe
	 */
	hasClass(className) {
		return this.Elem[0].classList.contains(className)
	}
	/**
	 * Tamaño Externo del elemento
	 * @memberOf Fascino
	 * @private
	 * @param  {String} prop
	 * @param  {String} val
	 * @return {(String|Number)}
	 */
	_sizeOut(prop, val) {
		let el, size, style, result

		if (this.length === 0) {
			return
		}

		if (!empty(val) && typeof val !== 'boolean') {
			return this.each((el) => {
				if (el === window || el === document) {
					return
				}
				let h, style = getStyleComputed(el),
					bs = prop === 'width' ? parseInt(style['border-left-width']) + parseInt(style['border-right-width']) : parseInt(style['border-top-width']) + parseInt(style['border-bottom-width']),
					pa = prop === 'width' ? parseInt(style['padding-left']) + parseInt(style['padding-right']) : parseInt(style['padding-top']) + parseInt(style['padding-bottom'])

				h = _$(el)[prop](val)[prop]() - bs - pa
				el.style[prop] = h + 'px'
			})
		}

		el = this.Elem[0]
		size = el[prop === 'width' ? 'offsetWidth' : 'offsetHeight']
		style = getStyleComputed(el)
		result = size + parseInt(style[prop === 'width' ? 'margin-left' : 'margin-top']) + parseInt(style[prop === 'width' ? 'margin-right' : 'margin-bottom'])
		return val === true ? result : size
	}
	/**
	 * Tamano real del elemento
	 * @memberOf Fascino
	 * @private
	 * @param  {String} pro
	 * @param  {String} val
	 * @return {(fascino|Number|NaN|String)}
	 */
	_size(prop, val) {
		if (this.length === 0) {
			return NaN
		}

		if (empty(val)) {
			let el = this.Elem[0]
			if (prop === 'height') {
				return el === window ? window.innerHeight : el === document ? el.body.clientHeight : parseInt(getComputedStyle(el).height)
			} else if (prop === 'width') {
				return el === window ? window.innerWidth : el === document ? el.body.clientWidth : parseInt(getComputedStyle(el).width)
			}
		}

		return this.each((el) => {
			if (el === window || el === document) {
				return
			}
			el.style[prop] = isNaN(val) ? val : val + 'px'
		})
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
	style(...arg) {
		if (this.length === 0) {
			return this
		}

		if (arg.length === 0) {
			return getComputedStyle(this.Elem[0])
		}

		if (arg.length === 1) {
			if (isArrayish(arg[0])) {
				let getStyle = {}, i = 0
				this.each((el) => {
					let id = el.getAttribute('id'),
						prefix = !empty(id) ? id : el.tagName+i
					getStyle[prefix] = {}
					arg[0].forEach( (nameStyle) => {
						getStyle[prefix][nameStyle] = el.style[nameStyle]
					})
					i++
				})
				return getStyle
			} else if (isObject(arg[0])) {
				return this.each((el) => {
					for (let key in arg[0]) {
						if (hasProp(arg[0], key)) {
							let value = arg[0][key]
							el.style.setProperty(key, value)
						}
					}
				})
			} else if (arg[0].indexOf(':') === 0) {
				return getStyleComputed(this.Elem[0], null, arg[0])
			} else if (arg[0] === '*' || arg[0] === 'all') {
				return getStyleComputed(this.Elem[0])
			} else {
				let st = getStyleComputed(this.Elem[0])
				return arg[0] in st ? st[arg[0]] : ''
			}
		}

		if (arg.length === 2 || arg.length === 3) {
			return this.each((el) => {
				el.style.setProperty(...arg)
			})
		}

		return this
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
	removeStyle(...name) {
		if (empty(name) || this.length === 0) {
			return this
		}

		return this.each((el) => {
			name.forEach((n) => {
				el.style.removeProperty(n)
			})
		})
	}
	/**
	 * Obtiene o estable el valor de la barra de desplazamiento vertical
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Number)} val
	 * @return {(String|Number|Fascino)}
	 */
	scrollTop(val) {
		if (this.length === 0) {
			return this
		}

		if (not(val)) {
			return this.Elem[0] === window ? window.pageYOffset : this.Elem[0].scrollTop
		}

		return this.each((el) => {
			el.scrollTop = val
		})
	}
	/**
	 * Obtiene o estable el valor de la barra de desplazamiento Horizontal
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Number)} val
	 * @return {(String|Number|Fascino)}
	 */
	scrollLeft(val) {
		if (this.length === 0) {
			return this
		}

		if (empty(val)) {
			return this.Elem[0] === window ? window.pageXOffset : this.Elem[0].scrollLeft
		}

		return this.each((el) => {
			el.scrollLeft = val
		})
	}
	/**
	 * Obtiene o Establece el Ancho total del elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Number)} val
	 * @return {(String|Number|Fascino)}
	 */
	outerWidth(val) {
		return this._sizeOut('width', val)
	}
	/**
	 * Obtiene o Establece la Altura total del elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Number)} val
	 * @return {(String|Number|Fascino)}
	 */
	outerHeight(val) {
		return this._sizeOut('height', val)
	}
	/**
	 * Obtiene o Establece la posición del Elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {Object} val Objeto {top,left}
	 * @return {(Object|Fascino)}
	 */
	offset(val) {
		if (this.length === 0) {
			return this
		}

		if (empty(val)) {
			const rect = this.Elem[0].getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}

		return this.each((el) => {
			let offset = _$(el).offset(),
				top = val.top,
				left = val.left,
				position = getStyleComputed(el).position

			if (position === 'static') {
				_$(el).style('position', 'relative')
			}

			if (['absolute', 'fixed'].indexOf(position) === -1) {
				top = top - offset.top
				left = left - offset.left
			}

			_$(el).style({
				top: top,
				left: left
			})
		})
	}
	/**
	 * Obtiene la Posición del elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {Boolean} margin Verdader si se incluye el margen
	 * @return {(Object|Undefined)}
	 */
	position(margin = false) {
		if (this.length === 0) {
			return undefined
		}

		if (typeof margin != 'boolean') {
			try {
				margin = JSON.parse(margin)
			} catch (e) {
				margin = false
			}
		}

		let ml = 0, mt = 0

		if (margin) {
			let s = getStyleComputed(this.Elem[0])
			ml = parseInt(s['margin-left'])
			mt = parseInt(s['margin-top'])
		}

		return {
			top: this.Elem[0].offsetTop - mt,
			left: this.Elem[0].offsetLeft - ml
		}
	}
	/**
	 * Obtiene o Establece la posición horizontal del elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Number)}  v Nueva posición
	 * @param  {Boolean} m Si se debe incluir el margen
	 * @return {(String|Number|NaN)}
	 */
	left(v, m = false) {
		if (this.length === 0) {
			return NaN
		}
		if (typeof v === 'boolean') {
			m = v
			v = undefined
		}
		if (empty(v)) {
			return this.position(m).left
		}

		return this.style('left', !isNaN(v) ? v + 'px' : v)
	}
	/**
	 * Obtiene o Establece la posición vertical del elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(String|Number)}  v Nueva posición
	 * @param  {Boolean} m Si se debe incluir el margen
	 * @return {(String|Number|NaN)}
	 */
	top(v, m = false) {
		if (this.length === 0) {
			return NaN
		}
		if (typeof v === 'boolean') {
			m = v
			v = undefined
		}
		if (empty(v)) {
			return this.position(m).top
		}

		return this.style('top', !isNaN(v) ? v + 'px' : v)
	}
	/**
	 * Obtiene el Ancho interno del elemento
	 * @memberOf Fascino
	 * @public
	 * @return {Number}
	 */
	innerWidth() {
		return this.Elem[0] === window ? window.innerWidth : this.Elem[0].clientWidth
	}
	/**
	 * Obtiene el Alto interno del elemento
	 * @memberOf Fascino
	 * @public
	 * @return {Number}
	 */
	innerHeight() {
		return this.Elem[0].clientHeight
	}
	/**
	 * Obtiene o establece la altura del elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(Number|String)} val
	 * @return {(Number|String|Fascino)}
	 */
	height(val) {
		return this._size('height', val)
	}
	/**
	 * Obtiene o establece la anchura del elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {(Number|String)} val
	 * @return {(Number|String|Fascino)}
	 */
	width(val) {
		return this._size('width', val)
	}
	/**
	 * Oculta un ELemento y ejecuta la función dada
	 * @memberOf Fascino
	 * @public
	 * @param  {Function} callback
	 * @return {Fascino}
	 */
	hide(callback) {
		return this.each((el) => {
			let display = _$(el).style('display'),
				opacity = _$(el).style('opacity')

			if (display != 'none' && parseInt(opacity) != 0) {
				_$(el).origin('display', display)
				_$(el).origin('opacity', opacity)

				_$(el).style({
					display: 'none',
					opacity: 0
				})
			}
			if (isFunction(callback)) {
				callback.call(this, el)
			}
		})
	}
	/**
	 * Muestra un elemento y ejecuta la función dada
	 * @memberOf Fascino
	 * @public
	 * @param  {Function} callback
	 * @return {Fascino}
	 */
	show(callback) {
		return this.each((el) => {
			let display = _$(el).origin('display', undefined, 'block'),
				opacity = _$(el).origin('opacity', undefined, '1'),
				setDisplay = 'block', setOpacity = 1

			if (display && display !== 'none') {
				setDisplay = display
			}
			if (opacity && opacity !== 0) {
				setOpacity = opacity
			}

			_$(el).style({
				display: setDisplay,
				opacity: setOpacity
			})

			if (isFunction(callback)) {
				callback.call(this, el)
			}
		})
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
	attr(...args) {
		if (this.length === 0) {
			return this
		}
		if (args.length === 0) {
			if (this.Elem[0].hasAttributes()) {
				const Attr = this.Elem[0].attributes
				Array.from(Attr).forEach((a)=>{
					this.Elem[0].setAttribute(a.nodeName, a.nodeValue)
				})
				return Attr
			} else {
				return this
			}
		}
		if (args.length === 1) {
			if (isArrayish(args[0])) {
				const Attrs ={}
				let i = 0
				this.each((el) => {
					let id = el.getAttribute('id'),
						prefix = !not(id) ? id : el.tagName+i
					Attrs[prefix] = {}
					args[0].forEach((a) => {
						if (el.hasAttributes(a)) {
							Attrs[prefix][a] = el.getAttribute(a)
						} else {
							Attrs[prefix][a] = false
						}
					})
					i++
				})
				return Attrs
			} else if (isObject(args[0])) {
				return this.each((el) => {
					for (let key in args[0]) {
						if (hasProp(args[0], key)) {
							let value = normalizeData(args[0][key])
							if (key in el) {
								el[key] = value
							} else {
								el.setAttribute(key, value)
							}
						}
					}
				})
			} else if (isString(args[0])) {
				return this.Elem[0].hasAttributes(args[0]) ? this.Elem[0].getAttribute(args[0]) : false
			} else if (isFunction(args[0])) {
				return this.each((el) => {
					if (el.hasAttributes()) {
						let a = el.attributes
						a.forEach((attr) => {
							args[0].call(el, [attr.nodeName, attr.nodeValue, attr])
						})
					}
				})
			}
		}

		return this.each((el) => {
			let key = args[0],
				value = normalizeData(args[1])
			if (key in el) {
				el[key] = value
			} else {
				el.setAttribute(key, value)
			}
		})
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
	removeAttr(...args) {
		return this.each((el) => {
			let attrs = []
			if (args.length == 1 && !isArrayish(args[0])) {
				attrs.push(args[0])
			} else {
				attrs = [].slice(args)
			}

			attrs.forEach((a)=>{
				el.removeAttribute(a)
			})
		})
	}
	/**
	 * Verifica si el elemento tiene el atributo dado
	 * @memberOf Fascino
	 * @public
	 * @param  {String}  attr
	 * @return {Boolean}
	 */
	hasAttr(attr) {
		if (empty(attr)) {
			return false
		}

		return this.Elem[0].hasAttribute(attr)
	}
	/**
	 * Alterna los Atributos y su valor
	 * @memberOf Fascino
	 * @public
	 * @param  {String} name  Nombre del Atributo
	 * @param  {String} value Valor d el Atributo
	 * @return {Fascino}
	 */
	toggleAttr(name, value = undefined) {
		let _this = this
		return this.each((el) => {
			if (name in el && el[name] !== value) {
				el[name] = value
			}
			if (!empty(name) && not(value)) {
				if (el.hasAttributes(name)) {
					el.removeAttribute(name)
				}
			} else {
				_this.Elem = [el]
				_this.attr(name, value)
			}
		})
	}
	/**
	 * Elimina todos los atributos de un elemento
	 * @memberOf Fascino
	 * @public
	 * @return {Fascino}
	 */
	cleanAttr() {
		return this.each((el) => {
			if (el.hasAttributes()) {
				let attr = el.attributes
				attr.forEach((a) => {
					el.removeAttribute(a.nodeName)
				})
			}
		})
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
	data(...args) {
		let ds,
			attrs,
			i

		const _this = this
		if (args.length === 0) {
			ds = this.DS.get(this.Elem[0])
			if (this.Elem[0].nodeType === 1) {
				attrs = this.Elem[0].attributes
				i = attrs.length
				while (i--) {
					if (attrs[i]) {
						let name = attrs[i].name
						if (name.indexOf('data-') === 0) {
							name = camelCase(name.slice( 5 ))
							dataAttr(_this.DS, this.Elem[0], name, ds[name])
						}
					}
				}
			}
			return ds
		}
		if (args.length === 1) {
			if (isArrayish(args[0])) {
				let res = {},
					i = 0
				this.each((el) => {
					let id = el.getAttribute('id'),
						prefix = !not(id) ? id : el.tagName+i
					args[0].forEach( (d) => {
						let re = this.DS.get(el, args[0])
						if (not(re)) {
							if (el.nodeType === 1) {
								re = el.hasAttributes(`data-${args[0]}`) ? el.getAttribute(`data-${args[0]}`) : re
							}
						}
						res[prefix] = re
					})
					i++
				})
				return res
			} else if (isObject(args[0])) {
				return this.each((el) => {
					for (let key in args[0]) {
						if (hasProp(args[0], key)) {
							let value = normalizeData(args[0][key])
							this.DS.set(el, key, value)
						}
					}
				})
			} else if (isString(args[0])) {
				let res = this.DS.get(this.Elem[0], args[0]),
					el = this.Elem[0]
				
				if (!res || not(res)) {
					if (el.nodeType === 1) {
						res = el.hasAttributes(`data-${args[0]}`) ? el.getAttribute(`data-${args[0]}`) : res
					}
				}
				return res
			}
		}

		return this.each((el) => {
			this.DS.set(el, args[0], args[1])
		})
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
	removeData(...keys) {
		return this.each((el) => {
			this.DS.remove(el, ...keys)
		})
	}
	/**
	 * Verifica si el Elemento tiene un atributo data dado
	 * @memberOf Fascino
	 * @public
	 * @param  {String}  key Nombre sin el data
	 * @return {Boolean}
	 */
	hasData(key) {
		if (empty(key)) {
			return false
		}

		if (this.DS.has(this.Elem[0], key)) {
			return this.DS.get(this.Elem[0], key)
		}

		if (hasProp(this.Elem[0].dataset, key)) {
			return true
		}

		return this.hasAttr(`data-${key}`)
	}
	/**
	 * Alterna entre los atributos data
	 * @memberOf Fascino
	 * @public
	 * @param  {String} name  Nombre del Atributo sin el data
	 * @param  {(String|Object|Array)} value Valor del atributo data
	 * @return {(Boolean|String|Object|Array|Fascino)}
	 */
	toggleData(name, value) {
		if (arguments.length === 0) {
			return false
		}

		if (this.hasData()) {
			return this.DS.access(this.ELem[0], name, value)
		}

		return this.toggleAttr(`data-${name}`, value)
	}
	/**
	 * Obtiene o Almacena los datos Originales del elemento para su verificación
	 * @memberOf Fascino
	 * @public
	 * @param  {String} name  Nombre
	 * @param  {(String|Array|Object|Undefined)} value Valor
	 * @param  {(String|Array|Object)} def   Valor por defecto
	 * @return {(String|Object|Array|Fascino)}
	 */
	origin(name, value, def) {
		if (this.length === 0) {
			return this
		}

		if (empty(name) && not(value)) {
			return this.DS.access(this.Elem)
		}

		if (not(value)) {
			let res = this.DS.access(this.Elem, `origin-${name}`)
			return !not(res) ? res : def
		}

		this.data(`origin-${name}`, value)

		return this
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
	on(eventsList, sel, handler, options) {
		return this.each((el) => {
			this.ev.on(el, eventsList, sel, handler, options)
		})
	}
	/**
	 * Desvincula el Evento para un elemento
	 * @memberOf Fascino
	 * @public
	 * @param  {String} eventsList El nombre del Evento
	 * @param  {String} sel Namespace o selector
	 * @param  {Function} handler Función a ejecutar
	 * @param  {Object} options Opciones de AddEventListiner
	 * @return {Fascino}
	 */
	off(eventsList, sel, options) {
		return this.each((el) => {
			this.ev.off(el, eventsList, sel, options)
		})
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
	one(events, sel, handler, options) {
		return this.each((el) => {
			this.ev.one(el, events, sel, handler, options)
		})
	}
	/**
	 * Dispara o Crea un Evento Personalizado
	 * @memberOf Fascino
	 * @public
	 * @param  {String} name Nombre del Evento
	 * @param  {Object} data Información del Evento
	 * @return {(void|Fascino)}
	 */
	fire(name, data) {
		var _name = normName(name), newEv

		if(['submit', 'reset'].indexOf(_name) > -1){
			if(this.Elem[0].nodeName === 'FORM'){
				this.Elem[0][_name].call(this.Elem[0])
			} else {
				let form = this.parents('form')
				form.Elem[0][_name].call(form.Elem[0])
			}
			return this
		}

		if (ListEvents.indexOf(_name) > -1) {
			this.Elem[0][_name].call(this.Elem[0])
		}

		newEv = this.ev.createEv(name, data)

		return this.each((el) => {
			let customEvent = _$(el).data('customEvent'),
				et = {}

			et[_name] = newEv
			if(not(customEvent)) {
				_$(el).data('customEvent', et)
			} else {
				_$(el).data('customEvent', extend({}, customEvent, et))
			}
			this.ev.fire(el, newEv)
		})
	}
	/**
	 * Dispara un evento
	 * @memberOf Fascino
	 * @public
	 * @param  {String} name Nombre del Evento
	 * @param  {Object} data Información del evento
	 * @return {Fascino}
	 */
	trigger(name, data) {
		var _name = normName(name)
		return this.each((el) => {
			if (ListEvents.indexOf(_name) > -1) {
				el[_name].call(el)
			} else if(_$(el).hasData('customEvent') ){
				let customEvent = _$(el).data('customEvent')
				if(!not(customEvent) && hasProp(customEvent, _name)){
					this.ev.fire(el, customEvent[_name])
				} else {
					_$(el).fire(name, data)
				}
			}
		})
	}
	/**
	 * Crea el evento hover
	 * @memberOf Fascino
	 * @public
	 * @param  {Function} fnOver Función de entrada
	 * @param  {Function} fnOut  Función de Salida
	 * @return {Fascino}
	 */
	hover(fnOver, fnOut) {
		return this.each((el) => {
			this.on('mouseenter', fnOver).on('mouseleave', fnOut)
		})
	}
	/**
	 * Obtiene las lista de eventos asignados aun elemento
	 * @param  {String} name  Nombre del Evento
	 * @param  {Number} index Posición del evento a buscar
	 * @return {Object}
	 */
	getEvent(name, index) {
		return this.ev.get(this.Elem[0], name, index)
	}
}

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
	'border'
].forEach((name) => {
	Fascino.addFn(name, function(val, pseudo){
		if (this.length === 0) {
			return
		}
		if (isString(val)) {
			if (val.indexOf(':') === 0) {
				pseudo = val
				val = undefined
			}
		}

		if (empty(val)) {
			let s = getStyleComputed(this.Elem[0], null, !empty(pseudo) ? pseudo : ''),
				res = {}
			if (name !== 'border') {
				res = {
					top: parseInt(s[`${name}-top`]),
					right: parseInt(s[`${name}-right`]),
					bottom: parseInt(s[`${name}-bottom`]),
					left: parseInt(s[`${name}-left`]),
				}
			} else {
				res = {
					top: parseInt(s['border-top-width']),
					right: parseInt(s['border-right-width']),
					bottom: parseInt(s['border-bottom-width']),
					left: parseInt(s['border-left-width'])
				}
			}
			return res
		}

		return this.each((el) => {
			if (isArrayish(val)) {
				_$(el).style(name, val.join(' '))
			} else if (isObject(val)) {
				let res = {},
					ext = name === 'border' ? '-width' : ''
				for (let i in val) {
					if (hasProp(val, i)) {
						res[`${name}-${i}${ext}`] = val[i]
					}
				}
				_$(el).style(res)
			} else {
				_$(el).style(name, val)
			}
		})
	})
})

ListEvents.forEach((n) => {
	Fascino.addFn(n, function(s, f, o) {
		return arguments.length > 0 ? this.on(n, s, f, o) : this.fire(n, {detail: 'Fire '+n})
	})
})

/**
 * Fascino desde el Navegador <br>
 * Esta variable sera la que interactué desde el navegador
 * @global
 * @namespace _$
 * @param  {(String|Function|Element|Object)} selector Selector CSS o HTMLElement o Array de HTMLElememnt
 * @param  {(HTMLElement|document)} context  Entorno de selección
 * @return {Fascino} Class [Fascino]{@link Fascino}
 */
export function _$(selector, context) {/* eslint one-var: 0, no-var: 0 */
	return new Fascino(selector, context)
}

if (typeof window._$ === 'undefined') {
	window._$ = _$
}

extend(_$, {
	/**
	 * @function _$.camelCase
	 * @memberOf _$
	 * @public
	 * @copyright {@link https://sindresorhus.com/ Sindre Sorhus}
	 * @externals camelcase
	 * @see {@link https://github.com/sindresorhus/camelcase camelcase}
	 */
	camelCase,
	/**
	 * @function _$.createScript
	 * @memberOf _$
	 * @public
	 * @see Utils.createScript
	 */
	createScript,
	/**
	 * @function _$.each
	 * @memberOf _$
	 * @public
	 * @see Utils.each
	 */
	each,
	/**
	 * @function _$.empty
	 * @memberOf _$
	 * @public
	 * @see Utils.empty
	 */
	empty,
	/**
	 * @function _$.extend
	 * @memberOf _$
	 * @public
	 * @see Utils.extend
	 */
	extend,
	/**
	 * @function _$.formatBytes
	 * @memberOf _$
	 * @public
	 * @see Utils.formatBytes
	 */
	formatBytes,
	/**
	 * @function _$.getStyleComputed
	 * @memberOf _$
	 * @public
	 * @see Utils.getStyleComputed
	 */
	getStyleComputed,
	/**
	 * @function _$.hasProp
	 * @memberOf _$
	 * @public
	 * @see Utils.hasProp
	 */
	hasProp,
	/**
	 * @function _$.isArrayish
	 * @memberOf _$
	 * @public
	 * @see Utils.isArrayish
	 */
	isArrayish,
	/**
	 * @function _$.isElement
	 * @memberOf _$
	 * @public
	 * @see Utils.isElement
	 */
	isElement,
	/**
	 * @function _$.isFunction
	 * @memberOf _$
	 * @public
	 * @see Utils.isFunction
	 */
	isFunction,
	/**
	 * @function _$.isFascinoElement
	 * @memberOf _$
	 * @public
	 * @see Utils.isFascinoElement
	 */
	isFascinoElement,
	/**
	 * @function _$.isNumber
	 * @memberOf _$
	 * @public
	 * @see Utils.isNumber
	 */
	isNumber,
	/**
	 * @function _$.isObject
	 * @memberOf _$
	 * @public
	 * @see Utils.isObject
	 */
	isObject,
	/**
	 * @function _$.isSelector
	 * @memberOf _$
	 * @public
	 * @see Utils.isSelector
	 */
	isSelector,
	/**
	 * @function _$.isString
	 * @memberOf _$
	 * @public
	 * @see Utils.isString
	 */
	isString,
	/**
	 * @function _$.isVisible
	 * @memberOf _$
	 * @public
	 * @see Utils.isVisible
	 */
	isVisible,
	/**
	 * @function _$.merge
	 * @memberOf _$
	 * @public
	 * @see Utils.merge
	 */
	merge,
	/**
	 * @function _$.normName
	 * @memberOf _$
	 * @public
	 * @see Utils.normName
	 */
	normName,
	/**
	 * @function _$.normalizeData
	 * @memberOf _$
	 * @public
	 * @see Fascino.normalizeData
	 */
	normalizeData,
	/**
	 * @function _$.normalizeElements
	 * @memberOf _$
	 * @public
	 * @see Fascino.normalizeElements
	 */
	normalizeElements,
	/**
	 * @function _$.not
	 * @memberOf _$
	 * @public
	 * @see Utils.not
	 */
	not,
	/**
	 * @function _$.parseHTML
	 * @memberOf _$
	 * @public
	 * @see Utils.parseHTML
	 */
	parseHTML,
	/**
	 * @function _$.script
	 * @memberOf _$
	 * @public
	 * @see Utils.script
	 */
	script,
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
	addFn: function(name, callbacks){
		return Fascino.addFn.apply(Fascino, [name, callbacks])
	},
	/**
	 * Genera un numero aleatorio u obtiene datos aleatorios de una matriz
	 * @memberOf _$
	 * @public
	 * @param  {(Number|Array)} from Indica el número de inicio o matriz a obtener resultado
	 * @param  {Number} to   Indica el número final
	 * @return {Number}      Resultado aleatorio
	 */
	random: function(from, to) {
		if (arguments.length === 1 && isArrayish(from)) {
			return from[Math.floor(Math.random()*(from.length))]
		}
		return Math.floor(Math.random()*(to-from+1)+from)
	},
	/**
	 * Genera un número aleatorio entre rangos
	 * @memberOf _$
	 * @public
	 * @param  {(Number|Undefined)} min Número minino
	 * @param  {(Number|Undefined)} max Número máximo
	 * @return {Number}     Número aleatorio generado
	 */
	randomNum: function(min, max) {
		if (min == undefined && max == undefined) {
			return Math.random()
		} else if (min == undefined || max == undefined) {
			let base = min || max
			return Math.floor(Math.random() * base)
		} else {
			return Math.floor(Math.random() * (max - min)) + min
		}
	},
	/**
	 * Genera un Identificador único basado en la fecha y hora actual
	 * @memberOf _$
	 * @public
	 * @param  {String} prefix Prefijo del identificador
	 * @return {String}        Identificador
	 */
	uniqueId: function(prefix) {
		let d = new Date().getTime()
		if (empty(prefix)) {
			prefix = 'rep'
		}
		return (prefix !== '' ? prefix + '-' : '') + 'xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = (d + Math.random() * 16) % 16 | 0
			d = Math.floor(d / 16)
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
		})
	},
	/**
	 * Genera una cadena HTML codificada para mostrar en pre o navegador
	 * @memberOf _$
	 * @public
	 * @param  {String} str Cadena de código Html
	 * @example <lang>html</lang>
	 * <div>
	 *   <pre></pre>
	 *   <script>
	 *   _$('pre').html(_$.htmlEntities('<section><h2>Hola Mundo</h2></section>'))
	 *   </script>
	 * </div>
	 * @return {String}
	 */
	htmlEntities: function(str) {
		return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;').replace('/"/g', '&quot;')
	},
	/**
	 * Limpia un texto pre-codificado
	 * @memberOf _$
	 * @public
	 * @param  {String} textContent Texto
	 * @return {String}
	 */
	cleanPreCode: function(textContent) {
		let txt = textContent
			.replace(/^[\r\n]+/, '') // strip leading newline
			.replace(/\s+$/g, ''),
			mat, str, re = /^[\t ]+/gm, len, min = 1e3

		if (/^\S/gm.test(txt)) {
			return txt
		}

		/* jshint -W084 */
		/* eslint-disable-next-line */
		while (mat = re.exec(txt)) {
			len = mat[0].length

			if (len < min) {
				min = len
				str = mat[0]
			}
		}

		if (min === 1e3) {
			return
		}

		return txt.replace(new RegExp('^' + str, 'gm'), '').trim()
	},
	/**
	 * Mini Motor de plantillas javascript
	 * @memberOf _$
	 * @public
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
	template: function(html, options, conf) {
		let ReEx, re = '<%(.+?)%>',
			reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
			code = 'with(obj) { var r=[];\n',
			cursor = 0,
			result,
			match,
			add = function(line, js) {
				/* jshint -W030 */
				js?
				(code += line.match(reExp) ? `${line}\n` : `r.push(${line})\n`) :
				(code += line !== '' ? `r.push('${line}')\n` : '')

				return add
			}

		if (!empty(conf)) {
			if ((_$.hasProp(conf, 'beginToken'))) {
				re = re.replace('<%', conf.beginToken)
			}
			if ((_$.hasProp(conf, 'endToken'))) {
				re = re.replace('%>', conf.endToken)
			}
		}

		ReEx = new RegExp(re, 'g')
		match = ReEx.exec(html)

		while (match) {
			add(html.slice(cursor, match.index).replace(/[\n]/g, ' '))(match[1], true)
			cursor = match.index + match[0].length
			match = ReEx.exec(html)
		}
		add(html.substr(cursor, html.length - cursor).replace(/[\n]/g, ' '))

		code = (code + `return r.join('') }`).replace(/[\r\t]/g, ' ')
		/* jshint -W054 */
		try {
			result = new Function('obj', code).apply(options, [options])
		} catch (err) {
			console.error(err)
			console.error("'" + err.message + "'", ' in \n\nCode:\n', code, '\n') /* eslint no-console: 0, quotes: 0 */
		}
		return result
	},
	/**
	 * Globaliza la variable $,
	 * Ojo si usa jQuery no use esta función
	 * @memberOf _$
	 * @public
	 */
	global: () => {
		window.$ = _$
	},
	/**
	 * Libera la variable $
	 * @memberOf _$
	 * @public
	 */
	setFree$: () => {
		if (window.$ === window._$) {
			window.$ = undefined
		}
	},
	/**
	 * Intenta evitar conflicto con jQuery y Otros framework que usen el $
	 * @memberOf _$
	 * @public
	 * @return {Fascino}
	 */
	noConflict: () => {
		if ( window.$ === $ ) {
			window.$ = _$
		}

		return _$
	},
	/**
	 * Ejecuta una función cuando el DOM a cargado
	 * @memberOf _$
	 * @public
	 * @param {Function} fn      función a ejecutar
	 * @param {Object}   options Opciones para addEventListiner
	 */
	DOMLoad: function(fn, options) {
		if (document.readyState != 'loading') {
			if (isFunction(fn)) {
				fn()
			}
		} else {
			document.addEventListener('DOMContentLoaded', fn, (options || false))
		}
	},
	/**
	 * Ejecuta una función cuando window a cargado
	 * @memberOf _$
	 * @public
	 * @param {Function} fn Función a ejecutar
	 * @return {Fascino}
	 */
	WLoad: function(fn) {
		return _$(window).on('load', fn)
	},
	/**
	 * Ejecuta una función cuando la ventana, el documento y sus recursos están a punto de ser descargados
	 * @memberOf _$
	 * @public
	 * @param  {Function} fn Función a ejecutar
	 * @return {Fascino}
	 */
	beforeunload: function(fn) {
		if (typeof fn === 'string') {
			return _$(window).on('beforeunload', function(e) {
				e.returnValue = fn
				return fn
			})
		} else {
			return _$(window).on('beforeunload', fn)
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
	Lazy: function(o, exclude = '') {
		const img = _$('img'),
			picture = _$('picture'),
			bgImg = _$('[data-lazy-bg]'),
			LazyOptions = {
				root: document.querySelector('body'),
				rootMargin: '0px',
				threshold: 1.0
			}

		var opt = _$.extend({}, LazyOptions, o)

		const IO = new IntersectionObserver((entries, imgObserver) => {
			entries.forEach((entry) => {
				// If the image is not visible.
				_$.hooks.run('before.lazy', entry, imgObserver)
				if (entry.isIntersecting) {
					// If it's visible.
					const img = entry.target
					if (_$(img).hasData('lazy-bg')) {
						_$(img).style('background-image', `url('${_$(img).data('lazy-bg')}')`)
					}

					if (img.nodeName === 'IMG') {
						img.src = _$(img).data('src')
						if (_$(img).hasData('srcset')) {
							img.srcset = _$(img).data('srcset')
						}
					}

					if (img.nodeName === 'PICTURE') {
						let imgp = _$(img).find('img')
						imgp.src = _$(imgp).data('src')
						if (_$(imgp).hasData('srcset')) {
							imgp.srcset = _$(imgp).data('srcset')
						}
					}
					_$(img).removeClass('fade-out').addClass('fade-in')
					imgObserver.unobserve(entry.target)
				}
				_$.hooks.run('after.lazy', entry, imgObserver)
			})
		}, opt)

		// Observing the images.
		if (img.length > 0) {
			img.each((img) => {
				if (img.parentNode.nodeName !== 'PICTURE') {
					_$(img).addClass('fade-out')
					if (img && !_$.empty(exclude)) {
						if (!img.matches(exclude)) {
							IO.observe(img)
						}
					} else {
						IO.observe(img)
					}
				}
			})
		}
		if (picture.length > 0) {
			picture.each((img) => {
				_$(img).addClass('fade-out')
				if (img && !_$.empty(exclude)) {
					IO.observe(img)
				} else {
					IO.observe(img)
				}
			})
		}
		if (bgImg.length > 0) {
			bgImg.each((img) => {
				_$(img).addClass('fade-out')
				if (img && !_$.empty(exclude)) {
					IO.observe(img)
				} else {
					IO.observe(img)
				}
			})
		}
		return img
	},
	/**
	 * Sistema de Ganchos de [Fascino JS]{@link Fascino}
	 * @memberOf _$
	 * @public
	 * @namespace Hooks
	 * @type {Object}
	 * @example <lang>js</lang>
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
		add: function(name, actions) {
			let hook = this.hook
			hook[name] = hook[name] || []
			hook[name].push(actions)
		},
		/**
		 * Ejecuta un Gancho,
		 * La mayoria de los componente de [Fascino]{@link module:core.Fascino} poseen un gancho para anclarnos a sus funciones
		 * @memberOf _$.Hooks
		 * @public
		 * @param  {String}    name Nombre del Gancho existente
		 * @param  {...*} args Lista de argumentos que pasar a la función
		 */
		run: function(name, ...args) {
			if (args.length === 0) return

			let callbacks = this.hook[name]

			if (_$.empty(callbacks)) return

			for (let i = 0; i < callbacks.length; i++) {
				callbacks[i].apply(this, args)
			}
		}
	}
})


export default {
	_$,
	Fascino
}
