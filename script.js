const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

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
