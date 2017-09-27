// Por convensão os componentes react devem começar por padrão com letra maiúscula
// ex: var Title = ...

// Código com render
//  No ES5 sempre vamos utilizar o método React.createClass(...)
// O método render sempre precisa retornar um elemento React.
// O () logo após o return é por conta do javascript colocar automaticamente o ;
// isso faz com que não seja permetido elementos alinhandos por tanto sempre que
// for criado um elemento react com return devemos colocar o () para evitarmos esse erro
/*
<script type='text/babel'>
        var Title = React.createClass({
            render : function () {
                return (
                    <h1>
                        <span>Hello World Title</span>
                    </h1>
                )
            }
        })
        ReactDOM.render(
            <Title />,
            document.getElementById('app')
        )
    </script>
*/ 

/* ---- */
// O react não pode renderizar dessa forma, por que para o react parece que estar 
// retornando duas funções

/*
<script type='text/babel'>
        var Title = React.createClass({
            render : function () {
                return (
                    <h1>Titulo</h1>
                    <span>Hello World Title</span>
                )
            }
        })
        ReactDOM.render(
            <Title />,
            document.getElementById('app')
        )
    </script>
*/

/* ---- */

//  Todo componente precisa ter uma tag envolvendo ele então por isso no caso acima
// precisaríamos conlocar eses elementos alinhados dentro de uma div, segue ex:

/*
<script type='text/babel'>
    var Title = React.createClass({
        render : function () {
            return (
                <div>
                    <h1>
                        <span>Hello World Title</span>
                    </h1>

                </div>
            )
        }
    })
    ReactDOM.render(
        <Title />,
        document.getElementById('app')
    )
</script>
*/