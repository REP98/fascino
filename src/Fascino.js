import { Fascino } from './core.js'
import Utils from './Utils'
/**
 * Fascino desde el Navegador <br>
 * Esta variable sera la que interactué desde el navegador
 * @global
 * @namespace _$
 * @param  {(String|Function|Element|Object)} selector Selector CSS o HTMLElement o Array de HTMLElememnt
 * @param  {(HTMLElement|document)} context  Entorno de selección
 * @return {Fascino} Class [Fascino]{@link Fascino}
 */
export function _$(selector, context){
	return new Fascino(selector, context);
}

if (typeof window._$ === 'undefined') {
	window._$ = _$
}

const U = Utils.Utils,
	 template = Utils.template,
	 C = Utils.Colors

_$.template = template;

U.extend(_$, U);
U.extend(_$, C);

U.extend(_$, {
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
					_$(img).fadeIn()
					imgObserver.unobserve(entry.target)
				}
				_$.hooks.run('after.lazy', entry, imgObserver)
			})
		}, opt)

		// Observing the images.
		if (img.length > 0) {
			img.each((img) => {
				if (img.parentNode.nodeName !== 'PICTURE') {
					_$(img).fadeOut()
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
				_$(img).fadeOut()
				if (img && !_$.empty(exclude)) {
					IO.observe(img)
				} else {
					IO.observe(img)
				}
			})
		}
		if (bgImg.length > 0) {
			bgImg.each((img) => {
				_$(img).fadeOut()
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
	 * @example 
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
