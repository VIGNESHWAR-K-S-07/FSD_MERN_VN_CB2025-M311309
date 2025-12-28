let nums = [10, 25, 5, 40, 30];
let sum = 0;
let largest = nums[0];
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  if (largest<nums[i]) {
    largest=nums[i]
  }
}
console.log("Sum:", sum);
console.log("Largest:", largest);
