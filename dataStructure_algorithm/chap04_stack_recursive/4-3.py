# 유효한 괄호 검증

# 방법) 스택 사용

def isValid(s):
    stack = []

    paren_map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for ch in s:
        if ch not in paren_map.keys():
            stack.append(ch)
        else:
            pair = stack.pop() if stack else ''

            if paren_map[ch] != pair:
                return False

    return len(stack) == 0


print(isValid('({})'))
print(isValid('({]})'))
print(isValid('('))
print(isValid(']'))
