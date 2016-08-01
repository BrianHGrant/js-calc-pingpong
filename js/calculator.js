function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  var i = 1;
  while (i <= goal) {
    var outString = '';
    if (i % 3 === 0) {
      outString += 'ping';
    }
    if (i % 5 === 0) {
      outString += 'pong';
    }
    if (outString === '') {
      outString += i;
    }
    output.push(outString);
    i++;
  }
  return output;
};

exports.calculatorModule = Calculator;
