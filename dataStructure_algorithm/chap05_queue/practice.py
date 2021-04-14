# 리스트를 활용
from collections import deque
queue = []
queue.append('a')
queue.append('b')
queue.append('c')
print(queue)

queue.pop(0)
print(queue)
queue.pop(0)
print(queue)


queue = deque()

queue.append('a')
queue.append('b')
queue.append('c')

print(queue)

print(queue.popleft())
print(queue)
