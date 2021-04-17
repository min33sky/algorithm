# 트리 경로의 합

from collections import deque
from binarytree import BinaryTree

# 방법 1) 너비 우선 탐색으로 모든 노드를 순회하면서 하위 노드를 깊이 우선 탐색으로 경로 합 검색


def pathSum(root, sum):
    cnt = 0

    if root == None:
        return cnt

    # 부분 경로 합 구하기
    def pathSumSub(node, target):
        if node == None:
            return 0

        return (1 if target - node.data == 0 else 0) + \
            pathSumSub(node.left, target - node.data) + \
            pathSumSub(node.right, target - node.data)

    queue = deque()
    queue.append(root)

    while len(queue) != 0:
        q_size = len(queue)

        for _ in range(q_size):
            node = queue.popleft()

            cnt += pathSumSub(node, sum)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

    return cnt


if __name__ == '__main__':
    bst = BinaryTree()
    input_datas = []
    for item in input().split(' '):
        if item == 'N':
            input_datas.append(None)
        else:
            input_datas.append(int(item))

    bst.create_bst(input_datas)
    target_sum = int(input())

    print(f'result: {pathSum(bst.root, target_sum)}')
