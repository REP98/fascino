import {
	empty,
	hasProp
} from './Utils.js'
/**
 * Mini Motor de plantillas javascript
 * @memberOf module:Utils
 * @function template
 * @example <caption>Uso</caption>
 * var html = `
 *    <div class='alert alert<%this.type%>' role="alert">
 *       <%this.content%>
 *    </div>
 * `;
 * var options = {
 *    type: 'info',
 *    content:'This is Alerts'
 * }
 *
 * document.write(_$.template(html,options))
 * @param  {String} html    Código HTML de la plantilla
 * @param  {Object} options Opciones de plantilla para reemplazar
 * @param  {Object} conf    Configuraciones del motor
 * @return {String}
 */
export default function template(html, options, conf) {
	let ReEx, re = '<%(.+?)%>',
		reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
		code = 'with(obj) { var r=[];\n',
		cursor = 0,
		result,
		match,
		add = function(line, js) {
			/* jshint -W030 */
			js?
			(code += line.match(reExp) ? `${line}\n` : `r.push(${line})\n`) :
			(code += line !== '' ? `r.push('${line}')\n` : '')

			return add
		}

	if (!empty(conf)) {
		if ((hasProp(conf, 'beginToken'))) {
			re = re.replace('<%', conf.beginToken)
		}
		if ((hasProp(conf, 'endToken'))) {
			re = re.replace('%>', conf.endToken)
		}
	}

	ReEx = new RegExp(re, 'g')
	match = ReEx.exec(html)

	while (match) {
		add(html.slice(cursor, match.index).replace(/[\n]/g, ' '))(match[1], true)
		cursor = match.index + match[0].length
		match = ReEx.exec(html)
	}
	add(html.substr(cursor, html.length - cursor).replace(/[\n]/g, ' '))

	code = (code + `return r.join('') }`).replace(/[\r\t]/g, ' ')
	/* jshint -W054 */
	try {
		result = new Function('obj', code).apply(options, [options])
	} catch (err) {
		console.error(err)
		console.error("'" + err.message + "'", ' in \n\nCode:\n', code, '\n') /* eslint no-console: 0, quotes: 0 */
	}
	return result
}
