# MRW_07 - Configurando JSX no babel e sourcemaps no Webpack

### Adicionar o preset do react;
O preset necessário é o babel-preset-react

```
npm i --save-dev babel-preset-react
```
### Atualizar o .babelrc, adicionando esse preset

Agora é preciso que seja configura o arquivo `.babelrc` para que ele consiga executar o preset-react
```
{
  "presets": [
    "es2015",
    "stage-0",
    "react" // O babel já reconhece que ele é um preset então não precisa dizer aqui que é o preset-react
  ]
}

```

### Atualizar os arquivos `src/app.js` e `src/index.js` para usar JSX

Colocando os arquivos agora para JSX

#### app.js
```
var Title = React.createClass({
  render: function(){
    return <h1>Titulo</h1>
  }
})
```

#### index.js
```
render(
  <Title />,
  document.querySelector('[data-js="app"')
)
```

Essa entrada `devtool` é a entrada para habilitar ferramentas de desenvolvimento do webpack. 
Com isso conseguimos colocar o `source-map` que diz para o webpack que ele gere um source-map quando gerar os arquivos para ficar mais fácil o debug
```
module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'index'),
	...
```
