let sum1 = () => {

}
let sum2 = param2 => {
    return param2;
}
let sum3 = (param1, param2) => {
    return param1 + param2;
}

let myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(value => value%2 == 0));

function getName(name) {
    this.name = name;
    setInterval(function(){
        console.log(`name is: ${this.name}`);
    }, 1000);
}
getName("ChangHong");

function getNameByArrow(name) {
    this.name = name;
    setInterval(() => {
        console.log(`arrowname is: ${this.name}`);
    }, 1000);
}
getNameByArrow("ChangHong");
