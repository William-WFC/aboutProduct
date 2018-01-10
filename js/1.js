let a = 3;
let b = 6;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);
let str = 'aaa_aa';
let reg1 = /a+/y;
console.log(reg1.exec(str));

let arr = [1, 3, 5];
for(let i of arr) {
  console.log(i);
}
for (let i = 1; i < 1e7; i * 10) {
  console.log(i);
}
