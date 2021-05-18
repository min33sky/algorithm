from linked_list import Node, LinkedList
from typing import List
import collections

import os
import sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)


tests = {
    1: ([7, 2, 4, 3], [5, 6, 4]),
    2: ([7, 8, 2], [2, 1])
}

res = {
    1: [7, 8, 0, 7],
    2: [8, 0, 3]
}


def create_linked_list(arr):
    l = LinkedList()

    for item in arr:
        l.push_back(item)

    return l


def check_result(index: int, head: Node):
    output = []

    temp = head
    while (temp):
        output.append(temp.data)
        temp = temp.next

    return collections.Counter(res.get(index, [])) == collections.Counter(output)


def addTwoNumbers(l1: Node, l2: Node) -> Node:
    str1 = []
    str2 = []

    l1_curr = l1
    l2_curr = l2

    # 합쳐진 연결 리스트의 헤드 노드
    head = None

    while l1_curr != None:
        str1.append(l1_curr.data)
        l1_curr = l1_curr.next

    while l2_curr != None:
        str2.append(l2_curr.data)
        l2_curr = l2_curr.next

    # 자리 올림 수
    carry = 0

    while str1 or str2:
        num1 = str1.pop() if str1 else 0
        num2 = str2.pop() if str2 else 0

        carry, num = divmod(num1+num2+carry, 10)

        node = Node(num)

        if head == None:
            head = node
        else:
            temp = head
            head = node
            head.next = temp

    if carry != 0:
        node = Node(carry)
        temp = head
        head = node
        head.next = temp

    return head


def print_node_list(head: Node):
    if not head:
        return
    temp = head
    while (temp):
        print(f'{temp.data}', end=" ")
        temp = temp.next
    print()


def main():
    for index, data in tests.items():
        l1 = create_linked_list(data[0])
        l2 = create_linked_list(data[1])
        output = addTwoNumbers(l1.head, l2.head)

        if check_result(index, output):
            print(f'Test case {index} is correct:')
            print_node_list(output)
        else:
            print(f'Test case {index} is failed:')


if __name__ == '__main__':
    main()
