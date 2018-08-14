var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//下面是使用类装饰器(@sealed)的例子，应用在Greeter类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());
//类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
function sealed(constructor) {
    Object.seal(constructor); //当@sealed被执行的时候，它将密封此类的构造函数和原型。
    Object.seal(constructor.prototype);
}
var greeter = new Greeter("xiaoyimei");
console.log(greeter.greet());
//如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
function classDecorator(constructor) {
    //extends 是关键字, 这个关键字可以实现泛型约束。
    //{new(...args:any[]):{}} 是用来描述约束条件的。
    //new (...args: any[]) 是 a mixin constructor type， mixin constructor type 是 TypeScript 2.2 新增
    //new (...args: any[]) 表示 传入的类型是 mixin constructor type
    //:{} 表示 这个 a mixin constructor type 返回值类型 是 对象
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeter1 = /** @class */ (function () {
    function Greeter1(m) {
        this.property = "property";
        this.hello = m;
    }
    Greeter1 = __decorate([
        classDecorator
    ], Greeter1);
    return Greeter1;
}());
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
