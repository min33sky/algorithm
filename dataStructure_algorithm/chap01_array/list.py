# 비어 있는 리스트 선언
import array as arr
py_list_empty = []
print(py_list_empty)

# 1, 2, 3, 4, 5의 요소를 가지는 리스트 선언
py_list = [1, 2, 3, 4, 5]
print(py_list)

# 0을 10개 가지는 리스트 초기화
py_list_zeros_1 = [0 for i in range(10)]
print(py_list_zeros_1)

py_list_zeros_2 = [0] * 10
print(py_list_zeros_2)

# py_list를 1,2,3,4,5로 초기화하고 6요소를 추가(append)한다.
py_list = [1, 2, 3, 4, 5]
py_list.append(6)
print(py_list)

# py_list1에 py_list2의 [4,5,6]을 추가(append)한다.
py_list_1 = [1, 2, 3]
py_list_2 = [4, 5, 6]
py_list_1.append(py_list_2)
print(py_list_1)

# py_list_1에 py_list_2의 [4,5,6]을 확장(extend)한다.
py_list_1 = [1, 2, 3]
py_list_2 = [4, 5, 6]
py_list_1.extend(py_list_2)
print(py_list_1)

# py_list의 3번째 위치에 4 요소를 추가한다.
py_list = [1, 2, 3]
py_list.insert(3, 4)
print(py_list)

# py_list에 2의 요소를 삭제한다.
# list에는 중복된 값이 있을 수 있고, 여러 값들 중에 가장 앞선 인덱스의 요소가 삭제된다.
py_list = [1, 2, 3, 2, 4, ]
py_list.remove(2)
print(py_list)

# py_list의 모든 요소를 삭제한다.
py_list = [1, 2, 3]
py_list.clear()
print(py_list)

# py_list의 2번째 있는 요소를 삭제한다.
py_list = [1, 2, 3]
del py_list[1]
print(py_list)

# py_list를 초기화
py_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# py_list의 인덱스 3에서 8까지 자르기
print(py_list[3:8])

# py_list의 처음 요소부터 -6(4) 인덱스까지 자르기
print(py_list[:-6])

# 콜론(:) 연산을 2개 사용했다면 마지막은 스텝(step)으로 사용한다.
# 리스트를 역순으로 얻어올 수 있도록 한다.
print(py_list[:: -1])

# array 모듈을 사용할 것이며, 해당 모듈은 arr이라는 이름으로 접근하도록 하겠다.

# 정수형 배열을 생성하고 초깃값으로 [1,2,3,]을 가진다.
int_arr = arr.array('i', [1, 2, 3])
print(int_arr)

print('elements in array : ', end="")
for i in range(0, len(int_arr)):
    print(int_arr[i], end=" ")
print()

# 1의 위치에 4의 값을 추가
int_arr.insert(1, 4)

print('elements after insertion : ', end=" ")
for i in (int_arr):
    print(i, end=" ")
print()

# 1을 값을 찾아 제거
int_arr.remove(1)

print('elements after delete \"1\" in array: ', end=" ")
for i in (int_arr):
    print(i, end=" ")
print()


int_list = [1, 2, 3, 4, 3, 6, 7, 4, 5, 10]

# list의 요소를 배열로 변환
int_arr = arr.array('i', int_list)

print('elements in array : ')
for i in (int_arr):
    print(i, end=" ")
print()

# 3의 값이 가장 처음 나타나는 배열의 인덱스를 출력
print('the index of 1st occurrence of 3 is : ', end="")
print(int_arr.index(3))

# 배열 4번째 요소의 값을 5로 업데이트
int_arr[4] = 5
print('elements after updation : ', end="")
for i in (int_arr):
    print(i, end=" ")
print()
