"use strict";
function MakeBiryani() {
    let rice = 1;
    let water = 1;
    let shan_masala = 1;
    let biryani = rice + water + shan_masala;
    return biryani;
}
let order_One = MakeBiryani();
console.log("Your order is ready enjoy your biryani made by " + order_One + " items");
// table function
function tableOfFive(num) {
    for (let index = 1; index < 11; index++) {
        let ans = num * index;
        console.log(num + " X " + index + " = " + ans);
    }
}
tableOfFive(5);
