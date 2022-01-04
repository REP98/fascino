/**
 * Plugins File Upload
 * @namespace FileUpload
 * @memberOf Plugins
 */
import cropperjs from 'cropperjs'
import FileUpload from './file'

window.cropperjs = cropperjs

if (window._$ !== undefined) {
	/**
	 * Extensión de la clase [File]{@link Plugins.File} para su acceso desde el Navegador
	 * @namespace file
	 * @memberOf _$
	 * @function file
	 * @param  {Object} opt   Opciones del plugins
	 * @return {Fascino}
	 */
	_$.addFn('file', function(opt){
		let options = opt || {}
		return this.each((el) => {
			let form = _$(_$(el).parents('form'))
			let parent = form.length > 0 ? form : _$(_$(el).parent())
			let dropZone = form.length > 0 ? form : null

			if (!_$.hasProp(options, 'dropZone') && parent.length > 0) {
				if (parent.find('[data-dropzone]').length > 0) {
					dropZone = parent.find('[data-dropzone]')
				}
			}

			if (form.length > 0 && !_$.hasProp(options, 'form')) {
				options.form = form
			}

			if (!_$.empty(dropZone) && !_$.hasProp(options, 'dropZone')) {
				options.dropZone = dropZone
			}

			let file = new FileUpload(el, options)

			_$(el).data('file', file)
		})
	})
	/**
	 * Obtiene el archivo o lista de archivos cargado en un campo tipo file
	 * @function getFiles
	 * @memberOf _$.file
	 * @param  {Number} n Index del Archivo
	 * @return {File}
	 */
	_$.addFn('getFiles', function(n) {
		if (this.length == 0) {
			return -1
		}
		let files = this.Elem[0].files

		return !_$.not(n) ? files[n] : files 
	})
}
