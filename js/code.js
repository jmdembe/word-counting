var newString = 'She sells seashells by the seashore seashells';

function wordSplitter (myStr) {
    var wordArray = myStr.split(' ');
    var frequency = {};

    wordArray.forEach(function count (word){
        // frequency[word]=1;

        console.log("Frequency Word",word, frequency[word]);

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
