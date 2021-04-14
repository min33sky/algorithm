# 연결 리스트 뒤집기


class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 방법 1) 포인터 3개를 활용


# def reverseList_pointer(head):
#     prev = None
#     curr = head

#     while curr != None:
#         next_temp = curr.next

#         curr.next = prev
#         prev = curr
#         curr = next_temp

#     return prev

# # 방법 2) 스택 활용


# def reverseList_stack(head):
#     if head == None:
#         return head

#     stack = []

#     curr = head

#     while curr.next != None:
#         stack.append(curr)
#         curr = curr.next

#     # 역전 후에 첫 노드를 임시 저장하고 반환해야 한다.
#     first = curr

#     while stack:
#         curr.next = stack.pop()
#         curr = curr.next

#     curr.next = None

#     return first

# 방법 3) 재귀 활용


def reverseList_recur(head):
    if head == None or head.next == None:
        return head

    # reversed_list = 뒤집어진 노드의 시작점 (head)

    reversed_list = reverseList_recur(head.next)
    head.next.next = head
    head.next = None

    return reversed_list


node1 = Node(10)
node2 = Node(11)
node3 = Node(12)
node4 = Node(13)

node1.next = node2
node2.next = node3
node3.next = node4

# print(reverseList_pointer(node1).val)
# print(reverseList_stack(node1).val)
print(reverseList_recur(node1).val)
print(node1.next)
print(node2.next.val)
print(node3.next.val)
