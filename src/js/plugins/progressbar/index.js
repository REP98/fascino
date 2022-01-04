/**
 * Plugins Progress Bar
 * @namespace ProgressBar
 * @memberOf Plugins
 */

import {
	DefaultsOptionsProgressbar,
	Progress
} from './Progress.js'
import { setOptionsOfData } from '../../utils'


function getID(el) {
	return !_$.empty(el.id) ? el.id : _$.uniqueId(el.nodeName);
}

/**
 * Almacenamiento en Memoria de las barras de progreso actualmente usadas
 * @memberOf _$.progress
 * @example
 * _$.PB.miID.set("25%")
 * @type {Object}
 */
_$.PB = {};

/**
 * Extensión de {@link Plugins.ProgressBar ProgressBar} para {@link _$}
 * @namespace progress
 * @memberOf _$
 * @function progress
 * @param  {Object}   options  Opciones del Plugins o nombre de función a invocar
 * @return {Fascino}
 */
_$.addFn('progress', function(options = {}){
	return this.each((el) => {
		let d = _$(el).data('progress')
		if(_$.not(d)) {
			let o =  setOptionsOfData(el, DefaultsOptionsProgressbar),
				opt = _$.extend({}, o, options),
				pg = new Progress(el, opt)
			
			 _$(el).data('progress', pg)
			 _$.PB[getID(el)] = pg
		} else {
			if(_$.isObject(options)) {
				if(_$.hasProp(o.min)) {
					d.setMin(o.min)
				}
				if(_$.hasProp(o.max)) {
					d.setMax(o.max)
				}
				if(_$.hasProp(o.step)) {
					d.setStep(o.step)
				}
				if(_$.hasProp(o.value)) {
					d.set(o.value)
				}
			}
			_$.PB[getID(el)] = d
		}
	})
})

/**
 * Barra de Progreso útil para mostrar un cargador de la página actual
 * @memberOf _$.progress
 * @param  {Object} options Opciones de [Progress Bar]{@link Plugins.ProgressBar.Progress}
 * @return {Plugins.ProgressBar.Progress}
 */
_$.progressLoad = function(options = {}){
	let ID = _$.uniqueId('progress-load'),
		o = _$.extend({}, {
			showValues: false
		}, options)
	_$(document).on('readystatechange', function(){
    	if (document.readyState == 'interactive') {
    		if (_$(`#${ID}`).length == 0) {
    			let pb = _$('<div>').attr('id', ID).addClass('progress-load').prependTo('body')
    				pb.progress(o)
    		}

    		let currentVal = _$.PB[ID].get(true),
    			n = Math.round(currentVal + 33)
    			_$.PB[ID].set(n+"%")
    	} else if (document.readyState == 'complete') {
    		let currentVal = _$.PB[ID].get(true),
	    		n = Math.round(currentVal + 33)
	    		_$.PB[ID].set(n+"%")
    	}
    })
	_$(document).on('DOMContentLoaded', function(){
    	let currentVal = _$.PB[ID].get(true),
    		n = Math.round(currentVal + 33)
    		_$.PB[ID].set(n+"%")
    })
    _$.WLoad(function() {
    	_$.PB[ID].set("100%")
    	setTimeout(() => {
    		_$(`#${ID}`).style('opacity', '0')
    		setTimeout(() => {
    			_$(`#${ID}`).remove()
    		}, 500)
    	},1000) 
    })
    return _$.PB[ID]
}