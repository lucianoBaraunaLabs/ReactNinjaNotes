# MRW_06 - Usando o sistema de módulos do ES6/2015

Devemos instalar o babel como depêndencia de desenvolvimento por conta dele ser só um transpilador de código sendo assim não a necessidade de ser colocado em produção. O babel vai transpilar o ES2015/ES6/ para ES5 quando for feito o bundle.

Para instalar o babel e presets digitamos:
```
npm i --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-stage-0
```
- babel-core : módulo principal
- babel-loader : para ser utilizado no webpac
- babel-preset-es2015 : é um preset responsável para fazer com que o nosso código
ES6/ES2015 seja convertido para ES5
- babel-preset-stage-0 : Serve para utilizarmos algumas fetures do ECMAScript7

### Criar arquivo e configurar .babelrc

**Crie arquivo .babelrc**

Ao criar esse aquivos passamos para eles as configurações que queremos utilizar para que sejam usadas na hora de compilar o arquivo.

```
{
  "presets": [ // aqui fica os presets que estamos utilizando
    "es2015",
    "stage-0"
  ]
}
```
### Atualizar o webpack.config.js
Toda vez que alteramos algo no js ele já gere nosso código compilado.
Abaixo a configuração que é feita para o babel rodar junto do webpack
```

entry: ...,

output: {
	...
},

module: { // aqui fica os módulos que queremos utilizar no webpack
      loaders: [{ // cada obj aqui dentro diz para o webpack o que ele faz com cada arquivo.
        test: /\.js$/, // todos os aquivos js
        exclude: /node_modules/, // menos a pasta node_modules
        include: /src/, // tudo que estiver dentro de src é colocar essa propriedade também para melhora de performance
        loader: 'babel' // aqui você diz qual loader vai utilizar. A partir dessa linha o babel começa a verficar todos os arquivos segundo a prop test fazendo sua função que é compilar o js

      }]

    }
	...
```

### Exportando e importando os módulos em ES2015

#### Exportando

Esse é o padão de exportação no node em `commonJS`
```
module.exports = Title;
```
e esse é padrão em ES2015 que funciona basicamente igual ao `module.exports`
```
export default Title
```

No arquivo **app.js** fica assim:

```
'use strict'

var React = require('react');

var Title = React.createClass({
  render: function(){
    return React.createElement('h1', null, 'Titulo');
  }
})


export default Title // exportando o componente aqui.
```

#### Importando
Os módulos de importação não podem vir atribuidos a variáveis, devemos sempre colocar eles nas primeiras linhas do arquivo onde forem chamados.

**Descrição do método:**
import foo from 'bar'
 - `foo` é o nome da variável que você quiser
 - `bar` é a origem do arquivo se ele não vinher com `./` antes da local o `from` irá pegar dentro da pasta node_modules se agora se vinher ex: `./app`, ele irá buscar dentro do diretório `app`

Exemplo:

`import React from 'react'` Pegando a lib react de dentro do diretório node_moules e atribuindo a variável React

`import Title from './app'` Pegando o componente ou qualquer outra coisa criado em app e atribuindo a variável Title.


**import foo from 'bar'**
____

Código no padrão commonJS

```
var Title = require('./app');
```

E agora no padrao ES2015

```
import Title from './app'
```

O código do `index.js` fica assim:

```
import Title from './app'
var React = require('react');
var ReactDOM = require('react-dom');


ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"')
)
```
### Importar o metódo ReactDom com short hand notation do ES2015

Utilizar o import dessa forma é uma short hand notation que significa.

```
import { foo:bar } from 'zoo'
```

Que estou importando o método de origem para o nome ao qual eu quero que seja atribuido, Exemplo:

```
import { comodo: quarto } from 'casa' // importando de casa o método quarto para virar a variável comodo.
```

Caso o método já seja exportado com um nome e você saiba o nome dele, você pode fazer igual ao que o react-dom já faz com o seu método render.

Você pode abreviar mais ainda a anotação para que ele tenha o mesmo nome do método exportado. Ex:
```
import { render:render } from 'react-dom'
```
