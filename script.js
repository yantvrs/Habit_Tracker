const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener("change", save);

function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5);
    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        alert("Dia já incluso");
        return;
    }

    alert("Dia adicionado com sucesso!");
    nlwSetup.addDay(today);
}

function save(){
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits"));
nlwSetup.setData(data);
nlwSetup.load();


/*
const data = {
    run: ['01-01', '01-02', '01-06','01-16'],
    water: [ '01-09', '01-06','01-28'],
    exercise: ['01-01', '01-02','01-20','01-28'],
    sleep: ['01-01' ,'01-30'],
    dogWalk: [ '01-06','01-20','01-11','01-14'],
    food: [ '01-02', '01-06','01-25','01-21'],
    takePills: ['01-03','01-20','01-29','01-26']
};


nlwSetup.setData(data);
nlwSetup.load();
*/