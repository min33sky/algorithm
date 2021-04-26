# 최장 공통부분 수열

# 방법 1) 전체 탐색

def LCS(str1, str2):
    def LCSRec(i, j):
        nonlocal str1, str2

        if i >= len(str1) or j >= len(str2):
            return 0

        if str1[i] == str2[j]:
            return 1 + LCSRec(i+1, j+1)
        else:
            return max(LCSRec(i+1, j), LCSRec(i, j+1))

    return LCSRec(0, 0)

# 방법 2) 메모이제이션


def LCS_memo(str1, str2):
    dp = [[-1 for _ in range(len(str2) + 1)] for _ in range(len(str1) + 1)]

    def LCSRec(i, j):
        nonlocal str1, str2, dp

        if i >= len(str1) or j >= len(str2):
            return 0

        if dp[i][j] != -1:
            return dp[i][j]

        if str1[i] == str2[j]:
            return 1 + LCSRec(i+1, j+1)
        else:
            dp[i][j] = max(LCSRec(i+1, j) + LCSRec(i, j+1))

        return dp[i][j]

    return LCSRec(0, 0)

# 방법 3) bottomup


def LCS_bu(str1, str2):
    n = len(str1)
    m = len(str2)
    dp = [[-1 for _ in range(m + 1)] for _ in range(n + 1)]

    for i in range(m + 1):
        dp[0][i] = 0

    for j in range(n + 1):
        dp[j][0] = 0

    for i in range(1, n+1):
        for j in range(1, m+1):
            if str1[i-1] == str2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[n][m]
