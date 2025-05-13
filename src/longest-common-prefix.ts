function longestCommonPrefix(strs: string[]): string {
  let result = "";
  let lastPrefix = strs[0][0];
  let index = 0;
  while (true) {
    let isCurrentPrefix = true;
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].length <= index || strs[i][index] !== lastPrefix) {
        isCurrentPrefix = false;
        break;
      }
    }
    if (isCurrentPrefix) {
      result += strs[0][index];
      index++;
      lastPrefix = strs[0][index];
    } else {
      break;
    }
  }
  return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
