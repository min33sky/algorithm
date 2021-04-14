# 배열의 두 부분집합의 최소 차이 만들기

import sys

min_diff = sys.maxsize
total = 0


def subset_diff(index, nums, subsum):
    global total, min_diff
    if index == len(nums):
        min_diff = min(min_diff, abs((total - subsum) - subsum))
        return

    # 현재 인덱스 값의 요소를 넣고 부분 집합 만들기
    subset_diff(index + 1, nums, subsum + nums[index])
    # 현재 인덱스 값의 요소를 빼고 부분 집합 만들기
    subset_diff(index + 1, nums, subsum)


nums = [3, 2, 4, 7, 1]
total = sum(nums)

subset_diff(0, nums, 0)
print(min_diff)
