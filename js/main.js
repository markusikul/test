$('input').on('keyup',function() {
    if ($(this).val())
        $(this).addClass('has_value');
    else
        $(this).removeClass('has_value');
});

$('.dropdown-item').on('click',function() {
     $("#sity").html($(this).html())


});

$( "#slider-range-min" ).slider({
    range: "min",
    value: 0,
    min: 0,
    max: 4,
    slide: function( event, ui ) {

    }
});
