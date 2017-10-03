# MRW_03 - Anotações

Criando um servidor com webpack

### Passo 1 - Instalar a dependência para o server `webpack-dev-server`

Instalando o webpack `webpack-dev-server`

__Obs:__ `i` é um alias do npm que signigica `install`

```
$ npm i --save-dev webpack-dev-server
```

### Passo 2 - Configuração  do `publicPath` e start do `webpack-dev-server`
É o local onde o webpack dev server vai ficar assistindo o nosso desenvolvimento.

## O que é o `publicPath`
É o local onde o `webpack-dev-server` vai ficar assistindo nosso arquivo de desenvolvimento. Quando ele executa o `webpack-dev-server` ele gera um arquivo em memória virtual e `publicPath` diz a onde esse aquivo é servido para esse processo.

```
module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    }
}
```
o caminho `publicPath: '/static/'` configurando dessa forma faz com que o `bundle.js` seja salvo no dir `static`

O diretório `/static/` é um diretório que fica em memória então sendo assim você não visualiza ele no terminal e quanto fizermos o `bundle` final ele será gerado em `dist` que está definido em `path` através do comando:

```
$ webpack
```

sendo assim nós conseguimos usar dois caminhos diferente.

Ou podemos ter a configuração como essa: 

```
module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    }
}
```
Que seria o `webpack-dev-server` pegando diretamente o código gerado em `dist`. Só não esquece que se fizer isso precisa atualizar o caminho em `src` na tag `script` da página `html`

Se o webpack-dev-server estiver instalado globalmente basta digitar o comando abaixo para ligarmos o servidor:

```
$ webpack-dev-server
```

### Passo 3 - o caminho correto no index html

Agora devemos relinkar o script no html para:
```
<script src="/static/bundle.js"></script>
```

### Passo 3 - o caminho correto no index html

