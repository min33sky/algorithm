# 두 수 더하기

class Node:
    def __init__(self, val=0):
        self.val = val
        self.next = None

# 방법 1) 스택 사용


def addTwoNumbers_stack(l1: Node, l2: Node):
    stack1 = []
    stack2 = []

    l1_curr = l1
    l2_curr = l2

    head = None

    while l1_curr != None:
        stack1.append(l1_curr.val)
        l1_curr = l1_curr.next

    while l2_curr != None:
        stack2.append(l2_curr.val)
        l2_curr = l2_curr.next

    # 자리 올림 수
    carry = 0

    while stack1 or stack2:
        num1 = stack1.pop() if stack1 else 0
        num2 = stack2.pop() if stack2 else 0

        carry, num = divmod(num1 + num2 + carry, 10)

        node = Node(num)

        if head == None:
            head = node
        else:
            temp = head
            head = node
            node.next = temp

    # 마지막 계산(가장 높은 자리)에도 자리 올림수가 있을 경우
    if carry != 0:
        node = Node(carry)
        temp = head
        head = node
        node.next = temp

    return head


# 방법 2) 문자열 뒤집기

def addTwoNumbers_reverse(l1: Node, l2: Node):
    def reverse(head):
        prev = None
        curr = head

        while curr != None:
            next_temp = curr.next
            curr.next = prev

            prev = curr
            curr = next_temp

        return prev

    r_l1 = reverse(l1)
    r_l2 = reverse(l2)

    res_head = None

    carry = 0

    while r_l1 != None or r_l2 != None:
        num1 = 0
        num2 = 0

        if r_l1 != None:
            num1 = r_l1.val
            r_l1 = r_l1.next

        if r_l2 != None:
            num2 = r_l2.val
            r_l2 = r_l2.next

        carry, num = divmod(num1 + num2 + carry, 10)

        node = Node(num)

        if res_head == None:
            res_head = node
        else:
            temp = res_head
            res_head = node
            node.next = temp

    if carry != 0:
        node = Node(carry)
        temp = res_head
        res_head = node
        node.next = temp

    return res_head

# 방법 3) 문자열로 변환해서 풀기


def addTwoNumbers_string(l1: Node, l2: Node):
    num1_str = ''
    num2_str = ''

    l1_curr = l1
    l2_curr = l2

    while l1_curr != None:
        num1_str = num1_str + str(l1_curr.val)
        l1_curr = l1_curr.next

    while l2_curr != None:
        num2_str = num2_str + str(l2_curr.val)
        l2_curr = l2_curr.next

    res_num = int(num1_str) + int(num2_str)

    # dummy node
    head = Node(-1)
    curr = head

    for num_ch in str(res_num):
        curr.next = Node(int(num_ch))
        curr = curr.next

    curr.next = None
    return head.next


node1 = Node(7)
node2 = Node(2)
node3 = Node(5)
node4 = Node(4)

node5 = Node(2)
node6 = Node(8)
node7 = Node(3)
node8 = Node(3)

node1.next = node2
node2.next = node3
node3.next = node4

node5.next = node6
node6.next = node7
node7.next = node8

# print(addTwoNumbers_stack(node1, node5).val)
# print(addTwoNumbers_stack(node1, node5).next.val)
# print(addTwoNumbers_stack(node1, node5).next.next.val)
# print(addTwoNumbers_stack(node1, node5).next.next.next.val)
# print(addTwoNumbers_stack(node1, node5).next.next.next.next.val)

print(addTwoNumbers_string(node1, node5).val)
print(addTwoNumbers_string(node1, node5).next.val)
print(addTwoNumbers_string(node1, node5).next.next.val)
print(addTwoNumbers_string(node1, node5).next.next.next.val)
print(addTwoNumbers_string(node1, node5).next.next.next.next.val)
