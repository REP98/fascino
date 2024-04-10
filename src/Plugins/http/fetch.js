import { Serialize } from './serialize.js'
import {
    camelCase,
    extend,
    each,
    isArrayish,
    isObject,
    isFunction,
    jsonToFormdata,
    not,
    url,
    empty
} from '../../Utils/Utils.js'
/**
 * Opciones de Configuración para FT
 * @const
 * @memberOf module:Plugins.HTTP.fetch
 * @namespace OptionsFT
 * @type {Object}
 */
export const OptionsFT = {
    /**
     * Metodo de la llamada
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    method: null,
    /**
     * Encabezado de la Peticion
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {(Object|Headers)}
     */
    headers: null,
    /**
     * Cuerpo de la Solicitud, <cite>Tenga en cuenta que una solicitud que utiliza el método GET o HEAD no puede tener un cuerpo.</cite>
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {(Blob|BufferSource|FormData|URLSearchParams|USVString|ReadableStream|Object)}
     */
    body:null,
    /**
     * Modo para la Solicitud
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    mode:null,
    /**
     * Controla lo que hacen los navegadores con las credenciales (cookies, entradas de autenticación HTTP y certificados de cliente TLS).<br>
     * para saber mas consulte la [guia]{@link https://developer.mozilla.org/en-US/docs/web/api/fetch#parameters}
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    credentials:null,
    /**
     * Indica cómo se debe comportar la solicitud con el cache del navegador.
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    cache: null,
    /**
     * Indica cómo debe actuar si la respuesta devuelve una redirección.
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {(Object|String)}
     */
    redirect: null,
    /**
     * Indica el tipo de respuesta a recibir
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    typeResponse: "json",
    /**
     * Si el recurso solicitado es del tipo multimedia especifique aqui el mime type del recurso adquirido
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    mime: null
}

function getResource (resource) {
    if (resource instanceof Request ){
        return resource
    }else if (isArrayish(resource)) {
        let ul = resource.shift();
        if(resource.length > 0) {
            return url(ul, resource[0])
        } else {
            return url(ul)
        }
    } else if(isObject(resource)) {
        return url(resource.url, resource.params)
    }

    return resource
}

function getSettingsOfForm(form, options = {}){
    var d = {},  
        url = getResource(form.getAttribute("action")),
        otherData = ['mode', 'credentials', 'cache', 'redirect', 'type-response', 'mime']

    d.method = form.getAttribute('method').toUpperCase()
    if (form.hasAttribute('enctype')) {
        d.headers = {}
        d.headers['Content-Type'] = form.getAttribute('enctype')
    }

    d.body = new FormData(form)

    each(otherData, (n) => {
        if (form.hasAttribute(`data-${n}`)) {
            d[camelCase(n)] = form.getAttribute(`data-${n}`)
        }
    })

    d = _$.extend({}, d, options)

    return {
        url,
        obj: getSettings(_$.extend({}, OptionsFT, d))
    }

}

function getSettings (s) {
    if (!isObject(s)) {
        return false
    }
    
    let o = extend({}, OptionsFT, s),
        op = {}

    if (o.method.toLowerCase() !== 'post' && not(o.headers)) {
        o.headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        })
    }


    each(o, (v,n) => {
        if (!not(v)) {
            if(n == 'headers') {
                if (v instanceof Headers) {
                    op[n] = v
                } else if(isObject(v)) {
                    op[n] = new Headers(v)
                }
            } else if(n == 'body') {
               op[n] =  v
            } else if (n == 'credentials') {
                if (["omit", "same-origin", "include"].indexOf(v) > -1) {
                    op[n] = v
                }
            } else if (n == 'cache') {
                if (["default","no-store","reload","no-cache","force-cache","only-if-cached"].indexOf(v) > -1) {
                    op[n] = v
                }
            } else {
              op[n] = v  
            }            
        }
    })

    return !not(op) ? op : false
}
/**
 * Nueva API fetch la evolución de XHR<br>
 * Antes de Usar verifique la [Compatibilidad]{@link https://caniuse.com/fetch}
 * @function fetch
 * @memberOf module:Plugins.HTTP
 * @param  {(String|URL|Request|Array|Object|HTMLFormElement)} resource recurso de la url o un formulario de la instancia de HTMLFormElement
 * @param  {Object} settings Opciones de configuraciones
 *
 * @return {Object}
 */
export default function http(resource, settings = {}) {
    let loading = false,
        chunks = [],
        results = null,
        error = null,
        controller = null,
        u, s, tr, ml 

    if (resource instanceof HTMLFormElement) {
        let arg = getSettingsOfForm(resource, settings)
        u = arg.url
        s = arg.obj
    } else {
        u = getResource(resource) 
        s = getSettings(settings)
    }

    tr = s.typeResponse
    ml = s.mime

    delete s.typeResponse
    delete s.mime

    const _resetLocals = () => {
        loading = false;

        chunks = [];
        results = null;
        error = null;

        controller = new AbortController();
    }


    const _readBody = async (response, typeResponse = 'json', mimeType = null) => { 
        const reader = response.body.getReader(),
              length = +response.headers.get('content-length'); 

        let received = 0

        while (loading) {
            const { done, value } = await reader.read(),
                payload = { detail: { received, length, loading } },
                onProgress = new CustomEvent('fetch-progress', payload),
                onFinished = new CustomEvent('fetch-finished', payload)

            if (done) {
                // Finish loading 
                loading = false;
                window.dispatchEvent(onFinished)

            } else {
                // Push values to the chunk array
                chunks.push(value);
                received += value.length;

                 window.dispatchEvent(onProgress)
            }
        }

        let body = new Uint8Array(received),
            position = 0

        for (let chunk of chunks) {
            body.set(chunk, position)
            position += chunk.length
        }
        if (typeResponse.toLowerCase() === "json") {
            var n = new TextDecoder('utf-8').decode(body)
            try{
                return JSON.parse(n)
            } catch(e) {
                return n
            }
        } else if(typeResponse.toLowerCase() === "blob") {
            if (!not(mimeType)) {
                return new Blob([body], {type: mimeType})
            } else {
                return new Blob([body])
            }
            
        } else {
            return new TextDecoder('utf-8').decode(body)
        }
    }
    /**
     * Incia la llamada fetch
     * @memberOf module:Plugins.HTTP.fetch
     * @function start
     * @return {Promise}
     */
    const start = async () => {
        _resetLocals()
        loading = true 
        let signal = controller.signal

        try{
            const  response = await fetch(u, {signal, ...s})
            
            if (response.status >= 200 && response.status < 300) {
                return await _readBody(response, tr, ml)
            } else {
                throw new Error(response.statusText)
            }
        } catch(err) {
            error = err
            results = null
            return error
        } finally {
            loading = false
        }        
    }
    /**
     * Cancela petición en curso
     * @memberOf module:Plugins.HTTP.fetch
     * @function cancel
     * @return {Promise}
     */
    const cancel = () => {
        let onAbort = new CustomEvent('fetch-abort', { 
            detail: { 
               status: "abourt" 
            } 
        })
        
        controller.abort()
        _resetLocals()
        window.dispatchEvent(onAbort)
    }

    return {
        start,
        cancel
    }
}
