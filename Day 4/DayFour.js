function firstMissingPositive(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }

    for (let i = 0; i < j; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (index < j) {
            nums[index] = -Math.abs(nums[index]);
        }
    }

    for (let i = 0; i < j; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return j + 1;
}

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([1, 2, 0]));
