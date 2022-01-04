import camelCase from 'camelcase'
import Data from './data.js'

import {
	not,
	isFunction,
	isObject,
	normName,
	hasProp,
	extend,
	empty
} from '../utils.js'

/**
 * Maneja y manipula los Eventos del DOM
 * @namespace EventHandler
 * @memberOf Kernel
 * @requires camelCase
 * @requires Utils.not
 * @requires Utils.isFunction
 * @requires Utils.isObject
 * @requires Utils.normName
 * @requires Utils.extend
 * @requires Utils.empty
 * @requires Utils.hasProp
 * @class
 */
export default class EventHandler {
	
	constructor() {
		this.Data = new Data('CORE');
	}
	/**
	 * Obtiene el Espacio de Nombre para su almacenamiento
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param  {String} name Nombre
	 * @return {Object}
	 */
	_getNameSpace(name) {
		var nEv, ns = new Date().getTime(), n
		n = name.split('.')
		nEv = n.shift()

		if (n.length > 0) {
			ns = n.join('.')
		}
		return {
			name: nEv,
			ns: ns
		}
	}
	/**
	 * Obtiene y retorna los namespace en matriz
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param  {String} NS Namespace
	 * @return {(Array|Object)}
	 */
	_NStoArray(NS) {
		var arr = []
		if (isObject(NS)) {
			for(let prop in NS) {
				if(hasProp(NS, prop)) {
					arr.push(NS[prop])
				}
			}
		}
		return arr
	}
	/**
	 * Crea un Evento
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param  {string} name            Nombre del Evento
	 * @param  {(Boolean|String|Object|Array|Fascino)} customEventInit Acciones del evento capturarle, estas acciones se captura con e.detail
	 */
	_createEvent(name, customEventInit = {}) {
		var o;
		if(hasProp(customEventInit, 'detail')) {
			o = extend({},{
				bubbles: true,
				cancelable: true,
				detail: null
			}, customEventInit)
		} else {
			o = {
				bubbles: true,
				cancelable: true,
				detail: customEventInit
			}
		}		
		return new CustomEvent(name, o)
	}
	/**
	 * Añada un Evento Escucha al elemento
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param {Element}   el      El Elemento
	 * @param {String}   event   Nombre del Evento
	 * @param {Function} fn      Función a asignar
	 * @param {Boolean}  capture use capture
	 */
	_addEvents(el, event, fn, capture = false ) {
		return el.addEventListener(event, fn, capture)
	}
	/**
	 * Remueve un evento asignado
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param  {Element}   el      El Elemento
	 * @param  {String}   event   el nombre del evento
	 * @param  {Function} fn      Función asignada
	 * @param  {(Boolean|Object)}   capture Use capture ó opciones de captura
	 */
	_removeEvent(el, event, fn, capture) {
		if (not(capture)) {
			capture = true
		}
		return el.removeEventListener(event, fn, capture)
	}

	/**
	 * Dispara un Evento
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param  {Element} el       El elemento
	 * @param  {String} newEvent Nombre del Evento a disparar
	 * @return {Element}         
	 */
	_dispatchEvent (el, newEvent) {
		return el.dispatchEvent(newEvent)
	}
	/**
	 * Almacena los eventos asignado a cada elemento en memoria del elemento
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param {Element} el   El Elemento
	 * @param {String} name Nombre del Evento
	 * @param {(Boolean|String|Object|Array|Fascino)} data información del evento
	 * @return {Object} Lista de Eventos Asignado
	 */
	_set(el, name, data) {
		var dataEvent = this.Data.access(el, 'eventList', {}),
			NENS = this._getNameSpace(name)

		let e = { eventList: dataEvent }
			e.eventList[NENS.name] = NENS.name in dataEvent === true ? e.eventList[NENS.name] : {}
			e.eventList[NENS.name][NENS.ns] = empty(e.eventList[NENS.name][NENS.ns]) ? [] : e.eventList[NENS.name][NENS.ns]
			e.eventList[NENS.name][NENS.ns].push(data)

		return this.Data.set(el, e)
	}
	/**
	 * Obtiene información sobre un evento asignado
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param  {Element} el    El Elemento
	 * @param  {String} name  Nombre del Evento, se puede asignar namespace ejm: click.bs
	 * @param  {Number} index posición del evento
	 * @return {(Object|Array)}
	 */
	_get(el, name = null, index = -1) {
		var ev = this.Data.get(el, 'eventList')
		if(ev === false) {
			return {}
		}

		if (not(name)) {
			return ev
		}

		var NENS = this._getNameSpace(name),
			nameEv = NENS.name,
			ns = NENS.ns

		if (nameEv in ev === false) { return false }

		if (ns in ev[nameEv] === false) { return false }

		return index === -1 ? ev[nameEv][ns] : ev[nameEv][ns][index]
	}
	/**
	 * Verifica que un evento exista
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param  {Element}  el    El elemento
	 * @param  {String}  name  Nombre
	 * @param  {Number}  index Indice del evento
	 * @return {Boolean}
	 */
	_has(el, name, index = -1) {
		if (this.Data.has(el,'eventList')) {
			var dv = this.Data.get('eventList')
			if (!empty(dv)){
				var NENS = this._getNameSpace(name)
				if(NENS.name in dv) {
					if (!not(NENS.ns) && NENS.ns in dv[NENS.name] === true) {
						return index > -1 ? dv[NENS.name][NENS.ns].indexOf(index) > -1 : true
					}
				}
			}
		}
		return false
	}
	/**
	 * Remueve un Evento Asignado
	 * @private
	 * @memberOf Kernel.EventHandler
	 * @param  {Element} el    Elemento
	 * @param  {String} name  Nombre
	 * @param  {Number} index Indice del Evento
	 * @return {Boolean}
	 */
	_remove(el, name, index = -1) {
		if (!this.Data.has(el, 'eventList')) {
			return false
		}

		let d = this._get(el, name, index)
		
		if (not(name)) {
			this.Data.set(el, 'eventList', {})
			return true
		}

		var NENS = this._getNameSpace(name)

		if (NENS.name in d === true && NENS.ns in d[NENS.name] === true) {
			if (index > -1) {
				delete d[NENS.name][NENS.ns][index]
			} else {
				delete d[NENS.name][NENS.ns]
			}
			this.Data.set(el, 'eventList', d)
			return true
		}

		return false
	}

	/**
	 * Versión Publica
	 * @public
	 * @memberOf Kernel.EventHandler
	 * @see Kernel.EventHandler._set
	 */
	set(el, name, data) {
		return this._set(el, name, data)
	}
	/**
	 * Versión Publica
	 * @public
	 * @memberOf Kernel.EventHandler
	 * @see Kernel.EventHandler._get
	 */
	get(el, name, index) {
		return this._get(el, name, index)
	}
	/**
	 * Obtiene los eventos almacenados
	 * @public
	 * @memberOf Kernel.EventHandler
	 * @return {Object}
	 */
	getEvents(el) {
		return this._get(el)
	}
	/**
	 * Ejecuta los eventos dados
	 * @memberOf Kernel.EventHandler
	 * @public
	 * @param  {Element} el         El elemento
	 * @param  {(String|Array)} eventsList Lista de eventos con su namespace si es necesario
	 * @param  {String} sel        Selector a iterar o null
	 * @param  {Function} handler    Función a ejecutar
	 * @param  {Object} options    Opciones de addEventListiner
	 * @return {(Element|Object|Kernel.EventHandler)}
	 */
	on(el, eventsList, sel, handler, options) {
		if (not(el)) {
			return this
		}

		if (isFunction(sel)) {
			options = handler
			handler = sel
			sel = undefined
		}

		if (!isObject(options)) {
			options = {}
		}
		var EvL
		if (Array.isArray(eventsList)) {
			EvL = eventsList
		} else {
			EvL = eventsList.split(' ')
		}
		

		EvL.forEach((ev) => {
			let callback, id,
				event = this._getNameSpace(ev),
				ns = options.ns ? options.ns : event.ns,
				name = normName(event.name)			

			if("id" in options === true){
				id = options.id
			}

			callback = (e) => {
				let target = e.target
				_$.hooks.run(`before-${ev}${!not(id) ? "-"+id : ""}`, target, e)

				if (!sel) {
					handler.call(el, e)
				} else {
					while (target && target !== el) {
						if (Element.prototype.matches.call(target, sel) ) {
							handler.call(target, e)
							if (e.isPropagationStopped) {
								e.stopImmediatePropagation()
								break
							}
						}
						target = target.parentNode
					}
				}

				_$.hooks.run(`after-${ev}${!not(id) ? "-"+id : ""}`, target, e)
				if (!not(options.once)) {
					this.off(el, eventsList, sel, options)
				}
			}

			Object.defineProperty(
				callback,
				'name',
				{
					value: handler.name && handler.name !== '' ? handler.name : `func_event_${name}_${not(ns) ? new Date().getTime() : ns}`
				}
			)

			this._addEvents(el, name, callback, !not(options.capture) ? options.capture : false)

			this._set(el, this._NStoArray(event).join('.'), {
				event: ev,
				handler: callback,
				selector: sel,
				ns: ns,
				options: !not(options) ? options : false
			})
		})

		return el
	}
	/**
	 * Ejecuta solo el primer eventos del elemento
	 * @memberOf Kernel.EventHandler
	 * @public
	 * @param  {Element} el      El Elemento
	 * @param  {String} events  Eventos
	 * @param  {String} sel     Selector o null
	 * @param  {Function} handler Función a ejecutar
	 * @param  {Object} options Opciones de addEventListiner
	 * @return {(Element|Object|Kernel.EventHandler)}
	 */
	one(el, events, sel, handler, options) {
		if (!isObject(options)) {
			options = {}
		}

		options.once = true

		return this.on.apply(this, [el, events, sel, handler, options])
	}
	/**
	 * Remueve todos los Eventos de todos los elementos seleccionado
	 * @private
	 * @memberOf EventHandler
	 * @return {EventHandler}
	 */
	_off(el) {
		this.Data.remove(el, 'eventList')
		return this
	}
	/**
	 * Remueve los Eventos de los elementos dado
	 * @memberOf Kernel.EventHandler
	 * @public
	 * @param  {Element} el         Elemento
	 * @param  {String} eventsList Lista de Eventos
	 * @param  {String} sel        Selecotr o null
	 * @param  {Object} options    Opciones de removeEventListiner
	 * @return {(Element|Object|Kernel.EventHandler)}
	 */
	off(el, eventsList, sel, options, index = 0) {
		if (isObject(sel)) {
			options = sel
			sel = null
		}
		if(!isNaN(options)) {
			index = options
			options = {}
		}
		if (!isObject(options)) {
			options = {}
		}

		let Dev = this.Data.get(el, 'eventList')

		if (not(eventsList) || eventsList.toLowerCase() === 'all' || eventsList === '*') {
			let _this = this
			if (Dev) {
				for(let prop in Dev) {
					if (hasProp(Dev, prop)) {
						for (let ns in Dev[prop]) {
							if (hasProp(Dev[prop], ns)) {
								let e = Dev[prop][ns]
								_this._removeEvent(el, e.event, e.handler, e.options)
							}
						}
					}
				}
				this._off()
			}
			
			return el
		}

		var EvL
		if (Array.isArray(eventsList)) {
			EvL = eventsList
		} else {
			EvL = eventsList.split(' ')
		}

		EvL.forEach((e) => {
			let evMap = this._getNameSpace(e),
				name = normName(evMap.name),
				ns = options.ns ? options.ns : evMap.ns,
				originEvent

			if (name in Dev === true && ns in Dev[name] === true) {
				let ev = Dev[name][ns][index]

				this._removeEvent(el, ev.event, ev.handler, ev.options)
				this._remove(el, this._NStoArray(evMap).join('.'), index)
			}
		})

		return el
	}
	/**
	 * Crea o dispara un Evento
	 * @public
	 * @memberOf Kernel.EventHandler
	 * @param  {Element} el    Elemento HTMLELEMENT
	 * @param  {String} event Nombre del Evento
	 * @return {Element}
	 */
	fire(el, event) {
		return this._dispatchEvent(el, event)
	}
	/**
	 * Crea un Evento, versión publica
	 * @public
	 * @memberOf Kernel.EventHandler
	 * @see Kernel.EventHandler._createEvent
	 */
	createEv(name, data) {
		return this._createEvent(name, data)
	}
}
