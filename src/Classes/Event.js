import Data from './Data.js'
import {
    camelCase,
    hasProp,
    defineProperty,
    extend,
    empty,
    not,
    isFunction,
    isObject,
    normName,
    strToArr
} from "../Utils/Utils.js"

const ListEvents = [
    'blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove',
    'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown',
    'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
]
/**
 * Maneja y manipula los Eventos del DOM
 * @namespace Event
 * @memberOf module:Core
 * @requires Utils
 * @class
 * @tutorial Events
 */
export default class Event {
    _ds = new Data()
    _eventName = "fsEvent"

    constructor() {

    }
    /**
     * Añada un Evento Escucha al elemento
     * @private
     * @memberOf Core.Event
     * @param {Element}   el      El Elemento
     * @param {String}   event   Nombre del Evento
     * @param {Function} fn      Función a asignar
     * @param {Boolean}  capture use capture
     */
    _add(el, event, fn, useCapture = false) {
        return el.addEventListener(event, fn, useCapture)
    }
    /**
     * Remueve un evento asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element}   el      El Elemento
     * @param  {String}   event   el nombre del evento
     * @param  {Function} fn      Función asignada
     * @param  {(Boolean|Object)}   capture Use capture ó opciones de captura
     */
    _remove(el, event, fn, capture) {
        if (not(capture)) {
            capture = true
        }
        return el.removeEventListener(event, fn, capture)
    }
    /**
     * Dispara un Evento
     * @private
     * @memberOf Core.Event
     * @param  {Element} el       El elemento
     * @param  {(Event|CustomEvent)} newEvent Nombre del Evento a disparar
     * @return {Element}         
     */
    _dispatch(el, newEvent) {
        return el.dispatchEvent(newEvent)
    }

    /**
     * Crea un Evento
     * @private
     * @memberOf Core.Event
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
     * Almacena los eventos asignado a cada elemento en memoria del elemento
     * @private
     * @memberOf Core.Event
     * @param {Element} el   El Elemento
     * @param {String} name Nombre del Evento
     * @param {(Boolean|String|Object|Array|Fascino|Function)} data información del evento
     * @return {Object} Lista de Eventos Asignado
     */
    _setData(el, event, data) {
        if (this._ds.acceptData(el) && el.self !== window) {
            let dataEv = this._ds.has(el, this._eventName) ? this._ds.get(el, this._eventName) : this._ds.access(el, this._eventName, {}),
                name = camelCase(event),
                nameToArr = strToArr(event, '.'),
                e = {}

            e[this._eventName] = dataEv

            e[this._eventName][name] = name in dataEv === true ? e[this._eventName][name] : [];
            e[this._eventName][name].push(data)

            return this._ds.set(el, e)
        }        
    }
    /**
     * Obtiene información sobre un evento asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element} el    El Elemento
     * @param  {String} name  Nombre del Evento, se puede asignar namespace ejm: click.bs
     * @param  {Number} index posición del evento
     * @return {(Object|Array)}
     */
    _getData(el, name = null, index = -1) {
        var evList = this._ds.get(el, this._eventName)
        if(not(evList)) {
            return {}
        }
        if (not(name)) {
            return evList
        }

        name = camelCase(name)

        if (name in evList === false) {
            return false
        }

        return index === -1 ? evList[name] : evList[name][index]
    }
    /**
     * Verifica que un evento exista
     * @private
     * @memberOf Core.Event
     * @param  {Element}  el    El elemento
     * @param  {String}  name  Nombre
     * @param  {Number}  index Indice del evento
     * @return {Boolean}
     */
    _hasData(el, name, index = -1) {
        if (this._ds.has(el, this._eventName)) {
            var evList = this._ds.get(el, this._eventName)
            if (!empty(evList)) {
                if (camelCase(name) in evList) {
                    return index > -1 ? evList[camelCase(name)].indexOf(index) > -1 : true
                }
            }

        }
        return false
    }
    /**
     * Remueve un Evento Asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element} el    Elemento
     * @param  {String} name  Nombre
     * @param  {Number} index Indice del Evento
     * @return {Boolean}
     */
    _removeData(el, name, index = -1) {
        if (this._ds.has(el, this._eventName)) {
            let ds = this._getData(el, name, index)

            if (not(name)) {
                this._ds.set(el, this._eventName, {})
                return true
            }

            let camelName = camelCase(name)

            if (camelName in ds) {
                if (index > -1) {
                    delete ds[camelName][index]
                } else {
                    delete ds[camelName]
                }
                this._ds.set(el, this._eventName, d)
                return this
            }
        }
        return false
    }
    /**
     * Remueve todos los Eventos de todos los elementos seleccionado
     * @private
     * @memberOf Core.Event
     * @return {Core.Event}
     */
    _off(el) {
        this._ds.remove(el, this._eventName)
        return this
    }
    /**
     * Obtiene los NameSpaces del Evento
     * @private
     * @memberOf Core.Event
     * @param  {Array}  NS     Nombre separado en array
     * @param  {Boolean} onlyNS Si solo se retorna el NS ó se retorna Nombre y NS
     * @return {(String|Object)} 
     */
    _getNS(NS, onlyNS = true) {
        let name = NS.shift(),
            ns = NS.join('.')

        return onlyNS ? ns : {
            name,
            ns
        }
    }
    // Public
    /**
     * Obtiene los eventos almacenados
     * @public
     * @memberOf Core.Event
     * @see Core.Event._getData
     * @return {Object}
     */
    getEvents(el, name = null, index = -1) {
        return this._getData(el, name, index)
    }
    /**
     * Ejecuta los eventos dados
     * @memberOf Core.Event
     * @public
     * @param  {Element} el         El elemento
     * @param  {(String|Array)} eventList Lista de eventos con su namespace si es necesario
     * @param  {String} selector        Selector a iterar o null
     * @param  {Function} callback    Función a ejecutar
     * @param  {Object} options    Opciones de addEventListiner
     * @return {(Element|Object|Core.Event)}
     */
    on(el, eventList, selector, callback, options) {
        if (not(el)) { return this }

        if (isFunction(selector)) {
            options = callback
            callback = selector
            selector = undefined
        }
        if (!isObject(options)) {
            options = {}
        }

        var EVL = strToArr(eventList, ' ')

        EVL.forEach((e) => {
            let nameAndNs = strToArr(e, '.'),
                nameAndNSObj = this._getNS(nameAndNs, false),
                ns = nameAndNSObj.ns,
                name = nameAndNSObj.name,
                handler = (ev) => {
                    let target = ev.target

                    if(!selector) {
                        callback.call(el, ev)
                    } else {
                        while (target && target !== el) {
                            if (Element.prototype.matches.call(target, selector) ) {
                                callback.call(target, ev)
                              if (ev.isPropagationStopped) {
                                    ev.stopImmediatePropagation()
                                    break
                                }
                            }
                            target = target.parentNode
                        }
                    }
                    if (!not(options.once)) {
                        this.off(el, eventList, selector, options)
                    }
                }

            defineProperty(
                handler,
                'name',
                {
                    value: callback.name && callback.name !== '' ? callback.name : `func_event_${name}_${not(ns) ? new Date().getTime() : ns}`
                }
            )
           let NameEvents = ListEvents.indexOf(name) > -1 ? name : e
           
            this._add(el, NameEvents, handler, !not(options.capture) ? options.capture : false)
            this._setData(el, e, {
                event: e,
                handler: handler,
                selector: selector,
                ns: ns,
                options: !not(options) ? options : false
            })
        })

        return el
    }
    /**
     * Ejecuta solo el primer eventos del elemento
     * @memberOf Core.Event
     * @public
     * @param  {Element} el      El Elemento
     * @param  {String} events  Eventos
     * @param  {String} sel     Selector o null
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de addEventListiner
     * @return {(Element|Object|Core.Event)}
     */
    one(el, events, sel, handler, options) {
        if (!isObject(options)) {
            options = {}
        }

        options.once = true

        return this.on.apply(this, [el, events, sel, handler, options])
    }
    /**
     * Remueve los Eventos de los elementos dado
     * @memberOf Core.Event
     * @public
     * @param  {Element} el         Elemento
     * @param  {String} eventsList Lista de Eventos
     * @param  {String} sel        Selecotr o null
     * @param  {Object} options    Opciones de removeEventListiner
     * @return {(Element|Object|Core.Event)}
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

        let Dev = this._getData(el)

        if (not(eventsList) || eventsList.toLowerCase() === 'all' || eventsList === '*') {
            let _this = this
            if (Dev) {
                for(let prop in Dev) {
                    if (hasProp(Dev, prop)) {
                        let e = Dev[prop]
                        e.forEach((i) => {
                            _this._remove(el, i.event, i.handler, i.options)
                        })
                    }
                }
                this._off()
            }
            
            return el
        }

        var EvL = strToArr(eventsList, ' ');

        EvL.forEach((e) => {
            let nMap = strToArr(e, '.'),
                evMap = nMap.length > 1 ?  this._getNS(nMap, true) : {name: nMap[0], ns: ''},
                name = normName(evMap.name),
                ns = options.ns ? options.ns : evMap.ns
            
            if (hasProp(Dev, name)) {
                let ev = Dev[name][index]

                this._remove(el, ev.event, ev.handler, ev.options)
                this._removeData(el, e, index)
            }
        })

        return el
    }
    /**
     * Dispara un Evento
     * @public
     * @memberOf Core.Event
     * @param  {Element} el    Elemento HTMLELEMENT
     * @param  {String} event Nombre del Evento
     * @return {Element}
     */
    fire(el, event) {
        return this._dispatch(el, event)
    }
    /**
     * Crea un Evento, versión publica
     * @public
     * @memberOf Core.Event
     * @see Core.Event._createEvent
     */
    createEv(name, data) {
        return this._createEvent(name, data)
    }
}
