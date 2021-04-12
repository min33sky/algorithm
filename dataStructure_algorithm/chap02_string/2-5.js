const regIpv4 = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))$/g;
const regIpv6 = /^(([0-9a-f]{1,4})\:){7}(([0-9a-f]{1,4}))$/;

console.log(regIpv4.test('127.0.0.1'));
console.log('127.0.0.1'.match(regIpv4));
console.log(regIpv4.test('2020:0bc3:0000:0000:853e:0777:1234:22c1'));
console.log(regIpv6.test('2020:0bc3:0000:0000:853e:0777:1234:22c1'));
