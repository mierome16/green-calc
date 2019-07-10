$(document).ready(function() {
    $('.numbers>div>button').on('click', function(e) {
        e.preventDefault()
  
       var current_val = $('input').val()
       var val = $(this).html()
       if (val == '=') {

       } else {
       $('input').val(current_val + val)
       }
    })
    $('#clear').on('click', function(e) {
        $('input').val('')
    })
    var valueone = ''
    var sign = ''
    var valuetwo = ''
    $("#signs button").on('click', function (e) {
        if (valueone == "") {
            valueone += $("input").val();
        } else {
        }
        sign += $(this).html();
        $("input").val("");
    })
    $("#equal").on('click', function (e) {

        valuetwo += $("input").val();
        var equation = valueone + sign + valuetwo;
        console.log(equation);
        $("input").val(eval(equation))
        var finalAnswer = eval(equation)
        valueone = "";
        valueone += finalAnswer;
        console.log(finalAnswer)
        valuetwo = "";
        sign = "";
    })
})
