 require("air-datepicker");
 require("air-datepicker/dist/css/datepicker.css");
 require('cleave.js');

// $(".date").each(function () {
//   const item = $(this);
//   const dateFrom = item.find(".date__from");
//   const dateTo = item.find(".date__to");

//   item.find(".datepicker-multi").datepicker({
//     clearButton: true,
//     onSelect: (date) => {
//       const dates = date.split(" - ");
//       dateFrom.val(dates[0]);
//       dateTo.val(dates[1]);
//     }
//   });

//   // Экземпляр класса
//   const datep = item.find(".datepicker-multi").data("datepicker");
  
//   // Экземпляр кода календаря
//   const datepEl = datep.$datepicker;
//   // Добавление кнопки
//   const applyButton = $(
//     `<span class='datepicker--button'>Применить</span>`
//   );

//   applyButton.click(() => {
//     if (datep.selectedDates.length < 2) return;
//     datep.hide();
//   });

//   datepEl.find(".datepicker--buttons").append(applyButton);
//   dateTo.click(() => datep.show());
//   dateFrom.click(() => datep.show());

//   // Скрытие на клик вне
//   $(document).mouseup(function (e) {
//     const dep = $(".datepickers-container");
//     const wrap = $(".wrap");
//     if (
//       !dep.is(e.target) &&
//       dep.has(e.target).length === 0 &&
//       !wrap.is(e.target) &&
//       wrap.has(e.target).length === 0
//     ) {
//       datep.hide();
//     }
//   });
// });




