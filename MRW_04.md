# MRW_04 - Modularizando a Aplicação

### Passo 1 - Criar um novo arquivo em src/app.js

Colocamos o seguinte código para exemplo dentro do app.js
```
'use strict'

function sum(val1, val2) {
  return val1 + val2;
}

```

### Passo 2 - Entender o require e o module.exports do CommonJS
Seguindo o padrão CommonJS nós conseguimos modularizar o nosso código através do objeto `module.export` utilizando o webpack.


### Passo 3 - Exportar um método sum, que irá somar dois valores
No arquivo app.js atribuimos criamos a `sum()`. E agora vamos exportá-la com `module.export`
```
'use strict'

function sum(val1, val2) {
  return val1 + val2;
}

module.exports = sum
```

### Passo 4 - Importar esse método no `src/index.js`
No arquivo index.js atribuimos a uma variável `require('./app')` para conseguirmos ter acesso ao módulo exportado que precisamos.

Agora vamos importando ele em alguma váriavel conseguimos ter acesso para executá-lo
```
'use strict'

var sum = require('./app');

console.log(sum(1,2));

console.log('webpack está funcionando')
```