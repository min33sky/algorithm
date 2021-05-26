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


def pathSum(root: Node, sum_val: int) -> int:
    if root == None:
        return 0

    def pathSubSum(node: Node, target: int):
        if node == None:
            return 0

        return (1 if (target - node.data == 0) else 0) +\
            pathSubSum(node.left, target - node.data) +\
            pathSubSum(node.right, target-node.data)

    return pathSubSum(root, sum_val) +\
        pathSubSum(root.left, sum_val) +\
        pathSubSum(root.right, sum_val)


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
