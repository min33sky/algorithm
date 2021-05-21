from typing import List
import collections

tests = {
    1: "abc"
}

res = {
    1: ["abc", "acb", "bac", "bca", "cab", "cba"]
}


def is_same_list(alist: List, blist: List):
    return collections.Counter(alist) == collections.Counter(blist)


def check_result(index: int, output: List):
    if index > len(tests):
        raise RuntimeError(f'Failed to get {index}th case')

    return is_same_list(output, res.get(index, []))


def find_permutation(res, chs, start, end):
    if start == end - 1:
        res.append(''.join(chs))
    else:
        for idx in range(start, end):
            # 교환 후 재귀 호출
            chs[start], chs[idx] = chs[idx], chs[start]
            find_permutation(res, chs, start+1, end)
            # 다시 원상 복구(백트래킹)
            chs[start], chs[idx] = chs[idx], chs[start]


def main():
    for index, input_str in tests.items():
        res = []
        find_permutation(res, list(input_str), 0, len(input_str))

        if check_result(index, res):
            print(f'Test case {index} is correct: value {res}')
        else:
            print(f'Test case {index} is failed: value {res}')


if __name__ == '__main__':
    main()
