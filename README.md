## Fascino JS/CSS
<p>
	Framework JS, modular y expansible
</p>
<p>
	Fascino ofrece manera rápida de programar agregando muchas funciones con solo incluirla, cuenta con muchas funcionalidades
	además es mucho mas rápido que otros framework ya que solo es una abreviatura de las API nativas de Javascript
</p>

### Ejemplo de selección

```js
// Api nativa
let Body = document.querySeletor('body')
let MyDiv = document.querySelectorAll('.midiv')

// En Fascino
let Body = _$('body')
let MyDiv = _$('.midiv')
```
<p>
	En el ejemplo anterior se muestra como al seleccionar un elemento Fascino hace uso de `querySeletor` y `querySeletorAll` para ello
	pero te lo resume en `_$(mislector)` para escribir meno, así lograr códigos mas pequeños y que no relentisen tu página web.
	Así mismo son todas las funcionalidades de Fascino solo toma un setenar de operaciones rutinarias y las unifica para un solo uso
</p>

### Otro Ejemplo

```js
// Común mente si una variable esta vaciá, indefinidas, es falsa o nula hacemos un mega condicional
if (mivar === undefined || mivar === null || mivar === false /*...*/) {
	console.log('La variable esta vaciá')
}
// En fascino hay una función que se encarga de ese mega condicional
if(_$.empty(mivar)) {
	console.log('La variable esta vaciá')
}
// Y Otra que solo se encarga de los valores nulo e indefinido
if (_$.not(mivar)) {
	console.log('La variable esta vaciá')
}
```
<p>Que fácil no?</p>
<p>Fascino no reinventa la rueda solo es alguien que pone las 4 al carro mientras tu solo vez una</p>

### Documentación

<p>La documentación oficial la puede encontrar en <a href="https://fascino.svilupporeo.site">fascino.svilupporep.site</p>
<p>Si desea ir directamente a la API presione <a href="https://fascino.svilupporeo.site/docs/api">aquí</p>
