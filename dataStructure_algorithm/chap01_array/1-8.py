from typing import List


# 파스칼의 삼각형


def generate(numRows: int) -> List[List[int]]:
    pascal = []

    if numRows == 0:
        return pascal

    pascal.append([1])

    for i in range(1, numRows):
        prev_len = len(pascal[i - 1])
        curr_list = []

        for j in range(prev_len + 1):
            num = 1
            # 첫 번째, 마지막 열은 1로 고정이므로 조건에서 제외
            if j != 0 and j != prev_len:
                num = pascal[i - 1][j - 1] + pascal[i-1][j]

            curr_list.append(num)

        pascal.append(curr_list)

    return pascal


print(generate(6))
