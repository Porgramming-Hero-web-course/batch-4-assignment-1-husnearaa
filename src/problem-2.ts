function removeDuplicates(arr: number[]): number[] {
    const uniqueArray: number[] = [];
    for (const num of arr) {
      if (!uniqueArray.includes(num)) {
        uniqueArray.push(num);
      }
    }
    return uniqueArray;
  }
  

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

  