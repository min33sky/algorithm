from typing import List

tests = {
    1: ([
        ["A", "B", "C", "E"],
        ["S", "F", "E", "S"],
        ["A", "D", "E", "E"]
    ], "BFEE"),
    2: ([
        ["A", "B", "C", "E"],
        ["S", "F", "S", "D"],
        ["A", "D", "E", "D"]
    ], "BFSE"),
    3: ([
        ["A", "B", "C", "E"],
        ["S", "F", "S", "D"],
        ["A", "D", "E", "D"]
    ], "BFST")
}

res = {
    1: True,
    2: True,
    3: False
}


def check_result(index: int, output: int):
    if index > len(tests):
        raise RuntimeError(f'Failed to get {index}th case')
    return res.get(index, False) == output


def exist(board: List[List[str]], word: str) -> bool:
    # 이동 가능한 방향
    direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    def search_direction(x: int, y: int, subword: str):
        # board 배열의 범위를 넘어서면 False
        if (x < 0 or x >= len(board)) or \
           (y < 0 or y >= len(board[0])):
            return False

        # 첫번째 문자와 같지 않다면 False 반환
        if board[x][y] != subword[0]:
            return False

        # 첫 문자와 동일하고 글자 길이가 1이라면 True 반환
        if len(subword) == 1:
            return True

        # 중복 검사를 막기 위해서 이미 체크했다고 표시를 한다.
        board[x][y] = '.'

        for i, j in direction:
            if search_direction(x + i, y + j,
                                subword[1:]):
                return True

        # 재귀 호출 결과 정답이 없으므로 원상복구 시킨다.
        board[x][y] = subword[0]
        return False

    res = False
    for x in range(len(board)):
        for y in range(len(board[0])):
            if board[x][y] == word[0] and \
               search_direction(x, y, word):
                res = True
                break
    return res


def main():
    for index, data in tests.items():
        board = data[0]
        word = data[1]
        res = exist(board, word)

        if check_result(index, res):
            print(f'Test case {index} is correct: value {res}')
        else:
            print(f'Test case {index} is failed: value {res}')


if __name__ == '__main__':
    main()
