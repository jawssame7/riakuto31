// var で定義された変数のスコープは
// 関数単位。
// なので、制御構文のブロックをすり抜けてしまう。
// 通常、プログラム言語仕様でのスコープはブロック単位。

var n = 0;

if (true) {
    var n = 50;
    var m = 100;
    console.log(n);
}

console.log(n);
console.log(m);