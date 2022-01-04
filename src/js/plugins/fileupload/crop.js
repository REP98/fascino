import cropperjs from 'cropperjs'

let modal = `<div class="modal-crop" id="<%this.id%>">
		<div class="mc-body">
			<img src="<%this.data%>" alt="Picture">
		</div>
		<div class="foot">
			<button type="button" id="button" class="btn crop" >Cortar</button>
			<button type="button" id="button" class="btn supr">Cancelar</button>
		</div>
	</div>`

var cropBoxData, canvasData, cropper, originImage;

function getDataImage( image ){
	return _$(image).attr('src')
}

function showModal(Image) {
	let ID = _$.uniqueId('fu-modal'),
		tpl = _$.template(modal, {
			id: ID,
			data: getDataImage(Image)
		})
	_$("body").append(tpl)
	return ID
}

function closeModal(ID) {
	_$(`#${ID}`).remove()
	cropper.destroy();
	cropper = null
	originImage = null
}

export const CropStart = function(image, callback) {
	originImage = image
	let IdModal = showModal(image), canvas,
		img = _$(`#${IdModal} img`).get(0)

	cropper = new cropperjs(img, {
		aspectRatio: 1,
		autoCropArea: 0.5,
		viewMode: 3,
		ready: function(){
			cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
		}
	})

	_$(`#${IdModal} button.crop`).click(function(ee){
		canvas = cropper.getCroppedCanvas()
		originImage.src = canvas.toDataURL()
		var nameImag = _$(originImage).attr('alt')
		canvas.toBlob((blob) => {
			callback(blob, nameImag)
		})
		closeModal(IdModal)
	})

	_$(`#${IdModal} button.supr`).click(function(ee){
		closeModal(IdModal)
	})
}