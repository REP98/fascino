
import camelCase from 'camelcase'
import {
	hasProp,
	isArrayish,
	isString,
	not
} from '../utils.js'

/**
 * Identificador Único para los Atributos
 * @memberOf Kernel.Data
 * @private
 * @const {Number}
 * @defaultvalue -1
 */
var DataUI = -1

/**
 * Manejador de Eventos Data<br>
 * <i>Nota: esto es una copia modificada de [Data Jquery]{@link https://jquery.com}</i>
 * @copyright Copyright JS Foundation and other contributors, https://js.foundation/
 * @license under MIT
 * @namespace Data
 * @memberOf Kernel
 * @requires Utils.hasProp
 * @requires Utils.isArrayish
 * @requires Utils.isString
 * @requires Utils.not
 * @class
 */
export default class Data {
	/**
	 * @param  {String} ID Nombre del data
	 * @return {Kernel.Data}
	 */
	constructor(ID) {
		this.UID = `FASCINO:${ID.toUpperCase()}`
		DataUI++
		this.id = DataUI
	}
	/**
	 * Valida si el elemento acepta atributos data
	 * @memberOf Kernel.Data
	 * @public
	 * @param  {Element} el El elemento
	 * @return {Boolean}
	 */
	acceptData(el) {
		return el.nodeType === 1 || el.nodeType === 9 || !( +el.nodeType )
	}
	/**
	 * Almacena el valor de atributo
	 * @memberOf Kernel.Data
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
					Object.defineProperty(el, this.UID, {
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
	 * @memberOf Kernel.Data
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
	 * @memberOf Kernel.Data
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
	 * @memberOf Kernel.Data
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
	 * @memberOf Kernel.Data
	 * @param  {Element}  el El elemento
	 * @param  {String}  key La clave
	 * @return {Boolean}
	 */
	has(el, key) {
		if (not(key)) {
			let c = this.storage(el)
			return !not(c)
		} else {
			return this.get(el, key) !== false
		}
	}
	/**
	 * Remueve una clave dada
	 * @public
	 * @memberOf Kernel.Data
	 * @param  {Element} el El elemento
	 * @param  {String} key La clave
	 * @return {(void|Boolean)}
	 */
	remove(el, key) {
		let i, store = el[this.UID]
		if (not(store)) {
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
}
