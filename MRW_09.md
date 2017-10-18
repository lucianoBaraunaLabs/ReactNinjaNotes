# MRW_09 - Colocando o hot loader para funcionar


### Transformando nosso arquivo app.js como entrada da aplicação

O App vai ser o arquivo que ira receber todos os nosso componentes criados e logo após será exporado para o `index.js`.
Criamos agora uma div e será nela que toda nossa aplicação sera renderizada.

```
'use strict'

import React from 'react'

const App = React.createClass({
  render: function(){
    return <div>Aplciação</div>
  }
})


export default App
```

### Transformando o index.js como entrada principal 

O `index.js` é a entrada principal da nossa aplicação e nós configuramos para o **webpack sempre fazer a leitura desse arquivo**. No index nós só chamamos o app e será ele que vai chamar todos os outros componentes.
O hotloader tem um módulo que vamos precisar para utilizar ele como componente principal.

`<AppContainer>` é um módulo do react-hot-loader. Que faz tudo que ser renderizado dentro dele e que atualize utilizando o hot-loader.


Arquivo `index.js`

`import { AppContainer } from 'react-hot-loader'` : pegando o componente do react-hot-loader

`import App from './app'` : linkando o componente app.
```
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"')
)

```

Criando a lógica para o reload somente em desenvolvimento.

`if(module.hot){` : o hotloader tem esse objeto para dizer quando ele está ativo ou não.

` module.hot.accept('./app', () => { ... } ` : é um método do hotloader em que o primeiro parâmetro é o nosso arquivo que queremos sempre aplicar o hotloader.
o nosso primeiro parâmetro é o caminho para app por que é nele que está concentrado todos os nosso componentens que serão criados. 
Sendo assim dessa forma centralizamos tudo.

`const NextApp = require('./app').default` : Sempre que nosso aquivo app for alterado ou alguma alteração que o hot-loader possa intervir vamos dar um require novamente. Require esse que é sincrono (ele primeiro vai fazer o require para depois continuar o código).

Obs: **Aqui temos que utilizar  o require pq o import não pode ser utilizado no meio do arquivo somente no topo.**

**Explicando o default:** Sempre que formos importar um módulo do commonJS para um módulo do ECMA6 por conta do babel precisamos utilizar o `.default`, ex:  `const NextApp = require('./app').default`


Agora vamos renderizar novamente é basicamente isso que faz o hotloader funcionar corretamente.

```
render( 
    <AppContainer>
        <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"')
)
```

Arquivo final
```
'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"')
)

// Criando a lógica para o reload somente em desenvolvimento.

if(module.hot){
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default; 

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.querySelector('[data-js="app"')
    )

  })
}

```

### Refatorando o código para chamarmos somente uma vez a função de criação
Foi criada a função renderApp para não precisarmos ter uma duplicidade.

```
'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"')
  )
}

renderApp(App);

// Criando a lógica para o reload somente em desenvolvimento.

if(module.hot){
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    renderApp(NextApp);
  })
}

````