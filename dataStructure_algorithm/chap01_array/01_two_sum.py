# 두 수의 합 구하기

from typing import List


nums = [2, 7, 10, 19]
target = 9

# 1) 모든 경우의 수(Brute-force)로 구하기


def twoSum1(nums: List[int], target: int) -> List[int]:
    for i in range(0, len(nums)):
        for j in range(i+1, len(nums)):
            if (nums[i] + nums[j]) is target:
                return [i, j]
    return [-1, -1]


print(twoSum1(nums, target))


# 2) 해시 테이블로 구하기

def twoSum2(nums: List[int], target: int) -> List[int]:

    hashTable_dict = {}

    for i in range(0, len(nums)):
        value = target - nums[i]

        if hashTable_dict.get(value) is not None and hashTable_dict.get(value) != i:
            return sorted([i, hashTable_dict[value]])

        hashTable_dict[nums[i]] = i

    return [-1, -1]


print(twoSum2(nums, target))
