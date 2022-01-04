import {
	empty,
	hasProp,
	isArrayish,
	isFunction,
	isObject,
	isString,
	parseHTML,
} from '../utils.js'

/**
 * @memberOf Kernel.Selector
 * @private
 * @inner
 * @const {Number}
 * @default 3
 */
const NODETEXT = 3

/**
 * Errores Personalizados de la Clase Selector
 * @namespace SelectorError
 * @memberOf Kernel.Selector
 * @class
 * @extends {Error} Error
 */
export class SelectorError extends Error {
	constructor(...params) {
		super(...params)

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, SelectorError)
		}

		this.name = 'SelectorError'
	}
}

/**
 * Selecciona los Elementos y almacena en una matriz,
 * <blockquote class="bd-cyan">Esta clase esta pensada para el uso de [Fascino JS]{@link Fascino}, para usarla use [Fascino JS]{@link Fascino}.</blockquote>
 * @namespace Selector
 * @memberOf Kernel
 * @class
 * @requires Utils.empty
 * @requires Utils.hasProp
 * @requires Utils.isArrayish
 * @requires Utils.isFunction
 * @requires Utils.isObject
 * @requires Utils.isString
 * @requires Utils.parseHTML
 * @example
 * let div = new Selector('div.miclassdiv') // Retorna todos los div con la clase miclassdiv
 * let span = new Selector('span#miSpanID', div) // Retorna todos los span miSpanID hijo de div.miclassdiv
 */
export default class Selector {
	/**
	 * @param  {(String|Element|Object|Function|Array)} selector el elemento a seleccionar si es un String vea los selectores CSS
	 * @param  {Element} context  El elemento padre de donde se seleccionara el elemento dado ejm. <code>p[context] > span[selector]</code>
	 * @return {Kernel.Selector}  Un objecto con nuevas funciones para el elemento
	 */
	constructor(selector, context = document) {
		this.Elem = Array.from('')
		this.context = context

		if (empty(selector)) {
			return this
		}

		if (isString(selector)) {
			selector = selector.trim()
		}

		this.sel(selector)

		return this
	}
	/**
	 * Combina el nuevo elemento con los ya obtenidos
	 * @memberOf Kernel.Selector
	 * @private
	 * @param  {(Array|Object|Element|window|document)} otherEl
	 * @return {void}
	 */
	mergeEl(otherEl) {
		if (!empty(otherEl) && otherEl.length === undefined) {
			otherEl = [otherEl]
		} else if (otherEl.self === window) {
			otherEl = [otherEl]
		}
		let e = [].slice.call(otherEl)
		if (e.length > 0) {
			e.forEach((el) => {
				this.Elem.push(el)
			})
		}
	}
	/**
	 * Valida y verifica el selector dado
	 * @memberOf Kernel.Selector
	 * @private
	 * @param  {*} sel
	 * @return {Object}
	 */
	sel(sel) {
		if (isFunction(sel)) {
			document.addEventListener('DOMContentLoaded', sel, false)
			return this
		}

		if (sel instanceof Element) {
			this.mergeEl([sel])
			return this
		}

		if (sel instanceof NodeList) {
			this.mergeEl(sel)
			return this
		}

		if (sel instanceof HTMLCollection) {
			let dHtmlCol = Array.from(sel)
			this.mergeEl(dHtmlCol)
			return this
		}

		if (isObject(sel) && hasProp(sel, 'Elem')) {
			this.mergeEl(sel.Elem)
			return this
		}

		switch (sel) {
			case 'window':
				sel = window
				break
			case 'document':
				sel = document
				break
			case 'body':
				sel = document.body
				break
			case 'html':
				sel = document.documentElement
				break
			case ':root':
				sel = document.documentElement
				break
			case 'doctype':
				sel = document.doctype
				break
		}


		if (sel && (sel.nodeType || sel.self === window)) {
			this.mergeEl(sel)
			return this
		}

		if (isArrayish(sel)) {
			if (hasProp(sel, '_prevObj')) {
				this._prevObj = sel._prevObj
			}
			this.mergeEl(sel)
			return this
		}

		if (typeof sel !== 'string' && (sel.self && sel.self !== window)) {
			return this
		}

		const pHtml = parseHTML(sel)
		if (pHtml.length === 1 && pHtml[0].nodeType === NODETEXT) {
			try {
				const el = this.querySelector(sel)
				if (el.length === 0) {
					return this
				} else {
					this.mergeEl(el)
				}
			} catch (e) {
				throw new SelectorError(`\nFascino:\n ${sel} is not a valid selector`)
			}
		} else if (pHtml.length > 0) {
			this.mergeEl(pHtml)
		} else {
			this.mergeEl(sel)
		}

		return this
	}
	/**
	 * Hace uso de querySelector y valida la cantidad de elementos
	 * @memberOf Kernel.Selector
	 * @private
	 * @param  {String} selector
	 * @return {(Array|NodeList)}
	 */
	querySelector(selector) {
		let d = this.context || document
		return d.querySelectorAll(selector).length > 1 ?
				d.querySelectorAll(selector) :
				d.querySelector(selector) != null ? [d.querySelector(selector)] : []
	}
}
