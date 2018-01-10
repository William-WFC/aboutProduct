let a = 3;
let b = 6;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);
let str = 'aaa_aa';
let reg1 = /a+/y;
console.log(reg1.exec(str));
console.log(reg1.exec(str));
console.log(reg1.exec(str));
console.log(reg1.exec(str));
console.log(reg1.exec(str));
console.log(reg1.exec(str));
console.log('test');
if (a) {
  console.log(a);
} else if (b) {
  console.log(b);
} else {
  console.log('a / b is false');
}
if (a) {
  console.log(b);
}