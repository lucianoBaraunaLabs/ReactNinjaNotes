# MRW_08 - Configurando nossa aplicação para usar o React hot loader.

O react hot loader faz a autulização da página assim como o browserSync mais com um diferencial. No nosso caso estamos trabalhando com componentes então o hot loader só
precisa atualizar o componente que recebeu as modificações

### Passo 1 - Instalar o react-hot-loader

```
npm i --save-dev react-hot-loader@3.0.0-beta.2
```

### Passo 2 - Atualizar o webpack.config

Primeiro precisamos configurar a propriedade entry instalando as coordenadas para ser executado o 'react-hot-loader'.

- `'webpack-dev-server/client?http:/localhost:3000'` = Esse valor diz para ser executado somente no client, por padrão o webpack utiliza a porta 8080 mais passando dessa forma conseguimos colocar para ser executado na porta 3000 ou qualquer outra da sua escolha

```
module.exports ={
    ...

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http:/localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index'),
    ]

    ...
}
```

Precisamos fazer o require pois existe um plugin que precisamos ter acesso para executar o loader.

```
const path = require('path')
const webpack = require('webpack')
```

E agora precisamos criar a entrada `plugins` no obj de configuração que é uma entrada que colocamos para ter acesso aos plugins.
Agora nós adicionamos nela o `webpack.HotModuleReplacementPlugin()` que é esse o cara que faz com o que o webpack consiga executar o hotloader.

```
module.exports = {
    devtool: 'source-map',

    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http:/localhost:3000',
      'webpack/hot/only-dev-server',
       path.join(__dirname, 'src', 'index'),
    ],

    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      }]
    }
}
```
###  Atualizar o .babelrc
Precisamos agora adicionar uma propriedade `plugins` e nela o `react-hot-loader/babel`.
O `react-hot-loader/babel` faz com que o babel faça o transpile do javascript utlizando ele. No react-hot-loader/babel você não precisa se preocupar por que nele já tem as dependências necessárias para ser utilizado pelo babel.

```
{
  "presets": [
    "es2015",
    "stage-0",
    "react"
  ],

  "plugins":[
    "react-hot-loader/babel"
  ]

}

```

### Criar um arquivo server.js para rodar com o Node.js
Criamos outro aquivo para separa o nosso servidor customizado.

```
const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server'); // Criamos um construtor para criarmos um novo servidor
const config = require('./webpack.config'); //Lembrando que o . aqui é por conta que estamos na raiz

// Criando o servidor
new WebPackDevServer(webpack(config),{
  publicPath: config.output.publicPath, // pegando do obj config
  hot: true, // para fazer o hot loader corretamente
  historyApiFallback: true, // Precisamos colocar como true quando quisermos assistir outra url criada manualmente.
  stats: { colors: true } // saida colorida

}).listen(3000, (err) => {
  // Cirando a porta

  if(err){
    return console.log(err);
  }

  console.log('Listening on http://localhost:3000');
})
```


### Criar a entrada start no package.json
Criamos o script `start` para não precisar ficar digitando webpack-dev-server
Agora para levantar nosso servidor basta digitar `npm start`

`node server.js` Esse comando significa que estamos executando esse arquivo no node
```
{
  "scripts":{
    "start": "node server.js"
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^6.4.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "react-hot-loader": "^3.0.0-beta.2",
    "webpack": "^1.15.0",
    "webpack-dev-server": "^1.16.5"
  },
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  }
}

```
