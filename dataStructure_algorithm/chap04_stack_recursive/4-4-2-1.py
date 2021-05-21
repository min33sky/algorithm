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


def find_permutation(s):
    if len(s) == 1:
        return list(s)

    ans = []
    curr = s[0]  # 리스트에 삽입할 대상 문자
    s = s[1:]

    # 단어들의 조합 리스트
    words = find_permutation(s)

    print('words', words)

    for sub in words:
        # 들어갈 수 있는 위치에 문자를 삽입하기
        for idx in range(len(sub) + 1):
            ans.append(''.join([sub[:idx], curr, sub[idx:]]))

    return ans


def main():
    for index, input_str in tests.items():
        res = find_permutation(input_str)

        if check_result(index, res):
            print(f'Test case {index} is correct: value {res}')
        else:
            print(f'Test case {index} is failed: value {res}')


if __name__ == '__main__':
    main()
