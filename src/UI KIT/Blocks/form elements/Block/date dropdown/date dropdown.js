require("air-datepicker");
require("air-datepicker/dist/css/datepicker.css");
require('cleave.js');

// let date = document.querySelectorAll('.date__input');
//     date.value = 
// console.log($el.date)

$('.datepicker-here').datepicker({
    navTitles: {
        days: '<div><div>MM</div> <div>yyyy</div></div>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    },
    prevHtml: `<svg>
                <path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/>
                </svg>`,
    nextHtml: `<svg>
                <path d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="white"/>
                </svg>`,
    clearButton: true,
    todayButton: true,
    language: {
        today: 'применить',
    }
});

var datepicker = $('.datepicker-here').datepicker().data('datepicker');
console.log(datepicker.Date)


$('.date__input').toArray().forEach(function(field) {
    new Cleave(field, {
        date: true,
        delimiter: '.',
        datePattern: ['d', 'm', 'Y']
    });
 });


