function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
  
    const words = lowerCaseSentence.split(" ");
    const occurrences = words.filter(word => word === lowerCaseWord);
    return occurrences.length;
  }
  
  const result = countWordOccurrences("I love typescript", "typescript");
  console.log(result); 
 