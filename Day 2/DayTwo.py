def product_except_self(nums):
    n = len(nums)
    if n == 0:
        return []
    
    # Initialize the left and right product arrays
    left_products = [1] * n
    right_products = [1] * n
    result = [1] * n
    
    # Fill the left_products array
    for i in range(1, n):
        left_products[i] = left_products[i - 1] * nums[i - 1]
    
    # Fill the right_products array
    for i in range(n - 2, -1, -1):
        right_products[i] = right_products[i + 1] * nums[i + 1]
    
    # Fill the result array by multiplying left and right products
    for i in range(n):
        result[i] = left_products[i] * right_products[i]
    
    return result

print(product_except_self([1, 2, 3, 4, 5]))
print(product_except_self([3, 2, 1]))
