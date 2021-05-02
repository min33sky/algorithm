# 빠진 숫자 찾기 - 해시테이블

from typing import List

tests = {
    1: [3, 0, 1],
    2: [0, 1],
    3: [9, 6, 4, 2, 3, 5, 7, 0, 1],
    4: [0],
    5: [1]
}
res = {
    1: 2,
    2: 2,
    3: 8,
    4: 1,
    5: 0
}


def missingNumber(nums: List[int]) -> int:
    # SET에 현재 배열 요소들을 저장
    set_nums = set(nums)

    for i in range(len(nums) + 1):
        if i not in set_nums:
            return i

    return -1


def check_result(index: int, output: int):
    if index > len(tests):
        raise RuntimeError(f'Failed to get {index}th case')
    return output == res.get(index, -1)


def main():
    for index, input_list in tests.items():
        num = missingNumber(input_list)

        if check_result(index, num):
            print(f'Test case {index} is correct: value {num}')
        else:
            print(f'Test case {index} is failed: value {num}')


if __name__ == '__main__':
    main()
