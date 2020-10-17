require('cleave.js');

let cleave = new Cleave('.text-filed__input_date', {
    date: true,
    delimiter: '.',
    datePattern: ['d', 'm', 'Y']
});