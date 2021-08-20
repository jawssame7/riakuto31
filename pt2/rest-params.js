const showNames = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);

}

showNames('John', 'Jane', 'Johnny', 'Jenny', 'Julia');

//　可変長引数 Rest Parameter

// 最後の引数を配列としてあつかう

// 実行結果
// John
// Jane
// [ 'Johnny', 'Jenny', 'Julia' ]