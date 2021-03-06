let a = 3;
let b = 6;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);
let str = 'aaa_aa';
let reg1 = /a+/y;
console.log(reg1.exec(str));

let arr = [1, 3, 5];
for (let i of arr) {
  console.log(i);
}
for (let i = 1; i < 1e7; i * 10) {
  console.log(i);
}

function knapsack(weights, values, W) {
  var n = weights.length;
  var f = new Array(n)
  f[-1] = new Array(W + 1).fill(0)
  console.log(f[-1] = new Array(W + 1).fill(0))
  var selected = [];
  for (var i = 0; i < n; i++) { //注意边界，没有等号
    f[i] = [] //创建当前的二维数组
    for (var j = 0; j <= W; j++) { //注意边界，有等号
      if (j < weights[i]) { //注意边界， 没有等号
        f[i][j] = f [i - 1][j] //case 1
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]); //case 2
      }
    }
  }
  var j = W, w = 0
  for (var i = n - 1; i >= 0; i--) {
    if (f[i][j] > f[i - 1][j]) {
      selected.push(i)
      console.log("物品", i, "其重量为", weights[i], "其价格为", values[i])
      j = j - weights[i];
      w += weights[i]
    }
  }
  console.log("背包最大承重为", W, " 现在重量为", w, " 总价值为", f[n - 1][W])
  return [f[n - 1][W], selected.reverse()]
}

var a = knapsack([2, 3, 4, 1], [2, 5, 3, 2], 5)
console.log(a)
var b = knapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10)
