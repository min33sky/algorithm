from typing import List
# 배열에서 삽입 위치 찾기

# 1) 선형 순회로 찾기


def searchInsert1(nums: List[int], target: int) -> int:
    index = 0

    while index < len(nums):
        if target <= nums[index]:
            break

        index += 1

    return index


print(searchInsert1([1, 3, 5, 6], 3))
print(searchInsert1([1, 3, 5, 6], 4))


def searchInsert2(nums: List[int], target: int) -> int:
    low = 0
    high = len(nums) - 1

    while low <= high:
        mid = int((low + high) / 2)

        if target == mid:
            return mid
        elif target > nums[mid]:
            low = mid + 1
        else:
            high = mid - 1

    return low


print(searchInsert2([1, 3, 5, 6], 3))
print(searchInsert2([1, 3, 5, 6], 4))
