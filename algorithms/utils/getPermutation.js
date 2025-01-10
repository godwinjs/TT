export function getPermutations (items) {
     
    let results = [];
    function permute (arr, memo ) {
      var cur, memo = memo || [];
      for (let i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
      return results;
    }
    permute(items);
    return results;
}