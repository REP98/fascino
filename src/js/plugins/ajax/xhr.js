/**
 * Modulo inicial de XHR
 */
import camelCase from 'camelcase'
import History from './history.js'
import { Serialize, SerializeToForm } from './serialize.js'
import {
	each,
	empty,
	extend,
	isObject,
	isString,
	hasProp
} from '../../utils.js'
/**
 * Opciones por defecto de [XHR]{@link Plugins.Ajax.XHR}
 * @const
 * @memberOf Plugins.Ajax.XHR
 * @namespace defaulsOptions
 * @type {Object}
 */
const defaulsOptions = {
	/**
	 * Ruta de envió
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default ''
	 * @type {String}
	 */
	url: '',
	/**
	 * Método de envió
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default GET
	 * @type {String}
	 */
	method: 'get',
	/**
	 * Parámetros a enviar
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default null
	 * @type {*}
	 */
	data: null,
	/**
	 * Si es un envió asíncrono
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default true
	 * @type {Boolean}
	 */
	'async': true,
	/**
	 * Lista de Cabeceras a enviar
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default {}
	 * @type {Object}
	 */
	headers: {},
	/**
	 * Máximo tiempo de ejecución
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default 5000
	 * @type {Number}
	 */
	timeout: 5000,
	/**
	 * Envió con Credenciales
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default false
	 * @type {Boolean}
	 */
	withCredentials: false,
	/**
	 * Usuario
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @type {String}
	 */
	user: '',
	/**
	 * Contraseña
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @type {String}
	 */
	password: '',
	/**
	 * Tipo de respuesta
	 * Acepta cualquier de los siguientes parámetros
	 * ''(default) text, arraybuffer, blob, document, json
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default ''
	 * @type {String}
	 */
	response: '',
	/**
	 * Si defaulsOptions.response es diferente de json esto ayuda a establecer el tipo de resultados a obtener
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @type {Boolean}
	 */
	returnJSON: false,
	/**
	 * Establece el tipo de contenido enviado por Cabecera
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default 'application/x-www-form-urlencoded'
	 * @type {Boolean}
	 */
	contentType: false,
	/**
	 * Función que permite serializar un elemento
	 * actualmente usa [stringify]{@link Plugins.Ajax.Serialize}
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @type {Plugins.Ajax.Serialize}
	 */
	Serialize: new Serialize().stringify,
	/**
	 * Función que establece la serialización de los formularios
	 * actualmente usa [SerializeToForm]{@link Plugins.Ajax.Serialize}
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @type {Plugins.Ajax.Serialize}
	 */
	SerializeToForm: SerializeToForm,
	/**
	 * Estable el uso de Historial del Navegador
	 * Útil si se desea hacer uso del rutas por {@link Plugins.Ajax.XHR}
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default false
	 * @type {Boolean}
	 */
	history: false,
	/**
	 * Cadena RegExp para reemplazar de la ruta de historia
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @default /.html/gm
	 * @type {RegExp}
	 */
	historyReplace: /.html/gm,
	/**
	 * Opciones de History
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @see Plugins.Ajax.History
	 * @type {Object}
	 */
	historyOptions: {
		baseURL: null,
		cache: null
	},
	/**
	 * Lista de Nombre de los ganchos
	 * @namespace HooksName
	 * @memberOf Plugins.Ajax.XHR.defaulsOptions
	 * @type {Object}
	 */
	hooksName: {
		/**
		 * Gancho de carga
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @defaultvalue
		 * @type {String}
		 */
		load: 'xhr.load',
		/**
		 * Gancho de Inicio de Carga
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @type {String}
		 */
		loadstart: 'xhr.loadstart',
		/**
		 * Gancho de Progreso de carga
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @type {String}
		 */
		progress: 'xhr.progress',
		/**
		 * Gancho de Error en la carga
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @type {String}
		 */
		error: 'xhr.error',
		/**
		 * Gancho de ejecución de abortar el envio
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @type {String}
		 */
		abort: 'xhr.about',
		/**
		 * Solo en la subida Gancho de subida
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @type {String}
		 */
		upload: 'xhr.upload',
		/**
		 * Gancho de Ejecución para finalización de tiempo
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @type {String}
		 */
		timeout: 'xhr.timeout',
		/**
		 * Gancho para finalización de envió
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @type {String}
		 */
		loadend: 'xhr.loaded',
		/**
		 * Gancho para ReadyStateChange
		 * @memberOf Plugins.Ajax.XHR.defaulsOptions.HooksName
		 * @type {String}
		 */
		state: 'xhr.state'
	}
}
/**
 * Valida si el método dado es del tipo GET
 * @memberOf Plugins.Ajax.XHR
 * @private
 * @param  {String} method El método
 * @return {Boolean} Verdadero si es del tipo GET
 */
const isGetMethod = (method) => {
	return ['GET', 'JSON', 'SCRIPT'].indexOf(method) !== -1
}
/**
 * XHR
 * Función XHR con el uso de Promise
 * @namespace XHR
 * @memberOf Plugins.Ajax.
 * @class
 * @public
 * @param  {Object} options Lista de opciones
 * @requires Plugins.Ajax.Serialize
 * @requires Plugins.Ajax.History
 * @requires Utils.each
 * @requires Utils.empty
 * @requires Utils.extend
 * @requires Utils.isObject
 * @requires Utils.isString
 * @requires Utils.hasProp
 * @example <caption>Use</caption>
 * var ajax = XHR({
 *   url: 'https://mydomain.con/',
 *   method: 'GET',
 *   data: {
 *     search: 'lorem'
 *   }
 * })
 * ajax.then((responce, xhr) => { console.log(responce, xhr) })
 * @return {Promise} Promesa de Ejecución [XHR]{@link Plugins.Ajax.XHR}
 */
export const XHR = (options = {}) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		if (empty(xhr)) {
			return reject(new Error('Error XMLHttpRequest is not defined'))
		}

		let o = extend({}, defaulsOptions, options)
		if (o.data instanceof HTMLFormElement) {
			let m = o.data.getAttribute('method').toUpperCase(),
				u = o.data.getAttribute('action'),
				c = o.data.getAttribute('enctype')
			o.method = !empty(m.trim()) ? m.trim() : o.method
			o.url = !empty(u.trim()) ? u.trim() : o.url
			if (!empty(c.trim()) && o.headers.indexOf(c.trim()) !== -1) {
				o.headers.push(c.trim())
			}

			o.data = o.SerializeToForm(form)
		} else if (o.data instanceof HTMLElement && o.data.getAttribute('type') && o.data.getAttribute('type').toLowerCase() === 'file' ) {
			let name = o.data.getAttribute('name') || o.data.getAttribute('id'),
				data = new FormData()
			for (let i = 0; i < o.data.files.length; i++) {
				data.append(name, o.data.files[i])
			}
			o.data = data
		} else if (isObject(o.data)) {
			o.data = o.Serialize(o.data)
		} else if (!(o.data instanceof FormData) && !isString(o.data) && !empty(o.data)) {
			o.data = o.Serialize(o.data)
		} else {
			if(!(o.data instanceof FormData)) {
				o.data = null
			}			
		}

		if (!empty(o.timeout)) {
			xhr.timeout = o.timeout
		}

		if (!empty(o.withCredentials)) {
			xhr.withCredentials = o.withCredentials
		}

		if (isGetMethod(o.method)) {
			o.url += !empty(o.data) ? '?'+o.data : ''
		}

		xhr.open(o.method, o.url, o.async, o.user, o.password)

		if (!empty(o.headers)) {
			each(o.headers, (v, h) => {
				xhr.setRequestHeader(h, v)
			})
		}
		if (!isGetMethod(o.method) && !empty(o.headers)) {
			if (Object.keys(o.headers).indexOf('Content-type') === -1 && o.contentType !== false ) {
				xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
			}
		}

		if (!empty(o.response)) {
			xhr.responseType = o.response
		}

		xhr.send(o.data)

		xhr.addEventListener('load', (e) => {
			if (xhr.readyState === 4 && xhr.status < 300) {
				let returnVal = xhr.response
				if (o.returnJSON) {
					try {
						returnVal = JSON.parse(returnVal)
					} catch (e) {
						returnVal = xhr.response
					}
				}
				if (o.history) {
					let h = new History(o.historyOptions || {})
					let oBaseUrl = o.historyOptions.baseURL || location.origin
					h.pushs({
						xhr: {
						state: xhr.readyState,
						status: xhr.status,
						url: o.url,
						name: o.url.replace(o.historyReplace, "").replace(oBaseUrl, "")
					}}, o.url.replace(o.historyReplace, ""))
					
				}

				resolve(returnVal, xhr)

				if (_$ in window) {
					_$.hooks.run(o.hooksName.load, returnVal, e, xhr)
				}
			} else {
				reject(xhr)
				if (_$ in window) {
					_$.hooks.run(o.hooksName.error, e, xhr)
				}
			}
		}) 

		each(['readystatechange', 'error', 'timeout', 'progress', 'loadstart', 'loadend', 'abort'], (n, i) => {
			let ev = camelCase(`${n === 'readystatechange' ? 'onstate' : n}`)
			xhr.addEventListener(ev, (e) => {
				if (n === 'error') {
					reject(e)
				}

				if (typeof _$ !== undefined) {
					let name = n === 'readystatechange' ? 'state' : n,
						hook = hasProp(o.hooksName, name) ? o.hooksName[name] : null
					if (!empty(hook)) {
						_$.hooks.run(hook, e, xhr)
					}
				}
			})
		})
	})
}

export default XHR
