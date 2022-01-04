/**
 * Grupo de Opciones por defecto de Progress
 * @namespace OptionsProgressBar
 * @memberOf Plugins.ProgressBar.Progress
 * @type {Object}
 */
export const DefaultsOptionsProgressbar = {
	/**
	 * Valor mínimo
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {Number}
	 * @default 0
	 */
	min: 0,
	/**
	 * Valor máximo
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {Number}
	 * @default 100
	 */
	max:100,
	/**
	 * Valor de incremento del Progress usado para la animación
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {Number}
	 * @default 1
	 */
	step: 1,
	/**
	 * Establece el Valor inicial
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {Number}
	 * @default 0
	 */
	value: 0,
	/**
	 * Velocidad de Animación, esta valor es establecido a [setInterval]{@link https://developer.mozilla.org/es/docs/Web/API/WindowOrWorkerGlobalScope/setInterval}
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {Number}
	 * @default 10
	 */
	speed: 10,
	/**
	 * Muestra o no EL texto del progreso
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {Boolean}
	 * @default true
	 */
	showValues: true,
	/**
	 * Prefijo del texto de progreso
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {String}
	 * @default ""
	 */
	textPrefix: "",
	/**
	 * Clases CSS para la barra
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {String}
	 * @default ""
	 */
	clsBar: "",
	/**
	 * Clase CSS para la barra de valores
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {String}
	 * @default ""
	 */
	clsValue: "",
	/**
	 * Clase CSS para el texto
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {String}
	 * @default ""
	 */
	clsText: "",
	/**
	 * Función que se ejecuta cada vez que se cambia o actualiza el valor del ProgressBar, dentro dee la función puede usar el this para tener accesos a la información
	 * @memberOf Plugins.ProgressBar.Progress.OptionsProgressBar
	 * @type {Function}
	 */
	change: () => {}
}
/**
 * Barra de Progreso
 * @namespace  Progress
 * @memberOf Plugins.ProgressBar
 * @class
 */
export class Progress {
	/**
	 * @param {(Element|Fascino|String)} el El elemento
	 * @param {Object} options Opciones del Progress
	 * @return {Plugins.ProgressBar.Progress}
	 */
	constructor(el, options) {
		this.opt = _$.extend({}, DefaultsOptionsProgressbar, options)
		/**
		 * Valor Mínimo
		 * @type {Number}
		 */
		this.min = this.opt.min || 0
		/**
		 * Valor Máximo
		 * @type {Number}
		 */
		this.max = this.opt.max || 100
		/**
		 * Incremento
		 * @type {Number}
		 */
		this.step = this.opt.step || 1

		if (this.min > this.max) {
			this.min = this.max
		}

		if (this.max < this.min) {
			this.max = this.min
		}
		/**
		 * Valor por defecto
		 * @type {Number}
		 */
		this.value = this.opt.value || this.min

		this.element = _$(el)
		this._create()
	}
	/**
	 * Crea el ProgressBar
	 * @private
	 * @memberOf Plugins.ProgressBar.Progress
	 */
	_create() {
		this.progressBar = _$('<div>')
		this.progressBar.addClass('progress-bar')
		this.progressValue = _$('<div>')
		this.progressValue.addClass('progress-value')
		this.progressValue.appendTo(this.progressBar)
		this.progressBar.appendTo(this.element)

		if (this.opt.showValues) {
			this.progressText = _$('<span>')
			this.progressText.addClass('progress-text')
			this.progressText.html(`${this.opt.textPrefix} 0%`)
			if (!_$.empty(this.opt.clsText)) {
				this.progressText.addClass(this.opt.clsText)
			}
			this.progressText.appendTo(this.progressValue)
		}

		if (!_$.empty(this.opt.clsBar)) {
			this.progressBar.addClass(this.opt.clsBar)
		}

		if (!_$.empty(this.opt.clsValue)) {
			this.progressValue.addClass(this.opt.clsValue)
		}
		if (!this.element.hasClass('progress')) {
			this.element.addClass('progress')
		}
		if (!this.element.hasData('role')) {
			this.element.data('role', 'progress')
		}
		this._originValue()
		this.valuePercentage = this._calculatePercentage(this.value)
		this._setValue()
	}
	/**
	 * Obtiene las medidas reales del elemento
	 * @memberOf Plugins.ProgressBar.Progress
	 * @private
	 */
	_originValue() {
		this._origin = {
			max: this.progressBar.width(),
			min: this.min
		}
	}
	/**
	 * Calcula el porcentaje de N
	 * @memberOf Plugins.ProgressBar.Progress
	 * @private
	 * @param  {Number} n Numero a calcular
	 * @return {Number}   Porcentaje resultante
	 */
	_calculatePercentage(n) {
		return Math.abs((parseFloat(n) / this._origin.max) * 100)
	}
	/**
	 * Calcula el valor del Porcentaje dado
	 * @memberOf Plugins.ProgressBar.Progress
	 * @private
	 * @param  {Number} p El tanto por ciento
	 * @return {Number}   El valor del Porcentaje
	 */
	_calculateValue(p) {
		return Math.abs((this._origin.max * parseFloat(p)) / 100 )
	}
	/**
	 * Incrementa el Valor actual
	 * @memberOf Plugins.ProgressBar.Progress
	 * @private
	 * @param  {Number} initial Valor Mínimo
	 * @param  {Number} max     Valor Máximo
	 */
	_increase(initial, max) {
		var setV = setInterval(() => {
			if (max <= initial) {
				clearInterval(setV)
				if (_$.isFunction(this.opt.change)) {
					this.opt.change.call(this)
				}
			} else {
				initial = initial + this.step
				this.progressValue.style('width', initial + "%")
				if (this.opt.showValues) {
					this.progressText.html(`${this.opt.textPrefix} ${initial}%`)
				}
				this.value = this._calculateValue(initial)
				this.valuePercentage = initial
				
			}
		}, this.opt.speed)
	}
	/**
	 * Disminuye el Valor actual
	 * @memberOf Plugins.ProgressBar.Progress
	 * @private
	 * @param  {Number} initial Valor Mínimo
	 * @param  {Number} max     Valor Máximo
	 */
	_decrease(initial, max) {
		var setV = setInterval(() => {
			if (initial == 0 || initial <= max) {
				clearInterval(setV)
				if (_$.isFunction(this.opt.change)) {
					this.opt.change.call(this)
				}
			} else {
				initial = initial - this.step
				this.progressValue.style('width', initial + "%")
				if (this.opt.showValues) {
					this.progressText.html(`${this.opt.textPrefix} ${initial}%`)
				}
				this.value = this._calculateValue(initial)
				this.valuePercentage = initial
			}
		}, this.opt.speed)
	}
	/**
	 * Establece el nuevo valor
	 * @memberOf Plugins.ProgressBar.Progress
	 * @private
	 * @param {Number} newValue Nuevo Valor a establecer
	 */
	_setValue(newValue = this.value) {
		let newPercentage = Math.round(this._calculatePercentage(newValue)),
			minWidth  = 0, setV,
			currentWidth  = Math.round(this._calculatePercentage(this.progressValue.width() || 0))
		
		if(minWidth == 0 && currentWidth == 0) {

			this.progressValue.style('width', this._calculatePercentage(this.min) + '%')
			if (this.opt.showValues) {
				this.progressText.html(`${this.opt.textPrefix} 0%`)
			}

		}	else if( currentWidth > minWidth) {
			minWidth = currentWidth;
		}	
		
		if (minWidth < newPercentage ) {
			this._increase(minWidth, newPercentage)
		} else if(minWidth > newPercentage) {
			this._decrease(minWidth, newPercentage)
		}
		if (_$.isFunction(this.opt.change)) {
			this.opt.change.call(this)
		}
	}
	/**
	 * Método Publico para establecer el valor al elemento
	 * @public
	 * @memberOf Plugins.ProgressBar.Progress
	 * @param {(Number|String)} value El valor a establecer puede ser un porcentaje del valor entre min y max o simplemente un número menor o igual a max
	 */
	set(value) {
		if (_$.isString(value)) {
			if (value.indexOf("%") > -1) {
				value = this._calculateValue(value)
			}
		}
		this._setValue(value)
	}
	/**
	 * Obtiene el valor actual
	 * @public
	 * @memberOf Plugins.ProgressBar.Progress
	 * @param  {Boolean} inPercentage Indica si el valor devuelto sera en porcentaje
	 * @return {Number}               El valor o porcentaje obtenido
	 */
	get(inPercentage = true) {
		if (inPercentage) {
			return Math.round(this._calculatePercentage(this.progressValue.width() || 0))
		} else {
			return this.progressValue.width()
		}
	}
	/**
	 * Establece el Valor máximo
	 * @memberOf Plugins.ProgressBar.Progress
	 * @public
	 * @param {Number} max El nuevo valor
	 */
	setMax(max = 100) {
		if (max < this.min) {
			this.max = this.min
		} else {
			this.max = max || this.opt.max
		}

		this._setValue(this.value)
	}
	/**
	 * Establece el valor mínimo
	 * @memberOf Plugins.ProgressBar.Progress
	 * @public
	 * @param {Number} min Valor mínimo
	 */
	setMin(min = 0) {
		if (min > this.max) {
			this.min = this.max
		} else {
			this.min = min || 0
		}

		this._setValue(this.value)
	}
	/**
	 * Establece el valor de Incremento
	 * @param {Number} step Numero de incremento
	 */
	setStep(step = 1) {
		if (step > 0) {
			this.step = step
		}
	}
}

export default {
	DefaultsOptionsProgressbar,
	Progress
}
