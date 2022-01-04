/**
 * Fascino JS
 * @version 0.0.6
 * @author Robert Pérez <delfinmundo@gmail.com>
 * @copyright 2021 [Sviluppo Web]{@link https://svilupporep.site}
 * @license Licensed under MIT
 */
import { _$ } from './core'

if (typeof window._$ === undefined) {
	window._$ = _$
}

if (!_$.hasProp(global, _$)) {
	global._$ = _$
}

require('./fascino.js')

export default _$
