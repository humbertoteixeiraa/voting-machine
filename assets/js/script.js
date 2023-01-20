
//Criação da VARIÁVEL form para receber e guardar o formulário.
const form = document.querySelector('#form-habits') //querySelector é uma FUNÇÃO do OBJETO document.

//Criando e instanciando, ao mesmo tempo, o OBJETO nlwSetup com a BIBLIOTECA NLWSetup (biblioteca criada pela ROCKETSEAT para o desafio).
//Essa BIBLIOTECA precisa do FORMULÁRIO form para funcionar.
const nlwSetup = new NLWSetup(form)

//Importando a TAG button, do index.html, para dentro da VARIÁVEL button
const button = document.querySelector('header button')

//Adicionando uma FUNÇÃO que vai ficar "ouvindo" o evento de click.
//Sempre que houver o evento de click, a função add será acionada.
button.addEventListener('click', add)

//Adicionando uma FUNÇÃO que salvará qualquer alteração no form
form.addEventListener("change", save)





//CONCEITO DE FUNÇÃO: serve para agrupar códigos que poderá ser usado sempre que for necessário.
function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
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

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

    //ENTENDENDO A FUNÇÃO save:
    //01 - Será executada sempre que houver uma alteração no form;
    //02 - Salvará em localStorage, na chave 'NLWSetup@habits', os dados alterados já transformados em STRING.
}




//Salvando na constante data as informações que estão em localStorage já em forma de OBJETO
const data = JSON.parse(localStorage.getItem("NLWSetup@habits",)) || {}
nlwSetup.setData(data)
nlwSetup.load()