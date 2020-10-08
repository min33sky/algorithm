####################### 수행 시간 측정 소스 코드
import time

start_time = time.time()  # 측정 시작

for i in range(100):
    print(i, end=" ")

end_time = time.time()  # 측정 종료

print("time :", end_time - start_time)


##################### 선택 정렬과 기본 정렬 라이브러리의 수행 시간 비교

from random import randint
import time

# 배열에 3000개 정수 삽입
array = []
for _ in range(3000):
    array.append(randint(1, 100))

# 선택 정렬 프로그램 성능 측정
start_time = time.time()

# 선택 정렬 프로그램 소스코드
for i in range(len(array)):
    min_index = i  # 가장 작은 원소의 인덱스
    for j in range(i + 1, len(array)):
        if array[min_index] > array[j]:
            min_index = j
    array[i], array[min_index] = array[min_index], array[i]  # 스왑

end_time = time.time()  # 측정 종료
print("선택 정렬 성능 측정:", end_time - start_time)  # 수행 시간 출력


# 배열에 3000개 정수 삽입
array = []
for _ in range(3000):
    array.append(randint(1, 100))

# 기본 정렬 라이브러리 성능 측정
start_time = time.time()

# 기본 정렬 라이브러리 사용
array.sort()


end_time = time.time()
print("기본 정렬 라이브러리 선으 측정:", end_time - start_time)  # 수행 시간 출력

