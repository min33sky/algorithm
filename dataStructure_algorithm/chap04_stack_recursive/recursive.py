from typing import List


def sum_elements(nums: List[int]):
    sum = 0
    for i in nums:
        sum = sum + i
    return sum


print(sum_elements([1, 2, 3, 4, 5]))


def sum_elements_recursive(nums: List[int]):
    if len(nums) == 1:
        return nums[0]

    return nums[0] + sum_elements_recursive(nums[1:])


print(sum_elements_recursive([1, 2, 3, 4, 5]))


def group_sum(nums: List[int], subset: List[bool], target: int, index: int) -> bool:
    # 트리 최하단에 도달았을 경우
    if index == len(nums):
        subset_sum = 0
        for i, v in enumerate(nums):
            if subset[i]:
                subset_sum += v
        return (subset_sum == target)

    # 부분 집합에 포함시키지 않는다.
    subset[index] = False
    not_select = group_sum(nums, subset, target, index + 1)

    # 부분 집합에 포함시킨다.
    subset[index] = True
    select = group_sum(nums, subset, target, index + 1)

    # True 값이 존재하면 True
    return (not_select | select)


nums = [1, 2]
subset = [False] * len(nums)

print(group_sum(nums, subset, 3, 0))
