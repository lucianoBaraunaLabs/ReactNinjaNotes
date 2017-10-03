# MRW_02 - Anotações

### Passo 1 - criar o package.json

### Passo 2 - Para configurar o webpack precisamos criar o arquivo webpack.config.js

Deve-se instalar o webpack como uma depedência de desenvolvimento atráves do comando:
```
$ npm install --save-dev webpack
```
Quando instalamos uma dependência em desenvolvimento ela não é inclusa em produção quando gerado o build do projeto.


### Passo 3 - Configurar o aquivo webpack para ler um arquivo e gerar um bundle

#### O arquivo webpack.config.js

Crie uma variável para ter acesso aos caminhos do sistema operacional
```
const path = require('path') // modulo de caminhos do node.
```

#### Criando `module.export`

Agora é preciso criar o obj `module.export` que é um padrão do cammonjs para exportar módulos

```
module.exports = { 
 ...
}
```

#### Criando a propriedade `entry` 

É a proriedade de entrada.  

O valor `path.join(__dirname, 'src', 'index')` significa que estamos juntando os caminhos e tratando as inconsistencias de sistemas operacional linkando assim o nosso arquivo principal.

- Explicando os parâmetros.
    - `__dirname` é uma variável global do node para as onde tem o tipo de caminho para cada sistema operacional.
    - `src` é a pasta de origigem
    - `index` é o nosso arquivo

```
module.exports = { 
     entry: path(__dirname, 'src', 'index'),
}
```
#### Criando a propriedade `output` 

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

### Passo 4 - Criar nosso index.js
Crie um arquivo `index.js` e coloque na pasta `src`

### Passo 5 - Gerar o bundle

Para gerar o bundle é preciso instalar o `webpack` de forma global na sua máquina. Para fazer isso é preciso digitar o seguinte comando no terminal:

```
$ npm install -g webpack
```

Para gerar o bundle você precisar digitar o seguinte comando via terminal:

```
$ webpack
```


### Passo 6 - Criar o index.html e colocar o bundle.js
Crie o arquivo `index.html` e link o `bundle.js` nele

```
    <script src="dist/bundle.js"></script>
```



