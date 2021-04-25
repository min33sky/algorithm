# 0을 10개 가지는 리스트 초기화
py_list_zeros_1 = [0 for _ in range(10)]
print(py_list_zeros_1)

py_list_zeros_2 = [0] * 10
print(py_list_zeros_2)

# py_list_1에 py_list_2의 [4,5,6]을 확장한다.
py_list_1 = [1, 2, 3]
py_list_2 = [4, 5, 6]
py_list_1.extend(py_list_2)
print(py_list_1)

# py_list의 3번째 위치에 4 요소를 추가하기
py_list = [1, 2, 3]
py_list.insert(3, 4)
print(py_list)
