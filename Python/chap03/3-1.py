# 그리디 알고리즘 (거스름 돈)

n = 1260  # 돈
count = 0  # 거스름 동전 개수

# 큰 단위의 화폐부터 차례대로 확인
coin_types = [500, 100, 50, 10]

for coin in coin_types:
    count += n // coin
    n %= coin

print(count)
