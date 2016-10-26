var newString = document.querySelector('.my-text').innerText;

function wordSplitter (myStr) {
    var wordArray = myStr.split(' ');
    var frequency = {};

    var filterArray = wordArray.filter (function newArray(myArray) {
        return (myArray.length > 1);

    });

    var myArray=filterArray.forEach(function count (word){

        if (frequency[word] === undefined) {
            frequency[word] = 1;
        } else {
            frequency[word]++;
        }

    });
    return frequency;

};

var result=wordSplitter(newString);
console.log(result);
