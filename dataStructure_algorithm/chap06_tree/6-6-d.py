# 트리 경로의 합

from collections import deque
from binarytree import BinaryTree

# 방법 2) 깊이 우선 탐색으로 경로 합 검색


def pathSum(root, sum):
    if root == None:
        return 0

    # 경고의 부분 경로 합 계산 함수
    def pathSumSub(node, target):
        if node == None:
            return 0

        return (1 if target - node.data == 0 else 0) + \
            pathSumSub(node.left, target - node.data) + \
            pathSumSub(node.right, target - node.data)

    # 루트 노드의 부분 경로 합 + 왼쪽자식을 루트로 하는 경로 합 + 오른쪽 자식을 루트로 하는 경로 합
    return pathSumSub(root, sum) + \
        pathSum(root.left, sum) + \
        pathSum(root.right, sum)


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
