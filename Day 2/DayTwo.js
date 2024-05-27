function productExceptSelf(nums) {
    const n = nums.length;
    if (n === 0) return [];

    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const result = new Array(n).fill(1);

    // Fill the leftProducts array
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    // Fill the rightProducts array
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    // Fill the result array by multiplying left and right products
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4, 5])); 
console.log(productExceptSelf([3, 2, 1]));