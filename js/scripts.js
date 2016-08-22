
$(document).ready(function() {
  $('#userNumber').submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($('#numberInput').val());
    // var numberArray = []
    // var numberArray = number.length
    // var newArray = numberArray(number.length)
    // var countArray = []
    // var output = "<ul>";
    // var ping = numberArray.map(function(number) {
    // return number % 3 === 0; });
    // var pong = parseInt($(number % 5 === 0))
    // var pingPong = parseInt($(number % 15 === 0))

      $('#output').text("");

    for (var index = 0; index < numberInput; index++) {

       $('#output').append("<ul>" + index);
    }

        //  $('#output').append(" " + index);
    console.log(numberInput)
    // $('#output').append(" " + index);
    // for (var index = 0; index <= numberArray[number])

  });
});
