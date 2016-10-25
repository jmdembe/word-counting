var newString = 'She sells seashells by the seashore';

function wordCounting (myStr) {
    var separator = ' ';
    var wordCount = myStr.split(separator);


    return wordCount;
  };

console.log(wordCounting(newString));
