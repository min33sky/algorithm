# 트리 경로의 합

from collections import deque
from binarytree import BinaryTree

# 방법 2) 해시테이블 탐색


def pathSum(root, sum):
    result = 0
    acc = {0: 1}

    def pathSubSum(node, curr_acc):
        nonlocal result
        if node == None:
            return
        key_value = curr_acc + node.data - sum
        if key_value in acc:
            result += acc[key_value]

        curr_acc += node.data
        acc.setdefault(curr_acc, 0)
        acc[curr_acc] += 1
        pathSubSum(node.left, curr_acc)
        pathSubSum(node.right, curr_acc)
        acc[curr_acc] -= 1

        return

    pathSubSum(root, 0)

    return result


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
