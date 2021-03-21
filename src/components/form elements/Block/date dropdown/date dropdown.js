require('air-datepicker');
require('air-datepicker/dist/css/datepicker.css');

$('.js-datepicker-here').datepicker({
  navTitles: {
    days: `<div>
          <div>MM yyyy</div>
        </div>`,
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
  },
  range: true,
  minDate: new Date(),
});
const now = new Date();
const endDate = new Date(now.getTime() + 365*24*60*60*1000)
const $start = $('.date__from');
const $end = $('.date__to');
const $datepickers = $('.js-datepickers');

$datepickers.datepicker({
  navTitles: {
    days: `<div>
          <div>MM yyyy</div>
        </div>`,
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
  },
  minDate: now,
  maxDate: endDate,
  multipleDatesSeparator: '-',
  range: true,
  onSelect: function (fd, date) {
    $end.data('datepicker')
      .update('selectedDates', $start.data('datepicker').selectedDates);
    const start = fd.split('-')[0];
    const end = fd.split('-')[1];
    if (end) {
      $start.val(start);
      $end.val(end);
    } else {
      $end.val('');
    }
    console.log($start.data('datepicker'));
  },
});
