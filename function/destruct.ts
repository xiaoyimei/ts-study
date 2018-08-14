function getStock() {
    return {
        code: "ChangHong",
        price: {
            startPrice: 100,
            endPrice: 200
        },
        aaa: "xixi",
        bbb: "haha"
    }
}
//javascript写法
// let stock = getStock();
// let code = stock.code;
// let price = stock.price;

//typescript写法
let {code, price} = getStock();
console.log(code);
console.log(price);

//第一就是表达式（大括号里面）的变量要跟对象里边的变量名相等，如果要改对象里的变量名，可以在表达式里通过冒号给变量起一个别名。
let {code: codex, price: pricex} = getStock(); 
console.log(codex);
console.log(pricex);

//第二个就是获取嵌套的对象的属性，在冒号后面再加一个析构表达式。
let {price: {endPrice}} = getStock();
console.log(endPrice);

//第三如果对象里面还有一些其他属性，是不会影响析构表达式的。


//获取数组的值的析构表达式的符号是[]，获取对象的值的析构表达式的符号是{}。
let array1 = [1, 2, 3, 4];
function destructArray([number1, number2, ...others]) {            //方法的参数是一个析构表达式
    console.log("number1", number1);
    console.log("number2", number2);
    console.log("others", others);
}
destructArray(array1);
