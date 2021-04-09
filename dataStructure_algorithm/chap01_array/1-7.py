# 정렬된 배열의 정합 2


from typing import List

nums1 = [1, 3, 5, 7]
nums2 = [2, 4, 8]


def merge(nums1: List[int], m: int, nums2: List[int], n: int) -> None:
    for i, nums1_item in enumerate(nums1):
        if nums1_item > nums2[0]:
            nums1[i], nums2[0] = nums2[0], nums1_item

            # nums2 정렬
            for k, item in enumerate(nums2[1:], start=1):
                if nums1_item <= nums2[k]:
                    nums2[k-1] = nums1_item
                    break

                nums2[k-1] = nums2[k]


merge(nums1, 4, nums2, 3)

print(nums1, nums2)
