/**
 * Plugins HTTP por fetch con Serialize
 * @namespace HTTP
 * @memberOf module:Plugins
 */
import axios from 'axios'
import { Serialize } from './serialize'
import { Event } from '../../Classes'
import http from './fetch'

const ft = http

const isGetMethod = (method) => {
	return ['GET', 'JSON', 'SCRIPT'].indexOf(method) !== -1
}

if (window._$ !== undefined) {
	_$.extend(_$, {
		/**
		 * Acceso directo desde el navegador a fetch api
		 * @memberOf _$
		 * @function ft
		 * @see module:Plugins.HTTP.fetch
		 */
		ft,
		/**
		 * Axios
		 * @memberOf _$
		 * @see [Axios]{@link https://axios-http.com/docs/instance}
		 * @param  {Object} config Configuraciones de la instansea
		 * @return {Axios}
		 */
		axios: function(config = {}) {
			return axios.create(config)
		}
	})

	let EvHTTP = [
		'get', 'post',
		'put', 'patch',
		'delete', 'json', 'head'
	]

	_$.each(EvHTTP, (method) => {
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
		_$[method] = async function(url, data = null, options = {}) {
			let m = method.toUpperCase(),
				u = isGetMethod(m) && !_$.not(data) ? {url: url, params: data} : url,
				o = {
					method: isGetMethod(m) ? 'get' : m.toLowerCase(),
					body: isGetMethod(m) ? null : data,
					typeResponse: m === 'JSON' ? 'json' : 'text'
				}

			const {start, cancel} = _$.ft(u, _$.extend({}, o, options))
			// Creamos o Actualizamos el Metodo de cancelación de la trascición actual
			_$.ftCancel = cancel
			return await start()
		}
	})
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
		getscript: function(url, callback, data, options) {
			if (!_$.isFunction(callback) && !_$.empty(callback)) {
				data = callback
			}
			return _$.get(url, data, option).then((response) => {
				let s = responce
				_$.script(s)
				if (_$.isFunction(callback)) {
					callback(s)
				}
			})
		},
		/**
		 * Serializa una cadena para su envio
		 * @memberOf _$
		 * @function serialize
		 * @param  {(Object|Array)} x Grupo de parámetros a serializar
		 * @@param {String} space separador de la cadena por defecto & para URL
		 * @return {String}
		 */
		serialize: function(x, space = '&') {
			return new Serialize().stringify(x, space)
		},
		/**
		 * Deserializa una cadena previamente serializada con [_$.serialize](@link _$.serialize)
		 * @memberOf _$
		 * @function unserialize
		 * @param  {String} x     cadena serializada
		 * @param  {String} space Divisor de cadena para cortar
		 * @return {(Object|Array)}
		 */
		unserialize: function(x, space = '&') {
			return new Serialize().parse(x, space)
		}
	})

	/**
	 * Carga datos vía HTTP y los vuelca en elemento dado
	 * @function load
	 * @memberOf _$
	 * @param  {String} url     URL del envió
	 * @param  {(Null|String|Array)} data    Parámetros para el envió
	 * @param  {Object} options Opciones de [Fetch]{@link Plugins.HTTP.fetch}
	 * @return {(Null|Promise)}
	 */
	_$.addFn('load', function(url, data, options) {
		if (this.length === 0) {
			return null
		}

		let callback = 'get'

		if (options && _$.hasProp(options, 'method') && options.method.toUpperCase() !== 'GET') {
			callback = options.method.toLowerCase()
		}

		return _$.hasProp(_$, callback) ?
			_$[callback](url, data, options)
			.then((response) => {
				this.each((el) => {
					_$(el).html(response)
				})
			})
			.catch((e) => {
				console.error('An error occurred while processing your request', e)
			}) :
			null
	})

	_$(document).on('submit.ns.fetch', '[data-fetch]', function(e){
		if (this.nodeName === 'FORM' ) {
			e.preventDefault()
			ft(this)
			.start()
			.then(response => {
				_$.hooks.run(`fetch-submit-${_$(this).attr('id')}`, response, e, this)
				let ev = new Event()
				let onSubmit = ev.createEv('fetch-submit', {
					detail: {
						form: this,
						events: e,
						response
					}
				})

				ev.fire(this, onSubmit)
			})
		}
	})

}

export default { axios, ft }
