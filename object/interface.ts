interface Iperson {
    name: string;
    age: number;
}
class Teacher {
    constructor(public config: Iperson) {   //接口的第一个用法， 作为一个方法的参数的类型声明

    }
}
let t1 = new Teacher ({                     //多传一个属性或少传一个属性都会报错，因为没有满足接口所声明的属性的要求
    name: "xiaoyimei",
    age:18,
});

interface Animal {                          //接口的第二个用法，声明一个方法
    eat();
}
class Sheep implements Animal {            //声明绵羊类实现了Animal接口，当一个类实现了某一个接口的时候，它必须实现这个接口里面的方法
    eat() {
        console.log("i eat grass");
    }
}
class Tiger implements Animal {
    eat() {
        console.log("i eat meat");
    }
}
let sheep = new Sheep();
sheep.eat();