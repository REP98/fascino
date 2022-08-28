## master

## v.1.0.1
* Arreglado error de la Función `_$().wrap()`
* Arreglo del Package.json
* Mejor exportación de plugins
* Correcciones adiciones de texto y documentación

## v1.0.0
* Migración de [Laravel Mix](https://laravel-mix.com) a [Rollup](https://rollupjs.org)
* Mejor integración en proyectos NPM
* Optimización de código.
* Migración de XMLHttpRequest a API Fetch, aunque se conserva la antigua versión a través de [Axios](https://axios-http.com)

### Funciones Removidas
* `_$.randomNum` fue removida use `_$.random`
* `_$.ajax` fue removido para usar la API Fetch pero se mantiene XMLHttpRequest con [Axios](https://axios-http.com). Solo se elimino el Invocador Ajax las demas funciones como `get`, `post`, `load` entre otras se conservan, pero ahora funciona con `_$.ft`
* `_$.history` Use API History si necesita controlar el histórico del navegador.
* Componeten `_$.lightbox` fue removido ya que se espera agrandar en otro repositorio.

### Funciones Nuevas
* `_$.axios` Debido a la naciente y poderosa API Fetch hemos decidido conservar el Objecto XMLHttpRequest a través de la librería de [Axios](https://axios-http.com).  Esta Función es solo un invocador de la interfaz Axios pre configurada.
* `_$.ft` API Fetch en modo básico pronto reemplazaremos AJAX con esta función.
* `_$.jsonToFormdata` Convierte un objecto JSON a un objecto FromData listo para su uso.
* `_$.randomMap` Obtiene un valor aleatorio de una Matriz u Objecto
* `_$.strToArr` Convierte una cadena de texto en una matriz
* `_$.url` API URL y URLSearchParams, Construye una URL valida para peticiones Fetch o XMLHttpRequest


## v0.1.60
* Añade la función `_$.addFn` para una mejor integración de plugin  de terceros.
