require('cleave.js');

$('.text-filed__input_date').toArray().forEach((field) => {
  new Cleave(field, {
    date: true,
    delimiter: '.',
    datePattern: ['d', 'm', 'Y'],
  });
});
