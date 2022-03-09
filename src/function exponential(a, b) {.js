function covidPrediction(n) {
  var covidNewCases = [],
    a = 187,
    b = 3;

  for (var k = 0; k < n; k++) {
    covidNewCases.push({ x: 1 * k, y: a * Math.pow(2, 1 * k) });
  }
  console.log(covidNewCases);
}

covidPrediction(7);
