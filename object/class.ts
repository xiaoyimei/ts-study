//声明
class Person {
    constructor () {
        console.log("haha");
    }
    name;
    eat () {
        console.log("i'm eating");
    }
}
// let p1 = new Person();
// p1.name = "batman";
// p1.eat();

// let p2 = new Person();
// p2.name = "superman";
// p2.eat();
// console.log(p1.name, p2.name);

//构造函数用法举例：在实例化一个学生的时候必须为它指定一个名字。
class Student {
    // name;
    constructor (public name:string) {              //public相当于声明了一个类的属性
        // this.name = name;
    }
    printName () {
        console.log(this.name);
    }
}
let s1 = new Student("xiaoyimei");
s1.printName();

//类的继承
class Employee extends Student {
    constructor(name:string, code:number) {
        super(name);                                  //super，用来调用父类的构造函数或者方法，如果子类要写构造函数实现某些功能，子类的构造函数必须调用父类的构造函数，这是硬性的规定，就需要super来调用。
        this.code = code; 
    }
    code:number;
    work () {
        super.printName();                            //Super还可以用来调用父类的其他方法。
        console.log(`i'm ${this.name}, my code is ${this.code}, i'm working`)
    }
}
let e1 = new Employee("xiaoyimei", 1);
// e1.work();