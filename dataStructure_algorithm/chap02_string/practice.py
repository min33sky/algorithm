import string
from collections import defaultdict

# %-포멧

# name = 'Daeseok'

# print('Hello %s' % name)

# age = 30

# print('My name is %s, age is %d' % (name, age))

# str.format 메서드

# name = 'Daeseok'
# age = 30

# print("Hello, my name is {} and I'm {}".format(name, age))
# print("Hello, my name is {1} and I'm {0}".format(age, name))

# whoami = {'name': 'Daeseok', 'age': 30}
# print("Hello, my name is {name} and I'm {age}".format(
#     name=whoami['name'], age=whoami['age']))
# print("Hello, my name is {name} and I'm {age}".format(**whoami))

# s = 'Abbc, cbb a'
# s1 = [ch for ch in s if ch.isalnum()]
# print(s1)
# print(''.join(s1))
# print(''.join(s1).lower())

# s2 = list(filter(str.isalnum, s))
# print(s2)
# print(''.join(s2).lower())

# hashmap = {}
# hashmap['aet'].append('eat')

hashmap = defaultdict(list)
print(hashmap)
hashmap['aet'].append('eat')
print(hashmap)


s = 'abcd22'
result = [c in string.hexdigits for c in s]
print(result)

print(all(result))
