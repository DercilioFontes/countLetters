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


    while (!letterCounter.hasOwnProperty(strNoSpaces[i])) {

    var counter = 0;
    var check = strNoSpaces.indexOf(strNoSpaces[i]);

    while (check !== -1) {
      counter++;
      check = strNoSpaces.indexOf(strNoSpaces[i], check + 1)
    }

    letterCounter[strNoSpaces[i]] = counter;

    }
  }

  return letterCounter;
}

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