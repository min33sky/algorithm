# 순환 검출 (Cycle Detection)

class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# 방법 1) 이중 순회를 통해서 찾기
def hasCycle_roop(head):
    outer = head
    node_cnt = 0

    while outer != None and outer.next != None:
        outer = outer.next
        node_cnt += 1

        visit = node_cnt
        inner = head

        matched = 0

        while visit > 0:
            if outer != inner:
                inner = inner.next

            if outer == inner:
                matched += 1

            if matched == 2:
                return True

            visit -= 1

    return False

# 방법 2) Set을 이용해서 풀이


def hasCycle_set(head):
    curr = head
    node_set = set()

    while curr != None:
        if curr in node_set:
            return True

        node_set.add(curr)
        curr = curr.next

    return False

# 방법 3) fast/slow pointer pattern


def hasCycle_fs(head):
    slow = head
    fast = head

    while slow.next != None and fast.next != None:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False


node1 = Node(10)
node2 = Node(11)
node3 = Node(12)
node4 = Node(13)
node5 = Node(14)
node6 = Node(15)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node3

print(hasCycle_roop(node1))
print(hasCycle_set(node1))
print(hasCycle_fs(node1))
