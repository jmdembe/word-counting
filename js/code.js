var newString = 'She sells seashells by the seashore';

function wordCounting (myStr) {
    var frequency = {};
    var separator = ' ';
    var wordArray = myStr.split(' ');

    wordArray.forEach(function wordFrequency(each) {
          console.log(each);
    });

    return wordArray;
  };

console.log(wordCounting(newString));
