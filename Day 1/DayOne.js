function twoSums(nums, k) {
    let seen = new Set();
    for (let num of nums) {
        let complement = k - num;
        if (seen.has(complement)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

console.log(twoSums([10, 15, 3, 7], 17)); 