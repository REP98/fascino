/**
 * Funciones Útiles para el manejo de colores con javascript en formatos Hex, RGB(A), HSL(A), HWB
 * @namespace Colors
 * @memberOf module:Utils 
 * @tutorial Colors
 */

import {
	not,
	isObject,
	hasProp
} from './Utils.js'
//============================================================================================
// CONVERSORES Y VALIDADORES
//============================================================================================
//-------------------- HEXADECIMA -------------------------------------------------------------

/**
 * Valida si es un color Hexadecimal valido
 * @memberOf module:Utils.Colors
 * @function isHex
 * @param  {String}  color Hexadecimal a validar
 * @return {Boolean}
 */
export function isHex(color) {
	return /(^#[0-9a-f]{3}$)|(^#[0-9a-f]{4}$)|(^#[0-9a-f]{6}$)|(^#[0-9a-f]{8}$)/i.test(color)
}
/**
 * Obtiene el canal Alpha de un hexadecimal y lo convierte en decimal
 * @memberOf module:Utils.Colors
 * @function AlphaHex
 * @param {Hexadecimal} hex Color Hexadecimal en formato #RRGGBBAA
 * @return {(Number|Boolean)} El numero del porcentaje o false si no es un hexadecimal valido
 */
export function AlphaHex(hex) {
	if (!isHex(hex)) {
		return false
	}
	let r = /^#([0-9a-f]{6})([0-9a-f]{2})$/i.exec(hex)
	return r.length > 2 ? Hex2Per(r[2]) : 100
}
/**
 * Convierte Colores Hexadecimales a RGB
 * @see [Github]{http://gist.github.com/983661}
 * @memberOf module:Utils.Colors
 * @function Hex2Rgb
 * @param {String} hex Color Hexadecimal
 * @return {(Object|Boolean)} Objecto con el color RGBA o false si no es valido
 */
export function Hex2Rgb(hex) {
	if (!isHex(hex)) {
		return false;
	}
	let withAlpha = /(^#[0-9a-f]{4}$)|(^#[0-9a-f]{8}$)/i.test(hex),
		alpha = withAlpha ? AlphaHex(hex) : 100

	if (withAlpha) {
		if (hex.length == 4) {
			hex = hex.substring(1, 4)
		} else {
			hex = hex.substring(1, 7)
		}
	} else {
		hex = hex.slice(1)
	}

	hex = +("0x" + hex.replace( 
	  hex.length < 5 && /./g, '$&$&'
	)
	);

  return {
	r: hex >> 16 & 255,
	g: hex >> 8 & 255,
	b: hex & 255,
	a: alpha
  }
}
/**
 * Convierte Hexadecimal en HSL
 * @memberOf module:Utils.Colors
 * @function Hex2Hsl
 * @param {String} hex Color
 * @return {(Object|Boolean)} Objecto hsl o false
 */
export function Hex2Hsl(hex) {
	if (!isHex(hex)) {
		return false;
	}
	let c = Hex2Rgb(hex)
	return Rgb2Hsl(c.r, c.g, c.b, c.a)
}
/**
 * Convierte un Hexadecimal a HWB
 * @memberOf module:Utils.Colors
 * @function Hex2Hsl
 * @param {String} hex
 * @return {(Object|Boolean)} Objecto hsl o false
 */
export function Hex2Hwb(hex) {
	if (!isHex(hex)) {
		return false;
	}
	let c = Hex2Rgb(hex)
	return Rgb2Hwb(c.r, c.g, c.b)
}

//-------------------- RGBA --------------------------------------------------------------------
/**
 * Valida si es un Objecto o String valido para rgb
 * @memberOf module:Utils.Colors
 * @function isRGB
 * @param  {(Object|String)}  rgb RGBA
 * @return {Boolean}
 */
export function isRGB(rgb) {
	return isObject(rgb) && hasProp(rgb, 'r') || /(^rgb\([\d,?\s?]+\)$)|(^rgba\(([\d,?\s?]+)\s?\/?\s?(([\d.\d]|[\d\%])+)\)$)/gi.test(rgb)
}
/**
 * Convierte un valor RGBA a HEXADECIMAL
 * @memberOf module:Utils.Colors
 * @function Rgb2Hex
 * @param {Number} r     Rojo
 * @param {Number} g     Verde
 * @param {Number} b     Azul
 * @param {Number} a 	 Alfa
 * @return {String}		Expresión Hexadecimal
 */
export function Rgb2Hex(r,g,b,a = 100) {
	let ts = (c) => {
        let rt = c.toString(16)
        return rt.length == 1 ? rt+rt : rt
      },
      hex = "#"+ ts(r) + ts(g) + ts(b)
      
	if (a < 100) {
		hex += Per2Hex(a)
	}
 
	return hex.toUpperCase()
}
/**
 * Convierte un rgba a Hsla, el alfa es opcional
 * @memberOf module:Utils.Colors
 * @function Rgb2Hsl
 * @param {Number} r     Rojo
 * @param {Number} g     Verde
 * @param {Number} b     Azul
 * @param {Number} alpha Opacidad
 * @return {Object} Objecto con los datos HSLA
 */
export function Rgb2Hsl (r, g, b, alpha = 100) {
	r /= 255
	g /= 255
	b /= 255

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let [hue, sat, light] = [NaN, 0, (max + min)/2];
    let d = max - min;

    if (d !== 0) {
        sat = (light === 0 || light === 1)
            ? 0
            : (max - light) / Math.min(light, 1 - light);

        switch (max) {
            case r:   hue = (g - b) / d + (g < b ? 6 : 0); break;
            case g: hue = (b - r) / d + 2; break;
            case b:  hue = (r - g) / d + 4;
        }

        hue = hue * 60;
    }

    return {
    	h: Math.round(hue),
    	s: Math.round(sat * 100),
    	l: Math.round(light * 100),
    	a: alpha
    };
}
/**
 * Convierte un RGB en HWB
 * @memberOf module:Utils.Colors
 * @function Rgb2Hwb
 * @param {Number} r Rojo
 * @param {Number} g Verde
 * @param {Number} b Azul
 * @return {Object} Objecto HWB
 */
export function Rgb2Hwb(r, g, b, a = 100) {
    var hsl = Rgb2Hsl(r, g, b, a),
    	w = (1 / 255) * Math.min(r, Math.min(g, b)),
    	b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))
   
    return {
    	h: hsl.h,
    	w: Math.round(100 * w),
    	b: Math.round(100 * b),
    	a: hsl.a
    }
}
/**
 * Calcula el HSP de un RGB 
 * @memberOf module:Utils.Colors
 * @function Rgb2Hsp
 * @param {Number} r Rojo(0-255)
 * @param {Number} g Verde(0-255)
 * @param {Number} b Azul(0-255)
 * @return {Object} Un Objecto confomado por una clave hsp y una booleana isDark que indica si es o no oscuro el color
 */
export function Rgb2Hsp(r, g, b) {
	// HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
	let hsp = Math.sqrt(
	    0.299 * (r * r) +
	    0.587 * (g * g) +
	    0.114 * (b * b)
	  );

	return {
		hsp,
		isDark: !(hsp > 127.5)
	}
}

//-------------------- HSLA --------------------------------------------------------------------
/**
 * Valida si es un Objecto o String HSL
 * @memberOf module:Utils.Colors
 * @function isHSL
 * @param  {(Object|String)}  hsl
 * @return {Boolean}
 */
export function isHSL(hsl) {
	return isObject(hsl) && hasProp(hsl, 's') || /(^hsl\([\d%?,?\s?]+\)$)|(^hsla\(([\d%?,?\s?]+)\s?\/?\s?(([\d.\d]|[\d\%])+)\)$)/gi.test(hsl)
}
/**
 * Convierte HSLA en RGBA
 * @memberOf module:Utils.Colors
 * @function Hsl2Rgb
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {Object} Object rgba
 */
export function Hsl2Rgb(hue = 0, sat = 100, light = 50, alpha = 100) {
	hue = hue % 360
	if (hue < 0) {
		hue += 360
	}
	sat /= 100
	light /= 100

	let f = (n) => {
		let k = (n + hue / 30) % 12,
			a = sat * Math.min(light, 1 - light)
		return light - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)))
	}

	return {
		r: Math.round(255 * f(0)),
		g: Math.round(255 * f(8)),
		b: Math.round(255 * f(4)),
		a: alpha
	}
}
/**
 * Convierte Hsl a Hexadecimal
 * @memberOf module:Utils.Colors
 * @function Hsl2Hex
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {String}
 */
export function Hsl2Hex(hue = 0, sat = 100, light = 50, alpha = 100) {
	let r = Hsl2Rgb(hue, sat, light, alpha)
	return Rgb2Hex(r.r, r.g, r.b, r.a)
}
/**
 * Convierte HSL a HWB
 * @memberOf module:Utils.Colors
 * @function Hsl2Hwb
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {Object} Objecto hwba
 */
export function Hsl2Hwb(hue = 0, sat = 100, light = 50, alpha = 100) {
	let r = Hsl2Rgb(hue, sat, light, alpha),
		w = (1 / 255) * Math.min(r.r, Math.min(r.g, r.b)),
    	b = 1 - (1 / 255) * Math.max(r.r, Math.max(r.g, r.b))

    	w = Math.round(w)
    	b = Math.round(b)

	return {
		h: Math.round(hue),
		w, 
		b,
		a: alpha
	}
}
//-------------------- HWB ---------------------------------------------------------------------
/**
 * Valida si es un Objecto o string HWB valido 
 * @memberOf module:Utils.Colors
 * @function isHwb
 * @param  {(Object|String)}  hwb
 * @return {Boolean}
 */
export function isHwb(hwb) {
	return isObject(hwb) && hasProp(hwb, 'w') || /^hwb\(([\/?\d%?\s?]+)\)$/gi.test(hwb)
}
/**
 * Convierte un HWB en RGBA
 * @memberOf module:Utils.Colors
 * @function Hwb2Rgb
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {Object}
 */
export function Hwb2Rgb(hue = 0, white = 0, black = 0, alpha = 100) {
	hue /= 360
	white /= 100
	black /= 100

	let radio = white + black,
		r,g,b, i, v, f, n;

	if (radio > 1) {
		white = black = radio
	}

	i = Math.floor(6 * hue)
	v = 1 - black,
	f = 6 * hue - i

	if ((i & 0x01) !== 0) {
		f = 1 - f
	}

	n = white + f * (v - white)

	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = white; break;
		case 1: r = n; g = v; b = white; break;
		case 2: r = white; g = v; b = n; break;
		case 3: r = white; g = n; b = v; break;
		case 4: r = n; g = white; b = v; break;
		case 5: r = v; g = white; b = n; break;
	}
	return {
		r: Math.round(255 * r),
		g: Math.round(255 * g),
		b: Math.round(255 * b),
		a: alpha
	}
}
/**
 * Convierte un HWB a HEX
 * @memberOf module:Utils.Colors
 * @function Hwb2Hex
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {String}
 */
export function Hwb2Hex(hue = 0, white = 0, black = 0, alpha = 100){
	let r = Hwb2Rgb(hue, white, black, alpha)
	return Rgb2Hex(r.r, r.g, r.b, r.a)
}
/**
 * Convierte un HWB a HSL
 * @memberOf module:Utils.Colors
 * @function Hwb2Hsl
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {Object}
 */
export function Hwb2Hsl(hue = 0, white = 0, black = 0, alpha = 100) {
	let r = Hwb2Rgb(hue, white, black, alpha)
	return Rgb2Hsl(r.r, r.g, r.b, r.a)
}


//============================================================================================
// UTILIDADES PARRA LAS FUNCIONES DE COLORES
//============================================================================================

/**
 * Convierte un color a su representacion en String
 * @memberOf module:Utils.Colors
 * @function Color2Str
 * @param {(String|Object)} color El color
 * @return {String}
 */
export function Color2Str(color) {
	if (isObject(color)) {
		if (hasProp(color, 'r')) {
			return hasProp(color, 'a') && color.a < 100 ?
				`rgba(${color.r} ${color.g} ${color.b} / ${(color.a)}%)`
				: `rgb(${color.r} ${color.g} ${color.b})`
		} else if (hasProp(color, 'w')) {
			return hasProp(color, 'a') && color.a < 100 ? 
				`hwb(${color.h} ${color.w}% ${color.b}% / ${color.a})` :
				`hwb(${color.h} ${color.w}% ${color.b}%)`
		} else if (hasProp(color, 'h')) {
			return hasProp(color, 'a') && color.a < 100 ?
				`hsla(${color.h} ${color.s}% ${color.l}% / ${(color.a)}%)`
				: `hsl(${color.h} ${color.s}% ${color.l}%)`
		}
	} else {
		return `#${color.toUpperCase()}`
	}
}
/**
 * Convierte un porcentaje a una expresión Hexadecimal
 * @memberOf module:Utils.Colors
 * @function Per2Hex
 * @see [Github]{https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4?permalink_comment_id=3036936#gistcomment-3036936}
 * @param {Number} percent El valor del porcentaje
 * @return {String}
 */
export function Per2Hex(percent) {
	percent = Math.max(0, Math.min(100, percent))
	let PerHex = Math.round(percent / 100 * 255).toString(16)
	return PerHex.padStart(2, "0").toUpperCase()
}
/**
 * Convierte un Hexadecimal a Porcentaje
 * @memberOf module:Utils.Colors
 * @function Hex2Per
 * @param {String} Hex Hexadecimal
 * @return {Number}
 */
export function Hex2Per(Hex) {
	return Math.round(((parseInt(Hex, 16) - 0) / 255) * 100)
}
/**
 * Ilumina u oscurece un color <br/>
 * Similar a las funciones de Sass
 * @memberOf module:Utils.Colors
 * @function lightOrDark
 * @see [Author y Blog original]{https://css-tricks.com/snippets/javascript/lighten-darken-color/}
 * @param  {String} color Color Hexadecimal
 * @param  {Number} amt   Importe si e positivo seria Light negativo para dark
 * @return {String}       Color Hexadecimal
 */ 
export function lightOrDark(color, amt){
	if(!isHex(color)) {
		return color;
	}

	let hex = color.slice(1),
		num = parseInt(hex, 16),
		nor = (c) => {
			if (c > 255) {
				c = 255
			} else if(c < 0) {
				c = 0
			}
			return c
		},
		r = nor((num >> 16) + amt),
		g = nor((num & 0x0000FF) + amt),
		b = nor(((num >> 8) & 0x00FF) + amt)

	return "#" + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
}
/**
 * Convierte un representación String de un color a un Objecto, si toRgb es verdadero el color suministrado
 * sera trasformado en un color RGB  y retorna su objecto dado.
 * @memberOf module:Utils.Colors
 * @function ColorStr2Obj
 * @param {String}  color representación de colores
 * @param {Boolean} toRgb Retorna objecto rgb si se establece a true
 */
export function ColorStr2Obj(color, toRgb = false) {
	if (isHex(color)) {
    	return Hex2Rgb(color)
  	} else {
  		var c = /^([rgb|rgba|hsl|hsla|hwb]+)\(([\d]+),?\s?([\d%?]+),?\s?([\d%?]+),?\s?\/?\s?([\d%?]+)?\)$/gi.exec(color),
  			o = {}, rgb;
  		if (not(c)) {
  			return color
  		}
  		switch(c[1]) {
  			case 'rgb':
  			case 'rgba':
  				o.r = parseInt(c[2])
  				o.g = parseInt(c[3])
  				o.b = parseInt(c[4])
  				o.a = parseInt(c[5] || 100)
  				rgb = o
  			break;
  			case 'hsl':
  			case 'hsla':
  				o.h = parseInt(c[2])
  				o.s = parseInt(c[3])
  				o.l = parseInt(c[4])
  				o.a = parseInt(c[5] || 100)
  				rgb = toRgb ? Hsl2Rgb(o.h, o.s, o.l, o.a) : null
  			break;
  			case 'hwb':
  				o.h = parseInt(c[2])
  				o.w = parseInt(c[3])
  				o.b = parseInt(c[4])
  				o.a = parseInt(c[5] || 100)
  				rgb = toRgb ? Hwb2Rgb(o.h, o.w, o.b, o.a) : null
  			break;
  		}
  		return toRgb ? rgb : o
  	}
}


String.prototype.toObject = function(toRgb = false) {
	return ColorStr2Obj(this, toRgb)
}