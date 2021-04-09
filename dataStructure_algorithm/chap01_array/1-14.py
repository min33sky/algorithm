# 단어 찾기

def exist(board, word):
    # 이동 가능 방향 (좌, 우, 상, 하)
    direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    def search_direction(x, y, subword):
        # board 범위를 넘어가면 재귀 호출 종료
        if (x < 0 or x >= len(board)) or (y < 0 or y >= len(board[0])):
            return False

        # 현재 위치에 단어가 찾을 단어와 다를 경우 종료
        if board[x][y] != subword[0]:
            return False

        # 일치하는 단어가 존재하고 부분 문자열의 남은 길이가 1일땐 True
        if len(subword) == 1:
            return True

        # 현재 단어를 다시 확인하지 않게 (중복 처리하지 않게) 값을 변경
        board[x][y] = '.'

        for i, j in direction:
            if search_direction(x + i, y + j, subword[1:]):
                return True

        # 재귀 호출로 검색 결과 일치하지 않기 때문에 다시 상태 복구
        board[x][y] = subword[0]
        return False

    result = False

    for x in range(len(board)):
        for y in range(len(board[0])):
            if board[x][y] == word[0] and search_direction(x, y, word):
                result = True
                break

    return result


board = [['A', 'C', 'B'], ['G', 'O', 'G'], ['I', 'J', 'D']]
word = 'COGD'

print(exist(board, word))
