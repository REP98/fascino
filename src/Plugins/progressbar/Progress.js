if(_$ === undefined || typeof _$ != "function") {
	throw new Error("Fascino is required")
}
/**
 * WebComponent Progress <br/>
 * Barra de Progreso con nuevas opciones
 * @example <progress-bar value="200" max="1500" size="small" speed="0.3" bg="#000" value-bg="#f2b032"></progress-bar>
 * @namespace Progress
 * @memberOf module:Plugins.Progress
 * @class
 */
export default class Progress extends HTMLElement{
	/**
	 * @return {module:Plugins.Progress.Progress}
	 */
	constructor() {
		super()
		this.attachShadow({mode: 'open'})
		this._createChildren()
		this.shadowRoot.append(this.wrapper.get(0))		
	}
	/**
	 * Se ejecuta al conectarse al DOM
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @return {module:Plugins.Progress.Progress}
	 */
	connectedCallback(){
		if (this.isConnected) {
			this.max = _$(this).hasAttr('max') ? _$(this).attr('max') : 100
			this.value = _$(this).hasAttr('value') ? _$(this).attr('value') : 0
			this.speed = _$(this).hasAttr('speed') ? _$(this).attr('speed') : 0.2
			this._updateProgress(this.max, this.speed, this.value)
			this._createStyle()
			console.log(this)
		}		
	}
	/**
	 * Se ejecuta al desconcertar del DOM
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @return {module:Plugins.Progress.Progress}
	 */
	disconnectedCallback() {
		_$(this).remove()
	}
	/**
	 * Ejecuta una acción al cambiar un atributo de Progress
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @param  {String} name     Nombre del Atributo que ha cambiado
	 * @param  {(String|Boolean)} oldValue Valor anterior
	 * @param  {(String|Boolean)} newValue Nuevo Valor
	 */
	attributeChangedCallback(name, oldValue, newValue) {	
		if (name == 'value') {
			this.setValue(parseFloat(newValue))
		} else if (name == 'bg') {
			this.setBg(newValue)
		} else if (name == 'value-bg') {
			this.setBgValue(newValue)
		} else if (name == 'size') {
			this.setSize(newValue)
		} else if (name == "speed") {
			this.setSpeed(newValue)
		} else if (name == "max") {
			this._updateProgress(parseFloat(newValue), this.speed, this.value)
			this.setValue(this.value)
		}
	}
	/**
	 * Observa el cambio de los atributos value, bg, value-bg y size, max, step, speed
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @return {Array}
	 */
	static get observedAttributes() { 
		return [
			'value', 
			'bg', 
			'value-bg', 
			'size', 
			'max',
			'speed'
		];
	}
	/**
	 * Crea el contenido del ProgressBar
	 * @memberOf module:Plugins.Progress.Progress
	 * @private
	 */
	_createChildren() {
		const wrap = _$('<div/>'),
			value = _$('<div/>')

		wrap.addClass('_progressbar-wrapper')
		value.addClass('_progressbar-value')
		value.appendTo(wrap)

		this.valueElement = value
		this.wrapper = wrap
	}
	/**
	 * Actualiza la barra de progreso
	 * @param  {Number} mx Máximo
	 * @param  {Number} s  Velocidad de barra de carga (Solo animación)
	 * @param  {Number} v  Valor
	 * @memberOf module:Plugins.Progress.Progress
	 * @private
	 */
	_updateProgress(mx = 100, s = 0.2, v = null) {
		this.max = parseInt(mx > 0 ? mx : 100)
		this.speed = parseFloat(s > 0 ? s : 0.2)

		if (!_$.not(v)) {
			v = parseFloat(v)
			if ( v > mx) {
				v = mx
			}
		}

		this.value = v
	}
	/**
	 * Establece los estilos iniciales del Progress Bar
	 * @memberOf module:Plugins.Progress.Progress
	 * @private
	 */
	_createStyle(){
		_$(this).style({
	        "vertical-align": "baseline",
	        appearance: "auto",
	        "-moz-default-appearance": "progress-bar",
	        display: "inline-block",
	        border: "0px",
	        "background-color": "#e6e6e6",
	        "width": "100%",
	        "min-height": "2px",
	        height: '0.5em'
	    });

		this.wrapper.style({
			width: '100%',
			height: '100%',
			display:"block"
		})

		this.valueElement.style({
			height: "100%",
			width: "0%",
			"max-width": "100%",
			display: "block",
			'background-color': '#CF142B',
			'transition': `width ${this.speed}s ease-in-out, background-color .15s ease-in`
		})

		this.setValue(this.value)

		this.setSize()
	    
	    this.setBgValue()

	    this.setBg()
	}
	/**
	 * Obtiene el Valor en porcentaje para añadirlo al valueElement
	 * @memberOf module:Plugins.Progress.Progress
	 * @private
	 * @param  {Number} v Valor
	 * @return {Number}   Tanto por ciento en base a Max
	 */
	_getPercentage(v) {
		return Math.abs((parseFloat(v) / this.max) * 100)
	}
	/**
	 * Estable el estilo del tamaño
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @param {String} size Clase de tamaño puede ser small, default ó large
	 */
	setSize(size = null) {
		let s = _$.not(size) ? _$(this).attr('size') : size
		if (!_$.not(s)) {
			if (s.toLowerCase() === 'small') {
	    		_$(this).height('0.1em')
	    	} else if (s.toLowerCase() === 'large') {
	    		_$(this).height('1em')
	    	} else {
	    		_$(this).height('0.5em')
	    	}
		}
	}
	/**
	 * Cambia el color de fondo de la barra de carga
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @param {String} bg Color
	 */
	setBgValue(bg = null) {
		let customBg = _$.not(bg) ? _$(this).attr('value-bg') : bg
		if (!_$.not(customBg)) {
			this.valueElement.style('background-color', customBg)
		}
	}
	/**
	 * Establece el color de fondo de la barra de progreso
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @param {String} bg Color de Fondo
	 */
	setBg(bg = null) {
		let customBg = _$.not(bg) ? _$(this).attr('bg') : bg
		if (!_$.not(customBg)) {
			_$(this).style('background-color', customBg)
		}
	}
	/**
	 * Establece el valor
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @param {Number} v Valor
	 */
	setValue(v = 0) {
		let newValue = parseInt(v)

		if (newValue > this.max) {
			newValue = this.max
		}

		if (newValue > -1) { 
			this.valueElement.style("width", this._getPercentage(newValue) + "%")
			this.value = newValue
		}
	}
	/**
	 * Establece la velocidad de desplazamiento del la barra de carga
	 * @memberOf module:Plugins.Progress.Progress
	 * @public
	 * @param {Number} speed Velocidad
	 */
	setSpeed(speed = null) {
		let sd = _$.not(speed) ? _$(this).attr('speed') : speed
		if (!_$.not(sd)) {
			this._updateProgress(this.max, parseFloat(sd), this.value)
			this.setValue(this.value)
		}
	}
	/**
	 * Retorna el valor de carga
	 * @memberOf module:Plugins.Progress.Progress
	 * @public	
	 * @return {Number}
	 */
	getValue() {
		return this.value
	}
}

customElements.define('progress-bar', Progress)
