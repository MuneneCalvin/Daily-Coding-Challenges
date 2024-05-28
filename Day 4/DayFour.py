def first_missing_positive(nums):
    # Move positive integers to the left side of the array
    j = 0
    for i in range(len(nums)):
        if nums[i] > 0:
            nums[i], nums[j] = nums[j], nums[i]
            j += 1

    # Mark presence of positive integers
    for i in range(j):
        index = abs(nums[i]) - 1
        if index < j:
            nums[index] = -abs(nums[index])

    # Find the first missing positive integer
    for i in range(j):
        if nums[i] > 0:
            return i + 1

    return j + 1

print(first_missing_positive([3, 4, -1, 1])) 
print(first_missing_positive([1, 2, 0]))
