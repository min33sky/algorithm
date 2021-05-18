from typing import List

tests = {
    1: "A man, a plan, a canal: Panama",
    2: "race a car",
    3: "Abbc, cbb a",
    4: ",   , --",
    5: "Abbc, cdd a"
}

res = {
    1: True,
    2: False,
    3: True,
    4: True,
    5: False
}


def isPalindrome(word: str):
    # 두 개의 포인터 생성
    i = 0
    j = len(word) - 1

    # 문자열을 소문자로 변경
    word = word.lower()

    while i < j:
        while i < j:
            if word[i].isalnum():
                break
            i += 1

        while i < j:
            if word[j].isalnum():
                break
            j -= 1

        if word[i] != word[j]:
            return False

        i += 1
        j -= 1

    return True


def check_result(index: int, output: int):
    if index > len(tests):
        raise RuntimeError(f'Failed to get {index}th case')
    return res.get(index, False) == output


def main():
    for index, input_string in tests.items():
        res = isPalindrome(input_string)

        if check_result(index, res):
            print(f'Test case {index} is correct: value {res}')
        else:
            print(f'Test case {index} is failed: value {res}')


if __name__ == '__main__':
    main()
