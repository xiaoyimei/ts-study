//Rest and Spread操作符就是. . .，可以用来传任意数量的参数，实际上传进去的参数就是一个数组。
function func1(...args) {
    args.forEach(function (arg) {
        console.log(arg);
    })
}
func1(1, 2, 3);
func1(7, 8, 9, 10, 11);

//. . .还可以反过来用，函数参数个数一定，在调用函数时用…传参。它可以把一个任意长度的数组，转化成一个固定数量参数的方法的调用。
function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
let args = [1, 2];
func2(...args);                                      //现在的typescript还不支持，所以会报错，但实际上生产的js是可以正常运行的
let args2 = [7, 8, 9, 10, 11];
func2(...args2);