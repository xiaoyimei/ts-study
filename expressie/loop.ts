let myArray = [1, 2, 3, 4];
myArray.desc = "four number";

////For each循环会循环数组的值，但是会把属性忽略掉，for each不支持break关键字打破循环
// myArray.forEach(value => console.log(value));

//for in循环是循环的集合的键值对中的键，for in 会循环出数组的属性，for in支持break跳出循环
// for( let n in myArray) {
//     console.log(n);
// }

//for of循环是循环的数组的值，会忽略掉属性，支持break跳出循环
// for(let n of myArray) {
//     if (n > 2) break;
//     console.log(n);
// }

//For of循环还可以用在字符串上，当用在字符串上时就相当于把每一个字符遍历一遍。
for(let n of "four number") {
    console.log(n);
}