import sys

# 동전 교환


def coinChange(coins, value):
    def change(v):
        # 잔돈이 0일때 재귀 종료
        if v == 0:
            return 0

        min_coin_cnt = sys.maxsize

        for c in coins:
            if v - c >= 0:
                change_cnt = change(v - c)
                if change_cnt < min_coin_cnt:
                    min_coin_cnt = change_cnt

        return min_coin_cnt + 1

    ans = change(value)

    return ans if ans != sys.maxsize + 1 else -1


print(coinChange([1, 2, 5], 11))
