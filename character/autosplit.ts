function test (template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}

let myname = "yimei xiao";

let getAge = function () {
    return 18;
}

test`hello my name is ${myname}, i'm ${getAge()}`