const { odd, even } = require("./exportCommonVar");

function checkOddOrEven(n) {
  if (n % 2) {
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
