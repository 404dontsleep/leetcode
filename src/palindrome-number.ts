function isPalindrome(x: number): boolean {
  return x < 0
    ? false
    : x === Number(x.toString().split("").reverse().join(""));
}

console.log(isPalindrome(121));
