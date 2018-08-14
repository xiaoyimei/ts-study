let my_name: string = "yimei xiao"

function defaultTest (a: string, b: string, c: string = "jojo") {
    console.log(a);
    console.log(b);
    console.log(c);
}
defaultTest("xixi", "haha")

function optionTest (a: string, b?: string, c: string = "jojo") {
    console.log(a);
    if (b != undefined) {
        console.log(b.length);
    }
    console.log(c);
}
optionTest("option")