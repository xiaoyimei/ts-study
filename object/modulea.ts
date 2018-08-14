//所谓的模块在ts里就是文件，一个文件就是一个模块。并没有什么特殊的关键字来标明某一个东西就是一个模块。
//模块内部通过export和import导出导入关键字来支持模块的特性。一个模块里边既可以export，也可以import。
import { func3 } from "./moduleb";
export let prop1;                        //声明对外暴露的变量

let prop2;                               //声明不对外暴露的变量

export function func1 () {

}

function func2 () {

}

export class Clazz1{

}

class Clazz2{

}
func3()