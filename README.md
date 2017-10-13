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
