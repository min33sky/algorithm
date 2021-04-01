# 정렬된 배열에서 중복값 제거

from typing import List


nums = [0, 0, 0, 1, 1, 1, 2]


def removeDuplicates(nums: List[int]) -> int:

    if len(nums) <= 0:
        return 0

    cnt = 1
    curr = nums[0]

    for i in range(1, len(nums)):
        if nums[i] != curr:
            curr = nums[i]
            nums[cnt] = curr
            cnt = cnt + 1

    return cnt


print(removeDuplicates(nums))
