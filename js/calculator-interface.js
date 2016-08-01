var Calculator = require('./../js/calculator.js').calculatorModule;
// var Calculator = require('calculator.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var calc = new Calculator("mauve");
    var output = calc.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
