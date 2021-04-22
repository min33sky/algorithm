from collections import deque

# 이진 트리 반전

# 방법 1) 반복 - 스택


def invertTree(root):
    if root == None:
        return

    stack = []

    stack.append(root)

    while (len(stack) > 0):
        node = stack.pop()

        left = node.left
        node.left = node.right
        node.right = left

        if node.left != None:
            stack.append(node.left)
        if node.right != None:
            stack.append(node.right)

    return root


# 방법 2) 재귀

def invertTree_rec(root):
    if root == None:
        return None

    left = root.left
    root.left = root.right
    root.right = left

    invertTree_rec(root.left)
    invertTree_rec(root.right)

    return root

# 방법 3) 큐를 이용한 너비우선 탐색


def invertTree_bst(root):
    if root == None:
        return None

    queue = deque()
    queue.append(root)

    while (len(queue) > 0):
        cnt = len(queue)

        for _ in range(cnt):
            node = queue.popleft()

            left = node.left
            node.left = node.right
            node.right = left

            if node.left != None:
                queue.append(node.left)
            if node.right != None:
                queue.append(node.right)

    return root
