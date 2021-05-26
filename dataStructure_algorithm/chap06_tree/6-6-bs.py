from binarytree import BinaryTree, Node
from collections import deque
import os
import sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)


tests = {
    1: ([5, 4, 8, 11, 'N', 13, 4, 7, 2, 'N', 'N', 'N', 1], 22),
    2: ([1, 2, 3], 5)
}

res = {
    1: True,
    2: False
}


def pathSum(root: Node, sum: int) -> int:
    cnt = 0

    if root == None:
        return cnt

    # 깊이 우선 탐색으로 현재 노드를 루트로하는 하위 트리의 모든 경로를 찾고 부분합을 구하기
    def pathSumSub(node: Node, target: int) -> int:
        if node == None:
            return 0

        return (1 if (target - node.data) == 0 else 0) +\
            pathSumSub(node.left, target - node.data) +\
            pathSumSub(node.right, target - node.data)

    queue = deque()
    queue.append(root)

    # 너비 우선 탐색으로 트리의 모든 노드를 방문
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


def parse_tree(tree_input):
    bst = BinaryTree()

    input_datas = []
    for item in tree_input:
        if item == 'N':
            input_datas.append(None)
        else:
            input_datas.append(int(item))

    bst.create_bst(input_datas)
    return bst


def check_result(index: int, output: int):
    if index > len(tests):
        raise RuntimeError(f'Failed to get {index}th case')
    return res.get(index, -1) == (output > 0)


def main():
    for index, data in tests.items():
        tree_input = data[0]
        target_sum = data[1]

        bst = parse_tree(tree_input)
        res = pathSum(bst.root, target_sum)

        if check_result(index, res):
            print(f'Test case {index} is correct: value {res}')
        else:
            print(f'Test case {index} is failed: value {res}')


if __name__ == '__main__':
    main()
