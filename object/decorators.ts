//下面是使用类装饰器(@sealed)的例子，应用在Greeter类
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
//类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
function sealed(constructor: Function) {
  Object.seal(constructor);                  //当@sealed被执行的时候，它将密封此类的构造函数和原型。
  Object.seal(constructor.prototype);
}
let greeter = new Greeter("xiaoyimei");
console.log(greeter.greet());


//如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//extends 是关键字, 这个关键字可以实现泛型约束。
//{new(...args:any[]):{}} 是用来描述约束条件的。
//new (...args: any[]) 是 a mixin constructor type， mixin constructor type 是 TypeScript 2.2 新增
//new (...args: any[]) 表示 传入的类型是 mixin constructor type
//:{} 表示 这个 a mixin constructor type 返回值类型 是 对象
  return class extends constructor {
      newProperty = "new property";
      hello = "override";
  }
}

@classDecorator
class Greeter1 {
  property = "property";
  hello: string;
  constructor(m: string) {
      this.hello = m;
  }
}
console.log(new Greeter1("world").hello);

//angular中的类装饰器
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',                          //样式选择器，它可以在一个复杂的视图模板中识别出当前component.
//   templateUrl: './app.component.html',           //视图模板的url链接
//   styleUrls: ['./app.component.css']             //运用在当前component中的一组样式表的url列表
// })
// export class AppComponent {
//   title = 'Tour of Heroes';
// }

