"use strict";
function countWordOccurrences(sentence, word) {
    var lowerCaseSentence = sentence.toLowerCase();
    var lowerCaseWord = word.toLowerCase();
    var words = lowerCaseSentence.split(" ");
    var occurrences = words.filter(function (word) { return word === lowerCaseWord; });
    return occurrences.length;
}
var result = countWordOccurrences("I love typescript", "typescript");
console.log(result);
