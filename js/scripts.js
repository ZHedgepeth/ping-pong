//
// function inputResults(numberInput) {
//   var pingPongResult = [];
//
//     if (numberInput % 3 === 0) {
//       pingPongResult.push("ping");
//     }
//     else if (numberInput % 5 === 0) {
//       pingPongResult.push("pong");
//     }
//     else if (numberInput % 15 === 0) {
//       pingPongResult.push("pingpong")
//     }
//     else {
//       pingPongResult.push(numberInput)
//     }
//   return pingPongResult
// }

function displayResults(numberSet) {
    $('#output').text("");
    for (var numberIndex = 0; numberIndex <= numberSet.length; numberIndex++) {
      $('#output ul').append("<li>" + numberSet[numberIndex] + "<li>");
    }
  }


$(document).ready(function() {
  $('#userNumber').submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($('#numberInput').val());
    var results = inputResults(numberInput)
    displayResults(results)
  });
});
