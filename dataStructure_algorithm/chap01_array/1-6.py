

from typing import List


def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    for i, v in enumerate(nums2):
        nums1[m + i] - v

    nums1[:] = sorted(nums1)
