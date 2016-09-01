var pingPong = function(numberInput) {
  var numberOutput = [];
  if (numberInput < 1) {
    alert("Not a valid number! Try again!");
  }

  else {
    for (var numberIndex = 1; numberIndex <= numberInput; numberIndex++) {
      if (numberIndex % 15 === 0) {
        numberOutput.push("pingPong");
      }
      else if (numberIndex % 5 === 0) {
        numberOutput.push("pong");
      }
      else if (numberIndex % 3 === 0) {
        numberOutput.push("ping");
      } else {
        numberOutput.push(numberIndex);
      }
    }

    return numberOutput.join("<li>");
  }
}

$(document).ready(function() {


  $('#userNumber').submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($('#numberInput').val());
    $('#output ul').text("");
    var result = pingPong(numberInput);

    $('#output ul').html("<p> " + result + "</p>");

  });
});
