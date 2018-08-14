class Hero {
    constructor (public name:string, public code:number) {
        this.name = name;
        this.code = code;
    }
    printHero () {
        console.log(`i'm ${this.name}, my code is ${this.code}`);
    }
}
let heroes: Array<Hero> = [];            //比如声明一个数组，在数组后面用尖括号声明一个泛型，这个泛型规定数组里面的值只能为某一种类型。
heroes[0] = new Hero("batman", 1);
heroes[1] = new Hero("superman", 2);


//泛型函数
//我们给identity添加了类型变量T。 
//T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。
function identity<T>(arg: T): T {              //这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
    return arg;
}
// 第一种是，传入所有的参数，包含类型参数：
let output0 = identity<string>("myString");
//第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output1 = identity("myString");