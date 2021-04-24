from random import randint

# 버블 정렬


def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        # 정렬된 배열인지 체크
        done_sort = True

        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

                done_sort = False

        # 정렬된 배열일 경우 순회 중지
        if done_sort:
            break

    return arr


input_arr = [8, 2, 6, 4, 5]
print(f'{bubble_sort(input_arr)}')

# 삽입 정렬


def insertion_sort(arr):
    n = len(arr)

    for i in range(1, n):
        key_item = arr[i]

        j = i - 1

        # 현재 선택된 값의 이전 요소들을 비교한다.
        while j >= 0 and arr[j] > key_item:
            # 현재값보다 작은 값을 찾을 때까진 현재 요소를 뒤로 이동시킴
            arr[j+1] = arr[j]
            j -= 1

        arr[j + 1] = key_item

    return arr


input_arr = [8, 2, 6, 4, 5]
print(f'{insertion_sort(input_arr)}')


# 병합 정렬

# 병합 함수
def merge(left, right):
    left_len = len(left)
    right_len = len(right)

    result = []

    left_index = right_index = 0

    while len(result) < left_len + right_len:
        if left[left_index] <= right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1

        # append()는 리스트 자체를 추가하기때문에 extend()로 배열의 요소로 추가
        if right_index == right_len:
            result.extend(left[left_index:])
            break

        if left_index == left_len:
            result.extend(right[right_index:])
            break

    return result

# 병합 정렬


def merge_sort(arr):
    n = len(arr)
    if n < 2:
        return arr

    min_index = n // 2
    left = merge_sort(arr[:min_index])
    right = merge_sort(arr[min_index:])

    return merge(left, right)


print(f'merge_sort: {merge_sort([8,2,6,4,5])}')

# 퀵 정렬 (피벗을 무작위로 선정)


def quicksort(arr):
    arr_len = len(arr)
    if arr_len < 2:
        return arr

    low, same, high = [], [], []

    pivot = arr[randint(0, arr_len - 1)]

    for item in arr:
        if item < pivot:
            low.append(item)
        elif item == pivot:
            same.append(item)
        elif item > pivot:
            high.append(item)

    return quicksort(low) + same + quicksort(high)


input_array = [8, 2, 6, 4, 5]
print(f'quickSort: {quicksort(input_array)}')

# 팀 정렬 (파이썬, 자바에서 사용: 삽입 정렬과 병합 정렬을 섞어서 사용)


# 1) 이진 검색
def binary_search(arr, key, start, end):
    if end - start <= 1:
        if arr[start] > key:
            return start - 1
        else:
            return start

    mid = (start + end) // 2

    if arr[mid] < key:
        return binary_search(arr, key, mid, end)
    elif arr[mid] > key:
        return binary_search(arr, key, start, mid)
    else:
        return mid


def insertion_sort(arr, run_s=0, run_e=None):
    if run_e is None:
        run_e = len(arr) - 1

    for i in range(run_s + 1, run_e + 1):
        v = arr[i]
        pos = binary_search(arr, v, run_s, i) + 1

        for k in range(i, pos, -1):
            arr[k] = arr[k-1]

        arr[pos] = v


def timsort(arr):
    min_run = 32
    n = len(arr)

    for i in range(0, n, min_run):
        insertion_sort(arr, i, min((i + min_run - 1), n-1))

    size = min_run
    while size < n:
        for start in range(0, n, size * 2):
            mid = start + size - 1
            end = min((start + size * 2 - 1), (n - 1))

            merged = merge(arr[start:mid + 1], arr[mid + 1:end + 1])
            arr[start:start + len(merged)] = merged

        size *= 2

    return arr


input_array = [randint(0, 100) for _ in range(100)]
res = timsort(input_array)
print(f'sorted {res}')
print(f'{sorted(input_array) == res}')
