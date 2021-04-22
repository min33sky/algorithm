# 배낭

def knapsack_brute_force(values, weights, capacity, curr_index):
    if capacity <= 0 or curr_index >= len(values):
        return 0

    selected = 0

    if weights[curr_index] <= capacity:
        selected = values[curr_index] + \
            knapsack_brute_force(values, weights, capacity -
                                 weights[curr_index], curr_index + 1)

    not_selected = knapsack_brute_force(
        values, weights, capacity, curr_index + 1)

    return max(selected, not_selected)


print(knapsack_brute_force([1, 6, 10, 16], [1, 2, 3, 5], 7, 0))
print(knapsack_brute_force([1, 6, 10, 16], [1, 2, 3, 5], 6, 0))


def knapsack_dp(dp, values, weights, capa, curr_index):
    if capa < 0 or curr_index >= len(values):
        return 0

    # 저장한 값이 존재하면 그 값을 리턴
    if dp[curr_index][capa] != -1:
        return dp[curr_index][capa]

    selected = 0
    if weights[curr_index] <= capa:
        selected = values[curr_index] + \
            knapsack_dp(dp, values, weights, capa -
                        weights[curr_index], curr_index + 1)

    not_selected = knapsack_dp(dp, values, weights, capa, curr_index + 1)

    dp[curr_index][capa] = max(selected, not_selected)
    return dp[curr_index][capa]


dp1 = [[-1 for _ in range(8)] for _ in range(4)]
print(knapsack_dp(dp1, [1, 6, 10, 16], [1, 2, 3, 5], 7, 0))

dp2 = [[-1 for _ in range(7)] for _ in range(4)]
print(knapsack_dp(dp2, [1, 6, 10, 16], [1, 2, 3, 5], 6, 0))


def knapsack_dp_bu(n, values, weights, capa):
    if capa <= 0 or n == 0 or n != len(weights):
        return 0

    dp = [[0 for _ in range(capa + 1)] for _ in range(n)]

    for c in range(capa + 1):
        if weights[0] <= c:
            dp[0][c] = values[0]

    for i in range(1, n):
        for c in range(1, capa + 1):
            selected, not_selected = 0, 0
            if weights[i] <= c:
                selected = values[i] + dp[i - 1][c - weights[i]]

            not_selected = dp[i - 1][c]
            dp[i][c] = max(selected, not_selected)

    return dp[n-1][capa]


print(knapsack_dp_bu(4, [1, 6, 10, 16], [1, 2, 3, 5], 7))
print(knapsack_dp_bu(4, [1, 6, 10, 16], [1, 2, 3, 5], 6))
