// Podemos iniciar com o download da lib em https://cdnjs.com/

// Para criarmos um servidor precisar digitar o seguinte comando
// npm i http-server -g
// logo após basta digitarmos http-server para ser gerado nosso servidor http;

// Precisamos importar a lib

// <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
// Cria os componente react

// <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
// Renderiza os componentes na tela


console.log(React); // Chamando assim você consegue visualiza a lib

var $h1 = React.createElement('h1', null, 'Helo h1 React');
// React.createElement
// 1º parâmetro é o elemento, 
// 2º parâmetro é propriedade 
// 3º é o conteudo 

// Ao retornar o elemento
console.log($h1)
// $$typeof é uma propriedade interna do react
// props são as propriedades do react.
// type é o h1

ReactDOM.render($h1, document.getElementById('app'))
// ReactDom.render = rendeniza o elemento no dom
// 1 arg = o elemento que queremos renderizar
// 2 arg = o destino do elemento a ser renderizado

//  Ao rederizar o react cria uma propriedade data-reactroot que ele usa para conseguir manipular o elemento.
//<h1 data-reactroot="">Helo h1 React</h1>

// O react pode ser usado para criar qualquer elemento inclusive svg. ex:
React.createElement('svg', null, 'Helo h1 React');