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
 * **(nada anotado)**

### [M1#A32](M1A_32.md) - Eventos para componente de formulário
 * onSubmit
 * onChange

### [M1#A33](M1A_33.md) - setState é assíncrono
 * **(nada anotado)**

### [M1#A34](M1A_34.md) - Conceitos e tipos de componentes com React, criando uma app (GitHub)
 * o que veremos nas próximas aulas

### [M1#A35](M1A_35.md) - GitHub app - Criando a marcação da aplicação
 * **(nada anotado)**

### [M1#A36](M1A_36.md) - GitHub app - Separando os componentes
 * **(nada anotado)**

### [M1#A37](M1A_37.md) - GitHub app - Criando o Container Component da aplicação
 * Presentational components
 * Container components
 * Dumb components
 * Smart components
 * Sobre o App e Appcontent na aplicação Github App

### [M1#A38](M1A_38.md) - GitHub app - Criando o objeto de estado da aplicação
* Tipos de componente App e App Content

### [M1#A39](M1A_39.md) - GitHub app - Passando o state via props para o componente UserInfo
 * **(nada anotado)**

### [M1#A40](M1A_40.md) - GitHub app - Fazendo o request dos dados do usuário
 * **(nada anotado)**

### [M1#A41](M1A_41.md) - GitHub app - Refatorando a aplicação e populando os dados do usuário
 * **(nada anotado)**

### [M1#A42](M1A_42.md) - GitHub app - Popular dados dos repositórios
 * **(nada anotado)**

### [M1#A43](M1A_43.md) - GitHub app - método para buscar repositórios e favoritos
 * Hight order functions o que são
 * Colocando o nome da variável como nome da propriedade [ES6]
 * Sobre retorno de objetos em arrow functions

### [M1#A44](M1A_44.md) - GitHub app - buscar repositórios do usuário pesquisado

### [M1#A45](M1A_45.md) - GitHub app - sobre eventos - desabilitar / habilitar campo de busca
* Usando console.dir()
* Propriedades sintéticas
* Erro ao reutilziar propriedades de elementos
* Algumas forma de resolver propriedades de elementos
  * e.persist()
  * target em váriavel

### [M1#A46](M1A_46.md) - GitHub app - loading enquanto estiver buscando os dados

### [M1#A47](M1A_47.md) - GitHub app - organizando as propTypes

### [M1#A48](M1A_48.md) - Formas de fazer "bind" do this em eventos

### [M1#A49](M1A_49.md) - Entendendo o spread operator do ES6/2015
* Sobre
* Referenciando e não criando um novo
* Usando o spread operator
* JSX(passar props)
* array
* funções(rest parameters)

### [M1#A50](M1A_50.md) - 3rd-party + React
* O lifecycle
* A propriedade ref
* Observação

### [M1#A51](M1A_51.md) - Um overview sobre testes
 * **(nada anotado)**

### [M1#A52](M1A_52.md) - TDD
 * O que é TDD
 * Momentos do TDD
	* RED
	* GREEN
	* BLUE
 * O que é assert
  * Entendendo o erro no console.assert
 * Exemplo de teste

### [M1#A52](M1A_53.md) - TDD
 * **(nada anotado)**

# Módulo 02

### [M2#A02](M2A_02.md) - Conhecendo o create-react-app
* O que é ?
* Instalação
* Comandos create react app
* Analisando o package.json

### [M2#A03](M2A_03.md) - Jest (overview)
* O quê é ?
* Que outras ferramentas fazem o que o Jest faz?
* Com tantas ferramentas, por quê o Jest ?

### [M2#A04](M2A_04.md) - Jest na prática - instalação e configuração
* Instalação e configuração
* 1º Instalar o jest-cli
* 2º Configurar o package.json
* Jest - A Função it('descrição do teste', função)

### [M2#A05](M2A_05.md) - Jest na prática - conhecendo as funções para teste e asserção
* it('descrição do teste', função)
* describe('descrição do teste', função)
* console.assert(condição, mensagem)
* expect()
 * expect().toBe()

### [M2#A06](M2A_06.md) - Jest na prática - code coverage
* O que é
* Rodando o teste
 * Sobre o retorno do code coverage
* Sobre o CHAI
 * Métodos do CHAI
* Testando o módulo sum.js
* Sobre o coverage

### [M2#A07](M2A_07.md) - Jest na prática - Integracão com ES6/2015
* Instalando o ES6/2015 no jest
* Configurando o package.json
* Criando o .babelrc
* Convertendo os arquivos para ES6/2015
* Passando paramêtros nos comandos para o jest
 * Limpando o cache

### [M2#A08](M2A_08.md) - Jest na prática - watch interativo
* Configurando o Watch

### [M2#A09](M2A_09.md) - TDD - Assertion tools e desafio método map
* **(nada anotado)**

### [M2#A10](M2A_10.md) - TDD - método map
* Métodos de asserção chai
 * Método `to.be.equal()`
 * Método `to.be.deep.equal()`
 * Método `.to.be.throw()`
* Recriando o método map
 * Formato de código iperativo
 * Testes escritos para o método map.

### [M2#A11](M2A_11.md) - TDD - aprendendo recursão
* Regras para ser uma função recursiva
* Criando uma função recursiva
 * Convertendo para ES6/2015.

### [M2#A12](M2A_12.md) - TDD - map recursivo
* Travando a função para não termos um loop
* Iterando sobre o head

### [M2#A13](M2A_13.md) - TDD - map recursivo parte 2
* Código antes de resolver o counter
* Implementando o counter (índice)
* Explicando o código
* Refatorando o código
 * Removendo a mutabilidade(mudado) no código
 * Substituindo o `.concat`
 * Removendo o IF e substituindo por ternário

### [M2#A14](M2A_14.md) - TDD - filter
* Testes para filter
 * Equivalência booleana
* Código final

### [M2#A15](M2A_15.md) - TDD - filter recursivo ( rever e detalhar melhor as anotações)
* Implementacão da recursão

### [M2#A16](M2A_16.md) - TDD - every ( rever e detalhar melhor as anotações)
* Métodos chai to.be.ok e to.be.not.ok
* Testes every
* Código final

### [M2#A17](M2A_17.md) - TDD - every recursivo ( rever e detalhar melhor as anotações)

### [M2#A18](M2A_18.md) - TDD - some ( rever e detalhar melhor as anotações)

### [M2#A19](M2A_19.md) - TDD - some recrusivo ( rever e detalhar melhor as anotações)

### [M2#A20](M2A_20.md) - TDD - reverse ( rever e detalhar melhor as anotações)

### [M2#A21](M2A_21.md) - TDD - reverse recursivo ( rever e detalhar melhor as anotações)

### [M2#A22](M2A_22.md) - TDD - reduce ( rever e detalhar melhor as anotações)

### [M2#A23](M2A_23.md) - TDD - reduce (parte 2) ( rever e detalhar melhor as anotações)

### [M2#A24](M2A_24.md) - TDD - reduce recursivo

### [M2#A25](M2A_25.md) - TDD - reduce reduceRight

### [M2#A26](M2A_26.md) - TDD - reduce reduceRight recursivo

### [M2#A27](M2A_27.md) - TDD - find

### [M2#A28](M2A_28.md) - TDD - find recursivo
* Código normal
* Código recursivo
* Comentando o código
* Sobre branchs
* Observação funcional e branchs

### [M2#A29](M2A_29.md) - TDD - testando exceções
* Criando teste para mostrar o erro TypeError quando não for passado um array
* Criando e testando uma mensagem de erro customizada para o primeiro parâmetro caso ele não seja um array
* Criando teste para mostrar o erro TypeError quando não for passado uma função no segundo parâmetro
* Criando e testando uma mensagem de erro customizada para o segundo parâmetro caso ele não seja uma função

### [M2#A30](M2A_30.md) - Conhecendo o Storybook
* Instalação
* Iniciando
  * O arquivo `.storybook/config.js`
  * O arquivo `\stories\index.js`
* Método `storiesOf`
* Método `add`

### [M2#A31](M2A_31.md) - Trabalhando com assets: configuração no Webpack
* Sobre o raw-loader
  * Instalando o raw-loader
  * Configurando o raw-loader
* Sobre o style-loader
  *  Instalando o style-loader
  *  Configurando o style-loader

### [M2#A32](M2A_32.md) - Trabalhando com assets: HTML
* Sobre html-webpack-plugin
* Instalando html-webpack-plugin
* Configurando html-webpack-plugin
	* Acrescentando a entrada
	*  Configurando o caminho do servidor
	*  Configurando o title
	*  Configurando para mostrar a div app
*  Configurando a saída do nome dos arquivos.

### [M2#A33](M2A_33.md) - Trabalhando com assets: Exportando CSS em um arquivo
* Instalando extract-text-webpack-plugin
	* Configurando
* De raw-loader para css-loader
	* Removendo raw-loader
  * Configurando o plugin

### [M2#A34](M2A_34.md) - Webpack: gerando bundle de produção

* Configurando o `webpack.config.js`
	* Arquivo final `webpack.config.js`

* Configurando `webpack.prod.config.js`
	* Refatorando arquivo para build de producão
* Adicionando novos plugins
	* webpack.DefinePlugin
	* webpack.optimize.UglifyJsPlugin
	* webpack.optimize.DedupePlugin
	* webpack.optimize.OccurrenceOrderPlugin
* Configurando comando de build no package.json
* Arquivo final para gerar em producão

### [M2#A35](M2A_35.md) - Webpack Dashboard
* Instalando
* Configurando `webpack.config.js`
* Configurando `package.json`

### [M2#A36](M2A_36.md) - Trabalhando com assets: Modularizando o CSS
* Criando diretório
* Importado o css
* Importando de diretórios raiz o arquivo index.js

### [M2#A37](M2A_37.md) - Trabalhando com assets: CSS Modules
* Configurando css loader para utilizar o modules em css
* Utilizando as classes
* Saída html
* Saída CSS

### [M2#A38](M2A_38.md) - Trabalhando com assets: Critical Rendering Path
* Above the fold
* Configurando elementos do above the fold

### [M2#A39](M2A_39.md) - Trabalhando com assets: Otimizando o Critical Rendering Path
* Criamos dois objetos
* Atualizando plugins
* Criando regras para separar os css gerados
* Configurando template.html
	* Linkando os arquivos css e js no template

### [M2#A40](M2A_40.md) - Trabalhando com assets: Ajustando ambiente de dev

### [M2#A41](M2A_41.md) - cross-env
* Sobre cross-env
* Instalando cross-env
* Atualizando o `npm run build` em `package.json`

### [M2#A42](M2A_42.md) - criando alias no webpack
* Sobre o problema de caminhos
* Implementando Alias

### [M2#A43](M2A_43.md) - Configurando o Storybook
* Inciando
* Definindo padrão
* Criando um arquivo `story`
* Adicionando uma história
* Configurando o story `config.js`
* Funcão `loadStories`
* Funcão `configure`
* Arquivo config.js

### [M2#A44](M2A_44.md) - Configurando o Storybook
* Importando módulos
* Escrevendo histórias

### [M2#A45](M2A_45.md) - Storybook - extendendo o webpack.config padrão
* Importando manualmente
* Importando automático
* Importando automático sobrescrevendo a config inicial
* Importando automático sobrescrevendo a config inicial

### [M2#A46](M2A_46.md) - Storybook - localização do arquivo de config, linter e static build
* Incluindo o linter em todo storybook
* build-storybook

### [M2#A47](M2A_47.md) - Storybook - criando histórias para os outros componentes
* Usando css na aplicacão

### [M2#A48](M2A_48.md) - Paginação - criando o componente
 * **(nada anotado)**

### [M2#A49](M2A_49.md) - Conhecendo o Yarn
* Instalacão do yarn
* Comandos do yarn

### [M2#A50](M2A_50.md) - Paginacão ambiente de testes
* Criando diretório `utils`
* Criando diretório pagination e arquivos

### [M2#A51](M2A_51.md) - Paginação - ambiente para testes - linter
* Configurando o linter
* Instalando o linter
* Instalando snazzy
* Ignorando arquivos no standard
* Colocando o lint:fix
* Colocando o watch no standard
* Instalando o gulp
* Criando a chamada no package.json
* Criando o gulpfile.js
* Configurando o gulpfile.js

### [M2#A52](M2A_52.md) - Paginação - implementação inicial
* Desabilitando error no standard em funcões globais
* Escrevendo testes
* Criando e explicado a funcão para passar nos testes
	* Testando se é uma função (teste 1)
	* Testando o total de páginas (teste 2 e 3)
* Criando e explicado a funcão para passar nos testes
	* Passa no teste 1
	* Passando no teste 1 e teste 2

### [M2#A53](M2A_53.md) - Paginação - implementação - parte 2
* Descrevendo lógica e mostrando comportamento
* Criando testes
	*	Testando se a quantidade for menor ou igual 5 ele vai mostrar todas as páginas (teste 1)
	* Testando o comportamente para colocar os `...`(teste 2)
* Passando nos testes
	* Passando no teste 1 e teste 2. Obs: o teste 2 está com uma implementacão burra até aqui.

### [M2#A54](M2A_54.md) - Paginação - implementação - parte 3
* Testes
	*  Teste 1 - para checar se coloca o ...
	*  Teste 2 - teste para checar todos os números com página centralizada.
*  Criando variável para dizer quanto itens devem ser mostrados
*  Criando retorno do array resolvendo
*  Função para centralizar página ativa
*  Removendo intens duplicados
*  Código final

### [M2#A55](M2A_55.md) - Paginação - implementação - parte 4
* Testes
	*  Teste 1 - para checar todos os números com página centralizada
	*  Teste 2 - para checar os ...
*  Resolvendo testes
	*  Regra para mostrar a penúltima e última página (resolve teste 1)
	*  Regra para colocar os ... no final (resolve teste 2)
*  Código final (utils/pagination/index.js)

### [M2#A56](M2A_56.md) - Paginação - implementação - parte 5
* Testes
	* Teste 1 - Testando para colocar na ordem as primeias páginas
	* Teste 2 - Testando para os ... pontos no começo
	* Teste 3 - Colocando a última página como ativa
	* Testando todas as possibilidades
	* Testando possibilidade com todos os ...
* Resolvendo testes
	* Ordenando array nas primeiras páginas (teste 1)
	* Colocando os ... no comeco (teste 2)
	* Colocando a última página como ativa (teste 3)
* Código final

### [M2#A57](M2A_57.md) - Paginação - testando as excessões
* Testes
	* Teste 1 - se não passar o active page assumimos que ele vai ser um
	* Teste 2 - se não passar o total e nem o active page assumimos que ele vai ser um
	* Teste 3 - passando total com valor errado
	* Teste 4 - passando activePage com valor errado
* Resolvendo testes
	* Colocando valores padrões caso nenhum seja passado (resolve teste 1 e teste 2)
	* Tratando valores passados errados (resolve teste 3 e 4)
* Refatorando o código
* Código final

### [M2#A58](M2A_58.md) - Paginação - storybook
* Criando estrutura
	* Criamos uma diretório em `src/components/pagination`
	* Criamos um arquivo `components/pagination/index.js`
	* Criamos um arquivo do storybook
* Montando o componente Pagination
* Criando a primeira história
* Resolvendo bug do import de utils no storybook
	* Arquivo final `storybook/webpack.config.js`

### [M2#A59](M2A_59.md) - Paginação - storybook - parte 2
* Criando o componente Page
* Arquivo final Pagination.js
* Descrevendo o componente Page
	* Arquivo final page.js

### [M2#A60](M2A_60.md) - Paginação - storybook - parte 3
* Criando e passando a funcão de callBack para o componente Page
* Passando o onClick no componente Pagination
* Passando o onClick no componente Page
* Quebrando em histórias o componente Pagination
* Definindo propriedades padrões no componente Pagination
* Definindo tipos propriedades padrões no componente Pagination
* Verificando se a propriedade onClick foi passada para chamarmos o método
* Arquivo final `Page.js`
