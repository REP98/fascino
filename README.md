# Fascino JS v1.1
<p>
	Framework JS, modular y expansible
</p>
<p>
	Fascino ofrece manera rápida de programar agregando muchas funciones con solo incluirla, cuenta con muchas funcionalidades
	además es mucho mas rápido que otros framework ya que solo es una abreviatura de las API nativas de Javascript
</p>

## Instalación
Puede instalarlo de manera fácil, descargando el repositorio de github
```shell
git clone https://github.com/REP98/fascino.git
```
por npm
```shell
npm i @rep985/fascino
```
o integrarlo directamente a su proyecto por jsDelivr
```html
<!-- Solo el core -->
<script src="https://cdn.jsdelivr.net/npm/fascino@1.1.0/dist/fascino.min.js"></script>
```
```html
<!-- Core con plugin -->
<script src="https://cdn.jsdelivr.net/npm/fascino@1.1.0/dist/fascino-all.min.js"></script>
```
## Ejemplo de selección

```js
// Api nativa
let Body = document.querySeletor('body')
let MyDiv = document.querySelectorAll('.midiv')

// En Fascino
let Body = _$('body')
let MyDiv = _$('.midiv')
```
<p>
	En el ejemplo anterior se muestra como al seleccionar un elemento Fascino hace uso de <code>querySeletor</code> y <code>querySeletorAll</code> para ello
	pero te lo resume en <code>_$('mislector')</code> para escribir meno, así lograr códigos mas pequeños y que no relentisen tu página web.
	Así mismo son todas las funcionalidades de Fascino solo toma un setenar de operaciones rutinarias y las unifica para usarlas juntas
</p>

## Otro Ejemplo

```js
// Común mente si una variable esta vaciá, indefinidas, es falsa o nula hacemos un mega condicional
if (mivar === undefined || mivar === null || mivar === false /*...*/) {
	console.log('La variable esta vacía')
}
// En fascino hay una función que se encarga de ese mega condicional, funciona igual que la de PHP
if(_$.empty(mivar)) {
	console.log('La variable esta vacía')
}
// Y Otra que solo se encarga de los valores nulo e indefinido
if (_$.not(mivar)) {
	console.log('La variable esta vacía')
}
```
<p>Que fácil no?</p>
<p>Fascino no re-inventa la rueda solo es alguien que pone las 4 al carro mientras tu solo vez una</p>

## Documentación

<p>La documentación oficial la puede encontrar en <a href="https://rep98.github.io/fascino">rep98.github.io/fascino</a></p>

## Changelog
Conozca los cambios realizados en la [ultima versión](CHANGELOG.md)

## Licencia
FascinoJs licenciado bajo la licencia [MIT](LICENCES)