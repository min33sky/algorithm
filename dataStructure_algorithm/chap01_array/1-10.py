from typing import List

# 배열의 회전 (배열의 요소를 K번 앞으로 이동시켜라)

# 방법 1) 단순히 순회하기
nums = [1, 2, 3, 4, 5, 6]


def rotate1(nums: List[int], k: int) -> None:
    for _ in range(k):
        # 마지막 원소를 제일 앞으로 넣고 한 칸씩 뒤로 밀어낸다
        prev = nums[len(nums) - 1]

        for i in range(len(nums)):
            temp = nums[i]
            nums[i] = prev
            prev = temp


rotate1(nums, 2)

print(nums)

# 방법 2) 임시 배열 사용하기
nums = [1, 2, 3, 4, 5, 6]


def rotate2(nums: List[int], k: int) -> None:
    # 같은 크기의 임시 배열 생성
    temp = [0] * len(nums)

    for i, elem in enumerate(nums):
        temp[(i + k) % len(nums)] = nums[i]

    # 1) 직접 대입하기
    for i, elem in enumerate(temp):
        nums[i] = elem

    # 2) 슬라이스 대입을 사용하기
    # nums[:] = temp


rotate2(nums, 3)
print(nums)

# 방법 3) 모든 요소가 교환되도록 순회하기
nums = [1, 2, 3, 4, 5, 6]


def rotate3(nums: List[int], k: int) -> None:
    # 교환된 배열 요소의 개수
    count = 0

    for start in range(len(nums)):
        # 모든 요소가 교환되면 종료
        if count >= len(nums):
            break

        curr_index = start
        prev_elem = nums[start]

        while True:
            # k를 더한 값이 배열의 범위를 넘을 수도 있기 때문에 에러 방지
            next_index = (curr_index + k) % len(nums)

            # Swap
            temp = nums[next_index]
            nums[next_index] = prev_elem
            prev_elem = temp

            # 인덱스 변경 및 카운트 증가
            curr_index = next_index
            count += 1

            # 현재 인덱스가 시작 인덱스와 같을 경우 반복문 종료
            if curr_index == start:
                break


rotate3(nums, 4)
print(nums)

# 방법 4) 뒤집기
nums = [1, 2, 3, 4, 5, 6]


def rotate4(nums: List[int], k: int) -> None:
    # k가 배열 크기 내에 있어야 앞부분, 뒷부분을 나누어 뒤집기가 가능하다
    k = k % len(nums)
    nums[:] = nums[::-1]
    nums[:k] = nums[:k][::-1]
    nums[k:] = nums[k:][::-1]


rotate4(nums, 7)
print(nums)
