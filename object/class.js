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
//声明
var Person = /** @class */ (function () {
    function Person() {
        console.log("haha");
    }
    Person.prototype.eat = function () {
        console.log("i'm eating");
    };
    return Person;
}());
// let p1 = new Person();
// p1.name = "batman";
// p1.eat();
// let p2 = new Person();
// p2.name = "superman";
// p2.eat();
// console.log(p1.name, p2.name);
//构造函数用法举例：在实例化一个学生的时候必须为它指定一个名字。
var Student = /** @class */ (function () {
    // name;
    function Student(name) {
        this.name = name;
        // this.name = name;
    }
    Student.prototype.printName = function () {
        console.log(this.name);
    };
    return Student;
}());
var s1 = new Student("xiaoyimei");
s1.printName();
//类的继承
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    Employee.prototype.work = function () {
        _super.prototype.printName.call(this); //Super还可以用来调用父类的其他方法。
        console.log("i'm " + this.name + ", my code is " + this.code + ", i'm working");
    };
    return Employee;
}(Student));
var e1 = new Employee("xiaoyimei", 1);
// e1.work();
