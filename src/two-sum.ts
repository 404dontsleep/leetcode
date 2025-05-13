function twoSum(nums: number[], target: number): number[] {
  const hash = new Map<number, number[]>();
  nums.forEach((num, index) => {
    if (hash.has(num)) {
      hash.get(num)?.push(index);
    } else {
      hash.set(num, [index]);
    }
  });
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash.has(complement) && hash.get(complement)?.[0] !== i) {
      return [hash.get(complement)?.[0] as number, i];
    }
  }
  return [];
}

console.log(twoSum([3, 2, 4], 6));
