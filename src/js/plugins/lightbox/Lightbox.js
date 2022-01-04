import { 
	extend,
 } from '../../utils'
/**
 * Caja de Luz para imágenes
 * @namespace Lightbox
 * @memberOf Plugins.Light
 * @class
 */
export default class Lightbox {
	/**
	 * @param {(Element|Fascino|String)} el El elemento
	 * @param {Object} options Opciones del LightBox
	 * @return {Plugins.Light.Lightbox}
	 */
	constructor(el, options) {
		/**
		 * Opciones predeterminadas del LightBox
		 * @namespace OptionsLightBox
		 * @memberOf Plugins.Light.Lightbox
		 * @type {Object}
		 */
		this.defaults = {
			/**
			 * Fondo del LightBox
			 * @memberOf Plugins.Light.Lightbox.OptionsLightBox
			 * @type {(HEX|RGB|RGBA)}
			 */
			backgroundColor: 'rgba(35, 39, 50, 0.8)',
			/**
			 * Mostrar Contador
			 * @memberOf Plugins.Light.Lightbox.OptionsLightBox
			 * @type {Boolean}
			 * @default true
			 */
			showCount: true,
			/**
			 * Muestra Las Flechas
			 * @memberOf Plugins.Light.Lightbox.OptionsLightBox
			 * @type {Boolean}
			 */
			showArrows: true,
			/**
			 * Muestra el titulo
			 * @memberOf Plugins.Light.Lightbox.OptionsLightBox
			 * @type {Boolean}
			 */
			showTitle: true,
			/**
			 * Añade efecto e icon a las imágenes reales
			 * @memberOf Plugins.Light.Lightbox.OptionsLightBox
			 * @type {Boolean}
			 */
			wrap:false,
			/**
			 * Selector de imágenes
			 * @memberOf Plugins.Light.Lightbox.OptionsLightBox
			 * @type {String}
			 */
			img: 'img'
		}
		this.options = extend({}, this.defaults, options)
		this.element =_$(el)
		this._create()
		this._events()
	}
	/**
	 * Establece un nombre único para el elemento
	 * @private
	 * @memberOf Plugins.Light.Lightbox
	 * @param  {String} name    Nombre a buscar
	 * @param  {String} src     Ruta asignada a ese nombre
	 * @param  {Object} objects Objeto donde buscar
	 * @return {(String|Null)}  retorna null si el nombre existe y tiene la misma ruta dada
	 */
	_UniqueName(name, src, objects) {
		if (!_$.empty(objects)) {
			if (_$.hasProp(objects, name)) {
				
				if (objects[name] !== src) {
					if (name.indexOf('-') > -1) {
						let c = name.split('-'),
							i = parseInt(c[c.length - 1])
						return c.join('-').replace(i, i + 1)
					} else {
						return name+'-1'
					}
				} else {
					return null
				}
			}
		}
		return name
	}
	/**
	 * Envuelve las imágenes para darles efecto
	 * @memberOf Plugins.Light.Lightbox
	 * @private
	 * @param  {HTMLElementImg} img Imagen
	 * @param  {String} name  Nombre de la  Imagen
	 */
	_wrapped(img, name){
		let div = _$('<div>').addClass('lb-wrap'),
			overlay = _$('<div>').addClass('lb-wrap-overlay')
				.style({
					"background-color": this.options.backgroundColor
				}),
			/**
			 * Icono del Lightbox
			 * Original de Bootstrap
			 * @memberOf Plugins.Light.Lightbox
			 * @type {Fascino}
			 * @see https://icons.getbootstrap.com/icons/search/
			 */
			svg = _$.parseHTML(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
				  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
				</svg>`),
			caption,
			sibling, insets

		_$(img).addClass('lb-img')
		_$(svg).addClass('lb-wrap-icon').appendTo(overlay)
		if (this.options.showTitle) {
			caption = _$('<div>')
			caption.addClass('lb-wrap-caption')
				.html(name)
				.appendTo(overlay)
		}
		overlay.appendTo(div)
		if (!_$.empty(_$(img).prev()[0])) {
			sibling = _$(_$(img).prev()[0])
			div.append(img)
			div.insertAfter(sibling)
		} else {
			sibling = _$(_$(img).next()[0])
			div.append(img)
			div.insertBefore(sibling)
		}

	} 
	/**
	 * Crea a lista de items
	 * @memberOf Plugins.Light.Lightbox
	 * @private
	 */
	_createListItems() {
		this.listImg = this.listImg || {}
		if(this.lightElem.find('ul').length > 0) {
			this.list = this.lightElem.find('ul')
		} else {
			this.list = _$('<ul>')
		}		
		var e = 0
		this.element.find(this.options.img).each((img) => {
			let name = _$(img).attr('alt') || _$(img).attr('title'),
				src = _$(img).attr('src'),
				li = _$('<li>'),
				lbimg = _$(img).clone(true),
				caption

			if(_$.empty(name)) {
				let start = src.lastIndexOf('/') + 1,
					end = src.lastIndexOf('.')

				name = src.substring(start, end)
			}

			let n = this._UniqueName(name, src, this.listImg)
			if (!_$.empty(n)) {
				this.listImg[n] = src
			}
			_$(img).data('item', e)
			if (this.options.wrap) {
				this._wrapped(img, name)
			} else {
				_$(img).style('cursor', 'pointer')
			}
			_$(lbimg).addClass('lightbox-img')
			.appendTo(li)

			if (this.options.showTitle) {
				caption = _$('<div>')
				caption.addClass('lb-caption')
					.html(name)
					.appendTo(li)
			}

			li.data('item', e)
			

			li.appendTo(this.list)

			if (e === 0) {
				li.addClass('active')
			}
			e++
		})
	}
	/**
	 * Crea el LightBox
	 * @private
	 * @memberOf Plugins.Light.Lightbox
	 */
	_create() {
		if (_$('body').find('.lightbox').length > 0 && _$.empty(this.lightElem)) {
			this.lightElem = _$('body').find('.lightbox')
		} else if (_$('body').find('.lightbox').length === 0) {
			this.lightElem = _$('<div>')
			this.lightElem
				.style({
					backgroundColor: this.options.backgroundColor
				})
				.addClass('lightbox')
				.appendTo('body')
		}
		this._createListItems()
		let counts = Object.keys(this.listImg).length
		
		if (this.options.showCount) {
			this.count = _$('<div>')
			this.count.addClass('lb-count')
				.html(`1/${counts}`)
				.appendTo(this.lightElem)
		}

		this.closeBtn = _$('<button>')
		this.closeBtn.addClass('lb-close')
			.attr({
				type: 'button'
			})
			.html('<span class="hidden-visual">Cerrar</span>')
			.click((e) => {
				e.preventDefault()
				this.hide()
			})
			.appendTo(this.lightElem)

		
		this.list.appendTo(this.lightElem)
		if (this.options.showArrows) {
			this.lbPrev = _$('<button>')
			this.lbNext = _$('<button>')

			this.lbPrev.addClass('lb-prev')
				.attr({
					type: 'button'
				})
				.html('<span class="hidden-visual">Anterior</span>')
				.click((e) => {
					e.preventDefault()
					this.go(parseInt(this.getCurrentView()) - 1)
				})
				.appendTo(this.lightElem)

			this.lbNext.addClass('lb-next')
				.attr({
					type: 'button'
				})
				.html('<span class="hidden-visual">Siguiente</span>')
				.click((e) => {
					e.preventDefault()
					this.go(parseInt(this.getCurrentView()) + 1)
				})
				.appendTo(this.lightElem)
		}
	}
	/**
	 * Asigna Eventos OnClick a los elementos que apertura el LightBox
	 * @memberOf Plugins.Light.Lightbox
	 * @private
	 */
	_events() {
		let $this = this,
			selector = this.options.wrap ? '.lb-wrap' : this.options.img
		this.element.on('click.lightbox', selector, function(e) {
			let img = this.nodeName === 'IMG' ? _$(this) : _$(this).find('img')
			if (img.data('stopDefault')) {
				e.preventDefault()
			}
			let n = img.data('item') || 0
			$this.go(n)
			$this.show()
		})
	}
	/**
	 * Oculta el LightBox
	 * @memberOf Plugins.Lightbox
	 * @public
	 * @return {Plugins.Lightbox}
	 */
	hide() {
		this.lightElem.removeClass('show')
		return this
	}
	/**
	 * Muestra el LightBox
	 * @memberOf Plugins.Light.Lightbox
	 * @public
	 * @return {Plugins.Light.Lightbox}
	 */
	show() {
		this.lightElem.addClass('show')
		return this
	}
	/**
	 * Obtiene el número del item visible actualmente
	 * @memberOf Plugins.Light.Lightbox
	 * @public
	 * @return {Number}
	 */
	getCurrentView() {
		return this.list.find('li.active').data('item') || 0
	}
	/**
	 * Desplaza el LightBox hasta el nuevo elemento
	 * @memberOf Plugins.Light.Lightbox
	 * @public
	 * @param {Number} n Número del Items
	 * @return {Plugins.Light.Lightbox}
	 */
	go(n = 0) {
		if ( n < 0) {
			n = 0
		} else if (n > (this.list.find('li').length - 1)) {
			n = this.list.find('li').length - 1
		}
		let current = parseInt(this.getCurrentView())
		if (n !== current) {
			this.list.find('li').removeClass('active')
			_$(this.list.find('li').get(n)).addClass('active')
			if ( n > 0 ) {
				this.list.style('transform', `translateX(-${n*100}%)`)
			} else {
				this.list.style('transform', `translateX(0%)`)
			}
			if (this.options.showCount) {
				this.count.html(`${n+1}/${this.list.find('li').length}`)
			}
		}
		return this
	}
}
