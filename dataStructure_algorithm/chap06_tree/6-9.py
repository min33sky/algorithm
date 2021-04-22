# 이진 검색 트리 검증

# 방법 1) 재귀로 풀이

def isValidBST(root):
    low = float('-inf')
    high = float('inf')

    def isValidBSTRec(node, low, high):
        if node == None:
            return True

        if node.data <= low or node.data >= high:
            return False

        return isValidBSTRec(node.left, low, node.data) and \
            isValidBSTRec(node.right, node.data, high)

    return isValidBSTRec(root, low, high)

# 방법 2) 스택 사용


def isValidBST_stack(root):
    if root == None:
        return True

    stack = []

    stack.append((root, float('-inf'), float('inf')))

    while stack:
        node, low, high = stack.pop()

        data = node.data

        if data <= low or data >= high:
            return False
        if node.left:
            stack.append((node.left, low, data))
        if node.right:
            stack.append((node.right, data, high))

    return True

# 방법 3) 중위 순회로 구하기


def isValidBST_inorder(root):
    prev = float('-inf')

    def inorderTree(node):
        nonlocal prev
        if node == None:
            return True

        if not inorderTree(node.left):
            return False

        if node.data <= prev:
            return False

        prev = node.data

        return inorderTree(node.right)

    return inorderTree(root)
