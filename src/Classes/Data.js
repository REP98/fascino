import {
	camelCase,
	defineProperty,
	each,
	empty,
	hasProp,
	isString,
	isArrayish,
	isObject,
	not,
	normalizeData,
} from "../Utils/Utils.js"
/**
 * Identificador Único para los Atributos
 * @memberOf module:Core.Data
 * @private
 * @type {Number}
 * @defaultvalue -1
 */
var DataUI = -1
/**
 * Manejador de Eventos Data
 * @namespace Data
 * @memberOf module:Core
 * @requires Utils
 * @class
 * @tutorial Data
 */
export default class Data {
	/**
	 * @return {module:Core.Data}
	 */
	constructor() {
		this.UID = "FSData"
		DataUI++
		this.ID = DataUI
	}
	/**
	 * Verifica si el objeto dado es un Elemento
	 * @memberOf module:Core.Data
	 * @public
	 * @param  {Element} el El elemento
	 * @return {Boolean}
	 */
	acceptData(el) {
		return el.nodeType === 1 || el.nodeType === 9 || !( +el.nodeType )
	}
	/**
	 * Valida si se puede establece o usar el Atributo DataSet del HTMLElement
	 * @param  {Element} el El Elemento
	 * @memberOf module:Core.Data
	 * @public
	 * @return {Boolean}
	 */
	acceptDataSet(el) {
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
	storage(el, config = true) {
		let val = el[this.UID]

		if (!val) {
			val = {}
			if (this.acceptData(el)) {
				if (el.nodeType) {
					el[this.UID] = val
				} else {
					defineProperty(el, this.UID, {
						value: val,
						configurable: config
					})
				}
			}
		}

		return val
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
	set(el, key, data) {
		let store = this.storage(el)

		if (isString(key)) {
			store[camelCase(key)] = data
		} else {
			for (let prop in key) {
				if (hasProp(key, prop)) {
					store[camelCase(prop)] = key[prop]
				}
			}
		}
		return store
	}
	/**
	 * Obtiene el valor del Atributo o todos
	 * @memberOf module:Core.Data
	 * @public
	 * @param  {Element} el El elemento
	 * @param  {(String|Null)} key La clave a buscar si se omite se buscaran todos los atributos
	 * @return {(Object|String|Boolean)}
	 */
	get(el, key) {
		if (not(key)) {
			return this.storage(el)
		}
		return el[this.UID] && el[this.UID][key] ? el[this.UID][key] : false
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
	access(el, key, data) {
		if (not(key) || ((key && isString(key)) && not(data)) ) {
			return this.get(el, key)
		}

		this.set(el, key, data)
		return not(data) ? key : data
	}
	/**
	 * Verifica si el elemento tiene la clave dada
	 * @public
	 * @memberOf module:Core.Data
	 * @param  {Element}  el El elemento
	 * @param  {String}  key La clave
	 * @return {Boolean}
	 */
	has(el, key) {
		if (not(key)) {
			let c = this.storage(el)
			return !not(c)
		} else {
			return this.get(el, key) !== false ? true : ( el.hasAttributes && el.hasAttributes(`data-${key}`) ? el.getAttribute(`data-${key}`) : false)
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
	remove(el, key) {
		let i, store = el[this.UID]
		if (not(store)) {
			let ds = this.data(el)
			if (not(ds)){
				return
			}
			this.remove(el, key)
			if(this.acceptDataSet(el)) {
				attrs = el.attributes
				i = attrs.length
				while (i--) {
					if (attrs[i]) {
						let name = attrs[i].name
						if (name.indexOf("data-") === 0) {
							el.removeAttribute(name)
						}
					}
				}
			}
			return
		}

		if (!not(key)) {
			if (isArrayish(key)) {
				key = key.map(camelCase)
			} else {
				key = camelCase(key)
				key = key in store ? [key] : (key.match( /[^\x20\t\r\n\f]+/g ) || [])
			}
			i = key.length

			while (i--) {
				delete store[key[i]]
				
			}
		}

		if (not(key) && not(store)) {
			if (el.nodeType) {
				el[this.UID] = undefined
			} else {
				delete el[this.UID]
			}
		}

		return true
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
	attrToStorage(elem, key, data) {
		let name

		if (empty(data) && elem.nodeType === 1) {
			name = "data-" + key.replace(/[A-Z]/g, "-$&").toLowerCase()
			data = elem.getAttribute(name)

			if (typeof data === "string") {
				data = normalizeData(data)
				this.set(elem, key, data)
			} else {
				data = undefined
			}
		}

		return data
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
	data(els, ...args) {
		let ds,
			attrs, 
			i,
			el

		if(not(els.length)) {
			el = els 
			els = [els]
		} else {
			el = els[0]
		}

		if(args.length === 0) {
			ds = this.get(el)
			if(this.acceptDataSet(el)) {
				attrs = el.attributes
				i = attrs.length
				while (i--) {
					if (attrs[i]) {
						let name = attrs[i].name
						if (name.indexOf("data-") === 0) {
							name = camelCase(name.slice( 5 ))
							this.attrToStorage(el, name, ds[name])
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
				each(els, (elem) => {
					let id = elem.getAttribute("id"),
						prefix = !not(id) ? id : el.tagName+i
					args[0].forEach( (d) => {
						res[prefix] = res[prefix] || {}
						let re = this.get(elem, d)
						if (not(re)) {
							if (elem.nodeType === 1) {
								re = elem.hasAttributes(`data-${d}`) ? elem.getAttribute(`data-${d}`) : re
								re = normalizeData(re)
							}
						}
						res[prefix][d] = re
					})
					i++
				})
				return res
			} else if (isObject(args[0])) {
				return each(els, (elem) => {
					for (let key in args[0]) {
						if (hasProp(args[0], key)) {
							let value = normalizeData(args[0][key])
							this.set(elem, key, value)
						}
					}
				})
			} else if (isString(args[0])) {
				let res = this.get(el, args[0])
				
				if (!res || not(res)) {
					if (el.nodeType === 1) {
						res = el.hasAttributes(`data-${args[0]}`) ? el.getAttribute(`data-${args[0]}`) : res
						res = normalizeData(res)
					}
				}
				return res
			}
		}
		
		return each(els, (elem) => {
			this.set(elem, args[0], args[1])
		})
	}
}