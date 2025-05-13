function isValid(s: string): boolean {
  const map = new Map<string, string>([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      if (s[i] !== map.get(last as string)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));
