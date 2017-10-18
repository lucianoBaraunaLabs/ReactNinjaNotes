# MRW_09 - Colocando o hot loader para funcionar


### Adicioar dependências: standard e standard-loader

Instalando as depêndecias linters
```
npm i --save-dev standard standard-loader
```

`preLoaders` : propriedade que diz o que será rodado antes dos loaders os lints devem ser colocados aqui antes do babel carregar

```
 module: {
      preLoaders:[{
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'standard' // add o standard
      }],

      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      }]
    }
```

### Adicioar dependências: webpack-validator

Instalando as depêndecias linter para validar o webpack

```
npm i --save-dev webpack-validator
```

### Configurando o webpack-validator

Incluindo o webpack-validator

```
'use strict'

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator'); // atribuindo o wepbpack validator

...


```

Agora basta colocar todo o objeto de configuração dentro da função que a `validade` que foi transformada pelo `webpack-validator`

```
module.exports = validate({ 

    ...
    
})
```