import sys

# 동전 교환


def coinChange(coins, value):
    def change(v):
        if v == 0:
            return 0

        min_coin_cnt = sys.maxsize

        for c in coins:
            if v - c >= 0:

    ans = change(11)


print(coinChange([1, 2, 5], 11))
