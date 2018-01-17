// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }


var countLetters = function countLettersAndReturnObject(str) {
  var strNoSpaces = str.split(" ").join("");
  var letterCounter = {};

  for (var i = 0; i < strNoSpaces.length; i++) {

    if (!letterCounter.hasOwnProperty(strNoSpaces[i])) {
      letterCounter[strNoSpaces[i]] = 1;
    } else {
      letterCounter[strNoSpaces[i]]++;
    }
  }
  return letterCounter;
};

console.log(countLetters("lighthouse in the house"));

/*
  References:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty


  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    var str = 'To be, or not to be, that is the question.';
    var count = 0;
    var pos = str.indexOf('e');

    while (pos !== -1) {
      count++;
      pos = str.indexOf('e', pos + 1);
    }
*/