
//Criação da VARIÁVEL form para receber e guardar o formulário.
const form = document.querySelector('#form-habits') //querySelector é uma FUNÇÃO do OBJETO document.

//Criando e instanciando, ao mesmo tempo, o OBJETO nlwSetup com a BIBLIOTECA NLWSetup (biblioteca criada pela ROCKETSEAT para o desafio).
//Essa BIBLIOTECA precisa do FORMULÁRIO form para funcionar.
const nlwSetup = new NLWSetup(form)



/* 

//Criando OBJETO data.
//A forma de organização dos dados do objeto segue as orientações da BIBLIOTECA criada pela ROCKETSEAT para o desafio.
const data = {
    run: ['01-01', '01-02', '01-06', '01-07', '01-08'], //ARRAY
    water: ['01-04', '01-05'], //ARRAY
    food: ['01-01', '01-03'], //ARRAY
    journal: ['01-02'],
    takePills: ['01-03']
}

//FUNÇÃO .setData é usada para passar os dados dp objeto data para dentro do objeto nlwSetup
nlwSetup.setData(data)

//FUNÇÂO .load para fazer o carregamento
nlwSetup.load()

*/


//Inportando a TAG button, do index.html, para dentro da VARIÁVEL button
const button = document.querySelector('header button')


//CONCEITO DE FUNÇÃO: serve para agrupar códigos que poderá ser usado sempre que for necessário.
function add() {
    const today = "01/01"
    const dayExists = nlwSetup.dayExists(today) //A função dayExists faz parte da BIBLIOTECA criada pela ROCKETSEAT para o desafio.

    if (dayExists) {
        alert ('Dia já incluso! ⚠')
        return
    } else {
        alert('Dia adicionado com sucesso! ✅')
        nlwSetup.addDay(today) //A função addDay faz parte da BIBLIOTECA criada pela ROCKETSEAT para o desafio.
        return
    }

    

    //ENTENDENDO A FUNÇÃO add:
    //01 - Ao clicar no botão, a função adicionará uma data na VARIÁVEL today;
    //02 - Em seguida será verificado se o dia adicionado já existe. Se existir, a CONSTANTE dayExists receberá o valor TRUE, se não, FALSE;
    //03 - Logo após cairá na condicional que dará alertas diferentes para os valores TRUE ou FALSE.
}

//Adicionando uma FUNÇÃO que vai ficar "ouvindo" o evento de click.
//Sempre que houver o evento de click, a função add será acionada.
button.addEventListener('click', add)