# 부분집합

# from typing import List


nums = [1, 2, 3]
res = []
sub = []


# def subsets_recursion(nums: List[int], res: List[List[int]], sub: List[int], index: int):
# def subsets_recursion(nums, res, sub, index):
#     if len(sub) > len(nums):
#         return

#     # res.append(sub.copy())
#     res.append(sub[:])

#     for i in range(index, len(nums)):
#         sub.append(nums[i])
#         subsets_recursion(nums, res, sub, i + 1)
#         sub.pop()


# subsets_recursion(nums, res, sub, 0)
# print(res)


# def subsets(nums: List[int]) -> List[List[int]]:
def subsets(nums):
    res = []
    nums_len = len(nums)
    nth_bit = 1 << nums_len

    for i in range(2 ** nums_len):
        bitmask = bin(i | nth_bit)[3:]

        res.append(
            [nums[j] for j in range(nums_len) if bitmask[j] == '1']
        )
    return res


print(subsets(nums))
