# 모든 문자열 치환

# 방법 1)
def find_permutation(s):
    if len(s) == 1:
        return list(s)

    ans = []
    curr = s[0]
    s = s[1:]

    words = find_permutation(s)

    for sub in words:
        for i in range(len(sub) + 1):
            ans.append("".join([sub[:i], curr, sub[i:]]))

    return ans


s = 'abc'
res = find_permutation(s)
print(*res)


# 방법 2)

res = []


def find_permutation2(chs, start, end):
    if start == end - 1:
        res.append(''.join(chs))
    else:
        for i in range(start, end):
            chs[start], chs[i] = chs[i], chs[start]
            find_permutation2(chs, start + 1, end)
            chs[start], chs[i] = chs[i], chs[start]  # backtracking


s = 'abc'
find_permutation2(list(s), 0, len(s))
print(*res)
