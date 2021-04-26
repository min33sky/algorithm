from typing import List
import collections

tests = {
    1: ([1, 2, 3, 4, 5, 6, 7], 3),
    2: ([1, 2], 3)
}

res = {
    1: [5, 6, 7, 1, 2, 3, 4],
    2: [2, 1]
}


def rotate(nums: List[int], k: int) -> None:
    count = 0

    for start in range(len(nums)):
        # 모든 요소가 한 번씩 움직였으면 종료
        if count >= len(nums):
            break

        curr_index = start
        prev_elem = nums[start]

        while True:
            next_index = (curr_index + k) % len(nums)
            temp = nums[next_index]
            nums[next_index] = prev_elem
            prev_elem = temp

            curr_index = next_index
            count += 1

            # 시작 위치로 돌아왔으면 반복 종료
            if curr_index == start:
                break


def is_same_list(alist: List, blist: List):
    return collections.Counter(alist) == collections.Counter(blist)


def check_result(index: int, output: List):
    if index > len(tests):
        raise RuntimeError(f'Failed to get {index}th case')

    return is_same_list(output, res.get(index, []))


def main():
    for index, data in tests.items():
        nums = data[0]
        k = data[1]
        rotate(nums, k)

        if check_result(index, nums):
            print(f'Test case {index} is correct: value {nums}')
        else:
            print(f'Test case {index} is failed: value {nums}')


if __name__ == '__main__':
    main()
