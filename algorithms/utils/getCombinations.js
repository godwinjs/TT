export function getCombinations1 (items) {
    // allcombinations () : return a list of all possible combinations
     
      let results = [];
      for (let slots = items.length; slots > 0; slots--) {
        for (let loop = 0; loop < items.length - slots + 1; loop++) {
          let key = results.length;
          results[key] = [];
          for (let i = loop; i < loop + slots; i++) {
            results[key].push(items[i]);
          }
        }
      }
      return results;
}

export function getCombinations2(arr, size) {
  let result = [];
  
  const generate = (current, remaining) => {
      if (remaining.length === 0) {
          if (current.length > 0 && current.length === size) {
              result.push(current);
          }
          return;
      }
      
      generate(current.concat(remaining[0]), remaining.slice(1));
      generate(current, remaining.slice(1));
  };
  
  generate([], arr);
  return result;
}

// Helper function to generate all unique combinations
export function getCombinations3(array, combinationSize, startIndex = 0, currentCombination = [], combinations) {
    if (currentCombination.length === combinationSize) {
        combinations.push([...currentCombination]);
        return combinations;
    }

    for (let i = startIndex; i < array.length; i++) {
        currentCombination.push(array[i]);
        getCombinations(array, combinationSize, i + 1, currentCombination, combinations);
        currentCombination.pop(); // Backtrack to explore other combinations
    }

    return combinations;
}