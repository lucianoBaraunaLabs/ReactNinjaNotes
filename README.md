# ReactNinjaNotes
Anotações do curso [React Ninja](https://www.udemy.com/curso-reactjs-ninja/) Ministrado pelo [Fernando Daciuk](https://github.com/fdaciuk)

Essa organização nos estudos foi inspirado  [nesse repositório](https://github.com/clarabatt/JSNinjaNotes) ;-) :

Obrigado [@clarabatt](https://github.com/clarabatt) pela luz ;-)


Repositórios de estudos:
  - [Repositório geral](https://github.com/da2k/curso-reactjs-ninja/)
  - [Meu respositório](https://github.com/lucianoMeusCursos/curso-reactjs-ninja/)
  - [Meus exemplos do curso](https://github.com/lucianoMeusCursos/ReactNinjaExample)

## Aulas

# Módulo 01 - Parte 1

#### [M1#A02](M1A_02.md) - Introdução
  * O que é o __react__.
  * Onde vamos utilizar o __React__?
  * Onde __NÃO__ devemos utilizar o React?
  * Quais são os __problemas que o React resolve__

#### [M1#A03](M1A_03.md) - Sobre o React
  * Começando a __trabalhar__ com react.
    * Criando um servidor htpp atráves do node
    * Criar um elemento com react
    * Renderizar esse elemento no Dom
    * Elementos React são diferente que elementos no DOM

#### [M1#A04](M1A_04.md) - Criando elementos aninhados
  * Criando elementos aninhados.
  * Criando elementos atráves do React.createElement()
  * Criando elementos alinhandos

#### [M1#A05](M1A_05.md) - Conhecendo o JSX
  * Conhecendo o __JSX__.
    * Criando um elemento com jsx

#### [M1#A06](M1A_06.md) - Aninhano com JSX e criando componentes
  * Aninhado o JSX e criando um componente.
    * Criando nosso próprios componentes com __React.createClass()__.

_____

# Módulo React + Webpack

#### [MRW#01](MRW_01.md) - Congiguração do professor
  * Configurações do professor.
  * Sobre o webpack

#### [MRW#02](MRW_02.md) - Configuração básico do webpack.
  * Criar o package.json.
  * Instalar o webpack como dependencia de desenvolvimento.
  * Configurando o webpack
    * Configurando o `module.exports`
    * Criando a propriendade `entry`
    * Criando a propriendade `output`
  * Criando o `index.js`
  * Gerando o `bundle.js`
  * Criando o `index.html`

#### [MRW#03](MRW_03.md) - Usando o server do webpack
  * Criando um servidor com webpack.
  * A configuração do `publicPath` e start do `webpack-dev-server`
  * Linkando o caminho para o script

#### [MRW#04](MRW_04.md) - Modularizando a Aplicação
  * Criar um novo arquivo em src/app.js
  * Entender o require e o module.exports do CommonJS
  * Exportar um método sum, que irá somar dois valores
  * Importar esse método no `src/index.js`

#### [MRW#04](MRW_05.md) - Criando uma aplicação em React
  * Instalar as dependências React e ReactDOM
  * Criar um componente em src/app.js
  * Importar o componente em src/index.js

#### [MRW#06](MRW_06.md) - Usando o sistema de módulos do ES6/2015
 * Instalação das dependências
	* babeljs.io
	* babel pressets
 * Congfiguração do Babel
	* Criar arquivo e configurar .babelrc
	* Atualizar o webpack.config.js
 * Exportando os módulos em ES2015
 * Importar o metódo ReactDom com short hand notation do ES2015

#### [MRW#07](MRW_07.md) - Configurando JSX no babel e sourcemaps no Webpack
* Adicionar o preset do react;
* Atualizar o .babelrc, adicionando esse preset
* Atualizar os arquivos `src/app.js` e `src/index.js` para usar JSX
* Configurar sourcemaps para melhorar o debug do código

#### [MRW#08](MRW_08.md) - Configurando nossa aplicação para usar o React hot loader.
* Instalar o react hot loader **(versão beta - nessa video aula ainda não tinha autualizado)**
* Atualizar o webpack.config
* Atualizar o .babelrc
* Criar um arquivo server.js para rodar com o Node.js
* Criar a entrada start no package.json

#### [MRW#09](MRW_09.md) - Colocando o hot loader para funcionar.
* Transformando nosso arquivo app.js como entrada da aplicação
* Transformando o index.js como entrada principal
* Refatorando o código index.js

#### [MRW#10](MRW_10.md) - Configurando a ferramenta de link
* Adicioar dependências: standard e standard-loader
* Editar o webpack.config, adicionando o standard
* Adicioar dependências: webpack-validatork

# Módulo 01 - Parte 2

#### [M1#A07](M1A_07.md) - Passando props
#### [M1#A08](M1A_08.md) - Atributos do HTML
#### [M1#A09](M1A_09.md) - getDefaultProps
#### [M1#A10](M1A_10.md) - Passando outros dados via props
#### [M1#A11](M1A_11.md) - Renderizando componentes com funções puras
 * Maneiras de renderizar
 * Sobre funções puras
 	* O que são funções puras
 * Retornando componentes puros com Arrow functions - ES6
 * Usando template string
 * Short Hand Notation no argumento pegando de props
 * getDefaultProps agora é defaultProps um método estático do função
 * Código anterior sem ES6
 * Código refatorado com ES6

### [M1#A12](M1A_12.md) - Renderizando componentes com classes do ES6/2015
### [M1#A13](M1A_13.md) - Conhecendo a prop "key"
 * Como passar style(css) no jsx
 * Criando um elemento para ser iterado
 * Utilizando a key
### [M1#A14](M1A_14.md) - Problemas ao duplicar a "key"
### [M1#A15](M1A_15.md) - Eventos
 * O que precisamos saber para utilizar eventos no React
### [M1#A16](M1A_16.md) - A prop "children"
 * Utilizando props
 * Utilizando children

### [M1#A17](M1A_17.md) - Composição
 * Explicando composição
 * Exemplo composição no React

### [M1#A18](M1A_18.md) - State
 * this.props e this.state
 * O que é preciso para criar um state
 * Criando um state
 * Modificando o state

### [M1#A19](M1A_19.md) - Entendendo Arrow Functions
* Explicação
* Literais
* Expressões
* Criando arrow functions
* Sobre escopo léxico
	* Exemplo de componente sem arrow functions
	* Exemplo de componente com arrow functions

### [M1#A20](M1A_20.md) - Stateful vs stateless
 * O que é Stateful e  Stateless
 * Fluxos de dados
 * Abreviando propriedades no ES6 que possuem o mesmo nome do argumento

### [M1#A21](M1A_21.md) - Lifecycle dos componentes
 * mounting / unmounting
 * updating

### [M1#A22](M1A_22.md) - Lifecycle: fluxo de montagem / desmontagem (métodos de mounting e unmounting)
 * componentWillMount
 * componentDidMount
 * componentWillUnmount

### [M1#A23](M1A_23.md) - Lifecycle: fluxo de atualização (métodos de updating)(componentWillReceiveProps)
 * componentWillReceiveProps(nextProps)

### [M1#A24](M1A_24.md) - Lifecycle: fluxo de atualização (shouldComponentUpdate)
 * shouldComponentUpdate(nextProps, nextState)

### [M1#A25](M1A_25.md) - Lifecycle: fluxo de atualização (componentWillUpdate)
 * componentWillUpdate(nextProps, nextState)

### [M1#A26](M1A_26.md) - Lifecycle: fluxo de atualização (componentDidUpdate)
 * componentDidUpdate(prevProps, prevState)

### [M1#A27](M1A_27.md) - propTypes

### [M1#A28](M1A_28.md) - Introdução à formulários no React
 * Controlled components
 * Uncontroled component
 * defaultValue

### [M1#A29](M1A_29.md) - Formulários (checkbox e radio)
 * Valores de propriedades true
 * Checkbox
 * Controled Checkbox
 * Uncontroled Checkbox
 * Radio

### [M1#A30](M1A_30.md) - Formulários (select e option)
 * Uncontroled
 * Controled
 * Propriedade multiple

### [M1#A31](M1A_31.md) - Formulários (textarea)

### [M1#A32](M1A_32.md) - Eventos para componente de formulário
 * onSubmit
 * onChange

### [M1#A33](M1A_33.md) - setState é assíncrono

### [M1#A34](M1A_34.md) - Conceitos e tipos de componentes com React, criando uma app (GitHub)
 * o que veremos nas próximas aulas

### [M1#A35](M1A_35.md) - GitHub app - Criando a marcação da aplicação
 * marcacão do app

### [M1#A36](M1A_36.md) - GitHub app - Separando os componentes
 * separar os componentes e marcar propTypes

### [M1#A37](M1A_37.md) - GitHub app - Criando o Container Component da aplicação
 * Presentational components
 * Container components
 * Dumb components
 * Smart components
 * Sobre o App e Appcontent na aplicação Github App
