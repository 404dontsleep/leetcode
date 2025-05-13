function romanToInt(s: string): number {
  const romanMap: [string, number][] = [
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
    ["CM", 900],
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];
  let result = 0;
  let str = s;

  for (const [roman, value] of romanMap) {
    while (str.includes(roman)) {
      result += value;
      str = str.replace(roman, "");
    }
  }

  return result;
}

console.log(romanToInt("MCMXCIV"));
