import heapq

# 리스트 heap 생성
heap = []

# heapq를 이용해 데이터 추가
heapq.heappush(heap, 35)
heapq.heappush(heap, 33)
heapq.heappush(heap, 42)
heapq.heappush(heap, 10)
heapq.heappush(heap, 14)

# 최솟값이 맨 앞
print(heap)

# 최솟값 꺼내기
print(heapq.heappop(heap))
print(heap)

# 최솟값 확인 (삭제 X)
print(heap[0])

# 기존 리스트를 heap으로 만들기
heap = [35, 44, 42, 10, 14]
heapq.heapify(heap)
print('heap: ', heap)