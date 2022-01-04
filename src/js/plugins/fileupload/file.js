import {CropStart, CropEnd} from './crop.js'
import {
	empty,
	not,
	extend,
	formatBytes,
	hasProp
} from '../../utils'

/**
 * Manejador File Upload
 * @namespace File
 * @memberOf Plugins.FileUpload
 * @class
 */
export default class FileUpload {
	/**
	 * @param {(Fascino|Element|Selector|Array)} el Elemento
	 * @param  {Object} options Options
	 * @return {Plugins.FileUpload.File}   Class FileUpload
	 */
	constructor(el, options) {
		/**
		 * Opciones por defecto de FIle Upload
		 * @namespace OptionsFile
		 * @memberOf Plugins.FileUpload.File
		 * @private
		 * @const {Object}
		 */
		this.defaults = {
			/**
			 * Etiqueta a mostrar
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {String}
			 */
			label: "Elija un archivo o arrástrelo aquí.",
			/**
			 * Zona de Arrastre
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {String}
			 * @default 'body'
			 */
			dropZone: 'body',
			/**
			 * Formulario de input
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {(Fascino|Element)}
			 * @default undefined
			 */
			form: undefined,
			/**
			 * Opciones de carga para envió xhr
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {(Boolean|Object|Function)}
			 * @default null
			 */
			ajax: null,
			/**
			 * Cabecera para xhr
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {Object}
			 * @default {}
			 */
			headerAjax: {},
			/**
			 * Tipos de Archivos permitidos
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {String}
			 * @default 'image,video,audio'
			 */
			acceptedTypes: 'image,video,audio',
			/**
			 * Tamaño máximo en bytes para la subid de archivos por defecto es 1MB
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {Number}
			 * @default 1048576
			 */
			fileSizeLimit: 1048576, // Equivale 1MB
			/**
			 * Establece si se muestra la vista previa
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {Boolean}
			 * @default true
			 */
			preview: true,
			/**
			 * Elemento donde se mostrara las imágenes, videos u audios
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {String}
			 * @default ''
			 */
			previewElement: '',
			/**
			 * Icono SVG
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {String}
			 * @default ''
			 */
			svgIcon: '',
			/**
			 * Función que se ejecuta al cargar un archivo
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @param  {Plugins.Ajax.XHR} response Respuesta XHR
			 * @return {Boolear}
			 */
			upload: (response) => { console.log(response) },
			/**
			 * Función que se ejecuta conjunto al envió
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @param  {Event} e Evento
			 * @return {Boolean}
			 */
			submit: (e) => { console.log(e)	},
			/**
			 * Plantilla para la vista previa
			 * @memberOf Plugins.FileUpload.File.OptionsFile
			 * @type {String}
			 */
			template: `<figure class="mask-capiton mc-post-1 preview-item" id="<%this.itemID%>">
				<img src="<%this.imgData%>" alt="<%this.imgName%>" class="dataimage" id="<%this.imgId%>" loading="lazy">
				<figcaption>
					<h5 class="mc-title"><%this.imgName%></h5>
					<ul class="list-unstyled">
						<li>Tipo: <strong><%this.imgType%></strong></li>
						<li>Peso: <strong><%this.imgSize%></strong></li>
					</ul>
					<div class="fu-actions" style="font-size: 110%;">
						<a href="#" data-crop="#<%this.imgId%>" class="btn crop">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crop" viewBox="0 0 16 16">
							  <path d="M3.5.5A.5.5 0 0 1 4 1v13h13a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2H3.5a.5.5 0 0 1-.5-.5V4H1a.5.5 0 0 1 0-1h2V1a.5.5 0 0 1 .5-.5zm2.5 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4H6.5a.5.5 0 0 1-.5-.5z"/>
							</svg>
							<span class="hidden-visual">Recortar</span>
						</a>
						<a href="#" data-remove="#<%this.imgId%>" class="btn supr">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
							  <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
							</svg>
							<span class="hidden-visual">Borrar</span>
						</a>
					</div>
				</figcaption>
			</figure>`
		}
		this.options = extend({}, this.defaults, options)
		this.element = _$(el)
		this.dropZone = _$(this.options.dropZone)
		this.form = _$(this.options.form)
		this.FilesList = []
		this._backgroundLayer(undefined)
		this._setIcons(!empty(this.options.svgIcon) ? this.options.svgIcon : false)
		this._setLabel(this.options.label)
		this._setButton()		
		if (!_$.empty(this.element.attr('accept'))) {
			this.options.acceptedTypes = this.element.attr('accept')
		}
		this._startProgress()
		this._setEvents()
	}
	/**
	 * Establece la etiqueta
	 * @param {String} label Texto de la etiqueta
	 * @memberOf Plugins.FileUpload.File
	 * @private
	 */
	_setLabel(label) {
		_$('<label>').addClass('fu-label').html(label).appendTo(this.form)
	}
	/**
	 * Estable el icono a mostrar
	 * @param {(Boolean|HtmlSvg)} svg Icon en Svg
	 * @memberOf Plugins.FileUpload.File
	 * @private
	 */
	_setIcons(svg = false){
		_$('<img>').addClass('fu-logo')
			.attr({
				loading: 'lazy',
				alt: 'Cargar Archivo',
				src: svg ? svg : `data:image/svg+xml,%3Csvg width='512' height='512' fill='currentColor' class='bi bi-download' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.926 327.33a15.926 18.333 0 0 1 15.926 18.334v91.665a31.852 36.666 0 0 0 31.852 36.667h382.223a31.852 36.666 0 0 0 31.851-36.667v-91.665a15.926 18.333 0 0 1 31.852 0v91.665a63.704 73.333 0 0 1-63.703 73.333H63.704A63.704 73.333 0 0 1 0 437.33v-91.665a15.926 18.333 0 0 1 15.926-18.334z'/%3E%3Cpath d='M243.54 398.976a15.926 18.333 0 0 0 22.55 0l95.556-109.999a15.946 18.356 0 0 0-22.55-25.96L270.74 341.74V19.333a15.926 18.333 0 0 0-31.852 0V341.74l-68.354-78.722a15.946 18.356 0 1 0-22.551 25.96z'/%3E%3C/svg%3E`
			}).appendTo(this.form)
	}
	/**
	 * Crea el Botón que enviá los archivos al servidor
	 * @memberOf Plugins.FileUpload.File
	 * @private
	 */
	_setButton() {
		let form, btn
		if (!empty(this.form)) {
			form = this.form
		} else {
			form = this.dropZone
		}
		form.addClass('fu-form')
		if (form.find('[type="submit"]').length > 0) {
			btn = form.find('[type="submit"]')
		} else {
			btn = _$('<button>')
			btn.addClass('btn', 'primary', 'fg-white')
				.attr({
					type: form.get(0).nodeName === 'FORM' ? 'submit' : 'button'
				})
				.html('<i class="bi-upload"></i> Guardar')

			btn.on('click.fusubmit', (e) => {
				e.preventDefault()
				this.uploadFile(this.getFiles())
			})

			btn.appendTo(form)
		}
		this.btn = btn
	}
	/**
	 * Capa de Fondo
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 * @param  {Boolean} hide Si se oculta o no
	 */
	_backgroundLayer(hide = false) {
		if (hide === undefined || !hasProp(this, 'overlay')) {
			this.overlay = _$('<div>')
			this.overlay.addClass('fu-overlay')
				.appendTo('body')
		} else {
			if (hide) {
				this.overlay.removeClass('show')
			} else {
				this.overlay.addClass('show')
			}
		}
	}
	/**
	 * Valida el MIMEType de un archivo dado
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 * @param  {File} file El archivo instancia de [API File]{@link https://developer.mozilla.org/en-US/docs/Web/API/File}
	 * @return {Boolean}
	 */
	_verifyAccept(file) {
		return this.options.acceptedTypes.replace(/\s/g, '').split(',').filter((accept) => {
	      return new RegExp(accept.replace('*', '.\*')).test(file.type);
	    }).length > 0;
	}
	/**
	 * Establece los eventos
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 */
	_setEvents() {
		this.element.on('change.fileupload', event => this._change(event))
		this.dropZone.on('click.fileupload', event => {
			if (event.target === this.dropZone.get(0)) {
				console.log(event.target);
			
				this.element.get(0).click()
			}

		})
		this.dropZone.on('dragover.fileupload dragleave.fileupload', event => this._draghover(event))
		this.dropZone.on('drop.fileupload paste.fileupload', event => this._change(event))
	}
	/**
	 * Añade Archivos a la lista
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 * @param {Blob} Archivo
	 */
	_addFile(blob) {
		this.FilesList.push(blob)
	}
	/**
	 * Reemplaza archivos de la lista
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 * @param  {Blob} blob Archivo a reemplazar
	 * @param  {String} name Nombre
	 */
	_replaceFile(blob, name) {
		console.log(blob, name, this)
		_$.each(this.FilesList, (file, ix) => {
			console.log(file.name)
			if (file.name === name) {
				this.FilesList[ix] = blob
			}
		})
	}
	/**
	 * Borra un archivo de la lista
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 * @param  {Number} n Index del archivo
	 */
	_deleteFile(n){
		delete this.FilesList[n]
	}
	/**
	 * Función Drop Hover
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 * @param  {Event} e Evento
	 */
	_draghover(e) {
		e.stopPropagation()
		e.preventDefault()
		if (e.type === 'dragover') {
			this.dropZone.addClass('drophover')
			this._backgroundLayer(false)
		} else {
			this.dropZone.removeClass('drophover')
			this._backgroundLayer(true)
		}
	}
	/**
	 * Función Change detecta los cambios en el upload
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 * @param  {Event} e Evento
	 */
	_change(e) {
		let files = e.target.files || e.dataTransfer.files || e.clipboardData.files

		this._draghover(e)
		
		_$.each(files, (file, indexs) => {
			if (file.size <= this.options.fileSizeLimit && this._verifyAccept(file)) {
				if (this.options.preview && 
					(this._verifyAccept({type:'image'}) 
					|| this._verifyAccept({type:'video'})
					|| this._verifyAccept({type:'audio'})) ) {
					
					this.FilesList.push(file)
					this._preview(file)
				}
			}				
		})
		if (_$.isFunction(_$().lightbox)) {
			this.previewElement.lightbox()
		}		
	}
	/**
	 * Crea la vista previa
	 * @private
	 * @memberOf Plugins.FileUpload.File
	 * @param  {FileList} file Evento
	 */
	_preview(file){
		let data = {
			imgData: URL.createObjectURL(file),
			imgName: file.name,
			imgId: _$.uniqueId('fu-preview'),
			imgSize: formatBytes(file.size),
			imgType: file.type,
			imgWH: '',
			itemID: _$.uniqueId('fu-preview-item')
		}, i, tpl

		if (_$.empty(this.previewElement)) {
			if (this.form.find('[data-preview]').length > 0) {
				this.previewElement = _$(this.form.find('[data-preview]'))

			}	else if ( _$(this.options.previewElement).length > 0) {
				this.previewElement = _$(this.options.previewElement)
			} else {
				this.previewElement = _$('<div>').addClass('fu-preview-content').appendTo(this.form)
			}
		}

		tpl = _$.template(this.options.template, data)

		if (tpl) {
			this.previewElement.append(tpl)
		}

		let af = this._addFile, _this = this
		_$(`#${data.itemID} [data-crop]`).on('click.fupreview', function(e){
			e.preventDefault()
			let imgID = _$(this).data('crop'),
				img = _$(imgID)

			if(img.length > 0) {
				CropStart(img.get(0), (blob, n) => {
					_this._replaceFile(blob, n)
				})
			}
		})

		_$(`#${data.itemID} [data-remove]`).on('click.fupreview', function(e){
			e.preventDefault()
			let imgID = _$(this).data('remove'),
				parent = _$(this).parents('figure')

			_$.each(_this.FilesList,function(f, x){
				if (f.name === _$(`${imgID}`).attr('alt')) {
					_this._deleteFile(x)
				}
			})
			_$(parent).remove()
		})

		URL.revokeObjectURL(file)
	}
	/**
	 * Crea u obtiene el cargador de barra de progreso
	 * @memberOf Plugins.FileUpload.File
	 * @private
	 */
	_startProgress() {
		if (this.dropZone.find('[data-role="progress"]').length > 0) {
			this.progressBar = _$(this.dropZone.find('[data-role="progress"]'))
			var i = this.progressBar.attr('id')
			if (_$.not(i)) {
				i = _$.uniqueId('fu-progress')
				this.progressBar.attr('id', i)
			}
			this.progress = _$.PB[i]
		} else {
			let ID = _$.uniqueId('fu-progress')
			this.progressBar = _$('<div>').attr('id', ID).addClass('progress-load')
			this.progressBar
			.attr('data-role', 'progress')

			this.progressBar.prependTo(this.dropZone)
			this.progressBar.progress({
				min: 0,
				max: 100,
				value: 0,
				showValues: false,
			})
			this.progress = _$.PB[ID]
		}
		
	}
	/**
	 * Estable el valor máximo calculado por el envió Ajax
	 * @memberOf Plugins.FileUpload.File
	 * @private
	 * @param {Number} max Máximo valor
	 */
	_setProgreesMax(max) {
		this.progress.setMax(max)
	}
	/**
	 * Actualiza el valor de progreso de carga
	 * @memberOf Plugins.FileUpload.File
	 * @private
	 * @param {Number} value valor de progreso actual
	 */
	_updateValueProgrees(value) {
		this.progress.set(value)
	}
	/**
	 * Obtiene la lista de Archivos Cargados
	 * @memberOf Plugins.FileUpload.File
	 * @public
	 * @return {File}
	 */
	getFiles() {
		if (this.element.get(0).files.length > 0) {
			if (!empty(this.FilesList) ) {
				this.FilesList = _$.merge(this.FilesList, Array.from(this.element.get(0).files))
			} else {
				this.FilesList = Array.from(this.element.get(0).files)
			}
		}
		
		return this.FilesList
	}
	/**
	 * Inicia la carga del archivo al servidor
	 * @public
	 * @memberOf Plugins.FileUpload.File
	 * @param  {File} files Matriz de Archivos a subir
	 * @throws {Throws} If options.ajax === true && _$.ajax === undefined
	 */
	uploadFile(files) {
		let param = {
				method: 'post'
			},
			ajax,
			formData = new FormData()

		
		_$.each(files, (file) => {
			formData.append('files[]', file)
		})

		if (this.form != null && this.form !== undefined) {
			param.url = this.form.attr('action')
			param.method = this.form.attr('method')
		}

		if (empty(this.options.ajax) && !not(this.form)) {
			this.form.get(0).submit()
		} else if(!empty(this.options.ajax)) {
			if (this.options.ajax === true) {
				if(_$.hasProp(_$, 'ajax')) {
					param.data = formData
					param.headers = extend({}, this.options.headerAjax, { /*'Content-Type': 'application/json' */})

					_$.hooks.add('xhr.loadstart', (e) => {
						if (e.lengthComputable) {
							this._setProgreesMax(e.total)
						}						
					})
					_$.hooks.add('xhr.progress', (e) => {
						if (e.lengthComputable) {
							var percentage = Math.round((e.loaded/e.total)*100);
							this._updateValueProgrees(percentage+"%")
						}						
					})

					_$.hooks.add('xhr.loaded', (e) => {
						this._updateValueProgrees("100%")					
					})
					
					ajax = _$[param.method](param.url, param.data, {
						headers: param.headers
					})
				} else {
					throw 'Fascino Ajax component is required'
				}
			} else if( !empty(this.options.ajax)) {
				// Verificamos si se usa Axios
				// Comumente en Laravel
				if (_$.hasProp(this.options.ajax, 'Axios')) {
					this.options.ajax.defaults.headers = extend({}, this.options.ajax.defaults.headers, { 'Content-Type': 'multipart/form-data' })
					ajax = this.options.ajax[param.method](param.url, formData)
				} else if(_$.isFunction(this.options.ajax)) {
					param.data = formData
					param.headers = extend({}, this.options.headerAjax, { 'Content-Type': 'multipart/form-data' })
					this.options.ajax.apply(this.element, [param])
				}
			}

			if (!empty(ajax)) {
				ajax.then((response) => {
					this.options.upload.apply(ajax, [response])
				})
			}
		}

	}
}
