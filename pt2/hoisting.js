// 変数aを宣言する前に代入してしまっている。
// letやconstではエラーとなるが,varだと許される。
// これを「巻き上げ(hosting)」という
a = 100;
console.log(a);

var a;