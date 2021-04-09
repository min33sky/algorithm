from collections import defaultdict
from typing import List


# 그룹 애너그램(anagram)

input_value = ['eat', 'repaid', 'paired', 'tea', 'bat']

# 방법 1) 정렬 후 해시테이블을 이용하여 구하기


def groupAnagram1(strs: List[str]) -> List[List[str]]:
    hashmap = defaultdict(list)

    for s in strs:
        hashmap[''.join(sorted(s))].append(s)

    return hashmap.values()


print(groupAnagram1(input_value))

# 방법 2) 문자 카운트와 해시 테이블 이용


def groupAnagram2(strs: List[str]) -> List[List[str]]:
    hashmap = defaultdict(list)

    for s in strs:
        # 모든 소문자들의 개수를 담을 배열 생성
        count = [0] * 26

        for ch in s:
            count[ord(ch) - ord('a')] += 1

        # 해시 테이블의 키는 리스트는 불가능하지만 튜플은 가능
        hashmap[tuple(count)].append(s)

    return hashmap.values()


print(groupAnagram2(input_value))
