from typing import List
import heapq

# 3번째 큰 수

# 방법 1) 정렬


def thirdMax(nums: List[int]):
    cnt = 0
    third_max = 0

    check_dup = set()

    nums.sort(reverse=True)
    third_max = nums[0]

    for num in nums:
        if num in check_dup:
            continue

        check_dup.add(num)

        # 3번째로 큰수가 정해졌으므로 리턴
        if cnt == 2:
            third_max = num
            break

        cnt += 1

    return third_max


print(thirdMax([2, 2, 2, 2, 4]))
print(thirdMax([3, 2, 3, 3, 4, 5, 4]))


# 방법 2) 우선순위 큐

def thirdMax2(nums: List[int]):
    prio_queue = [item * -1 for item in list(dict.fromkeys(nums))]
    heapq.heapify(prio_queue)
    print(prio_queue)

    # 힙은 순서대로 정렬된게 아니기 때문에 루트 노드를 제거하는 방식으로 3번째 수를 구한다.
    if len(prio_queue) > 2:
        cnt = 2

        while cnt > 0:
            heapq.heappop(prio_queue)
            cnt -= 1

    return prio_queue[0] * -1


print(thirdMax2([2, 2, 2, 2, 4]))
print(thirdMax2([3, 2, 3, 3, 4, 5, 4]))
