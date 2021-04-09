# 정렬된 배열의 병합

from typing import List


nums1 = [2, 5, 6, 0, 0, 0]
nums2 = [1, 2, 3]

# 단순 삽입 후 정렬하기


def merge1(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    for i, v in enumerate(nums2):
        nums1[m + i] = v

    # 슬라이스 대입: 참조에 의한 호출
    nums1[:] = sorted(nums1)


idx = nums1.index(0)

merge1(nums1, idx, nums2, len(nums2) - 1)
print(nums1)

# 비교 후 삽입

nums1 = [11, 22, 33, 0, 0, 0]
nums2 = [22, 55, 66]


def merge2(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    i = m - 1
    j = n - 1
    k = m + n - 1

    while i >= 0 and j >= 0:
        if nums1[i] < nums2[j]:
            nums1[k] = nums2[j]
            j -= 1
        else:
            nums1[k] = nums1[i]
            i -= 1
        k -= 1

    while j >= 0:
        nums1[k] = nums2[j]
        j -= 1
        k -= 1


merge2(nums1, 3, nums2, 3)
print(nums1)
