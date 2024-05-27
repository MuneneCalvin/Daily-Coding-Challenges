def two_sums(nums, k):
    seen = set ()
    for num in nums:
        complement = k - num
        if complement in seen:
            return True
        seen.add(num)
    return False

print(two_sums([10, 15, 3, 7], 17))