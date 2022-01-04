import {
	empty,
	isObject
} from '../../utils.js'
/**
 * Clase para serializar valores para envió [XHR]{@link Plugins.Ajax.XHR}
 * @namespace Serialize
 * @memberOf Plugins.Ajax
 * @class
 */
export class Serialize {
	/**
	 * Serializa los datos
	 * @memberOf Plugins.Ajax.Serialize
	 * @param  {(Object|Array)} param Grupo de parámetros a serializar
	 * @param  {String} space separador de la cadena por defecto & para URL
	 * @return {String}       cadena serializada
	 */
	stringify(param, space = '&') {
		return Object.keys(param)
					.map((key) => {
						if (isObject(param[key]) || Array.isArray(param[key])) {
							return `${encodeURIComponent(key)}[]=${this.stringify(param[key], space)}`
						} else {
							return `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`
						}
					})
					.join(space)
	}
	/**
	 * Deserializa una cadena serializada
	 * @memberOf Plugins.Ajax.Serialize
	 * @param  {String} param cadena serializada
	 * @param  {String} space Divisor de cadena para cortar
	 * @return {Object}       Objeto deserializado
	 */
	parse(param, space = '&') {
		let obj = {}
		param.split(space)
			.forEach((query) => {
				let param = query.split('=')
				let key = decodeURIComponent(param[0])
				let value = decodeURIComponent(param[1])
				if (key.indexOf('[]') > -1) {
					obj[key.replace('[]', '')] = this.parse(value)
				} else {
					obj[key] = value
				}
			})

		return obj
	}
}
/**
 * Serializa un formulario
 * @function
 * @memberOf Plugins.Ajax.Serialize
 * @public
 * @param {HTMLFromElement} form El formulario
 * @throws {Error} If form !== HTMLFromElement
 * @return {String} Cadena serializada o vació si hay errores
 */
export const SerializeToForm = function SerializeToForm(form) {
	if (empty(form)) {
		return ''
	}
	if (form.nodeName !== 'FORM') {
		throw new Error(form, 'is not element HTMLFromElement')
		return ''
	}

	let e = form.elements,
		l = e.length,
		p = {}

	for (let i = 0; i < l; i++) {
		let field = e[i],
			name = field.name || field.id
		if (!empty(name) && !field.disabled) {
			switch (field.nodeName) {
				case 'INPUT':
					switch (field.type.toLowerCase()) {
						case 'checkbox':
						case 'radio':
							if (field.checked) {
								p[name] = field.value
							}
							break
						case 'file':
							let data = new FormData()
							for (let k = 0; k < field.files.length; k++) {
								data.append(name, field.files[k])
							}
							p[name] = data
							break
						default:
							p[name] = field.value
							break
					}
					break
				case 'TEXTAREA':
					p[name] = field.value
					break
				case 'SELECT':
					switch (field.type) {
						case 'select-one':
							p[name] = field.value
							break
						case 'select-multiple':
							let o = field.options
							for (let j = 0; j < o.length; j++) {
								if (o.selected) {
									if (!Array.isArray(p[name])) {
										p[name] = []
									}
									p[name].push(o.value)
								}
							}
							break
					}
			}
		}
	}
	return new Serialize().stringify(p)
}

export default Serialize
