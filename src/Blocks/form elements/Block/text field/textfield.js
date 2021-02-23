require('cleave.js');

$('.text-filed__input_date').toArray().forEach(function(field) {
    new Cleave(field, {
        date: true,
        delimiter: '.',
        datePattern: ['d', 'm', 'Y']
    });
 });