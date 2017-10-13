# MRW_05 - Criando uma aplicação em React
Umas das recomendações do facebook é que devemos instalar as depêndencias do react via `npm` pois
dessa forma não temos muito trabalho e tems uma fácil manutenção quando precisarmos atualiar algo

### Passo 1 - Instale o React e ReactDom através do comando:

Instalando react e react-dom como dependências gerais.
```
$ npm install --save react react-dom
```

### Passo 2 - Criar um componente em src/app.js:
Aqui estamos criando um componente React sem jxs e exportando ele atrávez do module.export

```
'use strict'

var Title = React.createClass({
  render: function(){
    return React.createElement('h1', null, 'Titulo');
  }
})


module.exports = Title; // exportando o componene

```

### Passo 3 - Importar o componente em src/index.js
Aqui estamos importando um componente React e estamos renderizando ele no index.html

```
'use strict'

var Title = require('./app'); // importando o componente

ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"')
)
```

Estrutura do `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
  ...
</head>
<body>
  <div data-js="app"></div> // aqui será importando todo a estrutura react.

  <script src="/static/bundle.js"></script> // arquivo final gerado pelo webpack em desenvolvimento
</body>

</html>
```
Quando seguimos o padrão commonJS precisamos importar tudo aquilo que vamos utilizar, nesse caso o além do componente temos que importar o React

**Aquivo app.js**
```
var React = require('react');
```

**Arquivo indexjs**
```
var React = require('react');
var ReactDOM = require('react-dom');
```
