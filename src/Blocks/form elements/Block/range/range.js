require("webpack-jquery-ui");
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 15,
      values: [ 5, 10 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " 000" + "₽" + " - " + ui.values[ 1 ] + " 000" + "₽" );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " 000" + "₽" +
      " - " + $( "#slider-range" ).slider( "values", 1 ) + " 000" + "₽" );
  } );