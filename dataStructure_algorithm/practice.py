from typing import List


def sum_all_item_array(arr: List[int]) -> int:
    j = 0
    for i in arr:
        if i % 2 != 0:
            continue
        j += i
    return j


print(sum_all_item_array([1, 2, 3, 4, 5]))
