# 배열에서 다수의 요소(절반 초과) 찾기


# 방법 1: 이중 순회로 모든 숫자 세어보기

from typing import List

nums = [8, 2, 5, 2, 2, 2]


def majorityElement(nums: List[int]) -> int:
    majority_count = int(len(nums) / 2)

    for i, item_i in enumerate(nums):
        count = 0
        for j, item_j in enumerate(nums[1:], start=1):
            if item_j == item_i:
                count += 1
            if count > majority_count:
                return item_i

    return -1


print(majorityElement(nums))

# 방법 2: 해시 테이블


def majorityElement2(nums: List[int]) -> int:
    majority_count = int(len(nums) / 2)

    hashmap = {}

    for num in nums:
        if hashmap.get(num) != None:
            hashmap[num] = hashmap[num] + 1
        else:
            hashmap[num] = 1

        if hashmap[num] > majority_count:
            return num

    return -1


print(majorityElement2(nums))

# 정렬해서 찾기


def majorityElement3(nums: List[int]) -> int:
    return sorted(nums)[int(len(nums)/2)]


print(majorityElement3(nums))
