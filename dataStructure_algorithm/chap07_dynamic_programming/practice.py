# 피보나치

from typing import List


def fib(n: int, memo: List[int]) -> int:
    if memo[n] == -1:
        memo[n] = fib(n-1, memo) + fib(n-2, memo)

    return memo[n]


n = 4
memo = [-1] * (n + 1)
memo[0], memo[1] = 0, 1

print(fib(4, memo))


def fib_iter(n: int) -> int:
    memo = [-1] * (n + 1)
    memo[0], memo[1] = 0, 1

    for i in range(2, n + 1):
        memo[i] = memo[i - 1] + memo[i - 2]

    return memo[n]


print(fib_iter(4))
