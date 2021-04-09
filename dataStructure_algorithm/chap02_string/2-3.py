# 회문 (Palindrome) 확인

Input_value = "Abbc,c bb.A"

# 방법 1) 단순히 확인하면서 풀기


def isPalindrome1(s: str) -> bool:
    # def isPalindrome1(s):
    # 두개의 포인터가 가리키는 값을 비교하기
    i = 0
    j = len(s) - 1

    # 모든 문자를 소문자로 변경
    s = s.lower()

    while i < j:
        while i < j:
            if s[i].isalnum():
                break
            i += 1

        while i < j:
            if s[j].isalnum():
                break
            j -= 1

        if s[i] != s[j]:
            return False

        i += 1
        j -= 1

    return True


print(isPalindrome1(Input_value))


# 방법 2) 숫자,문자가 아닌것을 다 제거하고 뒤집은 문자열과 비교하기
def isPalindrome2(s):
    ss = ''.join(list(filter(str.isalnum, s))).lower()

    return ss == ss[::-1]


print(isPalindrome2(Input_value))
