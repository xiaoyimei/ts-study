let myName = "yimei xiao";
let getName = function () {
    return "yimei xiao";
}
console.log(`Hello ${myName}`);
console.log(`Hello ${getName()}`);
console.log(
    `<div>
        <span>${myName}</span>
        <span>${getName()}</span>
        <div>xxx</div>
    </div>`
)