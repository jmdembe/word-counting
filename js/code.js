var newString = document.querySelector('.my-text').innerText;

(function wordCounter (myStr) {
    var frequency = {};

    myStr
      .split(' ')
      .filter (function filterArray(myArray) {
        return (myArray.length > 1);
      })
      .forEach(function count (word){

        if (frequency[word] === undefined) {
            frequency[word] = 1;
        } else {
            frequency[word]++;
        }

      });

    return frequency;
})();

var result=wordCounter(newString);
