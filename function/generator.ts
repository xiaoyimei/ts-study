//声明Generator函数就是在function后面加一个*号。Generator函数通过关键字yield来控制函数的暂停，就像断点一样。
function* doSomething() {
    console.log("start");
    yield;
    console.log("finish");
}
doSomething();
//正确的调用generator函数的方法, 必须声明为一个变量：
// let generator = doSomething();
// generator.next();
// generator.next();

//举一个实用的例子，在股票的价格低于某一个数的时候去自动的买股票。
function* getStockPrice(stock) {
    while (true) {
        yield Math.random()*100;
    }
}
let priceGenerator = getStockPrice("ChangHong");
let limitPrice = 15;
let stockPrice = 100;
while (stockPrice > limitPrice) {
    stockPrice = priceGenerator.next().value;
    console.log(`the generator return ${stockPrice}`);
}
console.log(`buying at ${stockPrice}`)