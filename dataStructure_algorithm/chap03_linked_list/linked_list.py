
from typing import Any


class Node:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def traverse(self):
        temp = self.head

        while(temp):
            print(temp.data, end=' ')
            temp = temp.next
        print()

    # 가장 뒤에 노드 추가하기
    def push_back(self, data: Any):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        last = self.head
        while(last.next):
            last = last.next

        last.next = new_node

    # 가장 앞에 노드 추가하기
    def push(self, data: Any):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        temp = self.head
        self.head = new_node
        self.head.next = temp

    def remove(self, data: Any):
        curr = self.head
        prev = None

        # 헤드 노드를 삭제할 때
        if curr is not None:
            if curr.data == data:
                self.head = curr.next
                curr = None
                return

        # 삭제할 노드까지 순회
        while curr is not None:
            if curr.data == data:
                break

            prev = curr
            curr = curr.next

        # 지우려는 노드를 찾지 못해씅ㄹ 때
        if curr is None:
            return

        prev.next = curr.next
        curr = None

    def remove_node(self, node: Node):
        if node == None:
            return

        if node.next == None:
            node = None
            return

        next_node = node.next
        node.data = next_node.data
        node.next = next_node.next

        next_node = None
