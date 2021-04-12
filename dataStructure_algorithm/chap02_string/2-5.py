import string
import re

# IPv4와 IPv6 구별하기


# 방법 1) 조건에 따라 분류하며 풀기
def check_ip_v4(ipv4):
    ipnums = ipv4.split('.')

    for num in ipnums:
        if len(num) == 0 or len(num) > 3:
            return 'Neither'

        if (len(num) != 1 and num[0] == '0') or not num.isdigit() or int(num) > 255:
            return 'Neither'

    return 'IPv4'


def check_ip_v6(ipv6):
    ipnums = ipv6.split(':')

    for num in ipnums:
        if len(num) == 0 or len(num) > 4 or \
                not all(c in string.hexdigits for c in num):
            return 'Neither'
    return 'IPv6'


def validIPAddress(IP):
    if IP.count('.') == 3:
        return check_ip_v4(IP)
    elif IP.count(':') == 7:
        return check_ip_v6(IP)

    return 'Neither'


print(validIPAddress('127.0.0.1'))
print(validIPAddress('127.01.0.1'))
print(validIPAddress('2020:0bc3:0000:0000:853e:0777:1234:22c1'))


# 방법 2) 정규 표현식 사용

def validIPAddressRegexp(IP):
    # 0~255
    IPV4 = '(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])'

    ipv4 = \
        re.compile(r'^({p}\.){{3}}{p}$'.format(p=IPV4))

    if ipv4.match(IP):
        return 'IPv4'

    IPV6 = '([0-9a-f]{1,4})'

    ipv6 = \
        re.compile(r'^({p}\:){{7}}{p}$'.format(p=IPV6), re.IGNORECASE)

    if ipv6.match(IP):
        return 'IPv6'

    return 'Neither'


print(validIPAddress('127.0.0.1'))
print(validIPAddress('127.01.0.1'))
print(validIPAddress('2020:0bc3:0000:0000:853e:0777:1234:22c1'))
