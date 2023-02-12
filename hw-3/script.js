let a = prompt('First number');
let b = prompt('Second number');

const c = +a + +b;
const d = a - b;
const g = a * b;
const f = a / b;

alert   ((a + '+' + b + '=' + c + ' \n')+
        (a + '-' + b + '=' + d + ' \n')+
        (a + '*' + b + '=' + g + ' \n')+
        (a + '/' + b + '=' + f));
