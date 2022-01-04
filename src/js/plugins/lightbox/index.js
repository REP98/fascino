/**
 * Plugins LightBox
 * @namespace Light
 * @memberOf Plugins
 */


import Lightbox from './Lightbox.js'
import { extend, setOptionsOfData } from '../../utils'
/**
 * Extensión para la clase {@link Plugins.Light.Lightbox Lightbox} en {@link _$}
 * @namespace lightbox
 * @memberOf _$
 * @function lightbox
 * @example
 * _$('[mi-contenedor-imagen]').lightbox({
 * 	// opciones
 * })
 * @param  {Object} options Opciones para lightbox
 * @return {Fascino}
 */
_$.addFn('lightbox', function(options = {}) {
	return this.each((el) => {
		let o = setOptionsOfData(el, {
				backgroundColor: 'rgba(35, 39, 50, 0.8)',
				showCount: true,
				showArrows: true,
				showTitle: true,
				wrap:false,
				img: 'img'
			}), 
			opt = extend({}, o, options)
		let lb = new Lightbox(el, opt)
		_$(el).data("lightbox",lb)
	})
})
