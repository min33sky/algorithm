import re

'''
    정규표현식의 문자 클래스와 메타 문자

    [0-9]: \d -> 숫자와 매치
    [^0-9]: \D -> 숫자를 제외한 나머지 문자와 매치
    [ \t\n\r\f\v]: \s -> 모든 공백 문자
    [^ \t\n\r\f\v]: \S -> 공백 문자를 제외한 나머지와 매치
    [a-zA-Z0-9]: \w -> 영숫자와 매치
    [^a-zA-Z0-9]: \W -> 영숫자를 제외한 나머지와 매치
'''

'''
    전화번호의 패턴

    (02) 123 - 1234
    (031) 2233 - 1222
    02 - 123 - 3333
    02-123-3333
    022 123 1234

    1. 지역번호에 대한 패턴에서 시작 괄호 '('가 0 혹은 1개 있다. : \(?
    2. 지역번호는 2~3자리 숫자이다. : \d{2,3}
    3. 지역번호 끝 괄호(')')가 0 혹은 1개 있다. : \)?
    4. 지역번호와 다음 자리 숫자 간의 공백이 0개 혹은 1개 있다. : \<space>?
    5. 지역번호와 가운데 번호 사이에 대시('-')가 0개 혹은 1개 있다. : \-?
    6. 가운데 번호는 3~4자리 숫자이다. : \d{3,4}
    7. 가운데 번호와 마지막 번호 사이 공백이 0개 혹은 1개 있다. : \<space>?
    8. 가운데 번호와 마지막 번호 사이에 대시('-')가 0개 혹은 1개 있다. : \-?
    9. 마지막 번호는 3~4자리 숫자다. : \d{3,4}

    ^\(?\d{2,3}\)?\ ?\-?\ ?\d{3,4}\ ?\-?\ ?\d{3,4}$
'''

# r-string: 문자열 그대로 사용하게 해준다.
pattern = re.compile(r'\w{3,4}')
print(pattern)

pattern = re.compile(r'[a-z]+')
print(pattern.match('helloworld'))
m = pattern.match('HelloWorld')
print(m)

pattern = re.compile(r'[a-z]+', re.IGNORECASE)
print(pattern.match('HelloWorld'))

pattern = re.compile(r'[a-z]+')
print(pattern.search('This is for search()'))
print(pattern.findall('This is for findall()'))
