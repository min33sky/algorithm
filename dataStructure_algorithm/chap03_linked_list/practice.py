
from typing import Any


class Node:
    def __init__(self, data: Any):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def push_back(self, data: Any):
        new_node = Node(data)

        # 연결 리스트가 비어있을 때
        if self.head is None:
            self.head = new_node
            return

        last = self.head

        # 마지막 노드까지 순회
        while last.next:
            last = last.next

        last.next = new_node

    def push(self, data: Any):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        temp = self.head
        self.head = new_node
        new_node.next = temp

    def remove(self, data: Any):
        curr = self.head
        prev = None

        # head의 요소가 지워지는 요소일 때 처리
        if curr is not None:
            if curr.data == data:
                self.head = curr.next
                # 지워지는 노드를 메모리에서 삭제
                curr = None
                return

        while curr is not None:
            if curr.data == data:
                break
            prev = curr
            curr = curr.next

        # 지우려는 data 노드를 찾지 못했을 때 처리
        if curr == None:
            return

        prev.next = curr.next

        # 지워지는 노드를 메모리에서 삭제
        curr = None

    # 제거하려는 노드가 인자로 제공될 때
    def remove_node(self, node: Any):
        if node == None:
            return

        if node.next == None:
            node = None
            return

        next_node = node.next
        node.data = next_node.data
        node.next = next_node.next

        next_node = None

    def traverse(self):
        temp = self.head

        while temp:
            print(temp.data, end=' ')
            temp = temp.next
        print()


linked_list = LinkedList()

linked_list.push_back(11)
linked_list.push_back(12)
linked_list.push_back(13)

linked_list.push(10)

linked_list.traverse()
