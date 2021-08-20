const showAllArgs = (...args) => {
    console.log(args);
}

console.log(showAllArgs('A', 'b', 'C', 'D', 'E', 'F'));

// 第一引数から可変長引数を設定することもできる。
// [ 'A', 'b', 'C', 'D', 'E', 'F' ]