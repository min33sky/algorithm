from typing import List


def group_sum(nums: List[int], subset: List[bool], target: int, i: int) -> bool:
    if i == len(nums):
        subset_sum = 0
        for i, v in enumerate(nums):
            if subset[i]:
                subset_sum += v
        return subset_sum == target

    subset[i] = False
    not_select = group_sum(nums, subset, target, i + 1)
    subset[i] = True
    select = group_sum(nums, subset, target, i + 1)

    return not_select | select


nums = [1, 2]
subset = [False] * len(nums)
print(group_sum(nums, subset, 3, 0))

# 간략화해서 풀기


def group_sum2(nums: List, sum: int, target: int):
    if len(nums) == 0:
        return sum == target

    left_result = group_sum2(nums[1:], sum, target)
    right_result = group_sum2(nums[1:], sum + nums[0], target)

    return left_result | right_result


print(group_sum2(nums, 0, 3))


lst = [1, 2, 3, 4, 5]
print(lst)
print(lst[1:])
print(lst[2:])
print(lst[3:])
print(lst[4:])
print(lst[5:])
