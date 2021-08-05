exports.min = function (array) {
  if (arguments.length === 0) {
      return 0;
  } 
  if (array.length > 0) {
      return array.reduce((a, b) => a < b ? a : b);
  } 
  else {
      return 0;
  }
};

exports.max = function (array) {
  if (arguments.length === 0) {
      return 0;
  } 
  if (array.length > 0) {
      return array.reduce((a, b) => a > b ? a : b);
  } 
  else {
      return 0;
  }
};

exports.avg = function (array) {
  if (arguments.length === 0) {
      return 0;
  } 
  if (array.length > 0) {
      return array.reduce((a, b) => a + b) / array.length;
  } 
  else {
      return 0;
  }
};