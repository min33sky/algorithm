# 동전 교환

# 방법1) 전체 탐색

def coinChange(coins, amount):

    def coinRec(remain):
        nonlocal coins

        if remain == 0:
            return 0

        min_coins = float('int')

        for coin in coins:
            if remain >= coin:
                curr_min = coinRec(remain - coin)
                min_coins = min(curr_min, min_coins)

        return min_coins + 1

    return coinRec(amount)

# 방법2) 메모라이제이션


def coinChange_td(coins, amount):
    dp = [-1 for _ in range(amount + 1)]

    def coinRec(remain):
        nonlocal dp, coins

        if remain == 0:
            return 0

        if dp[remain] != -1:
            return dp[remain]

        min_coin = float('inf')

        for coin in coins:
            if remain >= coin:
                min_coin = min(min_coin, coinRec(remain - coin) + 1)

        dp[remain] = min_coin

        return dp[remain]

    return coinRec(amount)

# 방법 3) bottom-up


def coinChange(coins, amount):
    dp = [float('inf') for _ in range(amount + 1)]

    dp[0] = 0

    for i in range(1, amount + 1):
        for c in coins:
            if i >= c:
                dp[i] = min(dp[i-c], dp[i])

    return dp[amount]
