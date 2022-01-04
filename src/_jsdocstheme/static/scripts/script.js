function setTitle(title) {
	_$('meta[property="og:title"]').attr('content', title)
	_$('meta[name="twitter:title"]').attr('content', title)
	_$('title').html(title)
}
function loadPre() {
	if (_$('.prettyprint').length > 0) {
		Prism.plugins.NormalizeWhitespace.setDefaults({
			'remove-trailing': true,
			'remove-indent': true,
			'left-trim': true,
			'right-trim': true,
		});
		_$('.prettyprint').each(function(pre){
			_$(pre).addClass("line-numbers");
			let code = _$(pre).find('code')
		   	code.html(code.html().replace(/</gm, '&lt;'))
		  	code.html(code.html().replace(/>/gm, '&gt;'))
		 	Prism.highlightElement(code.Elem[0])
		})
	}
}
_$(function(){
	var bOC = new bootstrap.Offcanvas(_$("#menuall").Elem[0])
	const URLs = location.origin.indexOf('localhost') > -1 ? location.origin+'/fascino/' : location.origin
	
	setTimeout(function(){
		_$('.currenturl').each(function(meta){
			console.log(meta)
			if (meta.nodeName === 'LINK') {
				_$(meta).attr('href', URLs)
			} else {
				_$(meta).attr('content', URLs)
			}
			
		})

	}, 10)
	loadPre();
	_$("a").each(function(a){
		let href = _$(a).attr('href')
		if(!/#/gsi.test(href)) {
			_$(a).attr('href', href.replace(/.html/gsi, ''))
		}
	})
})