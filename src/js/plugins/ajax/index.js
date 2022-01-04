/**
 * Plugins XHR con la Api History y Serialize
 * @namespace Ajax
 * @memberOf Plugins
 */
import History from './history'
import Serialize from './serialize'
import XHR from './xhr'

if (window._$ !== undefined) {
	window.Ajax = XHR

	/**
	 * Método Ajax(Xhr)
	 * @namespace ajax
	 * @function ajax
	 * @memberOf _$
	 * @param  {Object} o Opciones de [Ajax]{@link Plugins.Ajax.XHR}
	 * @return {Plugins.Ajax.XHR}   Objeto {@link Plugins.Ajax.XHR}
	 */
	var Ajax = (o) => {
		return window.Ajax(o)
	}
	_$.extend(_$, {
		ajax: Ajax
	})

	let EvAjax = [
		'get', 'post',
		'put', 'patch',
		'delete', 'json'
	]

	_$.each(EvAjax, (method) => {
		/**
		 * Métodos de Ajax publicados en [_$]{@link _$}
		 * Los miembros son:
		 * 1. get
		 * 2. post
		 * 3. put
		 * 4. patch
		 * 5. delete
		 * 6. json (Este es igual al metodo Get pero con configuraciónes para recibir un JSON en la respuesta)
		 * @function  [methods](url, data, options)
		 * @memberOf _$.ajax
		 * @param  {String} url     Url del Envio
		 * @param  {(Null|String|Object)} data    Datos a enviar
		 * @param  {Object} options Opciones de [Ajax]{@link Plugins.Ajax.XHR}
		 * @return {Promise<Plugins.Ajax.XHR>}  Una Promesa de ejecución [XHR]{@link Plugins.Ajax.XHR}
		 */
		_$[method] = function(url, data = null, options = {}) {
			let m = method.toUpperCase(),
				o = {
					method: ['GET', 'JSON'].indexOf(m) !== -1 ? 'GET' : m,
					url: url,
					data: data,
					returnJSON: m === 'JSON',
					response: m === 'JSON' ? 'json' : ''
				}

			return _$.ajax(_$.extend({}, o, options))
		}
	})
	_$.extend(_$, {
		/**
		 * Carga un Script vía [Ajax]{@link Plugins.Ajax.XHR}
		 * @memberOf _$.ajax
		 * @param  {String}   url      Url del Script
		 * @param  {Function} callback Función a ejecutar
		 * @param  {(Object|Null)}   data    Parámetros a pasar
		 * @param  {Object}   options  Opciones de [Ajax]{@link Plugins.Ajax.XHR}
		 * @return {Promise<Plugins.Ajax.XHR>}
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
		 * Manipulador de las Historias del Navegador
		 * @memberOf _$.ajax
		 * @param  {Object} options Opciones
		 * @return {Plugins.Ajax.History}
		 * @see Plugins.Ajax.History
		 */
		history: function(options) {
			return new History(options);
		},
		/**
		 * Crea un Objecto de la Clase Serialize
		 * @memberOf _$.ajax
		 * @see Plugins.Ajax.Serialize
		 * @return {Plugins.Ajax.Serialize}
		 */
		serialize: function(){
			return new Serialize()
		}
	})

	/**
	 * Carga datos vía ajax y los vuelca en elemento dado
	 * @function load
	 * @memberOf _$.ajax
	 * @param  {String} url     URL del envió
	 * @param  {(Null|String|Array)} data    Parámetros para el envió
	 * @param  {Object} options Opciones de [Ajax]{@link Plugins.Ajax.XHR}
	 * @return {(Null|Promise<Plugins.Ajax.XHR>)}
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
}

export default { XHR, Serialize, History }
