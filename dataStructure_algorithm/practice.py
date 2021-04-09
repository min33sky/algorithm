# two = []

# two.append([])
# two.append([])

# print(two)

# two[0].append(1)
# two[0].append(2)
# print(two)
# two[1].append(3)
# two[1].append(4)

# one = [0] * 10
# print(one)

# one_two = [[0 for i in range(3)]] * 3
# print(one_two)

# pyramid = []
# for i in range(5):
#     column = []
#     j = i
#     while j >= 0:
#         column.append(0)
#         j -= 1
#     pyramid.append(column)

# print(pyramid)

# hashmap = {}
# key = 3
# print(f'{hashmap.get(key)} ')

# py_list = [1, 2, 3, 4, 5, 6, 7]
# py_list[2:4] = reversed(py_list[2:4])
# print(py_list)

# py_list = [1, 2, 3, 4, 5, 6, 7]
# py_list[2:4] = py_list[2:4][::-1]
# print(py_list)

# number_set = set([1, 2, 3])
# print(number_set)
# print(3 in number_set)
# print(4 in number_set)

# print(bin(3))
# for i in range(3):
#     print(f'{bin(i)}')

# res = []
# sub = []
# res.append(sub)
# print(res)

# sub.append(1)
# print(sub)

# print(res)

# res.append((sub))
# print(res)

# sub.append(2)
# print(sub)

# print(res)

# py_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# res = [item * 2 for item in py_list]
# print(res)

# res = [item for item in py_list if item > 5]
# print(res)

# res = [item * 2 if item > 5 else item * 3 for item in py_list]
# print(res)

# print(bin(0 | 8))
# print(bin(1 | 8))
# print(bin(2 | 8))

def outer(number):
    outer_num = 5

    def inner():
        print(f'total: {number + outer_num}')
    inner()


print(outer(7))
