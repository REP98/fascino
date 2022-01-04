import {
	each,
	hasProp,
	isObject
} from '../../utils.js'
/**
 * Manejado de la API History
 * @namespace History
 * @memberOf Plugins.Ajax
 * @requires Utils.exports.each
 * @requires Utils.exports.hasProp
 * @requires Utils.exports.isObject
 * @class
 */
export class History {
	/**
	 * @param  {Object} o Options
	 * @return {Plugins.Ajax.History}   Class History
	 */
	constructor(o = {}) {
		const Url = new URL(location.origin)

		this.baseURL = Url.href
		this.cache = false
		this.length = history.length

		if (isObject(o)) {
			if (hasProp(o, 'baseURL')) {
				this.baseURL = o.baseURL
			}
			if (hasProp(o, 'cache')) {
				this.cache = o.cache === true ? [] : o.cache;
			} else {
				this.cache = false
			}
		}

		window.addEventListener('popstate', (e) => {
			_$.hooks.run('history.popstate', e)
		}, false)
	}
	/**
	 * Obtiene la cache
	 * @private
	 * @memberOf Plugins.Ajax.History
	 * @param  {String} url Url de la Cache
	 * @return {(Object|Boolean)}
	 */
	_getCache(url) {
		if(this.cache === false) {
			return false
		}
		let objCache = {}, i = 0
		each(this.cache, (cache, ix) => {
			if (cache.url === url) {
				objCache = cache
				i = ix
			}
		})
		return {
			cache: objCache,
			index: i
		}
	}
	/**
	 * Almacena un elemento en cache
	 * @private
	 * @memberOf Plugins.Ajax.History
	 * @param {Object} data Información de la cache
	 */
	_setCache(data) {
		if(this.cache === false) {
			return false
		}
		this.cache.push(data)
	}
	/**
	 * Establece una nueva historia
	 * @public
	 * @memberOf Plugins.Ajax.History
	 * @param  {(String|Array|Object)} state estado del histórico
	 * @param  {String} url ruta
	 * @return {Plugins.Ajax.History}
	 */
	pushs(state, url) {
		this._setCache({
			state, url
		})
		return history.pushState(state, '', url)
	}
	/**
	 * Reemplaza un historia
	 * @public
	 * @memberOf Plugins.Ajax.History
	 * @param  {(String|Array|Object)} state estado del histórico
	 * @param  {String} url ruta
	 * @return {Plugins.Ajax.History}
	 */
	replaces(state, url) {
		let c = this._getCache(url)
		if (c !== false) {
			this.cache[c.index] = {
				state, url
			}
		}
		return history.replaceState(state, '', url)
	}
	/**
	 * Retrocede en el historial del navegador
	 * @public
	 * @memberOf Plugins.Ajax.History
	 * @return {Plugins.Ajax.History}
	 */
	prev() {
		return history.back()
	}
	/**
	 * Avanza en el historial del navegador
	 * @public
	 * @memberOf Plugins.Ajax.History
	 * @return {Plugins.Ajax.History}
	 */
	next() {
		return history.forward()
	}
	/**
	 * Avanza o retrocede n cantidad de páginas
	 * @public
	 * @memberOf Plugins.Ajax.History
	 * @param  {Number} n cantidad donde 0 es la primera -1 la anterior y 1 la siguiente
	 * @return {Plugins.Ajax.History}
	 */
	go(n) {
		return history.go(n)
	}
	/**
	 * Obtiene la cache almacenada
	 * @public
	 * @memberOf Plugins.Ajax.History
	 * @return {Array}
	 */
	getCache() {
		return this.cache
	}
}

export default History
