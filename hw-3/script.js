let a = prompt('Перше число');
let b = prompt('Друге число');

const c = +a + +b;
const d = a - b;
const g = a * b;
const f = a / b;

alert   ((a + '+' + b + '=' + c + ' \n')+
        (a + '-' + b + '=' + d + ' \n')+
        (a + '*' + b + '=' + g + ' \n')+
        (a + '/' + b + '=' + f));
