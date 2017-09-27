#### MRW_02 - Anotações

* Passo 1 - criar o package.json
* Passo 2 - Para configurar o webpack precisamos criar o arquivo webpack.config.js
* Passo 3 - Configurar o aquivo webpack para ler um arquivo e gerar um bundle

#### O arquivo webpack.config.js
```
const path = require('path') // modulo de caminhos do node.
```

module.exports é um comando do cammonjs para exportar módulos
```
module.exports = { 
 ...
}
```

Entry é a proriedade de entrada.  

`__dirname` é uma variável global do node para as onde tem o tipo de caminho para cada sistema operacional.  

O valor `path.join(__dirname, 'src', 'index')` Significa que estamos juntando os caminhos e tratando as inconsistencias de sistemas operacional lincando assim o para o nosso arquivo principal.
```
module.exports = { 
     entry: path(__dirname, 'src', 'index'),
}
```

Output é a propriedade de saida do nosso bundle onde `path` é o destino e `filename` é o nosso arquivo gerado após o bundle

````
module.exports = { 
    entry: path(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
````

* Passo 4 - Criar nosso index.js
* Passo 5 - Gerar o bundle
* Passo 6 - Criar o index.html e colocar o bundle.js



