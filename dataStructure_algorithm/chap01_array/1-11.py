# 빠진 숫자 찾기

# 예) 크기가 3인 배열 [3,1,0]에서 빠진 숫자는 2이다. (0~3이 들어갈 수 있음)

# 방법 1) 정렬을 사용해 구하기

from typing import List

nums = [3, 1, 0, 4]


def missingNumber1(nums: List[int]) -> int:
    nums.sort()

    # 첫 인덱스와 마지막 인덱스의 값을 확인
    if nums[-1] != len(nums):
        return len(nums)
    if nums[0] != 0:
        return 0

    # 배열을 순회 하며 1씩 증가하는지 확인
    for i in range(1, len(nums)):
        expected = nums[i - 1] + 1
        if expected != nums[i]:
            return expected

    return -1


print(missingNumber1(nums))


# 방법 2) Set을 사용
nums = [3, 2, 0, 4]


def missingNumber2(nums: List[int]) -> int:
    # 배열 요소들을 Set에 삽입
    set_nums = set(nums)

    for i in range(len(nums) + 1):
        if i not in set_nums:
            return i


print(missingNumber2(nums))

# 방법 3) XOR 비트 연산 이용
nums = [2, 1, 0, 4]


def missingNumber3(nums: List[int]) -> int:
    missing = len(nums)

    for i in range(len(nums)):
        missing = missing ^ i ^ nums[i]

    return missing


print(missingNumber3(nums))


# 방법 4) 0~N까지의 합과 배열 모든 요소의 합의 차로 구하기

nums = [3, 1, 4, 0]


def missingNumber4(nums: List[int]) -> int:
    expected_sum = 0
    nums_sum = 0

    # for i in range(len(nums) + 1):
    #     expected_sum += i

    expected_sum = int((len(nums) * (len(nums) + 1)) / 2)

    # for _, num in enumerate(nums):
    #     nums_sum += num

    nums_sum = sum(nums)

    return expected_sum - nums_sum


print(missingNumber4(nums))
