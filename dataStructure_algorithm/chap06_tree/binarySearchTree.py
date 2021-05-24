from typing import List
from collections import deque


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

    def __repr__(self):
        return str(self.data)


class BinarySearchTree:
    def __init__(self):
        self.__root = None

    def insert(self, data, method='iterative'):
        if method in 'recursion':
            self.__root = self._insert_rec(self.__root, data)
        else:
            self._insert_iter(data)

    # 재귀로 삽입
    def _insert_rec(self, node, data):
        if not node:
            node = Node(data)

        if node.data > data:
            node.left = self._insert_rec(node.left, data)
        else:
            node.right = self._insert_rec(node.right, data)

        return node

    # 반복으로 삽입
    def _insert_iter(self, data):
        # root is None
        if not self.__root:
            self.__root = Node(data)
            return

        # create new node
        new_node = Node(data)

        curr = self.__root
        parent = None

        while curr != None:
            parent = curr
            if curr.data > data:
                curr = curr.left
            else:
                curr = curr.right

        if parent.data > data:
            parent.left = new_node
        else:
            parent.right = new_node

    def inorder_traverse(self):
        result = []

        self._inorder_rec(self.__root, result)

        return result

    # 중위 순회 (재귀)
    def _inorder_rec(self, node, result):
        if not node:
            return

        self._inorder_rec(node.left, result)
        result.append(node.data)
        self._inorder_rec(node.right, result)

    # 중위 순회 (반복)
    def _inorder_iter(self):
        result = []
        stack = []

        node = self.__root

        while node or stack:
            while node:
                stack.append(node)
                node = node.left

            if stack:
                node = stack.pop()
                result.append(node)
                node = node.right

        return result

    def find(self, data):
        return self._find_data(self.__root, data)

    def _find_data(self, node, data):
        if node is None:
            return False
        elif node.data == data:
            return True
        elif node.data > data:
            return self._find_data(node.left, data)
        elif node.data < data:
            return self._find_data(node.right, data)

    # 가장 작은 노드를 검색
    def find_min_node(self, node):
        while node.left:
            node = node.left

        return node

    def delete(self, data):
        self._delete_data(self.__root, data)

    def _delete_data(self, node, data):
        parent = None

        curr = node

        # data에 해당하는 노드 찾기, parent 추적
        while curr and curr.data != data:
            parent = curr

            if curr.data > data:
                curr = curr.left
            else:
                curr = curr.right

        # data를 못찾는 경우
        if curr is None:
            print('해당 노드가 없어요')
            return node

        # 자식 노드가 없는 노드의 삭제
        if curr.left is None and curr.right is None:
            if curr != node:
                if parent.left == curr:
                    parent.left = None
                else:
                    parent.right = None
            else:
                node = None

        # 오른쪽 왼쪽에 모든 자식이 있는 경우
        elif curr.left and curr.right:
            # 지우려는 노드의 오른쪽 하위 트리에서 가장 작은 노드 찾기
            min_node = self.find_min_node(curr.right)

            min_data = min_node.data

            # 오른쪽 하위 트리에서 가장 작은 노드는 항상 leaf node 이므로 그냥 삭제 진행
            self._delete_data(node, min_data)
            curr.data = min_data

        # 오른쪽 혹은 왼쪾 노드가 하나만 있는 경우
        else:
            if curr.left:
                child = curr.left
            else:
                child = curr.right

            if curr != node:
                if curr == parent.left:
                    parent.left = child
                else:
                    parent.right = child
            else:
                node = child

        return node

    def create_bst(self, nodes_list):
        nodes = [None if item is None else Node(item) for item in nodes_list]

        # root node
        self.__root = nodes[0]

        for index in range(1, len(nodes)):
            node = nodes[index]

            if node is not None:
                parent_index = (index - 1) // 2
                parent = nodes[parent_index]
                if parent is None:
                    return ValueError(f'Missing parent node at index {parent_index},'f'Node({node.data}')
            if index % 2 == True:
                parent.left = node
            else:
                parent.right = node

     # DFS (깊이 우선 탐색)
    def depth_first_search(self):
        res_iter = []
        res_rec = []
        res_iter = self.dfs_iter()
        self.dfs_rec(self.__root, res_rec)

        print(f'dfs iter : {res_iter}')
        print(f'dfs rec : {res_rec}')

    # 반복으로 깊이 우선 탐색 적용
    def dfs_iter(self):
        if not self.__root:
            return []

        stack = []
        result = []

        stack.append(self.__root)

        while len(stack) != 0:
            node = stack.pop()

            result.append(node.data)

            if node.right:
                stack.append(node.right)

            if node.left:
                stack.append(node.left)

        return result

    # 재귀로 깊이 우선 탐색
    def dfs_rec(self, node, result):
        if not node:
            return

        result.append(node.data)
        if node.left:
            self.dfs_rec(node.left, result)
        if node.right:
            self.dfs_rec(node.right, result)

    def breadth_first_search(self):
        queue = deque()
        res = []

        queue.append(self.__root)

        while len(queue) != 0:
            qsize = len(queue)

            for _ in range(qsize):
                node = queue.popleft()

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

                res.append(node)

        print(f'breadth first search: {res}')
