
const form = document.querySelector('#form-habits') //querySelector é uma FUNÇÃO do OBJETO document

//Criando e instanciando, ao mesmo tempo, o OBJETO nlwSetup
const nlwSetup = new NLWSetup(form)

//Criando OBJETO data
const data = {
    run: ['01-01', '01-02', '01-06', '01-07', '01-08'], //ARRAY
    water: ['01-04', '01-05'], //ARRAY
    food: ['01-01', '01-03'], //ARRAY
    journal: ['01-02'],
    takePills: ['01-03']
}

//FUNÇÃO .setData
nlwSetup.setData(data)

//FUNÇÂO .load
nlwSetup.load()