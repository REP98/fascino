/**
 * Plugins Progress Bar
 * @namespace Progress
 * @memberOf module:Plugins
 */

import Progress from './Progress.js'

/**
 * Añade u Obtiene el valor de la barra de progreso
 * @memberOf _$
 * @function progressVal
 * @param  {Number} newValue Valor a asignar
 * @return {(Void|Number)} 
 */
_$.addFn('progressVal', function(newValue){
    if (_$.not(newValue)) {
        return this.get(0).getValue()
    } 
    return this.each((p)=>{
        if(p.nodeName == 'PROGRESS-BAR') {
            p.setValue(newValue)
        }
    })
})
/**
 * Obtiene o establece el valor de los atributos de la barra de progreso
 * @memberOf _$
 * @function progressSet
 * @param  {String} name Nombre del atributo
 * @param  {(String|Number|Null)} val Valor a asignar
 * @return {(Void|Number)} 
 */
_$.addFn('progressSet', function(name,val = null){
    if (_$.not(val)) {
        let it = this.get(0)
        return name in it ? this[name] : null
    } 
    return this.each((p)=>{
        if(p.nodeName == 'PROGRESS-BAR') {
            if(['max', 'step', 'speed'].indexOf(name) == -1) {
                if (name == 'bg') {
                    p.setBg(val)
                } else if (name == 'value-bg') {
                    p.setBgValue(val)
                } else if (name == 'size') {
                    p.setSize(val)
                }
            } else {
                p[name] = val
            }
        }
    })
})
